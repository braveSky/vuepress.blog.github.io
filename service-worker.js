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
    "revision": "28bd0b5b909ea24f5095d20e77ce5f06"
  },
  {
    "url": "api/cli.html",
    "revision": "a478a131e49d8713148dfaffddd9b486"
  },
  {
    "url": "api/node.html",
    "revision": "1433bc6453df25297786f66e6a7ff64e"
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
    "url": "assets/js/19.a8095155.js",
    "revision": "960ded8b15f860eee507fdfe46694965"
  },
  {
    "url": "assets/js/20.1b2f909d.js",
    "revision": "71053cd13e5cf808c8846a485d85884d"
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
    "url": "assets/js/23.22807aa2.js",
    "revision": "74a9bdf50b71b62883dfed61180428f2"
  },
  {
    "url": "assets/js/24.a1f1274e.js",
    "revision": "a318052ccb293168161cf533986b9374"
  },
  {
    "url": "assets/js/25.9b70231a.js",
    "revision": "5cc493b1603ba871df0b5f2d2d1c06f1"
  },
  {
    "url": "assets/js/26.907b67eb.js",
    "revision": "857bbdfb6ff752ac5477f3b86f33cf46"
  },
  {
    "url": "assets/js/27.a7d3aff5.js",
    "revision": "35b5c131a308bd238639bb35dc1935e6"
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
    "url": "assets/js/31.2ad3ad8e.js",
    "revision": "0c900be81a1472bcdd65426f3c24d31b"
  },
  {
    "url": "assets/js/32.d6b4bd90.js",
    "revision": "bb8cadc3542271f6808e8783266d7e04"
  },
  {
    "url": "assets/js/33.642d8ae8.js",
    "revision": "2030e9cda4afb3b64eccd020d077dbb1"
  },
  {
    "url": "assets/js/34.abd3a9eb.js",
    "revision": "f26cddc125ff78edbde92a1625e9a6f9"
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
    "url": "assets/js/38.cb35d4dd.js",
    "revision": "14b45bf654f3ef7a788a53a2d51ab341"
  },
  {
    "url": "assets/js/39.5851977c.js",
    "revision": "aec8edb2de24dde787e198df2d5898b8"
  },
  {
    "url": "assets/js/40.a6e675a7.js",
    "revision": "556d8e0fbf8dd94eb2a3c0ee0a587a5d"
  },
  {
    "url": "assets/js/41.f660559a.js",
    "revision": "afde8bb72aea78408161e39e296e4b9a"
  },
  {
    "url": "assets/js/42.22cd92ba.js",
    "revision": "34ee90279bea1f1c915ba58e65b64a94"
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
    "url": "assets/js/45.55d08824.js",
    "revision": "63e13b2401b939933f0982b40af8be92"
  },
  {
    "url": "assets/js/46.78c016a9.js",
    "revision": "7d600dd834e80dce607db19d959466e4"
  },
  {
    "url": "assets/js/47.02e588bc.js",
    "revision": "0f3947099c2d707eb08fd014cf1d5926"
  },
  {
    "url": "assets/js/48.5c0d81a5.js",
    "revision": "61dd23be54fdd2d559d41e62eab09d90"
  },
  {
    "url": "assets/js/49.e9adb0ef.js",
    "revision": "e14e6e7dca516367d85385027cfec6f5"
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
    "url": "assets/js/51.9dfde303.js",
    "revision": "6832a4bc8fd90a2086934c2669c20637"
  },
  {
    "url": "assets/js/52.eb4c2c35.js",
    "revision": "d39960f780aa179decf58601f6eee00a"
  },
  {
    "url": "assets/js/53.dc573ecd.js",
    "revision": "91344001397ed31bdec5700d42807b82"
  },
  {
    "url": "assets/js/54.c8822a6c.js",
    "revision": "61cb7c101ac7b25e7ad800dd2b2aaeec"
  },
  {
    "url": "assets/js/55.fd86d683.js",
    "revision": "063d4e55e7879eb8084f1cd5ae3ef610"
  },
  {
    "url": "assets/js/56.7d7e951d.js",
    "revision": "aa65a2327490bb843a47104435b370df"
  },
  {
    "url": "assets/js/57.e5af4d42.js",
    "revision": "42b911760463289dd3c36b31a48a5eb0"
  },
  {
    "url": "assets/js/58.55ed9f84.js",
    "revision": "8e00610946162d957e3a3604fb99cedd"
  },
  {
    "url": "assets/js/59.5c65b780.js",
    "revision": "94195fba437e3fc6c5e9fdc79383e5c1"
  },
  {
    "url": "assets/js/6.0a18eaf8.js",
    "revision": "e124122e113c632eda26d6d31db5bcc1"
  },
  {
    "url": "assets/js/60.b9c018b5.js",
    "revision": "59fd05ca314d8a744f1809f8ce003fa9"
  },
  {
    "url": "assets/js/61.2a3e5c5f.js",
    "revision": "916be68304dacfb4e7b68d5428ff4dbb"
  },
  {
    "url": "assets/js/62.9aadacd2.js",
    "revision": "46557f52e1534cfed332e54a2a45b659"
  },
  {
    "url": "assets/js/63.cfd5861a.js",
    "revision": "73aaf4ae92a61efe411f06c230808d7c"
  },
  {
    "url": "assets/js/64.17e2fee7.js",
    "revision": "e5a7340a86b4dd8c79baf0b6c7cae98b"
  },
  {
    "url": "assets/js/65.392966a2.js",
    "revision": "6f62adde1164433174842cca7e94c6b0"
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
    "url": "assets/js/app.1258fff8.js",
    "revision": "b1376444224f328f259ac793a56243c3"
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
    "revision": "48e5f61fddbd69ca745444345a25cf50"
  },
  {
    "url": "guide/assets.html",
    "revision": "d54cd951673e4210221e3af7bc3e2b8e"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "1279bdef76b5f1ef9d20e44e6d085aae"
  },
  {
    "url": "guide/deploy.html",
    "revision": "87e86d2057c81fdb31da636d8a006d4c"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "177c1b4fe573844de45a11f913c2ce73"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "6067f093fb7ade8085953b82bb7f4701"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c88718ff2a263826e92e9341985972b0"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "1357dae37e0f35ac665710c39c4a8a92"
  },
  {
    "url": "guide/i18n.html",
    "revision": "603a6ea6a7e8c7590a68b287cce403da"
  },
  {
    "url": "guide/index.html",
    "revision": "f9c0f7b5f2dc65eddc16821ede8a77eb"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "7d3d0c65168d7da465ef30c1f534378a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "195c270d97c8add1a80934f3974519e8"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "f1ff89e21ff1d265fe17cf805ab1d451"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "d286663fab12a74c13eb611d9fa4fe6c"
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
    "revision": "2eee1e4934765cd265aaa36cce4d09f0"
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
    "revision": "7571eb918d951b8a9cabce451b04a391"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "2957ed53b9f350e27607a3ffa8eeb32a"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "aa11813d1c24ce31ab40c1906df41b0a"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "34aeb091da03416d29d8d6b97979f5ef"
  },
  {
    "url": "notes/index.html",
    "revision": "3df6ff888bc0dab25239b96a771321d0"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "d7833d5d38a82a871b7abe05fc32100f"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "5e0fb66dc3fcd22915d2cff4d71b26e7"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "dbe455a82f34804c267bc0dc878ca3eb"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "1e5b863dfefa89f8d6388dce10303adc"
  },
  {
    "url": "plugin/index.html",
    "revision": "4d611d6ea65fe11ccc5b8545ac66eea5"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "827618a052b57c861aca64a231c10ae6"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "9badc21a4352ab8e8444954b18c2e8c7"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "84f2228446629560295a26271e50d23a"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "3ec16ca4017626faba6e27e21eb7cc5b"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "4fd123fbb2638a724b5b434d8ea88e05"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "986bcd505b34b7d9e48d4d4fc4859d0d"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "e7725f612a5c94d7bb2412b706396038"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "5d130411ee7e6b60c40db16682b97dc3"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "a98a5bb1607109957b38507fd27ae6cf"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "2c86a9597d58f2ac63924c6fd0f56842"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "e34f11ad47cae9661533ea7ed08df96d"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "f180386362afcfb936c2e0293de05f22"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "d70e7daeb59bf13ff754f0fe68eb9b86"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "e310eae08e452054c80cf66eac1b81c4"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "d80f31e06a9d70b29a4ea9bb522a3e2d"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "7eac1905a30a81222ebd954850b45cb9"
  },
  {
    "url": "theme/index.html",
    "revision": "c619510f6900ea0d7df813555b1942c8"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "20bf0db93388166613592699bea19c68"
  },
  {
    "url": "theme/option-api.html",
    "revision": "7ca7784148c7f70c4ab0f4d2e724d521"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "91ddf04dcd97361aafa6b417443d0bbd"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "a35f7bf1eef3fcc7d0e9a32947e1dd09"
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
