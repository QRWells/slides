import{d,i as _,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as y,o as l,k as b,l as k,m as N,p as w,q as P,_ as S}from"./index-1f833b49.js";import{N as V}from"./NoteDisplay-b5d4f35f.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},q=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const c=f(()=>y.slice(0,-1).map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,i)=>(l(),n("div",{id:"page-root",style:x(a(P))},[t("div",j,[t("div",L,[t("h1",T,o(a(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(c),(e,r)=>(l(),n("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(a(b)),1),k(" "+o(e==null?void 0:e.title)+" ",1),q])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<a(c).length-1?(l(),n("hr",z)):w("v-if",!0)]))),128))])],4))}}),R=S(F,[["__file","/home/qrwells/edu/slides/model-checking-ch5/node_modules/.pnpm/@slidev+client@0.41.0_postcss@8.4.23_react-dom@16.14.0_react@16.14.0_vite@4.3.7/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
