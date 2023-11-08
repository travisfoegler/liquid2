import{r as e,h as t,H as i,g as o}from"./p-32587074.js";import{g as s}from"./p-1133c92e.js";const l=':host{--ld-sidenav-toggle-outside-height:3.125rem;--ld-sidenav-toggle-outside-col:var(--ld-col-wht);--ld-sidenav-toggle-outside-bg-col:var(--ld-thm-primary);--ld-sidenav-toggle-outside-bg-col-hover:var(--ld-thm-primary-hover);--ld-sidenav-toggle-outside-bg-col-focus:var(--ld-thm-primary-focus);--ld-sidenav-toggle-outside-bg-col-active:var(--ld-thm-primary-active)}@media (prefers-reduced-motion:no-preference){:host{--ld-sidenav-transition-duration-collapse-expand:var(\n      --ld-transition-duration-normal\n    )}}:host{align-items:center;align-self:flex-start;display:flex;height:var(--ld-sidenav-toggle-outside-height);justify-content:center;position:fixed;position:var(--ld-sidenav-toggle-outside-position,fixed)}:host(.ld-sidenav-toggle-outside--left){left:0}:host(.ld-sidenav-toggle-outside--right){right:0}.ld-sidenav-toggle-outside__toggle{-webkit-touch-callout:none;align-content:center;aspect-ratio:1;background-color:initial;border:0;border-radius:var(--ld-br-l);color:var(--ld-sidenav-toggle-outside-col);cursor:pointer;display:grid;justify-content:center;margin:var(--ld-sp-2) var(--ld-sp-16) auto;outline:none;padding-bottom:0;padding-top:0;place-content:center;touch-action:manipulation;transition:visibility 0s calc(2 * var(--ld-sidenav-transition-duration-collapse-expand)) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease;visibility:hidden;will-change:transform}.ld-sidenav-toggle-outside__toggle:before{background-color:var(--ld-sidenav-toggle-outside-bg-col);border-radius:inherit;bottom:0;box-shadow:var(--ld-shadow-stacked);content:"";display:block;left:0;position:absolute;right:0;top:0}.ld-sidenav-toggle-outside__toggle:after{border-radius:inherit;bottom:calc(-1 * var(--ld-sp-6));content:"";display:block;left:calc(-1 * var(--ld-sp-6));position:absolute;right:calc(-1 * var(--ld-sp-6));top:calc(-1 * var(--ld-sp-6))}.ld-sidenav-toggle-outside__toggle:where(:focus:focus-visible){--ld-sidenav-toggle-outside-bg-col:var(\n      --ld-sidenav-toggle-outside-bg-col-focus\n    )}@media (hover:hover){.ld-sidenav-toggle-outside__toggle:where(:hover){--ld-sidenav-toggle-outside-bg-col:var(\n        --ld-sidenav-toggle-outside-bg-col-hover\n      )}}.ld-sidenav-toggle-outside__toggle:where(:active),.ld-sidenav-toggle-outside__toggle:where(:active:focus-visible){--ld-sidenav-toggle-outside-bg-col:var(\n      --ld-sidenav-toggle-outside-bg-col-active\n    )}:host(.ld-sidenav-toggle-outside--closable) .ld-sidenav-toggle-outside__toggle,:host(.ld-sidenav-toggle-outside--collapsed-fully) .ld-sidenav-toggle-outside__toggle{transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease;visibility:inherit}:host(.ld-sidenav-toggle-outside--collapsed) .ld-sidenav-toggle-outside__toggle{transform:none}:host(.ld-sidenav-toggle-outside--collapsed.ld-sidenav-toggle-outside--right) .ld-sidenav-toggle-outside__toggle{transform:translateX(calc(-1 * (var(--ld-sidenav-width) - var(--ld-sidenav-width-collapsed))))}.ld-sidenav-toggle-outside__icon{position:relative}:host(.ld-sidenav-toggle-outside--right:not(.ld-sidenav-toggle-outside--collapsed)) .ld-sidenav-toggle-outside__icon{transform:scaleX(-100%)}';const d=class{constructor(t){e(this,t);this.toggleSidenavCollapsedState=e=>{e.stopPropagation();this.sidenav.toggle()};this.labelExpand="Expand side navigation";this.ldTabindex=undefined;this.tetherOptions=undefined;this.sidenavClosable=undefined;this.sidenavCollapsed=undefined;this.sidenavCollapsedFully=undefined;this.sidenavAlignement=undefined}async focusInner(){this.toggle.focus()}handleSidenavCollapsedChange(e){if(e.target!==this.sidenav)return;this.sidenavCollapsed=e.detail.collapsed;this.sidenavCollapsedFully=e.detail.collapsed&&e.detail.fully;this.tooltipRef.hideTooltip()}handleSidenavBreakpointChange(e){if(e.target!==this.sidenav)return;this.sidenavClosable=e.detail;this.tooltipRef.hideTooltip()}componentWillLoad(){this.sidenav=this.el.nextElementSibling;if(!this.sidenav||this.sidenav.tagName!=="LD-SIDENAV"){throw new Error(`The ld-sidenav-toggle-outside component is expecting to have an ld-sidenav component as its next element sibling, but instead there was: ${this.sidenav}`)}this.sidenavAlignement=this.sidenav.align||"left"}render(){const e=s(["ld-sidenav-toggle-outside",`ld-sidenav-toggle-outside--${this.sidenavAlignement}`,this.sidenavClosable&&"ld-sidenav-toggle-outside--closable",this.sidenavCollapsedFully&&"ld-sidenav-toggle-outside--collapsed-fully"]);return t(i,{class:e},t("ld-tooltip",{arrow:true,size:"sm",ref:e=>this.tooltipRef=e,"show-delay":"1000",position:this.sidenavAlignement==="left"?"right middle":"left middle",tag:"span",tetherOptions:this.tetherOptions},t("button",{slot:"trigger",role:"switch","brand-color":true,"aria-checked":this.sidenavCollapsed?"false":"true",class:"ld-sidenav-toggle-outside__toggle",onClick:this.toggleSidenavCollapsedState,part:"toggle focusable",ref:e=>this.toggle=e,tabIndex:this.ldTabindex},t("ld-icon",{class:"ld-sidenav-toggle-outside__icon",name:"sidenav-right",part:"toggle-icon"}),t("ld-sr-only",null,this.labelExpand)),t("ld-typo",null,this.labelExpand)))}get el(){return o(this)}};d.style=l;export{d as ld_sidenav_toggle_outside};
//# sourceMappingURL=p-541b2487.entry.js.map