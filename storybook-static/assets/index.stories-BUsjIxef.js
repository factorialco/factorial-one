import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as y}from"./ClockIn-pnECK7Vn.js";import{M as h}from"./index-BpAFfwO3.js";import"./Save-B3VvXevP.js";import{F as _}from"./Bell-C7UU3-3R.js";import{c as I}from"./utils-B2yEwIwY.js";const j=({onClick:t,className:l,children:o})=>t?e.jsx("a",{className:l,onClick:t,tabIndex:0,children:o}):e.jsx("div",{className:l,tabIndex:-1,children:o});function i({id:t,title:l,subtitle:o,icon:f=_,onClick:s}){const g=I("flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",s?"cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none":void 0),b=x=>{x.preventDefault(),s==null||s(t)};return e.jsxs(j,{onClick:b,className:g,children:[e.jsx(h,{icon:f,size:"md"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"line-clamp-1 font-medium",children:l}),e.jsx("p",{className:"line-clamp-1 text-f1-foreground-secondary",children:o})]})]})}try{i.displayName="WidgetInboxListItem",i.__docgenInfo={description:"",displayName:"WidgetInboxListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string | number"}},icon:{defaultValue:{value:"forwardRef(SvgBell)"},description:"",name:"icon",required:!1,type:{name:"IconType"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((id: string | number) => void)"}}}}}catch{}const v={title:"Widgets/WidgetInboxListItem",component:i,tags:["autodocs","experimental"],parameters:{layout:"centered"},decorators:[t=>e.jsx("div",{className:"w-[348px]",children:e.jsx(t,{})})]},r={args:{id:"1",icon:y,title:"Title",subtitle:"Module · 4 Nov 2024",onClick:()=>{}}},a={args:{...r.args,title:"This item will show a really really really long title",subtitle:"This item will show a really really really long subtitle"}};var n,d,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: "1",
    icon: ClockInIcon,
    title: "Title",
    subtitle: "Module · 4 Nov 2024",
    onClick: () => {}
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "This item will show a really really really long title",
    subtitle: "This item will show a really really really long subtitle"
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["Default","WithLongTitle"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithLongTitle:a,__namedExportsOrder:w,default:v},Symbol.toStringTag,{value:"Module"}));export{r as D,i as W,a,M as i};
