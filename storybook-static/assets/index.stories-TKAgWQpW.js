import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as N}from"./index-Blak80_u.js";import{A as c,a as p}from"./index-JMzSVw1J.js";import{P as b}from"./placeholder-D2Lqcnmi.js";import{S as l}from"./scrollarea-CRia_fH-.js";import"./index-yBjzXJbu.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./component-BI8hiL87.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./createLucideIcon-DSAetUgs.js";import"./index-BKKrtyrw.js";import"./index-yradL_ub.js";import"./index-BNL5Yqmu.js";import"./index-BiB69Vyw.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";const re={title:"ScrollArea",component:l,parameters:{layout:"centered"},tags:["autodocs","experimental","no-sidebar"],args:{}},a={args:{},render:r=>e.jsx("div",{className:"flex h-96 flex-col gap-4 overflow-hidden",children:e.jsx(l,{...r,children:e.jsx(o,{})})})},s={args:{},render:r=>e.jsx("div",{className:"flex w-48 flex-col gap-4 overflow-hidden",children:e.jsx(l,{...r,children:e.jsx(o,{length:4})})})},t={args:{},render:r=>e.jsx("div",{className:"flex h-96 w-48 flex-row gap-4 overflow-hidden",children:e.jsx(l,{...r,children:e.jsx(o,{})})})},n={args:{},render:r=>e.jsxs("div",{className:"h-96 flex-row gap-8",children:[e.jsxs("div",{className:"flex h-full flex-col gap-4 overflow-hidden",children:[e.jsx(c,{variant:"positive",children:e.jsx(p,{children:"New ScrollArea Component"})}),e.jsx(l,{...r,children:e.jsx(o,{})})]}),e.jsxs("div",{className:"flex h-full flex-col gap-4 overflow-hidden",children:[e.jsx(c,{variant:"warning",children:e.jsx(p,{children:"Default ScrollBar"})}),e.jsx("div",{className:"flex flex-col gap-4 overflow-auto",children:e.jsx(o,{})})]})]})},o=({length:r=20})=>e.jsxs("div",{className:"flex w-96 flex-col gap-4",children:[e.jsx(N,{label:"Some button",onClick:()=>alert("This button is needed so the content can be focused for accessibility purposes.")}),Array.from({length:r}).map((k,i)=>e.jsxs(b,{children:["Element ",i+1," in a scrollable placeholder"]},i))]});var d,m,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: props => <div className="flex h-96 flex-col gap-4 overflow-hidden">
      <ScrollArea {...props}>
        <StackWithOverflow />
      </ScrollArea>
    </div>
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,h,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: props => <div className="flex w-48 flex-col gap-4 overflow-hidden">
      <ScrollArea {...props}>
        <StackWithOverflow length={4} />
      </ScrollArea>
    </div>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,u,w;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: props => <div className="flex h-96 w-48 flex-row gap-4 overflow-hidden">
      <ScrollArea {...props}>
        <StackWithOverflow />
      </ScrollArea>
    </div>
}`,...(w=(u=t.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var S,j,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: props => <div className="h-96 flex-row gap-8">
      <div className="flex h-full flex-col gap-4 overflow-hidden">
        <Alert variant="positive">
          <AlertTitle>New ScrollArea Component</AlertTitle>
        </Alert>
        <ScrollArea {...props}>
          <StackWithOverflow />
        </ScrollArea>
      </div>
      <div className="flex h-full flex-col gap-4 overflow-hidden">
        <Alert variant="warning">
          <AlertTitle>Default ScrollBar</AlertTitle>
        </Alert>
        <div className="flex flex-col gap-4 overflow-auto">
          <StackWithOverflow />
        </div>
      </div>
    </div>
}`,...(A=(j=n.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const oe=["Default","Horizontal","Both","Comparison"];export{t as Both,n as Comparison,a as Default,s as Horizontal,oe as __namedExportsOrder,re as default};
