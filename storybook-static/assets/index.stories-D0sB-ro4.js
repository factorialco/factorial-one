import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./Save-B3VvXevP.js";import{F as Y}from"./Calendar-TxRZD-CV.js";import{F as B,a as G,b as J,c as K,d as Q,e as U}from"./Sparkles-BDelxFQy.js";import{F as W}from"./Home-BAwEvcom.js";import{I as A}from"./index-CDBnMHOu.js";import{C as X}from"./index-B2OpD_bL.js";import{F as Z}from"./ChevronDown-LBI9f9x4.js";import{u as ee}from"./a11y-GqbGs7UY.js";import{u as ne,L as oe}from"./linkHandler-fUi2qCbR.js";import{c as _,f as z}from"./utils-B2yEwIwY.js";import{r as s,R as te}from"./index-B6o7_jwP.js";import{c as ae}from"./index-DW48STyt.js";import{c as re,P as v}from"./index-BKKrtyrw.js";import{u as se}from"./index-BL6sZKvk.js";import{u as ie}from"./index-BNL5Yqmu.js";import{u as le}from"./index-B7GDqc_s.js";import{P as ce}from"./index-yradL_ub.js";import{u as de}from"./index-Bg_GsVj5.js";import{m as E}from"./proxy-CqNJYjyK.js";var R="Collapsible",[pe,ze]=re(R),[fe,N]=pe(R),L=s.forwardRef((e,o)=>{const{__scopeCollapsible:r,open:a,defaultOpen:t,disabled:i,onOpenChange:c,...m}=e,[f=!1,d]=se({prop:a,defaultProp:t,onChange:c});return n.jsx(fe,{scope:r,disabled:i,contentId:de(),open:f,onOpenToggle:s.useCallback(()=>d(b=>!b),[d]),children:n.jsx(v.div,{"data-state":I(f),"data-disabled":i?"":void 0,...m,ref:o})})});L.displayName=R;var q="CollapsibleTrigger",H=s.forwardRef((e,o)=>{const{__scopeCollapsible:r,...a}=e,t=N(q,r);return n.jsx(v.button,{type:"button","aria-controls":t.contentId,"aria-expanded":t.open||!1,"data-state":I(t.open),"data-disabled":t.disabled?"":void 0,disabled:t.disabled,...a,ref:o,onClick:ae(e.onClick,t.onOpenToggle)})});H.displayName=q;var j="CollapsibleContent",V=s.forwardRef((e,o)=>{const{forceMount:r,...a}=e,t=N(j,e.__scopeCollapsible);return n.jsx(ce,{present:r||t.open,children:({present:i})=>n.jsx(ue,{...a,ref:o,present:i})})});V.displayName=j;var ue=s.forwardRef((e,o)=>{const{__scopeCollapsible:r,present:a,children:t,...i}=e,c=N(j,r),[m,f]=s.useState(a),d=s.useRef(null),b=le(o,d),w=s.useRef(0),M=w.current,O=s.useRef(0),P=O.current,x=c.open||m,F=s.useRef(x),u=s.useRef(void 0);return s.useEffect(()=>{const l=requestAnimationFrame(()=>F.current=!1);return()=>cancelAnimationFrame(l)},[]),ie(()=>{const l=d.current;if(l){u.current=u.current||{transitionDuration:l.style.transitionDuration,animationName:l.style.animationName},l.style.transitionDuration="0s",l.style.animationName="none";const k=l.getBoundingClientRect();w.current=k.height,O.current=k.width,F.current||(l.style.transitionDuration=u.current.transitionDuration,l.style.animationName=u.current.animationName),f(a)}},[c.open,a]),n.jsx(v.div,{"data-state":I(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!x,...i,ref:b,style:{"--radix-collapsible-content-height":M?`${M}px`:void 0,"--radix-collapsible-content-width":P?`${P}px`:void 0,...e.style},children:x&&t})});function I(e){return e?"open":"closed"}var me=L;const h=me,g=H,C=V;try{h.displayName="Collapsible",h.__docgenInfo={description:"",displayName:"Collapsible",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="CollapsibleContent",C.__docgenInfo={description:"",displayName:"CollapsibleContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="CollapsibleTrigger",g.__docgenInfo={description:"",displayName:"CollapsibleTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const be=({item:e,active:o})=>n.jsxs("div",{className:"flex w-full items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-1.5 font-medium text-f1-foreground",children:[n.jsx(A,{icon:e.icon,size:"md",className:_("transition-colors",o?"text-f1-icon-bold":"text-f1-icon")}),n.jsx("span",{children:e.label})]}),e.badge&&n.jsx(X,{value:e.badge,size:"sm",type:"bold"})]}),T=({item:e})=>{const{isActive:o}=ne(),{label:r,...a}=e,t=o(a.href,{exact:a.exactMatch});return n.jsx(oe,{...a,className:_("flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",z("focus-visible:ring-inset"),t?"bg-f1-background-secondary text-f1-foreground":"hover:bg-f1-background-secondary"),children:n.jsx(be,{item:e,active:t})})},xe=({category:e})=>{const[o,r]=te.useState(e.isOpen!==!1),a=ee();return e.isRoot?n.jsx("div",{className:"flex flex-col gap-0.5",children:e.items.map((t,i)=>n.jsx(T,{item:t},i))}):n.jsxs(h,{open:o,onOpenChange:r,className:"flex w-full flex-col gap-0.5",children:[n.jsxs(g,{className:_("flex w-full cursor-pointer items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary hover:bg-f1-background-secondary",z("focus-visible:ring-inset")),children:[e.title,n.jsx(E.div,{initial:!1,animate:{rotate:o?0:-90},transition:{duration:a?0:.1},className:"h-3 w-3",children:n.jsx(A,{icon:Z,size:"xs",className:"text-f1-icon-secondary"})})]}),n.jsx(C,{forceMount:!0,className:"flex flex-col gap-1 overflow-hidden",children:n.jsx(E.div,{initial:{height:0,opacity:0},animate:{height:o?"auto":0,opacity:o?1:0,visibility:o?"visible":"hidden",pointerEvents:o?"auto":"none"},transition:{duration:a?0:.15,ease:[.165,.84,.44,1]},children:n.jsx("div",{className:"flex flex-col gap-0.5",children:e.items.map((t,i)=>n.jsx(T,{item:t},i))})})})]})};function y({tree:e}){return n.jsx("div",{className:"flex w-full flex-col gap-3 bg-transparent px-3",children:e.map((o,r)=>n.jsx(xe,{category:o},r))})}try{y.displayName="Menu",y.__docgenInfo={description:"",displayName:"Menu",props:{tree:{defaultValue:null,description:"",name:"tree",required:!0,type:{name:"MenuCategory[]"}}}}}catch{}const he={title:"Sidebar/Menu",component:y,parameters:{layout:"centered"},decorators:[e=>n.jsx("div",{className:"w-[240px] bg-f1-background-tertiary p-3",children:n.jsx(e,{})})],tags:["autodocs","experimental","no-sidebar"]},p={args:{tree:[{title:"Root",items:[{label:"Home",icon:W,href:"/",exactMatch:!0},{label:"Inbox",icon:B,href:"/inbox",badge:6},{label:"Discover Factorial",icon:G,href:"/discover"}],isRoot:!0},{title:"You",items:[{label:"Me",icon:J,href:"/me"},{label:"Clock in",icon:K,href:"/clock-in"},{label:"Time off",icon:Q,href:"/time-off"}],isOpen:!0},{title:"Your company",items:[{label:"Organization",icon:U,href:"/organization"},{label:"Calendar",icon:Y,href:"/calendar"}],isOpen:!0}]}};var S,$,D;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tree: [{
      title: "Root",
      items: [{
        label: "Home",
        icon: Icons.Home,
        href: "/",
        exactMatch: true
      }, {
        label: "Inbox",
        icon: Icons.Envelope,
        href: "/inbox",
        badge: 6
      }, {
        label: "Discover Factorial",
        icon: Icons.Sparkles,
        href: "/discover"
      }],
      isRoot: true
    }, {
      title: "You",
      items: [{
        label: "Me",
        icon: Icons.Person,
        href: "/me"
      }, {
        label: "Clock in",
        icon: Icons.Clock,
        href: "/clock-in"
      }, {
        label: "Time off",
        icon: Icons.PalmTree,
        href: "/time-off"
      }],
      isOpen: true
    }, {
      title: "Your company",
      items: [{
        label: "Organization",
        icon: Icons.People,
        href: "/organization"
      }, {
        label: "Calendar",
        icon: Icons.Calendar,
        href: "/calendar"
      }],
      isOpen: true
    }]
  }
}`,...(D=($=p.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const ge=["Default"],Le=Object.freeze(Object.defineProperty({__proto__:null,Default:p,__namedExportsOrder:ge,default:he},Symbol.toStringTag,{value:"Module"}));export{p as D,y as M,Le as i};
