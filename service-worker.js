/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "574f849c2d92a655dee3fab2aa10572e"
  },
  {
    "url": "api/cli.html",
    "revision": "8acf263bd8ea6fd523eae20b4b972eb9"
  },
  {
    "url": "api/node.html",
    "revision": "d837c6f5bb4f75db181130d8b2c1e55e"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.05a7d41b.css",
    "revision": "398237c83ec6773f5bdd639d5b1d36cd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b9e1deed.js",
    "revision": "ac3b67b5c7cd12d7a66b2d9b23d89b8c"
  },
  {
    "url": "assets/js/11.9b5dcac4.js",
    "revision": "defed2d722fc14c083be6133d661b66a"
  },
  {
    "url": "assets/js/12.8e23f094.js",
    "revision": "59343da7264794253689b0d55b3c8f9c"
  },
  {
    "url": "assets/js/13.05c1ea06.js",
    "revision": "ec172ac61533f4c3d69875631d9944da"
  },
  {
    "url": "assets/js/14.146507f1.js",
    "revision": "0d11ca530ae15495f5bed6063fd2a22d"
  },
  {
    "url": "assets/js/15.3d877816.js",
    "revision": "fce681c5f25f2adc487b23bbc9b43025"
  },
  {
    "url": "assets/js/16.d9401624.js",
    "revision": "99de308122fa1ded2567f6f66028306e"
  },
  {
    "url": "assets/js/17.8055f4c4.js",
    "revision": "76dd55f53d03757b00e497307b85e3e9"
  },
  {
    "url": "assets/js/18.5ef2b880.js",
    "revision": "d4c42cdb04f9d5a82219bc48153ea8bc"
  },
  {
    "url": "assets/js/19.f5f7affa.js",
    "revision": "f8327a42d634e8dda38e1a6d9f4b9cf0"
  },
  {
    "url": "assets/js/20.aedb8c40.js",
    "revision": "197d38a3300fd29c36cfe4097d86af1b"
  },
  {
    "url": "assets/js/21.f5003859.js",
    "revision": "c0aae7cc90a290dc5e787ac90b116333"
  },
  {
    "url": "assets/js/22.585e55fc.js",
    "revision": "e4dbfb8a3e55a33458267e65ed28f035"
  },
  {
    "url": "assets/js/23.284e5f54.js",
    "revision": "67d50a81eecf49502a27fd066ceb890e"
  },
  {
    "url": "assets/js/24.560627b6.js",
    "revision": "156ded91a7a8a6ba66ec659f61b8f2a6"
  },
  {
    "url": "assets/js/25.16748867.js",
    "revision": "ff829804afbb349c5a7d11c17bfcfa19"
  },
  {
    "url": "assets/js/26.84f15ffb.js",
    "revision": "14cbdb44410dcac2dcfc197f64c67647"
  },
  {
    "url": "assets/js/27.6725b7f7.js",
    "revision": "bc881f1b19fd82185f133c5e11738858"
  },
  {
    "url": "assets/js/28.114ef62c.js",
    "revision": "37bd2e72e8d1c5094049cc7e7397805d"
  },
  {
    "url": "assets/js/29.ba4286b3.js",
    "revision": "5c750960362e36f4e686d8cd31ca4c73"
  },
  {
    "url": "assets/js/30.84672d5e.js",
    "revision": "5fb720ef771f06f4146bddaae94a40fa"
  },
  {
    "url": "assets/js/31.83d74019.js",
    "revision": "1e97355f2c6e637daa6b466f454e3c5d"
  },
  {
    "url": "assets/js/32.a3968ea5.js",
    "revision": "9834ce25cf809ec81785e5a6d6f2ba3f"
  },
  {
    "url": "assets/js/33.6910a83d.js",
    "revision": "59d936d94b751a248cc5c607b3839f0d"
  },
  {
    "url": "assets/js/34.8dfc9b6d.js",
    "revision": "076d22833ed579bb055e93dba4a67e29"
  },
  {
    "url": "assets/js/35.51cb8acb.js",
    "revision": "b32161f1f1aa577ad64e2b0bcadfda1c"
  },
  {
    "url": "assets/js/36.765fd6af.js",
    "revision": "7d3cbbe562a30168c2cf82d976ae0916"
  },
  {
    "url": "assets/js/37.a733b7ce.js",
    "revision": "c8fb49d146cb09f1f7f9a79e7ffeb254"
  },
  {
    "url": "assets/js/38.fda12a80.js",
    "revision": "d70948e827e1cf79d2bb318118c17ce0"
  },
  {
    "url": "assets/js/39.9f276562.js",
    "revision": "27f6ffcefe9b38e7413885f7e9373ddb"
  },
  {
    "url": "assets/js/40.a6e675a7.js",
    "revision": "556d8e0fbf8dd94eb2a3c0ee0a587a5d"
  },
  {
    "url": "assets/js/41.cddcaad5.js",
    "revision": "7edab2708374fe9aa95a1966ac4c1a31"
  },
  {
    "url": "assets/js/42.02fb31e1.js",
    "revision": "7b2fdcc231c5f1f998d87872e3693c0d"
  },
  {
    "url": "assets/js/43.0732b1d7.js",
    "revision": "4bfd38a965c7e7386f6261557f34e125"
  },
  {
    "url": "assets/js/44.f6164cbf.js",
    "revision": "6b422228e9c1ec588e4779fd5fc2f31d"
  },
  {
    "url": "assets/js/45.fcd4e846.js",
    "revision": "630566247d029c2cdad80732ab0c9d09"
  },
  {
    "url": "assets/js/46.d33df81b.js",
    "revision": "2776c87e78c1fc1b8e8df56027631bcc"
  },
  {
    "url": "assets/js/47.da1be0f3.js",
    "revision": "7c37588c6edfb5e1d26a1eca28d7b521"
  },
  {
    "url": "assets/js/48.5c0d81a5.js",
    "revision": "61dd23be54fdd2d559d41e62eab09d90"
  },
  {
    "url": "assets/js/49.d9f0334c.js",
    "revision": "6d4c7fd5cb27d1a30b4408dc20ba303a"
  },
  {
    "url": "assets/js/5.cb5a609b.js",
    "revision": "467a771b5ff880d22c0e20f92d3c70d8"
  },
  {
    "url": "assets/js/50.708de676.js",
    "revision": "c030b3d03785f23764cf8989d87a9f77"
  },
  {
    "url": "assets/js/51.0559c173.js",
    "revision": "3794f4328ddcaea82238e98bc4ef523b"
  },
  {
    "url": "assets/js/52.baa6ab21.js",
    "revision": "e7f1f6d87ee9d36b8042025c4af4f7ac"
  },
  {
    "url": "assets/js/53.dc573ecd.js",
    "revision": "91344001397ed31bdec5700d42807b82"
  },
  {
    "url": "assets/js/54.a3ff7d1e.js",
    "revision": "309cf635f5e0aed461801cd887aab110"
  },
  {
    "url": "assets/js/55.674729b4.js",
    "revision": "41b4ff72f19dcf2b4cdd45a34856e39e"
  },
  {
    "url": "assets/js/56.4eaaa58e.js",
    "revision": "fc12369af51ba9460973d3931245560e"
  },
  {
    "url": "assets/js/57.ca62b8c0.js",
    "revision": "999bae59c8eb3fef1b8940349e7228b5"
  },
  {
    "url": "assets/js/58.26da6c90.js",
    "revision": "2f0cace352c8b806f05a7324c400460b"
  },
  {
    "url": "assets/js/59.e35f6078.js",
    "revision": "8ffe5e6642c9651c6b2ba63c067672f5"
  },
  {
    "url": "assets/js/6.0a18eaf8.js",
    "revision": "e124122e113c632eda26d6d31db5bcc1"
  },
  {
    "url": "assets/js/60.a9e0189e.js",
    "revision": "5ee4c387a128aa5445df5b8f829af3cd"
  },
  {
    "url": "assets/js/61.bed334a0.js",
    "revision": "a8d654ed915d23d8f9770596f2c69ec3"
  },
  {
    "url": "assets/js/62.4b5426be.js",
    "revision": "71f11194fb1beef5b214eeec7396768e"
  },
  {
    "url": "assets/js/63.87f76358.js",
    "revision": "eced03dbf2bd5b42fecdca5acf045cb7"
  },
  {
    "url": "assets/js/64.032bbb7e.js",
    "revision": "3ed60b98d541b5ae09010ac8abf6009a"
  },
  {
    "url": "assets/js/65.a29a8aa3.js",
    "revision": "b520bb6a3606dce5c132e4da866ec066"
  },
  {
    "url": "assets/js/66.0a54d48c.js",
    "revision": "b56e3102f02577f37e4eb32a9de56cad"
  },
  {
    "url": "assets/js/7.5694a969.js",
    "revision": "041e45a063d7e3f0b5adfdff6a1167a7"
  },
  {
    "url": "assets/js/8.c0890dbd.js",
    "revision": "8295e1e84ff6d81176a56b320b4f354c"
  },
  {
    "url": "assets/js/9.8cc26217.js",
    "revision": "afe478c158d02b05ecb98df350288763"
  },
  {
    "url": "assets/js/app.f5ac486d.js",
    "revision": "881a31e3446e71799a24b00c9c30c505"
  },
  {
    "url": "assets/js/vendors~docsearch.a0de962c.js",
    "revision": "370dd575c0ebcfdef62f61d56e5774d1"
  },
  {
    "url": "assets/js/vendors~flowchart.4a571696.js",
    "revision": "2a4671db403175d2ebb532193d48993d"
  },
  {
    "url": "assets/js/vendors~notification.046e73cf.js",
    "revision": "d530c449ee956eaafe2bc091e7760902"
  },
  {
    "url": "config/index.html",
    "revision": "390b724621aae892925c3e1867421c9a"
  },
  {
    "url": "guide/assets.html",
    "revision": "12d34de35380c39a1cff238349ac0671"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "b3020da419f3aa09e797d1b26cbe06eb"
  },
  {
    "url": "guide/deploy.html",
    "revision": "6ba77c8401d1dd8d77f101dd7696a630"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "52c418d7fea5833ecc682d36fd321e74"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "c3539717e4edabb1c443dc39693d1c41"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8e8166e94126ed8265b357ee6684f978"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "65a55966818a4fe500ca60ba96b958d2"
  },
  {
    "url": "guide/i18n.html",
    "revision": "95875365a9530de19dfcaab66605bd7d"
  },
  {
    "url": "guide/index.html",
    "revision": "c1b31eec09b28716cf5d0de76f327602"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "31a3c12307568fbdd1eb9bf1e85fc5c4"
  },
  {
    "url": "guide/markdown.html",
    "revision": "5bf79da9e643a08421e80ce3eae07fbe"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "7ba779ddb04c9839897eb46425316189"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "ac100e5d543ddcf7ba6c218762fa219e"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "a963ee976bf9b816682b1cf902990e48"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "20837da4254757fee530ea4dfef21439"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "3538783a34ccecaa5cf005f0e6dad6ae"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "23a5ad40876a6802dd2e9aeea952d43d"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "e1a4585e42fbf6ea34f21cbd947f0ea8"
  },
  {
    "url": "notes/index.html",
    "revision": "114284363832b009f8cbdb984e7b25f8"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "e8bba46d7bf7706b9aff89d6931733df"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "ef546330b8e17edf96de6f7344641b98"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "8a8cbd789725bfac876c6414b8375823"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "19c4dc461ae54547f66629bc9df3d148"
  },
  {
    "url": "plugin/index.html",
    "revision": "9d721e6da1951b314155eab97574e290"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "ec7a89ed3c760768d0806cb3082ba7c3"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "7b9e524d8f35da4eed3506e2a6930329"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "d427709337af020963587c88fb9e5afb"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "cf2495b635a1a96fe5e8367b1b8d9dbb"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "48f1db8070dbb0d835c5f5aff5f6d002"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "569052a5a9675e5ef31c1064a99b557c"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "7387a6ba76bea7b7abbd8b2e2531ba5c"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "62205b601afff6cae6abfe95ed15c784"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "cdfeb89f9708f7e1c37bf488fb30f9f7"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "ac845215f47ab571cb3cbda388479b31"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "64db89f689bb194076db3fb8b39365cd"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "1055ed0fffd6b543ab33053a1385803c"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "38c94c83c11778877f19cbb74609b8e1"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "1fc7f50a83dfea8e10847447479ba1a3"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "2a98961d1437c4a129a0e3d778b1a50f"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "f5f4d33c245439c87b98455ccf63be21"
  },
  {
    "url": "theme/index.html",
    "revision": "786dbc7d2dc317b1b07ab88379a554f0"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "9e9bd3eb727c6b9cf64b132bc4153dcf"
  },
  {
    "url": "theme/option-api.html",
    "revision": "9eeb73a56804b4724b76adbf8372e09b"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "ae99be408a0a5dd5535a9e3c80e7c07f"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "73ae036782cd9b00a9ac63cb455dc2f9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
