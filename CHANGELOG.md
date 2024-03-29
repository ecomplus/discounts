# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.20.6](https://github.com/ecomplus/discounts/compare/v1.20.5...v1.20.6) (2023-11-22)

### [1.20.5](https://github.com/ecomplus/discounts/compare/v1.20.4...v1.20.5) (2023-11-22)


### Bug Fixes

* fix regression calculating freebies discount value ([6747e6d](https://github.com/ecomplus/discounts/commit/6747e6d7839475d89557b6c155a8a885f4804be7))
* may accept repeated freebies on many cumulative rules ([e744f22](https://github.com/ecomplus/discounts/commit/e744f22a2f432e0df062b5e95c9d0c69cc55b18a))

### [1.20.4](https://github.com/ecomplus/discounts/compare/v1.20.3...v1.20.4) (2023-11-22)


### Bug Fixes

* properly reducing freebies values on subtotal check ([5b33158](https://github.com/ecomplus/discounts/commit/5b33158dadb99d4c93267b6f20f6c937300b5f77))

### [1.20.3](https://github.com/ecomplus/discounts/compare/v1.20.2...v1.20.3) (2023-11-10)


### Bug Fixes

* skip kit discounts quantity multiplier when usage limit is set ([4d9cb5f](https://github.com/ecomplus/discounts/commit/4d9cb5f41dd3f4a0fc70f0e93f60c798236dc2f2))

### [1.20.2](https://github.com/ecomplus/discounts/compare/v1.20.1...v1.20.2) (2023-11-09)


### Bug Fixes

* prevent early return and unresponded request on kit loop ([e985439](https://github.com/ecomplus/discounts/commit/e985439498540c152f505b26c6ce8b917d419b89))

### [1.20.1](https://github.com/ecomplus/discounts/compare/v1.20.0...v1.20.1) (2023-11-09)


### Bug Fixes

* prevent async/await error with express route ([b956759](https://github.com/ecomplus/discounts/commit/b95675929d7e159dccf054b438483f6900addc35))

## [1.20.0](https://github.com/ecomplus/discounts/compare/v1.19.0...v1.20.0) (2023-11-09)


### Features

* add option to configure usage limit (per customer) for kit discounts ([f184e6e](https://github.com/ecomplus/discounts/commit/f184e6e6be75af92e6314719d7d5aa8166939b75))

## [1.19.0](https://github.com/ecomplus/discounts/compare/v1.18.0...v1.19.0) (2023-11-06)


### Features

* add option to configure cumutative freebie rules ([771e671](https://github.com/ecomplus/discounts/commit/771e6718adee674ab9128d67b636b4401e09cdc9))

## [1.18.0](https://github.com/ecomplus/discounts/compare/v1.17.6...v1.18.0) (2023-10-13)


### Features

* add optional categories filter to min subtotal for freebies ([f2f64e8](https://github.com/ecomplus/discounts/commit/f2f64e826c9bc8f8bed73630627a68c3aa29d17e))

### [1.17.6](https://github.com/ecomplus/discounts/compare/v1.17.5...v1.17.6) (2023-09-06)


### Bug Fixes

* prevent error with undefined second discount rule object ([438762f](https://github.com/ecomplus/discounts/commit/438762f8b02f1e84559feac8c2d4d56ffcd2b562))

### [1.17.5](https://github.com/ecomplus/discounts/compare/v1.17.4...v1.17.5) (2023-09-06)


### Bug Fixes

* preview and subtract freebies amount to check rules min amount and percentage discount ([03cb300](https://github.com/ecomplus/discounts/commit/03cb300fa22ea5eeeb0f6ad4efb88a1b72a8f0c3))

### [1.17.4](https://github.com/ecomplus/discounts/compare/v1.17.3...v1.17.4) (2023-09-02)


### Bug Fixes

* replace discount with bigger one if not cumulative ([59c2861](https://github.com/ecomplus/discounts/commit/59c2861b24938f11f55e3a102a92a3f8e1d08679))

### [1.17.3](https://github.com/ecomplus/discounts/compare/v1.17.2...v1.17.3) (2023-09-02)


### Bug Fixes

* keeping other discounts when coupon is invalidated ([7fb5a0a](https://github.com/ecomplus/discounts/commit/7fb5a0a10e9bcbd5fceb5413afb9bb36f75fc2fe))

### [1.17.2](https://github.com/ecomplus/discounts/compare/v1.17.1...v1.17.2) (2023-08-25)


### Bug Fixes

* increase express body parser payload limit to 2mb ([5865410](https://github.com/ecomplus/discounts/commit/58654105b16e87873795ba02117030ce8d438b1e))

### [1.17.1](https://github.com/ecomplus/discounts/compare/v1.17.0...v1.17.1) (2023-07-06)


### Bug Fixes

* **apply-discount:** set different tag in second discount ([57c4e34](https://github.com/ecomplus/discounts/commit/57c4e34652c1daa893adc98d71ed8105f388673d))

## [1.17.0](https://github.com/ecomplus/discounts/compare/v1.16.6...v1.17.0) (2023-07-05)


### Features

* supporting second discount with same-rule on different amount ([61d1b27](https://github.com/ecomplus/discounts/commit/61d1b27fe0d682251af7c5f606e069e95d07dfd5))

### [1.16.6](https://github.com/ecomplus/discounts/compare/v1.16.5...v1.16.6) (2023-07-05)


### Bug Fixes

* properly validating freebies min subtotal with fixed subtotal (discount subtracted) ([de2d949](https://github.com/ecomplus/discounts/commit/de2d9491ecbd5533623ac606366d5498d8b4457b))

### [1.16.5](https://github.com/ecomplus/discounts/compare/v1.16.4...v1.16.5) (2023-07-04)


### Bug Fixes

* subtract already applied discounts for max discount on total ([5125802](https://github.com/ecomplus/discounts/commit/5125802373eb5a51cff7c4beae59cef77e28145f))

### [1.16.4](https://github.com/ecomplus/discounts/compare/v1.16.3...v1.16.4) (2023-07-03)


### Bug Fixes

* check if discount rule customer ids is saved as object and convert to array ([e0ad354](https://github.com/ecomplus/discounts/commit/e0ad354b4b6a96c83ee7238027e3378cf77c0c84))

### [1.16.3](https://github.com/ecomplus/discounts/compare/v1.16.2...v1.16.3) (2023-07-02)


### Bug Fixes

* properly calculating discount value for kit discounts per category ids ([0e543a1](https://github.com/ecomplus/discounts/commit/0e543a19ce4d10515823129e1a9d5cd28eacad1d))

### [1.16.2](https://github.com/ecomplus/discounts/compare/v1.16.1...v1.16.2) (2023-06-30)


### Bug Fixes

* properly handling kit discounts without specific ids (set all items) ([553db26](https://github.com/ecomplus/discounts/commit/553db26419a5be48c1c2b2d5c257a2eb10a58838))

### [1.16.1](https://github.com/ecomplus/discounts/compare/v1.16.0...v1.16.1) (2023-06-30)


### Bug Fixes

* properly handling kit discounts without specific ids ([8d9a8dd](https://github.com/ecomplus/discounts/commit/8d9a8ddc30b43a273c980eb10cf7c31ee7d7e933))

## [1.16.0](https://github.com/ecomplus/discounts/compare/v1.15.1...v1.16.0) (2023-06-30)


### Features

* add option to deduct other discounts before freebie application ([e8077cd](https://github.com/ecomplus/discounts/commit/e8077cd8022a237e38e549ca08378dd4de0f4d30))
* supporting kit discounts by category ids ([9d2aa29](https://github.com/ecomplus/discounts/commit/9d2aa29c73cb191bbd38d3dfd1639ff6735285e8))

### [1.15.1](https://github.com/ecomplus/discounts/compare/v1.15.0...v1.15.1) (2023-06-01)


### Bug Fixes

* check for customer doc number for usage limit even without customer id ([3f547ac](https://github.com/ecomplus/discounts/commit/3f547ac9e6cb4b0390eca69f9d82951098edbf30))

## [1.15.0](https://github.com/ecomplus/discounts/compare/v1.14.1...v1.15.0) (2023-05-29)


### Features

* limit coupon usage by customer doc number if param received ([981b134](https://github.com/ecomplus/discounts/commit/981b134c5e17dc7fa327a3f51675288117ce4265))

### [1.14.1](https://github.com/ecomplus/discounts/compare/v1.14.0...v1.14.1) (2023-05-29)


### Bug Fixes

* always cumulative additional open discount with min amount only ([e1daec5](https://github.com/ecomplus/discounts/commit/e1daec5abf7357bb4deba0c0acdffeaf2ceb758e))

## [1.14.0](https://github.com/ecomplus/discounts/compare/v1.13.0...v1.14.0) (2023-05-29)


### Features

* check for additional open discount after utm/coupon/customer match (fix) ([eae9abb](https://github.com/ecomplus/discounts/commit/eae9abb29b4f5dce5dbdfd85a676a6f39de92589))

## [1.13.0](https://github.com/ecomplus/discounts/compare/v1.12.3...v1.13.0) (2023-05-29)


### Features

* check for additional open discount after utm/coupon/customer match ([5cb9bb7](https://github.com/ecomplus/discounts/commit/5cb9bb749d2d55d5ad80d1220723bf93b1386c0a))

### [1.12.3](https://github.com/ecomplus/discounts/compare/v1.12.2...v1.12.3) (2023-05-28)


### Bug Fixes

* properly handle fixed discount on kit subtotal or lowest price ([#29](https://github.com/ecomplus/discounts/issues/29)) ([44b1e15](https://github.com/ecomplus/discounts/commit/44b1e15de3182cddc8e503bbd0ffc3995420a674))

### [1.12.2](https://github.com/ecomplus/discounts/compare/v1.12.1...v1.12.2) (2023-05-03)


### Bug Fixes

* do not count cancelled order on count for max usages ([601c913](https://github.com/ecomplus/discounts/commit/601c9135e2ab73836181db2bb91dd53755810ea6))

### [1.12.1](https://github.com/ecomplus/discounts/compare/v1.12.0...v1.12.1) (2023-01-27)


### Bug Fixes

* **apply-discount:** return original discount obj on buy together options ([#28](https://github.com/ecomplus/discounts/issues/28)) ([caef37e](https://github.com/ecomplus/discounts/commit/caef37e3c2ce8529f8979f702ca347e5fa5ef674))

## [1.12.0](https://github.com/ecomplus/discounts/compare/v1.11.2...v1.12.0) (2022-12-13)


### Features

* support api manipulated coupons through custom config fields ([d3a0f36](https://github.com/ecomplus/discounts/commit/d3a0f36f81fb402edc81a077b22d934a1ab8de0a))

### [1.11.2](https://github.com/ecomplus/discounts/compare/v1.11.1...v1.11.2) (2022-11-04)


### Bug Fixes

* max discount for same product quantity is based on item quantity ([ac2210d](https://github.com/ecomplus/discounts/commit/ac2210d087add4e2b78721a1dfa8442146ebfd85))

### [1.11.1](https://github.com/ecomplus/discounts/compare/v1.11.0...v1.11.1) (2022-11-04)


### Bug Fixes

* properly check discounted product ids for kit discounts ([f912fde](https://github.com/ecomplus/discounts/commit/f912fde9cda395d1e084c3b51d11e01640930c5d))
* recommend buy together if base product listed on discount rule only ([0f8baec](https://github.com/ecomplus/discounts/commit/0f8baec846486a2fa23a29aef3df7f055968e39a))

## [1.11.0](https://github.com/ecomplus/discounts/compare/v1.10.8...v1.11.0) (2022-10-28)


### Features

* Add `same_product_quantity` for progressive discounts ([aa3ac73](https://github.com/ecomplus/discounts/commit/aa3ac73e36b47f695008d1bdf4abe52aef2dca02))
* try to recommend buy together options when cart has 1 product only ([5d9bedd](https://github.com/ecomplus/discounts/commit/5d9bedd91d846883eb67e5a0a194ab303aada126))

### [1.10.8](https://github.com/ecomplus/discounts/compare/v1.10.7...v1.10.8) (2022-09-02)

### [1.10.7](https://github.com/ecomplus/discounts/compare/v1.10.6...v1.10.7) (2022-07-29)


### Bug Fixes

* never override with freebies only (no discount) if other rule provides applicable discount ([c1a0853](https://github.com/ecomplus/discounts/commit/c1a08532abf203f109f571edaf6388c634e22957))

### [1.10.6](https://github.com/ecomplus/discounts/compare/v1.10.5...v1.10.6) (2022-07-29)


### Bug Fixes

* **freebies:** send available freebie even without applying discount (set 0) due to min amount [[#27](https://github.com/ecomplus/discounts/issues/27)] ([12cb02d](https://github.com/ecomplus/discounts/commit/12cb02d4bc0a2ab9a8ced01cf7ca329214a3e910))

### [1.10.5](https://github.com/ecomplus/discounts/compare/v1.10.4...v1.10.5) (2022-07-29)


### Bug Fixes

* **freebies:** return available freebie even wiuthout applying discount due to min subtotal [[#27](https://github.com/ecomplus/discounts/issues/27)] ([25d3915](https://github.com/ecomplus/discounts/commit/25d3915c8a85968fecc68a67d324e92acfb4de48))

### [1.10.4](https://github.com/ecomplus/discounts/compare/v1.10.3...v1.10.4) (2022-07-07)


### Bug Fixes

* properly set discounted items for cumulative kit discounts ([2615e19](https://github.com/ecomplus/discounts/commit/2615e190536b0ee1052b79aee298dec8e988612e))

### [1.10.3](https://github.com/ecomplus/discounts/compare/v1.10.2...v1.10.3) (2022-07-01)


### Bug Fixes

* increase express body parser payload limit ([1e5b102](https://github.com/ecomplus/discounts/commit/1e5b10244f80dd9bc02c656b7de82d380b7570be))

### [1.10.2](https://github.com/ecomplus/discounts/compare/v1.10.1...v1.10.2) (2021-11-19)


### Bug Fixes

* **apply-discount:** check label with regex (i) for case insensitive discounts coupons usage limit ([017404c](https://github.com/ecomplus/discounts/commit/017404c544d0a02bfa1bf5a2319e40ee811982bf))

### [1.10.1](https://github.com/ecomplus/discounts/compare/v1.10.0...v1.10.1) (2021-10-21)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.15.5 firestore ([fa7d1fc](https://github.com/ecomplus/discounts/commit/fa7d1fc5cec9252c6df98b9d11df9c5bc6e9b761))

## [1.10.0](https://github.com/ecomplus/discounts/compare/v1.9.4...v1.10.0) (2021-09-12)


### Features

* **excluded-products:** handle new `excluded_product_ids` config options for discount rules [[#11](https://github.com/ecomplus/discounts/issues/11)] ([3334ef6](https://github.com/ecomplus/discounts/commit/3334ef6493ea777b04264c3864e3bd1c2cd52e96))
* **freebies-rules:** handle new `check_product_ids` config option for freebies [[#18](https://github.com/ecomplus/discounts/issues/18)] ([7a17c63](https://github.com/ecomplus/discounts/commit/7a17c6323ac61c54f649ba708820c5846403065a))

### [1.9.4](https://github.com/ecomplus/discounts/compare/v1.9.3...v1.9.4) (2021-09-06)

### [1.9.3](https://github.com/ecomplus/discounts/compare/v1.9.2...v1.9.3) (2021-07-13)


### Bug Fixes

* **apply-discount:** properly checking kit items for lowest price and kit subtotal handlers ([097ebcf](https://github.com/ecomplus/discounts/commit/097ebcf2756f36f03c0e138be6c6b34d3ce6463e))

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
