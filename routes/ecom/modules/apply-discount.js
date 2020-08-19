'use strict'

const ecomUtils = require('@ecomplus/utils')

const checkDateRange = rule => {
  // filter campaings by date
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
}

const getValidDiscountRules = (discountRules, items) => {
  if (Array.isArray(discountRules) && discountRules.length) {
    // validate rules objects
    return discountRules.filter(rule => {
      if (!rule) {
        return false
      }

      if (Array.isArray(rule.product_ids) && Array.isArray(items)) {
        // set/add discount value from lowest item price
        let value
        if (rule.discount_lowest_price) {
          items.forEach(item => {
            const price = ecomUtils.price(item)
            if (
              price > 0 &&
              rule.product_ids.indexOf(item.product_id) > -1 &&
              (!value || value > price)
            ) {
              value = price
            }
          })
        } else if (rule.discount_kit_subtotal) {
          value = 0
          items.forEach(item => {
            const price = ecomUtils.price(item)
            if (price > 0 && rule.product_ids.indexOf(item.product_id) > -1) {
              value += price * item.quantity
            }
          })
        }
        if (value) {
          if (rule.discount && rule.discount.value) {
            if (rule.discount.type === 'percentage') {
              value *= rule.discount.value / 100
            } else {
              value += rule.discount.value
            }
          }
          rule.discount = {
            ...rule.discount,
            type: 'fixed',
            value
          }
        }
      }
      if (!rule.discount || !rule.discount.value) {
        return false
      }

      return checkDateRange(rule)
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
      discountRule: discountRules.find(rule => {
        return rule.case_insensitive
          ? typeof rule.discount_coupon === 'string' &&
            rule.discount_coupon.toUpperCase() === params.discount_coupon.toUpperCase()
          : rule.discount_coupon === params.discount_coupon
      }),
      discountMatchEnum: 'COUPON'
    }
  }

  // try to match by UTM campaign first
  if (params.utm && params.utm.campaign) {
    const discountRule = discountRules.find(rule => {
      return rule.case_insensitive
        ? typeof rule.utm_campaign === 'string' &&
          rule.utm_campaign.toUpperCase() === params.utm.campaign.toUpperCase()
        : rule.utm_campaign === params.utm.campaign
    })
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
    const respondSuccess = () => {
      if (response.available_extra_discount && !response.available_extra_discount.value) {
        delete response.available_extra_discount
      }
      if (
        response.discount_rule &&
        (!response.discount_rule.extra_discount || !response.discount_rule.extra_discount.value)
      ) {
        delete response.discount_rule
      }
      res.send(response)
    }

    const addDiscount = (discount, flag, label) => {
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

      if (value) {
        if (response.discount_rule) {
          // accumulate discount
          const extraDiscount = response.discount_rule.extra_discount
          extraDiscount.value += value
          if (extraDiscount.flags.length < 20) {
            extraDiscount.flags.push(flag)
          }
        } else {
          response.discount_rule = {
            label: label || flag,
            extra_discount: {
              value,
              flags: [flag]
            }
          }
        }
        return true
      }
      return false
    }

    if (params.items && params.items.length) {
      // try product kit discounts first
      const kitDiscounts = getValidDiscountRules(config.product_kit_discounts, params.items)
      kitDiscounts.forEach((kitDiscount, index) => {
        if (kitDiscount) {
          const productIds = Array.isArray(kitDiscount.product_ids)
            ? kitDiscount.product_ids
            : []
          const kitItems = productIds.length
            ? params.items.filter(item => item.quantity && productIds.indexOf(item.product_id) > -1)
            : params.items
          if (kitDiscount.min_quantity > 0) {
            // check total items quantity
            let totalQuantity = 0
            kitItems.forEach(({ quantity }) => {
              totalQuantity += quantity
            })
            if (totalQuantity < kitDiscount.min_quantity) {
              return
            }
            if (kitDiscount.discount.type === 'fixed' && kitDiscount.cumulative_discount !== false) {
              kitDiscount.discount.value *= Math.floor(totalQuantity / kitDiscount.min_quantity)
            }
          }

          if (!params.amount || !(kitDiscount.discount.min_amount > params.amount.total)) {
            if (kitDiscount.check_all_items !== false) {
              for (let i = 0; i < productIds.length; i++) {
                const productId = productIds[i]
                if (productId && !kitItems.find(item => item.quantity && item.product_id === productId)) {
                  // product not on current cart
                  return
                }
              }
            }
            // apply cumulative discount \o/
            addDiscount(kitDiscount.discount, `KIT-${(index + 1)}`, kitDiscount.label)
          }
        }
      })

      // gift products (freebies) campaings
      if (Array.isArray(config.freebies_rules)) {
        const validFreebiesRules = config.freebies_rules.filter(rule => {
          return checkDateRange(rule) && Array.isArray(rule.product_ids) && rule.product_ids.length
        })
        if (validFreebiesRules) {
          let subtotal = 0
          params.items.forEach(item => {
            subtotal += (item.quantity * ecomUtils.price(item))
          })

          let bestRule
          let discountValue = 0
          for (let i = 0; i < validFreebiesRules.length; i++) {
            const rule = validFreebiesRules[i]
            // start calculating discount
            let value = 0
            rule.product_ids.forEach(productId => {
              const item = params.items.find(item => productId === item.product_id)
              if (item) {
                value += ecomUtils.price(item)
              }
            })
            const fixedSubtotal = subtotal - value
            if (
              !(rule.min_subtotal > fixedSubtotal) &&
              (!bestRule || value > discountValue || bestRule.min_subtotal < rule.min_subtotal)
            ) {
              bestRule = rule
              discountValue = value
            }
          }

          if (bestRule) {
            // provide freebie products \o/
            response.freebie_product_ids = bestRule.product_ids
            if (discountValue) {
              addDiscount(
                {
                  type: 'fixed',
                  value: discountValue
                },
                'FREEBIES',
                bestRule.label
              )
            }
          }
        }
      }
    }

    const discountRules = getValidDiscountRules(config.discount_rules)
    if (discountRules.length) {
      const { discountRule, discountMatchEnum } = matchDiscountRule(discountRules, params)
      if (discountRule) {
        const campaignProducts = discountRule.product_ids
        if (Array.isArray(campaignProducts) && campaignProducts.length) {
          // must check at least one campaign product on cart
          let hasProductMatch
          if (params.items && params.items.length) {
            for (let i = 0; i < campaignProducts.length; i++) {
              if (params.items.find(item => item.quantity && item.product_id === campaignProducts[i])) {
                hasProductMatch = true
                break
              }
            }
          }
          if (!hasProductMatch) {
            return res.send({
              ...response,
              invalid_coupon_message: params.lang === 'pt_br'
                ? 'Nenhum produto da promoção está incluído no carrinho'
                : 'No promotion products are included in the cart'
            })
          }
        }

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
          if (addDiscount(discountRule.discount, discountMatchEnum)) {
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
                respondSuccess()
              })()
            } else {
              return respondSuccess()
            }
          }
        }
      }
    }

    // response with no error nor discount applied
    respondSuccess()
  }
}
