import{r}from"./index-B6o7_jwP.js";const h=(t,o)=>{if(o.disallowEmpty&&t.length===0)throw Error("You need to provide some text that is not empty");if(o.maxLength!==void 0&&t.length>o.maxLength)throw Error(`"${t}" should have no more than ${o.maxLength} characters`);if(o.minLength!==void 0&&t.length<o.minLength)throw Error(`"${t}" should have at least ${o.minLength} characters`)},a=(t,o)=>{r.useEffect(()=>{t!==void 0&&o&&h(t,o)},[t,o])};export{a as u};
