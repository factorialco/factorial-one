import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./Save-B3VvXevP.js";import{F as E}from"./Circle-Bv82YDSp.js";import{F as R}from"./Desktop-BtaoldKM.js";import{r as l}from"./index-B6o7_jwP.js";import{S as s,a as c,b as i,c as S,d}from"./Select-tQGJVFmO.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-BobS88kg.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-CDBnMHOu.js";import"./index-Cwk_nZHn.js";import"./ChevronDown-LBI9f9x4.js";import"./ChevronUp-DDAshzCv.js";import"./CheckCircle-DR890WNk.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-Bmycdo5-.js";import"./index-BKKrtyrw.js";import"./index-B7GDqc_s.js";import"./index-BiB69Vyw.js";import"./index-7k9rgiuw.js";import"./index-BNL5Yqmu.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-BL6sZKvk.js";import"./index-D15UBmr5.js";import"./index-Cl3QsgNf.js";const q=({options:o,placeholder:t,...a})=>{const[n,r]=l.useState(""),z=l.useMemo(()=>o.map(g=>({value:g.value,height:40,item:e.jsx(s,{value:g.value,children:g.label})})),[o]);return e.jsxs(c,{value:n,onValueChange:r,...a,children:[e.jsxs(i,{children:[n,e.jsx(S,{placeholder:t})]}),e.jsx(d,{items:z})]})},je={title:"Components/Select",component:q,parameters:{a11y:{skipCi:!0},layout:"centered",docs:{description:{component:"<p>The `Select` component the base component for the `Select` component. It provides the basic styling and functionality for the select component.</p><p>The pop content contains the list of items, but it can also contain a `Top` and/or `Bottom` content fixed (not scrollable). Useful for searchboxes, buttons, etc</p><p>You can pass the options items as children or via the `items` props. When the items are passed in the items props of `SelectContent` the list is virtualized to manage  huge amount of items"}}},args:{placeholder:"Select an option",options:[{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"system",label:"System"},...Array.from({length:10},(o,t)=>({value:`option-${t}`,label:`Option ${t}`}))]},tags:["autodocs","internal"]},u={},p={render:({options:o,placeholder:t})=>{const[a,n]=l.useState("");return e.jsxs(c,{value:a,onValueChange:n,children:[e.jsx(i,{children:e.jsx(S,{placeholder:t})}),e.jsx(d,{top:e.jsx("div",{className:"border-b border-f1-border p-3",children:"Top Content"}),children:o.map(r=>e.jsx(s,{value:r.value,children:r.label},r.value))})]})}},m={render:({options:o,placeholder:t})=>{const[a,n]=l.useState("");return e.jsxs(c,{value:a,onValueChange:n,children:[e.jsx(i,{children:e.jsx(S,{placeholder:t})}),e.jsx(d,{bottom:e.jsx("div",{className:"border-t border-f1-border p-3",children:"Bottom Content"}),children:o.map(r=>e.jsx(s,{value:r.value,children:r.label},r.value))})]})}},h={render:({options:o,placeholder:t})=>{const[a,n]=l.useState("");return e.jsxs(c,{value:a,onValueChange:n,children:[e.jsx(i,{children:e.jsx(S,{placeholder:t})}),e.jsx(d,{top:e.jsx("div",{className:"border-b border-f1-border p-3",children:"Search or Filter"}),bottom:e.jsx("div",{className:"border-t border-f1-border p-3",children:e.jsx("button",{className:"w-full text-center text-f1-foreground-secondary hover:text-f1-foreground",children:"Add New Option"})}),children:o.map(r=>e.jsx(s,{value:r.value,children:r.label},r.value))})]})}},f="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" "),b={args:{options:Array.from({length:1e4},(o,t)=>({value:`option-${t}`,label:`Option ${f[t%f.length]} ${t}`}))}},v={render:({options:o})=>{const[t,a]=l.useState("");return e.jsxs(c,{value:t,onValueChange:a,children:[e.jsx(i,{asChild:!0,children:e.jsxs("button",{className:"flex h-10 w-full items-center justify-between rounded-md border border-f1-border bg-f1-background px-3 text-f1-foreground",children:[e.jsx("span",{children:t||"Select theme..."}),e.jsx(E,{className:"h-4 w-4"})]})}),e.jsx(d,{children:o.map(n=>e.jsx(s,{value:n.value,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{className:"h-4 w-4"}),n.label]})},n.value))})]})}};var x,j,C;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var V,N,T;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: ({
    options,
    placeholder
  }) => {
    const [value, setValue] = useState("");
    return <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent top={<div className="border-b border-f1-border p-3">Top Content</div>}>
          {options.map(option => <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>)}
        </SelectContent>
      </Select>;
  }
}`,...(T=(N=p.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var w,y,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: ({
    options,
    placeholder
  }) => {
    const [value, setValue] = useState("");
    return <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent bottom={<div className="border-t border-f1-border p-3">Bottom Content</div>}>
          {options.map(option => <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>)}
        </SelectContent>
      </Select>;
  }
}`,...(I=(y=m.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var k,W,B;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    options,
    placeholder
  }) => {
    const [value, setValue] = useState("");
    return <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent top={<div className="border-b border-f1-border p-3">
              Search or Filter
            </div>} bottom={<div className="border-t border-f1-border p-3">
              <button className="w-full text-center text-f1-foreground-secondary hover:text-f1-foreground">
                Add New Option
              </button>
            </div>}>
          {options.map(option => <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>)}
        </SelectContent>
      </Select>;
  }
}`,...(B=(W=h.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var $,A,F;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    options: Array.from({
      length: 10000
    }, (_, i) => ({
      value: \`option-\${i}\`,
      label: \`Option \${words[i % words.length]} \${i}\`
    }))
  }
}`,...(F=(A=b.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var O,_,D;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: ({
    options
  }) => {
    const [value, setValue] = useState("");
    return <Select value={value} onValueChange={setValue}>
        <SelectTrigger asChild>
          <button className="flex h-10 w-full items-center justify-between rounded-md border border-f1-border bg-f1-background px-3 text-f1-foreground">
            <span>{value || "Select theme..."}</span>
            <Circle className="h-4 w-4" />
          </button>
        </SelectTrigger>
        <SelectContent>
          {options.map(option => <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                <Desktop className="h-4 w-4" />
                {option.label}
              </div>
            </SelectItem>)}
        </SelectContent>
      </Select>;
  }
}`,...(D=(_=v.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const Ce=["Default","WithTopContent","WithBottomContent","WithBothTopAndBottom","VirtualizedItems","WithCustomTrigger"];export{u as Default,b as VirtualizedItems,h as WithBothTopAndBottom,m as WithBottomContent,v as WithCustomTrigger,p as WithTopContent,Ce as __namedExportsOrder,je as default};
