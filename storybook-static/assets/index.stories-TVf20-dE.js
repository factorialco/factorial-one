import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as r}from"./placeholder-D2Lqcnmi.js";import{c as G}from"./utils-B2yEwIwY.js";import{c as W}from"./index-Cwk_nZHn.js";import{R}from"./index-B6o7_jwP.js";import{F as B}from"./_FlexBox-DGrER5Rg.js";import{g as D}from"./shared-BFpDpFz4.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E=W({base:"flex-row",variants:{gap:{...D},wrap:{true:"flex-wrap"}},defaultVariants:{wrap:!0}}),n=R.forwardRef(function({className:s,gap:l,wrap:I,...C},A){return e.jsx(B,{className:G(E({gap:l,wrap:I}),s),ref:A,...C})});try{n.displayName="Split",n.__docgenInfo={description:"",displayName:"Split",props:{inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"full"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"full"'}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"auto"'}]}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"p-2"'},{value:'"p-4"'},{value:'"p-8"'},{value:'"p-12"'},{value:'"p-16"'}]}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"sm"'},{value:'"xs"'},{value:'"xl"'},{value:'"screen-sm"'},{value:'"screen-md"'},{value:'"screen-lg"'},{value:'"screen-xl"'},{value:'"screen-2xl"'}]}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"p-2"'},{value:'"p-4"'},{value:'"p-8"'},{value:'"p-12"'},{value:'"p-16"'}]}},basis:{defaultValue:null,description:"",name:"basis",required:!1,type:{name:"enum",value:[{value:'"0"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"space-between"'},{value:'"stretch"'}]}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"space-between"'},{value:'"stretch"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"boolean"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:'"4"'},{value:'"2"'},{value:'"8"'}]}}}}}catch{}const M={title:"Layout/Blocks/Split",component:n,tags:["autodocs","experimental"],args:{gap:"4"},render:a=>e.jsx(n,{...a,children:Array.from({length:10}).map((s,l)=>e.jsx(r,{className:"shrink",children:l+1},l))})},t={args:{}},i={render:a=>e.jsx(n,{...a,children:Array.from({length:30}).map((s,l)=>e.jsx(r,{className:"shrink",children:l+1},l))})},o={render:a=>e.jsxs(n,{...a,grow:!0,children:[e.jsx(r,{className:"shrink",children:"1"}),e.jsx(r,{className:"grow",children:"Grow (2)"}),e.jsx(r,{className:"shrink",children:"3"})]})},u={args:{gap:"4"},render:a=>e.jsx(n,{...a,children:Array.from({length:30}).map((s,l)=>e.jsx(r,{className:"grow",children:l+1},l))})},c={args:{alignItems:"center"},render:a=>e.jsxs(n,{...a,children:[e.jsx(r,{children:"Single line content"}),e.jsxs(r,{className:"grow",children:["Content with ",e.jsx("br",{})," multiple lines ",e.jsx("br",{})," of text ",e.jsx("br",{})," to showcase how elements ",e.jsx("br",{})," with different ",e.jsx("br",{})," height will be aligned"]}),e.jsxs(r,{children:["Content with ",e.jsx("br",{})," two lines"]})]})},d={args:{inline:!0,gap:"4"},render:a=>e.jsxs("div",{children:["This is some",e.jsxs(n,{...a,children:[e.jsx(r,{children:"Inline"}),e.jsx(r,{children:"Content"})]}),"that plays well with text."]})};var p,m,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,f,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <Split {...args}>
        {Array.from({
        length: 30
      }).map((_, i) => <Placeholder key={i} className="shrink">
            {i + 1}
          </Placeholder>)}
      </Split>;
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,x,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Split {...args} grow>
      <Placeholder className="shrink">1</Placeholder>
      <Placeholder className="grow">Grow (2)</Placeholder>
      <Placeholder className="shrink">3</Placeholder>
    </Split>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,b,S;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    gap: "4"
  },
  render: args => <Split {...args}>
      {Array.from({
      length: 30
    }).map((_, i) => <Placeholder key={i} className="grow">
          {i + 1}
        </Placeholder>)}
    </Split>
}`,...(S=(b=u.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var P,V,N;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    alignItems: "center"
  },
  render: args => <Split {...args}>
      <Placeholder>Single line content</Placeholder>
      <Placeholder className="grow">
        Content with <br /> multiple lines <br /> of text <br /> to showcase how
        elements <br /> with different <br /> height will be aligned
      </Placeholder>
      <Placeholder>
        Content with <br /> two lines
      </Placeholder>
    </Split>
}`,...(N=(V=c.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var _,q,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    inline: true,
    gap: "4"
  },
  render: args => <div>
      This is some
      <Split {...args}>
        <Placeholder>Inline</Placeholder>
        <Placeholder>Content</Placeholder>
      </Split>
      that plays well with text.
    </div>
}`,...(k=(q=d.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};const Q=["Default","Wrap","Grow","WrapGrow","VerticalAlign","Inline"];export{t as Default,o as Grow,d as Inline,c as VerticalAlign,i as Wrap,u as WrapGrow,Q as __namedExportsOrder,M as default};
