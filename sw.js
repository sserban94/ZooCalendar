const cacheName = 'zoo-v1';
const staticAssets = [
    'index.html',
    'amphibians.html',
    'birds.html',
    'catalog.html',
    'categories.html',
    'contact.html',
    'fish.html',
    'mammals.html',
    'reptiles.html',
    'scripts/catalogIterator.js',
    'scripts/categoriesLoader.js',
    'scripts/categorySound.js',
    'scripts/songs.js',
    'scripts/speechRecognition.js',
    'css/animalsStyle.css',
    'css/categories.css',
    'css/style.css',
    'audio/amphibians.wav',
    'audio/birds.wav',
    'audio/fish.wav',
    'audio/mammals.wav',
    'audio/reptiles.wav',
    'animals/resized/all/anaconda.jpg',
    'animals/resized/all/bullfrog.jpg',
    'animals/resized/all/chameleon.jpg',
    'animals/resized/all/cheetah.jpg',
    'animals/resized/all/cobra.jpg',
    'animals/resized/all/eagle.jpg',
    'animals/resized/all/europeanGreenLizard.jpg',
    'animals/resized/all/europeanToad.jpg',
    'animals/resized/all/giraffe.jpg',
    'animals/resized/all/grizzly.jpg',
    'animals/resized/all/hammer.jpg',
    'animals/resized/all/hedwig.jpg',
    'animals/resized/all/kingPenguin.jpg',
    'animals/resized/all/komodoDragons.jpg',
    'animals/resized/all/lionFish.jpg',
    'animals/resized/all/nemo.jpg',
    'animals/resized/all/newt.jpg',
    'animals/resized/all/pufferFish.jpg',
    'animals/resized/all/redHawk.jpg',
    'animals/resized/all/salamander.jpg',
    'animals/resized/all/tiger.jpg',
    'animals/resized/all/tucan.jpg',
    'animals/resized/all/wolf.jpg',

    'manifest.webmanifest'
];
self.addEventListener('install', e => {
    console.log('Service Worker ZOO: Installed');
  
    e.waitUntil(caches
        .open(cacheName)
        .then(cache => {
            console.log('SW CAR cache files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
  });

  self.addEventListener('activate', e => {
    console.log('Service Worker ZOO: Activated');
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('SW ZOO:Cleaning Old Cache ');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
  })

  self.addEventListener('fetch', e => {
    console.log('SW ZOO fetching');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  })


// self.addEventListener('install', async e => {
//     const cache = await caches.open(cacheName);
//     await cache.addAll(staticAssets);
//     return self.skipWaiting();
// });

// self.addEventListener('activate', e => {
//     self.clients.claim();
// });

// self.addEventListener('fetch', async e => {
//     const req = e.request;
//     const url = new URL(req.url);

//     if (url.origin === location.origin) {
//         e.respondWith(cacheFirst(req));
//     } else {
//         e.respondWith(networkAndCache(req));
//     }
// });

// async function cacheFirst(req) {
//     const cache = await caches.open(cacheName);
//     const cached = await cache.match(req);
//     return cached || fetch(req);
// }

// async function networkAndCache(req) {
//     const cache = await caches.open(cacheName);
//     try {
//         const fresh = await fetch(req);
//         await cache.put(req, fresh.clone());
//         return fresh;
//     } catch (e) {
//         const cached = await cache.match(req);
//         return cached;
//     }
// }