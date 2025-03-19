import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{I as m}from"./index-j0m7VbSg.js";import{r as I}from"./index-B6o7_jwP.js";import{C as r}from"./index-Bw8Q85K6.js";import{F as L}from"./Placeholder-pote8B1m.js";const T={component:r,title:"Chip",parameters:{layout:"centered"},tags:["autodocs","experimental"],argTypes:{label:{description:"The label of the chip"},variant:{description:"The variant of the chip",options:["default","selected"],control:{type:"select"}},avatar:{description:"If defined, an avatar will be displayed in the chip"},icon:{control:"select",options:Object.keys(m),mapping:m,description:"If defined, an icon will be displayed in the chip"},onClose:{description:"If defined, the close icon will be displayed and the chip will be clickable"}}},i={args:{label:"Label",variant:"default"}},s={args:{label:"Label",variant:"default"},render:()=>{const[c,n]=I.useState([{id:1,label:"First Chip"},{id:2,label:"Second Chip"},{id:3,label:"Third Chip"}]),p=e=>{n(d=>d.filter(h=>h.id!==e))};return a.jsx("div",{className:"flex flex-wrap gap-2",children:c.map(e=>a.jsx(r,{label:e.label,variant:"default",onClose:()=>p(e.id)},e.id))})}},t={args:{label:"Dani Moreno",variant:"default",avatar:{type:"person",firstName:"Dani",lastName:"Moreno",src:"https://github.com/dani-moreno.png"}},render:({icon:c,...n})=>a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx(r,{...n}),a.jsx(r,{...n,label:"Design engineers",avatar:{type:"team",name:"Design engineers"}}),a.jsx(r,{...n,label:"Factorial",avatar:{type:"company",name:"Factorial",src:"https://github.com/factorialco.png"}})]})},l={args:{label:"Label",icon:L}},o={args:{label:"Label",variant:"selected"},render:()=>{const[c,n]=I.useState([{id:1,label:"First Chip"},{id:2,label:"Second Chip"},{id:3,label:"Third Chip"}]),p=e=>{n(d=>d.filter(h=>h.id!==e))};return a.jsx("div",{className:"flex flex-wrap gap-2",children:c.map(e=>a.jsx(r,{label:e.label,variant:"selected",onClose:()=>p(e.id)},e.id))})}};var b,f,u;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Label",
    variant: "default"
  }
}`,...(u=(f=i.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var C,g,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Label",
    variant: "default"
  },
  render: () => {
    const [chips, setChips] = useState([{
      id: 1,
      label: "First Chip"
    }, {
      id: 2,
      label: "Second Chip"
    }, {
      id: 3,
      label: "Third Chip"
    }]);
    const handleClose = (id: number) => {
      setChips(prevChips => prevChips.filter(chip => chip.id !== id));
    };
    return <div className="flex flex-wrap gap-2">
        {chips.map(chip => <Chip key={chip.id} label={chip.label} variant="default" onClose={() => handleClose(chip.id)} />)}
      </div>;
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,y,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Dani Moreno",
    variant: "default",
    avatar: {
      type: "person",
      firstName: "Dani",
      lastName: "Moreno",
      src: "https://github.com/dani-moreno.png"
    }
  },
  render: ({
    icon: _icon,
    ...args
  }) => <div className="flex flex-wrap gap-2">
      <Chip {...args} />
      <Chip {...args} label="Design engineers" avatar={{
      type: "team",
      name: "Design engineers"
    }} />
      <Chip {...args} label="Factorial" avatar={{
      type: "company",
      name: "Factorial",
      src: "https://github.com/factorialco.png"
    }} />
    </div>
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var j,w,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Label",
    icon: Icons.Placeholder
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var F,N,W;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Label",
    variant: "selected"
  },
  render: () => {
    const [chips, setChips] = useState([{
      id: 1,
      label: "First Chip"
    }, {
      id: 2,
      label: "Second Chip"
    }, {
      id: 3,
      label: "Third Chip"
    }]);
    const handleClose = (id: number) => {
      setChips(prevChips => prevChips.filter(chip => chip.id !== id));
    };
    return <div className="flex flex-wrap gap-2">
        {chips.map(chip => <Chip key={chip.id} label={chip.label} variant="selected" onClose={() => handleClose(chip.id)} />)}
      </div>;
  }
}`,...(W=(N=o.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const _=["Default","WithClose","WithAvatar","WithIcon","SelectedWithClose"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:i,SelectedWithClose:o,WithAvatar:t,WithClose:s,WithIcon:l,__namedExportsOrder:_,default:T},Symbol.toStringTag,{value:"Module"}));export{P as C,i as D,s as W,t as a,l as b};
