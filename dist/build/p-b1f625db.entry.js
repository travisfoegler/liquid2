import{r,h as l,g as n}from"./p-54ce7266.js";import{g as e}from"./p-1133c92e.js";import{c as i}from"./p-37422124.js";import{i as t}from"./p-b05f0e4e.js";const a='.ld-link{--ld-link-col:var(--ld-thm-primary);--ld-link-gap:0.3em;--ld-link-chevron-gap:0em;--ld-link-chevron-width:0.135em;align-items:baseline;color:var(--ld-thm-primary);color:var(--ld-link-col);cursor:pointer;font-family:var(--ld-font-body);font-size:inherit;font-weight:700;gap:.3em;gap:var(--ld-link-gap);line-height:inherit;-webkit-text-decoration:none;text-decoration:none;touch-action:manipulation}.ld-link:not([aria-disabled=true]):hover{--ld-link-col:var(--ld-thm-primary-hover)}.ld-link:not([aria-disabled=true]):focus:focus-visible{--ld-link-col:var(--ld-thm-primary-focus)}.ld-link:not([aria-disabled=true]):active{--ld-link-col:var(--ld-thm-primary-active)}.ld-link:where([aria-disabled=true]){--ld-link-col:var(--ld-thm-primary);cursor:default;opacity:.3}.ld-link>.ld-icon,.ld-link>::slotted(.ld-icon),.ld-link>::slotted(ld-icon),.ld-link>ld-icon{transform:translateY(10%)}.ld-link--chevron-end,.ld-link--chevron-start{display:inline-flex}.ld-link--chevron-end:after,.ld-link--chevron-end:before,.ld-link--chevron-start:after,.ld-link--chevron-start:before{background-color:var(--ld-link-col);border-radius:99rem;content:"";display:block;flex-shrink:0;height:.5em;transform-origin:right;width:var(--ld-link-chevron-width)}.ld-link--chevron-start{margin-left:calc(.5 * var(--ld-link-chevron-gap))}.ld-link--chevron-start:after,.ld-link--chevron-start:before{order:-1}.ld-link--chevron-start:before{transform:translateX(calc(.5 * (var(--ld-link-gap) - var(--ld-link-chevron-gap)) + 50%)) translateY(-65%) rotate(-40deg)}.ld-link--chevron-start:after{transform:translateX(calc(-.5 * var(--ld-link-gap) - .5 * var(--ld-link-chevron-gap) - 50%)) translateY(20%) rotate(40deg)}.ld-link--chevron-end{margin-right:calc(.5 * var(--ld-link-chevron-gap))}.ld-link--chevron-end:after,.ld-link--chevron-end:before{order:1}.ld-link--chevron-end:before{transform:translateX(calc(.5 * (var(--ld-link-gap) + var(--ld-link-chevron-gap)) + 50%)) translateY(-65%) rotate(-40deg)}.ld-link--chevron-end:after{transform:translateX(calc(-.5 * var(--ld-link-gap) + .5 * var(--ld-link-chevron-gap) - 50%)) translateY(20%) rotate(40deg)}';const d=class{constructor(l){r(this,l);this.handleClick=r=>{if(this.disabled||t(this.el.ariaDisabled)){r.preventDefault();return}};this.chevron=undefined;this.disabled=undefined;this.ldTabindex=undefined;this.target=undefined;this.clonedAttributes=undefined}async focusInner(){this.anchor.focus()}componentWillLoad(){this.attributesObserver=i.call(this,["iconStart","iconEnd"])}connectedCallback(){this.el.addEventListener("click",this.handleClick,{capture:true})}disconnectedCallback(){this.el.removeEventListener("click",this.handleClick,{capture:true});if(this.attributesObserver)this.attributesObserver.disconnect()}render(){const r=e(["ld-link",this.chevron&&`ld-link--chevron-${this.chevron}`,this.disabled&&`ld-link--disabled`]);return l("a",Object.assign({},this.clonedAttributes,{onClick:this.handleClick,class:r,"aria-disabled":this.disabled||t(this.el.ariaDisabled)?"true":undefined,ref:r=>this.anchor=r,target:this.target,rel:this.target==="_blank"?"noreferrer noopener":undefined,disabled:this.disabled,part:"anchor focusable",tabIndex:this.ldTabindex}),l("slot",null))}get el(){return n(this)}};d.style=a;export{d as ld_link};
//# sourceMappingURL=p-b1f625db.entry.js.map