const e="liquid";const t={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:true,cmpDidRender:true,cmpDidUnload:false,cmpDidUpdate:true,cmpShouldUpdate:false,cmpWillLoad:true,cmpWillRender:false,cmpWillUpdate:false,connectedCallback:true,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:true,element:false,event:true,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:true,hostListenerTarget:true,hostListenerTargetBody:false,hostListenerTargetDocument:true,hostListenerTargetParent:false,hostListenerTargetWindow:true,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:true,mode:false,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:true,propNumber:true,propString:true,reflect:true,scoped:false,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:true,slot:true,slotChildNodesFix:false,slotRelocation:true,state:true,style:true,svg:true,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,vdomXlink:true,watchCallback:true};let n;let s;let l;let o=false;let i=false;let c=false;let f=false;let r=false;const u=e=>{const t=new URL(e,He.t);return t.origin!==ze.location.origin?t.href:t.pathname};const a=(e,t="")=>{{return()=>{}}};const d=(e,t)=>{{return()=>{}}};const p="{visibility:hidden}.hydrated{visibility:inherit}";const m="slot-fb{display:contents}slot-fb[hidden]{display:none}";const v="http://www.w3.org/1999/xlink";const h={};const y="http://www.w3.org/2000/svg";const b="http://www.w3.org/1999/xhtml";const w=e=>e!=null;const g=e=>{e=typeof e;return e==="object"||e==="function"};function $(e){var t,n,s;return(s=(n=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const S=(e,t,...n)=>{let s=null;let l=null;let o=null;let i=false;let c=false;const f=[];const r=t=>{for(let n=0;n<t.length;n++){s=t[n];if(Array.isArray(s)){r(s)}else if(s!=null&&typeof s!=="boolean"){if(i=typeof e!=="function"&&!g(s)){s=String(s)}if(i&&c){f[f.length-1].l+=s}else{f.push(i?k(null,s):s)}c=i}}};r(n);if(t){if(t.key){l=t.key}if(t.name){o=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,f,j)}const u=k(e,null);u.o=t;if(f.length>0){u.i=f}{u.u=l}{u.p=o}return u};const k=(e,t)=>{const n={m:0,v:e,l:t,h:null,i:null};{n.o=null}{n.u=null}{n.p=null}return n};const C={};const x=e=>e&&e.v===C;const j={forEach:(e,t)=>e.map(L).forEach(t),map:(e,t)=>e.map(L).map(t).map(O)};const L=e=>({vattrs:e.o,vchildren:e.i,vkey:e.u,vname:e.p,vtag:e.v,vtext:e.l});const O=e=>{if(typeof e.vtag==="function"){const t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return S(e.vtag,t,...e.vchildren||[])}const t=k(e.vtag,e.vtext);t.o=e.vattrs;t.i=e.vchildren;t.u=e.vkey;t.p=e.vname;return t};const R=(e,t)=>{if(e!=null&&!g(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};const T=e=>Me(e).$hostElement$;const D=(e,t,n)=>{const s=T(e);return{emit:e=>F(s,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}};const F=(e,t,n)=>{const s=He.ce(t,n);e.dispatchEvent(s);return s};const M=new WeakMap;const U=(e,t,n)=>{let s=qe.get(e);if(Ie&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=t}else{s.replaceSync(t)}}else{s=t}qe.set(e,s)};const A=(e,t,n)=>{var s;const l=P(t);const o=qe.get(l);e=e.nodeType===11?e:Be;if(o){if(typeof o==="string"){e=e.head||e;let n=M.get(e);let i;if(!n){M.set(e,n=new Set)}if(!n.has(l)){{i=Be.createElement("style");i.innerHTML=o;const t=(s=He.$)!==null&&s!==void 0?s:$(Be);if(t!=null){i.setAttribute("nonce",t)}e.insertBefore(i,e.querySelector("link"))}if(t.m&4){i.innerHTML+=m}if(n){n.add(l)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]}}return l};const N=e=>{const t=e.S;const n=e.$hostElement$;const s=t.m;const l=a("attachStyles",t.k);const o=A(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(s&10){n["s-sc"]=o;n.classList.add(o+"-h")}l()};const P=(e,t)=>"sc-"+e.k;const W=(e,t,n,s,l,o)=>{if(n!==s){let i=Ne(e,t);let c=t.toLowerCase();if(t==="class"){const t=e.classList;const l=q(n);const o=q(s);t.remove(...l.filter((e=>e&&!o.includes(e))));t.add(...o.filter((e=>e&&!l.includes(e))))}else if(t==="style"){{for(const t in n){if(!s||s[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in s){if(!n||s[t]!==n[t]){if(t.includes("-")){e.style.setProperty(t,s[t])}else{e.style[t]=s[t]}}}}else if(t==="key");else if(t==="ref"){if(s){s(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Ne(ze,c)){t=c.slice(2)}else{t=c[2]+t.slice(3)}if(n||s){const l=t.endsWith(z);t=t.replace(B,"");if(n){He.rel(e,t,n,l)}if(s){He.ael(e,t,s,l)}}}else{const f=g(s);if((i||f&&s!==null)&&!l){try{if(!e.tagName.includes("-")){const l=s==null?"":s;if(t==="list"){i=false}else if(n==null||e[t]!=l){e[t]=l}}else{e[t]=s}}catch(e){}}let r=false;{if(c!==(c=c.replace(/^xlink\:?/,""))){t=c;r=true}}if(s==null||s===false){if(s!==false||e.getAttribute(t)===""){if(r){e.removeAttributeNS(v,t)}else{e.removeAttribute(t)}}}else if((!i||o&4||l)&&!f){s=s===true?"":s;if(r){e.setAttributeNS(v,t,s)}else{e.setAttribute(t,s)}}}}};const E=/\s/;const q=e=>!e?[]:e.split(E);const z="Capture";const B=new RegExp(z+"$");const H=(e,t,n,s)=>{const l=t.h.nodeType===11&&t.h.host?t.h.host:t.h;const o=e&&e.o||h;const i=t.o||h;{for(s in o){if(!(s in i)){W(l,s,o[s],undefined,n,t.m)}}}for(s in i){W(l,s,o[s],i[s],n,t.m)}};const Q=(e,t,i,r)=>{var u;const a=t.i[i];let d=0;let p;let m;let v;if(!o){c=true;if(a.v==="slot"){if(n){r.classList.add(n+"-s")}a.m|=a.i?2:1}}if(a.l!==null){p=a.h=Be.createTextNode(a.l)}else if(a.m&1){p=a.h=Be.createTextNode("")}else{if(!f){f=a.v==="svg"}p=a.h=Be.createElementNS(f?y:b,a.m&2?"slot-fb":a.v);if(f&&a.v==="foreignObject"){f=false}{H(null,a,f)}if(w(n)&&p["s-si"]!==n){p.classList.add(p["s-si"]=n)}if(a.i){for(d=0;d<a.i.length;++d){m=Q(e,a,d,p);if(m){p.appendChild(m)}}}{if(a.v==="svg"){f=false}else if(p.tagName==="foreignObject"){f=true}}}{p["s-hn"]=l;if(a.m&(2|1)){p["s-sr"]=true;p["s-fs"]=(u=a.o)===null||u===void 0?void 0:u.slot;p["s-cr"]=s;p["s-sn"]=a.p||"";v=e&&e.i&&e.i[i];if(v&&v.v===a.v&&e.h){I(e.h,false)}}}return p};const I=(e,t)=>{var n;He.m|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const o=s[e];if(o["s-hn"]!==l&&o["s-ol"]){J(o).insertBefore(o,G(o));o["s-ol"].remove();o["s-ol"]=undefined;o["s-sh"]=undefined;if(o.nodeType===1){o.setAttribute("slot",(n=o["s-sn"])!==null&&n!==void 0?n:"")}c=true}if(t){I(o,t)}}He.m&=~1};const K=(e,t,n,s,o,i)=>{let c=e["s-cr"]&&e["s-cr"].parentNode||e;let f;if(c.shadowRoot&&c.tagName===l){c=c.shadowRoot}for(;o<=i;++o){if(s[o]){f=Q(null,n,o,e);if(f){s[o].h=f;c.insertBefore(f,G(t))}}}};const V=(e,t,n)=>{for(let s=t;s<=n;++s){const t=e[s];if(t){const e=t.h;se(t);if(e){{i=true;if(e["s-ol"]){e["s-ol"].remove()}else{I(e,true)}}e.remove()}}}};const X=(e,t,n,s)=>{let l=0;let o=0;let i=0;let c=0;let f=t.length-1;let r=t[0];let u=t[f];let a=s.length-1;let d=s[0];let p=s[a];let m;let v;while(l<=f&&o<=a){if(r==null){r=t[++l]}else if(u==null){u=t[--f]}else if(d==null){d=s[++o]}else if(p==null){p=s[--a]}else if(_(r,d)){Y(r,d);r=t[++l];d=s[++o]}else if(_(u,p)){Y(u,p);u=t[--f];p=s[--a]}else if(_(r,p)){if(r.v==="slot"||p.v==="slot"){I(r.h.parentNode,false)}Y(r,p);e.insertBefore(r.h,u.h.nextSibling);r=t[++l];p=s[--a]}else if(_(u,d)){if(r.v==="slot"||p.v==="slot"){I(u.h.parentNode,false)}Y(u,d);e.insertBefore(u.h,r.h);u=t[--f];d=s[++o]}else{i=-1;{for(c=l;c<=f;++c){if(t[c]&&t[c].u!==null&&t[c].u===d.u){i=c;break}}}if(i>=0){v=t[i];if(v.v!==d.v){m=Q(t&&t[o],n,i,e)}else{Y(v,d);t[i]=undefined;m=v.h}d=s[++o]}else{m=Q(t&&t[o],n,o,e);d=s[++o]}if(m){{J(r.h).insertBefore(m,G(r.h))}}}}if(l>f){K(e,s[a+1]==null?null:s[a+1].h,n,s,o,a)}else if(o>a){V(t,l,f)}};const _=(e,t)=>{if(e.v===t.v){if(e.v==="slot"){return e.p===t.p}{return e.u===t.u}}return false};const G=e=>e&&e["s-ol"]||e;const J=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const Y=(e,t)=>{const n=t.h=e.h;const s=e.i;const l=t.i;const o=t.v;const i=t.l;let c;if(i===null){{f=o==="svg"?true:o==="foreignObject"?false:f}{if(o==="slot");else{H(e,t,f)}}if(s!==null&&l!==null){X(n,s,t,l)}else if(l!==null){if(e.l!==null){n.textContent=""}K(n,null,t,l,0,l.length-1)}else if(s!==null){V(s,0,s.length-1)}if(f&&o==="svg"){f=false}}else if(c=n["s-cr"]){c.parentNode.textContent=i}else if(e.l!==i){n.data=i}};const Z=e=>{const t=e.childNodes;for(const e of t){if(e.nodeType===1){if(e["s-sr"]){const n=e["s-sn"];e.hidden=false;for(const s of t){if(s!==e){if(s["s-hn"]!==e["s-hn"]||n!==""){if(s.nodeType===1&&(n===s.getAttribute("slot")||n===s["s-sn"])){e.hidden=true;break}}else{if(s.nodeType===1||s.nodeType===3&&s.textContent.trim()!==""){e.hidden=true;break}}}}}Z(e)}}};const ee=[];const te=e=>{let n;let s;let l;for(const o of e.childNodes){if(o["s-sr"]&&(n=o["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;const e=o["s-sn"];for(l=s.length-1;l>=0;l--){n=s[l];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==o["s-hn"]&&!t.experimentalSlotFixes){if(ne(n,e)){let t=ee.find((e=>e.C===n));i=true;n["s-sn"]=n["s-sn"]||e;if(t){t.C["s-sh"]=o["s-hn"];t.j=o}else{n["s-sh"]=o["s-hn"];ee.push({j:o,C:n})}if(n["s-sr"]){ee.map((e=>{if(ne(e.C,n["s-sn"])){t=ee.find((e=>e.C===n));if(t&&!e.j){e.j=t.j}}}))}}else if(!ee.some((e=>e.C===n))){ee.push({C:n})}}}}if(o.nodeType===1){te(o)}}};const ne=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const se=e=>{{e.o&&e.o.ref&&e.o.ref(null);e.i&&e.i.map(se)}};const le=(e,t,f=false)=>{var r,u;const a=e.$hostElement$;const d=e.S;const p=e.L||k(null,null);const m=x(t)?t:S(null,null,t);l=a.tagName;if(d.O){m.o=m.o||{};d.O.map((([e,t])=>m.o[t]=a[e]))}if(f&&m.o){for(const e of Object.keys(m.o)){if(a.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){m.o[e]=a[e]}}}m.v=null;m.m|=4;e.L=m;m.h=p.h=a.shadowRoot||a;{n=a["s-sc"]}{s=a["s-cr"];o=(d.m&1)!==0;i=false}Y(p,m);{He.m|=1;if(c){te(m.h);for(const e of ee){const t=e.C;if(!t["s-ol"]){const e=Be.createTextNode("");e["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of ee){const t=e.C;const n=e.j;if(n){const e=n.parentNode;let s=n.nextSibling;{let n=(r=t["s-ol"])===null||r===void 0?void 0:r.previousSibling;while(n){let l=(u=n["s-nr"])!==null&&u!==void 0?u:null;if(l&&l["s-sn"]===t["s-sn"]&&e===l.parentNode){l=l.nextSibling;if(!l||!l["s-nr"]){s=l;break}}n=n.previousSibling}}if(!s&&e!==t.parentNode||t.nextSibling!==s){if(t!==s){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}e.insertBefore(t,s)}}}else{if(t.nodeType===1){t.hidden=true}}}}if(i){Z(m.h)}He.m&=~1;ee.length=0}};const oe=(e,t)=>{if(t&&!e.R&&t["s-p"]){t["s-p"].push(new Promise((t=>e.R=t)))}};const ie=(e,t)=>{{e.m|=16}if(e.m&4){e.m|=512;return}oe(e,e.T);const n=()=>ce(e,t);return Ye(n)};const ce=(e,t)=>{const n=a("scheduleUpdate",e.S.k);const s=e.D;let l;if(t){{e.m|=256;if(e.F){e.F.map((([e,t])=>me(s,e,t)));e.F=undefined}}{l=me(s,"componentWillLoad")}}n();return fe(l,(()=>ue(e,s,t)))};const fe=(e,t)=>re(e)?e.then(t):t();const re=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";const ue=async(e,t,n)=>{var s;const l=e.$hostElement$;const o=a("update",e.S.k);const i=l["s-rc"];if(n){N(e)}const c=a("render",e.S.k);{ae(e,t,l,n)}if(i){i.map((e=>e()));l["s-rc"]=undefined}c();o();{const t=(s=l["s-p"])!==null&&s!==void 0?s:[];const n=()=>de(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.m|=4;t.length=0}}};const ae=(e,t,n,s)=>{try{t=t.render();{e.m&=~16}{e.m|=2}{{{le(e,t,s)}}}}catch(t){Pe(t,e.$hostElement$)}return null};const de=e=>{const t=e.S.k;const n=e.$hostElement$;const s=a("postUpdate",t);const l=e.D;const o=e.T;{me(l,"componentDidRender")}if(!(e.m&64)){e.m|=64;{ve(n)}{me(l,"componentDidLoad")}s();{e.M(n);if(!o){pe()}}}else{{me(l,"componentDidUpdate")}s()}{e.U(n)}{if(e.R){e.R();e.R=undefined}if(e.m&512){Je((()=>ie(e,false)))}e.m&=~(4|512)}};const pe=t=>{{ve(Be.documentElement)}Je((()=>F(ze,"appload",{detail:{namespace:e}})))};const me=(e,t,n)=>{if(e&&e[t]){try{return e[t](n)}catch(e){Pe(e)}}return undefined};const ve=e=>e.classList.add("hydrated");const he=(e,t)=>Me(e).A.get(t);const ye=(e,t,n,s)=>{const l=Me(e);const o=l.$hostElement$;const i=l.A.get(t);const c=l.m;const f=l.D;n=R(n,s.N[t][0]);const r=Number.isNaN(i)&&Number.isNaN(n);const u=n!==i&&!r;if((!(c&8)||i===undefined)&&u){l.A.set(t,n);if(f){if(s.P&&c&128){const e=s.P[t];if(e){e.map((e=>{try{f[e](n,i,t)}catch(e){Pe(e,o)}}))}}if((c&(2|16))===2){ie(l,false)}}}};const be=(e,t,n)=>{var s;if(t.N){if(e.watchers){t.P=e.watchers}const l=Object.entries(t.N);const o=e.prototype;l.map((([e,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(o,e,{get(){return he(this,e)},set(n){ye(this,e,n,t)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(o,e,{value(...t){const n=Me(this);return n.W.then((()=>n.D[e](...t)))}})}}));if(n&1){const n=new Map;o.attributeChangedCallback=function(e,s,l){He.jmp((()=>{const i=n.get(e);if(this.hasOwnProperty(i)){l=this[i];delete this[i]}else if(o.hasOwnProperty(i)&&typeof this[i]==="number"&&this[i]==l){return}else if(i==null){const n=Me(this);const o=n===null||n===void 0?void 0:n.m;if(!(o&8)&&o&128&&l!==s){const o=n.D;const i=t.P[e];i===null||i===void 0?void 0:i.forEach((t=>{if(o[t]!=null){o[t].call(o,l,s,e)}}))}return}this[i]=l===null&&typeof this[i]==="boolean"?false:l}))};e.observedAttributes=Array.from(new Set([...Object.keys((s=t.P)!==null&&s!==void 0?s:{}),...l.filter((([e,t])=>t[0]&15)).map((([e,s])=>{const l=s[1]||e;n.set(l,e);if(s[0]&512){t.O.push([e,l])}return l}))]))}}return e};const we=async(e,t,n,s)=>{let l;if((t.m&32)===0){t.m|=32;{l=Ee(n);if(l.then){const e=d();l=await l;e()}if(!l.isProxied){{n.P=l.watchers}be(l,n,2);l.isProxied=true}const e=a("createInstance",n.k);{t.m|=8}try{new l(t)}catch(e){Pe(e)}{t.m&=~8}{t.m|=128}e();ge(t.D)}if(l.style){let e=l.style;const t=P(n);if(!qe.has(t)){const s=a("registerStyles",n.k);U(t,e,!!(n.m&1));s()}}}const o=t.T;const i=()=>ie(t,true);if(o&&o["s-rc"]){o["s-rc"].push(i)}else{i()}};const ge=e=>{{me(e,"connectedCallback")}};const $e=e=>{if((He.m&1)===0){const t=Me(e);const n=t.S;const s=a("connectedCallback",n.k);if(!(t.m&1)){t.m|=1;{if(n.m&(4|8)){Se(e)}}{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){oe(t,t.T=n);break}}}if(n.N){Object.entries(n.N).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{we(e,t,n)}}else{Le(e,t,n.q);if(t===null||t===void 0?void 0:t.D){ge(t.D)}else if(t===null||t===void 0?void 0:t.B){t.B.then((()=>ge(t.D)))}}s()}};const Se=e=>{const t=e["s-cr"]=Be.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const ke=e=>{{me(e,"disconnectedCallback")}};const Ce=async e=>{if((He.m&1)===0){const t=Me(e);{if(t.H){t.H.map((e=>e()));t.H=undefined}}if(t===null||t===void 0?void 0:t.D){ke(t.D)}else if(t===null||t===void 0?void 0:t.B){t.B.then((()=>ke(t.D)))}}};const xe=(e,t={})=>{var n;const s=a();const l=[];const o=t.exclude||[];const i=ze.customElements;const c=Be.head;const f=c.querySelector("meta[charset]");const r=Be.createElement("style");const u=[];let d;let v=true;Object.assign(He,t);He.t=new URL(t.resourcesUrl||"./",Be.baseURI).href;let h=false;e.map((e=>{e[1].map((t=>{var n;const s={m:t[0],k:t[1],N:t[2],q:t[3]};if(s.m&4){h=true}{s.N=t[2]}{s.q=t[3]}{s.O=[]}{s.P=(n=t[4])!==null&&n!==void 0?n:{}}const c=s.k;const f=class extends HTMLElement{constructor(e){super(e);e=this;Ae(e,s);if(s.m&1){{{e.attachShadow({mode:"open"})}}}}connectedCallback(){if(d){clearTimeout(d);d=null}if(v){u.push(this)}else{He.jmp((()=>$e(this)))}}disconnectedCallback(){He.jmp((()=>Ce(this)))}componentOnReady(){return Me(this).B}};s.I=e[0];if(!o.includes(c)&&!i.get(c)){l.push(c);i.define(c,be(f,s,1))}}))}));if(h){r.innerHTML+=m}{r.innerHTML+=l+p}if(r.innerHTML.length){r.setAttribute("data-styles","");c.insertBefore(r,f?f.nextSibling:c.firstChild);const e=(n=He.$)!==null&&n!==void 0?n:$(Be);if(e!=null){r.setAttribute("nonce",e)}}v=false;if(u.length){u.map((e=>e.connectedCallback()))}else{{He.jmp((()=>d=setTimeout(pe,30)))}}s()};const je=(e,t)=>t;const Le=(e,t,n,s)=>{if(n){n.map((([n,s,l])=>{const o=Re(e,n);const i=Oe(t,l);const c=Te(n);He.ael(o,s,i,c);(t.H=t.H||[]).push((()=>He.rel(o,s,i,c)))}))}};const Oe=(e,t)=>n=>{try{{if(e.m&256){e.D[t](n)}else{(e.F=e.F||[]).push([t,n])}}}catch(e){Pe(e)}};const Re=(e,t)=>{if(t&4)return Be;if(t&8)return ze;return e};const Te=e=>(e&2)!==0;const De=e=>He.$=e;const Fe=new WeakMap;const Me=e=>Fe.get(e);const Ue=(e,t)=>Fe.set(t.D=e,t);const Ae=(e,t)=>{const n={m:0,$hostElement$:e,S:t,A:new Map};{n.W=new Promise((e=>n.U=e))}{n.B=new Promise((e=>n.M=e));e["s-p"]=[];e["s-rc"]=[]}Le(e,n,t.q);return Fe.set(e,n)};const Ne=(e,t)=>t in e;const Pe=(e,t)=>(0,console.error)(e,t);const We=new Map;const Ee=(e,t,n)=>{const s=e.k.replace(/-/g,"_");const l=e.I;const o=We.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{We.set(l,e)}return e[s]}),Pe)};const qe=new Map;const ze=typeof window!=="undefined"?window:{};const Be=ze.document||{head:{}};const He={m:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)};const Qe=e=>Promise.resolve(e);const Ie=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();const Ke=[];const Ve=[];const Xe=(e,t)=>n=>{e.push(n);if(!r){r=true;if(t&&He.m&4){Je(Ge)}else{He.raf(Ge)}}};const _e=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){Pe(e)}}e.length=0};const Ge=()=>{_e(Ke);{_e(Ve);if(r=Ke.length>0){He.raf(Ge)}}};const Je=e=>Qe().then(e);const Ye=Xe(Ve,true);export{je as F,C as H,u as a,xe as b,D as c,T as g,S as h,Qe as p,Ue as r,De as s};
//# sourceMappingURL=p-6323efdb.js.map