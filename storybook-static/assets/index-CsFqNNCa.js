import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{S as k}from"./index-B7GDqc_s.js";import{r as c,R as p}from"./index-B6o7_jwP.js";import{L as N}from"./linkHandler-fUi2qCbR.js";import{c as m}from"./utils-B2yEwIwY.js";import{L}from"./index-C5N-cZbj.js";import{A as C}from"./index-Dy8WLFmQ.js";import{m as x}from"./proxy-CqNJYjyK.js";import{S as E}from"./skeleton-BQT1AIt_.js";import{M as T}from"./index-BpAFfwO3.js";import{D}from"./index-B79dpo_y.js";import"./Save-B3VvXevP.js";import{F as M}from"./ChevronRight-zM-ePXcJ.js";import{B as W}from"./index-idP0doZy.js";const u=c.forwardRef(({...e},a)=>t.jsx("nav",{ref:a,"aria-label":"breadcrumb",...e}));u.displayName="Breadcrumb";const I=c.forwardRef(({className:e,children:a,...r},s)=>{const n=c.useId();return t.jsx("ol",{ref:s,className:m("flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary",e),...r,children:t.jsx(L,{id:n,children:t.jsx(C,{initial:!1,children:a})})})});I.displayName="BreadcrumbList";const y=c.forwardRef(({className:e,...a},r)=>t.jsx(x.li,{ref:r,className:m("inline-flex items-center gap-0.5 pr-1",e),initial:{opacity:0,translateX:-8},animate:{opacity:1,translateX:0},exit:{opacity:0,translateX:-8},transition:{duration:.15},...a}));y.displayName="BreadcrumbItem";const R=c.forwardRef(({asChild:e,className:a,...r},s)=>{const n=e?k:N;return t.jsx(n,{ref:s,className:m("rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",a),...r})});R.displayName="BreadcrumbLink";const w=c.forwardRef(({className:e,...a},r)=>t.jsx("span",{ref:r,role:"link","aria-disabled":"true","aria-current":"page",className:m("truncate px-1.5 py-0.5 text-f1-foreground",e),...a}));w.displayName="BreadcrumbPage";try{u.displayName="Breadcrumb",u.__docgenInfo={description:"",displayName:"Breadcrumb",props:{separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"ReactNode"}}}}}catch{}function A(e,a){if(a<=2)return a;const r=150,s=50;let o=e-r,l=1;for(let i=a-1;i>0&&!(o<r);i--)o-=r,l++;if(l<a-1)for(o-=s;o<0&&l>1;)o+=r,l--;return Math.max(2,l)}function B(e,a){const r=!e||a.length<=2,s=r?a.length:A(e,a.length);return{visibleCount:s,firstItem:a[0]||null,lastItems:r?a.slice(1):a.slice(Math.max(1,a.length-(s-1))),collapsedItems:r?[]:a.slice(1,a.length-(s-1)),isOnly:a.length===1}}const f=p.forwardRef((e,a)=>t.jsx("div",{ref:a,className:"px-1.5",...e,children:t.jsx(E,{className:"h-4 w-24","aria-hidden":"true"})}));f.displayName="BreadcrumbSkeleton";const g=p.forwardRef((e,a)=>t.jsx("span",{ref:a,role:"presentation","aria-hidden":"true",className:"h-4 w-4 text-f1-icon-secondary",...e,children:t.jsx(M,{})}));g.displayName="BreadcrumbSeparator";const _=p.forwardRef(({item:e,isLast:a,isOnly:r=!1,isFirst:s=!1},n)=>{const o="loading"in e&&e.loading,l=o?"loading":"type"in e&&e.type?e.type:a||r?"page":"link",i=t.jsxs(x.div,{layoutId:`breadcrumb-${e.id}`,className:m("flex items-center gap-2 px-1.5",s&&"pl-0",r&&"text-2xl font-semibold"),transition:{duration:.15},children:[!o&&"icon"in e&&(r||s)&&e.icon&&t.jsx(T,{icon:e.icon,size:r?"lg":"sm"}),t.jsx("span",{className:"truncate",children:!o&&"label"in e?e.label:""})]}),d={loading:t.jsx(f,{}),select:"type"in e&&e.type==="select"&&t.jsx(W,{options:e.options,defaultItem:e.defaultItem,onChange:e.onChange,value:e.value,showSearchBox:e.searchbox}),page:t.jsx(w,{"aria-hidden":"true",className:"p-0",children:i}),link:t.jsx(R,{asChild:!0,className:"p-0",children:t.jsx(N,{..."href"in e?e:{},className:"block",children:i})})};return t.jsx(x.div,{ref:n,layout:!0,className:m(o&&"max-w-40"),transition:{duration:.15},children:d[l]})});_.displayName="BreadcrumbContent";const h=p.forwardRef(({item:e,isLast:a,isOnly:r=!1,isFirst:s=!1},n)=>t.jsxs(y,{ref:n,children:[!s&&t.jsx(g,{}),t.jsx(_,{item:e,isLast:a,isOnly:r,isFirst:s})]},e.id));h.displayName="BreadcrumbItem";const S=p.forwardRef(({items:e},a)=>t.jsx(y,{ref:a,children:t.jsxs("div",{className:"flex items-center",children:[t.jsx(g,{}),t.jsx(D,{items:e,children:t.jsx("button",{className:"rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",children:"..."})})]})}));S.displayName="CollapsedBreadcrumbItem";function Y({breadcrumbs:e}){var l;const a=c.useRef(null),[r,s]=c.useState(!1),[n,o]=c.useState(()=>B(null,e));return c.useLayoutEffect(()=>{const i=a.current;if(!i)return;const d=()=>{var b;const v=((b=a.current)==null?void 0:b.getBoundingClientRect().width)??null;o(B(v,e))},j=new ResizeObserver(d);return j.observe(i),d(),s(!0),()=>j.disconnect()},[e]),!e.length||!n.firstItem?t.jsx(u,{ref:a,className:"w-full"}):t.jsx(u,{ref:a,className:"w-full",children:r&&t.jsxs(I,{children:[t.jsx(h,{isOnly:n.isOnly,isFirst:!0,item:n.firstItem,isLast:!1},`first-item-${n.firstItem.id}`),n.collapsedItems.length>0&&t.jsx(S,{items:n.collapsedItems},"collapsed-items"),n.lastItems.map((i,d)=>t.jsx(h,{item:i,isLast:d===n.lastItems.length-1,isFirst:!1},i.id))]})},(l=e.at(-1))==null?void 0:l.id)}try{f.displayName="BreadcrumbSkeleton",f.__docgenInfo={description:`Responsive breadcrumb navigation component that automatically collapses items when space is limited.

Features:
- Responsive layout that adjusts to container width
- Maintains first and last items visible
- Collapses middle items into a dropdown when needed
- Supports loading states
- Animated transitions`,displayName:"BreadcrumbSkeleton",props:{breadcrumbs:{defaultValue:null,description:"Array of breadcrumb items to display",name:"breadcrumbs",required:!0,type:{name:"BreadcrumbItemType[]"}}}}}catch{}export{Y as B};
