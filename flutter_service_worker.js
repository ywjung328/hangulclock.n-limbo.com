'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eda29fa4786c013d6525a72a5470c723",
"index.html": "421d3122e6204702eb02c84d87207402",
"/": "421d3122e6204702eb02c84d87207402",
"CNAME": "550f7fa0cb177094fb4d458f6c357e5a",
"main.dart.js": "78543413f31913bd881d1870d6db9917",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ab8ca4a4a15d7656b4df465956dac9fe",
".git/ORIG_HEAD": "80a48e1b1fd819af1543f4cfd0fb2ff9",
".git/config": "9da2439cd36c3e2076811fdae8d923b5",
".git/objects/0d/84335a4f9c63b65df2bbfb20104d9da6a43626": "4f5c94cfbbffc72a05f81cf879266f80",
".git/objects/59/29b9596ae72ed245f9d441e98f4fe8ebd7f21c": "b5f46e59629396356e94db05cb077e9e",
".git/objects/92/1f440c72ec0d11c7f32ac88eb5d1be8a03681f": "f999732b867cad97c88ffced014d6d16",
".git/objects/57/c9e539af774990d9a2585a15a60e72d0a35a9a": "4419fcbeb800a27af523a194df472c55",
".git/objects/3b/43e02c5e282d24c3e1f1644f3e80b667d84f5a": "7c1506043c15c9a1eb71cac252672110",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/8a60116f08c394ba5538370050ee4d68e3c940": "703b774ee5d1fd5af1435616c1526f6e",
".git/objects/3d/30b36b56c818fcacc8a9148781eca9f60550ca": "87b1f096ea5d4790782d48ebb3e647b3",
".git/objects/0b/6b40715ff463df438f61b14b1cc2906c0898df": "cb68511871606fc952296f51252294de",
".git/objects/93/a3cea763dacbf9368427a39f78002c2b3c0799": "0fe4007776915fbf5169322c333597e3",
".git/objects/0e/c34b68d112298bb078c6935c62eadf3eb3a08d": "f7850c710355ebcc02bfa29711550ed4",
".git/objects/60/142182f9fa89263c97eb9628ff1665fdd50fdf": "69343f9cbdabb4a73160808c858f8968",
".git/objects/da/e6aba65ddd3fcfc5bdbd4c9bab0f6d046e8667": "923fc470acfcca078f01e1b1ee496e5d",
".git/objects/d6/45af32a6ee98b10f537585a82224020f2c2689": "eb5dbeb54015a0cd1c536c751e987ec1",
".git/objects/bc/2a00ebf37191b1f50ce0552e12c9d810cf4ab4": "7a39923689634ca03a64673f14345cc0",
".git/objects/e2/cc5f24e7eaf677fce12c173192f5fc35d58c34": "d5d24d5b3d8e5ae57c823089f75ebff8",
".git/objects/f4/63d3c2b93065f434e0c37de5752eda739723d3": "b973603025878c3363fc552e8790edbc",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f5/37ec47a1987b0ec85ce1c6e75c4274849b7981": "723ef7b2612fc3ecb52db2e9fac0d7c9",
".git/objects/ca/1a65ef44d65a1675e7b018773010e323edb44f": "12cb2484737e018587a8249146e2c878",
".git/objects/ca/52fe3aca54d430a4c2ef7d94585c4a83b0e020": "68892bc49a001162297668fa1f06895d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/641176bc08d4592269f02515d523eba36af9b1": "f1a7134026229d08fd23c41938b8a121",
".git/objects/4b/d0ce3b902b679c9908a37c517d0eadda50a139": "65a4e5db086b340b6dfee0934097840b",
".git/objects/11/c54d4e8a8b7cc3924e21d89b1ccfec0add7636": "33a4c8124987866be3ba3ed3ca846127",
".git/objects/29/3d8669d7f29ce4434d99e86446edf9ebc2a25a": "b856096d1736ebfe75a2d9812a052ee6",
".git/objects/7c/35fdc80c8c4f97f8554884bebc9f04df823552": "a1f2ec93824b6323019a5a239f6740e8",
".git/objects/1f/e8b4909b58d9e38266267985ef73a63693eec2": "c29c061ae7f422b491ef1c3af2bfa592",
".git/objects/87/7e232ee894d0978f0ae71c94e887ecc82be04f": "93e76305460d96f9e9a99aa1379d931a",
".git/objects/8f/d64ba7ca4082fe8f48d5245b22140d2587a5ec": "b145fe93f79d75cc1b430b722af66865",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/dbd08d9e98985b0cd5bd4c8d2e1ddf67154a8f": "c713b180a2e943776d85afbce32cd9bf",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/44/95f50d26e4eece486467874b0b16620fbdbe22": "37e683d910b0ef3c6c95baf2104d0aa1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/b89d8bd15da67e4bef4103c6513b2441a2007e": "119a21fb54892bd36120df8cc6fb6cf4",
".git/objects/00/181de6d2d5790e8fa02a46b369c907f5b3e105": "ce0fa9529669f324d59e366a41ad1fdd",
".git/objects/6e/660aa8a8428a8fa58a35d3b7f1ac69d1d8b053": "c0b315a20d0fff2b48981faf1556d7f8",
".git/objects/6e/73038824aa35441e2a9cabfb66fcca64b0beeb": "61969b7be723a98f5369e205de64fd9c",
".git/objects/9a/8947c54ee732004322d74e4b9574d6268be1b6": "606dd08434ff7be13b110f6e6c93fa36",
".git/objects/31/7a5c89c215cdf4b9533b215e9cd6fbde0e74ab": "da4a2bfa47e2be4be40f7406a1debc15",
".git/objects/98/912d5832b7ce6658ee743d06540c09302ea4e9": "11abc3305e035ee163bba42d35cb121f",
".git/objects/30/bf9112a6b428e3b2ffae6089ddace7c7d9e9a0": "e9d1de8b62d2c0dd07c0ca1bf0ac398b",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/6d/6d050233aa0938e11403af9c5f05084e7c33e1": "9e098586d6493b07c742503cbf44beed",
".git/objects/39/33a48e9f954b8fa7f284a12ef25643a21f76ff": "b8cbb092d4703a64946bf74878e546e9",
".git/objects/63/edc1a140ad1dda59e90d30335c6df37a78dcdd": "c56b47bacac0719abf8523fa0d26dbde",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/d3/4958372f0f19b582ce51b50fb93dccb738682c": "27ebd76ac54adec682b5ed5fa31a7748",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/5855a775803afceafcf42e00fb825e861be44f": "421bd4abcd99686f545c4720ced2c44d",
".git/objects/e1/f27ef4569c4327f45c126a3956341645b45044": "2c901ad93b94e52461d3cfe3bded6b37",
".git/objects/ff/d64d8a5e4e4cdeb545199241e5c2613edf2ebd": "f43dcb933db9ad03e033d264871d17b2",
".git/objects/e9/04e5d5e94a6ce2240fd3f9eff918940434d67d": "2dd16ccf9a32b2f4b25bd35c007110fe",
".git/objects/f1/62a36514c276e79ec6e91cbfdcfbf302ae6ee3": "a94ebf4c3f454eb5fd5091b338d15942",
".git/objects/77/e91ff714cf0e0827bdfb2f810c19f72855aed8": "f581245208ce56cd3f71ecf8608d76d4",
".git/objects/24/9c26ce365fe35e68014794529885a6c4f1345c": "75c83d705ce4da03338b4de4a309a067",
".git/objects/15/10860b0baa1f2aee0bb9acf71e4d26c66b4c83": "3e3b7402c5d224f7319e991d9bacd3b7",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/8c/0642775bfcfba3c3c4cbc925956904609897ef": "0270ce5d886a46d77309083937fa642a",
".git/objects/76/1f813f7ea89eaa8963d1984acc3e1686296b3e": "39aaa75c15cd8e48971910a138b01941",
".git/objects/47/5aa8610e3fb37b4e97022196be2761dbd8d530": "c357a9face45a93a3bb69326240ebb6d",
".git/objects/8b/6a2d4ea845c95e89b613bdf95398c9d6dcd15a": "91e9303aa5fd6f1ee1b8ce9c9222b817",
".git/objects/7a/3a51d9373f0f1d3d9bd80fbf8a1581b9879eec": "d96dcce368809d6d5176f5adf0579ede",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33edf262b97e80ef57cb25ee9a1e6385",
".git/logs/refs/heads/master": "33edf262b97e80ef57cb25ee9a1e6385",
".git/logs/refs/remotes/origin/master": "33b86a51a5ae68f7aa97cc4888754327",
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
".git/refs/heads/master": "4968f8500962cc27d4f15f755381a2f6",
".git/refs/remotes/origin/master": "4968f8500962cc27d4f15f755381a2f6",
".git/index": "0c60d4a9d3194ab8d520e1a5b3a51b02",
".git/COMMIT_EDITMSG": "841a368cda29af388b03486ace369fe7",
".git/FETCH_HEAD": "9d90146f34648a0aebaab865fc16a747",
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
