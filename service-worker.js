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
    "revision": "3608de20564f07bb78d5fbad28ac361f"
  },
  {
    "url": "api/cli.html",
    "revision": "8f07dea8e7570112673c5a42cd8da299"
  },
  {
    "url": "api/node.html",
    "revision": "1fcbba192b086f305d045643e69f7fff"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.af4af928.css",
    "revision": "bcf7e16fccdb371653e3b83aecd292ff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f3c02b11.js",
    "revision": "6e1e03cc0ce5a9cf9539f4573a2320e4"
  },
  {
    "url": "assets/js/11.2723f68e.js",
    "revision": "8e4cffcfe11ca42b1f67387fba694760"
  },
  {
    "url": "assets/js/12.d86b8731.js",
    "revision": "b48d8c5b8fba2e15480073bd25b13755"
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
    "url": "assets/js/19.46e31243.js",
    "revision": "8885f4ee45a7aab63f36e6ebc1d920fd"
  },
  {
    "url": "assets/js/20.d325601a.js",
    "revision": "e369cfab25fa17ebfdfa1de8bc279c35"
  },
  {
    "url": "assets/js/21.f28eead3.js",
    "revision": "6ddd6183365421662396ae31fb3e7289"
  },
  {
    "url": "assets/js/22.585e55fc.js",
    "revision": "e4dbfb8a3e55a33458267e65ed28f035"
  },
  {
    "url": "assets/js/23.fbeb5bdc.js",
    "revision": "9772c6d8445f447174392974fca48be9"
  },
  {
    "url": "assets/js/24.82476b52.js",
    "revision": "6edf573d76f52e5653504b78e8868435"
  },
  {
    "url": "assets/js/25.d75f580c.js",
    "revision": "4af05f2695b8c5d9301fc6142515d86e"
  },
  {
    "url": "assets/js/26.907b67eb.js",
    "revision": "857bbdfb6ff752ac5477f3b86f33cf46"
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
    "url": "assets/js/29.ba4286b3.js",
    "revision": "5c750960362e36f4e686d8cd31ca4c73"
  },
  {
    "url": "assets/js/30.dabb10bd.js",
    "revision": "59512c0725f0d30fad1de3c405fd02ab"
  },
  {
    "url": "assets/js/31.2ad3ad8e.js",
    "revision": "0c900be81a1472bcdd65426f3c24d31b"
  },
  {
    "url": "assets/js/32.12f27fd0.js",
    "revision": "43c75a4bf338563447b2580a3e8af3f6"
  },
  {
    "url": "assets/js/33.6910a83d.js",
    "revision": "59d936d94b751a248cc5c607b3839f0d"
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
    "url": "assets/js/36.72bbae2b.js",
    "revision": "77c47a496bc05614d2232d40d515e5b3"
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
    "url": "assets/js/39.d85282b8.js",
    "revision": "6475b25d896609c7de1853d4e6464064"
  },
  {
    "url": "assets/js/40.713fada5.js",
    "revision": "47bacab656b50dd47ab2ac883157d18a"
  },
  {
    "url": "assets/js/41.57b9ef87.js",
    "revision": "598c50ef4ca293a69e3a10d113d7525d"
  },
  {
    "url": "assets/js/42.0890d504.js",
    "revision": "3987c17fb228d6ed766779dac5f98c85"
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
    "url": "assets/js/46.8ca42e2a.js",
    "revision": "58144dec269dd9902f5ce21801fc628a"
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
    "url": "assets/js/51.b11d17aa.js",
    "revision": "fed2d282dd19ce80b60fa5121dc1fa63"
  },
  {
    "url": "assets/js/52.ac11c58b.js",
    "revision": "d9f4a5d834829b7f39819829ecae2c05"
  },
  {
    "url": "assets/js/53.544b452e.js",
    "revision": "8d25abac3f2ccbe7cbeb63fdb5603941"
  },
  {
    "url": "assets/js/54.497fe0bb.js",
    "revision": "ca22cee36e8b79ed5f3f3761e78eeec1"
  },
  {
    "url": "assets/js/55.674729b4.js",
    "revision": "41b4ff72f19dcf2b4cdd45a34856e39e"
  },
  {
    "url": "assets/js/56.76600c84.js",
    "revision": "1b6cdc6b9cc94571b7c079c10ae77d87"
  },
  {
    "url": "assets/js/57.2015050f.js",
    "revision": "5c1254ba8a00d2a4c3d20654fd5889f3"
  },
  {
    "url": "assets/js/58.26da6c90.js",
    "revision": "2f0cace352c8b806f05a7324c400460b"
  },
  {
    "url": "assets/js/59.ac3ab188.js",
    "revision": "7ca2af4c13f0fa59c88b0e8922ad0e09"
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
    "url": "assets/js/61.55f106f2.js",
    "revision": "16f63161b1406898d52aa592555c95f5"
  },
  {
    "url": "assets/js/62.6681d04d.js",
    "revision": "09fa9aa00a7fe026aeec069f55faabb6"
  },
  {
    "url": "assets/js/63.75a0a8de.js",
    "revision": "a0f63953eaf43684ecd8897df36679bd"
  },
  {
    "url": "assets/js/64.33c24cdd.js",
    "revision": "8a7f4fe9238f8579e0d9770cf0b3a476"
  },
  {
    "url": "assets/js/65.60b2d562.js",
    "revision": "7046d253f2aaa45dbcc23bf8adaa4d9d"
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
    "url": "assets/js/app.3f3ca959.js",
    "revision": "0d44d61f9705cda1e704c7998163dd97"
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
    "revision": "ddb879cf712c5912e2b03d4c150ac8ed"
  },
  {
    "url": "guide/assets.html",
    "revision": "4cf11790ad2a6e899e0a6633df9f33d1"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "6edd6f28911268c29d972d25f884e6a3"
  },
  {
    "url": "guide/deploy.html",
    "revision": "715e5157b2e25798ee170a117a0f6d19"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "78cef0b0fd12562d6ebe451830a9dc25"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "70508b02c9ba81019c04e3fdc9182bfa"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "62d861b9ac11117437e8b0904ce2d36a"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "d05e669f82f491e79fc195ddcb9e4012"
  },
  {
    "url": "guide/i18n.html",
    "revision": "9d9cd4b3efc7abd8418eaa18ae33c915"
  },
  {
    "url": "guide/index.html",
    "revision": "b3ac43c2f033be3ed430e2dd3fbf9f98"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "ca1bd5d6262805e0787cf0b4f9908fcd"
  },
  {
    "url": "guide/markdown.html",
    "revision": "19f8c9ccc92d961cc66520b23b88c5ca"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "4565b37bb1e7da573108a4b014bdeb6d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "ab52221eb7c5f64e318058af0c05e3d6"
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
    "revision": "804b7589fd6fbd66b207ceab0d3a889d"
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
    "revision": "bb6212bb27879900fc61bd1bb87df7bd"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "0b30e3b695bca6ffbe488563831e9f00"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "4d98e2c261b6374004bed746784e71f6"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "a0cb884008488061e87f21b861be29d9"
  },
  {
    "url": "notes/index.html",
    "revision": "9ec95596ef24f6851aeba003c7e8fee5"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "76e2fc305f99d4a829ed28882324c687"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "10cb5d3144bea72c36fe69dc17fcf129"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "327687e24d62fd5d73af48dbb84e0e56"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "1714aaf51e8e58a6b642b6f40c955c55"
  },
  {
    "url": "plugin/index.html",
    "revision": "37cec482f20ecedab5a601e270d00135"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "6e3d0b840c4b8bf3f2cc9e80b8ae194c"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "d164b5af74a9a6b661e3696f360b1938"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "9271cb0ca610bc1d43a350af92f27735"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "f13e1ccffee8f9d90e74c8bdb177d39c"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "25bed40a5805db462f5490ee725340fe"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "584f0af378fd9a6747c1f63bfe546d1d"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "0bc41dd8fdfb42c249d9a6840c3f15d6"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "32dc09e487d6e9074dee2c5a9d0289da"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "541bac7fec634236325bad7aefa32a57"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "26635c0e4179c38b679922d334e5d1c6"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "4035a880e74f912a88c6223c6a1a47ac"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "8ea24b98f12d495faedce20546ff2e73"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "e9b9100d659ed1e5c5c11e885a25bbbe"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "4d08290d60482543c40fe4ee6693ea68"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "7701e0a077d4ba6561f28a593d85aa64"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "eec74de1865e867a53315c44d329d2b1"
  },
  {
    "url": "theme/index.html",
    "revision": "803834aeba8feb63cd1e4af8f4013e36"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "792b8af1cacc067f366d9f94ac1e5b6f"
  },
  {
    "url": "theme/option-api.html",
    "revision": "c6f2d009a8d4612e3b170e1d97f4b9b7"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "1c4a4876a595752ca50d7b554a38b05c"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "52a227edc14790e8171137d23186f64b"
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
