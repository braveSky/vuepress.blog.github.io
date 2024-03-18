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
    "revision": "cab13b6536f2a4f4653067db4b7d940f"
  },
  {
    "url": "api/cli.html",
    "revision": "43fefbd73199a7ec630a5beb6c7dee43"
  },
  {
    "url": "api/node.html",
    "revision": "f7246bed921e7ad3717f87970c8fe1a1"
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
    "url": "assets/js/10.11e49a2a.js",
    "revision": "ac3b67b5c7cd12d7a66b2d9b23d89b8c"
  },
  {
    "url": "assets/js/11.6639c5c0.js",
    "revision": "008241e3def5bede0b3022fd437c88f3"
  },
  {
    "url": "assets/js/12.fd799d9c.js",
    "revision": "59343da7264794253689b0d55b3c8f9c"
  },
  {
    "url": "assets/js/13.4362ce8f.js",
    "revision": "34dd081ab74bc8366bffda83b0194993"
  },
  {
    "url": "assets/js/14.0c7aa733.js",
    "revision": "8f4869f2ddd2a6b1c1d38eca6906e4dd"
  },
  {
    "url": "assets/js/15.240bb577.js",
    "revision": "fce681c5f25f2adc487b23bbc9b43025"
  },
  {
    "url": "assets/js/16.1f796e0f.js",
    "revision": "f11b3b3fdcd954623e9af15391ebddf3"
  },
  {
    "url": "assets/js/17.f14dfd0a.js",
    "revision": "cf65ac0b1feaf756e0251dc3f05f519e"
  },
  {
    "url": "assets/js/18.8cb290e4.js",
    "revision": "81fe9ff3929b1f7fb978b9e4443904fe"
  },
  {
    "url": "assets/js/19.a3d174f2.js",
    "revision": "ef1fa7d0706f031a7f870e1164182f37"
  },
  {
    "url": "assets/js/20.5408fe05.js",
    "revision": "17c9c1dcda693a7d0b03b768a3b36919"
  },
  {
    "url": "assets/js/21.6b822f56.js",
    "revision": "c0aae7cc90a290dc5e787ac90b116333"
  },
  {
    "url": "assets/js/22.a94fedf7.js",
    "revision": "f7bb8f12700157b22b8884ecf11240a4"
  },
  {
    "url": "assets/js/23.889c2163.js",
    "revision": "74a9bdf50b71b62883dfed61180428f2"
  },
  {
    "url": "assets/js/24.95f3be64.js",
    "revision": "48daac6f96afef18aed9ee57f78bd045"
  },
  {
    "url": "assets/js/25.37ef5554.js",
    "revision": "43e0e4fb51c354ce8526bffa141c7930"
  },
  {
    "url": "assets/js/26.3ad70205.js",
    "revision": "99fb3204d7d564604416e22183c0de43"
  },
  {
    "url": "assets/js/27.353ccb92.js",
    "revision": "ce19e3ca6b09ca6dd07f847d653d864d"
  },
  {
    "url": "assets/js/28.c52e8d97.js",
    "revision": "f37791255ba73a80dabb81901cb4c06e"
  },
  {
    "url": "assets/js/29.b6d85a46.js",
    "revision": "4b2e301ccb339af3a20e2ea39cdcebc2"
  },
  {
    "url": "assets/js/30.00299747.js",
    "revision": "d25aa0341a75b387ed95ac85b520c50b"
  },
  {
    "url": "assets/js/31.e58fdff5.js",
    "revision": "2ba2436dc3b5fe78b365cd92aefe2054"
  },
  {
    "url": "assets/js/32.faf00e38.js",
    "revision": "9834ce25cf809ec81785e5a6d6f2ba3f"
  },
  {
    "url": "assets/js/33.3a1e871d.js",
    "revision": "6e6c4c82e40ff134550e05b8ab7fec0d"
  },
  {
    "url": "assets/js/34.1bb4dad5.js",
    "revision": "273cdf3dc411ee88d0efd2672882fd94"
  },
  {
    "url": "assets/js/35.f24d8a2c.js",
    "revision": "951781f691f44c7a781bf7affe809dcb"
  },
  {
    "url": "assets/js/36.82dcd803.js",
    "revision": "dcac5c25bf3072e2c031b32fbfdb6d4f"
  },
  {
    "url": "assets/js/37.eb9406a4.js",
    "revision": "495fe14431044b97df4373ba25fd8213"
  },
  {
    "url": "assets/js/38.3ada4979.js",
    "revision": "f0a370ba18c719557ee439549e151a53"
  },
  {
    "url": "assets/js/39.2082b5b2.js",
    "revision": "18d4fc91418fc06090e2a4ad221b0c9f"
  },
  {
    "url": "assets/js/40.8f075571.js",
    "revision": "c9eff70784fbb0d868bde016b5577bf0"
  },
  {
    "url": "assets/js/41.42c94a97.js",
    "revision": "a8315355db1c8f6273509f822b2326e3"
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
    "url": "assets/js/44.bbcd375f.js",
    "revision": "6b422228e9c1ec588e4779fd5fc2f31d"
  },
  {
    "url": "assets/js/45.3f31917a.js",
    "revision": "a970e1d246afe19c35e77ba02ace4459"
  },
  {
    "url": "assets/js/46.35cac1c2.js",
    "revision": "58144dec269dd9902f5ce21801fc628a"
  },
  {
    "url": "assets/js/47.0821ae11.js",
    "revision": "bc462961bc441c00bec246f25ed7c091"
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
    "url": "assets/js/5.803a7046.js",
    "revision": "ee150ce405783adfe1ad0e887cf3f936"
  },
  {
    "url": "assets/js/50.0b78adde.js",
    "revision": "35b1d6f9dc49a46223b1b90c1e2e23fc"
  },
  {
    "url": "assets/js/51.491d8d5d.js",
    "revision": "f118382b73ddd9613da9531468bbe2f2"
  },
  {
    "url": "assets/js/52.1a74e49e.js",
    "revision": "4b3afdb3bd5e7aeac53b85460b0581e6"
  },
  {
    "url": "assets/js/53.0cc145b6.js",
    "revision": "b5ec3c952b7bc8a4575aa7a96750ba2a"
  },
  {
    "url": "assets/js/54.13f25fbc.js",
    "revision": "47c0b80dcb1a5316af543889956555a4"
  },
  {
    "url": "assets/js/55.88009b4e.js",
    "revision": "705a85e585addb61f48722d01d8879d3"
  },
  {
    "url": "assets/js/56.2b4441d2.js",
    "revision": "2edc507c0d90a77d09299be9be61ab0c"
  },
  {
    "url": "assets/js/57.beabf0eb.js",
    "revision": "e3d47382d2d7af03769fece3264b19b9"
  },
  {
    "url": "assets/js/58.4601895a.js",
    "revision": "2f0cace352c8b806f05a7324c400460b"
  },
  {
    "url": "assets/js/59.b6d5b5b2.js",
    "revision": "9a2145b92b5b4d4534b4f81036a280de"
  },
  {
    "url": "assets/js/6.2bb04fc6.js",
    "revision": "fb67f9d6144b7df243965f29132b9878"
  },
  {
    "url": "assets/js/60.dec41d1d.js",
    "revision": "ab25ef36a969f9bed81aad9c817480a0"
  },
  {
    "url": "assets/js/61.04c8455d.js",
    "revision": "be4b8a6810ce9e333dc9fa797a4c71de"
  },
  {
    "url": "assets/js/62.291cdc8f.js",
    "revision": "eaf870461805ced7287330b84da3dff6"
  },
  {
    "url": "assets/js/63.81098da5.js",
    "revision": "6ef26557ad5ac1afc1059fc666635f1f"
  },
  {
    "url": "assets/js/64.cf06fe16.js",
    "revision": "7e6e163f8a310d8ad3d3070d5806c948"
  },
  {
    "url": "assets/js/65.ca758b21.js",
    "revision": "8307446a16c4a0fc5deb9321fb0f080f"
  },
  {
    "url": "assets/js/66.15d05659.js",
    "revision": "e1043433baaa3424c286cc9ccdde5b30"
  },
  {
    "url": "assets/js/67.391ae632.js",
    "revision": "27d2d3cf3997b75a5bbed2a43f7a073f"
  },
  {
    "url": "assets/js/7.eefcd89f.js",
    "revision": "df5d5c5d7828b4e62cc41af260deeb4e"
  },
  {
    "url": "assets/js/8.0be05d44.js",
    "revision": "c761281751d162fbc1b31dc2700ca9a3"
  },
  {
    "url": "assets/js/9.a3cfd9a4.js",
    "revision": "48947ac18e0799f6c50af416d9a448d0"
  },
  {
    "url": "assets/js/app.2b206db3.js",
    "revision": "280bd953601a86dc34ca7edb6d621a41"
  },
  {
    "url": "assets/js/vendors~docsearch.76b335d7.js",
    "revision": "be94412bd6c976b37ca8f4f099908c8b"
  },
  {
    "url": "assets/js/vendors~flowchart.976de4b0.js",
    "revision": "f7338fcec01f3cf1161d2b3a95f61806"
  },
  {
    "url": "assets/js/vendors~notification.9d451c18.js",
    "revision": "130dee099974d24e53920d078f33189f"
  },
  {
    "url": "config/index.html",
    "revision": "f20877fc3fe13713166819e2011b91af"
  },
  {
    "url": "guide/assets.html",
    "revision": "27a59ca1f31db3a0aab1909332412645"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "0acbeb4d5d941e67eadd987f8836096c"
  },
  {
    "url": "guide/deploy.html",
    "revision": "b2b324520d24c6ab03b5be6e8d2bd202"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "6bff5cd0c26109ab2506b38bca039bf6"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "f414c5221147c83ac3e5e97c9852f20a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5844d8a0b320f79af6db93ee30260dfd"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "2d58ad503fea5d144d80bf2be2b8f091"
  },
  {
    "url": "guide/i18n.html",
    "revision": "9f9fe0c21884e2f90241761458316c8d"
  },
  {
    "url": "guide/index.html",
    "revision": "aa7e635c84e0ed8424fff6b8c78e70ea"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "0f944163b15cbaae4c7fad9324549cb7"
  },
  {
    "url": "guide/markdown.html",
    "revision": "0d0cea2099580629c27839b8cc90b82e"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "484f26d430f0c48868ada5bee18d6eee"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "aec4ac07c023d5c17626d4cd94d46a4c"
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
    "revision": "76c2e44c09ff28e01e784cdfde6e3984"
  },
  {
    "url": "java/index.html",
    "revision": "2fa179f3972f43f1477d47fdec9fe084"
  },
  {
    "url": "java/JAVA多线程与并发.html",
    "revision": "91180900955b19dbbcbcfb17d85f7d66"
  },
  {
    "url": "java/JVM.html",
    "revision": "2dab43005bb71398762a6ba94e3dcff3"
  },
  {
    "url": "java/using-a-theme.html",
    "revision": "848f5030a86f40059ec9046465cc9345"
  },
  {
    "url": "java/writing-a-theme.html",
    "revision": "39c4ecdbf6eff5433391ed442afcd676"
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
    "revision": "1c2bb95169760ae3e21499da267ca1ea"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "b1f15e11a6219417e9ca103c0ff78cf2"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "f8a67b6af0041f5660973072e6031dd9"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "6efbe10e04ca82cec5e0e8c2b34467d5"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "2f0633a91d65823022ded7c1c24a2d0c"
  },
  {
    "url": "plugin/index.html",
    "revision": "390bce4737d83af0bed986779cdd39ad"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "0e8fb9f7873cc138598ba8abef4be7c4"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "d7ef9fb2467ef978bd9a40e72c7e3bd7"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "893a8c41c53e9a0e30578b0721eaaf93"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "fc1e96933784ceeb9dd417fdbcc6f808"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "df85a31276ff6784cb234441b9661bc3"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "2372f897b0c22ccf8c3453fa13a77fd7"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "d86cb5d32edd81ba57b26153e432ea2f"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "1be1f34544345fd6532349ee30ab9278"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "710611f0de7f0d6670348d275d60fd17"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "a5e8bc73686797a7c7f1092c1dcab846"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "4fa2eb774ad3f687c92d0878877b1831"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "935532e7477501348577159c16a265d2"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "d6e490e96f2ad0be2ff09bacc3c7fe62"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "edbdfc74d232097ea5f0c87391d758da"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "a1846c5b9765bd8471b69876fa73809b"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "0cf768bf2ca00729f2cb7777207f92d2"
  },
  {
    "url": "theme/index.html",
    "revision": "e7c891b47d513d785f70eea6510c8dd6"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "ad32f85149c38cf73f9a2d60e56681b2"
  },
  {
    "url": "theme/option-api.html",
    "revision": "e004c1f00984baf5f2b0d8e95c328106"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "a2bc605847f8af5216b22e9beaddedba"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "239baf4a61b34366401337bad4d4fc02"
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
