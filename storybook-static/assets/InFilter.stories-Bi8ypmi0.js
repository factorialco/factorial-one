import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./Save-B3VvXevP.js";import{F as Z}from"./Search-DyMYdF6H.js";import{I as $}from"./input-BTRPgdqa.js";import{r as n}from"./index-B6o7_jwP.js";import{I as l}from"./InFilter-Buwt2jJ3.js";import"./index-yBjzXJbu.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dx7Y6k44.js";import"./checkbox-BkoZAF6b.js";import"./Check-FJXU9bTg.js";import"./Minus-CDz936Bf.js";import"./index-B7GDqc_s.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-DW48STyt.js";import"./index-BL6sZKvk.js";import"./index-BNL5Yqmu.js";import"./index-D15UBmr5.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-Dy8WLFmQ.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./index-DrkntLAK.js";import"./i18n-provider-DLZYpdh4.js";const Me={title:"Data Collection/Filters/InFilter",component:l,parameters:{layout:"centered"},decorators:[a=>e.jsx("div",{className:"border-f1-border-primary w-[300px] rounded-md border p-4",children:e.jsx(a,{})})]},i={args:{filter:{type:"in",label:"Department",options:[{value:"engineering",label:"Engineering"},{value:"marketing",label:"Marketing"},{value:"sales",label:"Sales"},{value:"hr",label:"Human Resources"}]},value:["engineering"],onChange:()=>{}}},u={args:{filter:{type:"in",label:"Department",options:[{value:"engineering",label:"Engineering"},{value:"marketing",label:"Marketing"},{value:"sales",label:"Sales"},{value:"hr",label:"Human Resources"}]},value:["engineering","marketing"],onChange:()=>{}}},ee=()=>{const[a,r]=n.useState(["engineering"]);return e.jsx(l,{filter:{type:"in",label:"Department",options:[{value:"engineering",label:"Engineering"},{value:"marketing",label:"Marketing"},{value:"sales",label:"Sales"},{value:"hr",label:"Human Resources"}]},value:a,onChange:r})},c={render:()=>e.jsx(ee,{})},ae=()=>{const[a,r]=n.useState([]);return e.jsx(l,{filter:{type:"in",label:"Users",options:async()=>new Promise(t=>{setTimeout(()=>{t([{value:"user1",label:"John Doe"},{value:"user2",label:"Jane Smith"},{value:"user3",label:"Bob Johnson"},{value:"user4",label:"Alice Williams"}])},5e3)})},value:a,onChange:r})},p={render:()=>e.jsx(ae,{})},ne=()=>{const[a,r]=n.useState([]),[t,h]=n.useState(""),[y,q]=n.useState([]),[Q,S]=n.useState([]),[X,f]=n.useState(!0);return n.useEffect(()=>{(async()=>{f(!0);try{await new Promise(Y=>setTimeout(Y,1e3));const o=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico"},{value:"br",label:"Brazil"},{value:"ar",label:"Argentina"},{value:"uk",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"it",label:"Italy"},{value:"es",label:"Spain"},{value:"pt",label:"Portugal"},{value:"ru",label:"Russia"},{value:"cn",label:"China"},{value:"jp",label:"Japan"},{value:"in",label:"India"},{value:"au",label:"Australia"}];q(o),S(o)}finally{f(!1)}})()},[]),n.useEffect(()=>{if(t.trim()==="")S(y);else{const s=y.filter(o=>o.label.toLowerCase().includes(t.toLowerCase()));S(s)}},[t,y]),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx($,{type:"search",placeholder:"Search countries...",value:t,onChange:s=>h(s.target.value),className:"h-8 rounded",icon:Z,clearable:!0}),e.jsx(l,{filter:{type:"in",label:"Countries",options:X?async()=>(await new Promise(s=>setTimeout(s,500)),[]):Q},value:a,onChange:r})]})},m={render:()=>e.jsx(ne,{}),parameters:{docs:{description:{story:"This example demonstrates how to implement search functionality with async options. The search is performed client-side after the options are loaded."}}}},re=()=>{const[a,r]=n.useState([]);return e.jsx(l,{filter:{type:"in",label:"Countries",options:async()=>new Promise(t=>{setTimeout(()=>{t([{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"jp",label:"Japan"}])},3e3)})},value:a,onChange:r})},d={render:()=>e.jsx(re,{})},te=()=>{const[a,r]=n.useState([]);return e.jsx(l,{filter:{type:"in",label:"Products",options:async()=>new Promise((t,h)=>{setTimeout(()=>{h(new Error("Failed to fetch products"))},1e3)})},value:a,onChange:r})},g={render:()=>e.jsx(te,{})},v={args:{filter:{type:"in",label:"Categories",options:[]},value:[],onChange:()=>{}}},b={args:{filter:{type:"in",label:"Priorities",options:()=>[{value:"high",label:"High"},{value:"medium",label:"Medium"},{value:"low",label:"Low"}]},value:[],onChange:()=>{}}};var x,E,O;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    filter: {
      type: "in",
      label: "Department",
      options: [{
        value: "engineering",
        label: "Engineering"
      }, {
        value: "marketing",
        label: "Marketing"
      }, {
        value: "sales",
        label: "Sales"
      }, {
        value: "hr",
        label: "Human Resources"
      }]
    },
    value: ["engineering"],
    onChange: () => {}
  }
}`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var w,C,A;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    filter: {
      type: "in",
      label: "Department",
      options: [{
        value: "engineering",
        label: "Engineering"
      }, {
        value: "marketing",
        label: "Marketing"
      }, {
        value: "sales",
        label: "Sales"
      }, {
        value: "hr",
        label: "Human Resources"
      }]
    },
    value: ["engineering", "marketing"],
    onChange: () => {}
  }
}`,...(A=(C=u.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var j,k,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <InteractiveExample />
}`,...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var V,T,F;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <AsyncOptionsExample />
}`,...(F=(T=p.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var D,P,W;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <AsyncOptionsWithSearchExample />,
  parameters: {
    docs: {
      description: {
        story: "This example demonstrates how to implement search functionality with async options. The search is performed client-side after the options are loaded."
      }
    }
  }
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var M,R,H;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <SlowAsyncOptionsExample />
}`,...(H=(R=d.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var L,J,U;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ErrorAsyncOptionsExample />
}`,...(U=(J=g.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var N,_,B;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    filter: {
      type: "in",
      label: "Categories",
      options: []
    },
    value: [],
    onChange: () => {}
  }
}`,...(B=(_=v.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var K,z,G;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    filter: {
      type: "in",
      label: "Priorities",
      options: () => [{
        value: "high",
        label: "High"
      }, {
        value: "medium",
        label: "Medium"
      }, {
        value: "low",
        label: "Low"
      }]
    },
    value: [],
    onChange: () => {}
  }
}`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const Re=["Default","WithSelectedValues","Interactive","AsyncOptions","AsyncOptionsWithSearch","SlowAsyncOptions","AsyncOptionsWithError","EmptyOptions","SyncFunctionOptions"];export{p as AsyncOptions,g as AsyncOptionsWithError,m as AsyncOptionsWithSearch,i as Default,v as EmptyOptions,c as Interactive,d as SlowAsyncOptions,b as SyncFunctionOptions,u as WithSelectedValues,Re as __namedExportsOrder,Me as default};
