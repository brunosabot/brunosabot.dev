if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/build-manifest.json",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/react-loadable-manifest.json",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/server/middleware-manifest.json",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/6hmAs6J4Q9mbeJUQPwLwR/_buildManifest.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/6hmAs6J4Q9mbeJUQPwLwR/_middlewareManifest.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/6hmAs6J4Q9mbeJUQPwLwR/_ssgManifest.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/247-ab665631c761f017.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/316-4540369c86c72224.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/360-f4da50fb6e3637ae.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/398-bd534adf500e43e4.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/464-4805280ab157d041.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/764-c2efe3ac6bb23895.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/788-b9ef664a8df02811.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/framework-0f8b31729833af61.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/main-38cde5a9828e2725.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/404-56eaf61688d638c6.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/_app-a8fe3ea012fb2190.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/index-e2d6503ec2cfd243.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/opensource-49d31b1739c8781e.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/podcasts-9ce4c8da24b2fe2a.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/posts-f7a8d8ed4ec34c24.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/posts/%5Byear%5D/%5Bslug%5D-ef828520fd768c19.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/projects-72277cf2997e0092.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/resume/en-0642273fb59c5297.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/resume/fr-6db6a47d69657a04.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/rss.xml-096af1f56f98214b.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/sitemap.xml-3dfabd8b727145c4.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/talks-42d885f96a4f54c4.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/tools-59d125ae726f03e2.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/tools/base-64-d15629374b90eb73.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/tools/bezier-curves-6255a8b231c6f7f6.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/tools/pretty-192a1a32827a3ba2.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/tools/rgb-convertor-ebd00967e09d6c45.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/tools/sha-7ee093e564e5ba3d.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/tools/timestamp-c5d01610b4b0cc14.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/tools/url-encode-decode-397bb883f71a5c4e.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/tools/uuid-b6a7e52f9a1d48ae.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/pages/videos-fc572cce5f100d63.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/chunks/webpack-49b6f2937c9ce9f4.js",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/16c7dbe6a4edf45b.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/1dedacda2acf71bd.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/2ea76cb5ad8af4ec.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/2eed2f0bc58eda63.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/3b095a1c8af5dd89.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/4c9ed031db1bc4d9.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/500b13b28a474879.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/5a7e97ca96cc8bb5.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/634db0aa5ed860ed.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/68ff6b862896aa03.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/7d673d91c3aaa4c1.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/a5812d434b90af51.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/a64a236284c80d45.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/af7a9868d9487d00.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/b734cd6f1f72a406.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/d7dfd10ddababf2f.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/da99a8dae0f7514f.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/e3fe7edfe1985e43.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/_next/static/css/e84796a740592565.css",revision:"6hmAs6J4Q9mbeJUQPwLwR"},{url:"/favicon-maskable.png",revision:"5c022a787a4d751dd673d5b8e4c823fc"},{url:"/favicon.ico",revision:"683c72699d39153bd8daa38e53238a50"},{url:"/humans.txt",revision:"28eeda3ede9bcb77adcca5e99cdfe07a"},{url:"/icons/maskable_icon.png",revision:"9ecaafc6dc6840239dd7ce0efc5bb888"},{url:"/icons/maskable_icon_x128.png",revision:"86d94262c90f3751024bd90973f82e0f"},{url:"/icons/maskable_icon_x192.png",revision:"c95c2f31f8cfa941ed0069c966e8f540"},{url:"/icons/maskable_icon_x384.png",revision:"08aaf06eaf859123996624ed4f743896"},{url:"/icons/maskable_icon_x48.png",revision:"e6c1dc0cf89be0b37281788944034e36"},{url:"/icons/maskable_icon_x512.png",revision:"425f0fb393cae85b06131356b43b1687"},{url:"/icons/maskable_icon_x72.png",revision:"7f6808605e5deb7a15a7e1da008d13bc"},{url:"/icons/maskable_icon_x96.png",revision:"96642eb996a08dafdbd54d49bd847995"},{url:"/images/answwr.png",revision:"79596cc34932221522d1905589099bc9"},{url:"/images/brunosabot.jpg",revision:"7764f9c1913cc49b379ce11498966252"},{url:"/images/favicon-maskable.png",revision:"9ecaafc6dc6840239dd7ce0efc5bb888"},{url:"/images/favicon.png",revision:"4fec0095c6304094fe6fee5b729b47c6"},{url:"/images/me.jpg",revision:"37b4808dfd4a8094f60af31b9c119eb2"},{url:"/manifest.webmanifest",revision:"044d3ef38296e9d1213cd658082c6dcc"},{url:"/robots.txt",revision:"cec76f318eb86712a04495efd1280be5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
