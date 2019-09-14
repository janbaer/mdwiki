/* eslint-env worker, serviceworker */
/* eslint no-restricted-globals: ["off", "self"] */

const APP_VERSION = '#1';

const APP_CACHE_NAME = `mdwiki-app-cache-v#1`;
const GITHUB_CACHE_NAME = 'mdwiki-github-cache';
const GITHUB_API_HOST = 'api.github.com';
const appFiles = [];

const pathToIgnore = ['/user'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(installServiceWorker());
});

self.addEventListener('activate', event => {
  event.waitUntil(cleanOldCaches());
  notifyClient('activate');
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }

  // This is a workaround for the problem with requests to Github with using credentials
  // as long the problem is not solved, we'll no longer let the ServiceWorker handle
  // requests to GitHub to be able to cache the responses and provide offline support
  const requestUrl = new URL(event.request.url);
  if (requestUrl.host === GITHUB_API_HOST) {
    return;
  }

  event.respondWith(handleFetch(event.request));
});

async function installServiceWorker() {
  const isUpdate = await checkIfIsUpdate();
  await addToCache(APP_CACHE_NAME, appFiles);
  if (isUpdate) {
    await notifyClient('update');
  }
}

async function checkIfIsUpdate() {
  const existingCacheKeys = await caches.keys();
  return existingCacheKeys.some(key => key === GITHUB_CACHE_NAME);
}

async function notifyClient(eventType) {
  const allClients = await clients.matchAll({ includeUncontrolled: true, type: 'window' });
  for (const client of allClients) {
    client.postMessage({ type: eventType, version: Number(APP_VERSION) });
  }
}

async function handleFetch(request) {
  const requestUrl = new URL(request.url);
  if (pathToIgnore.indexOf(requestUrl.pathname) >= 0) {
    return fetch(request);
  }

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
