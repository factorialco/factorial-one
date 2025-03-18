import{b as v}from"./Save-B3VvXevP.js";import{f as w}from"./index-DuopzoTV.js";import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as c}from"./index-Blak80_u.js";import{I as j}from"./index-CDBnMHOu.js";import{F as C}from"./ExternalLink-Bgb90MI7.js";import{c as d,f as _}from"./utils-B2yEwIwY.js";const l=({title:i,description:k,action:t,supportButton:n,separator:s})=>e.jsxs("div",{className:d("border-1 flex flex-col justify-between gap-4 border-dashed border-transparent px-6 py-5 md:flex-row md:gap-2",s==="top"&&"border-t-f1-border",s==="bottom"&&"border-b-f1-border"),children:[e.jsxs("div",{className:"flex grow flex-col gap-3",children:[e.jsxs("div",{className:"flex max-w-[640px] flex-col gap-1",children:[e.jsx("h2",{className:"text-lg font-semibold text-f1-foreground",children:i}),e.jsx("p",{className:"text-f1-foreground-secondary",children:k})]}),n&&e.jsx("div",{className:"w-fit",children:e.jsxs("a",{href:n.href,target:"_blank",rel:"noreferrer",className:d("flex items-center gap-1 rounded-sm bg-f1-background-secondary px-2 py-0.5 text-base font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary-hover [&>svg]:text-f1-foreground-secondary",_()),children:[n.label,e.jsx(j,{icon:C,size:"sm"})]})})]}),t&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"hidden md:block",children:e.jsx(c,{label:t.label,variant:t.variant??"outline",icon:t.icon,size:"md",onClick:t.onClick})}),e.jsx("div",{className:"w-full md:hidden [&>button]:w-full",children:e.jsx(c,{label:t.label,variant:t.variant??"outline",icon:t.icon,size:"lg",onClick:t.onClick})})]})]});try{l.displayName="SectionHeader",l.__docgenInfo={description:"",displayName:"SectionHeader",props:{title:{defaultValue:null,description:"Main heading text",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Description text below the title",name:"description",required:!0,type:{name:"string"}},action:{defaultValue:null,description:"Complementary action specific to the section",name:"action",required:!1,type:{name:'(Pick<ButtonProps, "label" | "onClick"> & { icon?: IconType; variant?: "default" | "outline"; }) | undefined'}},supportButton:{defaultValue:null,description:"Optional Link to related documentation (Help center or other link))",name:"supportButton",required:!1,type:{name:"{ label: string; href: string; }"}},separator:{defaultValue:null,description:"If specified, a separator will be displayed above or below the content",name:"separator",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}const S={component:l,title:"Section header",tags:["experimental"],parameters:{layout:"padded"},argTypes:{separator:{control:{type:"select",options:["top","bottom"]}}}},o={args:{title:"What is a template?",description:"Create document templates to automate the generation of documents with employee information. You can upload PDFs with fillable capabilities containing variables, DOCx files with variables, or any other types of documents that you need to send to employees.",action:{label:"Add template",icon:v,onClick:w()},supportButton:{label:"Help Center link",href:"https://help.factorialhr.com/"},separator:"bottom"}},a={args:{title:"Course catalog",description:"Select any course you would like to request.",supportButton:{label:"Help Center link",href:"https://help.factorialhr.com/"}}},r={args:{...o.args,action:{label:"Add template",icon:v,variant:"default"}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "What is a template?",
    description: "Create document templates to automate the generation of documents with employee information. You can upload PDFs with fillable capabilities containing variables, DOCx files with variables, or any other types of documents that you need to send to employees.",
    action: {
      label: "Add template",
      icon: Icon.Add,
      onClick: fn()
    },
    supportButton: {
      label: "Help Center link",
      href: "https://help.factorialhr.com/"
    },
    separator: "bottom"
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,h,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Course catalog",
    description: "Select any course you would like to request.",
    supportButton: {
      label: "Help Center link",
      href: "https://help.factorialhr.com/"
    }
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,x,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    action: {
      label: "Add template",
      icon: Icon.Add,
      variant: "default"
    }
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const N=["Default","NoAction","PrimaryAction"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:o,NoAction:a,PrimaryAction:r,__namedExportsOrder:N,default:S},Symbol.toStringTag,{value:"Module"}));export{o as D,F as S};
