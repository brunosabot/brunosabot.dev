if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,n,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+e.slice(1)};return Promise.all(n.map((e=>{switch(e){case"exports":return a;case"module":return c;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/build-manifest.json",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/react-loadable-manifest.json",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/ZkYaasmNvvS8QSDJUbsvs/_buildManifest.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/ZkYaasmNvvS8QSDJUbsvs/_ssgManifest.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/247-27e0431697fc3f37a795.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/701-53ceccf759440bea07ab.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/795-b054df657849fabc30a4.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/main-da1bc8f8d312ca485cee.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/404-023c8b475813771f33ae.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/_app-d9c5bb5ee3498e26a43e.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/index-1258db8c37d1eaa298e6.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/opensource-8c2325ea5706e88bfadb.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/podcasts-cb30a3e1bf14a3e6874b.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/posts-bb2048107c0bfd6968c3.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/posts/%5Byear%5D/%5Bslug%5D-7fc32572117a13fc7839.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/projects-26d8f4d3f47e7fbbfbaf.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/resume/en-b3a506737218c3e845b0.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/resume/fr-ba60d78be1b3d3426d7e.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/rss.xml-cb454a59ea5c39b943b7.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/sitemap.xml-915165ab8de8cb82af8e.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/talks-e453b6a4903d5ed35b43.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/pages/videos-ac94631989d21b8ffc7b.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/14a9aeec4effd15c7740.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/14adedecd820eeed78b8.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/61fb253636b7a324d7a5.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/81e008c7e5fe6acbe2b1.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/8aca2c6ef206e6630fd4.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/8d447310ae7c235a3cc2.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/939ba9b9828d14919d4a.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/99a246375bc90cc3bdbd.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/e414d23a461b975dbf7d.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/f249c5ca29c8fe8d83a0.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/_next/static/css/f95b8d74044de98d553d.css",revision:"ZkYaasmNvvS8QSDJUbsvs"},{url:"/favicon-maskable.png",revision:"5c022a787a4d751dd673d5b8e4c823fc"},{url:"/favicon.ico",revision:"683c72699d39153bd8daa38e53238a50"},{url:"/humans.txt",revision:"28eeda3ede9bcb77adcca5e99cdfe07a"},{url:"/icons/maskable_icon.png",revision:"9ecaafc6dc6840239dd7ce0efc5bb888"},{url:"/icons/maskable_icon_x128.png",revision:"86d94262c90f3751024bd90973f82e0f"},{url:"/icons/maskable_icon_x192.png",revision:"c95c2f31f8cfa941ed0069c966e8f540"},{url:"/icons/maskable_icon_x384.png",revision:"08aaf06eaf859123996624ed4f743896"},{url:"/icons/maskable_icon_x48.png",revision:"e6c1dc0cf89be0b37281788944034e36"},{url:"/icons/maskable_icon_x512.png",revision:"425f0fb393cae85b06131356b43b1687"},{url:"/icons/maskable_icon_x72.png",revision:"7f6808605e5deb7a15a7e1da008d13bc"},{url:"/icons/maskable_icon_x96.png",revision:"96642eb996a08dafdbd54d49bd847995"},{url:"/images/answwr.png",revision:"79596cc34932221522d1905589099bc9"},{url:"/images/brunosabot.jpg",revision:"7764f9c1913cc49b379ce11498966252"},{url:"/images/favicon-maskable.png",revision:"9ecaafc6dc6840239dd7ce0efc5bb888"},{url:"/images/favicon.png",revision:"4fec0095c6304094fe6fee5b729b47c6"},{url:"/images/me.jpg",revision:"37b4808dfd4a8094f60af31b9c119eb2"},{url:"/manifest.webmanifest",revision:"044d3ef38296e9d1213cd658082c6dcc"},{url:"/robots.txt",revision:"cec76f318eb86712a04495efd1280be5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:n})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
