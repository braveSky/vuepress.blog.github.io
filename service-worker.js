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
    "revision": "f072b63283b4b2d2462ce6a7499bddec"
  },
  {
    "url": "api/cli.html",
    "revision": "887e203f8cd7bd1d7edd3925ad7d002b"
  },
  {
    "url": "api/node.html",
    "revision": "982a218039091c5060760da7f3f037c5"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.26c4046b.css",
    "revision": "15d4afe40171e045f3b74e30c7f968ee"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.771d39f2.js",
    "revision": "57c0f671a56b1e73b11ceb072e0b6d8a"
  },
  {
    "url": "assets/js/11.0c56300a.js",
    "revision": "3e9ce667162ee70153be5bdc6c67b3fe"
  },
  {
    "url": "assets/js/12.ee054dcd.js",
    "revision": "30f89352105d0382d923a2d9d16b37e4"
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
    "url": "assets/js/15.dfb7bac8.js",
    "revision": "c4ae59124cb06b522b22b5ea3624b74f"
  },
  {
    "url": "assets/js/16.d9401624.js",
    "revision": "99de308122fa1ded2567f6f66028306e"
  },
  {
    "url": "assets/js/17.0cbf8817.js",
    "revision": "01e45c25e64a40cdc9600d1e42927301"
  },
  {
    "url": "assets/js/18.5ef2b880.js",
    "revision": "d4c42cdb04f9d5a82219bc48153ea8bc"
  },
  {
    "url": "assets/js/19.46e31243.js",
    "revision": "8885f4ee45a7aab63f36e6ebc1d920fd"
  },
  {
    "url": "assets/js/20.d325601a.js",
    "revision": "e369cfab25fa17ebfdfa1de8bc279c35"
  },
  {
    "url": "assets/js/21.e5dfaf15.js",
    "revision": "2d7f218bd7e629218719e2f7f8b18e40"
  },
  {
    "url": "assets/js/22.585e55fc.js",
    "revision": "e4dbfb8a3e55a33458267e65ed28f035"
  },
  {
    "url": "assets/js/23.22807aa2.js",
    "revision": "74a9bdf50b71b62883dfed61180428f2"
  },
  {
    "url": "assets/js/24.813bf10d.js",
    "revision": "49a996b699cc777c7585730301a73e60"
  },
  {
    "url": "assets/js/25.46ff90a1.js",
    "revision": "c7285e98ad60b67e60009ad246ce54f4"
  },
  {
    "url": "assets/js/26.ff880577.js",
    "revision": "0e0515ad62187390d5df1b8cdfd74e31"
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
    "url": "assets/js/34.9e9e85e7.js",
    "revision": "273cdf3dc411ee88d0efd2672882fd94"
  },
  {
    "url": "assets/js/35.51cb8acb.js",
    "revision": "b32161f1f1aa577ad64e2b0bcadfda1c"
  },
  {
    "url": "assets/js/36.8c072293.js",
    "revision": "f78c13fc716391e13623ae8925f3eec6"
  },
  {
    "url": "assets/js/37.89fb450c.js",
    "revision": "27e58689a33744da7cc790514fbaa24d"
  },
  {
    "url": "assets/js/38.cb35d4dd.js",
    "revision": "14b45bf654f3ef7a788a53a2d51ab341"
  },
  {
    "url": "assets/js/39.d85282b8.js",
    "revision": "6475b25d896609c7de1853d4e6464064"
  },
  {
    "url": "assets/js/40.a6e675a7.js",
    "revision": "556d8e0fbf8dd94eb2a3c0ee0a587a5d"
  },
  {
    "url": "assets/js/41.57b9ef87.js",
    "revision": "598c50ef4ca293a69e3a10d113d7525d"
  },
  {
    "url": "assets/js/42.d4624fc7.js",
    "revision": "e888e0b81179770dd163785ed5a42eaa"
  },
  {
    "url": "assets/js/43.3766812a.js",
    "revision": "79a3e249f5def555d67d1c1addb8eabd"
  },
  {
    "url": "assets/js/44.f46a1355.js",
    "revision": "ec338d020c8387f0292a607534933038"
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
    "url": "assets/js/47.85fd44fd.js",
    "revision": "a522b74a1d741c4f9bcd7f8fb006b960"
  },
  {
    "url": "assets/js/48.219874db.js",
    "revision": "c78353620130fc0c3b5d8e5caf748209"
  },
  {
    "url": "assets/js/49.c672d5a1.js",
    "revision": "8ba10111f92fbe600768d58334a0daa4"
  },
  {
    "url": "assets/js/5.cb5a609b.js",
    "revision": "467a771b5ff880d22c0e20f92d3c70d8"
  },
  {
    "url": "assets/js/50.cd2f3611.js",
    "revision": "5c8371c010a06d068c0642de18fcfca2"
  },
  {
    "url": "assets/js/51.272562c2.js",
    "revision": "a4662ecab2633db14498196f33b7b704"
  },
  {
    "url": "assets/js/52.ac11c58b.js",
    "revision": "d9f4a5d834829b7f39819829ecae2c05"
  },
  {
    "url": "assets/js/53.6366c8bd.js",
    "revision": "27c93ff409c95c959816f7f0e306267c"
  },
  {
    "url": "assets/js/54.a3ff7d1e.js",
    "revision": "309cf635f5e0aed461801cd887aab110"
  },
  {
    "url": "assets/js/55.ca057b95.js",
    "revision": "3b7f83411c782bf1754ea81b86bfbe67"
  },
  {
    "url": "assets/js/56.7ce6879b.js",
    "revision": "10062f0b3cd671bd5f20cb0b0e291406"
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
    "url": "assets/js/59.fdf1d458.js",
    "revision": "5c01c850b618d73bc4f9e6eb3703d168"
  },
  {
    "url": "assets/js/6.0a18eaf8.js",
    "revision": "e124122e113c632eda26d6d31db5bcc1"
  },
  {
    "url": "assets/js/60.39c18247.js",
    "revision": "989770ad91c80f03805c2d2653087675"
  },
  {
    "url": "assets/js/61.2a3e5c5f.js",
    "revision": "916be68304dacfb4e7b68d5428ff4dbb"
  },
  {
    "url": "assets/js/62.4c89cae3.js",
    "revision": "4924727347b072c975d0139a23866a75"
  },
  {
    "url": "assets/js/63.87f76358.js",
    "revision": "eced03dbf2bd5b42fecdca5acf045cb7"
  },
  {
    "url": "assets/js/64.acb26624.js",
    "revision": "e7e33c0a9ad569ac98f946602c8d8d17"
  },
  {
    "url": "assets/js/65.accfab1d.js",
    "revision": "7457c1ffbe886d7bc9d8ccab864abbe4"
  },
  {
    "url": "assets/js/66.0a54d48c.js",
    "revision": "b56e3102f02577f37e4eb32a9de56cad"
  },
  {
    "url": "assets/js/7.ce22003a.js",
    "revision": "0dd9b09af727bfadb2ab3d84a97a4259"
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
    "url": "assets/js/app.9685cddc.js",
    "revision": "d856ca9e8e865e8a7db46a10c4656bb3"
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
    "revision": "33142e67411c16d0848285de1f508bbf"
  },
  {
    "url": "guide/assets.html",
    "revision": "af5d47844ebd7c6688768331c5048786"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "bb7ca758d0d7619f6a274e125bf3486e"
  },
  {
    "url": "guide/deploy.html",
    "revision": "2ac05834e6f40dce7dcd0ad5094ca818"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "644f0cba91b33e80f1c66ec81469c1f5"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "ae5cfbce088a961c5d0ac894c0aaeabc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "651835bc6c7e0a4d2552ed43ade7739f"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "2add1ba0c8d7b05ef7ccf5972a1c6b2b"
  },
  {
    "url": "guide/i18n.html",
    "revision": "50ae9aecef19fc3f796b6deba469170c"
  },
  {
    "url": "guide/index.html",
    "revision": "2da5b86ff830121ff841ae156f3f09ba"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "74d81b1bae1b54c75c954ef70e6c6fc7"
  },
  {
    "url": "guide/markdown.html",
    "revision": "f64b6b5bbf490129a4ca22898796a669"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "5c7f794ce6823d2f9bc80aeeedf048c8"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "2c22c9957714d5fc0f5c5174d9d31cc2"
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
    "revision": "e553342abe0eb3d67f78c77a56eafc35"
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
    "revision": "1e952cbd91047a7576044f7dedd7b2ca"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "f58c3dc324e360243dbf908dc181f407"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "9f687a6d571f27e8860badacb7e7322c"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "eb8ac542f4901e031d6a487c8e16400e"
  },
  {
    "url": "notes/index.html",
    "revision": "ba940b2fd1a0beb7a47474f2cf8b4c6b"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "aaf124159fef9fc15e9d7a4a3ef8ea2f"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "afd0ebb93bea928fd6ff0a6c16ca3eca"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "283fd769530955f3e5ec1b78c9bda7ec"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "6f1c6b2305656f7b920c6f92c7672b51"
  },
  {
    "url": "plugin/index.html",
    "revision": "3b032d6d44e51176338bc834b2411a5e"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "8ae634c8483327c50dd2138c58cc45a2"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "89a4d022afd1b094d700af74e9736284"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "87e5518b2a6dc8cbe4a5a34d9235737a"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "785aecffcc8dc85356694d83e73a72a1"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "2b0e8b87bedace535929cfe4b1f25656"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "494d650e90900378c9adc4503a939fe3"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "969bb0d7cd168e39b33aa95a84ac3c0e"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "5239a27dca4f307d94eb83a11ff4baa6"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "137373ceca12e0340a5291619fe60f79"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "74ff87665584c50bb81c3772682e1db9"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "3ad5ec6a72ae796fbba3f5aea6cd430e"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "f65d86dfd9186a5a35d46f1a878d7cdc"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "299d1922f75dcc740ea2c1b9c89fe5f2"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "88e046aeb0bae6477ceec8651d25fc3b"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "c3bf25e350f4a01e3677c8bdecccc797"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "437ad49b8c323e5efc107b6d6f5e747d"
  },
  {
    "url": "theme/index.html",
    "revision": "88dc4cb07445a671b3605869ef5a84b1"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "4a1bef6d433e91cf1beeb90756c502a6"
  },
  {
    "url": "theme/option-api.html",
    "revision": "4905197e66627af549b4ba49a91e7abc"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "ded69932a886ec49b49985feb3913979"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "0854c0b2d08fbca5220885addf6ed971"
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
