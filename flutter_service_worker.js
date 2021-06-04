'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eda29fa4786c013d6525a72a5470c723",
"index.html": "7cbe012eb955e4b7fe2d032c3009f435",
"/": "7cbe012eb955e4b7fe2d032c3009f435",
"main.dart.js": "ca388363989211e3e5facbf2519d1898",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ab8ca4a4a15d7656b4df465956dac9fe",
".git/config": "9da2439cd36c3e2076811fdae8d923b5",
".git/objects/59/29b9596ae72ed245f9d441e98f4fe8ebd7f21c": "b5f46e59629396356e94db05cb077e9e",
".git/objects/3b/43e02c5e282d24c3e1f1644f3e80b667d84f5a": "7c1506043c15c9a1eb71cac252672110",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/30b36b56c818fcacc8a9148781eca9f60550ca": "87b1f096ea5d4790782d48ebb3e647b3",
".git/objects/0b/6b40715ff463df438f61b14b1cc2906c0898df": "cb68511871606fc952296f51252294de",
".git/objects/93/a3cea763dacbf9368427a39f78002c2b3c0799": "0fe4007776915fbf5169322c333597e3",
".git/objects/0e/c34b68d112298bb078c6935c62eadf3eb3a08d": "f7850c710355ebcc02bfa29711550ed4",
".git/objects/60/142182f9fa89263c97eb9628ff1665fdd50fdf": "69343f9cbdabb4a73160808c858f8968",
".git/objects/da/e6aba65ddd3fcfc5bdbd4c9bab0f6d046e8667": "923fc470acfcca078f01e1b1ee496e5d",
".git/objects/bc/2a00ebf37191b1f50ce0552e12c9d810cf4ab4": "7a39923689634ca03a64673f14345cc0",
".git/objects/f4/63d3c2b93065f434e0c37de5752eda739723d3": "b973603025878c3363fc552e8790edbc",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ca/52fe3aca54d430a4c2ef7d94585c4a83b0e020": "68892bc49a001162297668fa1f06895d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/641176bc08d4592269f02515d523eba36af9b1": "f1a7134026229d08fd23c41938b8a121",
".git/objects/4b/d0ce3b902b679c9908a37c517d0eadda50a139": "65a4e5db086b340b6dfee0934097840b",
".git/objects/87/7e232ee894d0978f0ae71c94e887ecc82be04f": "93e76305460d96f9e9a99aa1379d931a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/b89d8bd15da67e4bef4103c6513b2441a2007e": "119a21fb54892bd36120df8cc6fb6cf4",
".git/objects/00/181de6d2d5790e8fa02a46b369c907f5b3e105": "ce0fa9529669f324d59e366a41ad1fdd",
".git/objects/9a/8947c54ee732004322d74e4b9574d6268be1b6": "606dd08434ff7be13b110f6e6c93fa36",
".git/objects/30/bf9112a6b428e3b2ffae6089ddace7c7d9e9a0": "e9d1de8b62d2c0dd07c0ca1bf0ac398b",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/39/33a48e9f954b8fa7f284a12ef25643a21f76ff": "b8cbb092d4703a64946bf74878e546e9",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/d3/4958372f0f19b582ce51b50fb93dccb738682c": "27ebd76ac54adec682b5ed5fa31a7748",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/5855a775803afceafcf42e00fb825e861be44f": "421bd4abcd99686f545c4720ced2c44d",
".git/objects/ff/d64d8a5e4e4cdeb545199241e5c2613edf2ebd": "f43dcb933db9ad03e033d264871d17b2",
".git/objects/e9/04e5d5e94a6ce2240fd3f9eff918940434d67d": "2dd16ccf9a32b2f4b25bd35c007110fe",
".git/objects/15/10860b0baa1f2aee0bb9acf71e4d26c66b4c83": "3e3b7402c5d224f7319e991d9bacd3b7",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/8c/0642775bfcfba3c3c4cbc925956904609897ef": "0270ce5d886a46d77309083937fa642a",
".git/objects/8b/6a2d4ea845c95e89b613bdf95398c9d6dcd15a": "91e9303aa5fd6f1ee1b8ce9c9222b817",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b19ba37a12c812797598b314fbe69f4",
".git/logs/refs/heads/master": "8b19ba37a12c812797598b314fbe69f4",
".git/logs/refs/remotes/origin/master": "dea63d261f1760af10bcae4c241b29d3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "b3e87a66475169b1b9aff6ae9b10f1f1",
".git/refs/remotes/origin/master": "b3e87a66475169b1b9aff6ae9b10f1f1",
".git/index": "f49bb5e75334abfd98e457f39f0b3452",
".git/COMMIT_EDITMSG": "82b4dfbb59f3b8ed680896d05b579a8e",
"assets/AssetManifest.json": "65f559b3a57a1e6dcab6e37182e31544",
"assets/NOTICES": "75dbef6c3fed2894ce5e6a326f5d211a",
"assets/FontManifest.json": "a7c0e82be6c894a6f95885a4c1309775",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/border.png": "f39fcebf06b6c27e5f07023d4c4504eb",
"assets/assets/images/border_dark.png": "a8314027787df5f21cc314fa42cde336",
"assets/assets/fonts/NanumSquare_acR.ttf": "0e1f2365ab61e1ea88d2fbdef3952fdb",
"assets/assets/fonts/NanumSquare_acB.ttf": "a70857e6e4e14337824725c15f2a5e34",
"assets/assets/fonts/NanumSquare_acL.ttf": "657050ee382d17287e986b273621ec95"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
