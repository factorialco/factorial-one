import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{A as t,a as i,b as c}from"./index-JMzSVw1J.js";import"./index-yBjzXJbu.js";import"./index-Cwk_nZHn.js";import"./clsx-B-dksMZM.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./component-BI8hiL87.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./utils-B2yEwIwY.js";import"./createLucideIcon-DSAetUgs.js";const R={title:"Alert",component:t,parameters:{layout:"padded"},tags:["autodocs","experimental"]},n={args:{variant:"destructive"},render:r=>e.jsxs(t,{...r,children:[e.jsx(i,{children:"Critical system error"}),e.jsx(c,{children:"System issue detected. Act immediately to prevent data loss."})]})},o={args:{variant:"positive"},render:r=>e.jsxs(t,{...r,children:[e.jsx(i,{children:"Training completed!"}),e.jsx(c,{children:"You successfully completed the training 'Eat. Sleep. Command Z. Repeat'."})]})},a={args:{variant:"warning"},render:r=>e.jsxs(t,{...r,children:[e.jsx(i,{children:"Top up account"}),e.jsx(c,{children:"Your account balance is below 1.000,00 €. Add money to your balance in order to avoid failed card payments immediately."})]})},s={args:{variant:"info"},render:r=>e.jsxs(t,{...r,children:[e.jsx(i,{children:"Invite your Bookkeeper"}),e.jsx(c,{children:"You can now invite your Bookkeeper to centralize all types of communications about employee updates in one place."})]})};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  },
  render: props => <Alert {...props}>
      <AlertTitle>Critical system error</AlertTitle>
      <AlertDescription>
        System issue detected. Act immediately to prevent data loss.
      </AlertDescription>
    </Alert>
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,A;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "positive"
  },
  render: props => <Alert {...props}>
      <AlertTitle>Training completed!</AlertTitle>
      <AlertDescription>
        You successfully completed the training &apos;Eat. Sleep. Command Z.
        Repeat&apos;.
      </AlertDescription>
    </Alert>
}`,...(A=(u=o.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var y,v,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  },
  render: props => <Alert {...props}>
      <AlertTitle>Top up account</AlertTitle>
      <AlertDescription>
        Your account balance is below 1.000,00 €. Add money to your balance in
        order to avoid failed card payments immediately.
      </AlertDescription>
    </Alert>
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,h,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "info"
  },
  render: props => <Alert {...props}>
      <AlertTitle>Invite your Bookkeeper</AlertTitle>
      <AlertDescription>
        You can now invite your Bookkeeper to centralize all types of
        communications about employee updates in one place.
      </AlertDescription>
    </Alert>
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const z=["Destructive","Positive","Warning","Info"];export{n as Destructive,s as Info,o as Positive,a as Warning,z as __namedExportsOrder,R as default};
