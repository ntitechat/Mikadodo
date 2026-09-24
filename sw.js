const CACHE_NAME='mikadodo-static-v3';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll([
    './index.html',
    './manifest.webmanifest',
    './icon-512.png',
    './mikadodo-photos-recovery.js',
    './recipe-emoji-air-fryer.png',
    './recipe-emoji-airfryer.png',
    './recipe-emoji-blender.png',
    './recipe-emoji-food-processor.png',
    './recipe-emoji-hand-mixer.png',
    './recipe-emoji-immersion-blender.png',
    './recipe-emoji-kettle.png',
    './recipe-emoji-microwave.png',
    './recipe-emoji-oven.png',
    './recipe-emoji-pan.png',
    './recipe-emoji-pot.png',
    './recipe-emoji-rice-cooker.png',
    './recipe-emoji-sous-vide.png',
    './recipe-emoji-thermomix.png',
    './recipe-emoji-waffle-maker.png'
  ]).catch(()=>{})));
});

self.addEventListener('activate', event => {
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;

  const isImage=/\.(?:jpe?g|png|webp|gif|avif|svg)$/i.test(url.pathname);
  const isStatic=/\.(?:js|css|woff2?)$/i.test(url.pathname);

  if(isImage || isStatic){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE_NAME);
      const cached=await cache.match(req);
      if(cached){
        // Actualise discrètement le cache sans retarder l'affichage.
        fetch(req).then(r=>{if(r.ok) cache.put(req,r.clone())}).catch(()=>{});
        return cached;
      }
      try{
        const r=await fetch(req);
        if(r.ok) cache.put(req,r.clone());
        return r;
      }catch(e){
        return cached || Response.error();
      }
    })());
  }
});

self.addEventListener('notificationclick',e=>{
  e.notification.close();
  const action=e.action;
  if(action==='stop') return;
  e.waitUntil((async()=>{
    const clientsList=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    if(clientsList.length){clientsList[0].focus(); if(action==='restart') clientsList[0].postMessage({type:'restart-cooking-timer'}); return;}
    const c=await self.clients.openWindow('./');
    if(c && action==='restart') setTimeout(()=>c.postMessage({type:'restart-cooking-timer'}),800);
  })());
});
