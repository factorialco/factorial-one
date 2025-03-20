import"./Save-B3VvXevP.js";import{F as m}from"./Bell-C7UU3-3R.js";import{F as p}from"./Exit-B00DU0oP.js";import{F as d}from"./Sliders-CAPe_jzK.js";import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as u}from"./index-C9oqVgzc.js";import{D as f}from"./index-B79dpo_y.js";import{c as g,f as b}from"./utils-B2yEwIwY.js";function o({firstName:a,lastName:t,avatarUrl:l,options:c}){return e.jsx("div",{className:"mx-3 pb-3 pt-3",children:e.jsx(f,{items:c,children:e.jsxs("button",{className:g("flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",b("focus-visible:ring-inset")),children:[e.jsx(u,{src:l,firstName:a,lastName:t,size:"xsmall"}),e.jsxs("span",{className:"min-w-0 truncate text-f1-foreground",children:[a," ",t]})]})})})}try{o.displayName="User",o.__docgenInfo={description:"",displayName:"User",props:{firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!0,type:{name:"string"}},avatarUrl:{defaultValue:null,description:"",name:"avatarUrl",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownItem[]"}}}}}catch{}const h={title:"Sidebar/User",component:o,tags:["autodocs","experimental","no-sidebar"]},r={args:{firstName:"Dani",lastName:"Moreno",avatarUrl:"https://github.com/dani-moreno.png",options:[{label:"Preferences",href:"/preferences",icon:d},{label:"Notifications",href:"/notifications",icon:m},"separator",{label:"Logout",href:"/logout",icon:p,critical:!0}]}};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    avatarUrl: "https://github.com/dani-moreno.png",
    options: [{
      label: "Preferences",
      href: "/preferences",
      icon: Icons.Sliders
    }, {
      label: "Notifications",
      href: "/notifications",
      icon: Icons.Bell
    }, "separator", {
      label: "Logout",
      href: "/logout",
      icon: Icons.Exit,
      critical: true
    }]
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{r as D,o as U,F as i};
