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
    "revision": "4f1aab0dc6460efb36bc5f0555d13034"
  },
  {
    "url": "api/cli.html",
    "revision": "a42e19de56bfd79bb0a2e21ec0ba2281"
  },
  {
    "url": "api/node.html",
    "revision": "ccdef19e97670343e5110c938bd9924d"
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
    "url": "assets/js/23.e9300937.js",
    "revision": "c155530f208ccb69eeade2a4b2b0a08e"
  },
  {
    "url": "assets/js/24.4e1375a5.js",
    "revision": "ad1d99b5e147434f75fc362a2126f872"
  },
  {
    "url": "assets/js/25.7475ec2e.js",
    "revision": "769be791e7b52d79ccfb862eb602696d"
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
    "url": "assets/js/28.75ecbcd1.js",
    "revision": "f37791255ba73a80dabb81901cb4c06e"
  },
  {
    "url": "assets/js/29.f0f92d87.js",
    "revision": "382be8e463d5091e1eff249092b4bb7f"
  },
  {
    "url": "assets/js/30.4c9e1307.js",
    "revision": "c8c566a4aefd0f55d4f9f1a38cad7e69"
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
    "url": "assets/js/33.13b11c2f.js",
    "revision": "6e6c4c82e40ff134550e05b8ab7fec0d"
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
    "url": "assets/js/36.5b45428f.js",
    "revision": "0e738a8e854b8d7cd8df2657ac015485"
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
    "url": "assets/js/42.41d27ed2.js",
    "revision": "a9f63179de1bcea9e419e2732df852da"
  },
  {
    "url": "assets/js/43.3766812a.js",
    "revision": "79a3e249f5def555d67d1c1addb8eabd"
  },
  {
    "url": "assets/js/44.52535a11.js",
    "revision": "5b21a650ec42688adb11150e40ed1ad4"
  },
  {
    "url": "assets/js/45.b9dd2cf3.js",
    "revision": "a970e1d246afe19c35e77ba02ace4459"
  },
  {
    "url": "assets/js/46.d33df81b.js",
    "revision": "2776c87e78c1fc1b8e8df56027631bcc"
  },
  {
    "url": "assets/js/47.4e67925f.js",
    "revision": "bc462961bc441c00bec246f25ed7c091"
  },
  {
    "url": "assets/js/48.1b4cf3ac.js",
    "revision": "03960776f3ffbe928a8fee7c060cc312"
  },
  {
    "url": "assets/js/49.015f5927.js",
    "revision": "d566ecf2368a28a4912a68cdc5804095"
  },
  {
    "url": "assets/js/5.cb5a609b.js",
    "revision": "467a771b5ff880d22c0e20f92d3c70d8"
  },
  {
    "url": "assets/js/50.3708133e.js",
    "revision": "35b1d6f9dc49a46223b1b90c1e2e23fc"
  },
  {
    "url": "assets/js/51.a254fe50.js",
    "revision": "f118382b73ddd9613da9531468bbe2f2"
  },
  {
    "url": "assets/js/52.4cd55f68.js",
    "revision": "98ea43fe279635267f862dc0c260fa15"
  },
  {
    "url": "assets/js/53.6366c8bd.js",
    "revision": "27c93ff409c95c959816f7f0e306267c"
  },
  {
    "url": "assets/js/54.9e43fd75.js",
    "revision": "ea8a1255031bbf7cdf3a55d9a3289cee"
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
    "url": "assets/js/61.4445a425.js",
    "revision": "343a504f46d26d92ebe151715248e35a"
  },
  {
    "url": "assets/js/62.4c89cae3.js",
    "revision": "4924727347b072c975d0139a23866a75"
  },
  {
    "url": "assets/js/63.cfd5861a.js",
    "revision": "73aaf4ae92a61efe411f06c230808d7c"
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
    "url": "assets/js/app.7245e63a.js",
    "revision": "f40977449aa0f996f260ebdc344c157c"
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
    "revision": "b5d333049d2d1e6d2d0af7ee5d9f7327"
  },
  {
    "url": "guide/assets.html",
    "revision": "9531d37a87b215afa3c503fae184f53e"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "cc898cac3ea909a923d5f9ec410765a3"
  },
  {
    "url": "guide/deploy.html",
    "revision": "4f7f1b6caf8fb9ac11f761f024786bf2"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "83af4eaf9ef5540ba0e5b4f2833ceb9f"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "d5896f10ffbc7a7b9990500085dd0963"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8e2fc45279944f01efdf2d3171242652"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "72ca05d6fb2dcc5d4777d6bbb2f3532a"
  },
  {
    "url": "guide/i18n.html",
    "revision": "8b1d8ffa02bcb5d6c268082351346a8e"
  },
  {
    "url": "guide/index.html",
    "revision": "d4734894e59758509a7d0002a08166f6"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "915f7f129713ec975bfd88caa6a26d46"
  },
  {
    "url": "guide/markdown.html",
    "revision": "160ddda9f7bd79e2b0a61185824e8379"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "eb613e831cb76667b4b6bf40f3e2ea3f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "55249dd7078072434f80a716f5e5592d"
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
    "revision": "ac58a324716131db70a6a319ca6e0904"
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
    "revision": "7aac9081fefc762dcc70bcc192393699"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "2e0d1cc74da21d3197a01c1b9cdc261c"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "5cc35da9074c8287d4bb849489cd4080"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "4ad67978ecaa412e2323f3799deff04f"
  },
  {
    "url": "notes/index.html",
    "revision": "86ba5319cd802b9d60cae0bacd8716a2"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "a7c0251c316ab53cae4ae43336e101dc"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "90abe0147f6796b334b701765ac55871"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "09bc8a716ed35d252ae67d8f85f8b08b"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "ffb2f142c99e2077e873225cda56b41e"
  },
  {
    "url": "plugin/index.html",
    "revision": "9c0197a7dddf50c86771359a8bbbd91a"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "1da17c906229413a3bf9664936facc34"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "6f6f92d424bc44584c1d0b44c966216a"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "4b41c10e57df7066b553d361993cb7ae"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "1931e91e05c54891cd7b829b30b77182"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "03c8d179f3bc3b5c090f3a5b13bd4661"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "f408a0e1ede2c01ddabaadf1647856fe"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "f4b575f88d5e2a9dc5f0064865377956"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "d24b2cc78cfeb0cfa27cc52bc3838bcb"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "2f9211705342e6eaf826bab94b46ff35"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "9970e804b0a4aec3acd612b6f193a343"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "3eaa001114877e617f39a42f5c7bc366"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "a8f72658a81376add183765aa9ce8c0b"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "a2e9d19f46ff1f71334257a29e28825f"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "550e9379b7ad39148cf07c8cd759b05a"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "5fe0b9eefcdc76cf73cd8ed4c4e66631"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "c411021aceb1cde5d5ae0da5a064c5da"
  },
  {
    "url": "theme/index.html",
    "revision": "82f0ea13aeb934f84ef9347e557f15b7"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "8b4f32db87a942f949515b37927f3460"
  },
  {
    "url": "theme/option-api.html",
    "revision": "c27f25dbbf14ed7db78c8a036dde1ff9"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "54119f4c4bc52f8c3e1678ded5b932a3"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "97a788a2fb20c3c3579c20b866448db2"
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
