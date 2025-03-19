import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{A as d}from"./index-C2pDuG9y.js";import"./index-yBjzXJbu.js";import"./privacyMode-Bq89xGSE.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chart-23aT_Z91.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./generateCategoricalChart-DK672pYy.js";import"./tiny-invariant-CopsF_GD.js";import"./colors-o1uwkeKe.js";import"./elements-CurrDGdw.js";import"./forwardRef-CVda-fSC.js";import"./muncher-CuEbTD78.js";const n={desktop:{label:"Desktop"},mobile:{label:"Mobile"}},N={title:"Charts/AreaChart",component:d,tags:["autodocs"],args:{dataConfig:n,xAxis:{tickFormatter:e=>e.slice(0,3)},yAxis:{hide:!0,tickFormatter:e=>`${Number.isNaN(parseFloat(e))?e:(parseFloat(e)/100).toFixed(2)+",00 Euros"}`},blurArea:"lr",data:[{label:"January",values:{mobile:1200,desktop:500}},{label:"February",values:{mobile:1500,desktop:1500}},{label:"March",values:{mobile:1300,desktop:3e3}},{label:"April",values:{mobile:1e3,desktop:4500}},{label:"May",values:{mobile:800,desktop:5e3}},{label:"June",values:{mobile:600,desktop:4e3}}]},argTypes:{blurArea:{control:"select",options:[void 0,"l","r","lr"]}},decorators:[e=>a.jsx("div",{className:"h-52 w-full",children:a.jsx(e,{})})]},o={},r={args:{dataConfig:{desktop:{label:"Desktop",dashed:!0},mobile:{label:"Mobile"}}}};var t,s,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    dataConfig: {
      desktop: {
        label: "Desktop",
        dashed: true
      },
      mobile: {
        label: "Mobile"
      }
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const E=["Default","Dashed"];export{r as Dashed,o as Default,E as __namedExportsOrder,N as default};
