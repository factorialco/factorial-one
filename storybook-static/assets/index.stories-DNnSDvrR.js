import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./Save-B3VvXevP.js";import{F as N}from"./InfoCircle-BQwEmo9G.js";import{I as j}from"./index-CDBnMHOu.js";import{c as b}from"./utils-B2yEwIwY.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cwk_nZHn.js";import"./clsx-B-dksMZM.js";const C=({onClick:r,children:t})=>{const a="block rounded-lg border border-solid border-transparent p-[1px] -m-1";return r?e.jsx("a",{className:b(a,"cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"),onClick:r,tabIndex:0,children:t}):e.jsx("div",{className:a,tabIndex:1,children:t})};function l({label:r,count:t,icon:a,iconClassName:y,onClick:i}){return e.jsx(C,{onClick:i,children:e.jsxs("div",{className:b("flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5",i&&"hover:border-f1-border-hover"),children:[e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("p",{className:"line-clamp-1 flex-1 text-f1-foreground-secondary",children:r}),e.jsx(j,{icon:a,size:"md",className:y})]}),e.jsx("p",{className:"line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground",children:t})]})})}try{l.displayName="WidgetHighlightButton",l.__docgenInfo={description:"",displayName:"WidgetHighlightButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"IconType"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const B={title:"Widgets/WidgetHighlightButton",component:l,tags:["autodocs","experimental"],parameters:{layout:"centered"},decorators:[r=>e.jsx("div",{className:"w-[165px]",children:e.jsx(r,{})})]},o={args:{icon:N,iconClassName:"text-f1-icon-info",label:"Out of office",count:51,onClick:()=>{}}},n={args:{...o.args,label:"This item will show a really really long title"}},s={args:{...o.args,onClick:void 0}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    icon: InfoCircleIcon,
    iconClassName: "text-f1-icon-info",
    label: "Out of office",
    count: 51,
    onClick: () => {}
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "This item will show a really really long title"
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,x,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onClick: undefined
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const D=["Default","WithLongTitle","WithoutOnClick"];export{o as Default,n as WithLongTitle,s as WithoutOnClick,D as __namedExportsOrder,B as default};
