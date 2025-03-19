import{j as p}from"./jsx-runtime-Cf8x2fCZ.js";import{f as B}from"./index-DuopzoTV.js";import{S as j}from"./index-rQB-1XLh.js";import"./Save-B3VvXevP.js";import{F as $}from"./Appearance-PC6fLKzP.js";import{F}from"./Circle-Bv82YDSp.js";import{F as A}from"./Desktop-BtaoldKM.js";import{r as d}from"./index-B6o7_jwP.js";import"./index-yBjzXJbu.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-DJtxxfEW.js";import"./Search-DyMYdF6H.js";import"./input-BTRPgdqa.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-fNjTmf9T.js";import"./index-B7GDqc_s.js";import"./index-BNL5Yqmu.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./ChevronDown-LBI9f9x4.js";import"./Select-tQGJVFmO.js";import"./index-BobS88kg.js";import"./ChevronUp-DDAshzCv.js";import"./CheckCircle-DR890WNk.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-Bmycdo5-.js";import"./index-BiB69Vyw.js";import"./index-7k9rgiuw.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-BL6sZKvk.js";import"./index-D15UBmr5.js";import"./index-Cl3QsgNf.js";const D=e=>{const[r,a]=d.useState(e.value),[,c]=d.useState(""),l=(o,T)=>{a(o),console.log("selected value:",o,"- selected item:",T)},R=o=>{c(o),console.log("searchValue",o)};return p.jsx(j,{...e,value:r,onChange:l,onSearchChange:R})},E={light:F,dark:$,system:A},O=[{id:"light",name:"Light",description:"A bright and airy theme for a visually appealing interface",extra:123},{id:"dark",name:"Dark",description:"A sleek and modern theme for a sophisticated look"},{id:"system",name:"System",description:"A theme that adapts to the system's default appearance"}],L={title:"Input/Select",component:D,parameters:{a11y:{skipCi:!0},docs:{description:{component:"<p>Renders an select input field with a list of options to choose from.</p><p>The list is virtualized so can handle large amount of items</p>"}}},argTypes:{showSearchBox:{description:"Shows a search box. The component will filter the items by name and by description unless searchFunc will be in use"},externalSearch:{description:"Disable the internal filtering when the search box delegating the filtering in the parent. Useful for async data"},searchValue:{description:"Default value for the search box"},searchEmptyMessage:{description:"Message to show when filter returns no results"},searchBoxPlaceholder:{description:"Placeholder for the search box"},options:{description:"<p>Array of options to show in the select. Each option can its an object of type `SelectItemObject` or `'separator'` to render a separator line</p>```type SelectItemObject<T> = {\n  value: T\n  label: string\n  description?: string\n  avatar?: AvatarVariant\n  icon?: IconType\n  item?: unknown\n}```"},onChange:{description:"Function to handle the change event. Returns the value of the selected option, and the item object if it exists"}},args:{placeholder:"Select a theme",onChange:B(),value:"light",options:O.map(e=>({value:e.id,label:e.name,icon:E[e.id],description:e.description,item:e})),disabled:!1,showSearchBox:!1},tags:["autodocs","experimental"]},n={},t={args:{showSearchBox:!0,searchEmptyMessage:"No results found",searchBoxPlaceholder:"Search for a theme"}};var m;const s={args:{...t.args,options:[...((m=L.args)==null?void 0:m.options)||[],"separator",...Array.from({length:1e4},(e,r)=>({value:`option-${r}`,label:`Option ${r}`,icon:F,description:`Description for option ${r}`}))]}},i={args:{placeholder:"Choose a color",onChange:B(),value:"red",options:[{value:"red",label:"Red"},{value:"green",label:"Green"},"separator",{value:"blue",label:"Blue"}]},render:({value:e,options:r,placeholder:a,onChange:c,...l})=>p.jsx(j,{value:e,options:r,placeholder:a,onChange:c,...l,children:p.jsx("div",{className:"flex h-24 w-24 items-center rounded-md border border-solid border-f1-border bg-f1-background-secondary p-2 text-center transition-colors hover:bg-f1-background-secondary-hover",children:a})})};var h,u,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,b,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showSearchBox: true,
    searchEmptyMessage: "No results found",
    searchBoxPlaceholder: "Search for a theme"
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,S,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...WithSearchBox.args,
    options: [...(meta.args?.options || []), "separator", ...Array.from({
      length: 10000
    }, (_, i) => ({
      value: \`option-\${i}\`,
      label: \`Option \${i}\`,
      icon: Circle,
      description: \`Description for option \${i}\`
    }))]
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,C,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: "Choose a color",
    onChange: fn(),
    value: "red",
    options: [{
      value: "red",
      label: "Red"
    }, {
      value: "green",
      label: "Green"
    }, "separator", {
      value: "blue",
      label: "Blue"
    }]
  },
  render: ({
    value,
    options,
    placeholder,
    onChange,
    ...args
  }) => <Select value={value} options={options} placeholder={placeholder} onChange={onChange} {...args}>
      <div className="flex h-24 w-24 items-center rounded-md border border-solid border-f1-border bg-f1-background-secondary p-2 text-center transition-colors hover:bg-f1-background-secondary-hover">
        {placeholder}
      </div>
    </Select>
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const Re=["Default","WithSearchBox","LargeList","WithCustomTrigger"];export{n as Default,s as LargeList,i as WithCustomTrigger,t as WithSearchBox,Re as __namedExportsOrder,L as default};
