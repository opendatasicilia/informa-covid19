(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5:function(t,e,o){"use strict";o.r(e),o.d(e,"preload",(function(){return d}));var n=o(0),c=o(2),a=o(1),i=o(4),r=o.n(i);function s(t){let e,o,c,a,i,r,s,d,p;return document.title=e=t[0].comune_denominazione+" - Rapporto dati COVID19",{c(){o=Object(n.r)("meta"),a=Object(n.r)("meta"),r=Object(n.r)("meta"),d=Object(n.r)("meta"),this.h()},l(t){const e=Object(n.H)('[data-svelte="svelte-1prcrdp"]',document.head);o=Object(n.j)(e,"META",{property:!0,content:!0}),a=Object(n.j)(e,"META",{property:!0,content:!0}),r=Object(n.j)(e,"META",{property:!0,content:!0}),d=Object(n.j)(e,"META",{property:!0,content:!0}),e.forEach(n.q),this.h()},h(){Object(n.f)(o,"property","og:url"),Object(n.f)(o,"content",c="https://informacovid.opendatasicilia.it/d/"+t[0].slug),Object(n.f)(a,"property","og:title"),Object(n.f)(a,"content",i=t[0].comune_denominazione+" - Rapporto dati COVID19"),Object(n.f)(r,"property","og:description"),Object(n.f)(r,"content",s="Dashboard Situazione Epidemiologica a "+t[0].comune_denominazione),Object(n.f)(d,"property","og:image"),Object(n.f)(d,"content",p=t[0].stemma)},m(t,e){Object(n.d)(document.head,o),Object(n.d)(document.head,a),Object(n.d)(document.head,r),Object(n.d)(document.head,d)},p(t,[m]){1&m&&e!==(e=t[0].comune_denominazione+" - Rapporto dati COVID19")&&(document.title=e),1&m&&c!==(c="https://informacovid.opendatasicilia.it/d/"+t[0].slug)&&Object(n.f)(o,"content",c),1&m&&i!==(i=t[0].comune_denominazione+" - Rapporto dati COVID19")&&Object(n.f)(a,"content",i),1&m&&s!==(s="Dashboard Situazione Epidemiologica a "+t[0].comune_denominazione)&&Object(n.f)(r,"content",s),1&m&&p!==(p=t[0].stemma)&&Object(n.f)(d,"content",p)},i:n.D,o:n.D,d(t){Object(n.q)(o),Object(n.q)(a),Object(n.q)(r),Object(n.q)(d)}}}async function d({params:t}){const e=await this.fetch(`d/${t.slug}.json`),o=await e.json();if(200===e.status)return{comune:o};this.error(e.status,o.message)}function p(t,e,o){let i,{comune:s}=e;const{session:d}=Object(c.c)();Object(n.m)(t,d,t=>o(2,i=t));var p=new r.a;p.setUA(i["user-agent"]);let m="mobile"==p.getResult().device.type;return Object(a.c)(async()=>{m?Object(c.a)(s.mobile):Object(c.a)(s.desktop)}),t.$$set=t=>{"comune"in t&&o(0,s=t.comune)},[s,d]}class m extends n.a{constructor(t){super(),Object(n.x)(this,t,p,s,n.J,{comune:0})}}e.default=m}}]);