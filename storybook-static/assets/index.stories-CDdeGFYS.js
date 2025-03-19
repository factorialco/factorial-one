import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-B6o7_jwP.js";import{c as $,P as h}from"./index-BKKrtyrw.js";import{c as q}from"./utils-B2yEwIwY.js";import{a as A}from"./colors-o1uwkeKe.js";import{f as E}from"./forwardRef-CVda-fSC.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-B7GDqc_s.js";import"./clsx-B-dksMZM.js";var v="Progress",x=100,[R,Z]=$(v),[D,M]=R(v),b=f.forwardRef((e,r)=>{const{__scopeProgress:s,value:t=null,max:a,getValueLabel:m=S,...i}=e;(a||a===0)&&!g(a)&&console.error(L(`${a}`,"Progress"));const l=g(a)?a:x;t!==null&&!P(t,l)&&console.error(B(`${t}`,"Progress"));const n=P(t,l)?t:null,I=d(n)?m(n,l):void 0;return o.jsx(D,{scope:s,value:n,max:l,children:o.jsx(h.div,{"aria-valuemax":l,"aria-valuemin":0,"aria-valuenow":d(n)?n:void 0,"aria-valuetext":I,role:"progressbar","data-state":j(n,l),"data-value":n??void 0,"data-max":l,...i,ref:r})})});b.displayName=v;var C="ProgressIndicator",V=f.forwardRef((e,r)=>{const{__scopeProgress:s,...t}=e,a=M(C,s);return o.jsx(h.div,{"data-state":j(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...t,ref:r})});V.displayName=C;function S(e,r){return`${Math.round(e/r*100)}%`}function j(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function d(e){return typeof e=="number"}function g(e){return d(e)&&!isNaN(e)&&e>0}function P(e,r){return d(e)&&!isNaN(e)&&e<=r&&e>=0}function L(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${x}\`.`}function B(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${x} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var w=b,O=V;const c=f.forwardRef(({className:e,value:r,...s},t)=>o.jsx(w,{ref:t,className:q("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",e),...s,children:o.jsx(O,{className:"h-full w-full flex-1 transition-all",style:{backgroundColor:s.color,transform:`translateX(-${100-(r||0)}%)`}})}));c.displayName=w.displayName;try{c.displayName="Progress",c.__docgenInfo={description:"",displayName:"Progress",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const k=({value:e,max:r=100,label:s,color:t},a)=>{const m=t||A(0),i=e/r*100;return o.jsxs("div",{className:"flex items-center space-x-2","aria-live":"polite",children:[o.jsx("div",{className:"flex-grow",children:o.jsx(c,{color:m,value:i,className:"w-full","aria-valuemin":0,"aria-valuemax":r,"aria-valuenow":e,"aria-label":`${i.toFixed(1)}%`})}),s&&o.jsx("div",{className:"flex-shrink-0 text-sm font-medium",children:s})]})},p=E(k);try{p.displayName="ProgressBar",p.__docgenInfo={description:"",displayName:"ProgressBar",props:{dataConfig:{defaultValue:null,description:"",name:"dataConfig",required:!0,type:{name:"ChartConfig"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChartItem<K>[]"}},xAxis:{defaultValue:null,description:"",name:"xAxis",required:!1,type:{name:"AxisConfig"}},yAxis:{defaultValue:null,description:"",name:"yAxis",required:!1,type:{name:"AxisConfig"}},aspect:{defaultValue:null,description:"",name:"aspect",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"square"'},{value:'"wide"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Charts/ProgressChart",component:p,tags:["autodocs"],args:{value:60,label:"Label"},decorators:[e=>o.jsx("div",{className:"max-w-80",children:o.jsx(e,{})})]},u={};var y,_,N;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(N=(_=u.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const re=["Default"];export{u as Default,re as __namedExportsOrder,ee as default};
