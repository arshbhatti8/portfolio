"use strict";var precacheConfig=[["/2e7124f1e9d1bbdd444a2627cba01962.svg","2e7124f1e9d1bbdd444a2627cba01962"],["/a62ade4dc867325497238bbbe6770712.svg","a62ade4dc867325497238bbbe6770712"],["/e463db5ab162e92fd3ffcbd8ccc8d9f9.svg","e463db5ab162e92fd3ffcbd8ccc8d9f9"],["/f2b5ce0181c898dc5a2fe93fb0c7564a.svg","f2b5ce0181c898dc5a2fe93fb0c7564a"],["/index.html","0167601092781b10a7717b464c3bc76e"],["/static/css/main.6eb02d10.css","079b1ac381caa9a5f5b7fee97593e28b"],["/static/js/main.7c2058b0.js","2cc5d07076be25082aa8e053d5411c0c"],["/static/media/Arshpreet_Bhatti-Web Development.7ae29a81.pdf","7ae29a8182fcb28615ed46d2fd3e7759"],["/static/media/Express.e37d0bdb.png","e37d0bdbb66f35f37062c76af66729f8"],["/static/media/MongoDB.38c33d78.png","38c33d786ceac6cc2924933d9a96e527"],["/static/media/MySql.f35a6f89.png","f35a6f892b98854b5a82714777afa4b3"],["/static/media/Redux-Icon.f69166e0.png","f69166e06b8340947847bac32ccc301a"],["/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/static/media/caffiene.30be9f44.jpg","30be9f44bf868b21165dc2862c87a72e"],["/static/media/chart1.15207b19.png","15207b19b5ceeef395bb2abdbe27afa3"],["/static/media/chart2.da01629d.png","da01629d04bd78792403700988df9691"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/galaxy1.a511e22f.jpg","a511e22fa5b1a62efd26409d1e1e4474"],["/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/static/media/macAndIphone.ce107e55.png","ce107e5510bfdddfafeef42f32ee7fe1"],["/static/media/macBook-Charts.42cd4f97.png","42cd4f973a0976f8f6c5092736f1a7a2"],["/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/static/media/project-logo5.e99738fe.png","e99738fe9ed48cbd6038bba3131903d4"],["/static/media/react-logo.44e6af6d.ico","44e6af6d51f7d8e49efc008e24ddfb95"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});