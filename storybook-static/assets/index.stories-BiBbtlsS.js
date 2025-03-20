import{j as S}from"./jsx-runtime-Cf8x2fCZ.js";import{f as g}from"./index-DuopzoTV.js";import{r as k}from"./index-B6o7_jwP.js";import{P as l}from"./index-DrJ36aH6.js";const x={component:l,title:"Preset",parameters:{layout:"centered"},tags:["autodocs","experimental"],argTypes:{label:{description:"The label of the preset"},number:{description:"The number of the preset"}}},s={args:{label:"Label",number:2,onClick:g(),selected:!1},render:a=>{const[e,n]=k.useState(!1);return S.jsx(l,{...a,selected:e,onClick:()=>n(!e)})}},r={args:{label:"Label",number:void 0,onClick:g(),selected:!1},render:a=>{const[e,n]=k.useState(!1);return S.jsx(l,{...a,selected:e,onClick:()=>n(!e)})}},t={args:{label:"Label",number:2}};var o,c,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Label",
    number: 2,
    onClick: fn(),
    selected: false
  },
  render: args => {
    const [isSelected, setIsSelected] = useState(false);
    return <Preset {...args} selected={isSelected} onClick={() => setIsSelected(!isSelected)} />;
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,m,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Label",
    number: undefined,
    onClick: fn(),
    selected: false
  },
  render: args => {
    const [isSelected, setIsSelected] = useState(false);
    return <Preset {...args} selected={isSelected} onClick={() => setIsSelected(!isSelected)} />;
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Label",
    number: 2
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const C=["Default","NoNumber","NotInteractive"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:s,NoNumber:r,NotInteractive:t,__namedExportsOrder:C,default:x},Symbol.toStringTag,{value:"Module"}));export{s as D,r as N,L as P,t as a};
