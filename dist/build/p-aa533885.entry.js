import{r as a,h as i,H as n,g as s}from"./p-765a6fc5.js";import{g as t}from"./p-891005fd.js";import{c as o}from"./p-dfb8e7ac.js";const e=class{constructor(i){a(this,i),this.toggleVisibilityOnHidableContent=a=>{Array.from(this.el.children).forEach((i=>{["LD-SIDENAV-ACCORDION","LD-SIDENAV-NAVITEM","LD-SIDENAV-SEPARATOR","LD-SIDENAV-SUBNAV"].includes(i.tagName)||i.classList.toggle("ld-sidenav-subnav__hidden",!a)}))},this.activeBeforeTransition=!1,this.active=!1,this.ancestor=!1,this.label=void 0,this.hasParentSubnav=void 0}async scrollToTop(a=!1){this.scrollerRef.scrollToTop(a)}onActiveChange(a){var i;a&&(null===(i=this.scrollerRef)||void 0===i||i.updateShadows())}onActiveBeforeTransitionChange(a){this.updateBackground(a)}updateBackground(a){setTimeout((()=>{this.bgRef.classList.toggle("ld-sidenav-subnav__background--active",a)}),20)}handleSidenavCollapsedChange(a){a.target===this.sidenav&&(a.detail.collapsed?(this.scrollToTop(!0),this.toggleVisibilityOnHidableContent(!1)):this.toggleVisibilityOnHidableContent(!0))}handleSidenavBreakpointChange(a){a.target===this.sidenav&&this.toggleVisibilityOnHidableContent(!!a.detail||!this.sidenav.collapsed)}componentWillLoad(){this.sidenav=o("ld-sidenav",this.el),this.hasParentSubnav="LD-SIDENAV-SUBNAV"===this.el.parentElement.tagName}render(){const a=t(["ld-sidenav-subnav",this.active&&"ld-sidenav-subnav--active",this.hasParentSubnav&&"ld-sidenav-subnav--has-parent-subnav"]);return i(n,{class:a},i("div",{ref:a=>this.bgRef=a,class:"ld-sidenav-subnav__background"}),i("ld-sidenav-scroller-internal",{style:{visibility:!this.active||this.ancestor?"hidden":"visible"},part:"scroll-container",ref:a=>this.scrollerRef=a},i("slot",null)))}get el(){return s(this)}static get watchers(){return{active:["onActiveChange"],activeBeforeTransition:["onActiveBeforeTransitionChange"]}}};e.style=':host{--ld-sidenav-accordion-bg-col-hover:var(--ld-col-neutral-100);background:var(\n    --ld-sidenav-bg-color\n  );display:none;height:100%;position:absolute;top:0;transform:translateX(100%);visibility:hidden;width:100%;z-index:1}:host(.ld-sidenav-subnav--active){display:block}:host ::slotted(:where(:not(ld-sidenav-separator):not(ld-sidenav-navitem):not(ld-sidenav-subnav))){margin-bottom:var(--ld-sidenav-padding-y);transition:var(--ld-sidenav-collapse-content-transition);will-change:opacity,transform}:host ::slotted(.ld-sidenav-subnav__hidden){opacity:0;transform:translateX(var(--ld-sidenav-translate-x-delta));transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,visibility 0s var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease;visibility:hidden}:host ::slotted(.ld-sidenav-accordion){transform:none}.ld-sidenav-subnav__background{background-color:var(--ld-sidenav-bg-color);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity var(--ld-sidenav-transition-duration) linear}.ld-sidenav-subnav__background:before{background-color:var(--ld-sidenav-subnav-bg-color);bottom:0;content:"";left:0;position:absolute;right:0;top:0}.ld-sidenav-subnav__background--active{opacity:1}:host(.ld-sidenav-subnav--has-parent-subnav) .ld-sidenav-subnav__background{opacity:1}';export{e as ld_sidenav_subnav}