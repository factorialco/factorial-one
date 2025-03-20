import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{L as u}from"./index-V1ecRoWb.js";import"./index-yBjzXJbu.js";import"./chart-23aT_Z91.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./generateCategoricalChart-DK672pYy.js";import"./tiny-invariant-CopsF_GD.js";import"./colors-o1uwkeKe.js";import"./elements-CurrDGdw.js";import"./forwardRef-CVda-fSC.js";import"./muncher-CuEbTD78.js";const d={desktop:{label:"Desktop",color:"hsl(var(--chart-1))"}},N={component:u,title:"Charts/LineChart",argTypes:{lineType:{control:{type:"select",options:["natural","linear"]},description:"Determines the type of line curve",defaultValue:"natural"}},decorators:[e=>n.jsx("div",{className:"h-52 w-full",children:n.jsx(e,{})})]},a={args:{dataConfig:d,xAxis:{tickFormatter:e=>e.slice(0,3)},yAxis:{hide:!0,tickFormatter:e=>`${Number.isNaN(parseFloat(e))?e:(parseFloat(e)/100).toFixed(2)+" €"}`},data:[{label:"January",values:{desktop:186}},{label:"February",values:{desktop:305}},{label:"March",values:{desktop:237}},{label:"April",values:{desktop:73}},{label:"May",values:{desktop:209}},{label:"June",values:{desktop:214}}]}},m={desktop:{label:"Desktop"},mobile:{label:"Mobile",dashed:!0}},l={args:{dataConfig:m,xAxis:{hide:!1,tickFormatter:e=>e.slice(0,3)},data:[{label:"January",values:{desktop:186,mobile:120}},{label:"February",values:{desktop:305,mobile:180}},{label:"March",values:{desktop:237,mobile:150}},{label:"April",values:{desktop:73,mobile:90}},{label:"May",values:{desktop:209,mobile:160}},{label:"June",values:{desktop:214,mobile:200}}]}};var t,s,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    dataConfig: singleDataConfig,
    xAxis: {
      tickFormatter: (value: string) => value.slice(0, 3)
    },
    yAxis: {
      hide: true,
      tickFormatter: (value: string) => \`\${Number.isNaN(parseFloat(value)) ? value : (parseFloat(value) / 100).toFixed(2) + " €"}\`
    },
    data: [{
      label: "January",
      values: {
        desktop: 186
      }
    }, {
      label: "February",
      values: {
        desktop: 305
      }
    }, {
      label: "March",
      values: {
        desktop: 237
      }
    }, {
      label: "April",
      values: {
        desktop: 73
      }
    }, {
      label: "May",
      values: {
        desktop: 209
      }
    }, {
      label: "June",
      values: {
        desktop: 214
      }
    }]
  }
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var r,i,p;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    dataConfig: multiDataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3)
    },
    data: [{
      label: "January",
      values: {
        desktop: 186,
        mobile: 120
      }
    }, {
      label: "February",
      values: {
        desktop: 305,
        mobile: 180
      }
    }, {
      label: "March",
      values: {
        desktop: 237,
        mobile: 150
      }
    }, {
      label: "April",
      values: {
        desktop: 73,
        mobile: 90
      }
    }, {
      label: "May",
      values: {
        desktop: 209,
        mobile: 160
      }
    }, {
      label: "June",
      values: {
        desktop: 214,
        mobile: 200
      }
    }]
  }
}`,...(p=(i=l.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const L=["Default","MultipleLines"];export{a as Default,l as MultipleLines,L as __namedExportsOrder,N as default};
