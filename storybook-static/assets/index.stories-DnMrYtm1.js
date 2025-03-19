import{j as x}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-B6o7_jwP.js";import{N as o}from"./index-mW0ngcE-.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./Save-B3VvXevP.js";import"./ChevronDown-LBI9f9x4.js";import"./ChevronUp-DDAshzCv.js";import"./input-BTRPgdqa.js";const O={render:e=>x.jsx(o,{...e},JSON.stringify(e)),title:"Input/Number",component:o,tags:["autodocs","experimental"],args:{disabled:!1,placeholder:"Placeholder text here",locale:"en-US"},argTypes:{value:{control:{type:"number"}},locale:{options:["en-US","es-ES","pt-BR"],control:{type:"select"}},maxDecimals:{control:{type:"number"}}},parameters:{jsx:{filterProps:(e,s)=>s!=="key"}}},r={args:{}},a={args:{min:1,max:5,step:1},render:e=>{const[s,S]=b.useState(e.value??1);return x.jsx(o,{...e,value:s,onChange:S})}},t={args:{value:32.5,disabled:!0,locale:"es-ES"}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 5,
    step: 1
  },
  render: props => {
    const [value, setValue] = useState<number | null>(props.value ?? 1);
    return <NumberInput {...props} value={value} onChange={setValue} />;
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,d,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: 32.5,
    disabled: true,
    locale: "es-ES"
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const R=["Primary","WithStep","Disabled"];export{t as Disabled,r as Primary,a as WithStep,R as __namedExportsOrder,O as default};
