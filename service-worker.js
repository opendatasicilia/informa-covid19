!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=["client/9333f676a69e721418ed/d.1.js","client/9333f676a69e721418ed/d_$slug.2.js","client/9333f676a69e721418ed/d~index~privacy.0.js","client/9333f676a69e721418ed/index.3.js","client/9333f676a69e721418ed/main.js","client/9333f676a69e721418ed/privacy.5.js","client/images/dashboard-desktop-7dc64e0fd94d3929dc9cf689878530b1.svg","client/images/dashboard-mobile-acd85b9625d4d790ddb1b81c2fd01b6c.svg","client/images/informa-covid-social-card-fb-8064afdbee7d2416c92fda512f976cd9.png","client/images/informa-covid-social-card-tw-549a606d79d2a516e7313e01483f6e64.png","client/images/informa-covid-youtube-cover-mobile-69a6fec1400210480c378a6a556a8ce8.png","client/images/logo-ods-white-29e5feb7a6b98eb7e283015454f37085.svg","client/images/mockup-dashboard-mobile-desktop@2x-8e5178f817377e71835e3a5c8b9817cc.png","client/images/mockup_bot@2x-56a56d795c0acd5390f373da82a887c0.png"].concat(["service-worker-index.html","favicon.ico","logo-192.png","logo-512.png","manifest.json"]),c=new Set(a);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1633969576076").then(e=>e.addAll(a)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1633969576076"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),a=t.hostname===self.location.hostname&&t.port!==self.location.port,o=t.host===self.location.host&&c.has(t.pathname),i="only-if-cached"===e.request.cache&&!o;!n||a||i||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1633969576076");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const a=await t.match(e);if(a)return a;throw n}}(e.request))())})}]);