import{A as S}from"./index-DCiYqq-t.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-Ci88gSgP.js";import"./index-XjqIyxWy.js";import"./index-Cwk_nZHn.js";import"./clsx-B-dksMZM.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Save-B3VvXevP.js";import"./Windows-juRZgWzJ.js";import"./i18n-provider-DLZYpdh4.js";import"./UserPlatformProvider-CL37nBDW.js";import"./tooltip-D2WqQ3hx.js";import"./index-DW48STyt.js";import"./index-B7GDqc_s.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-7k9rgiuw.js";import"./index-BNL5Yqmu.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-BL6sZKvk.js";import"./index-Cl3QsgNf.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./EllipsisHorizontal-CXMIya4N.js";import"./scrollarea-CRia_fH-.js";import"./index-BiB69Vyw.js";import"./index-BdQq_4o_.js";const M=[{type:"person",firstName:"Nik",lastName:"Lopin",src:"https://github.com/nlopin.png"},{type:"person",firstName:"Josep Jaume",lastName:"Rey",src:"https://github.com/josepjaume.png"},{type:"person",firstName:"Saúl",lastName:"Domínguez"}],T=[{type:"company",name:"Factorial",src:"https://github.com/factorialco.png"},{type:"company",name:"Itnig"},{type:"company",name:"Another cool company"}],W=[{type:"team",name:"Designers"},{type:"team",name:"Engineering"},{type:"team",name:"Product Management"}];function t(N,z="person"){const s={person:M,company:T,team:W}[z];return Array.from({length:N},(b,C)=>({...s[C%s.length]}))}const va={component:S,title:"Avatars/AvatarList",tags:["autodocs","experimental"],args:{size:"medium",type:"person",avatars:t(3,"person"),noTooltip:!1},parameters:{layout:"centered"}},a={},r={args:{size:"medium",type:"company",avatars:t(3,"company")}},e={args:{size:"medium",type:"team",avatars:t(3,"team")}},m={args:{...a.args,avatars:t(50,"person"),max:3}},o={args:{...r.args,avatars:t(50,"company"),max:3}};var p,n,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,u,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "medium",
    type: "company",
    avatars: getDummyAvatars(3, "company")
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,d,l;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "medium",
    type: "team",
    avatars: getDummyAvatars(3, "team")
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var v,A,h;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatars: getDummyAvatars(50, "person"),
    max: 3
  }
}`,...(h=(A=m.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var f,x,D;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Companies.args,
    avatars: getDummyAvatars(50, "company"),
    max: 3
  }
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const Aa=["Default","Companies","Teams","WithMaxAvatars","CompaniesWithMaxAvatars"];export{r as Companies,o as CompaniesWithMaxAvatars,a as Default,e as Teams,m as WithMaxAvatars,Aa as __namedExportsOrder,va as default};
