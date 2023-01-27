import{r as l,c as t,h as a,H as d,g as e}from"./p-765a6fc5.js";import{g as o}from"./p-891005fd.js";import{c as r}from"./p-dfb8e7ac.js";const b=class{constructor(a){l(this,a),this.ldTableSort=t(this,"ldTableSort",7),this.ldTableSelect=t(this,"ldTableSelect",7),this.ldTableSelectAll=t(this,"ldTableSelectAll",7),this.getCellValue=(l,t)=>l.children[t].textContent.trim(),this.getComparer=(l,t)=>(a,d)=>{const e=this.getCellValue("asc"===t?a:d,l),o=this.getCellValue("asc"===t?d:a,l),r=parseFloat(e.replaceAll(/,/g,"")),b=parseFloat(o.replaceAll(/,/g,""));return isNaN(r)||isNaN(b)?e.localeCompare(o):r-b}}handleTableSort(l){const t=r("ld-table-header",l.target);if(Array.from(t.parentNode.children).forEach(((t,a)=>{a!==l.detail.columnIndex&&t.resetSort()})),l.defaultPrevented)return;const a=this.el.querySelector("ld-table-body");Array.from(a.querySelectorAll("ld-table-row")).sort(this.getComparer(l.detail.columnIndex,l.detail.sortOrder)).forEach((l=>a.appendChild(l)))}handleTableSelectAll(l){if(l.defaultPrevented)return;const t=this.el.querySelector("ld-table-body");Array.from(t.querySelectorAll("ld-table-row")).forEach((t=>t.selected=l.detail.selected))}async handleTableSelect(l){if(l.defaultPrevented)return;const t=this.el.querySelector("ld-table-body").querySelectorAll("ld-table-row"),a=Array.from(t).every((l=>l.selected)),d=Array.from(t).every((l=>!l.selected)),e=this.el.querySelector("ld-table-head").querySelector("ld-table-row");e.selected=a,e.indeterminate=!a&&!d}componentDidLoad(){if(Array.from(this.el.querySelectorAll("ld-table-row")).some((l=>l.selectionDisabled))){const l=this.el.querySelector("ld-table-head ld-table-row");l&&(l.selectionDisabled=!0)}}render(){const l=o(["ld-table"]);return a(d,{class:l,role:"figure",style:{border:"solid var(--ld-sp-1) var(--ld-table-border-col)"}},a("slot",{name:"toolbar"}),a("div",{part:"scroll-container",class:"ld-table__scroll-container"},a("table",{part:"table",ref:l=>this.tableRef=l},a("slot",null))))}get el(){return e(this)}};b.style=".ld-table,:host{--ld-table-bg-col:var(--ld-col-wht);--ld-table-border-col:var(--ld-col-neutral-200);--ld-table-toolbar-bg-col:var(--ld-col-neutral-050);--ld-table-layout:auto;--ld-table-row-outline-width:var(--ld-sp-1);--ld-table-row-outline:var(--ld-table-row-outline-width) var(--ld-table-border-col) solid;--ld-table-row-outline-half:calc(var(--ld-table-row-outline-width)*0.5) var(--ld-table-border-col) solid;--ld-table-cell-padding-x:var(--ld-sp-16);--ld-table-cell-padding-y:var(--ld-sp-12);--ld-table-toolbar-padding-y:var(--ld-sp-16);--ld-table-typo:var(--ld-typo-h6);--ld-table-white-space:nowrap;--ld-table-head-gradient:linear-gradient(to top,var(--ld-table-border-col),var(--ld-table-border-col) calc(var(--ld-sp-1)*0.75),var(--ld-table-bg-col) calc(var(--ld-sp-1)*0.75),var(--ld-table-bg-col));background-color:var(--ld-table-border-col);border-radius:var(--ld-br-l);box-sizing:border-box;display:flex;flex-direction:column;font:var(--ld-table-typo);-webkit-mask-image:-webkit-radial-gradient(#fff,#000);overflow:hidden;position:relative}.ld-table table,:host table{background-color:var(--ld-table-bg-col);border-collapse:collapse;table-layout:var(--ld-table-layout);text-align:left;white-space:var(--ld-table-white-space);width:100%}.ld-table tbody,.ld-table td,.ld-table th,.ld-table thead,:host tbody,:host td,:host th,:host thead{background-color:inherit;font:inherit}.ld-table .ld-table__toolbar,.ld-table ::slotted(ld-table-toolbar),:host .ld-table__toolbar,:host ::slotted(ld-table-toolbar){align-items:center;background-color:var(--ld-table-toolbar-bg-col);border-top-left-radius:calc(var(--ld-br-l) - var(--ld-sp-1)*1.25);border-top-right-radius:calc(var(--ld-br-l) - var(--ld-sp-1)*1.25);box-sizing:border-box;display:flex;gap:var(--ld-sp-12);justify-content:flex-start;min-height:var(--ld-sp-40);overflow-x:auto;overflow-y:hidden;padding-left:var(--ld-table-cell-padding-x);padding-right:var(--ld-table-cell-padding-x);position:relative;white-space:nowrap;z-index:3}.ld-table .ld-table__toolbar>ld-pagination,.ld-table ::slotted(ld-table-toolbar)>ld-pagination,:host .ld-table__toolbar>ld-pagination,:host ::slotted(ld-table-toolbar)>ld-pagination{flex-shrink:0;overflow-x:hidden;padding-bottom:var(--ld-sp-8);padding-top:var(--ld-sp-4);transform:translateY(var(--ld-sp-2))}.ld-table .ld-table__toolbar>ld-pagination:first-child,.ld-table ::slotted(ld-table-toolbar)>ld-pagination:first-child,:host .ld-table__toolbar>ld-pagination:first-child,:host ::slotted(ld-table-toolbar)>ld-pagination:first-child{margin-left:calc(var(--ld-sp-8)*-1)}.ld-table .ld-table__toolbar>ld-pagination:last-child,.ld-table ::slotted(ld-table-toolbar)>ld-pagination:last-child,:host .ld-table__toolbar>ld-pagination:last-child,:host ::slotted(ld-table-toolbar)>ld-pagination:last-child{margin-right:calc(var(--ld-sp-8)*-1)}.ld-table .ld-table__toolbar,.ld-table ::slotted(ld-table-toolbar),.ld-table thead,:host .ld-table__toolbar,:host ::slotted(ld-table-toolbar),:host thead{outline:var(--ld-table-row-outline)}.ld-table tr,:host tr{outline:var(--ld-table-row-outline-half)}.ld-table td,.ld-table th,:host td,:host th{padding:var(--ld-table-cell-padding-y) var(--ld-table-cell-padding-x)}.ld-table thead,:host thead{background-image:var(--ld-table-head-gradient);position:sticky;top:0;z-index:2}.ld-table.ld-table{border:solid var(--ld-sp-1) var(--ld-table-border-col)}.ld-table__scroll-container{height:inherit;max-height:inherit;overflow:auto}";export{b as ld_table}