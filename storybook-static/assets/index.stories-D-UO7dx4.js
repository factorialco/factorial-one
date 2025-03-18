import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as ae}from"./index-Blak80_u.js";import{L as m}from"./index-Ca0ib38l.js";import{P as C}from"./index-C9oqVgzc.js";import{R as ne}from"./index-C27sqh0x.js";import{D as k}from"./index-B79dpo_y.js";import"./Save-B3VvXevP.js";import{F as b}from"./EllipsisHorizontal-CXMIya4N.js";import{c as re}from"./date-DbrLY854.js";import{w as oe}from"./skeleton-BYaQrqsT.js";import{S as r}from"./skeleton-BQT1AIt_.js";import{P as M}from"./index-DuPCUk1k.js";import{P as O}from"./index-BYZELOqi.js";import{a as se}from"./addMonths-CmW7xGrE.js";import"./index-yBjzXJbu.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./ExternalLink-Bgb90MI7.js";import"./linkHandler-fUi2qCbR.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-BNL5Yqmu.js";import"./index-YO4D_ClJ.js";import"./Reaction-CKLBHP4X.js";import"./popover-BqXImKWO.js";import"./index-DW48STyt.js";import"./index-7k9rgiuw.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-BL6sZKvk.js";import"./index-Ci88gSgP.js";import"./index-XjqIyxWy.js";import"./Windows-juRZgWzJ.js";import"./i18n-provider-DLZYpdh4.js";import"./UserPlatformProvider-CL37nBDW.js";import"./tooltip-D2WqQ3hx.js";import"./index-Cl3QsgNf.js";import"./index-3YeXfHId.js";import"./index-Bmycdo5-.js";import"./index-BiB69Vyw.js";import"./index-qX83RIrM.js";import"./chevron-right-CmdJHgzf.js";import"./createLucideIcon-DSAetUgs.js";import"./exports-IwKL35tc.js";import"./component-BI8hiL87.js";import"./scrollarea-CRia_fH-.js";import"./index-BdQq_4o_.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-DG6DbzsE.js";import"./format-CPFj0COA.js";import"./index-mNGRGisC.js";import"./index-DIdyo0Hg.js";import"./index-BegHU_l6.js";import"./text-CLXhi3RU.js";import"./index-C2XIGUiK.js";import"./exports-BcFg0xa3.js";import"./ChevronRight-zM-ePXcJ.js";import"./colors-Yrv_tWQC.js";function ie(t,a){return se(t,-1)}const le=new Set(["avi","mkv","mov","mpeg","mp4","webm","wmv"]),me=t=>{if(!t)return!1;if(t.indexOf("//s3.")>=0)return t.indexOf("response-content-type=video")>=0;const o=(t==null?void 0:t.split(".")).at(-1);return!!o&&le.has(o)},y=({id:t,author:a,group:o,createdAt:$,title:K,description:w,onClick:Y,mediaUrl:c,event:v,counters:N,reactions:s,inLabel:G,comment:i,dropdownItems:l,noVideoPreload:J=!1})=>{const Q=[N.views,N.comments].filter(Boolean).join(" · "),X=re($),Z=()=>{Y(t)},ee=te=>{te.stopPropagation()},p=`${a.firstName} ${a.lastName}`;return e.jsxs("div",{className:"flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",onClick:Z,children:[e.jsx("div",{className:"hidden md:block",children:e.jsx(m,{href:a.url,title:p,stopPropagation:!0,children:e.jsx(C,{firstName:a.firstName,lastName:a.lastName,src:a.avatarUrl})})}),e.jsxs("div",{className:"flex flex-1 flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsxs("div",{className:"flex flex-1 flex-row flex-wrap items-center gap-1",children:[e.jsx(m,{href:a.url,className:"block md:hidden",title:p,stopPropagation:!0,children:e.jsx("span",{className:"flex items-center",children:e.jsx(C,{firstName:a.firstName,lastName:a.lastName,src:a.avatarUrl,size:"xsmall"})})}),e.jsx(m,{href:a.url,title:p,className:"font-medium text-f1-foreground no-underline visited:text-f1-foreground",stopPropagation:!0,children:p}),e.jsx("span",{className:"text-f1-foreground-secondary",children:G}),e.jsx(m,{onClick:o.onClick,title:o.title,className:"font-medium text-f1-foreground no-underline visited:text-f1-foreground",stopPropagation:!0,children:o.title}),e.jsx("span",{className:"hidden text-f1-foreground-secondary md:inline",children:"·"}),e.jsx("span",{className:"text-f1-foreground-secondary",children:X})]}),e.jsxs("div",{className:"flex flex-row gap-2",children:[e.jsxs("div",{className:"hidden flex-row gap-2 md:flex",children:[e.jsx(m,{onClick:i.onClick,title:i.label,stopPropagation:!0,children:e.jsx(ae,{label:i.label,size:"sm",variant:"outline"})}),(l==null?void 0:l.length)&&e.jsx(k,{items:l,icon:b,size:"sm"})]}),e.jsx("div",{className:"md:hidden",children:e.jsx(k,{items:[{label:i.label,onClick:i.onClick},...l??[]],icon:b,size:"sm"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-1 text-f1-foreground",children:[e.jsx("p",{className:"text-xl font-semibold",children:K}),w&&e.jsx(M,{content:w,collapsed:!0})]})]}),c&&!v&&e.jsxs("div",{className:"relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]",children:[me(c)?e.jsx("video",{controls:!0,className:"h-full w-full object-cover",onClick:ee,preload:J?"none":"auto",children:e.jsx("source",{src:c})}):e.jsx("img",{src:c,role:"presentation",loading:"lazy",className:"aspect-video h-full w-full object-cover"}),e.jsx(r,{className:"absolute inset-0 -z-10 h-full w-full"})]}),v&&e.jsx("div",{className:"w-full md:max-w-[480px]",children:e.jsx(O,{...v})}),e.jsx("p",{className:"text-f1-foreground-secondary",children:Q}),e.jsx(ne,{items:(s==null?void 0:s.items)??[],onInteraction:s==null?void 0:s.onInteraction})]})]})},j=({withEvent:t,withImage:a})=>e.jsxs("div",{className:"flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3",children:[e.jsx("div",{className:"hidden md:block",children:e.jsx(r,{className:"aspect-square w-8 rounded-full"})}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex h-6 flex-row items-center gap-2",children:[e.jsx("div",{className:"md:hidden",children:e.jsx(r,{className:"aspect-square w-4 rounded-full"})}),e.jsx(r,{className:"h-2.5 w-14 rounded-2xs"}),e.jsx(r,{className:"h-2.5 w-18 rounded-2xs"})]}),e.jsx(r,{className:"mt-3.5 h-3.5 w-1/5 rounded-2xs"}),e.jsx("div",{className:"mt-3",children:e.jsx(M.Skeleton,{})}),a&&!t&&e.jsx("div",{className:"mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3",children:e.jsx(r,{className:"h-full w-full rounded-2xs"})}),t&&e.jsx("div",{className:"mt-3 w-full md:w-2/3",children:e.jsx(O.Skeleton,{})}),e.jsxs("div",{className:"mt-3 flex flex-row items-center gap-1 py-1",children:[e.jsx(r,{className:"h-2.5 w-14 rounded-2xs"}),e.jsx(r,{className:"h-2.5 w-14 rounded-2xs"})]})]})]}),d=oe(y,j);try{y.displayName="BaseCommunityPost",y.__docgenInfo={description:"",displayName:"BaseCommunityPost",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"{ firstName: string; lastName: string; avatarUrl?: string | undefined; url: string; }"}},group:{defaultValue:null,description:"",name:"group",required:!0,type:{name:"{ title: string; onClick: () => void; }"}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!0,type:{name:"Date"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},mediaUrl:{defaultValue:null,description:"",name:"mediaUrl",required:!1,type:{name:"string"}},event:{defaultValue:null,description:"",name:"event",required:!1,type:{name:"PostEventProps"}},counters:{defaultValue:null,description:"",name:"counters",required:!0,type:{name:"{ views?: string | undefined; comments: string; }"}},reactions:{defaultValue:null,description:"",name:"reactions",required:!1,type:{name:"ReactionsProps"}},inLabel:{defaultValue:null,description:"",name:"inLabel",required:!0,type:{name:"string"}},comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"{ label: string; onClick: () => void; }"}},noVideoPreload:{defaultValue:{value:"false"},description:"",name:"noVideoPreload",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(id: string) => void"}},dropdownItems:{defaultValue:null,description:"",name:"dropdownItems",required:!1,type:{name:"DropdownItem[]"}}}}}catch{}try{j.displayName="CommunityPostSkeleton",j.__docgenInfo={description:"",displayName:"CommunityPostSkeleton",props:{withEvent:{defaultValue:null,description:"",name:"withEvent",required:!1,type:{name:"boolean"}},withImage:{defaultValue:null,description:"",name:"withImage",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="CommunityPost",d.__docgenInfo={description:"",displayName:"CommunityPost",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"{ firstName: string; lastName: string; avatarUrl?: string | undefined; url: string; }"}},group:{defaultValue:null,description:"",name:"group",required:!0,type:{name:"{ title: string; onClick: () => void; }"}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!0,type:{name:"Date"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},mediaUrl:{defaultValue:null,description:"",name:"mediaUrl",required:!1,type:{name:"string"}},event:{defaultValue:null,description:"",name:"event",required:!1,type:{name:"PostEventProps"}},counters:{defaultValue:null,description:"",name:"counters",required:!0,type:{name:"{ views?: string | undefined; comments: string; }"}},reactions:{defaultValue:null,description:"",name:"reactions",required:!1,type:{name:"ReactionsProps"}},inLabel:{defaultValue:null,description:"",name:"inLabel",required:!0,type:{name:"string"}},comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"{ label: string; onClick: () => void; }"}},noVideoPreload:{defaultValue:{value:"false"},description:"",name:"noVideoPreload",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(id: string) => void"}},dropdownItems:{defaultValue:null,description:"",name:"dropdownItems",required:!1,type:{name:"DropdownItem[]"}}}}}catch{}const It={component:d,title:"Home/Communities/Post/CommunityPost",tags:["autodocs","experimental"]},de=new Date(2024,11,13,10,30),n={decorators:[t=>e.jsx("div",{className:"max-w-[755px]",children:e.jsx(t,{})})],args:{author:{firstName:"Saúl",lastName:"Domínguez",url:"https://google.com/",avatarUrl:"https://github.com/sauldom102.png"},group:{title:"All company",onClick:()=>{}},createdAt:ie(new Date),title:"Title",description:'<p class="TextEditorTheme__paragraph" dir="ltr"><span>Super Kudos for </span><strong class="mentioned"><span><a href="/employees/1">First Employee</a></span></strong><span> and </span><strong class="mentioned"><span><a href="/employees/2">Second Employee</a></span></strong><span> , who always are available to help in any way they can and as quickly as possible. You guys are great! ⭐</span></p><p class="TextEditorTheme__paragraph" dir="ltr">Including some link here too: <a href="mailto:randomemail@factorial.co" class="TextEditorTheme__link"><span>randomemail@factorial.co</span></a></p></p>',onClick:()=>{},mediaUrl:"https://multimedia.andalucia.org/media/0BC700DB844F4EDFBE00C1FA9B493D71/img/1112772E6D5945A1B89C26E539DD0D99/SE_Catedral_01.jpg?responsive",event:{title:"Sevilla Tour",place:"Sevilla",imageUrl:"https://awaytothecity.com/wp-content/uploads/2023/10/Spain-Seville-Plaza-de-Espana-Hallway-Columns-Fountain-Sunset_Cover.webp",date:de},counters:{views:"14 views",comments:"3 comments"},reactions:{items:[{emoji:"💖",initialCount:25},{emoji:"🍆",initialCount:8},{emoji:"🎉",initialCount:12},{emoji:"🥰",initialCount:3},{emoji:"🤩",initialCount:32},{emoji:"🎯",initialCount:3}]},inLabel:"in",comment:{label:"Comment",onClick:()=>{}},dropdownItems:[{label:"Edit post",onClick:()=>{}},{label:"Turn comments and reactions on",onClick:()=>{}},"separator",{label:"Delete post",onClick:()=>{},critical:!0}]}},u={decorators:n.decorators,args:{...n.args,event:void 0}},f={decorators:n.decorators,args:{...n.args,event:void 0,mediaUrl:void 0}},g={decorators:n.decorators,args:{...n.args,event:void 0,mediaUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",noVideoPreload:!0}},x={decorators:[t=>e.jsx("div",{className:"max-w-[755px]",children:e.jsx(t,{})})],args:{withEvent:!0},render:t=>e.jsx(d.Skeleton,{...t})},h={decorators:[t=>e.jsx("div",{className:"max-w-[755px]",children:e.jsx(t,{})})],args:{withImage:!0},render:t=>e.jsx(d.Skeleton,{...t})};var S,_,V;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <div className="max-w-[755px]">
        <Story />
      </div>],
  args: {
    author: {
      firstName: "Saúl",
      lastName: "Domínguez",
      url: "https://google.com/",
      avatarUrl: "https://github.com/sauldom102.png"
    },
    group: {
      title: "All company",
      onClick: () => {}
    },
    createdAt: subMonths(new Date(), 1),
    title: "Title",
    description: \`<p class="TextEditorTheme__paragraph" dir="ltr"><span>Super Kudos for </span><strong class="mentioned"><span><a href="/employees/1">First Employee</a></span></strong><span> and </span><strong class="mentioned"><span><a href="/employees/2">Second Employee</a></span></strong><span> , who always are available to help in any way they can and as quickly as possible. You guys are great! ⭐</span></p><p class="TextEditorTheme__paragraph" dir="ltr">Including some link here too: <a href="mailto:randomemail@factorial.co" class="TextEditorTheme__link"><span>randomemail@factorial.co</span></a></p></p>\`,
    onClick: () => {},
    mediaUrl: "https://multimedia.andalucia.org/media/0BC700DB844F4EDFBE00C1FA9B493D71/img/1112772E6D5945A1B89C26E539DD0D99/SE_Catedral_01.jpg?responsive",
    event: {
      title: "Sevilla Tour",
      place: "Sevilla",
      imageUrl: "https://awaytothecity.com/wp-content/uploads/2023/10/Spain-Seville-Plaza-de-Espana-Hallway-Columns-Fountain-Sunset_Cover.webp",
      date: eventDate
    },
    counters: {
      views: "14 views",
      comments: "3 comments"
    },
    reactions: {
      items: [{
        emoji: "💖",
        initialCount: 25
      }, {
        emoji: "🍆",
        initialCount: 8
      }, {
        emoji: "🎉",
        initialCount: 12
      }, {
        emoji: "🥰",
        initialCount: 3
      }, {
        emoji: "🤩",
        initialCount: 32
      }, {
        emoji: "🎯",
        initialCount: 3
      }]
    },
    inLabel: "in",
    comment: {
      label: "Comment",
      onClick: () => {}
    },
    dropdownItems: [{
      label: "Edit post",
      onClick: () => {}
    }, {
      label: "Turn comments and reactions on",
      onClick: () => {}
    }, "separator", {
      label: "Delete post",
      onClick: () => {},
      critical: true
    }]
  }
}`,...(V=(_=n.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var D,P,q;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: Default.decorators,
  args: {
    ...Default.args,
    event: undefined
  }
}`,...(q=(P=u.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var E,B,I;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: Default.decorators,
  args: {
    ...Default.args,
    event: undefined,
    mediaUrl: undefined
  }
}`,...(I=(B=f.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var T,U,A;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: Default.decorators,
  args: {
    ...Default.args,
    event: undefined,
    mediaUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    noVideoPreload: true
  }
}`,...(A=(U=g.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var F,z,L;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: [Story => <div className="max-w-[755px]">
        <Story />
      </div>],
  args: {
    withEvent: true
  },
  render: args => <CommunityPost.Skeleton {...args} />
}`,...(L=(z=x.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var R,W,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [Story => <div className="max-w-[755px]">
        <Story />
      </div>],
  args: {
    withImage: true
  },
  render: args => <CommunityPost.Skeleton {...args} />
}`,...(H=(W=h.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const Tt=["Default","WithImage","NoImageNoEvent","WithVideo","Skeleton","SkeletonWithImage"];export{n as Default,f as NoImageNoEvent,x as Skeleton,h as SkeletonWithImage,u as WithImage,g as WithVideo,Tt as __namedExportsOrder,It as default};
