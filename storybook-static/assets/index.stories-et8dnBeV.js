import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./Save-B3VvXevP.js";import{F as je}from"./Briefcase-Bq4R30UR.js";import{F as Se}from"./EllipsisHorizontal-CXMIya4N.js";import{F as Ne}from"./Settings-Cz6pRfwJ.js";import{B as T}from"./index-Blak80_u.js";import{I as A}from"./index-CDBnMHOu.js";import{S as k}from"./index-X_rOtbsL.js";import{u as Ae}from"./FrameProvider-NhU2Dbb2.js";import{T as we}from"./index-Ci88gSgP.js";import{F as We}from"./ChevronDown-LBI9f9x4.js";import{F as Ee}from"./ChevronLeft-D47n-iX-.js";import{F as _e}from"./ChevronUp-DDAshzCv.js";import{F as Le}from"./Menu-BYWZauqM.js";import{L as E}from"./linkHandler-fUi2qCbR.js";import{c as w}from"./utils-B2yEwIwY.js";import{S as Pe}from"./skeleton-BQT1AIt_.js";import{D as Be}from"./index-B79dpo_y.js";import{B as Fe}from"./index-CsFqNNCa.js";import{A as Me}from"./index-Dy8WLFmQ.js";import{m as Te}from"./proxy-CqNJYjyK.js";function z({icon:r,href:a,label:i,disabled:l}){return e.jsx(E,{href:l?"":a,title:i,"aria-label":i,className:w("inline-flex aspect-square h-6 items-center justify-center rounded-sm border border-solid border-f1-border bg-f1-background px-0 text-f1-foreground hover:border-f1-border-hover",l&&"pointer-events-none opacity-50"),children:e.jsx(A,{icon:r,size:"md"})})}function W({module:r,statusTag:a=void 0,breadcrumbs:i=[],actions:l=[],embedded:s=!1,navigation:o}){var P,B,F,M;const{sidebarState:xe,toggleSidebar:ye}=Ae(),n=[{id:r.href,label:r.name,href:r.href,icon:r.icon},...i],_=a&&Object.keys(a).length!==0,j=i.length>0,S=!s&&l.length>0,L=n[n.length-1],N=j?n[n.length-2]:null;return e.jsxs("div",{className:w("flex items-center justify-between px-5 py-4 xs:px-6",s?"h-12":"h-16"),children:[e.jsxs("div",{className:"flex flex-grow items-center",children:[e.jsx(Me,{children:!s&&xe!=="locked"&&e.jsx(Te.div,{initial:{opacity:0,width:0},animate:{opacity:1,width:"auto"},exit:{opacity:0,width:0},children:e.jsx("div",{className:"mr-3",children:e.jsx(T,{ref:d=>{d==null||d.focus()},variant:"ghost",hideLabel:!0,round:!0,onClick:ye,label:"Open main menu",icon:Le})})})}),e.jsxs("div",{className:w("flex flex-grow items-center gap-2",s&&j&&"justify-center"),children:[s&&j&&N&&!("loading"in N)&&e.jsx("div",{className:"absolute left-4",children:e.jsx(E,{href:N.href,children:e.jsx(T,{variant:"ghost",hideLabel:!0,round:!0,label:"Back",icon:Ee})})}),s&&j?e.jsx("div",{className:"text-lg font-semibold text-f1-foreground",children:"loading"in L?e.jsx(Pe,{className:"h-4 w-24"}):L.label}):e.jsx(Fe,{breadcrumbs:n},n[0].id)]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[!s&&_&&e.jsx("div",{children:a.tooltip?e.jsx(we,{label:a.tooltip,children:e.jsx("div",{children:e.jsx(k,{text:a.text,variant:a.variant,additionalAccesibleText:a.tooltip})})}):e.jsx(k,{text:a.text,variant:a.variant})}),!s&&_&&(o||S)&&e.jsx("div",{className:"h-4 w-px bg-f1-border-secondary"}),o&&e.jsxs("div",{className:"flex items-center gap-3",children:[o.counter&&e.jsxs("span",{className:"text-sm text-f1-foreground-secondary",children:[o.counter.current,"/",o.counter.total]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(z,{icon:_e,label:((P=o.previous)==null?void 0:P.title)||"Previous",href:((B=o.previous)==null?void 0:B.url)||"",disabled:!o.previous}),e.jsx(z,{icon:We,label:((F=o.next)==null?void 0:F.title)||"Next",href:((M=o.next)==null?void 0:M.url)||"",disabled:!o.next})]})]}),o&&S&&e.jsx("div",{className:"h-4 w-px bg-f1-border-secondary"}),S&&e.jsx("div",{className:"items-right flex gap-2",children:l.map((d,ve)=>e.jsx(ke,{action:d},ve))})]})]})}function ke({action:r}){return"actions"in r?e.jsx(Be,{items:r.actions,children:e.jsx("button",{title:r.label,className:"inline-flex aspect-square h-8 items-center justify-center rounded border border-solid border-f1-border bg-f1-background-inverse-secondary px-0 text-f1-foreground hover:border-f1-border-hover",children:e.jsx(A,{icon:r.icon,size:"md"})})}):e.jsx(E,{href:r.href,title:r.label,className:"inline-flex aspect-square h-8 items-center justify-center rounded border border-solid border-f1-border bg-f1-background-inverse-secondary px-0 text-f1-foreground hover:border-f1-border-hover",children:e.jsx(A,{icon:r.icon,size:"md"})})}try{W.displayName="PageHeader",W.__docgenInfo={description:"",displayName:"PageHeader",props:{module:{defaultValue:null,description:"",name:"module",required:!0,type:{name:"{ name: string; href: string; icon: IconType; }"}},statusTag:{defaultValue:{value:"undefined"},description:"",name:"statusTag",required:!1,type:{name:"{ text: string; variant: Variant; tooltip?: string; }"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"PageAction[]"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"NavigationProps"}},embedded:{defaultValue:{value:"false"},description:"",name:"embedded",required:!1,type:{name:"boolean"}},breadcrumbs:{defaultValue:{value:"[]"},description:"",name:"breadcrumbs",required:!1,type:{name:"BreadcrumbItemType[]"}}}}}catch{}const ze={title:"Navigation/PageHeader",component:W,tags:["autodocs","experimental"],parameters:{layout:"fullscreen",a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},decorators:[r=>e.jsx("div",{className:"bg-f1-background",children:e.jsx(r,{})})]},t={name:"Time Tracking",href:"/time-tracking",icon:je},be=[{label:"Settings",icon:Ne,href:"/settings"},{label:"More options",icon:Se,actions:[{label:"Download",href:"/download"},{label:"Export",href:"/export"}]}],ge={previous:{url:"/previous",title:"Previous Employee: John Smith"},next:{url:"/next",title:"Next Employee: Sarah Johnson"},counter:{current:1,total:30}},c={args:{module:t}},m={args:{module:t,actions:be}},u={args:{module:t,statusTag:{text:"Published",variant:"positive"}}},p={args:{module:t,statusTag:{text:"Draft",variant:"warning",tooltip:"This document is not yet published"}}},f={args:{module:t,navigation:ge}},h={args:{module:t,navigation:{next:{url:"/next",title:"Next Employee: Sarah Johnson"},counter:{current:1,total:30}}}},b={args:{module:t,breadcrumbs:[{id:"employees",label:"Employees",href:"/employees"},{id:"employee",label:"Ainhoa Aznar Lago",href:"/employees/123"}]}},g={args:{module:t,breadcrumbs:[{id:"employees",label:"Employees",href:"/employees"},{type:"select",id:"employee",label:"Ainhoa Aznar Lago",searchbox:!0,options:Array.from({length:10},(r,a)=>({value:a.toString(),label:`Offer ${a}`})),value:"1",onChange:r=>{console.log("WithSelectBreadcrumb value",r)}}]}},x={args:{module:t,breadcrumbs:[{id:"employees",label:"Employees",href:"/employees"},{id:"employee",label:"Ainhoa Aznar Lago",href:"/employees/123"}],navigation:ge,statusTag:{text:"Draft",tooltip:"This employee profile is not yet published",variant:"critical"},actions:be}},y={args:{module:t,embedded:!0,breadcrumbs:[{id:"employees",label:"Employees",href:"/employees"},{id:"employee",label:"Ainhoa Aznar Lago",href:"/employees/123"}]}},v={args:{module:t,embedded:!0,breadcrumbs:[{id:"employees",label:"Employees",href:"/employees"},{id:"loading",loading:!0}]}};var D,q,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    module: defaultModule
  }
}`,...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var R,$,O;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    module: defaultModule,
    actions: defaultActions
  }
}`,...(O=($=m.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var I,H,J;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    module: defaultModule,
    statusTag: {
      text: "Published",
      variant: "positive"
    }
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var C,G,K;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    module: defaultModule,
    statusTag: {
      text: "Draft",
      variant: "warning",
      tooltip: "This document is not yet published"
    }
  }
}`,...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    module: defaultModule,
    navigation: defaultNavigation
  }
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    module: defaultModule,
    navigation: {
      next: {
        url: "/next",
        title: "Next Employee: Sarah Johnson"
      },
      counter: {
        current: 1,
        total: 30
      }
    }
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,oe;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    module: defaultModule,
    breadcrumbs: [{
      id: "employees",
      label: "Employees",
      href: "/employees"
    }, {
      id: "employee",
      label: "Ainhoa Aznar Lago",
      href: "/employees/123"
    }]
  }
}`,...(oe=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,se,ne;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    module: defaultModule,
    breadcrumbs: [{
      id: "employees",
      label: "Employees",
      href: "/employees"
    }, {
      type: "select",
      id: "employee",
      label: "Ainhoa Aznar Lago",
      searchbox: true,
      options: Array.from({
        length: 10
      }, (_, idx) => ({
        value: idx.toString(),
        label: \`Offer \${idx}\`
      })),
      value: "1",
      onChange: value => {
        console.log("WithSelectBreadcrumb value", value);
      }
    }]
  }
}`,...(ne=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,le,de;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    module: defaultModule,
    breadcrumbs: [{
      id: "employees",
      label: "Employees",
      href: "/employees"
    }, {
      id: "employee",
      label: "Ainhoa Aznar Lago",
      href: "/employees/123"
    }],
    navigation: defaultNavigation,
    statusTag: {
      text: "Draft",
      tooltip: "This employee profile is not yet published",
      variant: "critical"
    },
    actions: defaultActions
  }
}`,...(de=(le=x.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,me,ue;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    module: defaultModule,
    embedded: true,
    breadcrumbs: [{
      id: "employees",
      label: "Employees",
      href: "/employees"
    }, {
      id: "employee",
      label: "Ainhoa Aznar Lago",
      href: "/employees/123"
    }]
  }
}`,...(ue=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,fe,he;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    module: defaultModule,
    embedded: true,
    breadcrumbs: [{
      id: "employees",
      label: "Employees",
      href: "/employees"
    }, {
      id: "loading",
      loading: true
    }]
  }
}`,...(he=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const De=["Default","WithActions","WithStatus","WithStatusVariants","WithNavigation","WithNavigationDisabled","WithBreadcrumbs","WithSelectBreadcrumb","WithEverything","Embedded","EmbeddedWithLoading"],sr=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Embedded:y,EmbeddedWithLoading:v,WithActions:m,WithBreadcrumbs:b,WithEverything:x,WithNavigation:f,WithNavigationDisabled:h,WithSelectBreadcrumb:g,WithStatus:u,WithStatusVariants:p,__namedExportsOrder:De,default:ze},Symbol.toStringTag,{value:"Module"}));export{W as P,m as W,sr as i};
