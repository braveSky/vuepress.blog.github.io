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
    "revision": "650f9abfede393ca65a93d37ada15a1f"
  },
  {
    "url": "api/cli.html",
    "revision": "c3d424fe590a3cf6b8a0767b3c7e7235"
  },
  {
    "url": "api/node.html",
    "revision": "d8874503b80b6b055385d70bcbaad470"
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
    "url": "assets/js/10.24d8c968.js",
    "revision": "03c796b776b7c6f69857150a08df9e7e"
  },
  {
    "url": "assets/js/11.533e8e87.js",
    "revision": "f7fc02366eee111da00c23dd2617497e"
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
    "url": "assets/js/15.990844a1.js",
    "revision": "651bd65693d8ee5c176fdbe7c7d412fc"
  },
  {
    "url": "assets/js/16.1f796e0f.js",
    "revision": "f11b3b3fdcd954623e9af15391ebddf3"
  },
  {
    "url": "assets/js/17.32be8773.js",
    "revision": "495dccbda75a79f16decf991bb992428"
  },
  {
    "url": "assets/js/18.8cb290e4.js",
    "revision": "81fe9ff3929b1f7fb978b9e4443904fe"
  },
  {
    "url": "assets/js/19.720ec0aa.js",
    "revision": "a352e063b50785f34f02a741ddc646af"
  },
  {
    "url": "assets/js/20.c64623e3.js",
    "revision": "43dc49b6a06bab931c072831ff19b428"
  },
  {
    "url": "assets/js/21.6b822f56.js",
    "revision": "c0aae7cc90a290dc5e787ac90b116333"
  },
  {
    "url": "assets/js/22.31e9f11a.js",
    "revision": "76a24e8943ea7f8b6c39dd2b420ac11e"
  },
  {
    "url": "assets/js/23.44875bac.js",
    "revision": "1538438774e593ccaa5217fc9da46b80"
  },
  {
    "url": "assets/js/24.c95f6fca.js",
    "revision": "a318052ccb293168161cf533986b9374"
  },
  {
    "url": "assets/js/25.935c7271.js",
    "revision": "4af05f2695b8c5d9301fc6142515d86e"
  },
  {
    "url": "assets/js/26.9f5d2c0b.js",
    "revision": "14cbdb44410dcac2dcfc197f64c67647"
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
    "url": "assets/js/29.b293d18b.js",
    "revision": "90d43fa8000ed8b7f4e6f0cd9df7dc9b"
  },
  {
    "url": "assets/js/30.7d3da2b5.js",
    "revision": "59512c0725f0d30fad1de3c405fd02ab"
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
    "url": "assets/js/42.4b0a2cf9.js",
    "revision": "bb9ae36798f2e4f629ae8689e7fb74f3"
  },
  {
    "url": "assets/js/43.54abf56b.js",
    "revision": "661e324f494f0423bc2a812555d07340"
  },
  {
    "url": "assets/js/44.43b5f408.js",
    "revision": "ee24808ff26d6ec2843ed145c8007bf2"
  },
  {
    "url": "assets/js/45.8d1f5040.js",
    "revision": "d9655c3cefb5e22e37a4ce5ee56b2a8a"
  },
  {
    "url": "assets/js/46.5a722996.js",
    "revision": "3c4fd192f4db8ce57ec29abe2adcef6f"
  },
  {
    "url": "assets/js/47.e9e04434.js",
    "revision": "5a46afb2cf95be99f06b799f51aa962f"
  },
  {
    "url": "assets/js/48.f5bddadb.js",
    "revision": "c78353620130fc0c3b5d8e5caf748209"
  },
  {
    "url": "assets/js/49.df1a743c.js",
    "revision": "8ba10111f92fbe600768d58334a0daa4"
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
    "url": "assets/js/52.32b5f000.js",
    "revision": "98ea43fe279635267f862dc0c260fa15"
  },
  {
    "url": "assets/js/53.6a680776.js",
    "revision": "5b5809626103ae090779a8dd209484b8"
  },
  {
    "url": "assets/js/54.32846dc4.js",
    "revision": "2ee82a0ce6fa772766378f84b9ed9678"
  },
  {
    "url": "assets/js/55.cbddcba1.js",
    "revision": "6aafede29d61cb3806f63eb22949185b"
  },
  {
    "url": "assets/js/56.249686e6.js",
    "revision": "bcdb09c94b896ab5ad3d82ed405b9308"
  },
  {
    "url": "assets/js/57.beabf0eb.js",
    "revision": "e3d47382d2d7af03769fece3264b19b9"
  },
  {
    "url": "assets/js/58.b998aadb.js",
    "revision": "a2a115f52038154ef414eae12e8eb5dd"
  },
  {
    "url": "assets/js/59.7d65fcef.js",
    "revision": "f586ecf23fab676db5d221576fb42ebb"
  },
  {
    "url": "assets/js/6.1e5731a3.js",
    "revision": "6394d028c4331f6c68cb055ff525b5e7"
  },
  {
    "url": "assets/js/60.8623fca4.js",
    "revision": "29b4d593fbe2353c9f1f58d7204e76e0"
  },
  {
    "url": "assets/js/61.66f43590.js",
    "revision": "bb6efc317d8abbcdaaa5838ad4346fa0"
  },
  {
    "url": "assets/js/62.3fbce355.js",
    "revision": "421f089d0da9e29d4e617018d64a44f7"
  },
  {
    "url": "assets/js/63.26c1338f.js",
    "revision": "a1901e8e33a2c48cfc286a1953077542"
  },
  {
    "url": "assets/js/64.f999f716.js",
    "revision": "3520dfc842108048526ac4a7f73dbb09"
  },
  {
    "url": "assets/js/65.574c669b.js",
    "revision": "ec61bbb8f699633314e4f2149f888cd2"
  },
  {
    "url": "assets/js/66.3e465172.js",
    "revision": "975b7ab2e146b72092d42eba8dae9552"
  },
  {
    "url": "assets/js/67.98d3ee82.js",
    "revision": "24a716b6e52db6ee37c9ee5169012b5d"
  },
  {
    "url": "assets/js/68.9339dec6.js",
    "revision": "df8396579e7391faa8e3b13df384d516"
  },
  {
    "url": "assets/js/69.81df5548.js",
    "revision": "8ebc5e9fe971c1a29223ce9789916dfa"
  },
  {
    "url": "assets/js/7.0cde9418.js",
    "revision": "ec6563967b0d11dd0630aa43fcbecf79"
  },
  {
    "url": "assets/js/70.166d615f.js",
    "revision": "15b2095f05222e6594fd25767adc79ab"
  },
  {
    "url": "assets/js/8.e58a3de2.js",
    "revision": "13ef9ba59f5541691ad6138ff9c4471b"
  },
  {
    "url": "assets/js/9.a3cfd9a4.js",
    "revision": "48947ac18e0799f6c50af416d9a448d0"
  },
  {
    "url": "assets/js/app.66609bbe.js",
    "revision": "06fe26ad9f82102e99180862c1a0198a"
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
    "revision": "07d6939636326f948db34e5ff6e59b1c"
  },
  {
    "url": "guide/assets.html",
    "revision": "0880f55c4f4e0bba0b7055edc30e1da6"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "a413a5dc094122a16de2b89154faea5a"
  },
  {
    "url": "guide/deploy.html",
    "revision": "1c238e8cd48468570374c83963a6ea02"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "fab5a8153546824ef73e80f7b36828c9"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "1e9db9fcda5a0f40bda00a93e7302c1a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a08e13dc4099fc6a66a65e6e0a8d600c"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "fad604b21ff0afdef30535be763a09b1"
  },
  {
    "url": "guide/i18n.html",
    "revision": "43226169920a7c1ce60de4181c441fd8"
  },
  {
    "url": "guide/index.html",
    "revision": "1ed7d59f793169930669677a1f4a5ee5"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "e4145e3544dcc0073f9a11fb4f51ea91"
  },
  {
    "url": "guide/markdown.html",
    "revision": "7e947393e03f8d2beb65de23e9e634bb"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "22f1ed657443a3396b736ccc1002da48"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "d0c13ca35ef7a50401e671ed3cf203ab"
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
    "revision": "11142ad2271f80e9496b7c9a6c528bc0"
  },
  {
    "url": "java/index.html",
    "revision": "4f3392bbbdca01aa0f07d7e5d8923117"
  },
  {
    "url": "java/JAVA多线程与并发.html",
    "revision": "44bd835e9bd1b94905237a04a756ad94"
  },
  {
    "url": "java/JVM.html",
    "revision": "c0cc53e1b5107a0974bc83b36db70b2c"
  },
  {
    "url": "java/using-a-theme.html",
    "revision": "ef87dd51fc8ed33de30e28ed314f3240"
  },
  {
    "url": "java/writing-a-theme.html",
    "revision": "c9ddea50da02bd4031c1a3892c56a0bf"
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
    "revision": "6d805785e5635b399993099faab7e2a5"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "a2858fc7aedb0c6671f55afb13c06736"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "a58cb036c558fb5009f9cea7c3d9d53a"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "3817c6fe528701574d0626f3fd64de8c"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "4a322e5f523550dcf0453ff583f2670f"
  },
  {
    "url": "plugin/index.html",
    "revision": "b48e03b40bb0bc6b8e24b276f90facd5"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "6ef1dc214b06b5beb8fb00fc78d1b5c7"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "aec757e19815e3c2617d3dff1b49c76d"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "a55e55ea4bc66b138ecef20492456e4a"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "6901c26cfca25934f2bb777d8b0bbb0b"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "247c0e096fe362b808768dec2415e1c1"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "de5e3c1cccab505864c7a2635bb6d214"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "58c463d76611814b3f13e07361e33226"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "ec2bf6d13b6a60bf2875b5e4a45806ad"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "f21b768982c168e6349c904f67dd6810"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "771e4cf11641e542c65550527e1974a1"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "59ae4bf19c11f2b5ab7c20116c55d5c4"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "f97e103d1de1a0f0eff59a13ae64e003"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "edeb944f84ad654f4f63fe79fbf44e9d"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "72ed0b269e876d6d839c70a614d83000"
  },
  {
    "url": "spring/SpringBoot.html",
    "revision": "ca48ae2edab9629171b4241b3e80a8a1"
  },
  {
    "url": "spring/SpringFrame.html",
    "revision": "b3f1a24f7c3eb69dc22a9c8a595050cb"
  },
  {
    "url": "spring/SpringMvc.html",
    "revision": "98313665b58c249f4154155f1e5e404b"
  },
  {
    "url": "study.png",
    "revision": "1200759f3077a9258ab72369289caa0c"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "8c0375c57b624c695aed7112e8f5abae"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "b83f855bf8e5f888d9409c1d32973d0a"
  },
  {
    "url": "theme/index.html",
    "revision": "800746219e188e28a8ba2084b8786b4f"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "be5c23d76f3245f80db8d2c3b3bde007"
  },
  {
    "url": "theme/option-api.html",
    "revision": "2d2d84566ae31196c2ff925751efbb72"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "9340339321ef7b7ecd5da7a14d4ea598"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "7f39a2be1e6322435fa29957fbceb26a"
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
