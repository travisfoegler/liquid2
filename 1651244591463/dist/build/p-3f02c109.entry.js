import{r as t,h as i,H as o,g as e}from"./p-24a1cdec.js";import{T as l}from"./p-11844eb3.js";import{g as s}from"./p-891005fd.js";const r=class{constructor(i){t(this,i)}render(){return i("div",{class:"docs-figma-access-notice"},i("ld-icon",{class:"docs-figma-access-notice__icon",name:"info",size:"lg"}),i("ld-typo",{variant:"body-s"},"The Liquid Oxygen Figma library is only available to you, if you have a Figma account associated with a ",i("b",null,"@merckgroup.com"),","," ",i("b",null,"@emdgroup.com")," or ",i("b",null,"@milliporesigma.com")," or the respective @external. email address."))}};r.style=".docs-figma-access-notice{display:grid;gap:var(--ld-sp-16);grid-auto-flow:column;max-width:calc(100vw - 4rem)}.docs-figma-access-notice__icon{color:var(--ld-thm-primary)}";let h=0;const c=class{constructor(i){t(this,i),this.idDescriber="ld-tooltip-"+ ++h,this.hideDelay=0,this.position="top center",this.showDelay=0,this.tag="button",this.tetherOptions="{}",this.triggerType="hover",this.hasDefaultTrigger=!0,this.visible=!1,this.mapPositionToAttachment=t=>({"bottom center":"top center","bottom left":"top left","bottom right":"top right","left bottom":"bottom right","left middle":"middle right","left top":"top right","right bottom":"bottom left","right middle":"middle left","right top":"top left","top center":"bottom center","top left":"bottom left","top right":"bottom right"}[t]),this.mapPositionToTargetAttachment=t=>{var i;return null!==(i={"left bottom":"bottom left","left middle":"middle left","left top":"top left","right bottom":"bottom right","right middle":"middle right","right top":"top right"}[t])&&void 0!==i?i:t},this.initTooltip=async()=>{const t=this.mapPositionToAttachment(this.position),i=this.mapPositionToTargetAttachment(this.position);this.tooltipRef.querySelector("slot").assignedNodes().forEach((t=>{this.tooltipRef.appendChild(t)}));let o={};o=JSON.parse(this.tetherOptions),this.popper=new l(Object.assign({attachment:t,classPrefix:"ld-tether",constraints:[{attachment:"together",to:"window"}],element:this.tooltipRef,target:this.triggerRef,targetAttachment:i},o)),this.popper.enable(),this.popper.enable(),this.popper.enable(),this.popper.enable(),this.visible=!0},this.toggleTooltip=()=>{null!=this.popper&&(this.visible?this.hideTooltip():this.showTooltip())},this.handleHideTrigger=()=>{"click"===this.triggerType||this.disabled||(clearTimeout(this.delayTimeout),this.popper&&(this.delayTimeout=setTimeout((()=>{this.hideTooltip()}),this.hideDelay)))},this.handleShowTrigger=()=>{"click"===this.triggerType||this.disabled||(clearTimeout(this.delayTimeout),this.delayTimeout=void 0===this.popper?setTimeout(this.initTooltip,this.showDelay):setTimeout(this.showTooltip.bind(this),this.showDelay))},this.handleToggleTrigger=()=>{"hover"===this.triggerType||this.disabled||(void 0===this.popper?this.initTooltip():this.toggleTooltip())}}updatePopper(t){t&&this.hideTooltip()}async hideTooltip(){var t;clearTimeout(this.delayTimeout),null===(t=this.popper)||void 0===t||t.disable(),this.visible=!1}async showTooltip(){this.disabled||(clearTimeout(this.delayTimeout),this.popper.enable(),this.visible=!0)}handleClickOutside(t){this.popper&&"click"===this.triggerType&&t.target.closest("ld-tooltip")!==this.element&&t.target.closest(".ld-tooltip")!==this.tooltipRef&&this.hideTooltip()}handleTouchOutside(t){this.handleClickOutside(t)}componentWillLoad(){this.hasDefaultTrigger=!this.element.querySelector('[slot="trigger"]')}render(){return i(o,null,i(this.tag,{"aria-describedby":this.idDescriber,class:s(["ld-tooltip__trigger","click"===this.triggerType&&"ld-tooltip__trigger--clickable"]),onClick:this.handleToggleTrigger,onMouseEnter:this.handleShowTrigger,onFocus:this.handleShowTrigger,onMouseLeave:this.handleHideTrigger,onBlur:this.handleHideTrigger,part:"trigger focusable",ref:t=>{this.triggerRef=t},type:"button"},i("ld-sr-only",null,"Info"),i("slot",{name:"trigger"},i("svg",{class:"ld-tooltip__icon",fill:"none",part:"icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i("path",{"clip-rule":"evenodd",d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.9249 18.0751 1 12 1C5.9249 1 1 5.9249 1 12C1 18.0751 5.9249 23 12 23Z","fill-rule":"evenodd",fill:"currentColor"}),i("path",{"clip-rule":"evenodd",d:"M11.9996 8.6477C12.9254 8.6477 13.6758 7.8973 13.6758 6.9715C13.6758 6.0458 12.9254 5.2953 11.9996 5.2953C11.0739 5.2953 10.3235 6.0458 10.3235 6.9715C10.3235 7.8973 11.0739 8.6477 11.9996 8.6477ZM10.8453 17.8038C11.1932 18.1517 11.6736 18.3256 12.2865 18.3256H13.4545C13.6864 18.3256 13.8023 18.2263 13.8023 18.0275V12.2873C13.8023 11.6744 13.6284 11.1939 13.2805 10.8461C12.9326 10.4982 12.4522 10.3242 11.8393 10.3242H10.6713C10.4394 10.3242 10.3235 10.4236 10.3235 10.6224V16.3626C10.3235 16.9755 10.4974 17.456 10.8453 17.8038Z","fill-rule":"evenodd",fill:"var(--ld-col-wht)"})))),i("ld-tooltip-popper",{"aria-hidden":this.visible?void 0:"true",arrow:this.arrow,hasDefaultTrigger:this.hasDefaultTrigger,id:this.idDescriber,part:"popper",size:this.size,ref:t=>{this.tooltipRef=t},triggerType:this.triggerType},i("slot",null)))}get element(){return e(this)}static get watchers(){return{disabled:["updatePopper"]}}};c.style=".ld-tooltip__trigger{--ld-tooltip-trigger-icon-col:var(--ld-thm-primary);--ld-tooltip-trigger-icon-col-hover:var(--ld-thm-primary-hover);--ld-tooltip-trigger-icon-col-focus:var(--ld-thm-primary-focus);background:none;border:0;display:inline-block;font-family:inherit;font-size:inherit;padding:0}.ld-tooltip__trigger--clickable{cursor:pointer}.ld-tooltip__trigger:focus:focus-visible .ld-tooltip__icon{color:var(--ld-tooltip-trigger-icon-col-focus)}.ld-tooltip__trigger:hover .ld-tooltip__icon{color:var(--ld-tooltip-trigger-icon-col-hover)}.ld-tooltip__trigger+.ld-tooltip{opacity:0;position:absolute}.ld-tooltip__icon{color:var(--ld-tooltip-trigger-icon-col);display:flex;height:var(--ld-sp-16);width:var(--ld-sp-16)}";export{r as docs_figma_access_notice,c as ld_tooltip}