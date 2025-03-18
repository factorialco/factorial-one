import{F as D}from"./index-DJtxxfEW.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./Save-B3VvXevP.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Search-DyMYdF6H.js";import"./input-BTRPgdqa.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";const E={component:D,title:"Input/Search",parameters:{layout:"centered",docs:{description:{component:"This components provides the input search themed. Input can debouced to avoid several requests"}}},tags:["autodocs","experimental"],args:{placeholder:""},argTypes:{disabled:{control:"boolean"},threshold:{description:"Min number of characteres before call `onChange`",defaultValue:0},debounceTime:{description:"Debouce time in ms. It avoids to make repeated calls when the value changes",defaultValue:0}}},e={args:{placeholder:"Search..."}},a={args:{placeholder:"Search...",disabled:!0}},r={parameters:{docs:{description:{story:"Display a clear button to reset the input value. It will only be displayed if the input is not disabled and has content"}}},args:{placeholder:"Search...",clearable:!0}},o={parameters:{docs:{description:{story:"Check console to see onChange updates"}}},args:{placeholder:"Search...",threshold:3,onChange:n=>console.log("Change:",n)}},s={parameters:{docs:{description:{story:"Check console to see onChange updates. It will only happens every 3s"}}},args:{placeholder:"Search...",debounceTime:3e3,onChange:n=>console.log("Debounced change:",n)}};var t,c,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    placeholder: "Search..."
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Search...",
    disabled: true
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var h,u,m;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Display a clear button to reset the input value. It will only be displayed if the input is not disabled and has content"
      }
    }
  },
  args: {
    placeholder: "Search...",
    clearable: true
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,b,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Check console to see onChange updates"
      }
    }
  },
  args: {
    placeholder: "Search...",
    threshold: 3,
    onChange: value => console.log("Change:", value)
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,S,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Check console to see onChange updates. It will only happens every 3s"
      }
    }
  },
  args: {
    placeholder: "Search...",
    debounceTime: 3000,
    onChange: value => console.log("Debounced change:", value)
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const M=["Default","Disabled","Clearable","WithThreshold","WithDebounce"];export{r as Clearable,e as Default,a as Disabled,s as WithDebounce,o as WithThreshold,M as __namedExportsOrder,E as default};
