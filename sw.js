if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),f={module:{uri:o},exports:l,require:t};s[o]=Promise.all(r.map((e=>f[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/hookform-a44b0094.js",revision:null},{url:"assets/index-0e9d945e.js",revision:null},{url:"assets/localstorage-1d97b8aa.js",revision:null},{url:"assets/mui-f1eb34f2.js",revision:null},{url:"assets/react-adf67704.js",revision:null},{url:"assets/redux-4a00fe89.js",revision:null},{url:"index.html",revision:"4b3b8adce4837e3ddf879f22f74558b7"},{url:"registerSW.js",revision:"2f8e6fb9ee2c9f7ab950c1ca2e9a2014"},{url:"favicon.ico",revision:"e1012a63e5ac8c95bb046d3b9cc84180"},{url:"icon-192x192.png",revision:"e2f2c1d9b4a7be69f25fef2e23d676af"},{url:"icon-512x512.png",revision:"686faac69bfeb230a7c9402c24716958"},{url:"manifest.webmanifest",revision:"daf6956801619fabe5f20fc1c68388bf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
