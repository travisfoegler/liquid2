import{r as i,c as o,h as a,H as d,g as n}from"./p-183495a2.js";import{c as e}from"./p-82e9a1aa.js";import{g as r}from"./p-1133c92e.js";import{t}from"./p-f21e937f.js";const c='.ld-sidenav-accordion__accordion{--ld-accordion-bg-col:#0000;--ld-accordion-bg-col-active:var(--ld-thm-primary-alpha-low);--ld-accordion-bg-col-disabled:#0000;--ld-accordion-bg-col-focus:var(--ld-thm-primary-alpha-low);--ld-accordion-panel-border-top-col:#0000;--ld-accordion-padding-x:var(--ld-sidenav-padding-x);--ld-accordion-padding-y:0;--ld-accordion-toggle-indicator-bg-col:#0000;--ld-accordion-toggle-indicator-bg-col-active:var(--ld-thm-primary);--ld-accordion-toggle-indicator-bg-col-hover:var(--ld-col-neutral-100);--ld-accordion-toggle-indicator-bg-col-focus:var(--ld-thm-primary-focus);--ld-accordion-toggle-size:var(--ld-sidenav-navitem-icon-size);--ld-sidenav-navitem-tertiary-indent:calc(2 * var(--ld-sp-16) + 0.3125rem);transform:translateY(0);transform:translateY(var(\n      --ld-sidenav-navitem-move-up-closable,var(--ld-sidenav-navitem-move-up,0)\n    ));transition:var(--ld-sidenav-stack-to-top-transition)}:host(.ld-sidenav-accordion--collapsed) .ld-sidenav-accordion__accordion{pointer-events:none;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}:host(.ld-sidenav-accordion--in-accordion) .ld-sidenav-accordion__accordion{--ld-accordion-padding-x:0;margin:var(--ld-sp-6) calc(-1 * var(--ld-sidenav-padding-x)) var(--ld-sp-6) 0}:host(.ld-sidenav-accordion--in-accordion) .ld-sidenav-accordion__accordion .ld-sidenav-accordion__accordion-panel{padding:0 var(--ld-sidenav-padding-x) 0 0}:host(:not(.ld-sidenav-accordion--transitions-enabled)) .ld-sidenav-accordion__accordion .ld-sidenav-accordion__accordion-panel{--ld-accordion-panel-transition-duration:0.0001s}.ld-sidenav-accordion__accordion-panel{padding:0 var(--ld-sidenav-padding-x)}.ld-sidenav-accordion__accordion-panel::part(content){padding:var(--ld-sidenav-navitem-bg-inset) 0}.ld-sidenav-accordion__accordion-toggle{pointer-events:none}.ld-sidenav-accordion__accordion-toggle::part(toggle):before{display:none}.ld-sidenav-accordion__accordion-toggle::part(label){--ld-accordion-bg-col-hover:#0000;padding-right:var(--ld-sidenav-padding-x)}.ld-sidenav-accordion__accordion-toggle::part(label):before{display:none}@media (hover:hover){.ld-sidenav-accordion__accordion-toggle:where(:hover){--ld-accordion-toggle-indicator-bg-col:var(--ld-col-neutral-100)}}.ld-sidenav-accordion__accordion-toggle::part(trigger){--ld-accordion-bg-col-hover:var(\n      --ld-sidenav-accordion-bg-col-hover,var(--ld-col-neutral-050)\n    );border-radius:var(--ld-sidenav-navitem-border-radius);outline:none;pointer-events:none;right:var(--ld-sidenav-padding-x);transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-accordion__accordion-toggle::part(trigger):before{background-color:var(--ld-accordion-toggle-indicator-bg-col);border-radius:inherit;bottom:0;left:0;right:0;top:0;z-index:1}.ld-sidenav-accordion__accordion-toggle::part(trigger):after{background-color:var(--ld-col-wht);border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;visibility:hidden}.ld-sidenav-accordion__accordion-toggle::part(trigger):active{--ld-accordion-toggle-indicator-bg-col:var(\n        --ld-accordion-toggle-indicator-bg-col-active\n      )}.ld-sidenav-accordion__accordion-toggle::part(trigger):active:before{opacity:.3}@media (hover:hover){.ld-sidenav-accordion__accordion-toggle::part(trigger):where(:hover){--ld-accordion-toggle-indicator-bg-col:var(\n          --ld-accordion-toggle-indicator-bg-col-hover\n        )}.ld-sidenav-accordion__accordion-toggle::part(trigger):where(:hover):after{visibility:inherit}}.ld-sidenav-accordion__accordion-toggle::part(trigger):focus:focus-visible{--ld-accordion-toggle-indicator-bg-col:var(\n        --ld-accordion-toggle-indicator-bg-col-focus\n      )}.ld-sidenav-accordion__accordion-toggle::part(trigger):focus:focus-visible:before{opacity:.3}.ld-sidenav-accordion__accordion-toggle::part(trigger):focus:focus-visible:after{visibility:inherit}.ld-sidenav-accordion__accordion-toggle::part(trigger):focus:focus-visible:active{--ld-accordion-toggle-indicator-bg-col:var(\n          --ld-accordion-toggle-indicator-bg-col-active\n        )}.ld-sidenav-accordion__accordion-toggle::part(trigger):focus:focus-visible:active:before{opacity:.3}:host(.ld-sidenav-accordion--rounded) .ld-sidenav-accordion__accordion-toggle::part(trigger){border-radius:var(--ld-br-full)}:host(.ld-sidenav-accordion--no-icon) .ld-sidenav-accordion__accordion-toggle::part(trigger):after,:host(.ld-sidenav-accordion--no-icon) .ld-sidenav-accordion__accordion-toggle::part(trigger):before{transform:scale(.8)}.ld-sidenav-accordion__accordion-toggle::part(trigger-content){transform:none;z-index:2}:host(.ld-sidenav-accordion--collapsed) .ld-sidenav-accordion__accordion-toggle::part(trigger){opacity:0;transform:translateX(var(--ld-sidenav-translate-x-delta));transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,visibility 0s var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease;visibility:hidden}:host(.ld-sidenav-accordion--split) .ld-sidenav-accordion__accordion-toggle::part(trigger){pointer-events:auto}::slotted(ld-sidenav-navitem){--ld-sidenav-navitem-bg-right-x-delta:var(--ld-accordion-toggle-size);--ld-sidenav-navitem-bg-width:calc(100% + var(--ld-accordion-toggle-size) + var(--ld-sidenav-navitem-bg-inset) * 2);position:relative;z-index:1}::slotted(ld-sidenav-navitem:not(:first-of-type)){margin:var(--ld-sp-16) 0}::slotted(ld-sidenav-navitem:last-of-type){margin-bottom:0}';const l=class{constructor(a){i(this,a);this.ldSidenavAccordionTransitionEnd=o(this,"ldSidenavAccordionTransitionEnd",7);this.onTransitionEnd=i=>{if(i.target===this.panelRef){this.ldSidenavAccordionTransitionEnd.emit()}};this.updateStackToTop=()=>{if(this.sidenavClosable){t(this.el,false)}else{t(this.el,this.sidenav.narrow&&this.sidenavCollapsed)}};this.expandOnSidenavExpansion=undefined;this.inAccordion=undefined;this.noIcon=undefined;this.rounded=undefined;this.sidenavClosable=undefined;this.sidenavCollapsed=undefined;this.transitionsEnabled=true;this.expanded=undefined;this.preserveState=true;this.split=undefined}handleSidenavBreakpointChange(i){if(i.target!==this.sidenav)return;this.sidenavClosable=i.detail;this.updateStackToTop()}handleSidenavSliderChange(i){if(i.target.closest("ld-sidenav")!==this.sidenav){return}if(!this.preserveState){this.sectionRef.expanded=false;this.expanded=false}this.transitionsEnabled=false;setTimeout((()=>{this.transitionsEnabled=true}),200)}handleSidenavCollapsedChange(i){if(i.target!==this.sidenav)return;this.sidenavCollapsed=i.detail.collapsed;this.updateStackToTop();if(this.sidenavCollapsed){if(this.preserveState){this.expandOnSidenavExpansion=this.sectionRef.expanded}this.sectionRef.expanded=false;this.expanded=false}else{if(this.expandOnSidenavExpansion){this.sectionRef.expanded=true;this.expanded=true}}}handleExpandedChange(i){this.sectionRef.expanded=i}componentWillLoad(){this.inAccordion=this.el.parentElement.tagName==="LD-SIDENAV-ACCORDION";this.rounded=!!this.el.querySelector('ld-sidenav-navitem[slot="toggle"][rounded]');this.noIcon=!!this.el.querySelector('ld-sidenav-navitem[slot="toggle"][mode="secondary"],ld-sidenav-navitem[slot="toggle"][mode="tertiary"]');this.sidenav=e("ld-sidenav",this.el);if(this.sidenav){this.sidenavCollapsed=this.sidenav.collapsed}}componentDidLoad(){setTimeout((()=>{this.updateStackToTop()}))}render(){const i=r(["ld-sidenav-accordion",this.noIcon&&"ld-sidenav-accordion--no-icon",this.rounded&&"ld-sidenav-accordion--rounded",this.inAccordion&&"ld-sidenav-accordion--in-accordion",this.transitionsEnabled&&"ld-sidenav-accordion--transitions-enabled",this.sidenavCollapsed&&!this.sidenavClosable&&"ld-sidenav-accordion--collapsed",this.split&&"ld-sidenav-accordion--split"]);return a(d,{class:i},a("ld-accordion",{class:"ld-sidenav-accordion__accordion"},a("ld-accordion-section",{expanded:this.expanded,ref:i=>this.sectionRef=i,class:"ld-sidenav-accordion__accordion-section"},a("ld-accordion-toggle",{labelTag:"div",class:"ld-sidenav-accordion__accordion-toggle",split:this.split,"ld-tabindex":"-1"},a("slot",{name:"toggle"})),a("ld-accordion-panel",{ref:i=>this.panelRef=i,onTransitionEnd:this.onTransitionEnd,class:"ld-sidenav-accordion__accordion-panel"},a("slot",null)))))}get el(){return n(this)}static get watchers(){return{expanded:["handleExpandedChange"]}}};l.style=c;export{l as ld_sidenav_accordion};
//# sourceMappingURL=p-61906d7b.entry.js.map