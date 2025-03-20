import"./Save-B3VvXevP.js";import{F as o}from"./Search-DyMYdF6H.js";import{B as v}from"./index-idP0doZy.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-rQB-1XLh.js";import"./index-DJtxxfEW.js";import"./input-BTRPgdqa.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-B7GDqc_s.js";import"./index-BNL5Yqmu.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./ChevronDown-LBI9f9x4.js";import"./Select-tQGJVFmO.js";import"./index-BobS88kg.js";import"./ChevronUp-DDAshzCv.js";import"./CheckCircle-DR890WNk.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-Bmycdo5-.js";import"./index-BiB69Vyw.js";import"./index-7k9rgiuw.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-BL6sZKvk.js";import"./index-D15UBmr5.js";import"./index-Cl3QsgNf.js";import"./skeleton-BQT1AIt_.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";const de={title:"Navigation/BreadcrumbSelect",component:v,tags:["autodocs","internal"]},t={args:{value:"recruitment",onChange:e=>{console.log("onChange BreadcrumbSelect",e)},options:[{value:"recruitment",label:"Recruitment"},{value:"candidates",label:"Candidates",icon:o}]},parameters:{docs:{description:{story:"<p>A basic breadcrumb select component that allows users to choose from a list of options. Works a `Select` component but it can not be empty.</p><p>Options can be an array of objects or a function that returns a promise of an array of objects to load data asynchronously.</p><p>You the do the filtering in the component or do the filtering externally using the props `options` and `externalSearch`.</p>"}}}},r={args:{value:"recruitment",onChange:e=>{console.log("onChange BreadcrumbSelect",e)},searchBoxPlaceholder:"Search",showSearchBox:!0,options:[{value:"recruitment",label:"Recruitment"},{value:"candidates",label:"Candidates",icon:o}]},parameters:{docs:{description:{story:"Breadcrumb select with a search box that allows users to filter through options. The search is handled internally by the component."}}}},a={args:{...t.args,options:async()=>(await new Promise(e=>setTimeout(e,1e3)),[{value:"recruitment",label:"Recruitment"},{value:"candidates",label:"Candidates",icon:o}])},parameters:{docs:{description:{story:"Demonstrates loading options asynchronously. Shows a loading state while data is being fetched."}}}},n={args:{...r.args,externalSearch:!0,options:async e=>(await new Promise(s=>setTimeout(s,1e3)),[{value:"recruitment",label:"Recruitment"},{value:"candidates",label:"Candidates",icon:o}].filter(s=>s.label.toLowerCase().includes((e==null?void 0:e.toLowerCase())||"")))},parameters:{docs:{description:{story:"Combines async data loading with search functionality. The search is handled externally, making it suitable for server-side filtering."}}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: "recruitment",
    onChange: (value: string) => {
      console.log("onChange BreadcrumbSelect", value);
    },
    options: [{
      value: "recruitment",
      label: "Recruitment"
    }, {
      value: "candidates",
      label: "Candidates",
      icon: Search
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "<p>A basic breadcrumb select component that allows users to choose from a list of options. Works a \`Select\` component but it can not be empty.</p>" + "<p>Options can be an array of objects or a function that returns a promise of an array of objects to load data asynchronously.</p>" + "<p>You the do the filtering in the component or do the filtering externally using the props \`options\` and \`externalSearch\`.</p>"
      }
    }
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: "recruitment",
    onChange: (value: string) => {
      console.log("onChange BreadcrumbSelect", value);
    },
    searchBoxPlaceholder: "Search",
    showSearchBox: true,
    options: [{
      value: "recruitment",
      label: "Recruitment"
    }, {
      value: "candidates",
      label: "Candidates",
      icon: Search
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Breadcrumb select with a search box that allows users to filter through options. The search is handled internally by the component."
      }
    }
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,h,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return [{
        value: "recruitment",
        label: "Recruitment"
      }, {
        value: "candidates",
        label: "Candidates",
        icon: Search
      }];
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates loading options asynchronously. Shows a loading state while data is being fetched."
      }
    }
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,y,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...WithSearchbox.args,
    externalSearch: true,
    options: async (search?: string) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return [{
        value: "recruitment",
        label: "Recruitment"
      }, {
        value: "candidates",
        label: "Candidates",
        icon: Search
      }].filter(option => option.label.toLowerCase().includes(search?.toLowerCase() || ""));
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Combines async data loading with search functionality. The search is handled externally, making it suitable for server-side filtering."
      }
    }
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const ue=["Default","WithSearchbox","AsyncData","AsyncDataWithSearchbox"];export{a as AsyncData,n as AsyncDataWithSearchbox,t as Default,r as WithSearchbox,ue as __namedExportsOrder,de as default};
