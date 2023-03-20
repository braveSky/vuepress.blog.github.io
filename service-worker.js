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
    "revision": "560ee2711f8eb89bc8eaf943bd77e820"
  },
  {
    "url": "api/cli.html",
    "revision": "65a297825901657f54adcac619a3fdb1"
  },
  {
    "url": "api/node.html",
    "revision": "4e6fff194772709e91453e7d6813ef20"
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
    "url": "assets/js/20.527a66bd.js",
    "revision": "46f33e72482344f699aa66e80b6b48fa"
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
    "url": "assets/js/24.4bb2b236.js",
    "revision": "cba6de1e0a79bec17d315a152ccb4f5a"
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
    "url": "assets/js/36.c9f28e99.js",
    "revision": "c0724e890171cad66972c24bb8bec418"
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
    "url": "assets/js/39.2aff6c5c.js",
    "revision": "545828f2be4e83aa17646573a029902a"
  },
  {
    "url": "assets/js/40.a6e675a7.js",
    "revision": "556d8e0fbf8dd94eb2a3c0ee0a587a5d"
  },
  {
    "url": "assets/js/41.92e8bef8.js",
    "revision": "64845018b1f4becc6757eb016998219c"
  },
  {
    "url": "assets/js/42.486c306b.js",
    "revision": "41eecfd9683b8e609c89279f08b56e8e"
  },
  {
    "url": "assets/js/43.3766812a.js",
    "revision": "79a3e249f5def555d67d1c1addb8eabd"
  },
  {
    "url": "assets/js/44.7dbb2bb5.js",
    "revision": "ee24808ff26d6ec2843ed145c8007bf2"
  },
  {
    "url": "assets/js/45.fcd4e846.js",
    "revision": "630566247d029c2cdad80732ab0c9d09"
  },
  {
    "url": "assets/js/46.6d6eac71.js",
    "revision": "54f21b06ffe194bc671bdc33f8c87f46"
  },
  {
    "url": "assets/js/47.2f1b9870.js",
    "revision": "88db868cd189c7ed7380135199eb8828"
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
    "url": "assets/js/53.6366c8bd.js",
    "revision": "27c93ff409c95c959816f7f0e306267c"
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
    "url": "assets/js/56.34535034.js",
    "revision": "55798f1c73d9b581117ca56bf013458c"
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
    "url": "assets/js/60.b9c018b5.js",
    "revision": "59fd05ca314d8a744f1809f8ce003fa9"
  },
  {
    "url": "assets/js/61.2a3e5c5f.js",
    "revision": "916be68304dacfb4e7b68d5428ff4dbb"
  },
  {
    "url": "assets/js/62.6681d04d.js",
    "revision": "09fa9aa00a7fe026aeec069f55faabb6"
  },
  {
    "url": "assets/js/63.cfd5861a.js",
    "revision": "73aaf4ae92a61efe411f06c230808d7c"
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
    "url": "assets/js/app.3979d154.js",
    "revision": "bc7eadae4694ee95423986a64a636b3c"
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
    "revision": "f7d3a5ddb781322f689a10101516fbf2"
  },
  {
    "url": "guide/assets.html",
    "revision": "2d511d63c69e73e8d95ea5efe0f600ef"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "22e63f15dae78037b094387763d07d91"
  },
  {
    "url": "guide/deploy.html",
    "revision": "61866164bb20c5565ca595aad4dd5ecd"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "d8b91e5a4008e6fffe136788cfc59fc3"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "ad945551bc4bbe75a697c1c07a823ed9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9a0d79de96ee19f812aaf6c5d6ef7a7e"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "8a203c44d95d6f1d1fa202f387fc16ce"
  },
  {
    "url": "guide/i18n.html",
    "revision": "8d3ec8714e2043b0672c9261e626ead3"
  },
  {
    "url": "guide/index.html",
    "revision": "129a133ead16b14b57d90a1cd679faba"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "70c7d6d6d9ab64fd9f223d0c3d81a6fa"
  },
  {
    "url": "guide/markdown.html",
    "revision": "9f016794b41e2b9b1639438d3ddb573e"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "6c4056ac61bc6864fc930d40358582b3"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "b088d5e5a2b5d535769eec943aed717b"
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
    "revision": "123613cc620a64b5b6ca26ae383c6046"
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
    "revision": "74d1474a40cbd96232bbc8fcb634c872"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "ae9a51ddd3e47a4e64026fb783475b5a"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "5987e70b6c2dea08fa05bf3cbbcadc76"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "445be73e4b23fe3728a630fb54f703f9"
  },
  {
    "url": "notes/index.html",
    "revision": "fb4603a50f9edc02056267099f7b3812"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "649f224b6869590eed71b52bb3ccb2f9"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "45c94a1e952a13f7bdab70ce4d4401d4"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "9c852c2229c450bff0ade61a08a70735"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "6d80aa726d084c19778f0dea72b7bef3"
  },
  {
    "url": "plugin/index.html",
    "revision": "3ff8afb56d8ee05a52028c0a0a31069c"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "0f06c7612e646fcd2f8d752237d64e13"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "2d78b72b46c424b6eb6d7d9d35203182"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "d1bf67ad0e0d5ee9a7e849c0e3d0e492"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "b1219e3dcd8c7233e4a45839bf57aa07"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "80bce42ab9b5fbcf94e3b3d0c7b79798"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "9e414b84509b5b7390aff171dff78812"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "7262a7348fc127b3fc051257636a7029"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "f211ac0bc3e81988065e8c0509996abf"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "60e2607bb0fcf201224d64fafb0b494d"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "e431de01e98295f757d4784a8fd8c7d3"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "f34ad89729237f9b7d2bfc8e98a7bffa"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "78b74b6ddce4a16d0dabef6aafae2e11"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "1e6913ef4492a5c0aea38146c56cf75c"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "70b6eb1d2b22882c6d27889eed5ded35"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "b0dec857bd473fd9b8c44b783d17d4d2"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "e4421eaeda14ec3e00ac993f696f44f5"
  },
  {
    "url": "theme/index.html",
    "revision": "01fb19626ea16da361d6a0c97ec0c4c4"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "5949d8339b07e1da880de12877e9253d"
  },
  {
    "url": "theme/option-api.html",
    "revision": "60f0cf59c8bcb23b4d625c9580a70e94"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "d95411e9369acc3b03422ff1bf2e6b8e"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "3e53f6632b0161aa234de12d868bf432"
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
