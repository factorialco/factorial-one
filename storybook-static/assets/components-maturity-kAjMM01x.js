import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-BPfm77MI.js";import{M as r}from"./index-B48kslfD.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CY9Y-e4A.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components maturity"}),`
`,e.jsx(n.h1,{id:"maturity-model",children:"Maturity Model"}),`
`,e.jsx(n.p,{children:"Explaining the difference between stable and experimental components"}),`
`,e.jsx(n.h2,{id:"tldr",children:"TLDR"}),`
`,e.jsxs("div",{className:"grid grid-cols-[auto_1fr]",children:[e.jsx("div",{className:"flex items-center justify-start bg-f1-background-info p-4 text-left !font-semibold",children:e.jsxs(n.p,{children:[e.jsx("span",{className:"!text-sm",children:"🛝"})," Playground"]})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Internal only, not part of the public API."}),e.jsx("li",{children:"No stability or rules; for internal experimentation."}),e.jsx("li",{children:"Use: Internal testing and prototyping only."})]}),e.jsx("div",{className:"flex items-center justify-start bg-f1-background-warning p-4 !font-semibold",children:e.jsxs(n.p,{children:[e.jsx("span",{className:"!text-sm",children:"🚧"})," Experimental"]})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Unstable API and design, subject to frequent changes."}),e.jsx("li",{children:e.jsx(n.p,{children:`No guarantee of backward compatibility; does not follow semantic
versioning.`})}),e.jsxs("li",{children:["Exported from ",e.jsx(n.code,{children:"@factorialco/factorial-one/experiment"})]}),e.jsx("li",{children:"Use: Prototyping and non-critical projects, with caution."})]}),e.jsx("div",{className:"flex items-center justify-start bg-f1-background-positive p-4 !font-semibold",children:e.jsxs(n.p,{children:[e.jsx("span",{className:"!text-sm",children:"✅"})," Stable"]})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Production-ready, fully tested."}),e.jsx("li",{children:"API and design are stable; follows semantic versioning."}),e.jsx("li",{children:"Backward-compatible; breaking changes occur only in major releases."}),e.jsxs("li",{children:["Exported from the root of ",e.jsx(n.code,{children:"@factorialco/factorial-one"})]}),e.jsx("li",{children:"Use: Safe for all production projects."})]}),e.jsx("div",{className:"flex items-center justify-start bg-f1-background-critical p-4 !font-semibold",children:e.jsxs(n.p,{children:[e.jsx("span",{className:"!text-sm",children:"⛔"})," Deprecated"]})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Obsolete; will be removed in the next major version."}),e.jsx("li",{children:"Has better alternatives; not actively maintained."}),e.jsx("li",{children:e.jsx(n.p,{children:`Use: Avoid in new projects, and migrate existing usage to newer
components.`})})]})]}),`
`,e.jsx(n.h2,{id:"experimental--stable",children:"Experimental → Stable"}),`
`,e.jsx(n.p,{children:`Experimental components may become stable once tested and feedback is
incorporated. The Factorial One team provides the migration guide in case of API
changes during the promotion.`}),`
`,e.jsx(n.p,{children:"The promotion happens when an experimental component completes the checklist:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The component meets design requirements"}),`
`,e.jsx(n.li,{children:"All features and edge cases implemented"}),`
`,e.jsx(n.li,{children:"Composable API provided"}),`
`,e.jsx(n.li,{children:"The component has screenshot and unit tests"}),`
`,e.jsx(n.li,{children:"The component is responsive"}),`
`,e.jsx(n.li,{children:"Accessibility requirements are met on the AA level"}),`
`,e.jsx(n.li,{children:"Documentation page has description and use cases together with stories"}),`
`]})]})}function f(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{f as default};
