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
    "revision": "7a7bcfa5c35fa3105877cdabdceeafe6"
  },
  {
    "url": "api/cli.html",
    "revision": "a739e0e358eaa001472e86a13e09ca12"
  },
  {
    "url": "api/node.html",
    "revision": "c076aba16d809f079f5c7450dceb6e72"
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
    "url": "assets/js/23.a4b82891.js",
    "revision": "9658bcf5150f92960d98ec8786747e17"
  },
  {
    "url": "assets/js/24.4e1375a5.js",
    "revision": "ad1d99b5e147434f75fc362a2126f872"
  },
  {
    "url": "assets/js/25.14abc54a.js",
    "revision": "97d10fa9c390be25e94661d6a757d27d"
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
    "url": "assets/js/28.a8914b87.js",
    "revision": "e7cea23fc591e978ea8ccca9ca5dead0"
  },
  {
    "url": "assets/js/29.433071fa.js",
    "revision": "3e0753960a12643e3ee3da1baeb6d6aa"
  },
  {
    "url": "assets/js/30.b8ad6036.js",
    "revision": "1a96771bb9cd081a4a6ce250a3ec94e5"
  },
  {
    "url": "assets/js/31.83d74019.js",
    "revision": "1e97355f2c6e637daa6b466f454e3c5d"
  },
  {
    "url": "assets/js/32.5f1ccbc2.js",
    "revision": "92ee56a4c39f1b0189b12f4bd706939c"
  },
  {
    "url": "assets/js/33.642d8ae8.js",
    "revision": "2030e9cda4afb3b64eccd020d077dbb1"
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
    "url": "assets/js/36.46c854c9.js",
    "revision": "3961e67d69640618606420924866c640"
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
    "url": "assets/js/39.2ba61fce.js",
    "revision": "0def44575ec392d639c7a99f130af732"
  },
  {
    "url": "assets/js/40.713fada5.js",
    "revision": "47bacab656b50dd47ab2ac883157d18a"
  },
  {
    "url": "assets/js/41.4fff4583.js",
    "revision": "989e1cec9874b2cd90e010111c6fada5"
  },
  {
    "url": "assets/js/42.67a1bcc7.js",
    "revision": "bee5d85ac3299611f83d4e3df852cbc2"
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
    "url": "assets/js/48.db1ad3e1.js",
    "revision": "6af21929e792ea1b829b42f7b0b6d523"
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
    "url": "assets/js/50.6b768dd9.js",
    "revision": "c612231751e6a1e76aec66a48c108b54"
  },
  {
    "url": "assets/js/51.0559c173.js",
    "revision": "3794f4328ddcaea82238e98bc4ef523b"
  },
  {
    "url": "assets/js/52.4cd55f68.js",
    "revision": "98ea43fe279635267f862dc0c260fa15"
  },
  {
    "url": "assets/js/53.31c4f502.js",
    "revision": "50924161954a4cb04444a53222ccbbcb"
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
    "url": "assets/js/59.fdf1d458.js",
    "revision": "5c01c850b618d73bc4f9e6eb3703d168"
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
    "url": "assets/js/61.2a3e5c5f.js",
    "revision": "916be68304dacfb4e7b68d5428ff4dbb"
  },
  {
    "url": "assets/js/62.4b5426be.js",
    "revision": "71f11194fb1beef5b214eeec7396768e"
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
    "url": "assets/js/8.247cf266.js",
    "revision": "495729a4212ac8b20baa7a9620e8f609"
  },
  {
    "url": "assets/js/9.8cc26217.js",
    "revision": "afe478c158d02b05ecb98df350288763"
  },
  {
    "url": "assets/js/app.849c4faa.js",
    "revision": "8b00fe65dc3a67d585ec9153507db038"
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
    "revision": "e4cad02e5d10438c0102c917ffe6b946"
  },
  {
    "url": "guide/assets.html",
    "revision": "2f97a30a6ea5c0a6945f2d79dbbb0153"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "1c1f21ab3f077e4e00a44fa3bd3c9e1d"
  },
  {
    "url": "guide/deploy.html",
    "revision": "3e34f5dc26abcdde243b51df0717b924"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "62fcd2d3f44aa0e147a30180b638bd0e"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "b92214f4be6765a2f90a98519fc47383"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "537d06e873c4db2dd53201170d6ab6c1"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "d806e175d8be39693627abd043d0f021"
  },
  {
    "url": "guide/i18n.html",
    "revision": "f9e6b6f341f205245bcb4d5ac66d21de"
  },
  {
    "url": "guide/index.html",
    "revision": "76ac22bd04c98ebfa2073ba88f877588"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "e667b175b3dbda99ffda1b0a086bb447"
  },
  {
    "url": "guide/markdown.html",
    "revision": "75fd70762af0e95b891fbfcc83c08e3a"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "588d227a65012c033ac9f369ceb799a1"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "30006c5b21ece0e01acb4d8d7d5cb00e"
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
    "revision": "671c5200261e8c8ecb46e367de5646fe"
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
    "revision": "45f82094f88cb44fe18818af4f69520a"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "69da179c5ac07902ff5d6564bd45a4e0"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "52d9e915ff04ad992a504eae779de420"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "8ee623d072a164d7c40d9ee2a45de152"
  },
  {
    "url": "notes/index.html",
    "revision": "0d792475f226855ce7f45d53d985a3a2"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "765667cb3db18329a3f4b8995350483b"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "feaf0dfddc64623f4fd3453a824a84f1"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "c7396d4027cc6b189c493a42935b23da"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "8398b94504a11afc49d8b938e841c15c"
  },
  {
    "url": "plugin/index.html",
    "revision": "3f25c611155bf59722fcace5cfc68bfd"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "c18b085faca0f4e5019647ba7c14e006"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "8d68918c4b7c7cfcda79f4b67fba4ef5"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "4661bb6fea344eb0d7fe58fbfa230dcb"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "667a08a246cedb42df50d275452fe918"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "8e8d6e23dd1d15ab6587782f52e21c6c"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "21302cc51c6e78348daa5cf905ce3210"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "b78c1e91a2737ebfe312465de115f6e4"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "02ea8f01bccf36996304257256f2301e"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "0ac95c306f2c5cd924cfef90a76a0b2c"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "e7050fcc24a54c638e44fbf7825da923"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "b334ac4c2bbb560949a06348b79ab21e"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "3e55c4e2cc2d0dfd271b711b5a542f0d"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "1e016fb401e90d5b26423c01fa3a0598"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "85fda4a1259879ee1d1905f108dce3f2"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "ecb32683dc34631f9ad36e034ac7c4aa"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "058cd3646087575c37a03cb99507a1fa"
  },
  {
    "url": "theme/index.html",
    "revision": "c32390c4fb2cc4cd2d279b9e24e02f4d"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "e58e32f339232cda244e3a23be39be2c"
  },
  {
    "url": "theme/option-api.html",
    "revision": "0411d50be31dcadff6f57715ff95de3f"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "dfb5586afd27982561324bdb87f5e60b"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "37a0326dcd3c753cdd24cbd73c0b91a0"
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
