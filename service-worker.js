!function(e){var t={};function a(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);const n=["client/a50612c166a4d6a87792/d.1.js","client/a50612c166a4d6a87792/d_$slug.2.js","client/a50612c166a4d6a87792/d~index~privacy.0.js","client/a50612c166a4d6a87792/index.3.js","client/a50612c166a4d6a87792/main.js","client/a50612c166a4d6a87792/privacy.5.js","client/images/dashboard-desktop-7dc64e0fd94d3929dc9cf689878530b1.svg","client/images/dashboard-mobile-acd85b9625d4d790ddb1b81c2fd01b6c.svg","client/images/informa-covid-social-card-fb-8064afdbee7d2416c92fda512f976cd9.png","client/images/informa-covid-social-card-tw-549a606d79d2a516e7313e01483f6e64.png","client/images/informa-covid-youtube-cover-mobile-69a6fec1400210480c378a6a556a8ce8.png","client/images/logo-ods-white-29e5feb7a6b98eb7e283015454f37085.svg","client/images/mockup-dashboard-mobile-desktop@2x-8e5178f817377e71835e3a5c8b9817cc.png","client/images/mockup_bot@2x-56a56d795c0acd5390f373da82a887c0.png"].concat(["service-worker-index.html","favicon.ico","logo-192.png","logo-512.png","manifest.json"]),c=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1641376372380").then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1641376372380"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),a=t.protocol.startsWith("http"),n=t.hostname===self.location.hostname&&t.port!==self.location.port,o=t.host===self.location.host&&c.has(t.pathname),i="only-if-cached"===e.request.cache&&!o;!a||n||i||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1641376372380");try{const a=await fetch(e);return t.put(e,a.clone()),a}catch(a){const n=await t.match(e);if(n)return n;throw a}}(e.request))())})}]);