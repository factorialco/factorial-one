import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as fe}from"./index-DuopzoTV.js";import{F as S,a as be,b as A,c as Se}from"./Save-B3VvXevP.js";import{B as r}from"./index-Blak80_u.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";const We={title:"Button",component:r,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Web-components?node-id=41-1256&t=99GWQFvFLZtKW49N-4"}},tags:["autodocs","stable"],args:{variant:"default",onClick:fe(),label:"Click me",size:"md"},argTypes:{variant:{control:"select",options:["default","critical","neutral","ghost","outline","promote"],description:"Visual style variant of the button"},size:{control:"select",options:["sm","md","lg"],description:"Size of the button"},label:{control:"text"},icon:{control:"boolean",description:"Whether to show an icon"},disabled:{control:"boolean"},loading:{control:"boolean"},hideLabel:{control:"boolean",description:"Hide label and show only icon"}}},o={args:{variant:"default",label:"Default Button"}},t={args:{variant:"critical",label:"Delete Item",icon:S}},s={args:{variant:"neutral",label:"Cancel"}},n={args:{variant:"ghost",label:"View Details"}},i={args:{variant:"outline",label:"Secondary Action"}},c={args:{variant:"promote",label:"Upgrade Now"}},l={render:a=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{...a,size:"sm",label:"Small"}),e.jsx(r,{...a,size:"md",label:"Medium"}),e.jsx(r,{...a,size:"lg",label:"Large"})]})},d={args:{icon:be,label:"Archive Item"}},m={args:{round:!0,hideLabel:!0,icon:A,label:"Add Item"}},u={args:{disabled:!0,label:"Disabled Button"}},p={args:{loading:!0,label:"Processing..."}},g={args:{label:"Save Changes",icon:Se},render:a=>{const ve=async()=>{await new Promise(he=>setTimeout(he,2e3)),alert("Changes saved!")};return e.jsx(r,{...a,onClick:ve})}},b={args:{variant:"default",label:"Create New Project",icon:A,size:"lg"}},v={args:{variant:"critical",label:"Delete Account",icon:S}},h={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{variant:"ghost",icon:A,hideLabel:!0,round:!0,label:"Add"}),e.jsx(r,{variant:"ghost",icon:be,hideLabel:!0,round:!0,label:"Archive"}),e.jsx(r,{variant:"ghost",icon:S,hideLabel:!0,round:!0,label:"Delete"})]})},f={args:{emoji:"🥰",label:"🥰",variant:"neutral",hideLabel:!0}};var D,w,x;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "default",
    label: "Default Button"
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var j,B,C;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "critical",
    label: "Delete Item",
    icon: Delete
  }
}`,...(C=(B=t.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var L,y,z;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "neutral",
    label: "Cancel"
  }
}`,...(z=(y=s.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var I,N,P;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    label: "View Details"
  }
}`,...(P=(N=n.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var F,R,k;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    label: "Secondary Action"
  }
}`,...(k=(R=i.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var G,O,W;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "promote",
    label: "Upgrade Now"
  }
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var T,E,K;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <Button {...args} size="sm" label="Small" />
      <Button {...args} size="md" label="Medium" />
      <Button {...args} size="lg" label="Large" />
    </div>
}`,...(K=(E=l.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var U,V,Z;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    icon: Archive,
    label: "Archive Item"
  }
}`,...(Z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var $,M,_;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    round: true,
    hideLabel: true,
    icon: Add,
    label: "Add Item"
  }
}`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var H,J,Q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: "Disabled Button"
  }
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var q,X,Y;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: "Processing..."
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: "Save Changes",
    icon: Save
  },
  render: args => {
    const onClick = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Changes saved!");
    };
    return <Button {...args} onClick={onClick} />;
  }
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,te,se;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: "default",
    label: "Create New Project",
    icon: Add,
    size: "lg"
  }
}`,...(se=(te=b.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,ie,ce;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    variant: "critical",
    label: "Delete Account",
    icon: Delete
  }
}`,...(ce=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,me;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Button variant="ghost" icon={Add} hideLabel round label="Add" />
      <Button variant="ghost" icon={Archive} hideLabel round label="Archive" />
      <Button variant="ghost" icon={Delete} hideLabel round label="Delete" />
    </div>
}`,...(me=(de=h.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,ge;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    emoji: "🥰",
    label: "🥰",
    variant: "neutral",
    hideLabel: true
  }
}`,...(ge=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Te=["Default","Critical","Neutral","Ghost","Outline","Promote","Sizes","WithIcon","IconRound","Disabled","Loading","AsyncAction","PrimaryAction","DestructiveAction","IconButtonGroup","OnlyEmoji"];export{g as AsyncAction,t as Critical,o as Default,v as DestructiveAction,u as Disabled,n as Ghost,h as IconButtonGroup,m as IconRound,p as Loading,s as Neutral,f as OnlyEmoji,i as Outline,b as PrimaryAction,c as Promote,l as Sizes,d as WithIcon,Te as __namedExportsOrder,We as default};
