import{r as e,c as o,h as s,H as l,g as a}from"./p-b82f54f4.js";import{g as c}from"./p-1133c92e.js";const d=".docs-example__code{background-color:var(--ld-col-neutral-010)}.docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-050);border-color:var(--ld-col-neutral-100)}.docs-example__tools{stroke:var(--ld-col-neutral-900)}.docs-example__copy-to-clipboard,.docs-example__tool-buttons,.docs-example__tool-switch{filter:none}@media (prefers-color-scheme:dark){.docs-example__code{background-color:var(--ld-col-neutral-900)}.docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-700);border-color:var(--ld-col-neutral-700)}.docs-example__tools{stroke:var(--ld-col-wht)}.docs-example__copy-to-clipboard,.docs-example__tool-buttons,.docs-example__tool-switch{filter:invert(1) hue-rotate(180deg)}.docs-example--has-border .docs-example__show{border-color:#0000}}.docs-ui-light .docs-example__code{background-color:var(--ld-col-neutral-010)}.docs-ui-light .docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-050);border-color:var(--ld-col-neutral-100)}.docs-ui-light .docs-example__tools{stroke:var(--ld-col-neutral-900)}.docs-ui-light .docs-example__copy-to-clipboard,.docs-ui-light .docs-example__tool-buttons,.docs-ui-light .docs-example__tool-switch{filter:none}.docs-ui-dark .docs-example__code{background-color:var(--ld-col-neutral-900)}.docs-ui-dark .docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-700);border-color:var(--ld-col-neutral-700)}.docs-ui-dark .docs-example__tools{stroke:var(--ld-col-wht)}.docs-ui-dark .docs-example__copy-to-clipboard,.docs-ui-dark .docs-example__tool-buttons,.docs-ui-dark .docs-example__tool-switch{filter:invert(1) hue-rotate(180deg)}.docs-ui-dark .docs-example--has-border .docs-example__show{border-color:#0000}.docs-example{display:block}.docs-example__code{display:none;overflow:hidden;position:relative}.docs-example__code,.docs-example__code pre{border-bottom-left-radius:var(--ld-br-l);border-bottom-right-radius:var(--ld-br-l)}.docs-example__tools-scroll-container{border-bottom-left-radius:var(--ld-br-l);border-bottom-right-radius:var(--ld-br-l);border-style:solid;border-width:var(--ld-sp-1);display:flex;overflow:auto;position:relative;width:100%}.docs-example__tools{align-items:center;display:flex;flex-grow:1;justify-content:space-between;line-height:0;padding:var(--ld-sp-8)}.docs-example__tool-switch{background-color:var(--ld-col-wht);border-radius:calc(var(--ld-br-m) + 1px)}.docs-example__tool-buttons{align-items:center;display:flex;flex:1 0;justify-content:flex-end}.docs-example__tool-buttons>:not(:first-child){margin-left:var(--ld-sp-12)}.docs-example__show{background-color:var(--ld-col-neutral-010);border-bottom-width:0;border-top-left-radius:var(--ld-br-l);border-top-right-radius:var(--ld-br-l);color:var(--ld-col-neutral-900);color-scheme:light;overflow:hidden;will-change:transform}.docs-example--has-border .docs-example__show{border:var(--ld-sp-1) solid var(--ld-col-neutral-100);border-bottom:0}.docs-example--has-padding .docs-example__show{padding:0 var(--ld-sp-8) var(--ld-sp-24)}@media (width <= 52rem){.docs-example--has-padding .docs-example__show{padding:0 0 var(--ld-sp-24)}}.docs-example--has-padding .docs-example__show>div>:not(.ld-modal){margin:var(--ld-sp-24) var(--ld-sp-24) 0;max-width:calc(100% - 2 * var(--ld-sp-24))}.docs-example__show>div{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:space-evenly;width:100%}.docs-example__show--centered>div{align-items:center}.docs-example__show--stacked>div{flex-direction:column}.docs-example__show--stacked:not(.docs-example__show--centered)>div{align-items:stretch}.docs-example__show--brand{border-color:#0000}.docs-example__show--brand.ld-theme-ocean{background-color:var(--ld-thm-ocean-primary)}.docs-example__show--brand.ld-theme-bubblegum,.docs-example__show--brand.ld-theme-shake,.docs-example__show--brand.ld-theme-solvent{background-color:var(--ld-thm-shake-primary)}.docs-example__show--brand.ld-theme-tea{background-color:var(--ld-thm-tea-primary)}.docs-example__show--light{background-color:var(--ld-col-wht)}.docs-example--code-visible .docs-example__tools-scroll-container{border-radius:0}.docs-example--code-visible .docs-example__code{display:block}.docs-example--css-component [slot=codeReactComponent],.docs-example--css-component [slot=code],.docs-example--css-component [slot=show],.docs-example--react-component [slot=codeCssComponent],.docs-example--react-component [slot=code],.docs-example--react-component [slot=showCssComponent],.docs-example--web-component [slot=codeCssComponent],.docs-example--web-component [slot=codeReactComponent],.docs-example--web-component [slot=showCssComponent]{display:none}.docs-example__code-tools{display:grid;gap:var(--ld-sp-8);grid-auto-flow:column;margin:var(--ld-sp-2) var(--ld-sp-1);position:absolute;right:var(--ld-sp-8);top:var(--ld-sp-8)}.docs-example__copy-to-clipboard{background-color:var(--ld-col-wht);border-radius:var(--ld-br-m)}";const t=d;const r=class{constructor(s){e(this,s);this.pickCodeType=o(this,"pickCodeType",7);this.handlePickTheme=e=>{this.currentTheme=e.detail};this.handleToggleCode=e=>{this.isCodeVisible=e.detail};this.background=undefined;this.centered=false;this.code=undefined;this.codeCssComponent=undefined;this.codeReactComponent=undefined;this.hasBorder=false;this.hasPadding=false;this.opened=false;this.stacked=false;this.styles="{}";this.themable=false;this.currentTheme="ocean";this.isCodeVisible=this.opened;this.codeType="wc"}handleSwitchCode(e){if(!this.hasCodeType(e.detail))return;this.codeType=e.detail;window.localStorage.setItem("liquid_docs_preferred_code_type",this.codeType)}unescapeCode(e){return e.replaceAll(/\\{\\{/g,"{{").replaceAll(/\\}\\}/g,"}}").replaceAll(/<span class="token punctuation">{<\/span> <span class="token punctuation">{<\/span>/g,'<span class="token punctuation">{</span><span class="token punctuation">{</span>').replaceAll(/<span class="token punctuation">}<\/span> <span class="token punctuation">}<\/span>/g,'<span class="token punctuation">}</span><span class="token punctuation">}</span>')}hasCodeType(e){if(e==="wc"){return Boolean(this.el.querySelector('[slot="code"]'))}return Array.from(this.el.querySelectorAll('[slot^="code"]')).some((o=>o.getAttribute("slot").toLowerCase()===`code${e}component`))}componentWillLoad(){const e=window.localStorage.getItem("liquid_docs_preferred_code_type");if(e){if(this.hasCodeType(e)){this.codeType=e}}this.el.querySelectorAll('[slot^="code"]').forEach((e=>{e.innerHTML=this.unescapeCode(e.innerHTML)}))}render(){const e=["docs-example",this.isCodeVisible&&"docs-example--code-visible",this.hasBorder&&"docs-example--has-border",this.hasPadding&&"docs-example--has-padding",this.codeType==="wc"&&"docs-example--web-component",this.codeType==="css"&&"docs-example--css-component",this.codeType==="react"&&"docs-example--react-component"];let o="docs-example__show";if(this.themable&&this.currentTheme){o+=" ld-theme-"+this.currentTheme.toLowerCase()}if(this.centered)o+=" docs-example__show--centered";if(this.stacked)o+=" docs-example__show--stacked";if(this.background)o+=` docs-example__show--${this.background}`;return s(l,{key:"a39eb5eb57ad7665b10d628e70eae0c2dfe77e5a",class:c(e)},s("div",{key:"dd26eed5c5c06363658d39dc5c2c0a35ea4e067c",class:o,style:JSON.parse(this.styles)},s("slot",{key:"2bbdddc2f8de0d01e49f998a614e935810c10fa4",name:"show"}),s("slot",{key:"c4f5f1d7260539091edf1ef907abc19de37f8969",name:"showCssComponent"})),s("div",{key:"5ab8191e8926c07fbc65a66a37463a5d8a533719",class:"docs-example__tools-scroll-container"},s("div",{key:"cf05ecddb772cb9ddf00c549a182911161bc2cae",class:"docs-example__tools"},(this.codeCssComponent||this.codeReactComponent)&&s("ld-switch",{onClick:()=>this.isCodeVisible=true,onLdswitchchange:e=>{this.handleSwitchCode(e);this.pickCodeType.emit(this.codeType)},class:"docs-example__tool-switch",size:"sm"},s("ld-switch-item",{value:"wc",checked:this.codeType==="wc"},s("ld-icon",{slot:"icon-start",size:"sm","aria-label":"Web Component"},s("svg",{viewBox:"0 0 800 800"},s("path",{fill:"currentColor",d:"M196.3 400l200 346.4H200L0 400 200 53.6h196.3L196.3 400zM505.4 53.6H600L800 400 600 746.4h-94.6l-98-169.8H502L604 400 502 223.4h-94.7l98-169.8z"})))),this.codeReactComponent&&s("ld-switch-item",{value:"react",checked:this.codeType==="react"},s("ld-icon",{slot:"icon-start",size:"sm","aria-label":"React component"},s("svg",{viewBox:"-11.5 -10.2 23 20.5",style:{transform:"scale(1.1)"}},s("circle",{r:"2",fill:"currentColor"}),s("g",{stroke:"currentColor",fill:"none"},s("ellipse",{rx:"11",ry:"4.2"}),s("ellipse",{rx:"11",ry:"4.2",transform:"rotate(60)"}),s("ellipse",{rx:"11",ry:"4.2",transform:"rotate(120)"}))))),this.codeCssComponent&&s("ld-switch-item",{value:"css",checked:this.codeType==="css"},s("ld-icon",{slot:"icon-start",size:"sm","aria-label":"CSS component"},s("svg",{viewBox:"0 0 800 300",style:{transform:"scale(1.2)"}},s("path",{fill:"currentColor",d:"M0 0h238.7v99.8H99.8v99.8h139v99.9H0V0zM283.2 0h235.3v85.6H381.6v17h136.9v196.9H283.2v-89.9h136.9v-17H283.2V0zM564.7 0H800v85.6H663.1v17H800v196.9H564.7v-89.9h136.9v-17H564.7V0z"}))))),s("div",{key:"acff9a8d94794d4ae9489253e88f3bb4ed9c01d1",class:"docs-example__tool-buttons"},this.themable&&s("docs-pick-theme",{onPickTheme:this.handlePickTheme}),s("docs-toggle-code",{key:"6aeb4e8f9a49f84bd95dad2dfcfa24b021e1d2fe",onToggleCode:this.handleToggleCode,isOn:this.isCodeVisible})))),s("div",{key:"76168b06733a4014eb188b88f2269a363b06c524",class:"docs-example__code"},s("div",{key:"ba1092408fff83c075db1d47536d7960d03c5c53",class:"docs-example__code-tools"},s("docs-copy-to-cb",{key:"59244953fb44106700bce75daaea5f9f57ef162b",class:"docs-example__copy-to-clipboard",textToCopy:this.unescapeCode(decodeURIComponent(this.codeType==="wc"?this.code:this.codeType==="css"?this.codeCssComponent:this.codeType==="react"?this.codeReactComponent:""))})),s("slot",{key:"23a158b6b25e34216590e7ce1f48b10111b22564",name:"code"}),s("slot",{key:"ad60860494b971f19eeb73cd9e357d05e3d91b68",name:"codeReactComponent"}),s("slot",{key:"68a991a2a23bc2a31559d79412d224c1e8549534",name:"codeCssComponent"})))}get el(){return a(this)}};r.style=t;export{r as docs_example};
//# sourceMappingURL=p-e217c607.entry.js.map