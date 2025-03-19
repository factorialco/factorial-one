import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as n}from"./placeholder-D2Lqcnmi.js";import{P as o,W as y}from"./index.stories-et8dnBeV.js";import{T as t,P as i}from"./index.stories-Cmvc6qbG.js";import{c as x}from"./utils-B2yEwIwY.js";import{c as O}from"./index-Cwk_nZHn.js";import{R as $}from"./index-B6o7_jwP.js";import"./Save-B3VvXevP.js";import{F as C}from"./Briefcase-Bq4R30UR.js";import{A as G}from"./index-DPyEhv6M.js";function g({children:r,header:a,embedded:f=!1}){return e.jsxs("div",{className:`flex w-full flex-col overflow-hidden ${f?"":"xs:rounded-xl"} bg-f1-page ring-1 ring-inset ring-f1-border-secondary`,children:[a&&e.jsx("div",{className:"flex flex-col",children:a}),e.jsx("div",{className:"isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1",children:r})]})}g.displayName="Page";try{g.displayName="Page",g.__docgenInfo={description:"",displayName:"Page",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},embedded:{defaultValue:{value:"false"},description:"",name:"embedded",required:!1,type:{name:"boolean"}}}}}catch{}const K=O({base:"relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",variants:{variant:{narrow:"max-w-screen-lg"}}}),s=$.forwardRef(({children:r,variant:a,className:f,...V},q)=>e.jsx("section",{ref:q,className:x("relative flex-1 overflow-auto",f),...V,children:e.jsx("div",{className:x(K({variant:a})),children:r})}));s.displayName="StandardLayout";try{s.displayName="StandardLayout",s.__docgenInfo={description:"",displayName:"StandardLayout",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"narrow"'}]}}}}}catch{}const Q={title:"Navigation/Page",component:g,tags:["autodocs","experimental"],parameters:{layout:"fullscreen"},decorators:[r=>e.jsx(G,{sidebar:null,children:e.jsx(r,{})})]},l={name:"Time Tracking",href:"/time-tracking",icon:C};var b;const d={args:{header:e.jsxs(e.Fragment,{children:[e.jsx(o,{module:l,actions:(b=y.args)==null?void 0:b.actions}),e.jsx(t,{...i.args})]}),children:e.jsx(s,{children:Array(25).fill(0).map((r,a)=>e.jsx(n,{className:"min-h-24"},a))})}};var v;const m={args:{header:e.jsxs(e.Fragment,{children:[e.jsx(o,{module:l,breadcrumbs:[{id:"employees",label:"Employees",href:"/employees"},{id:"employee",label:"Ainhoa Aznar Lago",href:"/employees/123"}],actions:(v=y.args)==null?void 0:v.actions}),e.jsx(t,{...i.args})]}),children:e.jsx(s,{children:Array(25).fill(0).map((r,a)=>e.jsx(n,{className:"min-h-24"},a))})}};var S;const c={args:{header:e.jsxs(e.Fragment,{children:[e.jsx(o,{module:l,breadcrumbs:[{id:"employees",label:"Employees",href:"/employees"},{id:"employee",label:"Ainhoa Aznar Lago",href:"/employees/123"}],statusTag:{text:"Draft",variant:"warning",tooltip:"This employee profile is not yet published"},actions:(S=y.args)==null?void 0:S.actions}),e.jsx(t,{...i.args})]}),children:e.jsx(s,{children:Array(25).fill(0).map((r,a)=>e.jsx(n,{className:"min-h-24"},a))})}};var P;const u={args:{header:e.jsxs(e.Fragment,{children:[e.jsx(o,{module:l,navigation:{previous:{url:"/previous",title:"Previous Employee: John Smith"},next:{url:"/next",title:"Next Employee: Sarah Johnson"},counter:{current:1,total:30}},actions:(P=y.args)==null?void 0:P.actions}),e.jsx(t,{...i.args})]}),children:e.jsx(s,{children:Array(25).fill(0).map((r,a)=>e.jsx(n,{className:"min-h-24"},a))})}};var j;const p={args:{header:e.jsxs(e.Fragment,{children:[e.jsx(o,{module:l,navigation:{previous:{url:"/previous",title:"Previous Employee: John Smith"},next:{url:"/next",title:"Next Employee: Sarah Johnson"},counter:{current:1,total:30}},statusTag:{text:"Processing",variant:"info",tooltip:"Importing employee data"},actions:(j=y.args)==null?void 0:j.actions}),e.jsx(t,{...i.args})]}),children:e.jsx(s,{children:Array(25).fill(0).map((r,a)=>e.jsx(n,{className:"min-h-24"},a))})}},h={args:{embedded:!0,header:e.jsxs(e.Fragment,{children:[e.jsx(o,{module:l,embedded:!0,breadcrumbs:[{id:"employees",label:"Employees",href:"/employees"},{id:"employee",label:"Ainhoa Aznar Lago",href:"/employees/123"}],statusTag:{text:"Published",variant:"positive"}}),e.jsx(t,{...i.args})]}),children:e.jsx(s,{children:Array(25).fill(0).map((r,a)=>e.jsx(n,{className:"min-h-24"},a))})}};var A,_,N;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    header: <>
        <PageHeader module={defaultModule} actions={HeaderStories.WithActions.args?.actions} />
        <Tabs {...TabsStories.Primary.args as TabsProps} />
      </>,
    children: <StandardLayout>
        {Array(25).fill(0).map((_, index) => <Placeholder key={index} className="min-h-24" />)}
      </StandardLayout>
  }
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var T,L,E;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    header: <>
        <PageHeader module={defaultModule} breadcrumbs={[{
        id: "employees",
        label: "Employees",
        href: "/employees"
      }, {
        id: "employee",
        label: "Ainhoa Aznar Lago",
        href: "/employees/123"
      }]} actions={HeaderStories.WithActions.args?.actions} />
        <Tabs {...TabsStories.Primary.args as TabsProps} />
      </>,
    children: <StandardLayout>
        {Array(25).fill(0).map((_, index) => <Placeholder key={index} className="min-h-24" />)}
      </StandardLayout>
  }
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var W,w,H;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    header: <>
        <PageHeader module={defaultModule} breadcrumbs={[{
        id: "employees",
        label: "Employees",
        href: "/employees"
      }, {
        id: "employee",
        label: "Ainhoa Aznar Lago",
        href: "/employees/123"
      }]} statusTag={{
        text: "Draft",
        variant: "warning",
        tooltip: "This employee profile is not yet published"
      }} actions={HeaderStories.WithActions.args?.actions} />
        <Tabs {...TabsStories.Primary.args as TabsProps} />
      </>,
    children: <StandardLayout>
        {Array(25).fill(0).map((_, index) => <Placeholder key={index} className="min-h-24" />)}
      </StandardLayout>
  }
}`,...(H=(w=c.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var F,k,J;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    header: <>
        <PageHeader module={defaultModule} navigation={{
        previous: {
          url: "/previous",
          title: "Previous Employee: John Smith"
        },
        next: {
          url: "/next",
          title: "Next Employee: Sarah Johnson"
        },
        counter: {
          current: 1,
          total: 30
        }
      }} actions={HeaderStories.WithActions.args?.actions} />
        <Tabs {...TabsStories.Primary.args as TabsProps} />
      </>,
    children: <StandardLayout>
        {Array(25).fill(0).map((_, index) => <Placeholder key={index} className="min-h-24" />)}
      </StandardLayout>
  }
}`,...(J=(k=u.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};var M,z,R;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    header: <>
        <PageHeader module={defaultModule} navigation={{
        previous: {
          url: "/previous",
          title: "Previous Employee: John Smith"
        },
        next: {
          url: "/next",
          title: "Next Employee: Sarah Johnson"
        },
        counter: {
          current: 1,
          total: 30
        }
      }} statusTag={{
        text: "Processing",
        variant: "info",
        tooltip: "Importing employee data"
      }} actions={HeaderStories.WithActions.args?.actions} />
        <Tabs {...TabsStories.Primary.args as TabsProps} />
      </>,
    children: <StandardLayout>
        {Array(25).fill(0).map((_, index) => <Placeholder key={index} className="min-h-24" />)}
      </StandardLayout>
  }
}`,...(R=(z=p.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var D,B,I;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    embedded: true,
    header: <>
        <PageHeader module={defaultModule} embedded breadcrumbs={[{
        id: "employees",
        label: "Employees",
        href: "/employees"
      }, {
        id: "employee",
        label: "Ainhoa Aznar Lago",
        href: "/employees/123"
      }]} statusTag={{
        text: "Published",
        variant: "positive"
      }} />
        <Tabs {...TabsStories.Primary.args as TabsProps} />
      </>,
    children: <StandardLayout>
        {Array(25).fill(0).map((_, index) => <Placeholder key={index} className="min-h-24" />)}
      </StandardLayout>
  }
}`,...(I=(B=h.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const U=["Default","WithBreadcrumbs","WithBreadcrumbsAndStatus","WithNavigation","WithNavigationAndStatus","Embedded"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Embedded:h,WithBreadcrumbs:m,WithBreadcrumbsAndStatus:c,WithNavigation:u,WithNavigationAndStatus:p,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{d as D,g as P,s as S,ie as i};
