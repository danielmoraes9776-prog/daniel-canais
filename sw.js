self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("daniel-canais").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "app.js",
        "movies.js"
      ]);
    })
  );
});
