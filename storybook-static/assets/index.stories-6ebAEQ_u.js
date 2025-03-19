import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as b}from"./index-CDBnMHOu.js";import{C as h}from"./index-B2OpD_bL.js";import{P as w}from"./index-DrJ36aH6.js";import"./Save-B3VvXevP.js";import{F as j}from"./ChevronDown-LBI9f9x4.js";import{r as D}from"./index-B6o7_jwP.js";import{O as i}from"./index-C2I-PfoO.js";import{m as N}from"./proxy-CqNJYjyK.js";const y={title:"Components/OverflowList",component:i,tags:["autodocs","internal"],argTypes:{items:{description:"The items to display in the list."},renderListItem:{description:"What to render as a list item (items outside of the overflow list)."},renderDropdownItem:{description:"What to render as a dropdown item (items inside of the overflow list)."},renderOverflowIndicator:{description:"What to render as the overflow indicator. If not provided, the default overflow indicator will be displayed."},className:{description:"Additional styling for the container."},gap:{description:"The gap between items in pixels."}},decorators:[t=>{const[n,x]=D.useState(640);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full gap-4",children:e.jsx("div",{className:"rounded border border-solid border-f1-border-secondary p-3",style:{width:`${n}px`},children:e.jsx(t,{})})}),e.jsxs("div",{className:"flex w-32 flex-col gap-1 pt-4",children:[e.jsx("label",{htmlFor:"container-width",className:"text-sm font-medium text-f1-foreground-secondary",children:"Test width"}),e.jsx("input",{id:"container-width",type:"range",min:"180",max:"1000",value:n,onChange:v=>x(Number(v.target.value))})]})]})}]},r={args:{items:[{id:1,name:"Complete project proposal",status:"Completed",dueDate:"2025-12-01"},{id:2,name:"Review design mockups",status:"In progress",dueDate:"2025-12-05"},{id:3,name:"Design proposal",status:"Pending",dueDate:"2025-12-10"},{id:4,name:"Fix reported bugs",status:"Failed",dueDate:"2025-12-03"},{id:5,name:"Prepare presentation",status:"Pending",dueDate:"2025-12-15"},{id:6,name:"Client meeting",status:"Pending",dueDate:"2025-12-07"},{id:7,name:"Team retrospective",status:"Pending",dueDate:"2025-12-20"}],renderListItem:t=>{const n=t;return e.jsx("div",{className:"flex items-center gap-2 overflow-hidden whitespace-nowrap px-2 py-1",children:e.jsx("span",{className:"truncate font-medium",children:n.name})})},renderDropdownItem:t=>{const n=t;return e.jsxs("div",{className:"flex flex-col p-2",children:[e.jsx("span",{className:"font-medium",children:n.name}),e.jsxs("div",{className:"flex justify-between text-sm font-medium text-f1-foreground-secondary",children:[e.jsx("span",{children:n.status}),e.jsxs("span",{children:["Due: ",n.dueDate]})]})]})},gap:8},render:t=>e.jsx("div",{className:"w-full",children:e.jsx(i,{...t})})},s={args:{items:[{id:1,name:"Draft",number:10},{id:2,name:"Pending",number:4},{id:3,name:"Ordered",number:8},{id:4,name:"Partial",number:12},{id:5,name:"Recieved",number:21},{id:6,name:"Closed",number:15},{id:7,name:"Deleted",number:3}],renderListItem:t=>{const n=t;return e.jsx(w,{label:n.name,number:n.number})},renderDropdownItem:t=>{const n=t;return e.jsxs("div",{className:"flex justify-between rounded p-2 transition-colors hover:cursor-pointer hover:bg-f1-background-hover",children:[e.jsx("span",{className:"font-medium",children:n.name}),n.number&&e.jsx(h,{value:n.number,type:"default"})]})},gap:8},render:t=>e.jsx("div",{className:"w-full",children:e.jsx(i,{...t})})},a={args:{...s.args,renderOverflowIndicator:(t,n)=>e.jsxs("div",{className:"flex items-center gap-1 rounded-sm bg-f1-background-selected px-2 py-1.5 font-medium text-f1-foreground-selected",children:[e.jsx("span",{children:t}),e.jsx(N.div,{className:"flex h-4 w-4 items-center justify-center rounded-xs bg-f1-background-selected text-f1-icon-selected",animate:{rotate:n?360:90},children:e.jsx(b,{icon:j,size:"xs"})})]})}};var d,o,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      name: "Complete project proposal",
      status: "Completed",
      dueDate: "2025-12-01"
    }, {
      id: 2,
      name: "Review design mockups",
      status: "In progress",
      dueDate: "2025-12-05"
    }, {
      id: 3,
      name: "Design proposal",
      status: "Pending",
      dueDate: "2025-12-10"
    }, {
      id: 4,
      name: "Fix reported bugs",
      status: "Failed",
      dueDate: "2025-12-03"
    }, {
      id: 5,
      name: "Prepare presentation",
      status: "Pending",
      dueDate: "2025-12-15"
    }, {
      id: 6,
      name: "Client meeting",
      status: "Pending",
      dueDate: "2025-12-07"
    }, {
      id: 7,
      name: "Team retrospective",
      status: "Pending",
      dueDate: "2025-12-20"
    }],
    renderListItem: item => {
      const task = item as Task;
      return <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap px-2 py-1">
          <span className="truncate font-medium">{task.name}</span>
        </div>;
    },
    renderDropdownItem: item => {
      const task = item as Task;
      return <div className="flex flex-col p-2">
          <span className="font-medium">{task.name}</span>
          <div className="flex justify-between text-sm font-medium text-f1-foreground-secondary">
            <span>{task.status}</span>
            <span>Due: {task.dueDate}</span>
          </div>
        </div>;
    },
    gap: 8
  },
  render: args => {
    return <div className="w-full">
        <OverflowList {...args} />
      </div>;
  }
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var l,c,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      name: "Draft",
      number: 10
    }, {
      id: 2,
      name: "Pending",
      number: 4
    }, {
      id: 3,
      name: "Ordered",
      number: 8
    }, {
      id: 4,
      name: "Partial",
      number: 12
    }, {
      id: 5,
      name: "Recieved",
      number: 21
    }, {
      id: 6,
      name: "Closed",
      number: 15
    }, {
      id: 7,
      name: "Deleted",
      number: 3
    }],
    renderListItem: item => {
      const preset = item as PresetItem;
      return <Preset label={preset.name} number={preset.number} />;
    },
    renderDropdownItem: item => {
      const preset = item as PresetItem;
      return <div className="flex justify-between rounded p-2 transition-colors hover:cursor-pointer hover:bg-f1-background-hover">
          <span className="font-medium">{preset.name}</span>
          {preset.number && <Counter value={preset.number} type="default" />}
        </div>;
    },
    gap: 8
  },
  render: args => {
    return <div className="w-full">
        <OverflowList {...args} />
      </div>;
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,f,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Presets.args,
    renderOverflowIndicator: (count, isOpen) => <div className="flex items-center gap-1 rounded-sm bg-f1-background-selected px-2 py-1.5 font-medium text-f1-foreground-selected">
        <span>{count}</span>
        <motion.div className="flex h-4 w-4 items-center justify-center rounded-xs bg-f1-background-selected text-f1-icon-selected" animate={{
        rotate: isOpen ? 360 : 90
      }}>
          <Icon icon={ChevronDown} size="xs" />
        </motion.div>
      </div>
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const I=["Default","Presets","WithCustomOverflowIndicator"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Presets:s,WithCustomOverflowIndicator:a,__namedExportsOrder:I,default:y},Symbol.toStringTag,{value:"Module"}));export{r as D,R as O,a as W};
