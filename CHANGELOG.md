# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.9.2](https://github.com/ecomplus/discounts/compare/v1.9.1...v1.9.2) (2021-07-13)


### Bug Fixes

* **apply-discount:** fallback kit discount `product_ids` as empty array ([ca8ee7b](https://github.com/ecomplus/discounts/commit/ca8ee7bce753de5cc649e098c4f55ab0e8c0bc95))

### [1.9.1](https://github.com/ecomplus/discounts/compare/v1.9.0...v1.9.1) (2021-07-13)


### Bug Fixes

* **application:** must set requierd `modules.apply_discount.enabled` ([a9f9f02](https://github.com/ecomplus/discounts/commit/a9f9f02767b3b2cc0c11617ba16352b3b7d87eec))
* **apply-discount:** fix checking less price discount for kits with any items ([47c4f8f](https://github.com/ecomplus/discounts/commit/47c4f8f631881dfe9c75aa4ce99c1397822826f7))

## [1.9.0](https://github.com/ecomplus/discounts/compare/v1.8.4...v1.9.0) (2021-04-29)


### Features

* **apply-discount:** better choosing default `available_extra_discount` ([bf6e3cc](https://github.com/ecomplus/discounts/commit/bf6e3ccef41c06a208d121ae7dc83d0a98a841e8))
* **freebies:** optionally specify client ids for freebie items ([#14](https://github.com/ecomplus/discounts/issues/14)) ([da58733](https://github.com/ecomplus/discounts/commit/da5873353fa09875219ca8b3ef4d1340c8a49221))

### [1.8.4](https://github.com/ecomplus/discounts/compare/v1.8.3...v1.8.4) (2021-04-22)


### Bug Fixes

* **apply-discount:** sort kit discounts by min amount after min quantity ([3076e67](https://github.com/ecomplus/discounts/commit/3076e67dbd0f105e2f6ab48d16ab94b823942a86))

### [1.8.3](https://github.com/ecomplus/discounts/compare/v1.8.2...v1.8.3) (2021-04-05)


### Bug Fixes

* **apply-discount:** must encode `label` as uri param to check usage limits ([#17](https://github.com/ecomplus/discounts/issues/17)) ([521ccc5](https://github.com/ecomplus/discounts/commit/521ccc5bd71729690885521cff7014dca75065ad))

### [1.8.2](https://github.com/ecomplus/discounts/compare/v1.8.1...v1.8.2) (2021-01-20)


### Bug Fixes

* **apply-discount:** ensure discount rule not sent with invalid coupon message ([#15](https://github.com/ecomplus/discounts/issues/15)) ([d8a2f64](https://github.com/ecomplus/discounts/commit/d8a2f649c7675bcd3f1879bdcce226261e924b82))

### [1.8.1](https://github.com/ecomplus/discounts/compare/v1.8.0...v1.8.1) (2020-11-23)


### Bug Fixes

* **kit-discount:** prevent applying duplicated discount for same items ([da86774](https://github.com/ecomplus/discounts/commit/da86774c94827c9e0e58328aa0462b1e8cf8bf47))

## [1.8.0](https://github.com/ecomplus/discounts/compare/v1.7.0...v1.8.0) (2020-11-12)


### Features

* **discount-rules:** add 'amount_field' option to select min ref ([#12](https://github.com/ecomplus/discounts/issues/12)) ([64daf0f](https://github.com/ecomplus/discounts/commit/64daf0f7c9f23636ec827b48bb51342966facc75))
* **kit-discounts:** add filter by customer ids (as rules) ([#10](https://github.com/ecomplus/discounts/issues/10)) ([619a654](https://github.com/ecomplus/discounts/commit/619a654c41f67a08e0587ae6fccb7cb918633aa2))

## [1.7.0](https://github.com/ecomplus/discounts/compare/v1.6.8...v1.7.0) (2020-08-19)


### Features

* **kit-subtotal-discount:** handle 'discount_kit_subtotal' option ([14382ff](https://github.com/ecomplus/discounts/commit/14382ffa100abddf4a453d3cbf91ca0e0758d0a9))

### [1.6.8](https://github.com/ecomplus/discounts/compare/v1.6.7...v1.6.8) (2020-06-11)


### Bug Fixes

* **apply-discount:** adding freebie/kits discount labels ([bddca3b](https://github.com/ecomplus/discounts/commit/bddca3b9283ee23b28abea5e407b577f5693e15f))

### [1.6.7](https://github.com/ecomplus/discounts/compare/v1.6.6...v1.6.7) (2020-06-11)


### Bug Fixes

* **apply-discount:** check add discount success to proceed with rule ([899e14e](https://github.com/ecomplus/discounts/commit/899e14e859419b2fe6c46fb06aaa5fbcea384c93))

### [1.6.6](https://github.com/ecomplus/discounts/compare/v1.6.5...v1.6.6) (2020-06-11)


### Bug Fixes

* **apply-discount:** check value before adding rule to response ([bfe93a5](https://github.com/ecomplus/discounts/commit/bfe93a513f25f9b3d17a46488c43783fffb7d656))

### [1.6.5](https://github.com/ecomplus/discounts/compare/v1.6.4...v1.6.5) (2020-06-09)


### Bug Fixes

* **apply-discount:** checking required properties for success response ([b6dd97e](https://github.com/ecomplus/discounts/commit/b6dd97e26a98e7242b1ea36a60c0aec53ade8384))

### [1.6.4](https://github.com/ecomplus/discounts/compare/v1.6.3...v1.6.4) (2020-06-06)


### Bug Fixes

* **freebies-rules:** fix subtotal to check for available freebies ([ec2810d](https://github.com/ecomplus/discounts/commit/ec2810db38a2357d6c26656c3199ea0375f9b1f8))

### [1.6.3](https://github.com/ecomplus/discounts/compare/v1.6.2...v1.6.3) (2020-06-05)


### Bug Fixes

* **freebies-rules:** check subtotal isntead of amount total ([db321d8](https://github.com/ecomplus/discounts/commit/db321d8ea6126ff9dc35755ffcee3453af596f06))

### [1.6.2](https://github.com/ecomplus/discounts/compare/v1.6.1...v1.6.2) (2020-06-05)


### Bug Fixes

* **apply-discount:** fix matching freebie items ([833ef74](https://github.com/ecomplus/discounts/commit/833ef74f2fc5be7642b518e01240d531081fd562))

### [1.6.1](https://github.com/ecomplus/discounts/compare/v1.6.0...v1.6.1) (2020-06-05)


### Bug Fixes

* **apply-discount:** skip discount for freebies if no discount value ([09cfb7b](https://github.com/ecomplus/discounts/commit/09cfb7b931ba19aa7a644a7377070fb1e43fd52d))

## [1.6.0](https://github.com/ecomplus/discounts/compare/v1.5.3...v1.6.0) (2020-06-05)


### Features

* **apply-discount:** accepting kits without ids (for all store) ([f298798](https://github.com/ecomplus/discounts/commit/f298798539ab64900e62294353b2fe213cd3d03b))
* **freebies-rules:** handling gift products (freebies) campaigns ([59b8c4d](https://github.com/ecomplus/discounts/commit/59b8c4de397e519422990634378484d5a1df2353))

### [1.5.3](https://github.com/ecomplus/discounts/compare/v1.5.2...v1.5.3) (2020-05-19)


### Bug Fixes

* **apply-discount:** considering kit discount cumulative by default ([301ce62](https://github.com/ecomplus/discounts/commit/301ce620d17663123fe54788c31e31a7e82f1aa2))

### [1.5.2](https://github.com/ecomplus/discounts/compare/v1.5.1...v1.5.2) (2020-05-19)

### [1.5.1](https://github.com/ecomplus/discounts/compare/v1.5.0...v1.5.1) (2020-05-19)


### Bug Fixes

* **apply-discount:** handling cumulative kit discount by default ([2ece0b6](https://github.com/ecomplus/discounts/commit/2ece0b6faad5466376e77e0d9c158afed9dfab7a))

## [1.5.0](https://github.com/ecomplus/discounts/compare/v1.4.1...v1.5.0) (2020-05-19)


### Features

* **apply-discount:** handling new 'check_all_items' options ([1202c2a](https://github.com/ecomplus/discounts/commit/1202c2a268535c02fe40c2e54f5b3573c0cfa49f))

### [1.4.1](https://github.com/ecomplus/discounts/compare/v1.4.0...v1.4.1) (2020-05-18)


### Bug Fixes

* **apply-discount:** using commonjs instead of es import ([c1fecb5](https://github.com/ecomplus/discounts/commit/c1fecb523ee6ba0afbffbba337301d302d5eb2ea))

## [1.4.0](https://github.com/ecomplus/discounts/compare/v1.3.0...v1.4.0) (2020-05-18)


### Features

* **apply-discount:** handling new 'discount_lowest_price' option ([5277ced](https://github.com/ecomplus/discounts/commit/5277ced66d04f0adcce4f88cc1dce1bf44d0cb39))

## [1.3.0](https://github.com/ecomplus/discounts/compare/v1.2.0...v1.3.0) (2020-05-15)


### Features

* **campaign-products:** handle 'product_ids' discount rule option ([a055cda](https://github.com/ecomplus/discounts/commit/a055cda5c318b854e1dcc39cdac8ef343358e0c3))
* **case-insensitve:** handle 'case_insensitive' discount rule option ([7fc32fd](https://github.com/ecomplus/discounts/commit/7fc32fd8b1bcebd40506e7fa355c76cec68712c4))


### Bug Fixes

* **deps:** replace ecomplus-app-sdk with @ecomplus/application-sdk ([f714723](https://github.com/ecomplus/discounts/commit/f7147234794ec21582e860fe732433cece798eb0))

## [1.2.0](https://github.com/ecomplus/discounts/compare/v1.1.2...v1.2.0) (2020-04-10)


### Features

* **apply-discount:** handling product kit discounts :tada: ([5db099b](https://github.com/ecomplus/discounts/commit/5db099bd85007e524c62d15aa0d496e7c5dd3a3c))


### Bug Fixes

* **apply-discount:** also check min amount (if any) for kit discount ([bbd14c2](https://github.com/ecomplus/discounts/commit/bbd14c249c8f496db8e5087bc62282d75c591f30))
* **apply-discount:** fix getting response data from api request ([7c54174](https://github.com/ecomplus/discounts/commit/7c54174cba7a26174a8092f405de2b924cbdbc37))

### [1.1.2](https://github.com/ecomplus/discounts/compare/v1.1.1...v1.1.2) (2020-04-10)


### Bug Fixes

* **apply-discount:** fix checking date range start and end ([a429244](https://github.com/ecomplus/discounts/commit/a429244ee1ba5cc41c7659ff142bd31dc663ac6b))
* **apply-discount:** fix mounting url to check discount usage limit ([697abda](https://github.com/ecomplus/discounts/commit/697abda166431a0e86f9930195e9c3530cc87338))

### [1.1.1](https://github.com/ecomclub/discounts/compare/v1.1.0...v1.1.1) (2020-01-26)


### Bug Fixes

* **apply-discount:** fix handling last try to match by open promotions ([706f5e8](https://github.com/ecomclub/discounts/commit/706f5e8502116d01b7e048abb5c58ee276b4a30a))

## [1.1.0](https://github.com/ecomclub/discounts/compare/v1.0.0...v1.1.0) (2020-01-26)


### Features

* **apply-discount:** set discount rule as available discount to apply ([8ddf6c4](https://github.com/ecomclub/discounts/commit/8ddf6c49234cca6958e388bc50b0a1a46bfda4ef))

## [1.0.0](https://github.com/ecomclub/discounts/compare/v0.1.4...v1.0.0) (2020-01-23)

### [0.1.4](https://github.com/ecomclub/discounts/compare/v0.1.3...v0.1.4) (2020-01-23)


### Bug Fixes

* **apply-discount:** fix checking customer from params ([0368974](https://github.com/ecomclub/discounts/commit/03689746eb9645ccc3b9fb3e5456eabd29579b06))

### [0.1.3](https://github.com/ecomclub/discounts/compare/v0.1.2...v0.1.3) (2020-01-23)


### Bug Fixes

* **apply-discounts:** fix counting orders (result.length) ([3004e21](https://github.com/ecomclub/discounts/commit/3004e21d5300b371a97d755197c905cdb36fb0d0))

### [0.1.2](https://github.com/ecomclub/discounts/compare/v0.1.1...v0.1.2) (2020-01-23)


### Features

* **appy-discount:** handling discount rule usage limits ([39f840c](https://github.com/ecomclub/discounts/commit/39f840c5036cc31f2b6f236ce453da53aa16f83f))

### [0.1.1](https://github.com/ecomclub/discounts/compare/v0.1.0...v0.1.1) (2019-11-21)

## [0.1.0](https://github.com/ecomclub/discounts/compare/v0.0.2...v0.1.0) (2019-11-21)


### Features

* **apply-discount:** add route and handle ecom apply discount module ([3ec876a](https://github.com/ecomclub/discounts/commit/3ec876ae7546ce2fe8c40e58ded736d773467a29))


### Bug Fixes

* **web:** fix express app routes ([e1d2d67](https://github.com/ecomclub/discounts/commit/e1d2d67a86b8e4b467a45d5599cd82e08b7439dd))

### 0.0.2 (2019-11-20)
