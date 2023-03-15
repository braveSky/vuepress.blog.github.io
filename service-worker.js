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
    "revision": "66262a1e0f937d1ea81a4067333946ff"
  },
  {
    "url": "api/cli.html",
    "revision": "b7efd602906239dd753164b2d94eacc5"
  },
  {
    "url": "api/node.html",
    "revision": "1e405f7ebf3ad46636dd2de58f0a460b"
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
    "url": "assets/js/10.b9e1deed.js",
    "revision": "ac3b67b5c7cd12d7a66b2d9b23d89b8c"
  },
  {
    "url": "assets/js/11.581d4d2c.js",
    "revision": "b27fb07a767ae42fe4f7118402d4a41c"
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
    "url": "assets/js/23.e9300937.js",
    "revision": "c155530f208ccb69eeade2a4b2b0a08e"
  },
  {
    "url": "assets/js/24.82476b52.js",
    "revision": "6edf573d76f52e5653504b78e8868435"
  },
  {
    "url": "assets/js/25.a81d00b6.js",
    "revision": "8ce01e63a348cdab06da810cefc67bcc"
  },
  {
    "url": "assets/js/26.ff880577.js",
    "revision": "0e0515ad62187390d5df1b8cdfd74e31"
  },
  {
    "url": "assets/js/27.30c2056c.js",
    "revision": "9727b10ab5dccbdd2bcd104032db7032"
  },
  {
    "url": "assets/js/28.acaa7cca.js",
    "revision": "82ad273adfa608bcd0f8c797a85740bf"
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
    "url": "assets/js/32.e3ab46b9.js",
    "revision": "97b8d1e5098804e891718fe2ed355224"
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
    "url": "assets/js/41.7973c35a.js",
    "revision": "25f672e31fbbcd54eb41459eac353e91"
  },
  {
    "url": "assets/js/42.5cd1fcd5.js",
    "revision": "428d2f31eb9e60d0c26021812f0da7ff"
  },
  {
    "url": "assets/js/43.0732b1d7.js",
    "revision": "4bfd38a965c7e7386f6261557f34e125"
  },
  {
    "url": "assets/js/44.52535a11.js",
    "revision": "5b21a650ec42688adb11150e40ed1ad4"
  },
  {
    "url": "assets/js/45.01fb6698.js",
    "revision": "18d4fbcf07d2e61d667c60df7ac17435"
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
    "url": "assets/js/48.219874db.js",
    "revision": "c78353620130fc0c3b5d8e5caf748209"
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
    "url": "assets/js/50.cd2f3611.js",
    "revision": "5c8371c010a06d068c0642de18fcfca2"
  },
  {
    "url": "assets/js/51.b11d17aa.js",
    "revision": "fed2d282dd19ce80b60fa5121dc1fa63"
  },
  {
    "url": "assets/js/52.1a0aa973.js",
    "revision": "7b0f8f23b41027148ef6571283f7a78c"
  },
  {
    "url": "assets/js/53.544b452e.js",
    "revision": "8d25abac3f2ccbe7cbeb63fdb5603941"
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
    "url": "assets/js/56.7ce6879b.js",
    "revision": "10062f0b3cd671bd5f20cb0b0e291406"
  },
  {
    "url": "assets/js/57.2015050f.js",
    "revision": "5c1254ba8a00d2a4c3d20654fd5889f3"
  },
  {
    "url": "assets/js/58.b5d62d1c.js",
    "revision": "423709763b7922f081d6ca24371d5154"
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
    "url": "assets/js/60.b9c018b5.js",
    "revision": "59fd05ca314d8a744f1809f8ce003fa9"
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
    "url": "assets/js/63.2d0fc782.js",
    "revision": "4b54163bf768a324390c088197f2561a"
  },
  {
    "url": "assets/js/64.ec035038.js",
    "revision": "735bb2a6423d0df16437db0a20460dde"
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
    "url": "assets/js/app.617432d3.js",
    "revision": "db6f4ab40a455d0c625afdfae0f2bfb3"
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
    "revision": "8d14260abde28e392f3df24d15c06c29"
  },
  {
    "url": "guide/assets.html",
    "revision": "8adec4b5f630929e6abd4558850b608a"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "490e7f193b3625de03497d41592e4f88"
  },
  {
    "url": "guide/deploy.html",
    "revision": "516b00a217e8a33c3b23d992cd0a886d"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "459dc5dabfb0ee8143e0583c2bc04e23"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "94543b46376a00a4fcc37bc622f8e3da"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0af7961f27fdab6a8efea3d0edec76b2"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "25fa5cd16f102f8ad704427968b139b3"
  },
  {
    "url": "guide/i18n.html",
    "revision": "6e201fbb88bd7b0f904b813631e7cb40"
  },
  {
    "url": "guide/index.html",
    "revision": "68c7e542e7b53167b111a863db24bbce"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "b07432ea41ad9ad130bb5c4f5d273a34"
  },
  {
    "url": "guide/markdown.html",
    "revision": "809570875f3e13e75f3936d32b1d373f"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "7de6526553355217d5ed5f513de8f1fe"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "d577b3dabc17909ec3d427acc7a34d95"
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
    "revision": "2bc06945eb439a6dff7d4e7dd23cda80"
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
    "revision": "7486158ae5eb545a4c96265970bf7ea5"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "9046356aa47d3328f5c4c741eb12bbec"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "872f6cf80b67245c7c01f14fc476332b"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "64420faae67ecb1d109ee40053c1a74e"
  },
  {
    "url": "notes/index.html",
    "revision": "a6e117d230b09d12a980edc6e2784c3c"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "10414ad1690e1cbd94fc07586f222aa7"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "b1f39dfd14055e177962a7ff0866fcad"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "35538b4dbba92a1c3b542d2c7775b332"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "f4ce53fca41779b4573d6122adcc8789"
  },
  {
    "url": "plugin/index.html",
    "revision": "e82fc8d8db2194a73abe1d858f8127aa"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "20a74863569d07a34833ced67b8a0763"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "006243fb202f8ce4b5da2335bf8b3431"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "afa9ee0bbeb196df555c4d47febd2e2c"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "24e9137ee69b9dd1b50a27d4bbf839b4"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "ce093cf61235bbb9d8fc622f99078201"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "9ada96352abff2d59ef296561a299084"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "7c74ee454753cf054d0b038a6e50c123"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "75c4983f1672bbf253cb5cdf54ac1b0a"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "29b89301386187d312a4116c3582cc43"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "5d714c635c78e437f40b9f82b932bc39"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "2540c69232bc6f6bce9b7df217f9687f"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "80bff86ea65377079dcc54edd7bbe09c"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "5f07ee2125b7a1c6d1542680b8989614"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "8675995fe3268c13895553ae8b3ae290"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "4b79244635c7c47665609da0c8ed53d2"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "58893f0fea90a1029c4fdc10b909baee"
  },
  {
    "url": "theme/index.html",
    "revision": "9d3e4077a2ba8911acba064c323d9b8e"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "eb7653121b32b91cfc9231f9dbbb0856"
  },
  {
    "url": "theme/option-api.html",
    "revision": "4737dcc5aa8bce1c48d641b0ca4f2e42"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "e49fd53516b6733f773989c5caee8314"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "ece21dd9d9f397f2cf05b581620f44f7"
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
