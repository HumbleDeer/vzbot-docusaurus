(()=>{"use strict";var e,a,t,f,r,c={},o={};function b(e){var a=o[e];if(void 0!==a)return a.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=c,b.c=o,e=[],b.O=(a,t,f,r)=>{if(!t){var c=1/0;for(u=0;u<e.length;u++){t=e[u][0],f=e[u][1],r=e[u][2];for(var o=!0,d=0;d<t.length;d++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](t[d])))?t.splice(d--,1):(o=!1,r<c&&(c=r));if(o){e.splice(u--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,f,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,t({}),t([]),t(t)];for(var o=2&f&&e;"object"==typeof o&&!~a.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",435:"2265a45b",718:"c262744f",867:"ffe87000",948:"8717b14a",1606:"047e4990",1764:"c8191553",1914:"d9f32620",2267:"59362658",2362:"e273c56f",2535:"814f3328",2859:"18c41134",2941:"37e82b04",3085:"1f391b9e",3089:"a6aa9e1f",3514:"73664a40",3608:"9e4087bc",3792:"dff1c289",3916:"0f15dcae",4013:"01a85c17",4193:"f55d3e7a",4195:"c4f5d8e4",4607:"533a09ca",5032:"7ea505c6",5351:"856968a4",5589:"5c868d36",5609:"f5aab407",5924:"42146417",5971:"cb74028f",6062:"4b064476",6103:"ccc49370",6504:"822bd8ab",6561:"81f47ff2",6755:"e44a2883",6782:"86e67587",7414:"393be207",7734:"923cabae",7918:"17896441",8604:"0a3dbc1f",8610:"6875c492",8636:"f4f34a3a",8818:"1e4232ab",8922:"562b76b1",9003:"925b3f96",9374:"ae7d7a80",9514:"1be78505",9541:"b2bab0b0",9642:"7661071f",9671:"0e384e19",9817:"14eb3368"}[e]||e)+"."+{53:"2b6a4a50",435:"8daa15dd",718:"f1ab472c",867:"421bd321",948:"80d7b182",1606:"43c79aff",1764:"865a60a8",1914:"3526487f",2267:"e4232d84",2362:"e0cdab33",2529:"e713aec6",2535:"34852586",2859:"e69b6476",2941:"808137cf",3085:"f9d77aa3",3089:"1ed8c9f0",3514:"3c760442",3608:"91581eeb",3792:"cf9c69dd",3916:"401ba692",3946:"75c2e6f1",4013:"74c9a923",4193:"e99866ec",4195:"a2213639",4607:"8fdf2072",4972:"af97c6d0",5032:"7e36994e",5351:"e38859e2",5589:"6d4f292c",5609:"32c1c2ce",5924:"ac1d0eab",5971:"c6795e57",6062:"df9cb415",6103:"c14d0486",6504:"dc3f8959",6561:"167a1c3f",6755:"80e0b1bb",6782:"0a5d02f4",7414:"462ea90f",7734:"f77f95db",7918:"05f709ea",8604:"7041d1be",8610:"11c4d0df",8636:"7997e98a",8818:"aee994fb",8922:"53cc1ebb",9003:"c853672d",9374:"9433f4e6",9514:"b22f0f87",9541:"783c692f",9642:"96cf5e57",9671:"fe0dbd82",9817:"3a0e8de8"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="vzbot-docusaurus:",b.l=(e,a,t,c)=>{if(f[e])f[e].push(a);else{var o,d;if(void 0!==t)for(var n=document.getElementsByTagName("script"),u=0;u<n.length;u++){var i=n[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==r+t){o=i;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,b.nc&&o.setAttribute("nonce",b.nc),o.setAttribute("data-webpack",r+t),o.src=e),f[e]=[a];var l=(a,t)=>{o.onerror=o.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),d&&document.head.appendChild(o)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/vzbot-docusaurus/",b.gca=function(e){return e={17896441:"7918",42146417:"5924",59362658:"2267","935f2afb":"53","2265a45b":"435",c262744f:"718",ffe87000:"867","8717b14a":"948","047e4990":"1606",c8191553:"1764",d9f32620:"1914",e273c56f:"2362","814f3328":"2535","18c41134":"2859","37e82b04":"2941","1f391b9e":"3085",a6aa9e1f:"3089","73664a40":"3514","9e4087bc":"3608",dff1c289:"3792","0f15dcae":"3916","01a85c17":"4013",f55d3e7a:"4193",c4f5d8e4:"4195","533a09ca":"4607","7ea505c6":"5032","856968a4":"5351","5c868d36":"5589",f5aab407:"5609",cb74028f:"5971","4b064476":"6062",ccc49370:"6103","822bd8ab":"6504","81f47ff2":"6561",e44a2883:"6755","86e67587":"6782","393be207":"7414","923cabae":"7734","0a3dbc1f":"8604","6875c492":"8610",f4f34a3a:"8636","1e4232ab":"8818","562b76b1":"8922","925b3f96":"9003",ae7d7a80:"9374","1be78505":"9514",b2bab0b0:"9541","7661071f":"9642","0e384e19":"9671","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var c=b.p+b.u(a),o=new Error;b.l(c,(t=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;o.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",o.name="ChunkLoadError",o.type=r,o.request=c,f[1](o)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,c=t[0],o=t[1],d=t[2],n=0;if(c.some((a=>0!==e[a]))){for(f in o)b.o(o,f)&&(b.m[f]=o[f]);if(d)var u=d(b)}for(a&&a(t);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(u)},t=self.webpackChunkvzbot_docusaurus=self.webpackChunkvzbot_docusaurus||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();