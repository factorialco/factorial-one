import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./Save-B3VvXevP.js";import{F as m}from"./Placeholder-pote8B1m.js";import{B as N}from"./index-Blak80_u.js";import{A as k}from"./index-Fz90wGtv.js";import{E as C}from"./index-DSOTzp9u.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./AlertCircle-CAZ1CSgr.js";import"./InfoCircle-BQwEmo9G.js";import"./Warning-CA_bta6S.js";function d({title:o,description:_,emoji:p,actions:t}){if(((t==null?void 0:t.length)??0)>2)throw Error("You can only provide up to two actions for the WidgetEmptyState");return e.jsxs("div",{className:"flex min-h-56 flex-grow flex-col items-center justify-center p-8",children:[p?e.jsx(C,{emoji:p,size:"lg"}):e.jsx(k,{type:"warning",size:"lg"}),e.jsxs("div",{className:"mt-3 text-center",children:[e.jsx("p",{className:"line-clamp-2 font-medium",children:o}),e.jsx("p",{className:"mt-0.5 line-clamp-2 text-f1-foreground-secondary",children:_})]}),!!t&&e.jsx("div",{className:"mt-5 flex flex-row gap-3",children:t.map(r=>e.jsx(N,{label:r.label,icon:r.icon,onClick:r.onClick,variant:r.variant},r.label))})]})}try{d.displayName="WidgetEmptyState",d.__docgenInfo={description:"",displayName:"WidgetEmptyState",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},emoji:{defaultValue:null,description:"",name:"emoji",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const ee={title:"Widgets/WidgetEmptyState",component:d,tags:["autodocs","experimental"],args:{title:"Title",description:"Description",emoji:"🍆",actions:[{icon:m,onClick:()=>{},label:"Label"},{icon:m,onClick:()=>{},label:"Label",variant:"outline"}]},decorators:[o=>e.jsx("div",{className:"w-[360px] rounded-lg border border-solid border-f1-border-secondary",children:e.jsx(o,{})})]},a={},i={args:{emoji:void 0}},s={args:{emoji:void 0,title:"Really really long title that we want to show that we want to show to our users for them to read",description:"Really really long description that we want to show to our users for them to read and express their thoughts"}},n={args:{emoji:void 0,actions:[{icon:m,onClick:()=>{},label:"Label",variant:"outline"}]}},l={args:{emoji:void 0,actions:void 0}};var c,u,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    emoji: undefined
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,w,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    emoji: undefined,
    title: "Really really long title that we want to show that we want to show to our users for them to read",
    description: "Really really long description that we want to show to our users for them to read and express their thoughts"
  }
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var W,E,S;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    emoji: undefined,
    actions: [{
      icon: PlaceholderIcon,
      onClick: () => {},
      label: "Label",
      variant: "outline"
    }]
  }
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var v,b,A;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    emoji: undefined,
    actions: undefined
  }
}`,...(A=(b=l.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};const te=["DefaultWidgetEmptyState","AlertWidgetEmptyState","WidgetEmptyStateWithLongTexts","WidgetEmptyStateWithOnlyOutlineAction","WidgetEmptyStateWithoutActions"];export{i as AlertWidgetEmptyState,a as DefaultWidgetEmptyState,s as WidgetEmptyStateWithLongTexts,n as WidgetEmptyStateWithOnlyOutlineAction,l as WidgetEmptyStateWithoutActions,te as __namedExportsOrder,ee as default};
