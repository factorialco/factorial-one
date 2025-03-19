import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./Save-B3VvXevP.js";import{F as pe}from"./Home-BAwEvcom.js";import{F as fe,a as _,b as ge,c as q,d as ke,e as xe}from"./Suitcase-1llUIybD.js";import{B as m}from"./index-Blak80_u.js";import"./exports-IwKL35tc.js";import{R as he}from"./index-BegHU_l6.js";import{r as ve}from"./index-B6o7_jwP.js";import{a as we,C as je}from"./index-CTYjjOeB.js";import{I as V}from"./index-CDBnMHOu.js";import{c as Ce}from"./utils-B2yEwIwY.js";import{m as Te}from"./proxy-CqNJYjyK.js";import{S as De}from"./index-rQB-1XLh.js";import"./index-yBjzXJbu.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./index-Cwk_nZHn.js";import"./clsx-B-dksMZM.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./component-BI8hiL87.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./scrollarea-CRia_fH-.js";import"./index-BKKrtyrw.js";import"./index-yradL_ub.js";import"./index-BNL5Yqmu.js";import"./index-BiB69Vyw.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./text-CLXhi3RU.js";import"./index-C2XIGUiK.js";import"./exports-BcFg0xa3.js";import"./date-DbrLY854.js";import"./format-CPFj0COA.js";import"./PieChart-Dtl9OwLu.js";import"./generateCategoricalChart-DK672pYy.js";import"./tiny-invariant-CopsF_GD.js";import"./PolarAngleAxis-DEqze0KJ.js";import"./filter-props-BKVLvpUz.js";import"./index-DJtxxfEW.js";import"./Search-DyMYdF6H.js";import"./input-BTRPgdqa.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./ChevronDown-LBI9f9x4.js";import"./Select-tQGJVFmO.js";import"./index-BobS88kg.js";import"./ChevronUp-DDAshzCv.js";import"./CheckCircle-DR890WNk.js";import"./index-Bmycdo5-.js";import"./index-7k9rgiuw.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-BL6sZKvk.js";import"./index-D15UBmr5.js";import"./index-Cl3QsgNf.js";const be=({data:t=[],labels:n,remainingMinutes:a})=>{const o=t[t.length-1],i=(o==null?void 0:o.variant)||"clocked-out",u={"clocked-out":n.clockedOut,"clocked-in":n.clockedIn,break:n.onBreak}[i],p=(()=>{if(a===void 0)return;const c=Math.abs(a),b=Math.floor(c/60),y=Math.floor(c%60),g=`${b.toString().padStart(2,"0")}:${y.toString().padStart(2,"0")}`;return a>=0?`${n.remainingTime} ${g}`:`${n.overtime} ${g}`})(),f=we[i];return{status:i,statusText:u,subtitle:p,statusColor:f}};function S({text:t,placeholder:n,icon:a,onClick:o}){return e.jsxs("div",{className:"flex cursor-default flex-row items-center gap-1 rounded-xs px-1 py-0.5 hover:bg-f1-background-hover",onClick:o,children:[a&&e.jsx(V,{icon:a,className:"text-f1-icon"}),e.jsx("span",{className:Ce("font-medium",t?"text-f1-foreground":"text-f1-foreground-secondary"),children:t??n}),e.jsx(V,{icon:fe})]})}try{S.displayName="Selector",S.__docgenInfo={description:"",displayName:"Selector",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}function d({remainingMinutes:t,data:n=[],labels:a,locationId:o,locations:i,canShowLocation:u=!0,locationSelectorDisabled:p=!1,onClockIn:f,onClockOut:c,onBreak:b,canShowBreakButton:y=!0,onChangeLocationId:g,canShowProject:O=!0,projectSelectorElement:I}){const{status:k,statusText:ce,subtitle:N,statusColor:L}=be({data:n,labels:a,remainingMinutes:t}),le=k==="clocked-out"&&i.length&&!p&&u,r=i.find(l=>l.id===o),me=i.map(l=>({value:l.id,label:l.name,icon:l.icon})),[de,ue]=ve.useState(!1);return e.jsx("div",{className:"@container",children:e.jsxs("div",{className:"flex-grow flex-col",children:[e.jsxs("div",{className:"flex flex-col-reverse items-center gap-2 @xs:flex-row",children:[e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-0.5 @xs:items-start",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"line-clamp-1 text-2xl font-semibold text-f1-foreground",children:ce}),e.jsxs("div",{className:"relative aspect-square h-4",children:[e.jsx(Te.div,{className:"absolute inset-0 rounded-full opacity-20",style:{backgroundColor:L},initial:{scale:.5,opacity:.6},animate:{scale:1.6,opacity:0},transition:{duration:1.5,repeat:1/0,repeatDelay:1}}),e.jsx("div",{className:"absolute inset-[3px] rounded-full",style:{backgroundColor:L}})]})]}),N&&e.jsx("p",{className:"line-clamp-1 text-f1-foreground-secondary",children:N})]}),e.jsxs("div",{className:"flex justify-center gap-2 @xs:justify-start",children:[k==="clocked-out"&&e.jsx("div",{className:"mr-3 @xs:mr-0",children:e.jsx(m,{onClick:f,label:a.clockIn,icon:_})}),k==="clocked-in"&&e.jsxs(e.Fragment,{children:[y&&e.jsx(m,{onClick:b,label:a.break,variant:"neutral",icon:ge,hideLabel:!0}),e.jsx(m,{onClick:c,label:a.clockOut,variant:"neutral",icon:q})]}),k==="break"&&e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:c,label:a.clockOut,variant:"neutral",icon:q,hideLabel:!0}),e.jsx(m,{onClick:f,label:a.resume,icon:_})]})]})]}),e.jsx(je,{data:n,remainingMinutes:t})]}),e.jsx("div",{className:"mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start",children:le?e.jsxs(e.Fragment,{children:[e.jsx(De,{value:o,options:me,onChange:g,open:de,onOpenChange:ue,disabled:p,children:e.jsx("div",{"aria-label":"Select location",children:e.jsx(S,{text:r==null?void 0:r.name,placeholder:a.selectLocation,icon:r==null?void 0:r.icon})})}),O&&I]}):e.jsxs(e.Fragment,{children:[u&&r&&e.jsx(e.Fragment,{children:e.jsx(he,{text:r.name,icon:r.icon})}),O&&I]})})]})})}try{d.displayName="ClockInControls",d.__docgenInfo={description:"",displayName:"ClockInControls",props:{remainingMinutes:{defaultValue:null,description:"Optional remaining time in minutes",name:"remainingMinutes",required:!1,type:{name:"number"}},data:{defaultValue:{value:"[]"},description:"Clock in entries data",name:"data",required:!1,type:{name:"{ from: Date; to: Date; variant: ClockInStatus; }[]"}},labels:{defaultValue:null,description:"Labels for all text content",name:"labels",required:!0,type:{name:"{ clockedOut: string; clockedIn: string; onBreak: string; clockIn: string; clockOut: string; break: string; resume: string; remainingTime: string; overtime: string; selectLocation: string; selectProject: string; }"}},locationId:{defaultValue:null,description:"",name:"locationId",required:!1,type:{name:"string"}},onChangeLocationId:{defaultValue:null,description:"",name:"onChangeLocationId",required:!0,type:{name:"Dispatch<string>"}},locations:{defaultValue:null,description:"",name:"locations",required:!0,type:{name:"{ id: string; name: string; icon: IconType; }[]"}},canShowLocation:{defaultValue:{value:"true"},description:"",name:"canShowLocation",required:!1,type:{name:"boolean"}},locationSelectorDisabled:{defaultValue:{value:"false"},description:"",name:"locationSelectorDisabled",required:!1,type:{name:"boolean"}},canShowBreakButton:{defaultValue:{value:"true"},description:"",name:"canShowBreakButton",required:!1,type:{name:"boolean"}},onClockIn:{defaultValue:null,description:"Callback when Clock In button is clicked",name:"onClockIn",required:!1,type:{name:"(() => void)"}},onClockOut:{defaultValue:null,description:"Callback when Clock Out button is clicked",name:"onClockOut",required:!1,type:{name:"(() => void)"}},onBreak:{defaultValue:null,description:"Callback when Break button is clicked",name:"onBreak",required:!1,type:{name:"(() => void)"}},canShowProject:{defaultValue:{value:"true"},description:"",name:"canShowProject",required:!1,type:{name:"boolean"}},projectSelectorElement:{defaultValue:null,description:"",name:"projectSelectorElement",required:!1,type:{name:"ReactNode"}}}}}catch{}const ye={clockedOut:"Clocked out",clockedIn:"Clocked in",onBreak:"On a break",clockIn:"Clock in",clockOut:"Clock out",break:"Break",resume:"Resume",remainingTime:"Remaining time",overtime:"Overtime",selectLocation:"Select location",selectProject:"Select project"},Pt={title:"Home/ClockInControls",component:d,tags:["autodocs","experimental"],args:{labels:ye,locations:[{id:"1",name:"Home",icon:pe},{id:"2",name:"Business Trip",icon:ke},{id:"3",name:"Office",icon:xe}],locationId:"1"},render:t=>e.jsx("div",{className:"max-w-[350px]",children:e.jsx(d,{...t})})},s={args:{remainingMinutes:8*60,data:[]}},x={args:{remainingMinutes:4*60+39,data:[{from:new Date("2024-03-20T09:02:00"),to:new Date("2024-03-20T12:23:00"),variant:"clocked-in"}]}},h={args:{remainingMinutes:4*60+39,data:[{from:new Date("2024-03-20T09:02:00"),to:new Date("2024-03-20T12:00:00"),variant:"clocked-in"},{from:new Date("2024-03-20T12:00:00"),to:new Date("2024-03-20T12:34:00"),variant:"break"}]}},v={args:{remainingMinutes:-17,data:[{from:new Date("2024-03-20T09:02:00"),to:new Date("2024-03-20T12:00:00"),variant:"clocked-in"},{from:new Date("2024-03-20T12:00:00"),to:new Date("2024-03-20T12:45:00"),variant:"break"},{from:new Date("2024-03-20T12:45:00"),to:new Date("2024-03-20T18:17:00"),variant:"clocked-in"}]}},w={render:t=>e.jsx("div",{className:"max-w-[300px]",children:e.jsx(d,{...t})})},j={args:{remainingMinutes:4*60+39,data:[{from:new Date("2024-03-20T09:02:00"),to:new Date("2024-03-20T12:23:00"),variant:"clocked-in"}],locationId:void 0}},C={args:{remainingMinutes:320,data:[{from:new Date("2024-03-20T09:02:00"),to:new Date("2024-03-20T12:00:00"),variant:"clocked-in"},{from:new Date("2024-03-20T12:00:00"),to:new Date("2024-03-20T12:00:00"),variant:"clocked-out"}]}},T={args:{...s.args,locationSelectorDisabled:!0}},D={args:{...s.args,canShowLocation:!1}};var B,M,R;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    remainingMinutes: 8 * 60,
    data: []
  }
}`,...(R=(M=s.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var F,$,P;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    remainingMinutes: 4 * 60 + 39,
    data: [{
      from: new Date("2024-03-20T09:02:00"),
      to: new Date("2024-03-20T12:23:00"),
      variant: "clocked-in"
    }]
  }
}`,...(P=($=x.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var W,A,H;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    remainingMinutes: 4 * 60 + 39,
    data: [{
      from: new Date("2024-03-20T09:02:00"),
      to: new Date("2024-03-20T12:00:00"),
      variant: "clocked-in"
    }, {
      from: new Date("2024-03-20T12:00:00"),
      to: new Date("2024-03-20T12:34:00"),
      variant: "break"
    }]
  }
}`,...(H=(A=h.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var E,z,G;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    remainingMinutes: -17,
    data: [{
      from: new Date("2024-03-20T09:02:00"),
      to: new Date("2024-03-20T12:00:00"),
      variant: "clocked-in"
    }, {
      from: new Date("2024-03-20T12:00:00"),
      to: new Date("2024-03-20T12:45:00"),
      variant: "break"
    }, {
      from: new Date("2024-03-20T12:45:00"),
      to: new Date("2024-03-20T18:17:00"),
      variant: "clocked-in"
    }]
  }
}`,...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var K,J,Q;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <div className="max-w-[300px]">
      <ClockInControls {...args} />
    </div>
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    remainingMinutes: 4 * 60 + 39,
    data: [{
      from: new Date("2024-03-20T09:02:00"),
      to: new Date("2024-03-20T12:23:00"),
      variant: "clocked-in"
    }],
    locationId: undefined
  }
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    remainingMinutes: 320,
    data: [{
      from: new Date("2024-03-20T09:02:00"),
      to: new Date("2024-03-20T12:00:00"),
      variant: "clocked-in"
    }, {
      from: new Date("2024-03-20T12:00:00"),
      to: new Date("2024-03-20T12:00:00"),
      variant: "clocked-out"
    }]
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,re;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...ClockedOut.args,
    locationSelectorDisabled: true
  }
}`,...(re=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,se;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...ClockedOut.args,
    canShowLocation: false
  }
}`,...(se=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const Wt=["ClockedOut","ClockedIn","OnBreak","WithOvertime","Collapsed","WithNoLocationOrProject","ClockedOutWithSomeTime","WithDisabledSelectors","WithHiddenLocationAndProject"];export{x as ClockedIn,s as ClockedOut,C as ClockedOutWithSomeTime,w as Collapsed,h as OnBreak,T as WithDisabledSelectors,D as WithHiddenLocationAndProject,j as WithNoLocationOrProject,v as WithOvertime,Wt as __namedExportsOrder,Pt as default};
