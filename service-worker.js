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
    "revision": "7aee753759840ed8dd3a938c878c693f"
  },
  {
    "url": "api/cli.html",
    "revision": "243257fca56edf261c8d8cdd6c3df061"
  },
  {
    "url": "api/node.html",
    "revision": "e5ecfe6b128946c321bdc11a039878af"
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
    "url": "assets/js/15.3d877816.js",
    "revision": "fce681c5f25f2adc487b23bbc9b43025"
  },
  {
    "url": "assets/js/16.d9401624.js",
    "revision": "99de308122fa1ded2567f6f66028306e"
  },
  {
    "url": "assets/js/17.cae5dc86.js",
    "revision": "cf65ac0b1feaf756e0251dc3f05f519e"
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
    "url": "assets/js/23.ce4a84c7.js",
    "revision": "ae816686da0e865840a92e5245419404"
  },
  {
    "url": "assets/js/24.a1f1274e.js",
    "revision": "a318052ccb293168161cf533986b9374"
  },
  {
    "url": "assets/js/25.d75f580c.js",
    "revision": "4af05f2695b8c5d9301fc6142515d86e"
  },
  {
    "url": "assets/js/26.84f15ffb.js",
    "revision": "14cbdb44410dcac2dcfc197f64c67647"
  },
  {
    "url": "assets/js/27.716b6158.js",
    "revision": "6ca2d77dcc2393134a901a4af4b7c9ff"
  },
  {
    "url": "assets/js/28.75ecbcd1.js",
    "revision": "f37791255ba73a80dabb81901cb4c06e"
  },
  {
    "url": "assets/js/29.f77d4f1b.js",
    "revision": "8df2725cee97ef0baa1893e7943b4656"
  },
  {
    "url": "assets/js/30.dabb10bd.js",
    "revision": "59512c0725f0d30fad1de3c405fd02ab"
  },
  {
    "url": "assets/js/31.72a3bed1.js",
    "revision": "2ba2436dc3b5fe78b365cd92aefe2054"
  },
  {
    "url": "assets/js/32.abcde42c.js",
    "revision": "3a27a59c8834e20ae98e2e39addc36e8"
  },
  {
    "url": "assets/js/33.8f800028.js",
    "revision": "82fe405db50d39f7e9210f2f36ea4a93"
  },
  {
    "url": "assets/js/34.9b7326f7.js",
    "revision": "3faa7eb6850ab1053d520b4398d531fa"
  },
  {
    "url": "assets/js/35.51cb8acb.js",
    "revision": "b32161f1f1aa577ad64e2b0bcadfda1c"
  },
  {
    "url": "assets/js/36.3703b1ad.js",
    "revision": "9bb6f0aa5720ae2db37f5cdbdfae3070"
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
    "url": "assets/js/39.759321f4.js",
    "revision": "c6645d880566feec0df8ac43ff373b4f"
  },
  {
    "url": "assets/js/40.713fada5.js",
    "revision": "47bacab656b50dd47ab2ac883157d18a"
  },
  {
    "url": "assets/js/41.cddcaad5.js",
    "revision": "7edab2708374fe9aa95a1966ac4c1a31"
  },
  {
    "url": "assets/js/42.ad64ffbf.js",
    "revision": "466393fab0dfaff3823c1aa25b29633c"
  },
  {
    "url": "assets/js/43.42d23cf8.js",
    "revision": "aa587f18ef0f14588c8703897fd7e1c7"
  },
  {
    "url": "assets/js/44.f6164cbf.js",
    "revision": "6b422228e9c1ec588e4779fd5fc2f31d"
  },
  {
    "url": "assets/js/45.9db650ef.js",
    "revision": "937792fc9164a55866c412e027727041"
  },
  {
    "url": "assets/js/46.bc4b2ea4.js",
    "revision": "113f6c7ce995b4279117a6caa0169ede"
  },
  {
    "url": "assets/js/47.a2690c96.js",
    "revision": "f4a5cc1f208ab8871d7e8927c7b952a2"
  },
  {
    "url": "assets/js/48.5c0d81a5.js",
    "revision": "61dd23be54fdd2d559d41e62eab09d90"
  },
  {
    "url": "assets/js/49.f5ac8fee.js",
    "revision": "9485aa257183f348fec41d14a736b722"
  },
  {
    "url": "assets/js/5.cb5a609b.js",
    "revision": "467a771b5ff880d22c0e20f92d3c70d8"
  },
  {
    "url": "assets/js/50.a52d827f.js",
    "revision": "c06114d980164337ccf12ac8add3eca5"
  },
  {
    "url": "assets/js/51.08c1e55b.js",
    "revision": "bbaecd91944d3aab52b425f8ee429299"
  },
  {
    "url": "assets/js/52.d8c85b44.js",
    "revision": "da522a28915e22de614aceafff4f83bc"
  },
  {
    "url": "assets/js/53.cf93ec41.js",
    "revision": "493bf0817a73250d7a9387c2664fff2b"
  },
  {
    "url": "assets/js/54.db7926fd.js",
    "revision": "bfc41420c1053562191728d62033b3ae"
  },
  {
    "url": "assets/js/55.3297a5c3.js",
    "revision": "fad09667d7ffb3f1adac65a485f64f40"
  },
  {
    "url": "assets/js/56.363f3819.js",
    "revision": "b139b05e2a22fb01ffe8faa2b2df3b6c"
  },
  {
    "url": "assets/js/57.ca62b8c0.js",
    "revision": "999bae59c8eb3fef1b8940349e7228b5"
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
    "url": "assets/js/61.2a3e5c5f.js",
    "revision": "916be68304dacfb4e7b68d5428ff4dbb"
  },
  {
    "url": "assets/js/62.0d7258ac.js",
    "revision": "ef64a104720721fe83a30add507bdb0c"
  },
  {
    "url": "assets/js/63.75a0a8de.js",
    "revision": "a0f63953eaf43684ecd8897df36679bd"
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
    "url": "assets/js/7.5694a969.js",
    "revision": "041e45a063d7e3f0b5adfdff6a1167a7"
  },
  {
    "url": "assets/js/8.247cf266.js",
    "revision": "495729a4212ac8b20baa7a9620e8f609"
  },
  {
    "url": "assets/js/9.8cc26217.js",
    "revision": "afe478c158d02b05ecb98df350288763"
  },
  {
    "url": "assets/js/app.293fea18.js",
    "revision": "13b1f67b255cca77ea5d20b48ab97c0e"
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
    "revision": "e1f1775c11212a88a518d46f4289950a"
  },
  {
    "url": "guide/assets.html",
    "revision": "291e07b73cdb6dd28b921d18ff610abf"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "ffd85b6d2857a447df41a0fac72e3b17"
  },
  {
    "url": "guide/deploy.html",
    "revision": "94aeea3e0f5e25cdc4ad244c944deee7"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "b76069716e59fca6e8ebb72c3f740f9d"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "11e78e5b4524ced6e08d6e10eb9d05ce"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f25e37f1725bd17b9f82faa118f34af1"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "70bcc296fc256f5f0886a9453a8d83e1"
  },
  {
    "url": "guide/i18n.html",
    "revision": "de73c0ac8b36f57fffd381ea5c3b0c01"
  },
  {
    "url": "guide/index.html",
    "revision": "abb961e5f4b9163c0dc6d1242f0d1ae5"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "6dd2b2aee11a816a50d447e735b10816"
  },
  {
    "url": "guide/markdown.html",
    "revision": "af95b15e10a4e504e662234600a7a2a5"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "49c27cd2659701e72421e14f18ab6dc4"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "3c55ccf5d3e7859057e16abf0ba5e97e"
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
    "revision": "02fa19ff64ab27ac85dfededfafce44b"
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
    "revision": "ce9e8ddf39260e9cd761370a8f40c5da"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "6683b48c8df10e8581e5a9583aa481a1"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "dd1f32f6bf498a56d9a47b5005bfd681"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "afc57701be7fe5e6301b37b3a98fe4e0"
  },
  {
    "url": "notes/index.html",
    "revision": "fe968fcfa46dc3b5d4a624331076bf7c"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "c6fc38aa34de4802637e08b28f1c711f"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "0ea35e602e82bb2bc77701d93bb4059a"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "6d34b27a5d6e5b65d748f59b865cca7e"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "e645b2faf2ca371e96e5fcccfe6791b6"
  },
  {
    "url": "plugin/index.html",
    "revision": "81b40e2bc2243d5a918e854521317362"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "c351d900ed7a9d9a1f56300d3ab23124"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "e9f640688f6535b6bdad7ba35cef1ba4"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "1fb9e7382923a90c7f26d320b0347459"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "15b566c3f7afd6d1f751e5f5bb3c919e"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "51c86e3a0f01f045b8073ebb9f3e0594"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "67dbb93f6123a7342a1558140ab8091d"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "09ca486831150d0164c31a5090f5c1b1"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "a780dbf06ac359333804a8542991c105"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "d4ba5fb4211cd4e21b6e5ed8a93d2afc"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "ee0b74465d515d07ef4fefbf4a6bbb0c"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "ab9dfa05f937d96ade445b0d7450cb66"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "c143c310a08eeb68be7a0a48254308ce"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "36d902f45b0843d3cf5b8f726eda8c64"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "1e2115dd78c351f2245c25386748ecdb"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "3a900e756c128e825330bdc6216a932e"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "cfdbb4547d25c746549584c97d903e74"
  },
  {
    "url": "theme/index.html",
    "revision": "f1b9bdcd524fa2d104bc7a6131d54621"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "951ca69bad17c153c1c7ce369822b1b4"
  },
  {
    "url": "theme/option-api.html",
    "revision": "1acab142b9a6f27d7a4617a11da81215"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "1f87191280df8d1c44f6663335f199ff"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "4802c3c8e9e558046c3eda93c5f93698"
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
