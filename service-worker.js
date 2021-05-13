/* eslint-env worker, serviceworker */
/* eslint no-restricted-globals: ["off", "self"] */

const APP_VERSION = '3.2.68';

const APP_CACHE_NAME = 'mdwiki-app-cache-v3.2.68';
const GITHUB_CACHE_NAME = 'mdwiki-github-cache';
const GITHUB_API_HOST = 'api.github.com';
const appFiles = ['_snowpack/pkg/classnames.js', '_snowpack/pkg/common/_arrayPush-66ef8c0d.js', '_snowpack/pkg/common/_commonjsHelpers-16be0a9e.js', '_snowpack/pkg/common/compat.module-d2e7f108.js', '_snowpack/pkg/common/hooks.module-dd3aa32b.js', '_snowpack/pkg/common/isArrayLike-631f395a.js', '_snowpack/pkg/common/isTypedArray-8f663efa.js', '_snowpack/pkg/common/preact.module-4990fb49.js', '_snowpack/pkg/eventemitter3.js', '_snowpack/pkg/history.js', '_snowpack/pkg/import-map.json', '_snowpack/pkg/lodash/difference.js', '_snowpack/pkg/lodash/isEmpty.js', '_snowpack/pkg/lodash/isEqual.js', '_snowpack/pkg/preact/compat.js', '_snowpack/pkg/preact/devtools.js', '_snowpack/pkg/preact/hooks.js', '_snowpack/pkg/preact-router.js', '_snowpack/pkg/preact.js', '_snowpack/pkg/react-markdown.js', '_snowpack/pkg/react-simplemde-editor.js', 'dist/app/app.js', 'dist/app/components/app-title.css', 'dist/app/components/app-title.css.proxy.js', 'dist/app/components/app-title.js', 'dist/app/components/connect-button.css', 'dist/app/components/connect-button.css.proxy.js', 'dist/app/components/connect-button.js', 'dist/app/components/footer.css', 'dist/app/components/footer.css.proxy.js', 'dist/app/components/footer.js', 'dist/app/components/hotkey.js', 'dist/app/components/login-button.css', 'dist/app/components/login-button.css.proxy.js', 'dist/app/components/login-button.js', 'dist/app/components/modal-dialog.css', 'dist/app/components/modal-dialog.css.proxy.js', 'dist/app/components/modal-dialog.js', 'dist/app/components/modal-input-dialog.js', 'dist/app/components/navbar-button.css', 'dist/app/components/navbar-button.css.proxy.js', 'dist/app/components/navbar-button.js', 'dist/app/components/search-box.css', 'dist/app/components/search-box.css.proxy.js', 'dist/app/components/search-box.js', 'dist/app/components/sidebar-button.css', 'dist/app/components/sidebar-button.css.proxy.js', 'dist/app/components/sidebar-button.js', 'dist/app/constants/events.constants.js', 'dist/app/helpers/page-grouper.js', 'dist/app/helpers/unauthorized-error.js', 'dist/app/pages/connect/components/create-new-repository.css', 'dist/app/pages/connect/components/create-new-repository.css.proxy.js', 'dist/app/pages/connect/components/create-new-repository.js', 'dist/app/pages/connect/components/login-state.js', 'dist/app/pages/connect/components/select-existing-repository.css', 'dist/app/pages/connect/components/select-existing-repository.css.proxy.js', 'dist/app/pages/connect/components/select-existing-repository.js', 'dist/app/pages/connect/index.css', 'dist/app/pages/connect/index.css.proxy.js', 'dist/app/pages/connect/index.js', 'dist/app/pages/home/components/easymde.min.css', 'dist/app/pages/home/components/easymde.min.css.proxy.js', 'dist/app/pages/home/components/link.css', 'dist/app/pages/home/components/link.css.proxy.js', 'dist/app/pages/home/components/link.js', 'dist/app/pages/home/components/page-content-toolbar.css', 'dist/app/pages/home/components/page-content-toolbar.css.proxy.js', 'dist/app/pages/home/components/page-content-toolbar.js', 'dist/app/pages/home/components/page-content.css', 'dist/app/pages/home/components/page-content.css.proxy.js', 'dist/app/pages/home/components/page-content.js', 'dist/app/pages/home/components/page-editor.css', 'dist/app/pages/home/components/page-editor.css.proxy.js', 'dist/app/pages/home/components/page-editor.js', 'dist/app/pages/home/components/sidebar.css', 'dist/app/pages/home/components/sidebar.css.proxy.js', 'dist/app/pages/home/components/sidebar.js', 'dist/app/pages/home/index.css', 'dist/app/pages/home/index.css.proxy.js', 'dist/app/pages/home/index.js', 'dist/app/pages/search/components/search-input.css', 'dist/app/pages/search/components/search-input.css.proxy.js', 'dist/app/pages/search/components/search-input.js', 'dist/app/pages/search/components/search-result.css', 'dist/app/pages/search/components/search-result.css.proxy.js', 'dist/app/pages/search/components/search-result.js', 'dist/app/pages/search/index.css', 'dist/app/pages/search/index.css.proxy.js', 'dist/app/pages/search/index.js', 'dist/app/services/configuration.service.js', 'dist/app/services/github.service.js', 'dist/app/services/navigator.service.js', 'dist/app/services/storage.service.js', 'dist/app/stores/page.store.js', 'dist/images/account.svg', 'dist/images/add.svg', 'dist/images/add.svg.proxy.js', 'dist/images/delete.svg', 'dist/images/delete.svg.proxy.js', 'dist/images/edit.svg', 'dist/images/edit.svg.proxy.js', 'dist/images/github.svg', 'dist/images/github.svg.proxy.js', 'dist/images/hamburger-menu.svg', 'dist/images/hamburger-menu.svg.proxy.js', 'dist/images/search.svg', 'dist/images/search.svg.proxy.js', 'dist/images/sync.svg', 'dist/images/wiki.svg', 'dist/images/wiki.svg.proxy.js', 'dist/index.js', 'dist/styles/animations.css', 'dist/styles/styles.css', 'dist/styles/styles.css.proxy.js', 'images/favicon.ico', 'images/wiki-192px.png', 'images/wiki-512px.png', 'index.html', 'manifest.webmanifest'];

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
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return; // Fixes a bug in Chrome

  if (event.request.method !== 'GET') {
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
    client.postMessage({ type: eventType, version: APP_VERSION });
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
    return networkFirst(GITHUB_CACHE_NAME, request, requestUrl.pathname);
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
