!function(e){var t={};function n(c){if(t[c])return t[c].exports;var r=t[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(c,r,function(t){return e[t]}.bind(null,r));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=["client/6d2fe0be99051c902c1f/index.0.js","client/6d2fe0be99051c902c1f/main.js","client/images/29e5feb7a6b98eb7e283015454f37085.svg","client/images/549a606d79d2a516e7313e01483f6e64.png","client/images/7dc64e0fd94d3929dc9cf689878530b1.svg","client/images/acd85b9625d4d790ddb1b81c2fd01b6c.svg"].concat(["service-worker-index.html","favicon.ico","logo-192.png","logo-512.png","manifest.json"]),r=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1620203511147").then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1620203511147"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),c=t.hostname===self.location.hostname&&t.port!==self.location.port,o=t.host===self.location.host&&r.has(t.pathname),a="only-if-cached"===e.request.cache&&!o;!n||c||a||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1620203511147");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const c=await t.match(e);if(c)return c;throw n}}(e.request))())})}]);