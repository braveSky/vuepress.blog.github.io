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
    "revision": "000b03b1e7f7e8d64121649ee30750c2"
  },
  {
    "url": "api/cli.html",
    "revision": "7fc2c61d23b8ab5ce0821c1692d6737d"
  },
  {
    "url": "api/node.html",
    "revision": "a5118ab31925323bc8051a79d3bd243c"
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
    "url": "assets/js/20.15112c85.js",
    "revision": "583d5492547ad8f5726a593948f3520c"
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
    "url": "assets/js/23.a4ac6795.js",
    "revision": "1538438774e593ccaa5217fc9da46b80"
  },
  {
    "url": "assets/js/24.e516abae.js",
    "revision": "b0b864470435a09b1df988393b639220"
  },
  {
    "url": "assets/js/25.06595ad0.js",
    "revision": "37283535c3a257cea2cea90f45716cae"
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
    "url": "assets/js/28.e37d27a0.js",
    "revision": "c2a30f90481d49ee3bd3181bc1710983"
  },
  {
    "url": "assets/js/29.433071fa.js",
    "revision": "3e0753960a12643e3ee3da1baeb6d6aa"
  },
  {
    "url": "assets/js/30.faa00c62.js",
    "revision": "0c91ee0042724282eff6e7cf903b9417"
  },
  {
    "url": "assets/js/31.83d74019.js",
    "revision": "1e97355f2c6e637daa6b466f454e3c5d"
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
    "url": "assets/js/34.aa7cee37.js",
    "revision": "c726e8884981c6054500ff20ba7c5ba5"
  },
  {
    "url": "assets/js/35.51cb8acb.js",
    "revision": "b32161f1f1aa577ad64e2b0bcadfda1c"
  },
  {
    "url": "assets/js/36.4b1033f8.js",
    "revision": "d9ac3b5927975865d469fa816e1a01f4"
  },
  {
    "url": "assets/js/37.89fb450c.js",
    "revision": "27e58689a33744da7cc790514fbaa24d"
  },
  {
    "url": "assets/js/38.4d856ded.js",
    "revision": "6dd28c849936d254efaf382c0451d749"
  },
  {
    "url": "assets/js/39.1e20802c.js",
    "revision": "59ba605faa8e5d5ddd0163a9881061a7"
  },
  {
    "url": "assets/js/40.713fada5.js",
    "revision": "47bacab656b50dd47ab2ac883157d18a"
  },
  {
    "url": "assets/js/41.7fd79821.js",
    "revision": "5cc74ad185f19da66cd39d0ae39e2aab"
  },
  {
    "url": "assets/js/42.f138d5e3.js",
    "revision": "23b418b07812a1fb39c345b398a1c2a5"
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
    "url": "assets/js/45.55d08824.js",
    "revision": "63e13b2401b939933f0982b40af8be92"
  },
  {
    "url": "assets/js/46.d33df81b.js",
    "revision": "2776c87e78c1fc1b8e8df56027631bcc"
  },
  {
    "url": "assets/js/47.d025f4f2.js",
    "revision": "5a46afb2cf95be99f06b799f51aa962f"
  },
  {
    "url": "assets/js/48.45badd63.js",
    "revision": "e19ab27a4f8461484645848fdc47cc3a"
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
    "url": "assets/js/51.272562c2.js",
    "revision": "a4662ecab2633db14498196f33b7b704"
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
    "url": "assets/js/56.e5b4c07c.js",
    "revision": "dd07247f9c9444ac13927503b203e6b3"
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
    "url": "assets/js/60.eca02eb4.js",
    "revision": "f8c875671407d4c4c10034e0fa9e8c27"
  },
  {
    "url": "assets/js/61.bed334a0.js",
    "revision": "a8d654ed915d23d8f9770596f2c69ec3"
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
    "url": "assets/js/app.b6fd0c1c.js",
    "revision": "0a116d4c19890d09ada9e49f2950112c"
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
    "revision": "b724c5a195a592f39412a55999170cb4"
  },
  {
    "url": "guide/assets.html",
    "revision": "65722c6322bfca9a5606c56da15b486b"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "a03ac9a5868d3d9a4d32fda87c7b0fbd"
  },
  {
    "url": "guide/deploy.html",
    "revision": "136e66d52d60195388d643da5f1e1a1a"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "2af46120dc50c1072ed518a4aa653a45"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "d68fb21e50b1bc92b3e87c66435f6181"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4449d36a4f685d9d8cc4b84feddd2b87"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "3959e3fe5ec5e39a9115d1875655c6e9"
  },
  {
    "url": "guide/i18n.html",
    "revision": "6edb31aed11121817d910ed9c1eee676"
  },
  {
    "url": "guide/index.html",
    "revision": "7efcab2ac05dce25475d784d95332ead"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "1feac7a206767e2d32c1e3fffb95f72a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "59513176218cbe77b96a5528a907981e"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "b36dd8bc881a5528b51d3063e631d18f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "146683e55e92dc687ceb12b190df8a2f"
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
    "revision": "07f433ca77d4fb634e82b5722575b73f"
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
    "revision": "435be8098712a9af7e48ffdb9409755e"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "3dea42dc4a0366db1d1812a3e5be2a3c"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "f45c95646df43634e225eab9bf008ee9"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "9f6b52b4c1816050613141bca92b9e8d"
  },
  {
    "url": "notes/index.html",
    "revision": "d5f732ae62a39cbc445ab50dad8e6d26"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "2bb994a05c34f27f964ec83523fa4d3f"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "38c2d963d0038b2a0337dd874caa81fc"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "13f08145a413bc4a36413062115ef027"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "7c2ad2baaf731e527f1b7f059801108d"
  },
  {
    "url": "plugin/index.html",
    "revision": "ec00001ab2f8430c01259e47539f62e7"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "9ada6bb494df917d16005933c92e557e"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "0b313456fe1d455ddaa2284ac73ad105"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "11a98db6afd509a7e00140914da1a30b"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "b1d48ced70dbb1c2b0e0a3b68e38fa83"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "358c9c8d12999e1f233397c3c5bfe912"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "49b2d32cc86834e9a00b82ccd8a7091d"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "f78d29147951341aeafedf79c9c44f1d"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "b49762bef03e5eb6d653637b042eb5fd"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "a08c6938fa5de862900225526d8b7e16"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "42a64daf1add2575c0dee21faf7c9dec"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "bcc556da3ec37c6dff0249004ac811ed"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "5e7a18e25a288bd604c7a740e98b99c9"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "64c963f7d1afa7d18eb531779d60aa1e"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "592dd7c65a887e225067fcfa5ef04139"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "31ed7913647f2f003d336fcf50b22f12"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "445ef83145b3465fb6ad4515c7fe3aa4"
  },
  {
    "url": "theme/index.html",
    "revision": "f9825c1e52085db771d0d1e21a45c87f"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "4739abf3df5f59c338b48f51a00fd941"
  },
  {
    "url": "theme/option-api.html",
    "revision": "d272ca9571d92cd893c7d1a8da1848ec"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "f30ca147121f4a49010f2b3df9abaa2d"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "a08322a972eefb2c3c6508d086f2e5da"
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
