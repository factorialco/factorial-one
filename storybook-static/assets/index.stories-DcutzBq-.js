import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as P}from"./index-B6o7_jwP.js";import{P as l}from"./index-Df40mirn.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./colors-o1uwkeKe.js";const _=({title:s,info:t})=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"flex text-f1-foreground-secondary",children:s}),e.jsx("div",{className:"basis-16 justify-self-end text-right font-medium",children:t})]}),n=P.forwardRef(function({title:t,list:y},h){return e.jsxs("div",{ref:h,className:"flex flex-col gap-2",children:[t&&e.jsx("div",{className:"font-medium",children:t}),y.map(i=>e.jsx(_,{title:i.title,info:i.info},i.title))]})});try{n.displayName="TwoColumnsList",n.__docgenInfo={description:"",displayName:"TwoColumnsList",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"TwoColumnsItemType[]"}}}}}catch{}const I={title:"Widgets/Content/TwoColumnsList",component:n,tags:["autodocs","experimental"],parameters:{layout:"centered"},args:{list:[{title:"Project 3",info:"115 h"},{title:"Project 2",info:"112 h"},{title:"Project 5",info:"111 h"}]},decorators:[s=>e.jsx("div",{className:"w-[386px]",children:e.jsx(s,{})})]},r={},o={args:{title:"Soft skills"}},a={args:{title:"Soft skills",list:[{title:"Research & Analysis",info:e.jsx(l,{value:65})},{title:"Ideation & Planning",info:e.jsx(l,{value:75})}]}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Soft skills"
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,x,j;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Soft skills",
    list: [{
      title: "Research & Analysis",
      info: <ProgressBarDuo value={65} />
    }, {
      title: "Ideation & Planning",
      info: <ProgressBarDuo value={75} />
    }]
  }
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const L=["Primary","Title","Progress"];export{r as Primary,a as Progress,o as Title,L as __namedExportsOrder,I as default};
