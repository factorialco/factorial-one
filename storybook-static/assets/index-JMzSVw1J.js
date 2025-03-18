import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{c as m}from"./index-Cwk_nZHn.js";import{r as n}from"./index-B6o7_jwP.js";import{C as g}from"./component-BI8hiL87.js";import{c as s}from"./utils-B2yEwIwY.js";import{c as i}from"./createLucideIcon-DSAetUgs.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=i("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=i("OctagonX",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=i("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),x=m({base:"relative w-full rounded-xl bg-f1-background-secondary p-6 text-f1-foreground [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-f1-foreground [&>svg~*]:pl-8",variants:{variant:{destructive:"bg-f1-background-critical [&>svg]:text-f1-icon-critical",positive:"bg-f1-background-positive [&>svg]:text-f1-icon-positive",warning:"bg-f1-background-warning [&>svg]:text-f1-icon-warning",info:"bg-f1-background-info [&>svg]:text-f1-icon-info"}},defaultVariants:{variant:"info"}}),_={destructive:y,positive:u,warning:h,info:v},l=g({name:"Alert",type:"info"},n.forwardRef(({className:r,variant:e="info",children:a,...o},f)=>{const c=e?_[e]:null;return t.jsx("div",{ref:f,role:"alert",className:s(x({variant:e}),r),...o,children:t.jsxs("div",{className:"flex flex-row",children:[c&&t.jsx("div",{className:"mr-2 flex h-6 items-center",children:t.jsx(c,{size:20})}),t.jsx("div",{children:a})]})})})),p=n.forwardRef(function({className:e,...a},o){return t.jsx("h5",{ref:o,className:s("mb-1 text-base font-medium tracking-tight",e),...a})}),d=n.forwardRef(function({className:e,...a},o){return t.jsx("div",{ref:o,className:s("[&_p]:leading-relaxed",e),...a})});try{l.displayName="Alert",l.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"destructive"'},{value:'"positive"'}]}}}}}catch{}try{d.displayName="AlertDescription",d.__docgenInfo={description:"",displayName:"AlertDescription",props:{}}}catch{}try{p.displayName="AlertTitle",p.__docgenInfo={description:"",displayName:"AlertTitle",props:{}}}catch{}export{l as A,p as a,d as b};
