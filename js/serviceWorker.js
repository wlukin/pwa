const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/coffee.jpg",

]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            return cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})