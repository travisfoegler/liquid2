import{r as t,h as a}from"./p-24a1cdec.js";const r=class{constructor(a){t(this,a)}handleInfo(t){this.infoSuffix=this.infoSuffix?"":"​",this.info=t.detail+this.infoSuffix}handleAlert(t){this.alertSuffix=this.alertSuffix?"":"​",this.alert=t.detail+this.alertSuffix}render(){return a("ld-sr-only",null,a("span",{role:"status","aria-live":"polite","aria-relevant":"all","aria-atomic":"true"},this.info),a("span",{role:"alert","aria-live":"polite","aria-relevant":"all","aria-atomic":"true"},this.alert))}};r.style="";export{r as ld_sr_live}