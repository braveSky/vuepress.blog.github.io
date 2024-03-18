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
    "revision": "9562bfba941a28a73579ddcfab09f38e"
  },
  {
    "url": "api/cli.html",
    "revision": "deefd8a2f1b9f2ac0ac672667c218c1b"
  },
  {
    "url": "api/node.html",
    "revision": "f2f286d3cd268ca0cd281bfadb61d1b1"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.693f461a.css",
    "revision": "1fc0a2f396fbed10706922acd9fdf446"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/study.1200759f.png",
    "revision": "1200759f3077a9258ab72369289caa0c"
  },
  {
    "url": "assets/js/10.9d9d00bf.js",
    "revision": "548c8785e9b6297f6be5dad08224835a"
  },
  {
    "url": "assets/js/11.52129c77.js",
    "revision": "147449391c28fd8f94987fa1fe00d1c0"
  },
  {
    "url": "assets/js/12.fd1f272e.js",
    "revision": "5493f3b96dc147e2e52e6d22f0a515cc"
  },
  {
    "url": "assets/js/13.e6337fec.js",
    "revision": "b79e5aa9cc5f1664f628a011d13ef0c3"
  },
  {
    "url": "assets/js/14.e2d57551.js",
    "revision": "62d133d2fd38a432c66566ec25ce8a94"
  },
  {
    "url": "assets/js/15.ccb2035d.js",
    "revision": "8c7d1e52c4566dce26f5aeed5acbd85f"
  },
  {
    "url": "assets/js/16.7c56777d.js",
    "revision": "5aae3a1b7b16143231018c112274314f"
  },
  {
    "url": "assets/js/17.13cb38aa.js",
    "revision": "29595a3977e2bb8f953760fc60d7bd9e"
  },
  {
    "url": "assets/js/18.c4ea9964.js",
    "revision": "78933c69d83bf914c1af52809e413554"
  },
  {
    "url": "assets/js/19.6c4528ac.js",
    "revision": "c75abf43304523d778ed6562515f8e15"
  },
  {
    "url": "assets/js/20.4f4f930f.js",
    "revision": "dcdd4d7e6b0ed6683c62bd5def51f3c0"
  },
  {
    "url": "assets/js/21.23f5c6a8.js",
    "revision": "4e3363f01d99b319bfacd32012caf7ae"
  },
  {
    "url": "assets/js/22.38498320.js",
    "revision": "96bd38ffd7a5b9d500a8efa241323999"
  },
  {
    "url": "assets/js/23.97619b2e.js",
    "revision": "7e43c89e0df8a4b454ab3be8895a2e8a"
  },
  {
    "url": "assets/js/24.65c1f3a9.js",
    "revision": "ebaa59d0248c104eaf0f0f7e0da6aa8b"
  },
  {
    "url": "assets/js/25.a2de0433.js",
    "revision": "ccb8b816411941b76b6dbc35377e5339"
  },
  {
    "url": "assets/js/26.5f56b27e.js",
    "revision": "13f61842efd633a7aae6475275e4cc15"
  },
  {
    "url": "assets/js/27.bfd3fbe7.js",
    "revision": "6adb6e42878414a2123c3d6b13f625ff"
  },
  {
    "url": "assets/js/28.0cb91854.js",
    "revision": "badc361a4cdbf63d60c8ea761f6b3c81"
  },
  {
    "url": "assets/js/29.200ab037.js",
    "revision": "4b2e301ccb339af3a20e2ea39cdcebc2"
  },
  {
    "url": "assets/js/30.a4867603.js",
    "revision": "d25aa0341a75b387ed95ac85b520c50b"
  },
  {
    "url": "assets/js/31.02f058d7.js",
    "revision": "2ba2436dc3b5fe78b365cd92aefe2054"
  },
  {
    "url": "assets/js/32.72be9c51.js",
    "revision": "25685f459d3dd743e6f638bc030b4699"
  },
  {
    "url": "assets/js/33.ed1b05ea.js",
    "revision": "5bf1b334a23b4e9e00f06c386efcd3d0"
  },
  {
    "url": "assets/js/34.1c6fc4d7.js",
    "revision": "273cdf3dc411ee88d0efd2672882fd94"
  },
  {
    "url": "assets/js/35.ff239b32.js",
    "revision": "8325c7dc8a7e5ee0099085f117d12b3f"
  },
  {
    "url": "assets/js/36.47471ee3.js",
    "revision": "559d58569a5ab1a0fa5a87acd17b234c"
  },
  {
    "url": "assets/js/37.421f2dc6.js",
    "revision": "cc2e06e06e30a6fb02aac4f1ce22d758"
  },
  {
    "url": "assets/js/38.45b0116a.js",
    "revision": "009ca5aec23ce84da97bc73ee6a10a3d"
  },
  {
    "url": "assets/js/39.d13bef42.js",
    "revision": "33067450254c06355ded66393504f6c6"
  },
  {
    "url": "assets/js/40.6b8d9d9e.js",
    "revision": "3a84e7d190b489bb0dea3ba7d50c5937"
  },
  {
    "url": "assets/js/41.7df7e37a.js",
    "revision": "044082c6da70468f9177dc295fff141b"
  },
  {
    "url": "assets/js/42.e8735780.js",
    "revision": "dd496cfd1087014e6465440046345484"
  },
  {
    "url": "assets/js/43.b2b68e6e.js",
    "revision": "7a3290619ef05dc11ff8e7a67ca27f0a"
  },
  {
    "url": "assets/js/44.bb2e9a88.js",
    "revision": "ec338d020c8387f0292a607534933038"
  },
  {
    "url": "assets/js/45.8d1f5040.js",
    "revision": "d9655c3cefb5e22e37a4ce5ee56b2a8a"
  },
  {
    "url": "assets/js/46.0041b210.js",
    "revision": "87607a044a7f4b857da8d7268cf7c2e2"
  },
  {
    "url": "assets/js/47.3ba4e343.js",
    "revision": "e47ceffc27dbddf5d6ad6c82e2c1390f"
  },
  {
    "url": "assets/js/48.32acfa92.js",
    "revision": "03960776f3ffbe928a8fee7c060cc312"
  },
  {
    "url": "assets/js/49.eba665a0.js",
    "revision": "d566ecf2368a28a4912a68cdc5804095"
  },
  {
    "url": "assets/js/5.f89abbdb.js",
    "revision": "f1128a97b73667123157bb478e61a1ae"
  },
  {
    "url": "assets/js/50.1f0eba36.js",
    "revision": "c612231751e6a1e76aec66a48c108b54"
  },
  {
    "url": "assets/js/51.c2e1ac39.js",
    "revision": "fed2d282dd19ce80b60fa5121dc1fa63"
  },
  {
    "url": "assets/js/52.bb6b3e4a.js",
    "revision": "b69a16bb8cfc2e3e5570db1d5e188106"
  },
  {
    "url": "assets/js/53.e6560b22.js",
    "revision": "205383e5d733e0d8c72aee92940fc1d7"
  },
  {
    "url": "assets/js/54.c863bc89.js",
    "revision": "0d9c32a0ee992c11004f90dda6a345b6"
  },
  {
    "url": "assets/js/55.0a24eb55.js",
    "revision": "91d137a365e9868463c60bef5cb3ce6b"
  },
  {
    "url": "assets/js/56.fc8f101f.js",
    "revision": "1ed5a5f87ccc4dab434e791969ad80a2"
  },
  {
    "url": "assets/js/57.105bb0a2.js",
    "revision": "0d9817d86c7eefb577fdd23eaf01cd31"
  },
  {
    "url": "assets/js/58.4947cb80.js",
    "revision": "afd7eb861d2c7430ef7e0e9de5a65a44"
  },
  {
    "url": "assets/js/59.3764cf3b.js",
    "revision": "9fd91f6ee735e9dc030fa2a3b94c3180"
  },
  {
    "url": "assets/js/6.22e9287b.js",
    "revision": "6d35423e145c7250256ea2ae90aecf45"
  },
  {
    "url": "assets/js/60.d75773a4.js",
    "revision": "d5ae9a53eeb96c93d3befc720bebe5f9"
  },
  {
    "url": "assets/js/61.a8554e4e.js",
    "revision": "bdb5745e0f74f9eeda12c3f080f7558c"
  },
  {
    "url": "assets/js/62.c0153231.js",
    "revision": "2710633fffcb38d708d821f4fc698fd0"
  },
  {
    "url": "assets/js/63.c3751fc0.js",
    "revision": "08a2bbcdfcd9395c5f3af220eb736ebd"
  },
  {
    "url": "assets/js/64.bf0c708f.js",
    "revision": "8b22aedabdedcc3d5c0f4f9de6b1866a"
  },
  {
    "url": "assets/js/65.fa93162d.js",
    "revision": "735c0247f2a4c46e5b5b4ae291d69957"
  },
  {
    "url": "assets/js/66.90d61afd.js",
    "revision": "5bd2e9356fb892868445064e519ba494"
  },
  {
    "url": "assets/js/67.628fdae3.js",
    "revision": "b6f2ac05f21858f4aac7c31b190e045a"
  },
  {
    "url": "assets/js/68.8d60dd1c.js",
    "revision": "245b1ef9ba4fe9f2e8c06135ff5b05af"
  },
  {
    "url": "assets/js/69.97dad683.js",
    "revision": "1c57b3344fedabe75d5d1bff39103da1"
  },
  {
    "url": "assets/js/7.fc2cc2c2.js",
    "revision": "8c0a51d42384d0c4559d07c41dbba7d5"
  },
  {
    "url": "assets/js/70.e51b1bda.js",
    "revision": "56d5938d4ae6ee188182b714add75cf4"
  },
  {
    "url": "assets/js/8.3a0d72b7.js",
    "revision": "c01c943090872560a078a37a79745bcb"
  },
  {
    "url": "assets/js/9.c95121b2.js",
    "revision": "b064c4c0564b487206285595c6e1dac2"
  },
  {
    "url": "assets/js/app.f528f0d8.js",
    "revision": "6f03bfd73fa37371040fb75f7249af0b"
  },
  {
    "url": "assets/js/vendors~docsearch.a0de962c.js",
    "revision": "370dd575c0ebcfdef62f61d56e5774d1"
  },
  {
    "url": "assets/js/vendors~flowchart.5eab99c1.js",
    "revision": "368eb072b284e82e8ea75ed0c7350dcb"
  },
  {
    "url": "assets/js/vendors~notification.046e73cf.js",
    "revision": "d530c449ee956eaafe2bc091e7760902"
  },
  {
    "url": "config/index.html",
    "revision": "1a017d08f28c11f1f59b805293ac68e1"
  },
  {
    "url": "guide/assets.html",
    "revision": "4834c2a196df72fd26f8ea5549e3c250"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "2e9b3f9bdb576f9b7859b3d342d9040f"
  },
  {
    "url": "guide/deploy.html",
    "revision": "be32e83fb8b5f8a8e14fafc8b4f4c4db"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "e8bf63ce9ba35483eacf9b7e91dd9b25"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "1ecab27a7746afc3c0f4244abefe53f6"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "504ffcfc8ca927f17bd3474ac398bdfe"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "ec2d0e5fb058e92db1f98e7c292512d1"
  },
  {
    "url": "guide/i18n.html",
    "revision": "f0e8508cbfb4bf54eafe72e8d4c7a9d4"
  },
  {
    "url": "guide/index.html",
    "revision": "3572d34d00ffcfc0982513eabe967aa0"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "bf7b1204ae51335905252bf943182169"
  },
  {
    "url": "guide/markdown.html",
    "revision": "53b2e9bf95735e5199c85d82aca03b35"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "d3bc007ac9869d8ed37c287beae4e108"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "61ae010b237d938699ecc138293f848f"
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
    "revision": "59b70434554a9d62de3b44933699c309"
  },
  {
    "url": "java/index.html",
    "revision": "c4db93ed507a8161435073c8f77de79e"
  },
  {
    "url": "java/JAVA多线程与并发.html",
    "revision": "c7bc3f81283fc12ae58497025e3e25d5"
  },
  {
    "url": "java/JVM.html",
    "revision": "e1a65fadcfaa85a615068003d8a57700"
  },
  {
    "url": "java/using-a-theme.html",
    "revision": "55e16ae4b57e7921283c1bfd1eb9ad82"
  },
  {
    "url": "java/writing-a-theme.html",
    "revision": "f46e05be32ee23c7dd75d6e62398a3e1"
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
    "revision": "8e92360ae66212f66f158803fb16de59"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "a2b2bfc9bce5ba38ec32549183d9fc5e"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "26c67a5c733981fc025691968d0d70e1"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "3c808d145d6af272db42bacac4eb1ccc"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "5fdda63d313191e5ee1ef1cebbf6d3d4"
  },
  {
    "url": "plugin/index.html",
    "revision": "0c43815416e1aedb502859c6d4b4c4ac"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "dd58a967187c6c623e188cf05aeaf531"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "7a8715de921293509f0231e8e2541e28"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "cf8bd242d15e20e18178cd9ef021fb00"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "937560925544b9d9c817d0dce7d8a38b"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "6eeb5c9a956bd30cb346c28c6ceaafc9"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "30b04a85dccc492d54918b3a753d5bc8"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "e16a4d5d5860b86aa7caaab13fd70d36"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "55139ec7bf8fe21a62a384264268ee10"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "f4cd323906bfe37e5289b74b42e9ab60"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "bf5beccc32e08578a07dbe275553049b"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "5e532f8dda8174dff4a24907598f2431"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "986ce686eceb4f83795deb7928cfa762"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "2d6643c0f3aaee8eda94e084ad8cc58f"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "3d4c5db73e1c6bce5ff6171b5e803d96"
  },
  {
    "url": "spring/SpringBoot.html",
    "revision": "383cf32ff4259f3012103006d5ad130e"
  },
  {
    "url": "spring/SpringFrame.html",
    "revision": "6d8735e029297bcea41e5917b40769da"
  },
  {
    "url": "spring/SpringMvc.html",
    "revision": "886db23c68f0f369de6c4433f0aaf11f"
  },
  {
    "url": "study.png",
    "revision": "1200759f3077a9258ab72369289caa0c"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "17a0189ff87d6c46fc79f8ad4ae06d8a"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "5e9854b0e12bee32c1e9370edba142cc"
  },
  {
    "url": "theme/index.html",
    "revision": "8dcbb584ad31ff811b93d3a4edbb43ee"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "0f288b1fc3969bc13c0afa8c82ec5c1b"
  },
  {
    "url": "theme/option-api.html",
    "revision": "34124e9c037c395d1c37adc8fb2fc2ec"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "75221cfd154818cf47564fbe4a93e9d2"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "fd9fefa13a4de67a9a49aca59d8b0c37"
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
