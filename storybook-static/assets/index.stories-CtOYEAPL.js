import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{P as u}from"./index-DVEcUd4C.js";import"./index-yBjzXJbu.js";import"./chart-23aT_Z91.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./generateCategoricalChart-DK672pYy.js";import"./tiny-invariant-CopsF_GD.js";import"./colors-o1uwkeKe.js";import"./forwardRef-CVda-fSC.js";import"./PieChart-Dtl9OwLu.js";import"./PolarAngleAxis-DEqze0KJ.js";const p={january:{label:"January"},february:{label:"February"},march:{label:"March"},april:{label:"April"},may:{label:"May"},june:{label:"June"}},O={component:u,title:"Charts/PieChart",parameters:{a11y:{config:{rules:[{id:"svg-img-alt",enabled:!1}]}}},decorators:[a=>l.jsx("div",{className:"h-96 w-full",children:l.jsx(a,{})})]},e={args:{dataConfig:p,data:[{label:"january",value:186},{label:"february",value:305},{label:"march",value:237},{label:"april",value:73},{label:"may",value:209},{label:"june",value:214}],tickFormatter:a=>`${Number.isNaN(parseFloat(a))?a:(parseFloat(a)/100).toFixed(2)+"€"}`}},r={args:{...e.args,overview:{label:"Total",number:224}}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    dataConfig,
    data: [{
      label: "january",
      value: 186
    }, {
      label: "february",
      value: 305
    }, {
      label: "march",
      value: 237
    }, {
      label: "april",
      value: 73
    }, {
      label: "may",
      value: 209
    }, {
      label: "june",
      value: 214
    }],
    tickFormatter: (value: string) => \`\${Number.isNaN(parseFloat(value)) ? value : (parseFloat(value) / 100).toFixed(2) + "€"}\`
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    overview: {
      label: "Total",
      number: 224
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const P=["Default","WithOverview"];export{e as Default,r as WithOverview,P as __namedExportsOrder,O as default};
