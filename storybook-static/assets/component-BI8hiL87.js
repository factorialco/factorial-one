import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-B6o7_jwP.js";import{c as y}from"./index-Cwk_nZHn.js";import{r as w}from"./index-Cy3P-1Ig.js";const b=r.createContext({enabled:!1,enable:()=>null,disable:()=>null,filter:[]}),m=({children:e})=>{const[p,s]=r.useState(!1),[i,o]=r.useState([]),c=r.useCallback(a=>{o(a||[...x].filter(n=>n!=="layout")),s(!0)},[o,s]),t=r.useCallback(()=>s(!1),[s]);return r.useEffect(()=>{window.XRay={enable:c,disable:t}},[c,t]),d.jsxs(b.Provider,{value:{enabled:p,enable:c,disable:t,filter:i},children:[e,p&&typeof document<"u"&&w.createPortal(d.jsxs("div",{className:"bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md",children:[d.jsx("div",{className:"text-md z-50 font-semibold",children:"XRay"}),d.jsx("div",{className:"flex flex-col space-y-2",children:x.map(a=>d.jsxs("label",{className:"block",children:[d.jsx("input",{onChange:n=>n.target.checked?o([...i,a]):o(i.filter(l=>l!==a)),type:"checkbox",checked:i.includes(a),className:"mr-2"}),a]},a))})]}),document==null?void 0:document.body)]})},C=y({base:"outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",variants:{type:{layout:"outline-red-500",info:"outline-blue-500",action:"outline-green-600",form:"outline-purple-600"}}}),R=y({base:"absolute z-40 bg-opacity-50 px-2 py-1 text-sm uppercase",variants:{type:{layout:"bg-red-500 text-white",info:"bg-blue-500 text-white",action:"bg-green-600 text-white",form:"bg-purple-600 text-white"}}}),N=(e,p)=>{const{enabled:s,filter:i}=r.useContext(b),o=r.useRef(null);r.useImperativeHandle(p,()=>o.current);const c=s&&!e.internal,t=typeof document<"u"?document.body:null;return r.useEffect(()=>{if(!c||!o.current||!i.includes(e.type))return;const a=o.current;a.dataset.componentName=e.name;let n=null,l=null;if(t){const h=a.getBoundingClientRect(),{top:u,left:f,width:g,height:v}=h;n=document.createElement("div"),n.className=C({type:e.type}),n.style.top=`${u}px`,n.style.left=`${f}px`,n.style.width=`${g}px`,n.style.height=`${v}px`,l=document.createElement("div"),l.className=R({type:e.type}),l.style.top=`${u}px`,l.style.left=`${f}px`,l.innerText=e.name,t.appendChild(l),t.appendChild(n)}return()=>{n&&(t==null||t.removeChild(n)),l&&(t==null||t.removeChild(l))}},[c,e.name,e.type,i,t]),{ref:o,enabled:s}};try{m.displayName="XRayProvider",m.__docgenInfo={description:"",displayName:"XRayProvider",props:{}}}catch{}const x=["layout","info","action","form"],k=(e,p)=>{const s=r.forwardRef((i,o)=>{const{ref:c}=N(e,o);return d.jsx(p,{ref:c,...i})});return s.displayName=`${e.name}`,s};export{k as C,m as X};
