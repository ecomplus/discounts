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
        if (rule.date_range.start && new Date(rule.date_range.start).getTime() > timestamp) {
          return false
        }
        if (rule.date_range.end && new Date(rule.date_range.end).getTime() < timestamp) {
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
      return !rule.discount_coupon && !rule.utm_campaign &&
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
    const { params, application } = req.body
    // app configured options
    const config = Object.assign({}, application.data, application.hidden_data)

    // setup response object
    // https://apx-mods.e-com.plus/api/v1/apply_discount/response_schema.json?store_id=100
    const response = {}

    const addDiscount = (discount, flag) => {
      let value
      const maxDiscount = params.amount[discount.apply_at || 'total']
      if (maxDiscount) {
        // update amount discount and total
        if (discount.type === 'percentage') {
          value = maxDiscount * discount.value / 100
        } else {
          value = discount.value
        }
        if (value > maxDiscount) {
          value = maxDiscount
        }
      }

      if (response.discount_rule) {
        // accumulate discount
        const extraDiscount = response.discount_rule.extra_discount
        extraDiscount.value += value
        if (extraDiscount.flags.length < 20) {
          extraDiscount.flags.push(flag)
        }
      } else {
        response.discount_rule = {
          extra_discount: {
            value,
            flags: [flag]
          }
        }
      }
    }

    if (params.items && params.items.length) {
      // try product kit discounts first
      const kitDiscounts = getValidDiscountRules(config.product_kit_discounts)
      kitDiscounts.forEach((kitDiscount, index) => {
        if (kitDiscount && Array.isArray(kitDiscount.product_ids)) {
          if (kitDiscount.min_quantity) {
            // check total items quantity
            let totalQuantity = 0
            params.items.forEach(({ quantity }) => { totalQuantity += quantity })
            if (totalQuantity < kitDiscount.min_quantity) {
              return
            }
          }

          if (!params.amount || !(kitDiscount.discount.min_amount > params.amount.total)) {
            for (let i = 0; i < kitDiscount.product_ids.length; i++) {
              const productId = kitDiscount.product_ids[i]
              if (productId && !params.items.find(item => item.quantity && item.product_id === productId)) {
                // product not on current cart
                return
              }
            }
            // apply cumulative discount \o/
            addDiscount(kitDiscount.discount, `KIT-${(index + 1)}`)
          }
        }
      })
    }

    const discountRules = getValidDiscountRules(config.discount_rules)
    if (discountRules.length) {
      const { discountRule, discountMatchEnum } = matchDiscountRule(discountRules, params)
      if (discountRule) {
        const { label, discount } = discountRule
        if (discount.apply_at !== 'freight') {
          // show current discount rule as available discount to apply
          response.available_extra_discount = { label }
          ;['min_amount', 'type', 'value'].forEach(field => {
            if (discount[field]) {
              response.available_extra_discount[field] = discount[field]
            }
          })
        }

        // params object follows list payments request schema:
        // https://apx-mods.e-com.plus/api/v1/apply_discount/schema.json?store_id=100
        if (
          params.amount && params.amount.total > 0 &&
          !(discountRule.discount.min_amount > params.amount.total)
        ) {
          if (
            discountRule.cumulative_discount === false &&
            (response.discount_rule || params.amount.discount)
          ) {
            // explain discount can't be applied :(
            // https://apx-mods.e-com.plus/api/v1/apply_discount/response_schema.json?store_id=100
            return res.send({
              ...response,
              invalid_coupon_message: params.lang === 'pt_br'
                ? 'A promoção não pôde ser aplicada porque este desconto não é cumulativo'
                : 'This discount is not cumulative'
            })
          }

          // we have a discount to apply \o/
          addDiscount(discountRule.discount, discountMatchEnum)
          // add discount label and description if any
          response.discount_rule.label = discountRule.label || params.discount_coupon ||
            `DISCOUNT ${discountMatchEnum}`
          if (discountRule.description) {
            response.discount_rule.description = discountRule.description
          }

          const { customer } = params
          if (
            customer && customer._id &&
            (discountRule.usage_limit > 0 || discountRule.total_usage_limit > 0)
          ) {
            // list orders to check discount usage limits
            return (async function () {
              const url = `/orders.json?fields=_id&extra_discount.app.label=${label}`
              const usageLimits = [{
                // limit by customer
                query: `&buyers._id=${customer._id}`,
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
                    const { response } = await appSdk.apiRequest(storeId, `${url}${query}`)
                    countOrders = response.data.result.length
                  } catch (e) {
                    countOrders = max
                  }

                  if (countOrders >= max) {
                    // limit reached
                    return res.send({
                      ...response,
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

    // response with no error nor discount applied
    res.send(response)
  }
}
