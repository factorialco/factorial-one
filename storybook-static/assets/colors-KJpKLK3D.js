import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as d}from"./index-BPfm77MI.js";import{M as f,U as t}from"./index-B48kslfD.js";import{r as l}from"./index-B6o7_jwP.js";import{B as m}from"./index-Blak80_u.js";import{c as u}from"./utils-B2yEwIwY.js";import{c as j}from"./createLucideIcon-DSAetUgs.js";import"./index-yBjzXJbu.js";import"./iframe-CY9Y-e4A.js";import"./index-Cy3P-1Ig.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CDBnMHOu.js";import"./index-Cwk_nZHn.js";import"./clsx-B-dksMZM.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=j("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);function r({name:s,description:n}){const[i,a]=l.useState(!1),x=()=>{navigator.clipboard.writeText(s),a(!0),setTimeout(()=>a(!1),1e3)};return e.jsxs("div",{className:"flex max-w-[600px] flex-row items-center space-x-3 rounded-sm border border-solid border-f1-border bg-f1-background-secondary px-2 py-1.5 dark:border-f1-border-secondary dark:bg-f1-background",children:[e.jsx("div",{className:u("h-8 w-12 rounded-sm",`bg-${s}`)}),e.jsxs("div",{className:"flex flex-1 flex-col space-y-0",children:[e.jsx("span",{className:"font-mono flex-grow font-semibold text-f1-foreground dark:text-f1-foreground-inverse",children:s}),e.jsx("p",{className:"text-sm text-f1-foreground-secondary",children:n})]}),e.jsx("div",{className:"invert-0 filter dark:invert",children:e.jsx(m,{onClick:x,variant:"ghost",disabled:i,label:i?"Copied!":"Copy",icon:i?void 0:p})})]})}try{r.displayName="ColorToken",r.__docgenInfo={description:"",displayName:"ColorToken",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},cssColor:{defaultValue:null,description:"",name:"cssColor",required:!1,type:{name:"string"}}}}}catch{}function o({name:s}){const[n,i]=l.useState(!1),a=()=>{navigator.clipboard.writeText(s),i(!0),setTimeout(()=>i(!1),1e3)};return e.jsxs("div",{className:"flex max-w-[600px] flex-row items-center space-x-3 rounded-sm border border-solid border-f1-border bg-f1-background-secondary px-2 py-1.5 dark:border-f1-border-secondary dark:bg-f1-background",children:[e.jsx("div",{className:"h-8 w-12 rounded-sm",style:{background:`hsl(var(--${s}))`}}),e.jsx("div",{className:"flex flex-1 flex-col space-y-0",children:e.jsx("span",{className:"font-mono flex-grow font-semibold text-f1-foreground dark:text-f1-foreground-inverse",children:s})}),e.jsx("div",{className:"invert-0 filter dark:invert",children:e.jsx(m,{onClick:a,variant:"ghost",disabled:n,label:n?"Copied!":"Copy",icon:n?void 0:p})})]})}try{o.displayName="BareColor",o.__docgenInfo={description:"",displayName:"BareColor",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},cssColor:{defaultValue:null,description:"",name:"cssColor",required:!1,type:{name:"string"}}}}}catch{}function c(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Foundations/Colors"}),`
`,e.jsx(n.h1,{id:"colors",children:"Colors"}),`
`,e.jsx(n.p,{children:"Factorial One exposes two sets of color tokens: semantic tokens and bare colors."}),`
`,e.jsx(n.h2,{id:"semantic-tokens",children:"Semantic Tokens"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Semantic tokens are the preferred way of setting colors."}),` Semantic tokens are
meaningful names used to describe the purpose or intent of a color, rather than
specifying a direct value. Instead of defining tokens based on their appearance
(e.g., blue, green, red), semantic tokens define elements based on their
function or intent in the UI. For example,
`,e.jsx(n.code,{children:"text-f1-foreground"}),",",e.jsx(n.code,{children:"bg-f1-background-warning"}),", etc."]}),`
`,e.jsxs(n.p,{children:[`Factorial One uses TailwindCSS to apply semantic tokens. That means you need to
assign a CSS class to the component to apply a token. The classes are generated
automatically and follow the pattern `,e.jsx(n.em,{children:"[property to set]-f1-[token name]"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bg-f1-background-primary"})," sets ",e.jsx(n.code,{children:"background-color"}),` CSS property to the
semantic token `,e.jsx(n.code,{children:"background-primary"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text-f1-foreground-success"})," sets ",e.jsx(n.code,{children:"color"}),` CSS property to the
`,e.jsx(n.code,{children:"foreground-success"})," semantic token."]}),`
`]}),`
`,e.jsx(n.p,{children:"The full list of tokens:"}),`
`,e.jsx(n.h3,{id:"foreground",children:"Foreground"}),`
`,e.jsx(n.p,{children:"Use these tokens for texts."}),`
`,e.jsx(t,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{name:"f1-foreground",description:"Primary text color for content"}),e.jsx(r,{name:"f1-foreground-secondary",description:"Secondary text color for content"}),e.jsx(r,{name:"f1-foreground-inverse",description:"Inverted text color in dark backgrounds"}),e.jsx(r,{name:"f1-foreground-disabled",description:"Indicates inactivity or disabled state"}),e.jsx(r,{name:"f1-foreground-accent",description:"Draws attention with a prominent color"}),e.jsx(r,{name:"f1-foreground-critical",description:"Indicates errors, warnings, or critical information"}),e.jsx(r,{name:"f1-foreground-info",description:"Provides contextual information"}),e.jsx(r,{name:"f1-foreground-warning",description:"Alerts users to potential issues"}),e.jsx(r,{name:"f1-foreground-positive",description:"Indicates success, confirmation, or positive outcomes"})]})}),`
`,e.jsx(n.h3,{id:"background",children:"Background"}),`
`,e.jsx(n.p,{children:"Use these tokens for backgrounds."}),`
`,e.jsx(t,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{name:"f1-background",description:"Primary background color for content"}),e.jsx(r,{name:"f1-background-secondary",description:"Secondary background color for content"}),e.jsx(r,{name:"f1-background-secondary-hover",description:"Hover state for secondary background color"}),e.jsx(r,{name:"f1-background-bold",description:"Bold background color for emphasis"}),e.jsx(r,{name:"f1-background-accent",description:"Accent background color for highlights"}),e.jsx(r,{name:"f1-background-critical",description:"Critical background color for errors"}),e.jsx(r,{name:"f1-background-info",description:"Info background color for notifications"}),e.jsx(r,{name:"f1-background-warning",description:"Warning background color for alerts"}),e.jsx(r,{name:"f1-background-positive",description:"Positive background color for success"}),e.jsx(r,{name:"f1-background-promote",description:"Promotional background color for highlights"})]})}),`
`,e.jsx(n.h3,{id:"border",children:"Border"}),`
`,e.jsx(n.p,{children:"Use these tokens for borders."}),`
`,e.jsx(t,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{name:"f1-border",description:"Primary border color for content separation"}),e.jsx(r,{name:"f1-border-hover",description:"Hover state for primary border color"}),e.jsx(r,{name:"f1-border-promote",description:"Promotional border color for highlights"})]})}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsx(n.p,{children:"Use these tokens for icons."}),`
`,e.jsx(t,{children:e.jsxs("div",{className:"mb-12 space-y-2",children:[e.jsx(r,{name:"f1-icon",description:"Default icon color for general use"}),e.jsx(r,{name:"f1-icon-secondary",description:"Secondary icon color for less prominent icons"}),e.jsx(r,{name:"f1-icon-inverse",description:"Inverse icon color for contrast"}),e.jsx(r,{name:"f1-icon-bold",description:"Bold icon color for emphasis"}),e.jsx(r,{name:"f1-icon-critical",description:"Critical icon color for errors"}),e.jsx(r,{name:"f1-icon-info",description:"Info icon color for notifications"}),e.jsx(r,{name:"f1-icon-warning",description:"Warning icon color for alerts"}),e.jsx(r,{name:"f1-icon-positive",description:"Positive icon color for success"})]})}),`
`,e.jsx(n.h3,{id:"tokens-naming-convention",children:"Tokens naming convention"}),`
`,e.jsx(n.p,{children:"Token names are generated using the naming convention:"}),`
`,e.jsx("img",{src:"semantic-tokens-naming.avif",alt:"semantic token naming convention"}),`
`,e.jsx(n.h2,{id:"bare-colors",children:"Bare colors"}),`
`,e.jsx(n.p,{children:`☝️ Avoid using bare colors directly. It is an escape hatch in cases where
semantic tokens do not fit.`}),`
`,e.jsxs(n.p,{children:["Bare colors are named color values — for example, ",e.jsx(n.code,{children:"neutral-50"})," or ",e.jsx(n.code,{children:"warning-70"}),`.
They are available as HSL triplets in a form of CSS variables (e.g.
`,e.jsx(n.code,{children:"--neutral-50"}),"). You will have to use ",e.jsx(n.code,{children:"style"})," property in order to apply them:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const MyButton = () => (
  <Button
    style={{ color: "hsl(var(--warning-70))" }}
    label="Send all my money"
  />
)
`})}),`
`,e.jsx(n.p,{children:`As you see, they are not convenient. This is by design. Do not use them unless
there is no other way.`}),`
`,e.jsx(n.p,{children:"Bare colors available:"}),`
`,e.jsxs("div",{className:"mb-12 space-y-2",children:[e.jsx(o,{name:"neutral-0"}),e.jsx(o,{name:"neutral-2"}),e.jsx(o,{name:"neutral-5"}),e.jsx(o,{name:"neutral-10"}),e.jsx(o,{name:"neutral-20"}),e.jsx(o,{name:"neutral-30"}),e.jsx(o,{name:"neutral-40"}),e.jsx(o,{name:"neutral-50"}),e.jsx(o,{name:"neutral-60"}),e.jsx(o,{name:"neutral-70"}),e.jsx(o,{name:"neutral-80"}),e.jsx(o,{name:"neutral-90"}),e.jsx(o,{name:"neutral-100"}),e.jsx(o,{name:"accent-50"}),e.jsx(o,{name:"accent-60"}),e.jsx(o,{name:"accent-70"}),e.jsx(o,{name:"warning-50"}),e.jsx(o,{name:"warning-60"}),e.jsx(o,{name:"warning-70"}),e.jsx(o,{name:"selected-50"}),e.jsx(o,{name:"selected-60"}),e.jsx(o,{name:"selected-70"}),e.jsx(o,{name:"critical-50"}),e.jsx(o,{name:"critical-60"}),e.jsx(o,{name:"critical-70"}),e.jsx(o,{name:"positive-50"}),e.jsx(o,{name:"positive-60"}),e.jsx(o,{name:"positive-70"}),e.jsx(o,{name:"info-50"}),e.jsx(o,{name:"info-60"}),e.jsx(o,{name:"info-70"}),e.jsx(o,{name:"promote-50"}),e.jsx(o,{name:"promote-60"}),e.jsx(o,{name:"promote-70"})]})]})}function X(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{X as default};
