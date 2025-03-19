import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as i}from"./index-Blak80_u.js";import{F as y}from"./Save-B3VvXevP.js";import{r as o}from"./index-B6o7_jwP.js";import{A as E}from"./index-Fz90wGtv.js";import{R as Y,P as G,C as I,T,D as H,O as z}from"./index-3YeXfHId.js";import{c as m}from"./utils-B2yEwIwY.js";import"./index-yBjzXJbu.js";import"./index-CDBnMHOu.js";import"./index-Cwk_nZHn.js";import"./clsx-B-dksMZM.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./AlertCircle-CAZ1CSgr.js";import"./InfoCircle-BQwEmo9G.js";import"./Warning-CA_bta6S.js";import"./index-DW48STyt.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-Bg_GsVj5.js";import"./index-BNL5Yqmu.js";import"./index-BL6sZKvk.js";import"./index-7k9rgiuw.js";import"./Combination-DneYXzaJ.js";import"./index-yradL_ub.js";const g=Y,J=G,S=o.forwardRef(({className:t,...a},n)=>e.jsx(z,{ref:n,className:m("fixed inset-0 z-50 bg-f1-background-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...a}));S.displayName=z.displayName;const q=o.forwardRef(({className:t,children:a,...n},r)=>e.jsxs(J,{children:[e.jsx(S,{}),e.jsx(I,{ref:r,className:m("fixed left-[50%] top-[50%] z-50 grid w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-xl border bg-f1-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",t),...n,children:a})]}));q.displayName=I.displayName;const p=({className:t,...a})=>e.jsx("div",{className:t,...a});p.displayName="DialogHeader";const B=({className:t,...a})=>e.jsx("div",{className:t,...a});B.displayName="DialogFooter";const F=o.forwardRef(({className:t,...a},n)=>e.jsx(T,{ref:n,className:m("text-lg font-medium text-f1-foreground",t),...a}));F.displayName=T.displayName;const P=o.forwardRef(({className:t,...a},n)=>e.jsx(H,{ref:n,className:m("text-f1-foreground-secondary",t),...a}));P.displayName=H.displayName;try{p.displayName="DialogHeader",p.__docgenInfo={description:"",displayName:"DialogHeader",props:{}}}catch{}const x=o.forwardRef(({header:t,actions:a,open:n,onClose:r},V)=>{const[W,v]=o.useState(!1),u=o.useCallback(()=>{v(!0);const f=setTimeout(()=>{r==null||r(),v(!1)},200);return()=>clearTimeout(f)},[r]);return e.jsx(g,{open:n&&!W,onOpenChange:f=>!f&&(u==null?void 0:u()),children:e.jsxs(q,{ref:V,className:"bottom-3 top-auto max-w-[400px] translate-y-0 data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%] sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%] sm:data-[state=closed]:slide-out-to-top-[48%] sm:data-[state=open]:slide-in-from-top-[48%]",children:[e.jsxs(p,{className:"flex flex-col gap-4 px-4 py-5",children:[e.jsx(E,{type:t.type,size:"lg"}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx(F,{className:"text-xl sm:text-lg",children:t.title}),e.jsx(P,{className:"text-lg sm:text-base",children:t.description})]})]}),a&&e.jsxs(B,{className:"px-4 pb-4 pt-2 [&_button]:w-full",children:[e.jsxs("div",{className:"hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",children:[e.jsx(i,{variant:"outline",...a.secondary}),e.jsx(i,{...a.primary,variant:a.primary.variant||"default"})]}),e.jsxs("div",{className:"flex flex-col-reverse gap-2 sm:hidden",children:[e.jsx(i,{variant:"outline",...a.secondary,size:"lg"}),e.jsx(i,{...a.primary,variant:a.primary.variant||"default",size:"lg"})]})]})]})})});x.displayName="Dialog";try{g.displayName="Dialog",g.__docgenInfo={description:"",displayName:"Dialog",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:'{ type: "critical" | "warning" | "info"; title: string; description: string; }'}},actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"{ primary: PrimaryAction; secondary: BaseAction; }"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const De={title:"Dialog",component:x,parameters:{layout:"fullscreen",docs:{story:{inline:!1,height:"400px"}}},args:{header:{title:"Remove job opening",description:"If you cancel the job opening, you won’t see it on your company’s career page or receive new candidates.",type:"critical"},actions:{primary:{label:"Remove",icon:y,onClick:()=>alert("Remove"),variant:"critical"},secondary:{label:"Cancel",onClick:()=>alert("Cancel")}},open:!0},tags:["autodocs","experimental"]},s={},l={args:{header:{title:"Top up account",description:"Your account balance is under 1.000,00 €. Top up to avoid failed payments.",type:"warning"},actions:{primary:{label:"Add money",onClick:()=>alert("Add money")},secondary:{label:"Cancel",onClick:()=>alert("Cancel")}}}},c={args:{header:{title:"Account number is missing",description:"Hellen the HR’s account number is missing. Review now to avoid failed payroll.",type:"info"},actions:{primary:{label:"Review",onClick:()=>alert("Review"),variant:"neutral"},secondary:{label:"Cancel",onClick:()=>alert("Cancel")}}}},d={render:()=>{const[t,a]=o.useState(!1);return e.jsxs("div",{className:"flex h-full w-full items-center justify-center",children:[e.jsx(i,{variant:"critical",icon:y,label:"Delete file",onClick:()=>a(!0)}),e.jsx(x,{open:t,onClose:()=>a(!1),header:{title:"Delete file",description:"Are you sure you want to delete this file?",type:"critical"},actions:{primary:{label:"Delete",icon:y,variant:"critical",onClick:()=>{alert("Confirmed"),a(!1)}},secondary:{label:"Cancel",onClick:()=>a(!1)}}})]})}};var b,C,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var j,w,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    header: {
      title: "Top up account",
      description: "Your account balance is under 1.000,00 €. Top up to avoid failed payments.",
      type: "warning"
    },
    actions: {
      primary: {
        label: "Add money",
        onClick: () => alert("Add money")
      },
      secondary: {
        label: "Cancel",
        onClick: () => alert("Cancel")
      }
    }
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var N,R,k;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    header: {
      title: "Account number is missing",
      description: "Hellen the HR’s account number is missing. Review now to avoid failed payroll.",
      type: "info"
    },
    actions: {
      primary: {
        label: "Review",
        onClick: () => alert("Review"),
        variant: "neutral"
      },
      secondary: {
        label: "Cancel",
        onClick: () => alert("Cancel")
      }
    }
  }
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var _,O,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="flex h-full w-full items-center justify-center">
        <Button variant="critical" icon={Delete} label="Delete file" onClick={() => setIsOpen(true)} />
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} header={{
        title: "Delete file",
        description: "Are you sure you want to delete this file?",
        type: "critical"
      }} actions={{
        primary: {
          label: "Delete",
          icon: Delete,
          variant: "critical",
          onClick: () => {
            alert("Confirmed");
            setIsOpen(false);
          }
        },
        secondary: {
          label: "Cancel",
          onClick: () => setIsOpen(false)
        }
      }} />
      </div>;
  }
}`,...(A=(O=d.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Ne=["Critical","Warning","Info","WithTrigger"];export{s as Critical,c as Info,l as Warning,d as WithTrigger,Ne as __namedExportsOrder,De as default};
