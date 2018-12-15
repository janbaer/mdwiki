/* eslint-env worker, serviceworker */
/* eslint no-restricted-globals: ["off", "self"] */

const APP_VERSION = '0.28';

const APP_CACHE_NAME = `mdwiki-app-cache-v${APP_VERSION}`;
const GITHUB_CACHE_NAME = 'mdwiki-github-cache';
const GITHUB_API_HOST = 'api.github.com';
const appFiles = ['.git', 'CNAME', 'github-markdown.107c999b.css', 'github-markdown.5386ff48.css', 'github-markdown.5386ff48.js', 'index.html', 'index.js', 'manifest.webmanifest', 'src.5ea8d594.js', 'src.d5b07388.css', 'src.e31bb0bc.css', 'src.e31bb0bc.js', 'styles.397f269d.css', 'styles.45de0957.css', 'styles.45de0957.js', 'uikit-core.9ad775e6.js', 'uikit-icons.9ee4fb5a.js', 'uikit.e371eedf.css', 'uikit.e371eedf.js', 'uikit.e9aa4cfd.js', 'uikit.eac1f00b.js', 'uikit.f5f8006d.css', 'wiki-192px.5eee20f1.png', 'wiki-192px.b778628f.png', 'wiki-512px.a809d0e9.png', 'wiki-512px.b05caf2d.png'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(installServiceWorker());
});

self.addEventListener('activate', event => {
  event.waitUntil(cleanOldCaches());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }
  event.respondWith(handleFetch(event.request));
});

async function installServiceWorker() {
  const isUpdate = await checkIfIsUpdate();
  await addToCache(APP_CACHE_NAME, appFiles);
  if (isUpdate) {
    await notifyUpdate();
  }
}

async function checkIfIsUpdate() {
  const existingCacheKeys = await caches.keys();
  return existingCacheKeys.some(key => key === GITHUB_CACHE_NAME);
}

async function notifyUpdate() {
  const allClients = await clients.matchAll({ includeUncontrolled: true, type: 'window' });
  for (const client of allClients) {
    client.postMessage({ type: 'update', version: APP_VERSION });
  }
}

async function handleFetch(request) {
  const requestUrl = new URL(request.url);

  if (requestUrl.host === GITHUB_API_HOST) {
    if (!navigator.onLine) {
      return cacheFirst(GITHUB_CACHE_NAME, request, requestUrl.pathname);
    }
    return networkFirst(GITHUB_CACHE_NAME, requestUrl, requestUrl.pathname);
  }

  return cacheFirst(APP_CACHE_NAME, request, requestUrl.pathname);
}

async function cacheFirst(cacheName, request, cacheKey = request) {
  const cache = await caches.open(cacheName);

  const responseFromCache = await cache.match(cacheKey);
  if (responseFromCache) {
    return responseFromCache;
  }

  return fetch(request)
    .then(response => {
      if (response.status === 200) {
        cache.put(cacheKey, response.clone());
      }
      cache.put(cacheKey, response.clone());
      return response;
    });
}

async function networkFirst(cacheName, request, cacheKey) {
  const cache = await caches.open(cacheName);

  return fetch(request)
    .then(response => {
      if (response.status === 200) {
        cache.put(cacheKey, response.clone());
      }
      return response;
    })
    .catch(error => cache.match(cacheKey)); // eslint-disable-line
}

async function addToCache(cacheName, filesToCache) {
  const cache = await caches.open(cacheName);
  return cache.addAll(filesToCache);
}

async function cleanOldCaches() {
  const activeCacheKeys = [APP_CACHE_NAME];

  const existingCacheKeys = await caches.keys();

  const cachesToDelete = existingCacheKeys.filter(key => !activeCacheKeys.includes(key));
  if (cachesToDelete.length > 0) {
    return Promise.all(cachesToDelete.map(key => caches.delete(key)));
  }
  return undefined;
}
