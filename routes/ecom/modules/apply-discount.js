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
  return []
}

module.exports = () => {
  return (req, res) => {
    // body was already pre-validated on @/bin/web.js
    // treat module request body
    const { params, application } = req.body
    // app configured options
    const config = Object.assign({}, application.data, application.hidden_data)

    // params object follows list payments request schema:
    // https://apx-mods.e-com.plus/api/v1/apply_discount/schema.json?store_id=100
    let totalValue
    if (params.amount) {
      totalValue = params.amount.total
    }

    // start mounting response body
    // https://apx-mods.e-com.plus/api/v1/apply_discount/response_schema.json?store_id=100
    const response = {}

    if (totalValue > 0) {
      const discountRules = getValidDiscountRules(config.discount_rules)
      if (Array.isArray(discountRules) && discountRules.length) {
        // try to match a promotion
        let discountRule
        let discountMatchEnum = 'OPEN'

        if (params.discount_coupon) {
          // match only by discount coupon
          discountRule = discountRules.find(rule => rule.discount_coupon === params.discount_coupon)
          discountMatchEnum = 'COUPON'
        } else {
          // try to match by UTM campaign first
          if (params.utm && params.utm.campaign) {
            discountRule = discountRules.find(rule => rule.utm_campaign === params.utm.campaign)
            if (discountRule) {
              discountMatchEnum = 'UTM'
            }
          }

          if (!discountRule) {
            // then try to match by customer
            if (params.customer && params.customer._id) {
              discountRule = discountRules.find(rule => Array.isArray(rule.customer_ids) &&
                rule.customer_ids.indexOf(params.customer._id) > -1)
              if (discountRule) {
                discountMatchEnum = 'CUSTOMER'
              }
            }
          }

          if (!discountRule) {
            // last try to match by open promotions
            discountRule = discountRules.find(rule => {
              return !rule.utm.campaign && !rule.utm_campaign &&
                (!Array.isArray(rule.customer_ids) || !rule.customer_ids.length)
            })
          }
        }

        if (discountRule) {
          if (discountRule.cumulative_discount === false && params.amount.discount) {
            // :(
            response.invalid_coupon_message = params.lang === 'pt_br'
              ? 'A promoção não pôde ser aplicada porque este desconto não é cumulativo'
              : 'This discount is not cumulative'
          } else {
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
            response.discount_rule = {
              label: discountRule.label || params.discount_coupon || `DISCOUNT ${discountMatchEnum}`,
              extra_discount: {
                value: discountValue,
                flags: [discountMatchEnum]
              }
            }
            if (discountRule.description) {
              response.discount_rule.description = discountRule.description
            }
          }
        }
      }
    }

    res.send(response)
  }
}
