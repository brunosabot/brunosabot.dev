if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return n[s]||(e=new Promise((async e=>{if("document"in self){const n=document.createElement("script");n.src=s,document.head.appendChild(n),n.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!n[s])throw new Error(`Module ${s} didn’t register its module`);return n[s]}))},e=(e,n)=>{Promise.all(e.map(s)).then((s=>n(1===s.length?s[0]:s)))},n={require:Promise.resolve(e)};self.define=(e,u,i)=>{n[e]||(n[e]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+e.slice(1)};return Promise.all(u.map((e=>{switch(e){case"exports":return n;case"module":return c;default:return s(e)}}))).then((s=>{const e=i(...s);return n.default||(n.default=e),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/build-manifest.json",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/react-loadable-manifest.json",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/server/middleware-manifest.json",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/PG6I4P_M-3uVn0uuNVrPC/_buildManifest.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/PG6I4P_M-3uVn0uuNVrPC/_middlewareManifest.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/PG6I4P_M-3uVn0uuNVrPC/_ssgManifest.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/247-ab665631c761f017.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/360-f4da50fb6e3637ae.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/398-bd534adf500e43e4.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/464-6318b4f7e6d7210b.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/764-c2efe3ac6bb23895.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/788-8b073354d4152416.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/992-1063949016a8279e.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/main-a8edae0d785a1705.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/404-56eaf61688d638c6.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/_app-a8fe3ea012fb2190.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/index-93ec476694f6a26f.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/opensource-35974c7c7917cbeb.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/podcasts-9ce4c8da24b2fe2a.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/posts-f7a8d8ed4ec34c24.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/posts/%5Byear%5D/%5Bslug%5D-ef828520fd768c19.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/projects-e58d8883ae2c59b2.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/resume/en-0642273fb59c5297.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/resume/fr-6db6a47d69657a04.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/rss.xml-096af1f56f98214b.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/talks-42d885f96a4f54c4.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/tools-c2ad883d78b3f8a9.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/tools/base-64-2a5e57a6e13170b4.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/tools/bezier-curves-d16ff18f1a4f579f.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/tools/photoshop-shadow-c0696b651d1808c3.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/tools/pretty-20ed2acd59c5dcb5.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/tools/rgb-convertor-23ed472c6790cb58.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/tools/sha-2f7fcbbf79f4d7f3.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/tools/timestamp-80e90d863a4fae63.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/tools/url-encode-decode-48f1a020a6425cfd.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/tools/uuid-a3c904c0559dd169.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/pages/videos-659ebb7f6758e674.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/chunks/webpack-49b6f2937c9ce9f4.js",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/049a98366222338e.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/0f67229b52e8f151.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/1f70152c26ee416c.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/2759c018e42761d3.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/3196a169d1064e71.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/31ba407faa6a0888.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/3eea9b7f55c994f3.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/480bbf5f88f5c24b.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/4c8e81508602a22b.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/634db0aa5ed860ed.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/6ff4e49be7a1d3d8.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/8ef7b31aabbb52bf.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/9f2c5bca53a08e0a.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/a1e0178fa14e5c04.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/a2f61e8dfe07f7bc.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/c16a939fa2f2cedf.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/c5201c50959a12d3.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/cdfd1676e1bfa480.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/d90c701ed61628f8.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/_next/static/css/e9f9f5ab84b4deee.css",revision:"PG6I4P_M-3uVn0uuNVrPC"},{url:"/favicon-maskable.png",revision:"5c022a787a4d751dd673d5b8e4c823fc"},{url:"/favicon.ico",revision:"683c72699d39153bd8daa38e53238a50"},{url:"/humans.txt",revision:"28eeda3ede9bcb77adcca5e99cdfe07a"},{url:"/icons/maskable_icon.png",revision:"9ecaafc6dc6840239dd7ce0efc5bb888"},{url:"/icons/maskable_icon_x128.png",revision:"86d94262c90f3751024bd90973f82e0f"},{url:"/icons/maskable_icon_x192.png",revision:"c95c2f31f8cfa941ed0069c966e8f540"},{url:"/icons/maskable_icon_x384.png",revision:"08aaf06eaf859123996624ed4f743896"},{url:"/icons/maskable_icon_x48.png",revision:"e6c1dc0cf89be0b37281788944034e36"},{url:"/icons/maskable_icon_x512.png",revision:"425f0fb393cae85b06131356b43b1687"},{url:"/icons/maskable_icon_x72.png",revision:"7f6808605e5deb7a15a7e1da008d13bc"},{url:"/icons/maskable_icon_x96.png",revision:"96642eb996a08dafdbd54d49bd847995"},{url:"/images/answwr.png",revision:"79596cc34932221522d1905589099bc9"},{url:"/images/brunosabot.jpg",revision:"7764f9c1913cc49b379ce11498966252"},{url:"/images/favicon-maskable.png",revision:"9ecaafc6dc6840239dd7ce0efc5bb888"},{url:"/images/favicon.png",revision:"4fec0095c6304094fe6fee5b729b47c6"},{url:"/images/me.jpg",revision:"37b4808dfd4a8094f60af31b9c119eb2"},{url:"/manifest.webmanifest",revision:"044d3ef38296e9d1213cd658082c6dcc"},{url:"/robots.txt",revision:"924dd4d4fbecf7fe2808a5ea26e211c4"},{url:"/sitemap.xml",revision:"a2aa18345c0b14a94aa21c12957f17ef"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:n,state:u})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
