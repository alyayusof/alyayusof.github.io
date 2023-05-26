---
layout: null
---
const CACHE_NAME = 'my-pwa-cache';
const urlsToCache = [
  '/',
  '/assets/js/tailwind-config.js',
//   '/path/to/your/styles.css',
//   '/path/to/your/scripts.js',
  // Add more URLs to cache as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
