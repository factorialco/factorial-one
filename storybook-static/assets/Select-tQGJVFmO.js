import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-B6o7_jwP.js";import{c as ee}from"./utils-B2yEwIwY.js";import{u as vt}from"./index-BobS88kg.js";import{I as ke}from"./index-CDBnMHOu.js";import"./Save-B3VvXevP.js";import{F as St}from"./ChevronDown-LBI9f9x4.js";import{F as xt}from"./ChevronUp-DDAshzCv.js";import{F as yt}from"./CheckCircle-DR890WNk.js";import{r as De}from"./index-Cy3P-1Ig.js";import{c as Ee}from"./index-BdQq_4o_.js";import{c as R}from"./index-DW48STyt.js";import{c as wt}from"./index-Bmycdo5-.js";import{u as D,S as Ct}from"./index-B7GDqc_s.js";import{c as _t,P as M}from"./index-BKKrtyrw.js";import{u as bt}from"./index-BiB69Vyw.js";import{D as It}from"./index-7k9rgiuw.js";import{P as Tt,h as Nt,u as Rt,R as Pt,F as Et}from"./Combination-DneYXzaJ.js";import{u as Re}from"./index-Bg_GsVj5.js";import{c as Le,R as jt,A as Mt,C as At,a as Ot}from"./index-C-USI-jp.js";import{u as q,a as Vt}from"./index-BNL5Yqmu.js";import{u as je}from"./index-BL6sZKvk.js";import{u as kt}from"./index-D15UBmr5.js";import{V as Dt}from"./index-Cl3QsgNf.js";const Be=o.createContext({value:void 0,open:!1});var Lt=[" ","Enter","ArrowUp","ArrowDown"],Bt=[" ","Enter"],ae="Select",[de,ue,Ht]=wt(ae),[te,Vo]=_t(ae,[Ht,Le]),pe=Le(),[Ft,G]=te(ae),[Wt,Ut]=te(ae),He=e=>{const{__scopeSelect:c,children:t,open:r,defaultOpen:l,onOpenChange:d,value:a,defaultValue:i,onValueChange:s,dir:f,name:v,autoComplete:x,disabled:I,required:T,form:C}=e,u=pe(c),[g,S]=o.useState(null),[p,m]=o.useState(null),[N,A]=o.useState(!1),oe=bt(f),[P=!1,V]=je({prop:r,defaultProp:l,onChange:d}),[U,Y]=je({prop:a,defaultProp:i,onChange:s}),L=o.useRef(null),B=g?C||!!g.closest("form"):!0,[K,H]=o.useState(new Set),F=Array.from(K).map(E=>E.props.value).join(";");return n.jsx(jt,{...u,children:n.jsxs(Ft,{required:T,scope:c,trigger:g,onTriggerChange:S,valueNode:p,onValueNodeChange:m,valueNodeHasChildren:N,onValueNodeHasChildrenChange:A,contentId:Re(),value:U,onValueChange:Y,open:P,onOpenChange:V,dir:oe,triggerPointerDownPosRef:L,disabled:I,children:[n.jsx(de.Provider,{scope:c,children:n.jsx(Wt,{scope:e.__scopeSelect,onNativeOptionAdd:o.useCallback(E=>{H(k=>new Set(k).add(E))},[]),onNativeOptionRemove:o.useCallback(E=>{H(k=>{const W=new Set(k);return W.delete(E),W})},[]),children:t})}),B?n.jsxs(dt,{"aria-hidden":!0,required:T,tabIndex:-1,name:v,autoComplete:x,value:U,onChange:E=>Y(E.target.value),disabled:I,form:C,children:[U===void 0?n.jsx("option",{value:""}):null,Array.from(K)]},F):null]})})};He.displayName=ae;var Fe="SelectTrigger",We=o.forwardRef((e,c)=>{const{__scopeSelect:t,disabled:r=!1,...l}=e,d=pe(t),a=G(Fe,t),i=a.disabled||r,s=D(c,a.onTriggerChange),f=ue(t),v=o.useRef("touch"),[x,I,T]=ut(u=>{const g=f().filter(m=>!m.disabled),S=g.find(m=>m.value===a.value),p=pt(g,u,S);p!==void 0&&a.onValueChange(p.value)}),C=u=>{i||(a.onOpenChange(!0),T()),u&&(a.triggerPointerDownPosRef.current={x:Math.round(u.pageX),y:Math.round(u.pageY)})};return n.jsx(Mt,{asChild:!0,...d,children:n.jsx(M.button,{type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":ct(a.value)?"":void 0,...l,ref:s,onClick:R(l.onClick,u=>{u.currentTarget.focus(),v.current!=="mouse"&&C(u)}),onPointerDown:R(l.onPointerDown,u=>{v.current=u.pointerType;const g=u.target;g.hasPointerCapture(u.pointerId)&&g.releasePointerCapture(u.pointerId),u.button===0&&u.ctrlKey===!1&&u.pointerType==="mouse"&&(C(u),u.preventDefault())}),onKeyDown:R(l.onKeyDown,u=>{const g=x.current!=="";!(u.ctrlKey||u.altKey||u.metaKey)&&u.key.length===1&&I(u.key),!(g&&u.key===" ")&&Lt.includes(u.key)&&(C(),u.preventDefault())})})})});We.displayName=Fe;var Ue="SelectValue",Ke=o.forwardRef((e,c)=>{const{__scopeSelect:t,className:r,style:l,children:d,placeholder:a="",...i}=e,s=G(Ue,t),{onValueNodeHasChildrenChange:f}=s,v=d!==void 0,x=D(c,s.onValueNodeChange);return q(()=>{f(v)},[f,v]),n.jsx(M.span,{...i,ref:x,style:{pointerEvents:"none"},children:ct(s.value)?n.jsx(n.Fragment,{children:a}):d})});Ke.displayName=Ue;var Kt="SelectIcon",zt=o.forwardRef((e,c)=>{const{__scopeSelect:t,children:r,...l}=e;return n.jsx(M.span,{"aria-hidden":!0,...l,ref:c,children:r||"▼"})});zt.displayName=Kt;var qt="SelectPortal",ze=e=>n.jsx(Tt,{asChild:!0,...e});ze.displayName=qt;var J="SelectContent",qe=o.forwardRef((e,c)=>{const t=G(J,e.__scopeSelect),[r,l]=o.useState();if(q(()=>{l(new DocumentFragment)},[]),!t.open){const d=r;return d?De.createPortal(n.jsx(Ge,{scope:e.__scopeSelect,children:n.jsx(de.Slot,{scope:e.__scopeSelect,children:n.jsx("div",{children:e.children})})}),d):null}return n.jsx($e,{...e,ref:c})});qe.displayName=J;var O=10,[Ge,$]=te(J),Gt="SelectContentImpl",$e=o.forwardRef((e,c)=>{const{__scopeSelect:t,position:r="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:d,onPointerDownOutside:a,side:i,sideOffset:s,align:f,alignOffset:v,arrowPadding:x,collisionBoundary:I,collisionPadding:T,sticky:C,hideWhenDetached:u,avoidCollisions:g,...S}=e,p=G(J,t),[m,N]=o.useState(null),[A,oe]=o.useState(null),P=D(c,h=>N(h)),[V,U]=o.useState(null),[Y,L]=o.useState(null),B=ue(t),[K,H]=o.useState(!1),F=o.useRef(!1);o.useEffect(()=>{if(m)return Nt(m)},[m]),Rt();const E=o.useCallback(h=>{const[b,...j]=B().map(w=>w.ref.current),[_]=j.slice(-1),y=document.activeElement;for(const w of h)if(w===y||(w==null||w.scrollIntoView({block:"nearest"}),w===b&&A&&(A.scrollTop=0),w===_&&A&&(A.scrollTop=A.scrollHeight),w==null||w.focus(),document.activeElement!==y))return},[B,A]),k=o.useCallback(()=>E([V,m]),[E,V,m]);o.useEffect(()=>{K&&k()},[K,k]);const{onOpenChange:W,triggerPointerDownPosRef:z}=p;o.useEffect(()=>{if(m){let h={x:0,y:0};const b=_=>{var y,w;h={x:Math.abs(Math.round(_.pageX)-(((y=z.current)==null?void 0:y.x)??0)),y:Math.abs(Math.round(_.pageY)-(((w=z.current)==null?void 0:w.y)??0))}},j=_=>{h.x<=10&&h.y<=10?_.preventDefault():m.contains(_.target)||W(!1),document.removeEventListener("pointermove",b),z.current=null};return z.current!==null&&(document.addEventListener("pointermove",b),document.addEventListener("pointerup",j,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",j,{capture:!0})}}},[m,W,z]),o.useEffect(()=>{const h=()=>W(!1);return window.addEventListener("blur",h),window.addEventListener("resize",h),()=>{window.removeEventListener("blur",h),window.removeEventListener("resize",h)}},[W]);const[fe,se]=ut(h=>{const b=B().filter(y=>!y.disabled),j=b.find(y=>y.ref.current===document.activeElement),_=pt(b,h,j);_&&setTimeout(()=>_.ref.current.focus())}),me=o.useCallback((h,b,j)=>{const _=!F.current&&!j;(p.value!==void 0&&p.value===b||_)&&(U(h),_&&(F.current=!0))},[p.value]),he=o.useCallback(()=>m==null?void 0:m.focus(),[m]),Q=o.useCallback((h,b,j)=>{const _=!F.current&&!j;(p.value!==void 0&&p.value===b||_)&&L(h)},[p.value]),le=r==="popper"?xe:Ye,ne=le===xe?{side:i,sideOffset:s,align:f,alignOffset:v,arrowPadding:x,collisionBoundary:I,collisionPadding:T,sticky:C,hideWhenDetached:u,avoidCollisions:g}:{};return n.jsx(Ge,{scope:t,content:m,viewport:A,onViewportChange:oe,itemRefCallback:me,selectedItem:V,onItemLeave:he,itemTextRefCallback:Q,focusSelectedItem:k,selectedItemText:Y,position:r,isPositioned:K,searchRef:fe,children:n.jsx(Pt,{as:Ct,allowPinchZoom:!0,children:n.jsx(Et,{asChild:!0,trapped:p.open,onMountAutoFocus:h=>{h.preventDefault()},onUnmountAutoFocus:R(l,h=>{var b;(b=p.trigger)==null||b.focus({preventScroll:!0}),h.preventDefault()}),children:n.jsx(It,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:a,onFocusOutside:h=>h.preventDefault(),onDismiss:()=>p.onOpenChange(!1),children:n.jsx(le,{role:"listbox",id:p.contentId,"data-state":p.open?"open":"closed",dir:p.dir,onContextMenu:h=>h.preventDefault(),...S,...ne,onPlaced:()=>H(!0),ref:P,style:{display:"flex",flexDirection:"column",outline:"none",...S.style},onKeyDown:R(S.onKeyDown,h=>{const b=h.ctrlKey||h.altKey||h.metaKey;if(h.key==="Tab"&&h.preventDefault(),!b&&h.key.length===1&&se(h.key),["ArrowUp","ArrowDown","Home","End"].includes(h.key)){let _=B().filter(y=>!y.disabled).map(y=>y.ref.current);if(["ArrowUp","End"].includes(h.key)&&(_=_.slice().reverse()),["ArrowUp","ArrowDown"].includes(h.key)){const y=h.target,w=_.indexOf(y);_=_.slice(w+1)}setTimeout(()=>E(_)),h.preventDefault()}})})})})})})});$e.displayName=Gt;var $t="SelectItemAlignedPosition",Ye=o.forwardRef((e,c)=>{const{__scopeSelect:t,onPlaced:r,...l}=e,d=G(J,t),a=$(J,t),[i,s]=o.useState(null),[f,v]=o.useState(null),x=D(c,P=>v(P)),I=ue(t),T=o.useRef(!1),C=o.useRef(!0),{viewport:u,selectedItem:g,selectedItemText:S,focusSelectedItem:p}=a,m=o.useCallback(()=>{if(d.trigger&&d.valueNode&&i&&f&&u&&g&&S){const P=d.trigger.getBoundingClientRect(),V=f.getBoundingClientRect(),U=d.valueNode.getBoundingClientRect(),Y=S.getBoundingClientRect();if(d.dir!=="rtl"){const y=Y.left-V.left,w=U.left-y,X=P.left-w,Z=P.width+X,ge=Math.max(Z,V.width),ve=window.innerWidth-O,Se=Ee(w,[O,Math.max(O,ve-ge)]);i.style.minWidth=Z+"px",i.style.left=Se+"px"}else{const y=V.right-Y.right,w=window.innerWidth-U.right-y,X=window.innerWidth-P.right-w,Z=P.width+X,ge=Math.max(Z,V.width),ve=window.innerWidth-O,Se=Ee(w,[O,Math.max(O,ve-ge)]);i.style.minWidth=Z+"px",i.style.right=Se+"px"}const L=I(),B=window.innerHeight-O*2,K=u.scrollHeight,H=window.getComputedStyle(f),F=parseInt(H.borderTopWidth,10),E=parseInt(H.paddingTop,10),k=parseInt(H.borderBottomWidth,10),W=parseInt(H.paddingBottom,10),z=F+E+K+W+k,fe=Math.min(g.offsetHeight*5,z),se=window.getComputedStyle(u),me=parseInt(se.paddingTop,10),he=parseInt(se.paddingBottom,10),Q=P.top+P.height/2-O,le=B-Q,ne=g.offsetHeight/2,h=g.offsetTop+ne,b=F+E+h,j=z-b;if(b<=Q){const y=L.length>0&&g===L[L.length-1].ref.current;i.style.bottom="0px";const w=f.clientHeight-u.offsetTop-u.offsetHeight,X=Math.max(le,ne+(y?he:0)+w+k),Z=b+X;i.style.height=Z+"px"}else{const y=L.length>0&&g===L[0].ref.current;i.style.top="0px";const X=Math.max(Q,F+u.offsetTop+(y?me:0)+ne)+j;i.style.height=X+"px",u.scrollTop=b-Q+u.offsetTop}i.style.margin=`${O}px 0`,i.style.minHeight=fe+"px",i.style.maxHeight=B+"px",r==null||r(),requestAnimationFrame(()=>T.current=!0)}},[I,d.trigger,d.valueNode,i,f,u,g,S,d.dir,r]);q(()=>m(),[m]);const[N,A]=o.useState();q(()=>{f&&A(window.getComputedStyle(f).zIndex)},[f]);const oe=o.useCallback(P=>{P&&C.current===!0&&(m(),p==null||p(),C.current=!1)},[m,p]);return n.jsx(Xt,{scope:t,contentWrapper:i,shouldExpandOnScrollRef:T,onScrollButtonChange:oe,children:n.jsx("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:N},children:n.jsx(M.div,{...l,ref:x,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}})})})});Ye.displayName=$t;var Yt="SelectPopperPosition",xe=o.forwardRef((e,c)=>{const{__scopeSelect:t,align:r="start",collisionPadding:l=O,...d}=e,a=pe(t);return n.jsx(At,{...a,...d,ref:c,align:r,collisionPadding:l,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});xe.displayName=Yt;var[Xt,Pe]=te(J,{}),ye="SelectViewport",Xe=o.forwardRef((e,c)=>{const{__scopeSelect:t,nonce:r,...l}=e,d=$(ye,t),a=Pe(ye,t),i=D(c,d.onViewportChange),s=o.useRef(0);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),n.jsx(de.Slot,{scope:t,children:n.jsx(M.div,{"data-radix-select-viewport":"",role:"presentation",...l,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...l.style},onScroll:R(l.onScroll,f=>{const v=f.currentTarget,{contentWrapper:x,shouldExpandOnScrollRef:I}=a;if(I!=null&&I.current&&x){const T=Math.abs(s.current-v.scrollTop);if(T>0){const C=window.innerHeight-O*2,u=parseFloat(x.style.minHeight),g=parseFloat(x.style.height),S=Math.max(u,g);if(S<C){const p=S+T,m=Math.min(C,p),N=p-m;x.style.height=m+"px",x.style.bottom==="0px"&&(v.scrollTop=N>0?N:0,x.style.justifyContent="flex-end")}}}s.current=v.scrollTop})})})]})});Xe.displayName=ye;var Ze="SelectGroup",[Zt,Jt]=te(Ze),Je=o.forwardRef((e,c)=>{const{__scopeSelect:t,...r}=e,l=Re();return n.jsx(Zt,{scope:t,id:l,children:n.jsx(M.div,{role:"group","aria-labelledby":l,...r,ref:c})})});Je.displayName=Ze;var Qe="SelectLabel",Qt=o.forwardRef((e,c)=>{const{__scopeSelect:t,...r}=e,l=Jt(Qe,t);return n.jsx(M.div,{id:l.id,...r,ref:c})});Qt.displayName=Qe;var ie="SelectItem",[eo,et]=te(ie),tt=o.forwardRef((e,c)=>{const{__scopeSelect:t,value:r,disabled:l=!1,textValue:d,...a}=e,i=G(ie,t),s=$(ie,t),f=i.value===r,[v,x]=o.useState(d??""),[I,T]=o.useState(!1),C=D(c,p=>{var m;return(m=s.itemRefCallback)==null?void 0:m.call(s,p,r,l)}),u=Re(),g=o.useRef("touch"),S=()=>{l||(i.onValueChange(r),i.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return n.jsx(eo,{scope:t,value:r,disabled:l,textId:u,isSelected:f,onItemTextChange:o.useCallback(p=>{x(m=>m||((p==null?void 0:p.textContent)??"").trim())},[]),children:n.jsx(de.ItemSlot,{scope:t,value:r,disabled:l,textValue:v,children:n.jsx(M.div,{role:"option","aria-labelledby":u,"data-highlighted":I?"":void 0,"aria-selected":f&&I,"data-state":f?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1,...a,ref:C,onFocus:R(a.onFocus,()=>T(!0)),onBlur:R(a.onBlur,()=>T(!1)),onClick:R(a.onClick,()=>{g.current!=="mouse"&&S()}),onPointerUp:R(a.onPointerUp,()=>{g.current==="mouse"&&S()}),onPointerDown:R(a.onPointerDown,p=>{g.current=p.pointerType}),onPointerMove:R(a.onPointerMove,p=>{var m;g.current=p.pointerType,l?(m=s.onItemLeave)==null||m.call(s):g.current==="mouse"&&p.currentTarget.focus({preventScroll:!0})}),onPointerLeave:R(a.onPointerLeave,p=>{var m;p.currentTarget===document.activeElement&&((m=s.onItemLeave)==null||m.call(s))}),onKeyDown:R(a.onKeyDown,p=>{var N;((N=s.searchRef)==null?void 0:N.current)!==""&&p.key===" "||(Bt.includes(p.key)&&S(),p.key===" "&&p.preventDefault())})})})})});tt.displayName=ie;var re="SelectItemText",ot=o.forwardRef((e,c)=>{const{__scopeSelect:t,className:r,style:l,...d}=e,a=G(re,t),i=$(re,t),s=et(re,t),f=Ut(re,t),[v,x]=o.useState(null),I=D(c,S=>x(S),s.onItemTextChange,S=>{var p;return(p=i.itemTextRefCallback)==null?void 0:p.call(i,S,s.value,s.disabled)}),T=v==null?void 0:v.textContent,C=o.useMemo(()=>n.jsx("option",{value:s.value,disabled:s.disabled,children:T},s.value),[s.disabled,s.value,T]),{onNativeOptionAdd:u,onNativeOptionRemove:g}=f;return q(()=>(u(C),()=>g(C)),[u,g,C]),n.jsxs(n.Fragment,{children:[n.jsx(M.span,{id:s.textId,...d,ref:I}),s.isSelected&&a.valueNode&&!a.valueNodeHasChildren?De.createPortal(d.children,a.valueNode):null]})});ot.displayName=re;var nt="SelectItemIndicator",rt=o.forwardRef((e,c)=>{const{__scopeSelect:t,...r}=e;return et(nt,t).isSelected?n.jsx(M.span,{"aria-hidden":!0,...r,ref:c}):null});rt.displayName=nt;var we="SelectScrollUpButton",at=o.forwardRef((e,c)=>{const t=$(we,e.__scopeSelect),r=Pe(we,e.__scopeSelect),[l,d]=o.useState(!1),a=D(c,r.onScrollButtonChange);return q(()=>{if(t.viewport&&t.isPositioned){let i=function(){const f=s.scrollTop>0;d(f)};const s=t.viewport;return i(),s.addEventListener("scroll",i),()=>s.removeEventListener("scroll",i)}},[t.viewport,t.isPositioned]),l?n.jsx(lt,{...e,ref:a,onAutoScroll:()=>{const{viewport:i,selectedItem:s}=t;i&&s&&(i.scrollTop=i.scrollTop-s.offsetHeight)}}):null});at.displayName=we;var Ce="SelectScrollDownButton",st=o.forwardRef((e,c)=>{const t=$(Ce,e.__scopeSelect),r=Pe(Ce,e.__scopeSelect),[l,d]=o.useState(!1),a=D(c,r.onScrollButtonChange);return q(()=>{if(t.viewport&&t.isPositioned){let i=function(){const f=s.scrollHeight-s.clientHeight,v=Math.ceil(s.scrollTop)<f;d(v)};const s=t.viewport;return i(),s.addEventListener("scroll",i),()=>s.removeEventListener("scroll",i)}},[t.viewport,t.isPositioned]),l?n.jsx(lt,{...e,ref:a,onAutoScroll:()=>{const{viewport:i,selectedItem:s}=t;i&&s&&(i.scrollTop=i.scrollTop+s.offsetHeight)}}):null});st.displayName=Ce;var lt=o.forwardRef((e,c)=>{const{__scopeSelect:t,onAutoScroll:r,...l}=e,d=$("SelectScrollButton",t),a=o.useRef(null),i=ue(t),s=o.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return o.useEffect(()=>()=>s(),[s]),q(()=>{var v;const f=i().find(x=>x.ref.current===document.activeElement);(v=f==null?void 0:f.ref.current)==null||v.scrollIntoView({block:"nearest"})},[i]),n.jsx(M.div,{"aria-hidden":!0,...l,ref:c,style:{flexShrink:0,...l.style},onPointerDown:R(l.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(r,50))}),onPointerMove:R(l.onPointerMove,()=>{var f;(f=d.onItemLeave)==null||f.call(d),a.current===null&&(a.current=window.setInterval(r,50))}),onPointerLeave:R(l.onPointerLeave,()=>{s()})})}),to="SelectSeparator",it=o.forwardRef((e,c)=>{const{__scopeSelect:t,...r}=e;return n.jsx(M.div,{"aria-hidden":!0,...r,ref:c})});it.displayName=to;var _e="SelectArrow",oo=o.forwardRef((e,c)=>{const{__scopeSelect:t,...r}=e,l=pe(t),d=G(_e,t),a=$(_e,t);return d.open&&a.position==="popper"?n.jsx(Ot,{...l,...r,ref:c}):null});oo.displayName=_e;function ct(e){return e===""||e===void 0}var dt=o.forwardRef((e,c)=>{const{value:t,...r}=e,l=o.useRef(null),d=D(c,l),a=kt(t);return o.useEffect(()=>{const i=l.current,s=window.HTMLSelectElement.prototype,v=Object.getOwnPropertyDescriptor(s,"value").set;if(a!==t&&v){const x=new Event("change",{bubbles:!0});v.call(i,t),i.dispatchEvent(x)}},[a,t]),n.jsx(Dt,{asChild:!0,children:n.jsx("select",{...r,ref:d,defaultValue:t})})});dt.displayName="BubbleSelect";function ut(e){const c=Vt(e),t=o.useRef(""),r=o.useRef(0),l=o.useCallback(a=>{const i=t.current+a;c(i),function s(f){t.current=f,window.clearTimeout(r.current),f!==""&&(r.current=window.setTimeout(()=>s(""),1e3))}(i)},[c]),d=o.useCallback(()=>{t.current="",window.clearTimeout(r.current)},[]);return o.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,l,d]}function pt(e,c,t){const l=c.length>1&&Array.from(c).every(f=>f===c[0])?c[0]:c,d=t?e.indexOf(t):-1;let a=no(e,Math.max(d,0));l.length===1&&(a=a.filter(f=>f!==t));const s=a.find(f=>f.textValue.toLowerCase().startsWith(l.toLowerCase()));return s!==t?s:void 0}function no(e,c){return e.map((t,r)=>e[(c+r)%e.length])}var ft=He,mt=We,ro=Ke,ao=ze,ht=qe,so=Xe,lo=Je,gt=tt,io=ot,co=rt,Me=at,Ae=st,ko=it;const be=e=>{const[c,t]=o.useState(!1),r=e.open!==void 0?e.open:c,l=d=>{var a;e.open===void 0&&t(d),(a=e.onOpenChange)==null||a.call(e,d)};return n.jsx(ft,{...e,open:r,onOpenChange:l,children:n.jsx(Be.Provider,{value:{value:e.value,open:r},children:e.children})})};be.displayName=ft.displayName;try{be.displayName="Select",be.__docgenInfo={description:"Select Root component",displayName:"Select",props:{}}}catch{}const Ie=o.forwardRef(({items:e=[],className:c,children:t,position:r="popper",emptyMessage:l,...d},a)=>{var m;const i=o.useRef(null),s=Array.isArray(e),f=o.useMemo(()=>s?e.filter(N=>N.value).length===0:!t,[s,e,t]),[v,x]=o.useState(!1),[I,T]=o.useState(!1),{value:C,open:u}=o.useContext(Be),g=o.useMemo(()=>e&&e.findIndex(N=>N.value===C)||0,[e,C]),S=vt({count:e.length,getScrollElement:()=>i.current,estimateSize:N=>e[N].height,overscan:5,enabled:I});o.useEffect(()=>{u||(T(!1),x(!0))},[u]),o.useEffect(()=>{S.measure(),S.scrollToIndex(g)},[S,g,I]);const p=S.getVirtualItems();return n.jsx(ao,{children:n.jsxs(ht,{ref:a,className:ee("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",c),position:r,...d,onAnimationStart:()=>{T(!0),setTimeout(()=>{S.scrollToIndex(g,{align:"center"}),x(!0)})},children:[!!d.top&&n.jsx("div",{children:d.top}),n.jsx(ce,{variant:"up"}),n.jsx(so,{ref:i,className:ee(r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:f?n.jsx("p",{className:"p-2 text-center",children:l||"-"}):s?n.jsx("div",{className:ee("transition-opacity delay-100",v?"":"opacity-0"),style:{height:S.getTotalSize(),width:"100%",position:"relative"},children:n.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",transform:`translateY(${((m=p[0])==null?void 0:m.start)??0}px)`},children:p.map(N=>n.jsx("div",{"data-index":N.index,ref:S.measureElement,children:e[N.index].item},N.key))})}):t}),n.jsx(ce,{variant:"down"}),!!d.bottom&&n.jsx("div",{children:d.bottom})]})})});Ie.displayName=ht.displayName;try{Ie.displayName="SelectContent",Ie.__docgenInfo={description:"",displayName:"SelectContent",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactNode"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactNode"}},emptyMessage:{defaultValue:null,description:"",name:"emptyMessage",required:!1,type:{name:"string"}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"VirtualItem[]"}}}}}catch{}const Te=o.forwardRef(({className:e,children:c,...t},r)=>n.jsxs(gt,{ref:r,className:ee("relative grid w-full cursor-default select-none grid-cols-[1fr_20px] gap-x-1.5 rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.5rem)] hover:after:opacity-100 focus:after:bg-f1-background-hover focus:after:text-f1-foreground focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_*]:z-10","data-[state=checked]:after:bg-f1-background-selected-bold/10 data-[state=checked]:after:opacity-100 hover:data-[state=checked]:after:bg-f1-background-selected-bold/10 dark:data-[state=checked]:after:bg-f1-background-selected-bold/20 dark:hover:data-[state=checked]:after:bg-f1-background-selected-bold/20","focus:outline-none focus:ring-0 focus:ring-transparent",e),...t,children:[n.jsx(io,{children:c}),n.jsx(co,{className:"flex text-f1-icon-selected",children:n.jsx(ke,{icon:yt,size:"md"})})]}));Te.displayName=gt.displayName;try{Te.displayName="SelectItem",Te.__docgenInfo={description:"",displayName:"SelectItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ce=({variant:e,...c})=>{const t=o.forwardRef(({className:r,...l},d)=>{const a=e==="up"?Me:Ae;return n.jsx(a,{ref:d,className:ee("flex cursor-default items-center justify-center py-1 text-f1-icon",r),...l,children:n.jsx(ke,{icon:e==="up"?xt:St,size:"sm"})})});return t.displayName=e==="up"?Me.displayName:Ae.displayName,n.jsx(t,{...c})};try{ce.displayName="SelectScrollButton",ce.__docgenInfo={description:"",displayName:"SelectScrollButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"up"'},{value:'"down"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ne=o.forwardRef(({className:e,children:c,...t},r)=>n.jsx(mt,{ref:r,className:ee(e),...t,children:c}));Ne.displayName=mt.displayName;try{Ne.displayName="SelectTrigger",Ne.__docgenInfo={description:"Select Trigger component",displayName:"SelectTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Oe=lo,Ve=ro;try{Oe.displayName="SelectGroup",Oe.__docgenInfo={description:"Select Group component",displayName:"SelectGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Ve.displayName="SelectValue",Ve.__docgenInfo={description:"Select Value component",displayName:"SelectValue",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{Te as S,be as a,Ne as b,Ve as c,Ie as d,ko as e};
