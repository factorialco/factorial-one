import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{Default as o,WithLongTitle as m}from"./index.stories-CTz8LWbF.js";import{W as f}from"./index-OCJYQg6Y.js";import"./index-yBjzXJbu.js";import"./Save-B3VvXevP.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Placeholder-pote8B1m.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-B2OpD_bL.js";import"./index-DmGuVwWp.js";import"./AlertCircle-CAZ1CSgr.js";import"./InfoCircle-BQwEmo9G.js";import"./Warning-CA_bta6S.js";import"./text-CLXhi3RU.js";import"./index-C2XIGUiK.js";import"./exports-BcFg0xa3.js";import"./component-BI8hiL87.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-BegHU_l6.js";function s({items:e,onClickItem:i}){return a.jsx("div",{className:"flex flex-col gap-1",children:e.map(t=>a.jsx(f,{...t,onClick:i},t.id))})}try{s.displayName="WidgetSimpleList",s.__docgenInfo={description:"",displayName:"WidgetSimpleList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<Props<string | number>, "onClick">[]'}},onClickItem:{defaultValue:null,description:"",name:"onClickItem",required:!1,type:{name:"((id: string | number) => void)"}}}}}catch{}const $={title:"Widgets/WidgetSimpleList",component:s,tags:["autodocs","experimental"],parameters:{layout:"centered"},decorators:[e=>a.jsx("div",{className:"w-[348px]",children:a.jsx(e,{})})]},r={args:{items:new Array(5).fill(null).map((e,i)=>{var t;return{id:i,...o.args,title:((t=o.args)==null?void 0:t.title)??"Example title"}}),onClickItem:()=>{}}},l={args:{...r.args,items:new Array(5).fill(null).map((e,i)=>{var t;return{id:i,...m.args,title:((t=m.args)==null?void 0:t.title)??"This item will show a really really long title"}})}};var n,p,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill(null).map((_, i) => ({
      id: i,
      ...DefaultWidgetSimpleListItemStory.args,
      title: DefaultWidgetSimpleListItemStory.args?.title ?? "Example title"
    })),
    onClickItem: () => {}
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,g,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: new Array(5).fill(null).map((_, i) => ({
      id: i,
      ...WithLongTitleWidgetSimpleListItemStory.args,
      title: WithLongTitleWidgetSimpleListItemStory.args?.title ?? "This item will show a really really long title"
    }))
  }
}`,...(u=(g=l.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const z=["Default","WithLongTitles"];export{r as Default,l as WithLongTitles,z as __namedExportsOrder,$ as default};
