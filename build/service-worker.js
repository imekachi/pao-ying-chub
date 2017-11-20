"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["./index.html","845be44efb711435487e4546bd34d02c"],["./static/js/main.362a16df.js","34ee7cef90d3c5e87289f0e8a6723d47"],["./static/media/avatar-ai.a5a68504.png","a5a68504aa99ffea8da42dee1133a649"],["./static/media/avatar-player.c2ebb879.png","c2ebb8794ecfe11a5185360eaf15ee71"],["./static/media/btn-play.df598899.png","df598899192df9216dbf33253835aff9"],["./static/media/btn-replay.38d9dc43.png","38d9dc4325465f84e78c321271a88a20"],["./static/media/btn-share.8b592b8d.png","8b592b8d4145ebc4ce1437b5c9eb52a5"],["./static/media/hand-paper.dc67dbfc.png","dc67dbfce180c32bd1e529b167031c37"],["./static/media/hand-rock.49e12758.png","49e1275894c7c4241d80f8ddfe6a38ee"],["./static/media/hand-scissor.0139e2fd.png","0139e2fd5c1c532e3596e0f7515afd46"],["./static/media/header.d3a3555e.png","d3a3555eece3ef9dccfaf2c219a0e87e"],["./static/media/result-draw.dfe84622.png","dfe84622fff3bef664af0baf8f8b5dc4"],["./static/media/result-lose.9e8afe36.png","9e8afe3638d9d72f37f30673315e552c"],["./static/media/result-win.c0967010.png","c096701008ac1ec92f274163a48b5d8f"],["./static/media/scene-1.a50fca54.jpg","a50fca5468b049bb6415874b110d7936"],["./static/media/scene-2.e97f98b3.jpg","e97f98b3783c1bc9c76109f058f053bc"],["./static/media/scene-3.3813acfe.jpg","3813acfe8f9f81911da8c1f2aed360b1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("./index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});