const APP_VERSION="42",APP_CACHE_NAME=`mdwiki-app-cache-v42`,GITHUB_CACHE_NAME="mdwiki-github-cache",GITHUB_API_HOST="api.github.com",appFiles=["github-markdown.3e2452ff.css","github-markdown.5386ff48.css","github-markdown.5386ff48.js","index.html","manifest.webmanifest","page-editor.371fac1d.css","page-editor.371fac1d.js","page-editor.a0e89921.css","page-editor.f36f0027.js","src.81b37e2a.css","src.e31bb0bc.css","src.e31bb0bc.js","src.ea561921.js","styles.45de0957.css","styles.45de0957.js","styles.827ccd78.css","wiki-192px.5eee20f1.png","wiki-192px.b778628f.png","wiki-512px.a809d0e9.png","wiki-512px.b05caf2d.png"],pathToIgnore=["/user"];self.addEventListener("install",a=>{self.skipWaiting(),a.waitUntil(installServiceWorker())}),self.addEventListener("activate",a=>{a.waitUntil(cleanOldCaches()),notifyClient("activate")}),self.addEventListener("fetch",a=>{"GET"!==a.request.method||a.respondWith(handleFetch(a.request))});async function installServiceWorker(){const a=await checkIfIsUpdate();await addToCache(APP_CACHE_NAME,appFiles),a&&(await notifyClient("update"))}async function checkIfIsUpdate(){const a=await caches.keys();return a.some(a=>a===GITHUB_CACHE_NAME)}async function notifyClient(a){const b=await clients.matchAll({includeUncontrolled:!0,type:"window"});for(const c of b)c.postMessage({type:a,version:42})}async function handleFetch(a){const b=new URL(a.url);return 0<=pathToIgnore.indexOf(b.pathname)?fetch(a):b.host===GITHUB_API_HOST?navigator.onLine?networkFirst(GITHUB_CACHE_NAME,b,b.pathname):cacheFirst(GITHUB_CACHE_NAME,a,b.pathname):cacheFirst(APP_CACHE_NAME,a,b.pathname)}async function cacheFirst(a,b,c=b){const d=await caches.open(a),e=await d.match(c);return e?e:fetch(b).then(a=>(200===a.status&&d.put(c,a.clone()),d.put(c,a.clone()),a))}async function networkFirst(a,b,c){const d=await caches.open(a);return fetch(b).then(a=>(200===a.status&&d.put(c,a.clone()),a)).catch(()=>d.match(c))}async function addToCache(a,b){const c=await caches.open(a);return c.addAll(b)}async function cleanOldCaches(){const a=[APP_CACHE_NAME],b=await caches.keys(),c=b.filter(b=>!a.includes(b));return 0<c.length?Promise.all(c.map(a=>caches.delete(a))):void 0}