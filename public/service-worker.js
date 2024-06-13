self.__WB_DISABLE_DEV_LOGS = true
const CACHE = "brunosabotdev-offline-page";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const offlineFallbackPage = "offline.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
  new RegExp('/*'),
  new StaleWhileRevalidate({
    cacheName: CACHE
  })
);

self.addEventListener('fetch', event => {
  if (event.request.url.endsWith('.png')) {
    // Using the previously-initialized strategies will work as expected.
    event.respondWith(new StaleWhileRevalidate({ cacheName: CACHE }).handle({event, request}));
  }
});