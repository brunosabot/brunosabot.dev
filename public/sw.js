if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,c)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/build-manifest.json",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/react-loadable-manifest.json",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/FaZgbbLpdZyrZqMJMnZdg/_buildManifest.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/FaZgbbLpdZyrZqMJMnZdg/_ssgManifest.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/247-27e0431697fc3f37a795.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/795-b054df657849fabc30a4.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/main-da1bc8f8d312ca485cee.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/404-3267df3abdf71eb24770.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/_app-d9c5bb5ee3498e26a43e.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/index-15e79be5e02982d68443.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/opensource-c5b9bab9b2ee3ffcd27c.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/podcasts-7050a6c51e7ff3ec23e2.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/posts-e593ca533e99d75420e1.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/posts/%5Byear%5D/%5Bslug%5D-1ea8a8a12312d438989c.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/projects-7bd1dfefc93a4dd458b2.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/resume/en-d1ab7ab4748dc0e8d774.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/resume/fr-c0cdceeadec7486f89ec.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/rss.xml-cb454a59ea5c39b943b7.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/sitemap.xml-915165ab8de8cb82af8e.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/talks-c2ef348b51519dbfd96c.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/pages/videos-fe45af678b9b4374e93f.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/04329c78075a7f139a7d.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/18585f90cc992d5cee44.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/36d9a57c5a9d2b2e923a.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/4bec209552192fcdb82d.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/5c05bd5e931d8577abbb.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/6f15bd18dda6ac14b946.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/7eb77e3ff90c60f56cce.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/a3200b151685c36d91d1.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/bb929337c24c688113c3.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/de03a5ace92a289a1075.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/_next/static/css/e94ee599d46be43feadc.css",revision:"FaZgbbLpdZyrZqMJMnZdg"},{url:"/favicon-maskable.png",revision:"5c022a787a4d751dd673d5b8e4c823fc"},{url:"/favicon.ico",revision:"683c72699d39153bd8daa38e53238a50"},{url:"/humans.txt",revision:"28eeda3ede9bcb77adcca5e99cdfe07a"},{url:"/icons/maskable_icon.png",revision:"9ecaafc6dc6840239dd7ce0efc5bb888"},{url:"/icons/maskable_icon_x128.png",revision:"86d94262c90f3751024bd90973f82e0f"},{url:"/icons/maskable_icon_x192.png",revision:"c95c2f31f8cfa941ed0069c966e8f540"},{url:"/icons/maskable_icon_x384.png",revision:"08aaf06eaf859123996624ed4f743896"},{url:"/icons/maskable_icon_x48.png",revision:"e6c1dc0cf89be0b37281788944034e36"},{url:"/icons/maskable_icon_x512.png",revision:"425f0fb393cae85b06131356b43b1687"},{url:"/icons/maskable_icon_x72.png",revision:"7f6808605e5deb7a15a7e1da008d13bc"},{url:"/icons/maskable_icon_x96.png",revision:"96642eb996a08dafdbd54d49bd847995"},{url:"/images/answwr.png",revision:"79596cc34932221522d1905589099bc9"},{url:"/images/brunosabot.jpg",revision:"7764f9c1913cc49b379ce11498966252"},{url:"/images/favicon-maskable.png",revision:"9ecaafc6dc6840239dd7ce0efc5bb888"},{url:"/images/favicon.png",revision:"4fec0095c6304094fe6fee5b729b47c6"},{url:"/images/me.jpg",revision:"37b4808dfd4a8094f60af31b9c119eb2"},{url:"/manifest.webmanifest",revision:"044d3ef38296e9d1213cd658082c6dcc"},{url:"/robots.txt",revision:"cec76f318eb86712a04495efd1280be5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
