import{r as e,h as s,g as t}from"./p-b82f54f4.js";const a=".ld-breadcrumbs,:host{--ld-crumb-icon-gap:0.5em;--ld-crumb-gap:0.6em;line-height:1.5}.ld-breadcrumbs>ol{display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0}";const r=a;const b=class{constructor(s){e(this,s);this.updateCurrent=()=>{const e=this.el.querySelectorAll("ld-crumb");if(!e.length)return;e.forEach((e=>{e.current=undefined}));e[e.length-1].current=true}}componentDidLoad(){this.observer=new MutationObserver(this.updateCurrent);this.observer.observe(this.el,{subtree:true,childList:true,attributes:false});this.updateCurrent()}disconnectedCallback(){if(this.observer)this.observer.disconnect()}render(){return s("nav",{key:"2bae2bbf0ebf6b9b52b7d5db61f3399191eba70e","aria-label":"Breadcrumbs",class:"ld-breadcrumbs"},s("ol",{key:"8dc467c8a8a1a7a07d13b4ca226319999e1a2b97",class:"ld-breadcrumbs__list",part:"list"},s("slot",{key:"4115baeed25654ca15fc56c94589a9f20e3f87be"})))}get el(){return t(this)}};b.style=r;export{b as ld_breadcrumbs};
//# sourceMappingURL=p-de752c6e.entry.js.map