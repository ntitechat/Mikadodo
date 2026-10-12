const CACHE_NAME='mikadodo-static-v6';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll([
    './index.html',
    './manifest.webmanifest',
    './icon-512.png',
    './mikadodo-photos-recovery.js',
    './image_001.jpeg',
    './image_002.jpeg',
    './image_003.jpeg',
    './image_004.jpeg',
    './image_005.jpeg',
    './image_006.jpeg',
    './image_007.jpeg',
    './image_008.jpeg',
    './image_009.jpeg',
    './image_010.jpeg',
    './image_011.jpeg',
    './image_012.jpeg',
    './image_013.jpeg',
    './image_014.jpeg',
    './image_015.jpeg',
    './image_016.jpeg',
    './image_017.jpeg',
    './image_018.jpeg',
    './image_019.jpeg',
    './image_020.jpeg',
    './image_021.jpeg',
    './image_022.jpeg',
    './image_023.jpeg',
    './image_024.jpeg',
    './image_025.jpeg',
    './image_026.jpeg',
    './image_027.jpeg',
    './image_028.jpeg',
    './image_029.jpeg',
    './image_030.jpeg',
    './image_031.jpeg',
    './image_032.jpeg',
    './image_033.jpeg',
    './image_034.jpeg',
    './image_035.jpeg',
    './image_036.jpeg',
    './image_037.jpeg',
    './image_038.jpeg',
    './image_039.jpeg',
    './image_040.jpeg',
    './image_041.jpeg',
    './image_042.jpeg',
    './image_043.jpeg',
    './image_044.jpeg',
    './image_045.jpeg',
    './image_046.jpeg',
    './image_047.jpeg',
    './image_048.jpeg',
    './image_049.jpeg',
    './image_050.jpeg',
    './image_051.jpeg',
    './image_052.jpeg',
    './image_053.jpeg',
    './image_054.jpeg',
    './image_055.jpeg',
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
