import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{r as e}from"./index-B6o7_jwP.js";const t=e.createContext({enabled:!1,enable:()=>null,disable:()=>null,toggle:()=>null}),o=({initiallyEnabled:a=!1,children:l})=>{const[n,r]=e.useState(a),s=e.useCallback(()=>{r(!0)},[]),i=e.useCallback(()=>r(!1),[]),c=e.useCallback(()=>r(d=>!d),[]);return u.jsx(t.Provider,{value:{enable:s,disable:i,toggle:c,enabled:n},children:l})},y=()=>{const a=e.useContext(t);if(!a)throw"usePrivacyMode requires wrapping the component in a PrivacyModeProvider";return a};try{o.displayName="PrivacyModeProvider",o.__docgenInfo={description:"",displayName:"PrivacyModeProvider",props:{initiallyEnabled:{defaultValue:{value:"false"},description:"",name:"initiallyEnabled",required:!1,type:{name:"boolean"}}}}}catch{}export{o as P,y as u};
