# discounts

[![CodeFactor](https://www.codefactor.io/repository/github/ecomclub/discounts/badge)](https://www.codefactor.io/repository/github/ecomclub/discounts)
[![License Apache-2.0](https://img.shields.io/badge/License-Apache-orange.svg)](https://opensource.org/licenses/Apache-2.0)

Default E-Com Plus app for complex discount rules

[Changelog](https://github.com/ecomclub/discounts/blob/master/CHANGELOG.md)

## About

This application will add discount extra discount to order by integrating
[Modules API (**Apply discount**)](https://developers.e-com.plus/modules-api/).

[App `hidden_data`](https://developers.e-com.plus/docs/api/#/store/applications/)
will store _discount rules_ (promotions) defined by merchant,
with filters (optionals) by date range _AND_
discount coupon, UTM campaign _OR_ customer IDs.

`hidden_data` expected object model is defined (JSON Schema) on
[app `admin_settings`](https://github.com/ecomclub/discounts/blob/master/assets/app.json).

It's based on
[E-Com Plus Express App Boilerplate](https://github.com/ecomclub/express-app-boilerplate),
application installation and authentication was kept as is
with original endpoints from boilerplate source:

- [`/bin/web.js`](https://github.com/ecomclub/discounts/blob/master/bin/web.js):
Express web server setup);
- [`/routes/ecom/auth-callback.js`](https://github.com/ecomclub/discounts/blob/master/routes/ecom/auth-callback.js):
Endpoint for
[E-Com Plus Authentication Callback](https://developers.e-com.plus/docs/api/#/store/authenticate-app/authenticate-app);

### Apply discount module endpoint

Additional endpoint was created to handle `apply_discount`
([`/ecom/modules/apply-discount.js`](https://github.com/ecomclub/discounts/blob/master/routes/ecom/modules/apply-discount.js))
module, it receives requests from Modules API on stores with this app installed.

It'll receive _POST_ with body like:

```js
const body = {
  params: {
    discount_coupon: 'SAMPLE',
    amount: {
      total: 100,
      subtotal: 90,
      freight: 10,
      discount: 0
    },
    utm: {
      campaign: 'my_promo'
    },
    customer: {
      _id: 'a12345678901234567891234'
    }
    // ...
  },
  application: {
    // configured by merchant
    data: {},
    hidden_data: {
      discount_rules: [
        // discount rules objects with model defined by `admin_settings`
        // ...
      ]
    }
  }
}
```

- [Full `params` object reference](https://apx-mods.e-com.plus/api/v1/apply_discount/schema.json?store_id=100)
from Modules API docs;
- `hidden_data.discount_rules` object reference on
[app.json](https://github.com/ecomclub/discounts/blob/master/assets/app.json)
`admin_settings.discount_rules.schema` property.

And will respond like:

```js
// no promotion match
// returns empty JSON object
const response = {}
```

```js
// discount match but can't apply (generally non-cumulative)
const response = {
  invalid_coupon_message: 'Message to customer'
}
```

```js
// we have a discount to apply \o/
const response = {
  discount_rule: {
    label: 'MY_SAMPLE_COUPON',
    description: 'Maybe we have a description configured by merchant',
    extra_discount: {
      value: 20,
      flags: ['COUPON']
    }
  }
}
```

- [Full `response` object reference](https://apx-mods.e-com.plus/api/v1/apply_discount/response_schema.json?store_id=100)
from Modules API docs;

## Environment variables sample

Variable              | Value
---                   | ---
`LOGGER_OUTPUT`       | `~/app/log/logger.out`
`LOGGER_ERRORS`       | `~/app/log/logger.err`
`LOGGER_FATAL_ERRORS` | `~/app/log/_stderr`
`PORT`                | `3000`
`APP_BASE_URI`        | `https://discounts.ecomplus.biz`
`DB_PATH`             | `~/app/db.sqlite`
`ECOM_AUTH_DB`        | `~/app/db.sqlite`
`ECOM_AUTH_UPDATE`    | `enabled`

## Production server

Published at https://discounts.ecomplus.biz

### Continuous deployment

When new version is **production ready**,
[create a new release](https://github.com/ecomclub/discounts/releases)
(or `npm run release`) to run automatic deploy from _master_ branch
and (re)publish the app.
