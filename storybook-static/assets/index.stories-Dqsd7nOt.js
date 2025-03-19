import"./Save-B3VvXevP.js";import{F as I}from"./Check-FJXU9bTg.js";import{F as t}from"./Placeholder-pote8B1m.js";import{f}from"./index-DuopzoTV.js";import{a as c}from"./avatar-Cgym3e8O.js";import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{B as u}from"./index-Blak80_u.js";import{I as R}from"./index-CDBnMHOu.js";import{P as U}from"./index-C9oqVgzc.js";import{D as _}from"./index-C99zcXwp.js";import{R as B}from"./index-BegHU_l6.js";import{F as W}from"./InfoCircle-BQwEmo9G.js";import{R as D}from"./index-B6o7_jwP.js";import"./index-yBjzXJbu.js";import"./button-CZujocQw.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-B7GDqc_s.js";import"./index-Cwk_nZHn.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-BNL5Yqmu.js";import"./text-CLXhi3RU.js";import"./colors-Yrv_tWQC.js";import"./index-C2XIGUiK.js";import"./exports-BcFg0xa3.js";import"./component-BI8hiL87.js";const l=D.forwardRef(({person:r,onClick:C,...e},L)=>{var m,d;const S=()=>{C()};return a.jsxs("div",{ref:L,className:"flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",onClick:S,children:[a.jsx(U,{firstName:r.firstName,lastName:r.lastName,src:r.avatarUrl,badge:r.avatarBadge}),a.jsxs("div",{className:"flex flex-1 flex-col",children:[a.jsxs("div",{className:"flex flex-1 flex-row items-center gap-1",children:[a.jsx("span",{className:"truncate font-medium",children:`${r.firstName} ${r.lastName}`}),a.jsx(R,{icon:W,size:"sm",className:"text-f1-icon-secondary"})]}),"bottomTags"in e&&a.jsx("div",{className:"-ml-1.5 flex flex-row items-center [&>div]:-mr-1",children:e.bottomTags.map((p,E)=>a.jsxs(a.Fragment,{children:[a.jsx(B,{...p,className:"text-f1-foreground-secondary",noBorder:!0},p.text),E<e.bottomTags.length-1&&a.jsx("span",{children:"·"})]}))}),"description"in e&&e.description&&a.jsx("p",{className:"truncate text-f1-foreground-secondary",children:e.description})]}),a.jsxs("div",{className:"flex flex-row items-center justify-between gap-2",children:["rightTag"in e&&e.rightTag&&a.jsx(_,{...e.rightTag}),"actions"in e&&a.jsxs("div",{className:"flex flex-1 flex-row items-center justify-end gap-2",children:[((m=e.actions)==null?void 0:m.primary)&&a.jsx(u,{variant:"outline",onClick:e.actions.primary.onClick,label:e.actions.primary.label,icon:e.actions.primary.icon}),((d=e.actions)==null?void 0:d.secondary)&&a.jsx(u,{variant:"outline",onClick:e.actions.secondary.onClick,label:"Secondary",icon:e.actions.secondary.icon,hideLabel:!0})]})]})]})});l.displayName="PersonListItem";try{l.displayName="PersonListItem",l.__docgenInfo={description:"",displayName:"PersonListItem",props:{person:{defaultValue:null,description:"",name:"person",required:!0,type:{name:'{ firstName: string; lastName: string; avatarUrl?: string | undefined; avatarBadge?: Omit<BadgeProps, "size"> | undefined; }'}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},bottomTags:{defaultValue:null,description:"",name:"bottomTags",required:!0,type:{name:'Omit<RawTagProps, "noBorder">[]'}},rightTag:{defaultValue:null,description:"",name:"rightTag",required:!1,type:{name:"DotTagProps"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"{ primary?: { icon?: IconType; label: string; onClick: () => void; }; secondary?: { icon: IconType; onClick: () => void; } | undefined; } | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const be={title:"List/PersonListItem",component:l,tags:["autodocs","experimental"]},n={args:{person:{firstName:"John",lastName:"Smith",avatarUrl:c,avatarBadge:{icon:I,type:"positive"}},description:"Software Engineer",rightTag:{text:"Parental leave",color:"army"}}},o={args:{person:{firstName:"Sarah",lastName:"Johnson",avatarUrl:c},description:"Product Designer",actions:{primary:{icon:t,label:"Message",onClick:f()},secondary:{icon:t,onClick:f()}}}},i={args:{person:{firstName:"Emma",lastName:"Wilson",avatarUrl:c},bottomTags:[{text:"Label",icon:t},{text:"Label",icon:t},{text:"Label",icon:t},{text:"Label",icon:t}]}},s={args:{person:{firstName:"Emma",lastName:"Wilson",avatarUrl:c},description:"Software Engineer"}};var g,x,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    person: {
      firstName: "John",
      lastName: "Smith",
      avatarUrl: avatar,
      avatarBadge: {
        icon: Check,
        type: "positive"
      }
    },
    description: "Software Engineer",
    rightTag: {
      text: "Parental leave",
      color: "army"
    }
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,N,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    person: {
      firstName: "Sarah",
      lastName: "Johnson",
      avatarUrl: avatar
    },
    description: "Product Designer",
    actions: {
      primary: {
        icon: Placeholder,
        label: "Message",
        onClick: fn()
      },
      secondary: {
        icon: Placeholder,
        onClick: fn()
      }
    }
  }
}`,...(y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var b,T,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    person: {
      firstName: "Emma",
      lastName: "Wilson",
      avatarUrl: avatar
    },
    bottomTags: [{
      text: "Label",
      icon: Placeholder
    }, {
      text: "Label",
      icon: Placeholder
    }, {
      text: "Label",
      icon: Placeholder
    }, {
      text: "Label",
      icon: Placeholder
    }]
  }
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var P,w,k;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    person: {
      firstName: "Emma",
      lastName: "Wilson",
      avatarUrl: avatar
    },
    description: "Software Engineer"
  }
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const Te=["Default","WithActions","WithTags","Minimal"];export{n as Default,s as Minimal,o as WithActions,i as WithTags,Te as __namedExportsOrder,be as default};
