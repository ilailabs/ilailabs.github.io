'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5026c38edd0342e56c5720c48f895ed7",
"index.html": "521286d63f029f917ef1b2e80087c21e",
"/": "521286d63f029f917ef1b2e80087c21e",
"main.dart.js": "9657a2fbbd51aeb1d619e4f1779f5bc8",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "dc1bcece73dedab8467fc1a6e272ec35",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "494f760a69a36a53df565cb598294750",
".git/config": "78cf44220012b92d472bd0a9428ebe4c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/6f/01d647fc00ce19a6c9ac52a385ff3a6b68c109": "05547f44194535a9e60e48b6afa156c5",
".git/objects/9b/1e1a4ad7ce1da1bd415df983e13e44093e13e3": "1cea77a7c0db6d08ed5a9e7469b70638",
".git/objects/69/a1f1574f87b810dc15be37ff617c786b450205": "574e5883575b8b2ab421fe0255b6a320",
".git/objects/51/b8899dd5a3db2ddb7e6b1959778bb0ddb4a748": "c3c4edb16ebf6a9f3f0231f30a3089af",
".git/objects/51/7f6e290a2e1fa628ebdbd0d47d8c92c89e7200": "d28f9630fbe102f9891a578e5a68c7e0",
".git/objects/58/6005c5152a51db6db2f55843128d05a791dc74": "fb635bbfbfea9cb07cad8c20db659089",
".git/objects/0e/c221996683fb1820d5515172f71243731d0e2b": "aefc1f99946d3e7a44bbc1ce951e1ba9",
".git/objects/34/c66c2b431272aa6767aecdc203a7be06ee6202": "445e459024aa7a76939e3761dd36e740",
".git/objects/9d/aa0ec1587b2dcdff359020bb7e96b335314da1": "b4eae36f528784b2775813ef06e04cf8",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b3/496d189c855d249e162faaef1b30860b088528": "da4889147a4b056e31f628586667f9a8",
".git/objects/b3/175ebe02eb3fd3aaa3951316b677f4d4601360": "645d5535f37a74661f18756ad39a36c8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/88ded575a177a4211578f234a42c37e7dc54fd": "48d71b37ccc411a28125fcf2b1a7a078",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/56285bedcf1cb3f97e06a3da88ef65543df0bb": "aefcae19011cdc048c73c8715b87bfc5",
".git/objects/c0/ea1bca188587aeb8b7df7446c743f241feb864": "32c0dc176a80a2e28560c8ebb3f6cc5f",
".git/objects/fe/bfcf8d0ad1be753034f5a5603c0cd77295f3b6": "68e8f4dd340a9237c629fef006dfa702",
".git/objects/fe/ebd59834d24defb7eb75e4d124cf8a444c382e": "dbe5f2ace4ed1139bf09b969ee2b31d7",
".git/objects/c6/bd509859147e70e1578237cbc34e09dd3999c3": "4c3032f780f5ec4d144c0ac3914e4e6f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/f52d6e502bc93c77deaddc3c158e5d7b33c90a": "365f97e30a1f860d57fa34354ef2466e",
".git/objects/20/ed8aa808b0ce229294bf8f8c61838b5cbeb8e9": "ff1e2cc81f891ef7ae98c971ac4f128e",
".git/objects/pack/pack-2fa5e050e1d8de925fbd42dfda80c7647a2106c7.idx": "761cc8986d48c9d8fdb99481f9c4aa3f",
".git/objects/pack/pack-2fa5e050e1d8de925fbd42dfda80c7647a2106c7.pack": "120ac66a33ff27578b09509a5ffaca7b",
".git/objects/16/d846bc477eba06ae0d911bdb397bcd8ed3939c": "055212060b32f33aa928658194bcf370",
".git/objects/17/b971e181bcf6a9ba502a6bca03e8339d8aeac5": "352abbd785c7302ffbcb0da3322e10c8",
".git/objects/2f/99ecfc958b7891708c627c93fdde66284ed94f": "4b8852bb104706ff667cbc1c15f40941",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/aae910d2879f02a31a7e9033a8ff071160bd93": "ae014822301f06cad318b95060d20a0f",
".git/objects/6e/b138a33179b6283128dddd2fd9e6dbd1d35b27": "32b7fe4568b9ea5642a04d9b64722f75",
".git/objects/31/7155bed453b60c48b8a5c60f7a14a8c56d32bc": "b3ddf011814ea7927b021463aa205014",
".git/objects/65/aec9413857960d870c3ee461933f7a91eb2638": "d169e7ec50321d1dca2763f3b20ec462",
".git/objects/96/4e8d5ab66dc0ade81b1bbce979f340f03a10df": "ff783173343034f8835eeaf8317c49be",
".git/objects/ba/0b284736d8f41eb2280a5708f4765687803588": "153f2b51314bfcd951ef4408be2dfc65",
".git/objects/d5/669a9fe327b13175a15cb61c053bd47385d6ef": "5734c9c8b1804cd3bf603dded5e3dd83",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/c6c56721e5ad031aa6bd92cf412c1414f69fd8": "146e0be355c421f0da9d67820c64db38",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ce/4e550ffea6584f3ce4ac4855cbe4c6f27b1fce": "f9ec4a21a4aff840d7973a13386b33bb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0cb45f6840febc8d771340218fe2f32e29dcd1": "fafaa3cb4be62e5a050b08cb0047ca07",
".git/objects/4a/75f0edda0b3dc7c501525bd1c0f7f04137982d": "d7060f271764b2b0492ee640dd3dcb8e",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/9b73da0fc5d5330c5036bc7185806202b9dee3": "9aa84897ebdc0cd1d1ac6c3acc98685e",
".git/objects/76/569642f35ab2ca1d971ba44e2f713eb6be6ca7": "f571226d530730e769696b87176ac60d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/40/ba16a462d84a9552c619d475ff3e3eada6906c": "0b2d44fa69e21de04c3525cdfd97ac0f",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "59683793d89158055abeaa59fc902ce1",
".git/logs/refs/heads/main": "59683793d89158055abeaa59fc902ce1",
".git/logs/refs/remotes/origin/HEAD": "c33ab1d784f95f6f059b43f1a6cb57da",
".git/logs/refs/remotes/origin/main": "8d4177e203db4c17c014d6ac68e10fa4",
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
".git/refs/heads/main": "0a4aa6410f96fca360f356fae8a0b532",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0a4aa6410f96fca360f356fae8a0b532",
".git/index": "124ad5fa50cdf86616772f76a1365c31",
".git/packed-refs": "f95a8fc70b39406f3fdb9fa736b6f72f",
".git/COMMIT_EDITMSG": "8747fd0dc43a1fdfaa9b3c2481dbe74f",
"assets/asset/my-profile-pic.png": "05b8f0badbb65f9282a59efd6ab3faa4",
"assets/AssetManifest.json": "d7bbd474606034e954313def4431ac9d",
"assets/NOTICES": "e6bdfbb089e21786f43c4bd9aa7b55db",
"assets/FontManifest.json": "58d09a1ad43329c1a1b9654cb79cf0f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Quicksand-VariableFont.ttf": "aaaca85ea11863d1e4550d425f763bd1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
