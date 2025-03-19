import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{r as P}from"./index-B6o7_jwP.js";import{O as t}from"./index-CiVFoefN.js";const v={component:t,title:"Data Collection/Pagination",parameters:{layout:"centered"},args:{totalPages:10,currentPage:1,showControls:!0},argTypes:{totalPages:{description:"The total number of pages. Pass 0 if the total is unknown.",control:"number"},currentPage:{description:"The current page.",defaultValue:{summary:1},control:"number"},onPageChange:{description:"The callback function to handle page change.",control:!1},showControls:{description:"Whether to show the controls.",defaultValue:{summary:!0},control:"boolean"},ariaLabel:{description:"Accessible label for the pagination navigation.",defaultValue:{summary:"Page navigation"},control:"text"},visibleRange:{description:"The number of pages to show on each side of the current page.",defaultValue:{summary:3},control:"number"},hasNextPage:{description:"Used in indeterminate state (totalPages = 0) to indicate if there are more pages available.",defaultValue:{summary:!0},control:"boolean"}},tags:["autodocs","experimental"]},n={render:e=>{const[r,a]=P.useState(e.currentPage);return c.jsx(t,{...e,currentPage:r,onPageChange:a})}},s={args:{totalPages:100},render:e=>{const[r,a]=P.useState(e.currentPage);return c.jsx(t,{...e,currentPage:r,onPageChange:a})}},o={args:{totalPages:10,showControls:!1},render:e=>{const[r,a]=P.useState(e.currentPage);return c.jsx(t,{...e,currentPage:r,onPageChange:a})}},g={args:{totalPages:20,visibleRange:5},render:e=>{const[r,a]=P.useState(e.currentPage);return c.jsx(t,{...e,currentPage:r,onPageChange:a})}},u={args:{totalPages:0},render:e=>{const[r,a]=P.useState(e.currentPage),A=r?r<5:!0;return c.jsx(t,{...e,currentPage:r,onPageChange:a,hasNextPage:A})}};var i,l,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <OnePagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    totalPages: 100
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <OnePagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var C,f,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    showControls: false
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <OnePagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,O;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    totalPages: 20,
    visibleRange: 5
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <OnePagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
  }
}`,...(O=(x=g.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var _,j,y;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    totalPages: 0
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const MAX_PAGES = 5; // Simulating a maximum of 5 pages
    const hasNextPage = currentPage ? currentPage < MAX_PAGES : true;
    return <OnePagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} hasNextPage={hasNextPage} />;
  }
}`,...(y=(j=u.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const w=["Default","LongList","WithoutControls","CustomVisibleRange","Indeterminate"],T=Object.freeze(Object.defineProperty({__proto__:null,CustomVisibleRange:g,Default:n,Indeterminate:u,LongList:s,WithoutControls:o,__namedExportsOrder:w,default:v},Symbol.toStringTag,{value:"Module"}));export{g as C,n as D,u as I,s as L,T as P,o as W};
