let t=false;const n=n=>{var e;const s=(e=document.head.querySelector("meta[data-ld-asset-path]"))===null||e===void 0?void 0:e.dataset.ldAssetPath;const i=window.__LD_ASSET_PATH__;const o="5.8.1";const c=`https://cdn.jsdelivr.net/npm/@emdgroup-liquid/liquid${"@"+o}/dist/liquid/`;const a=s||i||c||"/";if(a.startsWith("https://cdn.jsdelivr.net/npm/")&&!t){t=true;console.warn(`Fetching Liquid Oxygen assets from jsDelivr CDN.\n\nWe recommend bundling Liquid Oxygen assets with your application and setting the asset path accordingly.\n\nFor more information see the documentation:\nhttps://liquid.merck.design/liquid/guides/component-assets/`)}let d=n;if(n.startsWith("./")){d=n.substring(2)}if(!a.endsWith("/")){d="/"+d}return a+d};const e={};const s={};async function i(t){return await c(`${t}-cell.svg`)}async function o(t){return await c(`${t}.svg`)}async function c(t){if(e[t]){return e[t]}if(!s[t]){s[t]=fetch(`${n("./assets")}/${t}`).then((t=>t.text())).catch((n=>{console.error(`"${t}" could not be fetched`,n);return""}))}const i=await s[t];e[t]=i;return i}export{o as a,i as f};
//# sourceMappingURL=p-46b36a17.js.map