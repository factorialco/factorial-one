import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{A as m}from"./index-Fz90wGtv.js";import"./index-yBjzXJbu.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Save-B3VvXevP.js";import"./AlertCircle-CAZ1CSgr.js";import"./InfoCircle-BQwEmo9G.js";import"./Warning-CA_bta6S.js";const y={component:m,title:"Avatars/AlertAvatar",tags:["autodocs","experimental"]},p=["sm","md","lg"],l=["info","warning","critical"],e={render:()=>t.jsx("div",{className:"flex w-fit flex-col gap-2",children:p.map(r=>t.jsx("div",{className:"flex flex-row gap-2",children:l.map(a=>t.jsx(m,{size:r,type:a},`${r}-${a}`))},r))})};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex w-fit flex-col gap-2">
      {SIZES.map(size => <div key={size} className="flex flex-row gap-2">
          {TYPES.map(type => <AlertAvatar key={\`\${size}-\${type}\`} size={size} type={type} />)}
        </div>)}
    </div>
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,y as default};
