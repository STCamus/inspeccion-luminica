/* Service worker: deja la aplicación y las capas disponibles sin conexión. */
var CACHE='inspeccion-luminica-0.1.2';
var CORE=['./','./index.html','./jszip.min.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png',
  './layers/apb.lay.json','./layers/recoge.lay.json','./layers/astro50.lay.json','./layers/sitios.lay.json'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(CORE);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){
  var r=e.request;if(r.method!=='GET')return;
  var u=new URL(r.url);
  if(u.origin===location.origin){e.respondWith(caches.match(r,{ignoreSearch:true}).then(function(hit){return hit||fetch(r).then(function(res){if(res.ok){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(r,cp);});}return res;});}));return;}
  if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){e.respondWith(caches.match(r).then(function(hit){return hit||fetch(r).then(function(res){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(r,cp);});return res;}).catch(function(){return new Response('',{status:504});});}));}
});
