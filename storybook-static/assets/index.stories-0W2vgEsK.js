import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-B6o7_jwP.js";import{C as o}from"./index-Dx7Y6k44.js";const j={component:o,tags:["autodocs","experimental"],title:"Checkbox",parameters:{layout:"centered"},argTypes:{title:{control:"text",description:"The title of the checkbox"},id:{control:"text",description:"The id of the checkbox"},checked:{control:"boolean",description:"The checked state of the checkbox"},onCheckedChange:{control:!1,description:"The callback function that is called when the checkbox is checked"},indeterminate:{control:"boolean",description:"Whether the checkbox is indeterminate",defaultValue:{summary:!1}},disabled:{control:"boolean",description:"Whether the checkbox is disabled",defaultValue:{summary:!1}},value:{control:"text",description:"The value of the checkbox"}}},r={args:{title:"Checkbox"},render:e=>{const[t,c]=h.useState(!1);return d.jsx(o,{...e,checked:t,onCheckedChange:c})}},s={args:{title:"Disabled checkbox",disabled:!0},render:e=>{const[t,c]=h.useState(!1);return d.jsx(o,{...e,checked:t,onCheckedChange:c})}},a={args:{title:"Indeterminate checkbox",indeterminate:!0},render:e=>{const[t,c]=h.useState(!1);return d.jsx(o,{...e,checked:t,onCheckedChange:c})}},n={args:{title:"Checked checkbox",checked:!0},render:e=>{const[t,c]=h.useState(!0);return d.jsx(o,{...e,checked:t,onCheckedChange:c})}};var k,i,l;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: "Checkbox"
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,C,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Disabled checkbox",
    disabled: true
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />;
  }
}`,...(m=(C=s.parameters)==null?void 0:C.docs)==null?void 0:m.source}}};var b,p,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Indeterminate checkbox",
    indeterminate: true
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />;
  }
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,f,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Checked checkbox",
    checked: true
  },
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Checkbox {...args} checked={checked} onCheckedChange={setChecked} />;
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const D=["Default","Disabled","Indeterminate","Checked"],I=Object.freeze(Object.defineProperty({__proto__:null,Checked:n,Default:r,Disabled:s,Indeterminate:a,__namedExportsOrder:D,default:j},Symbol.toStringTag,{value:"Module"}));export{I as C,r as D,a as I,s as a};
