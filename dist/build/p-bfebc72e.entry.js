import{r as l,h as s,H as e}from"./p-24a1cdec.js";import{g as t}from"./p-891005fd.js";import{g as i}from"./p-51df6561.js";const c=class{constructor(s){l(this,s),this.type="safc"}render(){const l=i(`./assets/${this.type}-cell.svg`);return s(e,{class:t(["ld-bg-cells",`ld-bg-cells--${this.type}`])},s("div",{class:"ld-bg-cells__pattern",part:"pattern",style:{"--ld-bg-cells-image":`url(${l})`}}),s("div",{class:"ld-bg-cells__content",part:"content"},s("slot",null)))}static get assetsDirs(){return["assets"]}};c.style=".ld-bg-cells,:host{--ld-bg-cells-bg-col:var(--ld-thm-primary);--ld-bg-cells-pattern-col:var(--ld-thm-secondary);background:var(--ld-bg-cells-bg-col);height:100%;position:relative;width:100%}:host(.ld-bg-cells--bioreliance),:where(.ld-bg-cells--bioreliance){--ld-bg-cells-position:top 5% right -20%;--ld-bg-cells-size:230%}:host(.ld-bg-cells--f),:where(.ld-bg-cells--f){--ld-bg-cells-position:top 20% right -50%;--ld-bg-cells-size:180%}:host(.ld-bg-cells--hexagon),:where(.ld-bg-cells--hexagon){--ld-bg-cells-position:top 56% right -30%;--ld-bg-cells-size:200%}:host(.ld-bg-cells--millipore),:where(.ld-bg-cells--millipore){--ld-bg-cells-position:top -10% right -30%;--ld-bg-cells-size:200%}:host(.ld-bg-cells--qa-x2f-qc),:where(.ld-bg-cells--qa-x2f-qc){--ld-bg-cells-position:top -30% right -34%;--ld-bg-cells-size:170%}:host(.ld-bg-cells--safc),:where(.ld-bg-cells--safc){--ld-bg-cells-position:top 47% right -15%;--ld-bg-cells-size:290%}:host(.ld-bg-cells--sigma-aldrich),:where(.ld-bg-cells--sigma-aldrich){--ld-bg-cells-position:top 51% right -19%;--ld-bg-cells-size:280%}:host(.ld-bg-cells--t),:where(.ld-bg-cells--t){--ld-bg-cells-position:top -10% right -20%;--ld-bg-cells-size:250%}:host(.ld-bg-cells--tile),:where(.ld-bg-cells--tile){--ld-bg-cells-position:top 50% right -12%;--ld-bg-cells-size:250%}.ld-bg-cells__pattern{background:var(--ld-bg-cells-pattern-col);-webkit-mask-image:var(--ld-bg-cells-image);mask-image:var(--ld-bg-cells-image);-webkit-mask-position:var(--ld-bg-cells-position);mask-position:var(--ld-bg-cells-position);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:var(--ld-bg-cells-size);mask-size:var(--ld-bg-cells-size)}.ld-bg-cells__content,.ld-bg-cells__pattern{inset:0;position:absolute}";export{c as ld_bg_cells}