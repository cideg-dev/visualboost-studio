const CACHE = 'visualboost-v1'

const STATIC = [
  '.',
  'index.html',
  'packs.html',
  'faq.html',
  'css/style.css',
  'js/script.js',
  'manifest.json',
  'images/logo.png',
  'images/gallery-1.jpg',
  'images/gallery-2.jpg',
  'images/gallery-3.jpg',
  'images/gallery-4.jpg',
  'images/gallery-5.jpg',
  'images/gallery-6.jpg',
  'images/gallery-7.jpg',
  'images/gallery-8.jpg',
  'images/hero-visual.png',
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(STATIC))
  )
  self.skipWaiting()
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
})

self.addEventListener('fetch', e => {
  const { request } = e
  if (request.method !== 'GET') return

  e.respondWith(
    caches.match(request).then(cached =>
      cached || fetch(request).then(response => {
        const clone = response.clone()
        caches.open(CACHE).then(cache => {
          if (request.url.startsWith(self.location.origin)) {
            cache.put(request, clone)
          }
        })
        return response
      }).catch(() => caches.match('index.html'))
    )
  )
})
