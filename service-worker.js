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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e16cef9cad33eef3a8949409e31e2806"
  },
  {
    "url": "about/index.html",
    "revision": "deb98c7e4a6c41393694a3baed454470"
  },
  {
    "url": "article/2018-11.html",
    "revision": "94b16a3e3291a79e7c4d9339bcb8d01c"
  },
  {
    "url": "article/2018-12-04.html",
    "revision": "912575bd52f530176fa2c14904642c0b"
  },
  {
    "url": "article/2018-12-12.html",
    "revision": "05427d1ea7a898d4be32bbd0c13aea2d"
  },
  {
    "url": "article/2018-12.html",
    "revision": "6f630b89ab803f861c7e57d762c792b5"
  },
  {
    "url": "article/DOME.html",
    "revision": "2cbe49561448e6020d4f23ff768e152e"
  },
  {
    "url": "article/index.html",
    "revision": "c264a63258a907bb44540d31b4461cf7"
  },
  {
    "url": "assets/css/0.styles.a37134f4.css",
    "revision": "a7cc7081be24b0c0f4be075e50763ebb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c2302305.js",
    "revision": "79191cc713531e846ced15971911d942"
  },
  {
    "url": "assets/js/11.81d20ca7.js",
    "revision": "9d96e0b9835156429fb83e91db7997e0"
  },
  {
    "url": "assets/js/12.980566c1.js",
    "revision": "44e93af7ee4429479c4d5acf01cac799"
  },
  {
    "url": "assets/js/13.19359400.js",
    "revision": "d098605b814972e6e7ff4f30e4807b4e"
  },
  {
    "url": "assets/js/14.e57cbdd0.js",
    "revision": "d2212587d4381fb37b390fc48b1a9a14"
  },
  {
    "url": "assets/js/2.6dca56b0.js",
    "revision": "861592ca51aad4e17601ac83e7d86222"
  },
  {
    "url": "assets/js/3.a87de405.js",
    "revision": "e29c0bc5edcb5addb32a45535516d27c"
  },
  {
    "url": "assets/js/4.0c2342d1.js",
    "revision": "ab77aded367b1087a5ec2d728184555d"
  },
  {
    "url": "assets/js/5.3565c4a7.js",
    "revision": "9c49f87644629fdea2032d6f17af3442"
  },
  {
    "url": "assets/js/6.eb0112c8.js",
    "revision": "43439b83d8e51645fa89634b4ac07b46"
  },
  {
    "url": "assets/js/7.a956ffab.js",
    "revision": "865e553a0fab1b924175b462109abb6a"
  },
  {
    "url": "assets/js/8.3a287e69.js",
    "revision": "645beb337d7ec85d19e6930ce4d14d5b"
  },
  {
    "url": "assets/js/9.7940a1ad.js",
    "revision": "7e3503086eb1d389833cf1534023b08e"
  },
  {
    "url": "assets/js/app.c1ac920e.js",
    "revision": "75277b26367c44a20b8530e225c646d4"
  },
  {
    "url": "img/github.png",
    "revision": "715b8c65da6d0c8f112626ad3746437f"
  },
  {
    "url": "img/gmail.png",
    "revision": "e7d64b7c9e1baace2a45c7721c182bc8"
  },
  {
    "url": "img/wxQR.png",
    "revision": "35ade85a59f3c11e6b7effffdb76d173"
  },
  {
    "url": "index.html",
    "revision": "a0a66de3833817d7caf745bdc2cd0c5a"
  },
  {
    "url": "logo.png",
    "revision": "9becb4dce50dcf9e4b4afee8bbc8ad50"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
