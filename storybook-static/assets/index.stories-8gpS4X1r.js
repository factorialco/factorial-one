import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{W as g,D as u,a as x}from"./index.stories-BUsjIxef.js";import"./index-yBjzXJbu.js";import"./ClockIn-pnECK7Vn.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BpAFfwO3.js";import"./index-Cwk_nZHn.js";import"./clsx-B-dksMZM.js";import"./Save-B3VvXevP.js";import"./Bell-C7UU3-3R.js";import"./utils-B2yEwIwY.js";function i({items:t,onClickItem:c}){return s.jsx("div",{className:"flex flex-col gap-2",children:t.map(a=>s.jsx(g,{...a,onClick:c},a.id))})}try{i.displayName="WidgetInboxList",i.__docgenInfo={description:"",displayName:"WidgetInboxList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<WidgetInboxListItemProps<string | number>, "onClick">[]'}},onClickItem:{defaultValue:null,description:"",name:"onClickItem",required:!1,type:{name:"((id: string | number) => void)"}}}}}catch{}const w={title:"Widgets/WidgetInboxList",component:i,tags:["autodocs","experimental"],parameters:{layout:"centered"},decorators:[t=>s.jsx("div",{className:"w-[348px]",children:s.jsx(t,{})})]},e={args:{items:new Array(5).fill(null).map(()=>({...u.args})),onClickItem:()=>{}}},r={args:{...e.args,items:new Array(5).fill(null).map(()=>({...x.args}))}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill(null).map(() => ({
      ...(DefaulWidgetInboxListItemStory.args as WidgetInboxListItemProps)
    })),
    onClickItem: () => {}
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: new Array(5).fill(null).map(() => ({
      ...(WithLongTitleWidgetInboxListItemStory.args as WidgetInboxListItemProps)
    }))
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const A=["Default","WithLongTitles"];export{e as Default,r as WithLongTitles,A as __namedExportsOrder,w as default};
