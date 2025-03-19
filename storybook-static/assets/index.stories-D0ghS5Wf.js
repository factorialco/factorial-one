import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{A as b}from"./index-CDgHiyp5.js";import{P as C}from"./placeholder-D2Lqcnmi.js";import{C as L}from"./index-NhAtl84B.js";import{r as s}from"./index-B6o7_jwP.js";import V from"./index.stories-CQGnBhGI.js";import{B as W}from"./index-CNWyEi7j.js";import A from"./index.stories-DIbPS6E2.js";import{L as H,m as R}from"./index.stories-cH3QOrUF.js";import{R as S,m as O}from"./index.stories-DBKWyhux.js";import{V as $,m as E}from"./index.stories-Bl9YY0qO.js";import{W as M}from"./index-DdikQjRD.js";const P={xs:1,sm:2,md:2,lg:2},l=s.forwardRef(function({widgets:o,children:m},_){const p=s.useRef(null);s.useImperativeHandle(_,()=>p.current);const i=s.Children.toArray(o).filter(n=>!!n).map((n,N)=>e.jsx("div",{className:"h-full @5xl:h-auto [&>div]:h-full",children:n},N));return e.jsxs("div",{ref:p,className:"@container",children:[e.jsxs("div",{className:"flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",children:[e.jsx(L,{columns:P,showArrows:!1,children:i}),e.jsx("main",{children:m})]}),e.jsxs("div",{className:"hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",children:[e.jsx("div",{className:"col-span-3 flex flex-row gap-5 *:flex-1",children:i.slice(0,3)}),e.jsx("main",{className:"col-span-2",children:m}),e.jsx("div",{className:"flex flex-1 flex-col gap-5",children:i.slice(3)})]})]})});try{l.displayName="HomeLayout",l.__docgenInfo={description:"",displayName:"HomeLayout",props:{widgets:{defaultValue:null,description:"",name:"widgets",required:!1,type:{name:"ReactNode[]"}}}}}catch{}const B=[e.jsx(b,{...V.args},"area-chart"),e.jsx(M,{header:{title:"A form widget"},children:e.jsx("p",{children:"Never gonna give you up. Never gonna let you down. Never gonna turn around and desert you."})},"never-gonna"),e.jsx(H,{...R.args},"line-chart"),e.jsx(W,{...A.args},"bar-chart"),e.jsx($,{...E.args},"vertical-bar-chart"),e.jsx(S,{...O.args},"radial-progress")],y={title:"Layout/HomeLayout",component:l,tags:["autodocs","experimental"],args:{children:e.jsx("div",{children:e.jsx(C,{className:"h-[1500px]",children:"Content"})}),widgets:Array.from({length:6},(d,o)=>B[o])}},r={parameters:{viewport:{defaultViewport:"reset"}},args:y.args},a={parameters:{viewport:{defaultViewport:"iphone14pro"}}},t={parameters:{viewport:{defaultViewport:"ipad"}}};var c,u,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "reset"
    }
  },
  args: meta.args
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,x,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "iphone14pro"
    }
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,v,w;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "ipad"
    }
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const D=["Default","Mobile","Tablet"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Mobile:a,Tablet:t,__namedExportsOrder:D,default:y},Symbol.toStringTag,{value:"Module"}));export{r as D,l as H,Y as i};
