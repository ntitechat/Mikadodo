self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
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
