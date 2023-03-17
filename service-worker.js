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
    "revision": "ce3696089785b804f2412bcf7eeed874"
  },
  {
    "url": "api/cli.html",
    "revision": "da41b8431a0ac35a9c3975d347cee2b2"
  },
  {
    "url": "api/node.html",
    "revision": "f917ccfd1fc1b2ca663043c965fb64e0"
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
    "url": "assets/js/17.8055f4c4.js",
    "revision": "76dd55f53d03757b00e497307b85e3e9"
  },
  {
    "url": "assets/js/18.5ef2b880.js",
    "revision": "d4c42cdb04f9d5a82219bc48153ea8bc"
  },
  {
    "url": "assets/js/19.89a44190.js",
    "revision": "197651589de4f282ffd36bb7478ed896"
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
    "url": "assets/js/23.a4ac6795.js",
    "revision": "1538438774e593ccaa5217fc9da46b80"
  },
  {
    "url": "assets/js/24.8239799f.js",
    "revision": "3945fb3e2cd3e1d7a9523d288d2ec896"
  },
  {
    "url": "assets/js/25.14abc54a.js",
    "revision": "97d10fa9c390be25e94661d6a757d27d"
  },
  {
    "url": "assets/js/26.22acaa2c.js",
    "revision": "2735faeadf1552e83b14e74f06e48164"
  },
  {
    "url": "assets/js/27.716b6158.js",
    "revision": "6ca2d77dcc2393134a901a4af4b7c9ff"
  },
  {
    "url": "assets/js/28.e37d27a0.js",
    "revision": "c2a30f90481d49ee3bd3181bc1710983"
  },
  {
    "url": "assets/js/29.433071fa.js",
    "revision": "3e0753960a12643e3ee3da1baeb6d6aa"
  },
  {
    "url": "assets/js/30.c26218f1.js",
    "revision": "6cecc5507d038085633f6d477ad926bc"
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
    "url": "assets/js/34.aa7cee37.js",
    "revision": "c726e8884981c6054500ff20ba7c5ba5"
  },
  {
    "url": "assets/js/35.51cb8acb.js",
    "revision": "b32161f1f1aa577ad64e2b0bcadfda1c"
  },
  {
    "url": "assets/js/36.46c854c9.js",
    "revision": "3961e67d69640618606420924866c640"
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
    "url": "assets/js/40.713fada5.js",
    "revision": "47bacab656b50dd47ab2ac883157d18a"
  },
  {
    "url": "assets/js/41.f4cb1513.js",
    "revision": "77111477930d8d9e57ae1cbf9e5504fe"
  },
  {
    "url": "assets/js/42.0890d504.js",
    "revision": "3987c17fb228d6ed766779dac5f98c85"
  },
  {
    "url": "assets/js/43.7c13d5a0.js",
    "revision": "e58eda34dce09d21a2d406419d92dcc9"
  },
  {
    "url": "assets/js/44.f6164cbf.js",
    "revision": "6b422228e9c1ec588e4779fd5fc2f31d"
  },
  {
    "url": "assets/js/45.32b89d49.js",
    "revision": "8010758dbde9fe8b043e3405c09a8e2e"
  },
  {
    "url": "assets/js/46.78c016a9.js",
    "revision": "7d600dd834e80dce607db19d959466e4"
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
    "url": "assets/js/50.cd2f3611.js",
    "revision": "5c8371c010a06d068c0642de18fcfca2"
  },
  {
    "url": "assets/js/51.9dfde303.js",
    "revision": "6832a4bc8fd90a2086934c2669c20637"
  },
  {
    "url": "assets/js/52.baa6ab21.js",
    "revision": "e7f1f6d87ee9d36b8042025c4af4f7ac"
  },
  {
    "url": "assets/js/53.432875b0.js",
    "revision": "479f9bde5737b0d3562653a8b48ca5f0"
  },
  {
    "url": "assets/js/54.9e43fd75.js",
    "revision": "ea8a1255031bbf7cdf3a55d9a3289cee"
  },
  {
    "url": "assets/js/55.a6890592.js",
    "revision": "e6827d5c62e7811c4d0103125a16780d"
  },
  {
    "url": "assets/js/56.e5b4c07c.js",
    "revision": "dd07247f9c9444ac13927503b203e6b3"
  },
  {
    "url": "assets/js/57.76b39382.js",
    "revision": "1fd71501d3217c5fab7929e4fad8c250"
  },
  {
    "url": "assets/js/58.b5d62d1c.js",
    "revision": "423709763b7922f081d6ca24371d5154"
  },
  {
    "url": "assets/js/59.be0979ce.js",
    "revision": "2eaff6d176eed17812450135bc93a9fb"
  },
  {
    "url": "assets/js/6.0a18eaf8.js",
    "revision": "e124122e113c632eda26d6d31db5bcc1"
  },
  {
    "url": "assets/js/60.5e642142.js",
    "revision": "123aa38abd37b57d4a80dbbe45a4eea4"
  },
  {
    "url": "assets/js/61.4445a425.js",
    "revision": "343a504f46d26d92ebe151715248e35a"
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
    "url": "assets/js/app.b707cf72.js",
    "revision": "56f46b3cf4b09c7456202c5f261e90be"
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
    "revision": "8fe908f9e59a82d5fc85830aa8fec113"
  },
  {
    "url": "guide/assets.html",
    "revision": "d50955b6f38ff55540ac939c7f491d46"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "95764ec0598703542587c96ca741838d"
  },
  {
    "url": "guide/deploy.html",
    "revision": "54afa36d383c0ff1469a5d21732ec647"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "bdc3d3aaa0be75cf793f2c78d719178a"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "95266e256f146c893492ceda9f557616"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "fe44ac6be935126b902f1ae6bfba2dca"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "45816d6017113775a89cd849a86cdda3"
  },
  {
    "url": "guide/i18n.html",
    "revision": "e3315b47492a9ed221e153eb0ba4e16d"
  },
  {
    "url": "guide/index.html",
    "revision": "872599994b38e9d4eb1a65475936fe76"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "00ee3bf03415ef84d7ad933ccdd367f7"
  },
  {
    "url": "guide/markdown.html",
    "revision": "0285d350fd5e0abc6c255fcf1f1eb633"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "b9385a86c976ccc14898302c6ca46dc8"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "e7849c0e34a98c6685fd1e6503c8cf3a"
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
    "revision": "18674515ebcef0c53e3d4f8d3a8a6fe6"
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
    "revision": "12ed67e11f41fbf0ae14a963a398c57e"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "316bd7208bb362f45d63bca2ea14cc60"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "7904590e10e768a202fad962203aa724"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "8fe66e276dbc8fe82cc4235dcd116f5f"
  },
  {
    "url": "notes/index.html",
    "revision": "a0c8a364fd80367018a0b85bb9a2e565"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "3a0feac6266914468c61cca1c520be15"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "08d8f77e1c0aa484144112a817b75ab4"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "cb1cdc434c389f9dce45964f7a355b8b"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "f73c839da729f84030e8c3bd459e1195"
  },
  {
    "url": "plugin/index.html",
    "revision": "8199f3b78059ce99dbbd65df1708597a"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "76a477c403871502cd3bff5f82fe5f09"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "865fe3751120bf32319268a733871f28"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "9eb0e613680f928812357e2de5252cd0"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "9d03eac22cf811a7556ec3c99280e678"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "c7ff4003528800ff8c2fe08eeed440fd"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "e8bba96ad92864dd0f2c584a7b33819a"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "8b67378a0f36372bd82283447d9cdf18"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "f48bd31ec20aceb68c43ceeef8487127"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "60efe8da5d6ea42cd8b686a6e9d7b5dd"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "a222bffbe40917fdac1003cea1f28b3d"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "6abaab064ab1f645ae16c4bfb83fef97"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "2bbb791e8acda6ddbeecfffab9d85cdd"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "52e41f9735ca26b2518dc3b046907bdf"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "570d8c31cc0ba42b7bd1477e5a8775ac"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "1db6272609380002fc26757bc7ecb580"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "2fa6b587ffc1fa7666307481e6ccc50c"
  },
  {
    "url": "theme/index.html",
    "revision": "072fc98a09467fea34dd40b61775a0ee"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "a7488c39a00e5b827994f2dd636022ee"
  },
  {
    "url": "theme/option-api.html",
    "revision": "365578ac27cb1fc388006e200d29466b"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "35baf2cb0b3549dd55deb0f0ce633516"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "9555bb1e4e49494baf6e4d6cf785ee2c"
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
