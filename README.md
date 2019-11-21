# discounts

[![CodeFactor](https://www.codefactor.io/repository/github/ecomclub/discounts/badge)](https://www.codefactor.io/repository/github/ecomclub/discounts)
[![license mit](https://img.shields.io/badge/License-GPL-orange.svg)](https://opensource.org/licenses/GPL-3.0)

Default E-Com Plus app for complex discount rules

[Changelog](https://github.com/ecomclub/discounts/blob/master/CHANGELOG.md)

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
