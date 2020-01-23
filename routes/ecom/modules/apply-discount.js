'use strict'

const getValidDiscountRules = discountRules => {
  if (Array.isArray(discountRules) && discountRules.length) {
    // validate rules objects
    return discountRules.filter(rule => {
      if (!rule || !rule.discount || !rule.discount.value) {
        return false
      }

      // filter by date first
      const timestamp = Date.now()
      if (rule.date_range) {
        if (rule.date_range.start && new Date(rule.date_range.start).getTime() < timestamp) {
          return false
        }
        if (rule.date_range.end && new Date(rule.date_range.end).getTime() > timestamp) {
          return false
        }
      }
      return true
    })
  }

  // returns array anyway
  return []
}

const matchDiscountRule = (discountRules, params) => {
  // try to match a promotion
  if (params.discount_coupon) {
    // match only by discount coupon
    return {
      discountRule: discountRules.find(rule => rule.discount_coupon === params.discount_coupon),
      discountMatchEnum: 'COUPON'
    }
  }

  // try to match by UTM campaign first
  if (params.utm && params.utm.campaign) {
    const discountRule = discountRules.find(rule => rule.utm_campaign === params.utm.campaign)
    if (discountRule) {
      return {
        discountRule,
        discountMatchEnum: 'UTM'
      }
    }
  }

  // then try to match by customer
  if (params.customer && params.customer._id) {
    const discountRule = discountRules.find(rule => Array.isArray(rule.customer_ids) &&
      rule.customer_ids.indexOf(params.customer._id) > -1)
    if (discountRule) {
      return {
        discountRule,
        discountMatchEnum: 'CUSTOMER'
      }
    }
  }

  // last try to match by open promotions
  return {
    discountRule: discountRules.find(rule => {
      return !rule.utm.campaign && !rule.utm_campaign &&
        (!Array.isArray(rule.customer_ids) || !rule.customer_ids.length)
    }),
    discountMatchEnum: 'OPEN'
  }
}

module.exports = appSdk => {
  return (req, res) => {
    const { storeId } = req
    // body was already pre-validated on @/bin/web.js
    // treat module request body
    const { params, application, customer } = req.body
    // app configured options
    const config = Object.assign({}, application.data, application.hidden_data)

    // params object follows list payments request schema:
    // https://apx-mods.e-com.plus/api/v1/apply_discount/schema.json?store_id=100
    if (params.amount && params.amount.total > 0) {
      const discountRules = getValidDiscountRules(config.discount_rules)
      if (discountRules.length) {
        const { discountRule, discountMatchEnum } = matchDiscountRule(discountRules, params)
        if (discountRule) {
          if (discountRule.cumulative_discount === false && params.amount.discount) {
            // explain discount can't be applied :(
            // https://apx-mods.e-com.plus/api/v1/apply_discount/response_schema.json?store_id=100
            return res.send({
              invalid_coupon_message: params.lang === 'pt_br'
                ? 'A promoção não pôde ser aplicada porque este desconto não é cumulativo'
                : 'This discount is not cumulative'
            })
          }

          // we have a discount to apply \o/
          let discountValue = 0
          const { discount } = discountRule
          const maxDiscount = params.amount[discount.apply_at || 'total']
          if (maxDiscount) {
            // update amount discount and total
            if (discount.type === 'percentage') {
              discountValue = maxDiscount * discount.value / 100
            } else {
              discountValue = discount.value
            }
            if (discountValue > maxDiscount) {
              discountValue = maxDiscount
            }
          }

          // add discount to response object
          // https://apx-mods.e-com.plus/api/v1/apply_discount/response_schema.json?store_id=100
          const label = discountRule.label || params.discount_coupon || `DISCOUNT ${discountMatchEnum}`
          const response = {
            discount_rule: {
              label,
              extra_discount: {
                value: discountValue,
                flags: [discountMatchEnum]
              }
            }
          }
          if (discountRule.description) {
            response.discount_rule.description = discountRule.description
          }

          if (customer && (discountRule.usage_limit > 0 || discountRule.total_usage_limit > 0)) {
            // list orders to check discount usage limits
            return (async function () {
              const url = `/orders.json?fields=_id&extra_discount.app.label=${label}`
              const usageLimits = [{
                // limit by customer
                query: `${url}&buyers._id=${customer._id}`,
                max: discountRule.usage_limit
              }, {
                // total limit
                query: '',
                max: discountRule.total_usage_limit
              }]

              for (let i = 0; i < usageLimits.length; i++) {
                const { query, max } = usageLimits[i]
                if (max) {
                  let countOrders
                  try {
                    // send Store API request to list orders with filters
                    countOrders = await appSdk.apiRequest(storeId, `${url}${query}`).result.length
                  } catch (e) {
                    countOrders = max
                  }

                  if (countOrders >= max) {
                    // limit reached
                    return res.send({
                      invalid_coupon_message: params.lang === 'pt_br'
                        ? 'A promoção não pôde ser aplicada porque já atingiu o limite de usos'
                        : 'The promotion could not be applied because it has already reached the usage limit'
                    })
                  }
                }
              }
              res.send(response)
            })()
          } else {
            return res.send(response)
          }
        }
      }
    }

    // empty response
    res.send({})
  }
}
