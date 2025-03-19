import"./Save-B3VvXevP.js";import{F as f}from"./Image--2CpXrOS.js";import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{C as y}from"./index-DQtakq2u.js";import{S as b}from"./index-DIbuSL_v.js";function i({companies:n,selected:p,onChange:u,withNotification:m=!1,additionalOptions:g}){return o.jsxs("div",{className:"flex h-[72px] items-center justify-between gap-3 px-3",children:[o.jsx(y,{companies:n,selected:p,onChange:u,withNotification:m,additionalOptions:g}),o.jsx(b,{})]})}try{i.displayName="SidebarHeader",i.__docgenInfo={description:"",displayName:"SidebarHeader",props:{companies:{defaultValue:null,description:"",name:"companies",required:!0,type:{name:"Company[]"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},withNotification:{defaultValue:{value:"false"},description:"",name:"withNotification",required:!1,type:{name:"boolean"}},additionalOptions:{defaultValue:null,description:"",name:"additionalOptions",required:!1,type:{name:"{ label: string; value: string; icon?: IconType; description?: string; onClick?: (() => void) | undefined; }[] | undefined"}},isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const h={title:"Sidebar/Header",component:i,tags:["autodocs","experimental","no-sidebar"]},e={args:{companies:[{id:"1",name:"Factorial",logo:"https://github.com/factorialco.png"},{id:"2",name:"Dazlog",logo:"https://github.com/dazlog.png"},{id:"3",name:"Acme Corp"}],selected:"1",onChange:n=>console.log("Selected company:",n),isExpanded:!0}},a={args:{...e.args,withNotification:!0,additionalOptions:[{label:"Upload company avatar",value:"upload",description:"Personalise your experience",icon:f}]}};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    companies: [{
      id: "1",
      name: "Factorial",
      logo: "https://github.com/factorialco.png"
    }, {
      id: "2",
      name: "Dazlog",
      logo: "https://github.com/dazlog.png"
    }, {
      id: "3",
      name: "Acme Corp"
    }],
    selected: "1",
    onChange: company => console.log("Selected company:", company),
    isExpanded: true
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    withNotification: true,
    additionalOptions: [{
      label: "Upload company avatar",
      value: "upload",
      description: "Personalise your experience",
      icon: Image
    }]
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const x=["Default","Notification"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Notification:a,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{e as D,i as S,j as i};
