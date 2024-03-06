'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "640363781c2d8fd8889a7dd82b0cf5e8",
"/": "640363781c2d8fd8889a7dd82b0cf5e8",
"version.json": "8444e41e62c30667fdd11ac8a2ae11f2",
"main.dart.js": "85a38c5ac296a0dca68fdd21d4c12088",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"assets/AssetManifest.bin.json": "dd66aad79a70a9ab2c6762e6f2a7bd12",
"assets/FontManifest.json": "150570ad8f128a0543ba7e53982c42df",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/Dancing_Script/dancing_script.ttf": "d3bebba97d549436fd6137d05d55ae33",
"assets/assets/video/verticalSuperpower/17.png": "573f50dce3ad7c79946399126569e0c2",
"assets/assets/video/verticalSuperpower/7.png": "fe6ac96ad6f036b45919805727d1674d",
"assets/assets/video/verticalSuperpower/19.png": "97035ce2fff0c593c11bd1da08316258",
"assets/assets/video/verticalSuperpower/15.png": "19d4c512f8c2b12aecb2744045656c54",
"assets/assets/video/verticalSuperpower/14.png": "13559b07836318b4a97987163c2bb6d0",
"assets/assets/video/verticalSuperpower/13.png": "5537ad13fb675a59d98d3f0d376a9965",
"assets/assets/video/verticalSuperpower/8.png": "01bff6bf49f1879f7a2af1bbca47e660",
"assets/assets/video/verticalSuperpower/16.png": "c21be0fda4d9e302b31ff0a071abdcd8",
"assets/assets/video/verticalSuperpower/9.png": "ba679208fd5f65c155839356ada4c69e",
"assets/assets/video/verticalSuperpower/18.png": "73022fc87d9bfb38b15f934c0b84081a",
"assets/assets/video/verticalSuperpower/3.png": "329c03df1ead6215744b114eda980b82",
"assets/assets/video/verticalSuperpower/11.png": "10508b558b58334dab836e4656967e73",
"assets/assets/video/verticalSuperpower/6.png": "524e8906f275f0b75278f90dbe58f342",
"assets/assets/video/verticalSuperpower/2.png": "e877d5b33fca44192ca2600d06af6f53",
"assets/assets/video/verticalSuperpower/1.png": "e3e2bfc436724d05c6d00dd5e6859de0",
"assets/assets/video/verticalSuperpower/0.png": "4d4cd84155c09dc50cf34100e3c53291",
"assets/assets/video/verticalSuperpower/4.png": "1ed20e27bd9f8bdb8a0e95bf02c535e1",
"assets/assets/video/verticalSuperpower/5.png": "1f04a4b2379f7a8d68ba12308454fc15",
"assets/assets/video/verticalSuperpower/12.png": "2340da6c9f93246615ef28ce25bd6520",
"assets/assets/video/verticalSuperpower/10.png": "9fb2a5f7f8c6f51c1a0c1eef324d6191",
"assets/assets/video/horizontalSuperpower/69.png": "e380e00c6880263675dd85eba25ea7bf",
"assets/assets/video/horizontalSuperpower/72.png": "8777edc4cd95bfe5e6437750050dc77f",
"assets/assets/video/horizontalSuperpower/73.png": "7bf76ac00c3e83cd59555725b172e5fd",
"assets/assets/video/horizontalSuperpower/81.png": "857631d10552ea11fdfc15e86d471564",
"assets/assets/video/horizontalSuperpower/76.png": "f7d2007229334390579626921df88092",
"assets/assets/video/horizontalSuperpower/79.png": "b0f66ae2672f120ed49ce553691ded39",
"assets/assets/video/horizontalSuperpower/83.png": "8fb06447b8c85b3978e338cb6fb8583f",
"assets/assets/video/horizontalSuperpower/82.png": "8724ec7b7fb66c2d9b8bd505afcd5a19",
"assets/assets/video/horizontalSuperpower/74.png": "4b8ba3f4ae01d53a81b50c824a52a34a",
"assets/assets/video/horizontalSuperpower/71.png": "6056dbf16a3117f45c64463c35f4b433",
"assets/assets/video/horizontalSuperpower/78.png": "cb98a82ce5605594d01bb3f0db51d9a8",
"assets/assets/video/horizontalSuperpower/85.png": "b49cd708c1862b868e4746e8bbda7395",
"assets/assets/video/horizontalSuperpower/75.png": "61cc3336c5509a684e7fd89631552585",
"assets/assets/video/horizontalSuperpower/80.png": "ea151c13564b40167ebc09e1d2944e69",
"assets/assets/video/horizontalSuperpower/77.png": "f89a460e3105a3a0d45ba7b2bb69f477",
"assets/assets/video/horizontalSuperpower/84.png": "688f147f568c7108735283b58c739489",
"assets/assets/video/horizontalSuperpower/68.png": "90be94fe3857c7cbe874cd3b4fd764f8",
"assets/assets/audio/append1.mp3": "acdfc3e3b1a4a061b7aa118f28b71ea9",
"assets/assets/audio/edm.mp3": "50dfe8ef5564a54ccd30be7f1f7d5d89",
"assets/assets/audio/bubble0.mp3": "fe5cc2ed3fba5d4f7758b376fd5a68d2",
"assets/assets/audio/bubble1.mp3": "30f683d119487305aa1e8bea36495907",
"assets/assets/audio/bubble3.mp3": "c6fe5f0ccac7545d444d1f1d11af0325",
"assets/assets/audio/append2.mp3": "db59900a1083d6df744c31a461b2a762",
"assets/assets/audio/append3.mp3": "f0720e835e46d5e798af94b83680b185",
"assets/assets/audio/append0.mp3": "9efae7e98933cb18d1e3c4c6b99912b9",
"assets/assets/audio/edm.ogg": "ad9f50431ac96a699cc0283dbb45bea5",
"assets/assets/audio/bubble2.mp3": "c85d93dcdbb90d65b3330abf0d4c0c9f",
"assets/assets/image/gameover1.jpg": "25ff770d6126824c362569d8937935fe",
"assets/assets/image/-------1.png": "8fd545d591511bdc34ef84895ef87ca7",
"assets/assets/image/Webp.net-resizeimage.png": "fe483f727e4069b06ba504d11cb9d726",
"assets/assets/image/arrow.png": "3b386e19ec3017921887283a6544f6af",
"assets/assets/image/home.png": "b6efe8efecd9a250ac8cf8bab7017caa",
"assets/assets/image/exit.png": "2ae0be897e5e1d232fa68d2ee632de23",
"assets/assets/image/music.png": "18b57973c172c4377992ccbe15bfb3e6",
"assets/assets/image/startButton.png": "20f0ba2fb6f0b4848c5e52188a15f265",
"assets/assets/image/background3.png": "dec7fa0cde96e5f3c03a94b13b62ab54",
"assets/assets/image/background2.png": "e27bf1502f4b0632880fe895a01e0fa8",
"assets/assets/image/horizontalSuperpower.png": "897b37d0a5b10fe4f4cd2ab37858dedb",
"assets/assets/image/pause.png": "ecd26d0a9df6f78e48b81549a764fd9d",
"assets/assets/image/setting.png": "91894288dc781cce5f2f1bd7ed8411ee",
"assets/assets/image/gameover2.jpg": "15736bb1723b860f6aabc8f638ee498f",
"assets/assets/image/verticalSuperpower.png": "1f10923ea7df64a17efe11b7546067a3",
"assets/assets/image/play.png": "0fa4b3e31a1ccb639252b3d0244aba5f",
"assets/assets/image/setBG.jpg": "e48cfc0567b7d75e5d47b051bc159c8a",
"assets/assets/image/homePage/background.png": "e6a16507571e6c0ea708d8b279b901cf",
"assets/assets/image/homePage/volumeDown.png": "4b78469e6647d18a3d40f3ae77312f7e",
"assets/assets/image/homePage/music.png": "4150f7555cd24afcbab0bb0f8c91d6ef",
"assets/assets/image/homePage/background-old.png": "ad92ff6f46f40e8b31a8234c76aca515",
"assets/assets/image/homePage/buttonBorder.png": "18888378bb6e6cb5b7e0ed117f9f4e93",
"assets/assets/image/homePage/volumeDown-old.png": "4b78469e6647d18a3d40f3ae77312f7e",
"assets/assets/image/homePage/titleBorder.png": "725c56d497f90d675ae8169cebf09fee",
"assets/assets/image/homePage/volumeUp.png": "faf4a72e148ead2ccda5c611d3a6ab73",
"assets/assets/image/homePage/mute.png": "f9804a3fa657c5023a5ba1f4abbecc12",
"assets/assets/image/background.jpg": "229b217063d5926a935c18d95e3aadc1",
"assets/assets/image/startButtonBorder.png": "536db3e967f7520bc5f40b8db7e2d032",
"assets/assets/image/x.png": "5792683e969b80d8d6f15675bced5251",
"assets/assets/image/preview.webp": "52505c421f8143875f972c43d0e9e5e9",
"assets/assets/image/mute.png": "991ad8af6cf6edda211ecbfe498c1435",
"assets/NOTICES": "d7297b981353baf7095a2e8d3c153eca",
"assets/AssetManifest.bin": "66d0a9cc6ff7f129567a60ff27c49bec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "4a6d9d01efd1000cc492f780a1c1be8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "a39470d56f2f2d41176f563460030aeb",
"icons/Icon-512.png": "d792e37993c61528ce5b41ccc14962df",
"manifest.json": "e39403b46e024cb01970193fcd3f1e56"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
