import{r as a,c as i,h as e,g as n}from"./p-24a1cdec.js";import{g as t}from"./p-891005fd.js";import{c as d}from"./p-dfb8e7ac.js";import{t as s}from"./p-9dc9d2d6.js";const r=class{constructor(e){a(this,e),this.ldSidenavNavitemTo=i(this,"ldSidenavNavitemTo",7),this.ldSidenavNavitemClick=i(this,"ldSidenavNavitemClick",7),this.active=!1,this.rounded=!1,this.getabbreviation=()=>{try{const a=this.el.textContent.trim().split(" "),i=a.length>1?a.map((a=>{const i=a.match(/[a-zA-Z]/);return i&&i[0]||""})):a[0].match(/[a-zA-Z]/g);return i.filter((a=>a)).slice(0,i.slice(0,2).some((a=>"m"===a.toLowerCase()))?1:2).join("").toUpperCase()}catch(a){return""}},this.onMouseDown=a=>{var i;a&&0!==a.button||(this.to?this.ldSidenavNavitemTo.emit({id:this.to,label:this.el.textContent}):"LD-SIDENAV-ACCORDION"===this.el.parentElement.tagName&&!1!==this.expandOnClick&&this.sidenavCollapsed&&(this.el.parentElement.expanded=!0),this.ldSidenavNavitemClick.emit(),null===(i=this.tooltipRef)||void 0===i||i.hideTooltip(),(this.expandOnClick||(this.to||"LD-SIDENAV-ACCORDION"===this.el.parentElement.tagName)&&!1!==this.expandOnClick)&&(this.sidenav.collapsed=!1))},this.onKeyDown=a=>{[" ","Enter"].includes(a.key)&&this.sidenavCollapsed&&(a.preventDefault(),this.onMouseDown())},this.onTooltipClick=a=>{a.stopPropagation()},this.updateTooltipIcon=()=>{var a;const i=this.el.closest('[class*="ld-theme-"]');i&&(this.themeClass=i.classList.toString().split(" ").find((a=>a.startsWith("ld-theme-"))),this.secondaryIconHTML=null===(a=this.el.querySelector('[slot="icon-secondary"]'))||void 0===a?void 0:a.outerHTML)}}async focusInner(){var a;null===(a=this.focusableElement)||void 0===a||a.focus()}handleSidenavCollapsedChange(a){var i;a.target===this.sidenav&&(this.sidenavCollapsed=a.detail,this.sidenav.narrow&&s(this.el,this.sidenavCollapsed),null===(i=this.tooltipRef)||void 0===i||i.hideTooltip())}handleSidenavBreakpointChange(a){a.target===this.sidenav&&(this.sidenavClosable=a.detail)}componentWillLoad(){this.inAccordion="LD-SIDENAV-ACCORDION"===this.el.parentElement.tagName,this.isAccordionToggle=this.inAccordion&&"toggle"===this.el.getAttribute("slot"),this.sidenav=d("ld-sidenav",this.el),this.sidenav&&(this.sidenavAlignement=this.sidenav.align,this.sidenavExpandsOnMouseEnter="mouseenter"===this.sidenav.expandTrigger),["secondary","tertiary"].includes(this.mode)||(this.tooltipContent=this.el.textContent.trim(),this.el.querySelector('[slot="icon"]')||(this.abbreviation=this.getabbreviation()))}componentDidLoad(){setTimeout((()=>{this.slotContainerRef.style.boxSizing="border-box"})),setTimeout((()=>{this.slotContainerRef.style.alignItems="center"}),200)}render(){const a=t(["ld-sidenav-navitem",this.active&&"ld-sidenav-navitem--active",this.inAccordion&&"ld-sidenav-navitem--in-accordion",this.rounded&&"ld-sidenav-navitem--rounded",this.mode&&`ld-sidenav-navitem--${this.mode}`,this.sidenavCollapsed&&!this.sidenavClosable&&"ld-sidenav-navitem--collapsed"]),i={color:"var(--ld-thm-primary)",display:"inline-flex",marginLeft:"var(--ld-sp-6)"};return e(this.href?"a":"button",{part:"navitem focusable",class:a,href:this.href,ref:a=>this.focusableElement=a,rel:"_blank"===this.target?"noreferrer noopener":void 0,onMouseDown:this.onMouseDown,onKeyDown:this.onKeyDown,"aria-haspopup":this.to||this.isAccordionToggle?"true":void 0,tabIndex:this.ldTabindex},e("div",{class:"ld-sidenav-navitem__bg",part:"bg"},e("div",{class:"ld-sidenav-navitem__bg-left"}),e("div",{class:"ld-sidenav-navitem__bg-center"}),e("div",{class:"ld-sidenav-navitem__bg-right"})),e("div",{class:"ld-sidenav-navitem__dot",part:"dot"}),e("div",{class:"ld-sidenav-navitem__slot-container-icon",role:"presentation",part:"slot-container-icon"},e("slot",{name:"icon"}),this.abbreviation&&e("span",{class:"ld-sidenav-navitem__abbr",part:"abbreviation"},this.abbreviation),e("ld-tooltip",{arrow:!0,size:"sm",class:"ld-sidenav-navitem__tooltip",disabled:!this.sidenavCollapsed,ref:a=>this.tooltipRef=a,"show-delay":"250",onMouseEnter:this.updateTooltipIcon,onClick:this.onTooltipClick,position:"left"===this.sidenavAlignement?"right middle":"left middle",tag:"span"},e("div",{class:"ld-sidenav-navitem__tooltip-trigger",slot:"trigger"}),e("div",{class:this.themeClass,style:{display:"grid",gridAutoFlow:"column",alignItems:"center"}},e("ld-typo",null,this.tooltipContent),this.to?e("ld-icon",{style:i,name:"real-arrow"}):this.secondaryIconHTML&&e("span",{style:i,innerHTML:this.secondaryIconHTML})))),e("div",{class:"ld-sidenav-navitem__slot-container",part:"slot-container",ref:a=>this.slotContainerRef=a},e("slot",null)),e("div",{class:"ld-sidenav-navitem__slot-icon-secondary-container"},this.to?e("ld-icon",{class:"ld-sidenav-navitem__icon-to",name:"real-arrow"}):e("slot",{name:"icon-secondary"})))}get el(){return n(this)}};r.style=':host{display:flex}:host([slot=toggle]) .ld-sidenav-navitem__bg{width:var(--ld-sidenav-navitem-bg-width)}.ld-sidenav-navitem{--ld-sidenav-navitem-active-indicator-border-width:0.1875rem;--ld-sidenav-navitem-border-radius:var(--ld-br-l);--ld-sidenav-navitem-height:var(--ld-sp-32);--ld-sidenav-navitem-icon-font-size:1rem;--ld-sidenav-navitem-col:var(--ld-col-neutral-800);--ld-sidenav-navitem-col-active:var(--ld-thm-primary-active);--ld-sidenav-navitem-col-hover:var(--ld-thm-primary);--ld-sidenav-navitem-col-focus:var(--ld-thm-primary);--ld-sidenav-navitem-indicator-col:#0000;--ld-sidenav-navitem-indicator-col-focus:var(--ld-thm-primary-focus);--ld-sidenav-navitem-secondary-icon-color:var(--ld-thm-primary);-webkit-touch-callout:none;align-items:center;background-color:initial;border:0;box-sizing:border-box;color:var(--ld-sidenav-navitem-col);cursor:pointer;display:flex;flex-grow:1;font:var(--ld-typo-body-s);margin:0 var(--ld-sidenav-padding-x);outline:none;padding:0;position:relative;text-align:left;text-decoration:none;touch-action:manipulation;-webkit-user-select:none;user-select:none}.ld-sidenav-navitem:not(.ld-sidenav-navitem--secondary):not(.ld-sidenav-navitem--tertiary):not(.ld-sidenav-navitem--in-accordion){transform:translateY(var(--ld-slider-navitem-move-up,0));transition:transform var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) ease}.ld-sidenav-navitem.ld-sidenav-navitem--collapsed.ld-sidenav-navitem--secondary,.ld-sidenav-navitem.ld-sidenav-navitem--collapsed.ld-sidenav-navitem--tertiary{transition:visibility 0s calc(var(--ld-sidenav-transition-duration-collapse-expand)*2) linear;visibility:hidden}.ld-sidenav-navitem.ld-sidenav-navitem--collapsed:not(.ld-sidenav-navitem--secondary):not(.ld-sidenav-navitem--tertiary){transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__bg{transform:translateX(calc(var(--ld-sidenav-width) - var(--ld-sidenav-width-collapsed)))}.ld-sidenav-navitem--in-accordion{margin:0}.ld-sidenav-navitem--active{--ld-sidenav-navitem-col:var(--ld-thm-primary);font-weight:700}.ld-sidenav-navitem--active .ld-sidenav-navitem__slot-container-icon:before{border:solid var(--ld-sidenav-navitem-active-indicator-border-width) var(--ld-col-wht);content:"";position:absolute}.ld-sidenav-navitem--active .ld-sidenav-navitem__slot-container-icon:after,.ld-sidenav-navitem--active .ld-sidenav-navitem__slot-container-icon:before{border-radius:calc(var(--ld-sidenav-navitem-active-indicator-border-width) + var(--ld-sidenav-navitem-border-radius));inset:calc(var(--ld-sidenav-navitem-active-indicator-border-width)*-1)}.ld-sidenav-navitem--active .ld-sidenav-navitem__slot-container-icon:after{box-shadow:var(--ld-shadow-sticky)}.ld-sidenav-navitem:active{--ld-sidenav-navitem-col:var(--ld-thm-primary-active)}.ld-sidenav-navitem:active .ld-sidenav-navitem__slot-container-icon:after{box-shadow:var(--ld-shadow-active)}.ld-sidenav-navitem--rounded{--ld-sidenav-navitem-border-radius:calc(var(--ld-sidenav-navitem-icon-size)*0.5)}@media (hover:hover){.ld-sidenav-navitem:where(:hover){--ld-sidenav-navitem-col:var(--ld-sidenav-navitem-col-hover);--ld-sidenav-navitem-indicator-col:var(--ld-col-neutral-300)}.ld-sidenav-navitem:where(:hover) .ld-sidenav-navitem__slot-container-icon:after{box-shadow:var(--ld-shadow-sticky)}}.ld-sidenav-navitem:focus{--ld-sidenav-navitem-col:var(--ld-sidenav-navitem-col-focus);--ld-sidenav-navitem-indicator-col:var(\n      --ld-sidenav-navitem-indicator-col-focus\n    )}.ld-sidenav-navitem:focus .ld-sidenav-navitem__slot-container-icon:after{box-shadow:var(--ld-shadow-sticky)}.ld-sidenav-navitem:focus:active{--ld-sidenav-navitem-col:var(--ld-sidenav-navitem-col-active)}.ld-sidenav-navitem:focus:active .ld-sidenav-navitem__slot-container-icon:after{box-shadow:var(--ld-shadow-active)}.ld-sidenav-navitem--tertiary{gap:0;margin-left:var(--ld-sidenav-navitem-tertiary-indent);width:var(--ld-sidenav-navitem-tertiary-width)}.ld-sidenav-navitem__bg{display:block;inset:calc(var(--ld-sidenav-navitem-bg-inset)*-1);opacity:.2;pointer-events:none;position:absolute;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem__bg-center,.ld-sidenav-navitem__bg-left,.ld-sidenav-navitem__bg-right{background-color:var(--ld-sidenav-navitem-indicator-col);bottom:0;pointer-events:all;position:absolute;top:0;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem__bg-left,.ld-sidenav-navitem__bg-right{width:calc(var(--ld-sidenav-navitem-icon-size)*.5 + var(--ld-sp-6))}.ld-sidenav-navitem__bg-left{border-bottom-left-radius:calc(var(--ld-sidenav-navitem-border-radius) + var(--ld-sp-6));border-top-left-radius:calc(var(--ld-sidenav-navitem-border-radius) + var(--ld-sp-6));left:0}.ld-sidenav-navitem__bg-right{border-bottom-right-radius:calc(var(--ld-sidenav-navitem-border-radius) + var(--ld-sp-6));border-top-right-radius:calc(var(--ld-sidenav-navitem-border-radius) + var(--ld-sp-6));right:0}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__bg-right{transform:translateX(calc(var(--ld-sidenav-translate-x-delta)*-1))}.ld-sidenav-navitem--collapsed.ld-sidenav-navitem--in-accordion .ld-sidenav-navitem__bg-right{transform:translateX(calc((var(--ld-sidenav-translate-x-delta) - var(--ld-sidenav-navitem-icon-size) + var(--ld-sidenav-navitem-bg-right-x-delta, 0px))*-1))}.ld-sidenav-navitem__bg-center{left:calc(var(--ld-sidenav-navitem-icon-size)*.5 + var(--ld-sp-6));right:calc(var(--ld-sidenav-navitem-icon-size)*.5 + var(--ld-sp-6));transform-origin:left}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__bg-center{transform:scaleX(0)}.ld-sidenav-navitem__dot,.ld-sidenav-navitem__slot-container,.ld-sidenav-navitem__slot-container-icon{position:relative;z-index:0}.ld-sidenav-navitem__dot{align-self:center;display:none;flex-shrink:0;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__dot{opacity:0;transform:translateX(var(--ld-sidenav-translate-x-delta));transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem--secondary .ld-sidenav-navitem__dot,.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__dot{align-items:center;display:flex;justify-content:center;padding:var(--ld-sp-8) 0}.ld-sidenav-navitem--secondary .ld-sidenav-navitem__dot:before,.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__dot:before{aspect-ratio:1;background-color:var(\n        --ld-sidenav-navitem-icon-bg-col,var(--ld-thm-primary)\n      );border-radius:var(--ld-br-s);content:"";display:block;width:var(--ld-sp-8)}.ld-sidenav-navitem--rounded.ld-sidenav-navitem--secondary .ld-sidenav-navitem__dot:before,.ld-sidenav-navitem--rounded.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__dot:before{border-radius:var(--ld-br-full)}.ld-sidenav-navitem--secondary .ld-sidenav-navitem__dot{width:var(--ld-sidenav-navitem-icon-size)}.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__dot{width:calc(var(--ld-sidenav-navitem-icon-size) - var(--ld-sp-6))}.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__dot:before{background-color:initial;box-shadow:inset 0 0 0 var(--ld-sp-2) var(--ld-sidenav-navitem-icon-bg-col,var(--ld-thm-primary))}.ld-sidenav-navitem__slot-container-icon{align-items:center;background-color:var(\n    --ld-sidenav-navitem-icon-bg-col,var(--ld-thm-primary)\n  );border-radius:var(--ld-sidenav-navitem-border-radius);color:var(--ld-col-wht);display:flex;flex-shrink:0;height:var(--ld-sidenav-navitem-icon-size);justify-content:center;position:relative;transition:transform var(--ld-sidenav-transition-duration-collapse-expand) ease;width:var(--ld-sidenav-navitem-icon-size);z-index:1}.ld-sidenav-navitem--secondary .ld-sidenav-navitem__slot-container-icon,.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__slot-container-icon{display:none}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__slot-container-icon{transform:translateX(var(--ld-sidenav-translate-x-delta))}.ld-sidenav-navitem__slot-container-icon:after{border-radius:calc(var(--ld-sidenav-navitem-border-radius));content:"";inset:0;position:absolute}.ld-sidenav-navitem__slot-container-icon>::slotted(*){border-radius:calc(var(--ld-sidenav-navitem-border-radius));height:100%;transform:scale(1.01);width:100%}.ld-sidenav-navitem__tooltip{inset:calc(var(--ld-sidenav-navitem-bg-inset)*-1);pointer-events:all;position:absolute;z-index:1}.ld-sidenav-navitem__tooltip-trigger{aspect-ratio:1;border-radius:calc(var(--ld-sidenav-navitem-active-indicator-border-width) + var(--ld-sidenav-navitem-border-radius));cursor:pointer;position:relative;width:calc(var(--ld-sidenav-navitem-icon-size) + var(--ld-sidenav-navitem-bg-inset)*2)}.ld-sidenav-navitem--rounded .ld-sidenav-navitem__tooltip-trigger{border-radius:var(--ld-br-full)}.ld-sidenav-navitem__slot-container{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;line-height:1.15;margin-left:var(--ld-sp-12);margin-right:auto;max-height:var(--ld-sidenav-navitem-height);overflow:hidden;padding-right:var(--ld-sp-4);text-overflow:ellipsis;transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__slot-container{opacity:0;transform:translateX(var(--ld-sidenav-translate-x-delta));transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem--secondary .ld-sidenav-navitem__slot-container,.ld-sidenav-navitem--tertiary .ld-sidenav-navitem__slot-container{padding:0}.ld-sidenav-navitem__slot-icon-secondary-container{color:var(--ld-sidenav-navitem-secondary-icon-color);display:flex;flex-shrink:0;margin-right:var(--ld-sp-4);transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) var(--ld-sidenav-transition-delay-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem--collapsed .ld-sidenav-navitem__slot-icon-secondary-container{opacity:0;transform:translateX(var(--ld-sidenav-translate-x-delta));transition:opacity var(--ld-sidenav-transition-duration-collapse-expand) linear,transform var(--ld-sidenav-transition-duration-collapse-expand) ease}.ld-sidenav-navitem__abbr{font:var(--ld-typo-b6);font-size:var(--ld-sidenav-navitem-icon-font-size);transform:translateX(3%) translateY(-14%)}.ld-sidenav-navitem__icon-to{transform:translateX(var(--ld-sp-6))}';export{r as ld_sidenav_navitem}