import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as n}from"./index-Blak80_u.js";import{u as l}from"./privacyMode-Bq89xGSE.js";import{P as m}from"./index-Bi7lMEGG.js";import"./index-yBjzXJbu.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";const C={title:"Profile/PrivateBox",tags:["autodocs","experimental"]},r={render:()=>{const{toggle:s,enabled:i}=l();return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{children:["My salary is"," ",e.jsx(m,{children:e.jsx("span",{children:"60,000 €/year"})})]}),e.jsx("div",{className:"self-start",children:e.jsx(n,{label:`${i?"Disable ":"Enable "} Privacy Mode`,onClick:s,variant:"neutral"})})]})}};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const {
      toggle,
      enabled
    } = usePrivacyMode();
    return <div className="flex flex-col gap-4">
        <p>
          My salary is{" "}
          <PrivateBox>
            <span>60,000 €/year</span>
          </PrivateBox>
        </p>
        <div className="self-start">
          <Button label={\`\${enabled ? "Disable " : "Enable "} Privacy Mode\`} onClick={toggle} variant="neutral" />
        </div>
      </div>;
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const D=["PrivateBoxExample"];export{r as PrivateBoxExample,D as __namedExportsOrder,C as default};
