import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{R as f}from"./index-B_Wd_oDJ.js";import{w as h}from"./skeleton-BYaQrqsT.js";import{r as _}from"./index-B6o7_jwP.js";import{W as s}from"./index-DdikQjRD.js";import{W as v}from"./storybook-utils-ngLeAxSN.js";const t=h(_.forwardRef(function({header:u,chart:p},g){return a.jsx(s,{ref:g,header:u,children:a.jsx("div",{className:"flex h-40 items-center justify-center",children:a.jsx(f,{...p})})})}),s.Skeleton);try{t.displayName="RadialProgressWidget",t.__docgenInfo={description:"",displayName:"RadialProgressWidget",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"{ title: string; subtitle?: string | undefined; info?: string | undefined; link?: { title: string; url: string; } | undefined; }"}},chart:{defaultValue:null,description:"",name:"chart",required:!0,type:{name:"RadialProgressProps"}}}}}catch{}const x={title:"Widgets/Charts/RadialProgressWidget",component:t,parameters:{layout:"centered"},tags:["autodocs","experimental"],args:{header:{title:"A Radial Progress Chart",subtitle:"2024",info:"This is a radial progress chart"},chart:{value:75,max:100,color:"hsl(var(--chart-1))",overview:{number:75,label:"Completed"}}},decorators:[v]},e={},r={args:{chart:{value:60,max:100,color:"hsl(var(--chart-3))",overview:{number:60,label:"Progress"}}}};var o,i,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    chart: {
      value: 60,
      max: 100,
      color: "hsl(var(--chart-3))",
      overview: {
        number: 60,
        label: "Progress"
      }
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const P=["Default","CustomColor"],w=Object.freeze(Object.defineProperty({__proto__:null,CustomColor:r,Default:e,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{t as R,w as i,x as m};
