// service-worker.js
const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = ['/index.html', '/static/css/main.css', '/static/js/main.js'];

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
