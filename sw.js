if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),f={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/CustomizeMenuContent-aebe5884.js",revision:null},{url:"assets/index-ae1c02e0.js",revision:null},{url:"index.html",revision:"7d0910ba684db3bf85426ef8fe1c5f04"},{url:"registerSW.js",revision:"2f8e6fb9ee2c9f7ab950c1ca2e9a2014"},{url:"favicon.ico",revision:"e1012a63e5ac8c95bb046d3b9cc84180"},{url:"icon-192x192.png",revision:"e2f2c1d9b4a7be69f25fef2e23d676af"},{url:"icon-512x512.png",revision:"686faac69bfeb230a7c9402c24716958"},{url:"manifest.webmanifest",revision:"9534b70fd27dedbeca18b5c2e59390b7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
