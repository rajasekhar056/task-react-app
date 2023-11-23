// service-worker.js
/* eslint-disable no-undef, no-restricted-globals */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = ['/index.html', '/static/css/main.css', '/static/js/main.js'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
