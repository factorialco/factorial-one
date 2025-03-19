import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{T as l,a as u}from"./toggleGroup-mqqLdlYg.js";import{r as y}from"./index-B6o7_jwP.js";const c=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],t=y.forwardRef(function({daysOfTheWeek:a=c,activatedDays:r=[]},o){const n=r.map(e=>`${e}-${a[e]}`);return d.jsx(l,{type:"multiple",value:n,disabled:!0,className:"flex justify-start",ref:o,children:a.map((e,i)=>d.jsx(u,{"aria-label":e,value:`${i}-${e}`,className:"h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",children:e[0]},e))})});try{t.displayName="Weekdays",t.__docgenInfo={description:"",displayName:"Weekdays",props:{activatedDays:{defaultValue:{value:"[]"},description:"",name:"activatedDays",required:!1,type:{name:"number[]"}},daysOfTheWeek:{defaultValue:{value:`[
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]`},description:"",name:"daysOfTheWeek",required:!1,type:{name:"string[]"}}}}}catch{}export{t as W};
