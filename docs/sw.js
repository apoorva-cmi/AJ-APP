var __wpo = {"assets":{"main":["/todo-pwa/bundle.js","/todo-pwa/","/todo-pwa/manifest.json"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"d90d02a994daa8248d9591108db5c4182a93b4fc":"/todo-pwa/bundle.js","73926dd84e7aa7b47f5fcfbfd9b45d8b987c423a":"/todo-pwa/","aefae3e4f961521eb5990d338589661c4211429b":"/todo-pwa/manifest.json"},"strategy":"changed","responseStrategy":"cache-first","version":"6/28/2017, 8:46:23 PM","name":"webpack-offline","pluginVersion":"4.7.0","relativePaths":false};

!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/todo-pwa/",e(e.s=1)}([function(n,e){},function(n,e,t){"use strict";function r(n,e){return caches.match(n,{cacheName:e}).then(function(t){return c()?t:a(t).then(function(t){return caches.open(e).then(function(e){return e.put(n,t)}).then(function(){return t})})}).catch(function(){})}function o(n,e){return n+(-1!==n.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(e)}function i(n){return"navigate"===n.mode||n.headers.get("Upgrade-Insecure-Requests")||-1!==(n.headers.get("Accept")||"").indexOf("text/html")}function c(n){return!n||!n.redirected||!n.ok||"opaqueredirect"===n.type}function a(n){return c(n)?Promise.resolve(n):("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status})})}function u(n){return Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},{})}function s(n,e){console.groupCollapsed("[SW]:",n),e.forEach(function(n){console.log("Asset:",n)}),console.groupEnd()}if(void 0===f)var f=!1;!function(n,e){function t(){if(!S.additional.length)return Promise.resolve();f&&console.log("[SW]:","Caching additional");var n=void 0;return n="changed"===b?l("additional"):c("additional"),n.catch(function(n){console.error("[SW]:","Cache section `additional` failed to load")})}function c(e){var t=S[e];return caches.open(E).then(function(e){return O(e,t,{bust:n.version,request:n.prefetchRequest})}).then(function(){s("Cached assets: "+e,t)}).catch(function(n){throw console.error(n),n})}function l(e){return d().then(function(t){if(!t)return c(e);var r=t[0],o=t[1],i=t[2],a=i.hashmap,u=i.version;if(!i.hashmap||u===n.version)return c(e);var f=Object.keys(a).map(function(n){return a[n]}),l=o.map(function(n){var e=new URL(n.url);return e.search="",e.toString()}),h=S[e],d=[],p=h.filter(function(n){return-1===l.indexOf(n)||-1===f.indexOf(n)});Object.keys(W).forEach(function(n){var e=W[n];if(-1!==h.indexOf(e)&&-1===p.indexOf(e)&&-1===d.indexOf(e)){var t=a[n];t&&-1!==l.indexOf(t)?d.push([t,e]):p.push(e)}}),s("Changed assets: "+e,p),s("Moved assets: "+e,d);var v=Promise.all(d.map(function(n){return r.match(n[0]).then(function(e){return[n[1],e]})}));return caches.open(E).then(function(e){var t=v.then(function(n){return Promise.all(n.map(function(n){return e.put(n[0],n[1])}))});return Promise.all([t,O(e,p,{bust:n.version,request:n.prefetchRequest})])})})}function h(){return caches.keys().then(function(n){var e=n.map(function(n){if(0===n.indexOf(U)&&0!==n.indexOf(E))return console.log("[SW]:","Delete cache:",n),caches.delete(n)});return Promise.all(e)})}function d(){return caches.keys().then(function(n){for(var e=n.length,t=void 0;e--&&(t=n[e],0!==t.indexOf(U)););if(t){var r=void 0;return caches.open(t).then(function(n){return r=n,n.match(new URL(j,location).toString())}).then(function(n){if(n)return Promise.all([r,r.keys(),n.json()])})}})}function p(){return caches.open(E).then(function(e){var t=new Response(JSON.stringify({version:n.version,hashmap:W}));return e.put(new URL(j,location).toString(),t)})}function v(n,e,t){return r(t,E).then(function(r){return r?(f&&console.log("[SW]:","URL ["+t+"]("+e+") from cache"),r):fetch(n.request).then(function(n){return n.ok?(f&&console.log("[SW]:","URL ["+e+"] from network"),t===e&&function(){var t=n.clone();caches.open(E).then(function(n){return n.put(e,t)}).then(function(){console.log("[SW]:","Cache asset: "+e)})}(),n):(f&&console.log("[SW]:","URL ["+e+"] wrong response: ["+n.status+"] "+n.type),n)})})}function g(n,e,t){return fetch(n.request).then(function(n){if(n.ok)return f&&console.log("[SW]:","URL ["+e+"] from network"),n;throw new Error("Response is not ok")}).catch(function(){return f&&console.log("[SW]:","URL ["+e+"] from cache if possible"),r(t,E)})}function m(n){return n.catch(function(){}).then(function(n){var e=n&&n.ok,t=n&&"opaqueredirect"===n.type;return e||t&&!M?n:(f&&console.log("[SW]:","Loading navigation fallback ["+C+"] from cache"),r(C,E))})}function O(n,e,t){var r=!1!==t.allowLoaders,i=t&&t.bust,c=t.request||{credentials:"omit",mode:"cors"};return Promise.all(e.map(function(n){return i&&(n=o(n,i)),fetch(n,c).then(a)})).then(function(o){if(o.some(function(n){return!n.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],c=o.map(function(t,o){return r&&i.push(w(e[o],t)),n.put(e[o],t)});return i.length?function(){var r=u(t);r.allowLoaders=!1;var o=c;c=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return e.length&&(o=o.concat(O(n,i,r))),Promise.all(o)})}():c=Promise.all(c),c})}function w(n,e){var t=Object.keys(L).map(function(t){if(-1!==L[t].indexOf(n)&&k[t])return k[t](e.clone())}).filter(function(n){return!!n});return Promise.all(t).then(function(n){return[].concat.apply([],n)})}function x(n){var e=n.url,t=new URL(e),r=void 0;r="navigate"===n.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<y.length;o++){var i=y[o];if(i&&(!i.requestTypes||-1!==i.requestTypes.indexOf(r))){var c=void 0;if((c="function"==typeof i.match?i.match(t,n):e.replace(i.match,i.to))&&c!==e)return c}}}var k=e.loaders,y=e.cacheMaps,b=n.strategy,R=n.responseStrategy,S=n.assets,L=n.loaders||{},W=n.hashesMap,q=n.externals,U=n.name,P=n.version,E=U+":"+P,j="__offline_webpack__data";!function(){Object.keys(S).forEach(function(n){S[n]=S[n].map(function(n){var e=new URL(n,location);return-1===q.indexOf(n)?e.search="":e.hash="",e.toString()})}),Object.keys(L).forEach(function(n){L[n]=L[n].map(function(n){var e=new URL(n,location);return-1===q.indexOf(n)?e.search="":e.hash="",e.toString()})}),W=Object.keys(W).reduce(function(n,e){var t=new URL(W[e],location);return t.search="",n[e]=t.toString(),n},{}),q=q.map(function(n){var e=new URL(n,location);return e.hash="",e.toString()})}();var _=[].concat(S.main,S.additional,S.optional),C=n.navigateFallbackURL,M=n.navigateFallbackForRedirects;self.addEventListener("install",function(n){console.log("[SW]:","Install event");var e=void 0;e="changed"===b?l("main"):c("main"),n.waitUntil(e)}),self.addEventListener("activate",function(n){console.log("[SW]:","Activate event");var e=t();e=e.then(p),e=e.then(h),e=e.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),n.waitUntil(e)}),self.addEventListener("fetch",function(n){var e=n.request.url,t=new URL(e),r=void 0;-1!==q.indexOf(e)?r=e:(t.search="",r=t.toString());var o="GET"===n.request.method,c=-1!==_.indexOf(r),a=r;if(!c){var u=x(n.request);u&&(a=u,c=!0)}if(!c&&o&&C&&i(n.request))return void n.respondWith(m(fetch(n.request)));if(!c||!o)return void(t.origin!==location.origin&&-1!==navigator.userAgent.indexOf("Firefox/44.")&&n.respondWith(fetch(n.request)));var s=void 0;s="network-first"===R?g(n,r,a):v(n,r,a),C&&i(n.request)&&(s=m(s)),n.respondWith(s)}),self.addEventListener("message",function(n){var e=n.data;if(e)switch(e.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}(__wpo,{loaders:{},cacheMaps:[]}),n.exports=t(0)}]);