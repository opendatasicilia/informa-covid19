!function(e){var t={};function c(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=t,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t,c){"use strict";c.r(t);const n=["client/dae19df0f0c36cbced82/d_$slug.0.js","client/dae19df0f0c36cbced82/index.1.js","client/dae19df0f0c36cbced82/main.js","client/dae19df0f0c36cbced82/vendors~d_$slug.3.js","client/images/catenanuova-logo-bdd125ffd794c107bad767a230b92ee7.png","client/images/dashboard-desktop-7dc64e0fd94d3929dc9cf689878530b1.svg","client/images/dashboard-mobile-acd85b9625d4d790ddb1b81c2fd01b6c.svg","client/images/informa-covid-social-card-fb-8064afdbee7d2416c92fda512f976cd9.png","client/images/informa-covid-social-card-tw-549a606d79d2a516e7313e01483f6e64.png","client/images/informa-covid-youtube-cover-mobile-69a6fec1400210480c378a6a556a8ce8.png","client/images/logo-ods-white-29e5feb7a6b98eb7e283015454f37085.svg","client/images/mockup-dashboard-mobile-desktop@2x-8e5178f817377e71835e3a5c8b9817cc.png","client/images/mockup_bot@2x-56a56d795c0acd5390f373da82a887c0.png","client/images/regalbuto-logo-6ac09d96d1d83ed1e874ad11896013ff.png","client/images/serradifalco-logo-fc4eac0fc6847892d74d38bc60541209.png"].concat(["service-worker-index.html","favicon.ico","logo-192.png","logo-512.png","manifest.json"]),a=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1631608489084").then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1631608489084"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),c=t.protocol.startsWith("http"),n=t.hostname===self.location.hostname&&t.port!==self.location.port,o=t.host===self.location.host&&a.has(t.pathname),i="only-if-cached"===e.request.cache&&!o;!c||n||i||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1631608489084");try{const c=await fetch(e);return t.put(e,c.clone()),c}catch(c){const n=await t.match(e);if(n)return n;throw c}}(e.request))())})}]);