import{r as o,c as e,h as s,H as l,g as t}from"./p-32587074.js";import{g as a}from"./p-1133c92e.js";const c=".docs-example__code{background-color:var(--ld-col-neutral-010)}.docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-050);border-color:var(--ld-col-neutral-100)}.docs-example__tools{stroke:var(--ld-col-neutral-900)}.docs-example__copy-to-clipboard,.docs-example__tool-buttons,.docs-example__tool-switch{filter:none}@media (prefers-color-scheme:dark){.docs-example__code{background-color:var(--ld-col-neutral-900)}.docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-700);border-color:var(--ld-col-neutral-700)}.docs-example__tools{stroke:var(--ld-col-wht)}.docs-example__copy-to-clipboard,.docs-example__tool-buttons,.docs-example__tool-switch{filter:invert(1) hue-rotate(180deg)}.docs-example--has-border .docs-example__show{border-color:#0000}}.docs-ui-light .docs-example__code{background-color:var(--ld-col-neutral-010)}.docs-ui-light .docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-050);border-color:var(--ld-col-neutral-100)}.docs-ui-light .docs-example__tools{stroke:var(--ld-col-neutral-900)}.docs-ui-light .docs-example__copy-to-clipboard,.docs-ui-light .docs-example__tool-buttons,.docs-ui-light .docs-example__tool-switch{filter:none}.docs-ui-dark .docs-example__code{background-color:var(--ld-col-neutral-900)}.docs-ui-dark .docs-example__tools-scroll-container{background-color:var(--ld-col-neutral-700);border-color:var(--ld-col-neutral-700)}.docs-ui-dark .docs-example__tools{stroke:var(--ld-col-wht)}.docs-ui-dark .docs-example__copy-to-clipboard,.docs-ui-dark .docs-example__tool-buttons,.docs-ui-dark .docs-example__tool-switch{filter:invert(1) hue-rotate(180deg)}.docs-ui-dark .docs-example--has-border .docs-example__show{border-color:#0000}.docs-example{display:block}.docs-example__code{display:none;overflow:hidden;position:relative}.docs-example__code,.docs-example__code pre{border-bottom-left-radius:var(--ld-br-l);border-bottom-right-radius:var(--ld-br-l)}.docs-example__tools-scroll-container{border-bottom-left-radius:var(--ld-br-l);border-bottom-right-radius:var(--ld-br-l);border-style:solid;border-width:var(--ld-sp-1);display:flex;overflow:auto;position:relative;width:100%}.docs-example__tools{align-items:center;display:flex;flex-grow:1;justify-content:space-between;line-height:0;padding:var(--ld-sp-8)}.docs-example__tool-switch{background-color:var(--ld-col-wht);border-radius:calc(var(--ld-br-m) + 1px)}.docs-example__tool-buttons{align-items:center;display:flex;flex:1 0;justify-content:flex-end}.docs-example__tool-buttons>:not(:first-child){margin-left:var(--ld-sp-12)}.docs-example__show{background-color:var(--ld-col-neutral-010);border-bottom-width:0;border-top-left-radius:var(--ld-br-l);border-top-right-radius:var(--ld-br-l);color:var(--ld-col-neutral-900);color-scheme:light;overflow:hidden;will-change:transform}.docs-example--has-border .docs-example__show{border:var(--ld-sp-1) solid var(--ld-col-neutral-100);border-bottom:0}.docs-example--has-padding .docs-example__show{padding:0 var(--ld-sp-8) var(--ld-sp-24)}@media (max-width:52rem){.docs-example--has-padding .docs-example__show{padding:0 0 var(--ld-sp-24)}}.docs-example--has-padding .docs-example__show>div>:not(.ld-modal){margin:var(--ld-sp-24) var(--ld-sp-24) 0;max-width:calc(100% - 2 * var(--ld-sp-24))}.docs-example__show>div{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:space-evenly;width:100%}.docs-example__show--centered>div{align-items:center}.docs-example__show--stacked>div{flex-direction:column}.docs-example__show--stacked:not(.docs-example__show--centered)>div{align-items:stretch}.docs-example__show--brand{border-color:#0000}.docs-example__show--brand.ld-theme-ocean{background-color:var(--ld-thm-ocean-primary)}.docs-example__show--brand.ld-theme-bubblegum,.docs-example__show--brand.ld-theme-shake,.docs-example__show--brand.ld-theme-solvent{background-color:var(--ld-thm-shake-primary)}.docs-example__show--brand.ld-theme-tea{background-color:var(--ld-thm-tea-primary)}.docs-example__show--light{background-color:var(--ld-col-wht)}.docs-example--code-visible .docs-example__tools-scroll-container{border-radius:0}.docs-example--code-visible .docs-example__code{display:block}.docs-example--css-component [slot=codeReactComponent],.docs-example--css-component [slot=code],.docs-example--css-component [slot=show],.docs-example--react-component [slot=codeCssComponent],.docs-example--react-component [slot=code],.docs-example--react-component [slot=showCssComponent],.docs-example--web-component [slot=codeCssComponent],.docs-example--web-component [slot=codeReactComponent],.docs-example--web-component [slot=showCssComponent]{display:none}.docs-example__code-tools{grid-gap:var(--ld-sp-8);display:grid;gap:var(--ld-sp-8);grid-auto-flow:column;margin:var(--ld-sp-2) var(--ld-sp-1);position:absolute;right:var(--ld-sp-8);top:var(--ld-sp-8)}.docs-example__copy-to-clipboard{background-color:var(--ld-col-wht);border-radius:var(--ld-br-m)}";const d=class{constructor(s){o(this,s);this.pickCodeType=e(this,"pickCodeType",7);this.handlePickTheme=o=>{this.currentTheme=o.detail};this.handleToggleCode=o=>{this.isCodeVisible=o.detail};this.background=undefined;this.centered=false;this.code=undefined;this.codeCssComponent=undefined;this.codeReactComponent=undefined;this.hasBorder=false;this.hasPadding=false;this.opened=false;this.stacked=false;this.styles="{}";this.themable=false;this.currentTheme="ocean";this.isCodeVisible=this.opened;this.codeType="wc"}handleSwitchCode(o){if(!this.hasCodeType(o.detail))return;this.codeType=o.detail;window.localStorage.setItem("liquid_docs_preferred_code_type",this.codeType)}unescapeCode(o){return o.replaceAll(/\\{\\{/g,"{{").replaceAll(/\\}\\}/g,"}}").replaceAll(/<span class="token punctuation">{<\/span> <span class="token punctuation">{<\/span>/g,'<span class="token punctuation">{</span><span class="token punctuation">{</span>').replaceAll(/<span class="token punctuation">}<\/span> <span class="token punctuation">}<\/span>/g,'<span class="token punctuation">}</span><span class="token punctuation">}</span>')}hasCodeType(o){if(o==="wc"){return Boolean(this.el.querySelector('[slot="code"]'))}return Array.from(this.el.querySelectorAll('[slot^="code"]')).some((e=>e.getAttribute("slot").toLowerCase()===`code${o}component`))}componentWillLoad(){const o=window.localStorage.getItem("liquid_docs_preferred_code_type");if(o){if(this.hasCodeType(o)){this.codeType=o}}this.el.querySelectorAll('[slot^="code"]').forEach((o=>{o.innerHTML=this.unescapeCode(o.innerHTML)}))}render(){const o=["docs-example",this.isCodeVisible&&"docs-example--code-visible",this.hasBorder&&"docs-example--has-border",this.hasPadding&&"docs-example--has-padding",this.codeType==="wc"&&"docs-example--web-component",this.codeType==="css"&&"docs-example--css-component",this.codeType==="react"&&"docs-example--react-component"];let e="docs-example__show";if(this.themable&&this.currentTheme){e+=" ld-theme-"+this.currentTheme.toLowerCase()}if(this.centered)e+=" docs-example__show--centered";if(this.stacked)e+=" docs-example__show--stacked";if(this.background)e+=` docs-example__show--${this.background}`;return s(l,{class:a(o)},s("div",{class:e,style:JSON.parse(this.styles)},s("slot",{name:"show"}),s("slot",{name:"showCssComponent"})),s("div",{class:"docs-example__tools-scroll-container"},s("div",{class:"docs-example__tools"},(this.codeCssComponent||this.codeReactComponent)&&s("ld-switch",{onClick:()=>this.isCodeVisible=true,onLdswitchchange:o=>{this.handleSwitchCode(o);this.pickCodeType.emit(this.codeType)},class:"docs-example__tool-switch",size:"sm"},s("ld-switch-item",{value:"wc",checked:this.codeType==="wc"},s("ld-icon",{slot:"icon-start",size:"sm","aria-label":"Web Component"},s("svg",{viewBox:"0 0 800 800"},s("path",{fill:"currentColor",d:"M196.3 400l200 346.4H200L0 400 200 53.6h196.3L196.3 400zM505.4 53.6H600L800 400 600 746.4h-94.6l-98-169.8H502L604 400 502 223.4h-94.7l98-169.8z"})))),this.codeReactComponent&&s("ld-switch-item",{value:"react",checked:this.codeType==="react"},s("ld-icon",{slot:"icon-start",size:"sm","aria-label":"React component"},s("svg",{viewBox:"-11.5 -10.2 23 20.5",style:{transform:"scale(1.1)"}},s("circle",{r:"2",fill:"currentColor"}),s("g",{stroke:"currentColor",fill:"none"},s("ellipse",{rx:"11",ry:"4.2"}),s("ellipse",{rx:"11",ry:"4.2",transform:"rotate(60)"}),s("ellipse",{rx:"11",ry:"4.2",transform:"rotate(120)"}))))),this.codeCssComponent&&s("ld-switch-item",{value:"css",checked:this.codeType==="css"},s("ld-icon",{slot:"icon-start",size:"sm","aria-label":"CSS component"},s("svg",{viewBox:"0 0 800 300",style:{transform:"scale(1.2)"}},s("path",{fill:"currentColor",d:"M0 0h238.7v99.8H99.8v99.8h139v99.9H0V0zM283.2 0h235.3v85.6H381.6v17h136.9v196.9H283.2v-89.9h136.9v-17H283.2V0zM564.7 0H800v85.6H663.1v17H800v196.9H564.7v-89.9h136.9v-17H564.7V0z"}))))),s("div",{class:"docs-example__tool-buttons"},this.themable&&s("docs-pick-theme",{onPickTheme:this.handlePickTheme}),s("docs-toggle-code",{onToggleCode:this.handleToggleCode,isOn:this.isCodeVisible})))),s("div",{class:"docs-example__code"},s("div",{class:"docs-example__code-tools"},s("docs-copy-to-cb",{class:"docs-example__copy-to-clipboard",textToCopy:this.unescapeCode(decodeURIComponent(this.codeType==="wc"?this.code:this.codeType==="css"?this.codeCssComponent:this.codeType==="react"?this.codeReactComponent:""))})),s("slot",{name:"code"}),s("slot",{name:"codeReactComponent"}),s("slot",{name:"codeCssComponent"})))}get el(){return t(this)}};d.style=c;export{d as docs_example};
//# sourceMappingURL=p-c1ba1c34.entry.js.map