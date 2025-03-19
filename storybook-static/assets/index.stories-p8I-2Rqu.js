import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./Save-B3VvXevP.js";import{F as T}from"./ArrowDown-YyY6Rvxf.js";import{F as B}from"./ArrowUp-yw-a1ZBd.js";import{u as y}from"./text-CLXhi3RU.js";import{c as i}from"./utils-B2yEwIwY.js";import{r as _}from"./index-B6o7_jwP.js";import{B as N}from"./index-C2XIGUiK.js";import{I as b}from"./exports-BcFg0xa3.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./component-BI8hiL87.js";import"./index-Cwk_nZHn.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-CDBnMHOu.js";const E={positive:B,negative:T},o=_.forwardRef(({text:s,status:e},x)=>(y(s,{disallowEmpty:!0}),n.jsx(N,{ref:x,className:i({positive:"bg-f1-background-positive text-f1-foreground-positive",neutral:"bg-f1-background-secondary text-f1-foreground-secondary",negative:"bg-f1-background-critical text-f1-foreground-critical"}[e]),left:e==="neutral"?null:n.jsx(b,{icon:E[e],size:"sm",className:i({positive:"text-f1-icon-positive",neutral:"text-f1-icon-secondary",negative:"text-f1-icon-critical"}[e])}),additionalAccesibleText:`${e} balance`,text:s})));o.displayName="BalanceTag";try{o.displayName="BalanceTag",o.__docgenInfo={description:"",displayName:"BalanceTag",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"neutral"'},{value:'"positive"'},{value:'"negative"'}]}}}}}catch{}const D={component:o,title:"Tag/BalanceTag",tags:["autodocs","experimental"],parameters:{layout:"centered"},args:{text:"2% · 1.522,48 €",status:"positive"}},a={},t={args:{status:"neutral",text:"0% · 0,00 €"}},r={args:{status:"negative",text:"-17% · -1.522,48 €"}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    status: "neutral",
    text: "0% · 0,00 €"
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: "negative",
    text: "-17% · -1.522,48 €"
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const G=["PositiveBalanceTag","NeutralBalanceTag","NegativeBalanceTag"];export{r as NegativeBalanceTag,t as NeutralBalanceTag,a as PositiveBalanceTag,G as __namedExportsOrder,D as default};
