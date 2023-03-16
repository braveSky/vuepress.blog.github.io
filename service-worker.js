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
    "revision": "86fbbf36ef1895993f7eea9f9a537ed0"
  },
  {
    "url": "api/cli.html",
    "revision": "90fee0d2afd6e98e6820aff33f375c32"
  },
  {
    "url": "api/node.html",
    "revision": "72ad915f4613c2eca703c9f8271e4f2b"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.f278ff0b.css",
    "revision": "cb653f2372b6a917164eae5b376fe0d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f3c02b11.js",
    "revision": "6e1e03cc0ce5a9cf9539f4573a2320e4"
  },
  {
    "url": "assets/js/11.0c56300a.js",
    "revision": "3e9ce667162ee70153be5bdc6c67b3fe"
  },
  {
    "url": "assets/js/12.3260e115.js",
    "revision": "1a72a6e499ec2ae79eeef383dd4949f3"
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
    "url": "assets/js/17.8055f4c4.js",
    "revision": "76dd55f53d03757b00e497307b85e3e9"
  },
  {
    "url": "assets/js/18.5ef2b880.js",
    "revision": "d4c42cdb04f9d5a82219bc48153ea8bc"
  },
  {
    "url": "assets/js/19.a8095155.js",
    "revision": "960ded8b15f860eee507fdfe46694965"
  },
  {
    "url": "assets/js/20.5bf0e753.js",
    "revision": "6c28aa01de825d71d4793b111e2214bc"
  },
  {
    "url": "assets/js/21.03ffaf07.js",
    "revision": "522862abc8f22dccbc0381ed41e6ccbc"
  },
  {
    "url": "assets/js/22.585e55fc.js",
    "revision": "e4dbfb8a3e55a33458267e65ed28f035"
  },
  {
    "url": "assets/js/23.35f35098.js",
    "revision": "888238a5448c28309015725a5661d8ec"
  },
  {
    "url": "assets/js/24.4bb2b236.js",
    "revision": "cba6de1e0a79bec17d315a152ccb4f5a"
  },
  {
    "url": "assets/js/25.9b70231a.js",
    "revision": "5cc493b1603ba871df0b5f2d2d1c06f1"
  },
  {
    "url": "assets/js/26.637dab96.js",
    "revision": "bcfcdf3171619d5f67642dbc7ca8cf24"
  },
  {
    "url": "assets/js/27.a7d3aff5.js",
    "revision": "35b5c131a308bd238639bb35dc1935e6"
  },
  {
    "url": "assets/js/28.e37d27a0.js",
    "revision": "c2a30f90481d49ee3bd3181bc1710983"
  },
  {
    "url": "assets/js/29.ba4286b3.js",
    "revision": "5c750960362e36f4e686d8cd31ca4c73"
  },
  {
    "url": "assets/js/30.faa00c62.js",
    "revision": "0c91ee0042724282eff6e7cf903b9417"
  },
  {
    "url": "assets/js/31.ba961818.js",
    "revision": "79113c249915fdb887935b36aee64430"
  },
  {
    "url": "assets/js/32.0b5be7aa.js",
    "revision": "334913bf0a0d8b150f43378ddf6678ee"
  },
  {
    "url": "assets/js/33.6910a83d.js",
    "revision": "59d936d94b751a248cc5c607b3839f0d"
  },
  {
    "url": "assets/js/34.f6ce004e.js",
    "revision": "0344aceb903100821a79c9e06e9ae2a8"
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
    "url": "assets/js/37.dc43e359.js",
    "revision": "107cfab19f82a15264df78a6a6a7edd1"
  },
  {
    "url": "assets/js/38.4d856ded.js",
    "revision": "6dd28c849936d254efaf382c0451d749"
  },
  {
    "url": "assets/js/39.9f276562.js",
    "revision": "27f6ffcefe9b38e7413885f7e9373ddb"
  },
  {
    "url": "assets/js/40.713fada5.js",
    "revision": "47bacab656b50dd47ab2ac883157d18a"
  },
  {
    "url": "assets/js/41.0e92e57e.js",
    "revision": "147e0438e0089a08dd51e1de6e27682b"
  },
  {
    "url": "assets/js/42.d4624fc7.js",
    "revision": "e888e0b81179770dd163785ed5a42eaa"
  },
  {
    "url": "assets/js/43.556352be.js",
    "revision": "432c300a7404cdd40056d6e97254e7de"
  },
  {
    "url": "assets/js/44.3873725c.js",
    "revision": "c80e3cfbcfae23f75d7849f70b4dc86c"
  },
  {
    "url": "assets/js/45.fcd4e846.js",
    "revision": "630566247d029c2cdad80732ab0c9d09"
  },
  {
    "url": "assets/js/46.995a3f28.js",
    "revision": "465c3590e94613214e2bdbf0219438fe"
  },
  {
    "url": "assets/js/47.02e588bc.js",
    "revision": "0f3947099c2d707eb08fd014cf1d5926"
  },
  {
    "url": "assets/js/48.45badd63.js",
    "revision": "e19ab27a4f8461484645848fdc47cc3a"
  },
  {
    "url": "assets/js/49.698632f9.js",
    "revision": "d469dee2d8d7e06f5571d58c749b4d53"
  },
  {
    "url": "assets/js/5.cb5a609b.js",
    "revision": "467a771b5ff880d22c0e20f92d3c70d8"
  },
  {
    "url": "assets/js/50.b6b87a4e.js",
    "revision": "2d6ed4e8acf99de9f2fee6b5b2afd8a1"
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
    "url": "assets/js/53.cf93ec41.js",
    "revision": "493bf0817a73250d7a9387c2664fff2b"
  },
  {
    "url": "assets/js/54.497fe0bb.js",
    "revision": "ca22cee36e8b79ed5f3f3761e78eeec1"
  },
  {
    "url": "assets/js/55.a6890592.js",
    "revision": "e6827d5c62e7811c4d0103125a16780d"
  },
  {
    "url": "assets/js/56.4eaaa58e.js",
    "revision": "fc12369af51ba9460973d3931245560e"
  },
  {
    "url": "assets/js/57.e5af4d42.js",
    "revision": "42b911760463289dd3c36b31a48a5eb0"
  },
  {
    "url": "assets/js/58.793548d8.js",
    "revision": "e3144cff5c542445cb4210da81caadf7"
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
    "url": "assets/js/61.55f106f2.js",
    "revision": "16f63161b1406898d52aa592555c95f5"
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
    "url": "assets/js/64.17e2fee7.js",
    "revision": "e5a7340a86b4dd8c79baf0b6c7cae98b"
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
    "url": "assets/js/7.a90c9ecd.js",
    "revision": "25ac3311b628cafd467fbbecd1ef518a"
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
    "url": "assets/js/app.168e3255.js",
    "revision": "237395860aaea6e62aaba6e660189bab"
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
    "revision": "b36afb872b4ff9a1ef5297fb205f4203"
  },
  {
    "url": "guide/assets.html",
    "revision": "a7c14daf7e7fc06db397b6b727e93673"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "9769d4fcfb8729e32e2380e38bf815ee"
  },
  {
    "url": "guide/deploy.html",
    "revision": "9b1163d503d2e5e75729769ed1698d17"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "61d672f6557e8bc8a9b9e93338de7fce"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "2da506ba7a63060b36fb44dc7b6d5942"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9b1fbf8d64b60c58dee2a8dc98362def"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "e746d751c8bcf98a1c432d7d66b84f00"
  },
  {
    "url": "guide/i18n.html",
    "revision": "eec4187b592b1de263c26aef993ff7b8"
  },
  {
    "url": "guide/index.html",
    "revision": "19d4da55eb0fc52d749042e2d4d8c3f2"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "a671e58131e82d8fcedc4f27282a7e3c"
  },
  {
    "url": "guide/markdown.html",
    "revision": "547c9fcad7a47a4429b17f6fe29ee024"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "489d762cad4eb9f6129dcb223f4db9ee"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "08dd998c6ce2eeaa0a17dc88d47ef0f3"
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
    "revision": "14edc9c1249265bbca8ef7a0af95f3c6"
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
    "revision": "724625e2bd1368dbc09a7a60d959ecba"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "a8022a867db3dd07bc7ecb6349961def"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "24dc980e5e7da49f7a48ac2b6742e479"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "e77e21c3a4cab0bfe9cb2d56fd424d95"
  },
  {
    "url": "notes/index.html",
    "revision": "f34069fb058577efef808fae916319f1"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "6b73b6b9004999a2b73d989fd29097f0"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "8d887f741d105d1a5fe35df10178c3ce"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "fb3bc24b1ca0e22927ab2beb4454f236"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "a5c6e5a46f42dad65cc8e27787681f73"
  },
  {
    "url": "plugin/index.html",
    "revision": "3f0d3336be39cad21710bbb3cb950e70"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "34df001013c4ccf5f88078defe1d79ea"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "c80d6de8a1bde94cbbed3d9a7bfb8a24"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "5fb8bd6463166578b2bb23c37db4518e"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "075cabe49c222b1af8773415a47bf0c4"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "be17f9976b6b7efa6a46b84a7bc2b250"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "eea8fdb71bd8956e7a55a35b034cbffe"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "1ee286d35407dac223467e939e1a338f"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "4525e835db3e3bb4bc30d79190eeb3b3"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "6e39fe66e1ef9fff9a640df3325fad14"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "916d21b797568643415f7496845e9340"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "b48f0d55f246e3969f820d5b3d850157"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "f18bf71f6e92c0c361e5fd072a85ee2d"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "0cfacff4ef6fcf9ac2d3298977f891e0"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "5119d6a4f56e8593efea198bd36d4469"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "7534d16d595d1b11699b6359fb378444"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "006c2956dd49238cbce641eaaa930f2a"
  },
  {
    "url": "theme/index.html",
    "revision": "0da8bad76cb503c69ec4a28a3e045cb8"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "5d56e0066a421f550fb0bcf1ea42a488"
  },
  {
    "url": "theme/option-api.html",
    "revision": "38151b44a0c5246c1da7e9c96349ceef"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "0d00372a08b894aad72f1e616ea065fa"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "07bce951881356c260ea07338c3b67c9"
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
