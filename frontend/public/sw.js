const CACHE_NAME = "oozecafe-pwa-v2";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./pwa-192.png",
  "./pwa-512.png",
  "./apple-touch-icon.png",
  "./favicon.png",
  "./favicon.ico"
];

// Install: cache essential static assets safely
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        STATIC_ASSETS.map((url) =>
          fetch(url, { cache: "reload" })
            .then((res) => {
              if (res.ok) return cache.put(url, res);
            })
            .catch((err) => console.log("SW: Caching skipped for", url, err))
        )
      );
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: Network first with cache fallback
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  // Ignore browser extensions or non-http requests
  if (!event.request.url.startsWith("http")) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const cloned = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, cloned);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        // Fallback for navigation requests
        if (event.request.mode === "navigate") {
          return caches.match("./index.html") || caches.match("./");
        }
        return null;
      })
  );
});
