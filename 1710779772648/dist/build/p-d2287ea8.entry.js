import{r as e,h as a,H as d,g as r}from"./p-b82f54f4.js";import{g as t}from"./p-1133c92e.js";const l=".ld-header,:host(.ld-header){--ld-header-height:3.125rem;--ld-header-max-width:90rem;--ld-header-col:var(--ld-col-wht);--ld-header-bg-col:var(--ld-thm-primary);--ld-header-box-shadow:var(--ld-shadow-stacked);background-color:var(--ld-header-bg-col);box-shadow:var(--ld-header-box-shadow);color:var(--ld-header-col);display:flex;justify-content:center;overflow-x:auto;transition:transform var(--ld-transition-duration-quick) ease-in-out;width:100%}.ld-header.ld-header--sticky,:host(.ld-header.ld-header--sticky){position:sticky;top:0;z-index:1}.ld-header.ld-header--hidden,:host(.ld-header.ld-header--hidden){transform:translateY(-100%)}.ld-header__container{align-items:center;box-sizing:border-box;display:flex;flex-grow:1;flex-shrink:0;gap:var(--ld-sp-16);height:var(--ld-header-height);max-width:var(--ld-header-max-width);padding-left:var(--ld-sp-16);padding-right:var(--ld-sp-16)}.ld-header__container>.ld-button--ghost,.ld-header__container>[mode=ghost],::slotted(.ld-button--ghost),::slotted([mode=ghost]){margin:0 calc(var(--ld-sp-4) * -1)}.ld-header__logo-wrapper{color:inherit;display:flex}.ld-header__logo-wrapper ::slotted(*){margin:0}.ld-header__logo{--ld-icon-size-md:2.4rem;color:var(--ld-thm-warning);display:block;margin:-.2rem}.ld-header_site-name{white-space:nowrap}.ld-header__grow{flex-grow:1}:host(.ld-header) .ld-header__grow{margin-right:calc(var(--ld-sp-16) * -1)}";const s=l;const o=class{constructor(a){e(this,a);this.updateScrollDirection=()=>{var e;const a=(e=window.pageYOffset)!==null&&e!==void 0?e:document.documentElement.scrollTop;if(window.innerHeight+a>=document.body.offsetHeight){this.hidden=false}else if(a>this.lastOffset&&a>this.currentHeight){this.hidden=true}else{this.hidden=false}this.lastOffset=a<0?0:a};this.hidden=false;this.hideOnScroll=false;this.logoTitle=undefined;this.logoUrl=undefined;this.sticky=false;this.siteName=undefined}connectedCallback(){if(this.hideOnScroll){this.lastOffset=window.pageYOffset||document.documentElement.scrollTop;window.addEventListener("scroll",this.updateScrollDirection,{passive:true})}else{this.disconnectedCallback()}}disconnectedCallback(){window.removeEventListener("scroll",this.updateScrollDirection)}componentDidLoad(){this.currentHeight=this.el.getBoundingClientRect().height;this.el.querySelectorAll("ld-header > ld-button").forEach((e=>{e.size="sm";e.brandColor=true}));this.el.querySelectorAll("ld-header > .ld-button").forEach((e=>{e.classList.add("ld-button--brand-color");e.classList.add("ld-button--sm");e.classList.remove("ld-button--lg")}))}render(){const e=t(["ld-header",this.hidden&&"ld-header--hidden",this.sticky&&"ld-header--sticky"]);return a(d,{key:"b102a8ecd8188ec8332c901653cbbc4ecff717b4",class:e,role:"banner"},a("header",{key:"d33aa7c0664206fafa7f9edd1f7ba0df8e65e9f9",class:"ld-header__container",part:"container"},a("slot",{key:"d3c4f21312ec9891d78f42d08ef57ccd8f383680",name:"start"}),this.logoUrl?a("a",{"aria-label":this.logoTitle,class:"ld-header__logo-wrapper",href:this.logoUrl,part:"logo-wrapper"},a("slot",{name:"logo"},a("ld-icon",{"aria-label":this.logoTitle?undefined:"Merck KGaA, Darmstadt, Germany",class:"ld-header__logo",name:"initial-m",part:"logo"}))):a("div",{"aria-label":this.logoTitle,class:"ld-header__logo-wrapper",part:"logo-wrapper"},a("slot",{name:"logo"},a("ld-icon",{"aria-label":this.logoTitle?undefined:"Merck KGaA, Darmstadt, Germany",class:"ld-header__logo",name:"initial-m",part:"logo"}))),this.siteName&&a("ld-typo",{class:"ld-header_site-name",part:"site-name",tag:"div",variant:"h5"},this.siteName),a("slot",{key:"00ee9f47118a5d7c3bd20ece5251f0aa0b55e105"}),a("div",{key:"5b7880af3801c8c3e4c07bca69115167e845af25",class:"ld-header__grow",part:"spacer"}),a("slot",{key:"d97376130a687aa7600989ba7eea265513067337",name:"end"})))}static get assetsDirs(){return["assets"]}get el(){return r(this)}static get watchers(){return{hideOnScroll:["connectedCallback"]}}};o.style=s;export{o as ld_header};
//# sourceMappingURL=p-d2287ea8.entry.js.map