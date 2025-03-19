import{a as he,F as ye,b as ve}from"./Save-B3VvXevP.js";import{F as je}from"./ArrowUp-yw-a1ZBd.js";import{F as V}from"./Comment-uDqSWW-l.js";import{F as J}from"./Download-dZY34nmz.js";import{F as xe}from"./ExternalLink-Bgb90MI7.js";import{F as j}from"./LayersFront-CDxc9biS.js";import{F as s}from"./Pencil-B6sRWFIu.js";import{F as Ne}from"./WhatsappChat-CpDpsqJP.js";import{f as n}from"./index-DuopzoTV.js";import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as H}from"./index-Blak80_u.js";import{A as Re}from"./Avatar--tDKy5Jw.js";import{M as Pe,D as Se}from"./index-B79dpo_y.js";import{T as Te}from"./index-Ci88gSgP.js";import{u as De}from"./i18n-provider-DLZYpdh4.js";import{c as D}from"./utils-B2yEwIwY.js";import{r}from"./index-B6o7_jwP.js";import{a as B}from"./index-Bh5LNwUX.js";import{M as W}from"./index-Cmrlr8z1.js";import{m as Ee}from"./proxy-CqNJYjyK.js";const E=c=>c.isVisible!==!1,A=r.memo(function({tooltip:o,...i}){if(o){const a=i.disabled?"span":r.Fragment;return e.jsx(Te,{description:o,children:e.jsx(a,{children:e.jsx(H,{...i})})})}return e.jsx(H,{...i})});function I({title:c,avatar:o,description:i,primaryAction:a,secondaryActions:N=[],otherActions:R=[],status:d,metadata:P=[]}){const k=[d&&{label:d.label,value:{type:"status",label:d.text,variant:d.variant},actions:d.actions,hideLabel:!0},...P],[p,Ce]=r.useState(!1),[M,ke]=r.useState(!1),_=De(),[L,q]=[r.useRef(null),r.useRef(null)],[m,w]=[B({ref:L}),B({ref:q})];r.useEffect(()=>{w.height&&m.height&&ke(w.height>m.height)},[w.height,m.height]);const S=N.filter(E),u=R.filter(E),T=a&&E(a),we=S.length>0,Ae=u.length>0;return e.jsxs("div",{className:"flex flex-col gap-3 px-6 pb-5 pt-3",children:[e.jsxs("div",{className:D("flex flex-col items-start justify-start gap-4 md:flex-row",!i&&"md:items-center"),children:[e.jsxs("div",{className:D("flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start",!i&&"md:items-center"),children:[o&&e.jsx("div",{className:"flex items-start",children:e.jsx(Re,{avatar:{...o.type==="generic"?{...o,type:"company"}:o},size:"large"})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-2xl font-semibold text-f1-foreground",children:c}),i&&e.jsxs("div",{className:"flex max-w-[640px] flex-col gap-1",children:[e.jsxs(Ee.div,{initial:!1,animate:{height:p?w.height??m.height:m.height??"3rem"},transition:{duration:M?.15:0,ease:[.165,.84,.44,1]},className:"overflow-hidden",children:[e.jsx("div",{ref:L,className:D("text-lg text-f1-foreground-secondary",!p&&"line-clamp-2"),children:i}),e.jsx("div",{ref:q,className:"invisible text-lg text-f1-foreground-secondary","aria-hidden":"true",children:i})]}),(M||p)&&e.jsx("button",{onClick:()=>Ce(!p),className:"relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover",children:p?_.actions.showLess:_.actions.showAll})]})]})]}),k.length>0&&e.jsx("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden",children:e.jsx(W,{items:k})}),e.jsxs("div",{className:"flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden",children:[T&&e.jsx("div",{className:"w-full md:hidden [&>*]:w-full",children:e.jsx(A,{label:a.label,onClick:a.onClick,variant:"default",icon:a.icon,size:"lg",disabled:a.disabled,tooltip:a.tooltip})}),S.map(t=>e.jsx(r.Fragment,{children:e.jsx("div",{className:"w-full md:hidden [&>*]:w-full",children:e.jsx(A,{label:t.label,onClick:t.onClick,variant:t.variant??"outline",icon:t.icon,size:"lg",disabled:t.disabled,tooltip:t.tooltip})})},t.label)),u.length>0&&e.jsx("div",{className:"w-full",children:e.jsx(Pe,{items:u})})]}),e.jsxs("div",{className:"-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto",children:[u.length>0&&e.jsx("div",{children:e.jsx(Se,{items:u})}),S.map(t=>e.jsx(r.Fragment,{children:e.jsx("div",{className:"hidden md:block",children:e.jsx(A,{label:t.label,onClick:t.onClick,variant:t.variant??"outline",icon:t.icon,disabled:t.disabled,tooltip:t.tooltip})})},t.label)),T&&(we||Ae)&&e.jsx("div",{className:"mx-1 h-4 w-px bg-f1-background-secondary-hover"}),T&&e.jsx("div",{className:"hidden md:block",children:e.jsx(A,{label:a.label,onClick:a.onClick,variant:"default",icon:a.icon,disabled:a.disabled,tooltip:a.tooltip})})]})]}),k.length>0&&e.jsx("div",{className:"hidden flex-wrap items-center gap-x-3 gap-y-1 md:block",children:e.jsx(W,{items:k})})]})}try{I.displayName="BaseHeader",I.__docgenInfo={description:"",displayName:"BaseHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:'AvatarVariant | { type: "generic"; name: string; src?: string; }'}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"PrimaryAction"}},secondaryActions:{defaultValue:{value:"[]"},description:"",name:"secondaryActions",required:!1,type:{name:"SecondaryAction[]"}},otherActions:{defaultValue:{value:"[]"},description:"",name:"otherActions",required:!1,type:{name:"(DropdownItem & { isVisible?: boolean; })[]"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"{ label: string; text: string; variant: Variant; actions?: MetadataAction[]; }"}},metadata:{defaultValue:{value:"[]"},description:"",name:"metadata",required:!1,type:{name:"(boolean | MetadataItem)[]"}}}}}catch{}const F=({avatar:c,title:o,description:i,primaryAction:a,secondaryActions:N,otherActions:R,status:d,metadata:P})=>e.jsx(I,{avatar:c,title:o,description:i,primaryAction:a,secondaryActions:N,otherActions:R,status:d,metadata:P});try{F.displayName="ResourceHeader",F.__docgenInfo={description:"",displayName:"ResourceHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"(boolean | MetadataItem)[]"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"{ label: string; text: string; variant: Variant; actions?: MetadataAction[]; }"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:'AvatarVariant | { type: "generic"; name: string; src?: string; }'}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"PrimaryAction"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"SecondaryAction[]"}},otherActions:{defaultValue:null,description:"",name:"otherActions",required:!1,type:{name:"(DropdownItem & { isVisible?: boolean; })[]"}}}}}catch{}const Ie={title:"Resource header",component:F,tags:["stable"],parameters:{layout:"padded"},argTypes:{title:{description:"Main heading identifying the resource"},description:{description:"Supporting text providing additional context"},status:{description:"Visual indicator of the resource's current state"},metadata:{description:"Horizontal list of key-value pairs showing relevant information"},primaryAction:{description:"Main button representing the most important action available for the resource"},secondaryActions:{description:"Complementary set of lower-priority actions offering additional but less frequent functionalities"},otherActions:{description:"Expandable menu containing additional operations and advanced options"}}},l={args:{title:"Senior Product Designer",description:"Seeking an experienced product designer to lead design initiatives",status:{label:"Status",text:"Draft",variant:"neutral",actions:[{label:"Edit",icon:s,onClick:n()}]},primaryAction:{label:"Publish",icon:je,onClick:n()},secondaryActions:[{label:"Edit",icon:s,onClick:n()}],otherActions:[{label:"Archive",icon:he,onClick:n()},{label:"Copy URL",icon:j,onClick:n()},"separator",{label:"Unlist",icon:ye,critical:!0,onClick:n()}],metadata:[{label:"Location",value:{type:"text",content:"Barcelona, Spain"}},{label:"Team",value:{type:"avatar",variant:{type:"team",name:"Product design"},text:"Product design"}}]}},f={args:{...l.args,status:void 0}},g={args:{...l.args,primaryAction:void 0,secondaryActions:[{label:"Edit",icon:s,onClick:n()},{label:"Export",icon:J,onClick:n()}],metadata:[{label:"Created",value:{type:"date",formattedDate:"2024-01-01",icon:"critical"},actions:[{label:"Copy",icon:j,onClick:n()}]},{label:"Manager",value:{type:"avatar",variant:{type:"person",firstName:"Josep Jaume",lastName:"Rey",src:"https://github.com/josepjaume.png"},text:"Josep Jaume Rey"},actions:[{label:"Edit",icon:s,onClick:n()},{label:"Comment",icon:V,onClick:n()}]},{label:"Contract",value:{type:"status",label:"Pending",variant:"warning"}}]}},b={args:{...l.args,secondaryActions:[{label:"Promote",onClick:n(),disabled:!0,tooltip:"Recharge your account"}],otherActions:[{label:"Share",icon:xe,onClick:n()},{label:"Download",icon:J,onClick:n()},"separator",{label:"Archive",icon:he,critical:!0,onClick:n()}]}},h={args:{title:"Factorial",description:"HR Software to Empower Your Team",avatar:{type:"company",name:"Factorial",src:"https://github.com/factorialco.png"},secondaryActions:[{label:"Edit client",icon:s,onClick:n()}],metadata:[{label:"Legal name",value:{type:"text",content:"Everyday Software S.L."},actions:[{label:"Copy",icon:j,onClick:n()}]},{label:"Tax identification number",value:{type:"text",content:"B-675254394"}}]},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},y={args:{title:"René Galindo",description:"Product Design Lead",avatar:{type:"person",firstName:"René",lastName:"Galindo",src:"https://github.com/renegalindo.png"},metadata:[{label:"Manager",value:{type:"avatar",variant:{type:"person",firstName:"Ilya",lastName:"Zayats",src:"https://github.com/somebody32.png"},text:"ilya Zayats"}},{label:"Team",value:{type:"avatar",variant:{type:"team",name:"Product design"},text:"Product design"}},{label:"Phone",value:{type:"text",content:"+34 675 254 394"},actions:[{label:"Chat in WhatsApp",icon:Ne,onClick:n()},{label:"Copy",icon:j,onClick:n()}]}]}},v={args:{title:"Product designers",description:"Rectangle drawers and post-it stickers",avatar:{type:"team",name:"Product designers"},primaryAction:{label:"Add members",icon:ve,onClick:n()},secondaryActions:[{label:"Edit",icon:s,onClick:n()}],otherActions:[{label:"Export",icon:J,onClick:n()},{label:"Share",icon:xe,onClick:n()},"separator",{label:"Delete",icon:ye,critical:!0,onClick:n()}],metadata:[{label:"Team leader",value:{type:"avatar",variant:{type:"person",firstName:"Josep Jaume",lastName:"Rey",src:"https://github.com/josepjaume.png"},text:"Josep Jaume Rey"},actions:[{label:"Edit",icon:s,onClick:n()},{label:"Comment",icon:V,onClick:n()}]},{label:"Members",value:{type:"text",content:"22"}}]}},x={args:{...l.args,description:"This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated."}},C={args:{title:"Product designers",avatar:{type:"team",name:"Product designers"},primaryAction:{label:"Add members",icon:ve,onClick:n()},secondaryActions:[{label:"Edit",icon:s,onClick:n()}],metadata:[{label:"Team leader",value:{type:"avatar",variant:{type:"person",firstName:"Josep Jaume",lastName:"Rey",src:"https://github.com/josepjaume.png"},text:"Josep Jaume Rey"},actions:[{label:"Edit",icon:s,onClick:n()},{label:"Comment",icon:V,onClick:n()}]},{label:"Members",value:{type:"text",content:"22"}}]}};var $,z,O;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: "Senior Product Designer",
    description: "Seeking an experienced product designer to lead design initiatives",
    status: {
      label: "Status",
      text: "Draft",
      variant: "neutral",
      actions: [{
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn()
      }]
    },
    primaryAction: {
      label: "Publish",
      icon: Icon.ArrowUp,
      onClick: fn()
    },
    secondaryActions: [{
      label: "Edit",
      icon: Icon.Pencil,
      onClick: fn()
    }],
    otherActions: [{
      label: "Archive",
      icon: Icon.Archive,
      onClick: fn()
    }, {
      label: "Copy URL",
      icon: Icon.LayersFront,
      onClick: fn()
    }, "separator", {
      label: "Unlist",
      icon: Icon.Delete,
      critical: true,
      onClick: fn()
    }],
    metadata: [{
      label: "Location",
      value: {
        type: "text",
        content: "Barcelona, Spain"
      }
    }, {
      label: "Team",
      value: {
        type: "avatar",
        variant: {
          type: "team",
          name: "Product design"
        },
        text: "Product design"
      }
    }]
  }
}`,...(O=(z=l.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var U,G,Z;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: undefined
  }
}`,...(Z=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var Y,K,Q;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    primaryAction: undefined,
    secondaryActions: [{
      label: "Edit",
      icon: Icon.Pencil,
      onClick: fn()
    }, {
      label: "Export",
      icon: Icon.Download,
      onClick: fn()
    }],
    metadata: [{
      label: "Created",
      value: {
        type: "date",
        formattedDate: "2024-01-01",
        icon: "critical"
      },
      actions: [{
        label: "Copy",
        icon: LayersFront,
        onClick: fn()
      }]
    }, {
      label: "Manager",
      value: {
        type: "avatar",
        variant: {
          type: "person",
          firstName: "Josep Jaume",
          lastName: "Rey",
          src: "https://github.com/josepjaume.png"
        },
        text: "Josep Jaume Rey"
      },
      actions: [{
        label: "Edit",
        icon: Pencil,
        onClick: fn()
      }, {
        label: "Comment",
        icon: Comment,
        onClick: fn()
      }]
    }, {
      label: "Contract",
      value: {
        type: "status",
        label: "Pending",
        variant: "warning"
      }
    }]
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,ee,ne;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    secondaryActions: [{
      label: "Promote",
      onClick: fn(),
      disabled: true,
      tooltip: "Recharge your account"
    }],
    otherActions: [{
      label: "Share",
      icon: ExternalLink,
      onClick: fn()
    }, {
      label: "Download",
      icon: Download,
      onClick: fn()
    }, "separator", {
      label: "Archive",
      icon: Archive,
      critical: true,
      onClick: fn()
    }]
  }
}`,...(ne=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,ie;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    title: "Factorial",
    description: "HR Software to Empower Your Team",
    avatar: {
      type: "company",
      name: "Factorial",
      src: "https://github.com/factorialco.png"
    },
    secondaryActions: [{
      label: "Edit client",
      icon: Icon.Pencil,
      onClick: fn()
    }],
    metadata: [{
      label: "Legal name",
      value: {
        type: "text",
        content: "Everyday Software S.L."
      },
      actions: [{
        label: "Copy",
        icon: Icon.LayersFront,
        onClick: fn()
      }]
    }, {
      label: "Tax identification number",
      value: {
        type: "text",
        content: "B-675254394"
      }
    }]
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: "color-contrast",
          enabled: false
        }]
      }
    }
  }
}`,...(ie=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var oe,re,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    title: "René Galindo",
    description: "Product Design Lead",
    avatar: {
      type: "person",
      firstName: "René",
      lastName: "Galindo",
      src: "https://github.com/renegalindo.png"
    },
    metadata: [{
      label: "Manager",
      value: {
        type: "avatar",
        variant: {
          type: "person",
          firstName: "Ilya",
          lastName: "Zayats",
          src: "https://github.com/somebody32.png"
        },
        text: "ilya Zayats"
      }
    }, {
      label: "Team",
      value: {
        type: "avatar",
        variant: {
          type: "team",
          name: "Product design"
        },
        text: "Product design"
      }
    }, {
      label: "Phone",
      value: {
        type: "text",
        content: "+34 675 254 394"
      },
      actions: [{
        label: "Chat in WhatsApp",
        icon: Icon.WhatsappChat,
        onClick: fn()
      }, {
        label: "Copy",
        icon: Icon.LayersFront,
        onClick: fn()
      }]
    }]
  }
}`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ce,de;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    title: "Product designers",
    description: "Rectangle drawers and post-it stickers",
    avatar: {
      type: "team",
      name: "Product designers"
    },
    primaryAction: {
      label: "Add members",
      icon: Icon.Add,
      onClick: fn()
    },
    secondaryActions: [{
      label: "Edit",
      icon: Icon.Pencil,
      onClick: fn()
    }],
    otherActions: [{
      label: "Export",
      icon: Icon.Download,
      onClick: fn()
    }, {
      label: "Share",
      icon: Icon.ExternalLink,
      onClick: fn()
    }, "separator", {
      label: "Delete",
      icon: Icon.Delete,
      critical: true,
      onClick: fn()
    }],
    metadata: [{
      label: "Team leader",
      value: {
        type: "avatar",
        variant: {
          type: "person",
          firstName: "Josep Jaume",
          lastName: "Rey",
          src: "https://github.com/josepjaume.png"
        },
        text: "Josep Jaume Rey"
      },
      actions: [{
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn()
      }, {
        label: "Comment",
        icon: Icon.Comment,
        onClick: fn()
      }]
    }, {
      label: "Members",
      value: {
        type: "text",
        content: "22"
      }
    }]
  }
}`,...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,ue;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: "This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated."
  }
}`,...(ue=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var fe,ge,be;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    title: "Product designers",
    avatar: {
      type: "team",
      name: "Product designers"
    },
    primaryAction: {
      label: "Add members",
      icon: Icon.Add,
      onClick: fn()
    },
    secondaryActions: [{
      label: "Edit",
      icon: Icon.Pencil,
      onClick: fn()
    }],
    metadata: [{
      label: "Team leader",
      value: {
        type: "avatar",
        variant: {
          type: "person",
          firstName: "Josep Jaume",
          lastName: "Rey",
          src: "https://github.com/josepjaume.png"
        },
        text: "Josep Jaume Rey"
      },
      actions: [{
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn()
      }, {
        label: "Comment",
        icon: Icon.Comment,
        onClick: fn()
      }]
    }, {
      label: "Members",
      value: {
        type: "text",
        content: "22"
      }
    }]
  }
}`,...(be=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};const Fe=["Default","Simple","Metadata","WithOtherActions","CompanyHeader","PersonHeader","TeamHeader","WithLongDescription","NoDescription"],nn=Object.freeze(Object.defineProperty({__proto__:null,CompanyHeader:h,Default:l,Metadata:g,NoDescription:C,PersonHeader:y,Simple:f,TeamHeader:v,WithLongDescription:x,WithOtherActions:b,__namedExportsOrder:Fe,default:Ie},Symbol.toStringTag,{value:"Module"}));export{h as C,l as D,y as P,nn as R,v as T};
