import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-BPfm77MI.js";import{M as m,C as i,a as d}from"./index-B48kslfD.js";import{O as p,D as n,W as a}from"./index.stories-6ebAEQ_u.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CY9Y-e4A.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-B2OpD_bL.js";import"./index-DrJ36aH6.js";import"./Save-B3VvXevP.js";import"./ChevronDown-LBI9f9x4.js";import"./index-C2I-PfoO.js";import"./i18n-provider-DLZYpdh4.js";import"./popover-BqXImKWO.js";import"./index-DW48STyt.js";import"./index-B7GDqc_s.js";import"./index-BKKrtyrw.js";import"./index-7k9rgiuw.js";import"./index-BNL5Yqmu.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-BL6sZKvk.js";import"./skeleton-BQT1AIt_.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";function r(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:p}),`
`,e.jsx(o.h1,{id:"overflowlist",children:"OverflowList"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"OverflowList"}),` is a responsive component that manages lists of items when
space is limited. It solves the common problem of displaying a horizontal list
of elements that might not all fit within their container.`]}),`
`,e.jsx(o.p,{children:`As the available space changes (like when a user resizes their browser window),
the component dynamically recalculates which items should be visible and which
should be in the overflow dropdown.`}),`
`,e.jsx(o.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(i,{of:n}),`
`,e.jsx(d,{of:n}),`
`,e.jsx(o.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(o.p,{children:`Every item in the overflow list can be customized using the different render
props.`}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"renderListItem"}),` prop is used to render items outside of the overflow list,
and the `,e.jsx(o.code,{children:"renderDropdownItem"})," prop is used for items inside of the dropdown."]}),`
`,e.jsx(o.h3,{id:"overflow-indicator",children:"Overflow Indicator"}),`
`,e.jsx(o.p,{children:`The overflow indicator is the UI piece used to indicate that there are more
items in the overflow list. It is rendered when the number of items in the
overflow list is greater than the number of items that can be displayed.`}),`
`,e.jsxs(o.p,{children:["If ",e.jsx(o.code,{children:"renderOverflowIndicator"}),` is not provided, the default overflow indicator
will be displayed, but it can be customized by providing a custom component.`]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`renderOverflowIndicator={(count, isOpen) => (
    <div>
        <span>{count}</span>
        <motion.div animate={{ rotate: isOpen ? 360 : 90 }}>
            <Icon icon={ChevronDown} size="xs" />
        </motion.div>
    </div>
)}
`})})]})}function Q(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{Q as default};
