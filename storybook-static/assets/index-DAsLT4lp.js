import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-BPfm77MI.js";import{M as a,C as i}from"./index-B48kslfD.js";import{D as s,W as c,P as p}from"./index.stories-D4kmq_0s.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CY9Y-e4A.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Save-B3VvXevP.js";import"./Check-FJXU9bTg.js";import"./index-DmNYtGBX.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./imageHandler-C2NaIYbW.js";import"./index-BKKrtyrw.js";import"./index-B7GDqc_s.js";import"./index-BNL5Yqmu.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./CheckCircle-DR890WNk.js";import"./LayersFront-CDxc9biS.js";import"./ChevronRight-zM-ePXcJ.js";import"./linkHandler-fUi2qCbR.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"/_ title: DataList _/"}),`
`,`
`,t.jsx(a,{of:s,title:"DataList"}),`
`,t.jsx(e.h1,{id:"datalist",children:t.jsx(e.code,{children:"DataList"})}),`
`,t.jsxs(e.p,{children:[`List of data items presented in a compact form. We recommend to use the
component in the information panel in the `,t.jsx(e.code,{children:"InfoPaneLayout"}),`. It can have a label
on the top.`]}),`
`,t.jsx(i,{of:c}),`
`,t.jsx(e.p,{children:"The list support four types of items:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:"DataList.Item"})," - a basic text with an optional icon on the left side;"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:"DataList.PersonItem"})," - represents a user or an employee;"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:"DataList.CompanyItem"})," - represents a company;"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:"DataList.TeamItem"})," - represents a team;"]}),`
`]}),`
`,t.jsx(e.h2,{id:"actions",children:"Actions"}),`
`,t.jsx(e.p,{children:`You can attach one predefined action to any item you render. The predefined
actions are:`}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"copy text of the item;"}),`
`,t.jsx(e.li,{children:"navigate to another URL, internal or external;"}),`
`]}),`
`,t.jsxs(e.p,{children:["To attach an action, pass an ",t.jsx(e.code,{children:"action"})," prop to an item:"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`<DataList>
  <DataList.Item text="hellen@factorial.co" action={{ type: "copy" }} />
  <DataList.Item
    action={{ type: "navigate", href: "https://factorialhr.com/" }}
    text="Factorial"
  />
</DataList>
`})}),`
`,t.jsx(e.p,{children:"Here is the list where all items are used with different actions:"}),`
`,t.jsx(i,{of:p})]})}function k(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{k as default};
