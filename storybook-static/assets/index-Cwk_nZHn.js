import{c as j}from"./clsx-B-dksMZM.js";const C=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,A=i=>{const c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return j(t)};return{compose:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return a=>{const s=Object.fromEntries(Object.entries(a||{}).filter(d=>{let[v]=d;return!["class","className"].includes(v)}));return c(t.map(d=>d(s)),a==null?void 0:a.class,a==null?void 0:a.className)}},cva:e=>t=>{var n;if((e==null?void 0:e.variants)==null)return c(e==null?void 0:e.base,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:a,defaultVariants:s}=e,d=Object.keys(a).map(l=>{const o=t==null?void 0:t[l],u=s==null?void 0:s[l],r=C(o)||C(u);return a[l][r]}),v={...s,...t&&Object.entries(t).reduce((l,o)=>{let[u,r]=o;return typeof r>"u"?l:{...l,[u]:r}},{})},N=e==null||(n=e.compoundVariants)===null||n===void 0?void 0:n.reduce((l,o)=>{let{class:u,className:r,...f}=o;return Object.entries(f).every(y=>{let[V,m]=y;const b=v[V];return Array.isArray(m)?m.includes(b):b===m})?[...l,u,r]:l},[]);return c(e==null?void 0:e.base,d,N,t==null?void 0:t.class,t==null?void 0:t.className)},cx:c}},{cva:P}=A();export{P as c};
