import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{I as w}from"./index-CDBnMHOu.js";import"./Save-B3VvXevP.js";import{F as z}from"./Check-FJXU9bTg.js";import{F as M}from"./Minus-CDz936Bf.js";import{c as E,f as O}from"./utils-B2yEwIwY.js";import{r as s}from"./index-B6o7_jwP.js";import{u as V}from"./index-B7GDqc_s.js";import{c as B,P as S}from"./index-BKKrtyrw.js";import{c as I}from"./index-DW48STyt.js";import{u as H}from"./index-BL6sZKvk.js";import{u as K}from"./index-D15UBmr5.js";import{u as T}from"./index-CvAaZOpw.js";import{P as X}from"./index-yradL_ub.js";import{A as $}from"./index-Dy8WLFmQ.js";import{m as G}from"./proxy-CqNJYjyK.js";var R="Checkbox",[J,pe]=B(R),[Q,U]=J(R),q=s.forwardRef((e,i)=>{const{__scopeCheckbox:t,name:d,checked:o,defaultChecked:a,required:f,disabled:n,value:b="on",onCheckedChange:x,form:m,...C}=e,[l,k]=s.useState(null),y=V(i,c=>k(c)),v=s.useRef(!1),P=l?m||!!l.closest("form"):!0,[h=!1,g]=H({prop:o,defaultProp:a,onChange:x}),L=s.useRef(h);return s.useEffect(()=>{const c=l==null?void 0:l.form;if(c){const p=()=>g(L.current);return c.addEventListener("reset",p),()=>c.removeEventListener("reset",p)}},[l,g]),r.jsxs(Q,{scope:t,state:h,disabled:n,children:[r.jsx(S.button,{type:"button",role:"checkbox","aria-checked":u(h)?"mixed":h,"aria-required":f,"data-state":D(h),"data-disabled":n?"":void 0,disabled:n,value:b,...C,ref:y,onKeyDown:I(e.onKeyDown,c=>{c.key==="Enter"&&c.preventDefault()}),onClick:I(e.onClick,c=>{g(p=>u(p)?!0:!p),P&&(v.current=c.isPropagationStopped(),v.current||c.stopPropagation())})}),P&&r.jsx(W,{control:l,bubbles:!v.current,name:d,value:b,checked:h,required:f,disabled:n,form:m,style:{transform:"translateX(-100%)"},defaultChecked:u(a)?!1:a})]})});q.displayName=R;var F="CheckboxIndicator",A=s.forwardRef((e,i)=>{const{__scopeCheckbox:t,forceMount:d,...o}=e,a=U(F,t);return r.jsx(X,{present:d||u(a.state)||a.state===!0,children:r.jsx(S.span,{"data-state":D(a.state),"data-disabled":a.disabled?"":void 0,...o,ref:i,style:{pointerEvents:"none",...e.style}})})});A.displayName=F;var W=e=>{const{control:i,checked:t,bubbles:d=!0,defaultChecked:o,...a}=e,f=s.useRef(null),n=K(t),b=T(i);s.useEffect(()=>{const m=f.current,C=window.HTMLInputElement.prototype,k=Object.getOwnPropertyDescriptor(C,"checked").set;if(n!==t&&k){const y=new Event("click",{bubbles:d});m.indeterminate=u(t),k.call(m,u(t)?!1:t),m.dispatchEvent(y)}},[n,t,d]);const x=s.useRef(u(t)?!1:t);return r.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:o??x.current,...a,tabIndex:-1,ref:f,style:{...e.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function u(e){return e==="indeterminate"}function D(e){return u(e)?"indeterminate":e?"checked":"unchecked"}var j=q,Y=A;const _=s.forwardRef(({className:e,indeterminate:i,disabled:t,hideLabel:d,...o},a)=>{const f=s.useId(),n=o.id||f;return r.jsxs("div",{className:"flex items-center",children:[r.jsx(j,{...o,ref:a,id:n,name:n,"aria-label":o.title,className:E("h-5 w-5 shrink-0 rounded-xs border border-solid border-f1-border text-f1-foreground-selected transition-[background-color,border-color] hover:border-f1-border-hover data-[state=checked]:bg-f1-background-selected-bold data-[state=checked]:text-f1-foreground-inverse hover:data-[state=checked]:border-transparent",t&&"cursor-not-allowed opacity-50 hover:border-f1-border",i&&"data-[state=checked]:bg-f1-background data-[state=checked]:text-f1-foreground-selected hover:data-[state=checked]:border-f1-border-hover",o.checked&&t&&"data-[state=checked]:bg-f1-background-secondary data-[state=checked]:text-f1-foreground-secondary",O(),e),checked:o.checked,onCheckedChange:o.onCheckedChange,disabled:t,children:r.jsx($,{children:r.jsx(Y,{className:"flex items-center justify-center text-current transition-none",children:r.jsx(G.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.6},transition:{ease:[.175,.885,.32,1.275],duration:.4},className:"flex items-center justify-center",children:i?r.jsx(w,{icon:M,size:"sm"}):r.jsx(w,{icon:z,size:"sm"})})})})}),o.title&&!d&&r.jsx("label",{htmlFor:n,className:E("flex items-center justify-center pl-2.5 text-current hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",t&&"cursor-not-allowed opacity-50 hover:cursor-not-allowed"),children:o.title})]})});_.displayName=j.displayName;const N=j;try{_.displayName="Checkbox",_.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}}}}}catch{}try{N.displayName="CheckboxRoot",N.__docgenInfo={description:"",displayName:"CheckboxRoot",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{_ as C};
