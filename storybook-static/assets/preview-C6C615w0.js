import{j as p}from"./jsx-runtime-Cf8x2fCZ.js";import{r as y}from"./index-B6o7_jwP.js";import{a as Re}from"./index-B-lxVbXh.js";import{e as Ae}from"./index-Bh5LNwUX.js";import{I as De,b as Me}from"./i18n-provider-DLZYpdh4.js";import{U as Ne}from"./UserPlatformProvider-CL37nBDW.js";import{a as Le}from"./imageHandler-C2NaIYbW.js";import{a as qe}from"./linkHandler-fUi2qCbR.js";import{P as ze}from"./privacyMode-Bq89xGSE.js";import{c as He}from"./utils-B2yEwIwY.js";import{X as $e}from"./component-BI8hiL87.js";import{M as Ve}from"./index-BKeKnJdY.js";import{f as re,h as Ke}from"./index-B48kslfD.js";import{g as Ge}from"./_commonjsHelpers-Cpj98o6Y.js";import{A as Ye,a as Ue,b as We}from"./index-JMzSVw1J.js";import{a as Xe}from"./filter-props-BKVLvpUz.js";import"./index-yBjzXJbu.js";import"./v4-CtRu48qb.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./iframe-CY9Y-e4A.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./createLucideIcon-DSAetUgs.js";const Je=y.createContext(null),K=({children:e,fullScreen:t=!0})=>{const r=y.useRef(null),[a,o]=y.useState(r.current);return Ae(()=>{o(r.current)},[]),p.jsx(Je.Provider,{value:{element:a},children:p.jsx("div",{ref:r,id:"factorial-one-layout",className:He({"flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]":t}),children:e})})},Qe=({children:e})=>p.jsx(Ve,{reducedMotion:"user",children:e}),G=({children:e,layout:t,link:r,privacyModeInitiallyEnabled:a,image:o,i18n:n})=>p.jsx(Qe,{children:p.jsx(Ne,{children:p.jsx(De,{...n,children:p.jsx(qe,{...r,children:p.jsx(K,{...t,children:p.jsx($e,{children:p.jsx(ze,{initiallyEnabled:a,children:p.jsx(Le,{...o,children:e})})})})})})})});try{K.displayName="LayoutProvider",K.__docgenInfo={description:"",displayName:"LayoutProvider",props:{fullScreen:{defaultValue:{value:"true"},description:"",name:"fullScreen",required:!1,type:{name:"boolean"}},addBodyClasses:{defaultValue:null,description:"",name:"addBodyClasses",required:!1,type:{name:"boolean"}}}}}catch{}try{G.displayName="FactorialOneProvider",G.__docgenInfo={description:"",displayName:"FactorialOneProvider",props:{link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"LinkContextValue"}},privacyModeInitiallyEnabled:{defaultValue:null,description:"",name:"privacyModeInitiallyEnabled",required:!1,type:{name:"boolean"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ImageContextValue"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:'Omit<{ children: ReactNode; } & LayoutProps, "children">'}},i18n:{defaultValue:null,description:"",name:"i18n",required:!0,type:{name:'Omit<I18nProviderProps, "children">'}}}}}catch{}const{definePreview:Rr}=__STORYBOOK_MODULE_PREVIEW_API__;var Ze=Object.defineProperty,et=(e,t)=>{for(var r in t)Ze(e,r,{get:t[r],enumerable:!0})},tt={};et(tt,{initialGlobals:()=>nt});var rt="viewport",at={[rt]:{value:void 0,isRotated:!1}},ot={viewport:"reset",viewportRotated:!1},ce,nt=(ce=globalThis.FEATURES)!=null&&ce.viewportStoryGlobals?at:ot,it={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphoneSE3:{name:"iPhone SE 3rd generation",styles:{height:"667px",width:"375px"},type:"mobile"},iphone13:{name:"iPhone 13",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13pro:{name:"iPhone 13 Pro",styles:{height:"844px",width:"390px"},type:"mobile"},iphone13promax:{name:"iPhone 13 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},iphone14:{name:"iPhone 14",styles:{height:"844px",width:"390px"},type:"mobile"},iphone14pro:{name:"iPhone 14 Pro",styles:{height:"852px",width:"393px"},type:"mobile"},iphone14promax:{name:"iPhone 14 Pro Max",styles:{height:"932px",width:"430px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad11p:{name:"iPad Pro 11-in",styles:{height:"1194px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}},st=it;function lt(e){const t=typeof window<"u"&&window;return!!(t&&(/Chromatic/.test(t.navigator.userAgent)||/chromatic=true/.test(t.location.href)))}const ut={theme:"system"},pt=y.createContext(ut);function Y({children:e,theme:t="system",...r}){const a={theme:t};return p.jsx(pt.Provider,{...r,value:a,children:e})}try{Y.displayName="ThemeProvider",Y.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"system"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'},{value:'"system"'}]}},storageKey:{defaultValue:null,description:"",name:"storageKey",required:!1,type:{name:"string"}}}}}catch{}var ae="DARK_MODE",dt=Object.defineProperty,i=(e,t)=>dt(e,"name",{value:t,configurable:!0});function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},v.apply(null,arguments)}i(v,"_extends");function he(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i(he,"_assertThisInitialized");function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},x(e,t)}i(x,"_setPrototypeOf");function me(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,x(e,t)}i(me,"_inheritsLoose");function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(e)}i(T,"_getPrototypeOf");function ge(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}i(ge,"_isNativeFunction");function J(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(J=i(function(){return!!e},"_isNativeReflectConstruct"))()}i(J,"_isNativeReflectConstruct");function be(e,t,r){if(J())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var o=new(e.bind.apply(e,a));return r&&x(o,r.prototype),o}i(be,"_construct");function F(e){var t=typeof Map=="function"?new Map:void 0;return F=i(function(r){if(r===null||!ge(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return be(r,arguments,T(this).constructor)}return i(a,"Wrapper"),a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),x(a,r)},"_wrapNativeSuper"),F(e)}i(F,"_wrapNativeSuper");var ft={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function ye(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],o=[],n;for(n=1;n<t.length;n+=1)o.push(t[n]);return o.forEach(function(s){a=a.replace(/%[a-z]/,s)}),a}i(ye,"format");var m=function(e){me(t,e);function t(r){for(var a,o=arguments.length,n=new Array(o>1?o-1:0),s=1;s<o;s++)n[s-1]=arguments[s];return a=e.call(this,ye.apply(void 0,[ft[r]].concat(n)))||this,he(a)}return i(t,"PolishedError"),t}(F(Error));function E(e){return Math.round(e*255)}i(E,"colorToInt");function ve(e,t,r){return E(e)+","+E(t)+","+E(r)}i(ve,"convertToInt");function w(e,t,r,a){if(a===void 0&&(a=ve),t===0)return a(r,r,r);var o=(e%360+360)%360/60,n=(1-Math.abs(2*r-1))*t,s=n*(1-Math.abs(o%2-1)),l=0,u=0,f=0;o>=0&&o<1?(l=n,u=s):o>=1&&o<2?(l=s,u=n):o>=2&&o<3?(u=n,f=s):o>=3&&o<4?(u=s,f=n):o>=4&&o<5?(l=s,f=n):o>=5&&o<6&&(l=n,f=s);var c=r-n/2,h=l+c,g=u+c,N=f+c;return a(h,g,N)}i(w,"hslToRgb");var oe={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function xe(e){if(typeof e!="string")return e;var t=e.toLowerCase();return oe[t]?"#"+oe[t]:e}i(xe,"nameToHex");var ct=/^#[a-fA-F0-9]{6}$/,ht=/^#[a-fA-F0-9]{8}$/,mt=/^#[a-fA-F0-9]{3}$/,gt=/^#[a-fA-F0-9]{4}$/,L=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,bt=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,yt=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,vt=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function A(e){if(typeof e!="string")throw new m(3);var t=xe(e);if(t.match(ct))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(ht)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(mt))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(gt)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var o=L.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var n=bt.exec(t.substring(0,50));if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10),alpha:parseFloat(""+n[4])>1?parseFloat(""+n[4])/100:parseFloat(""+n[4])};var s=yt.exec(t);if(s){var l=parseInt(""+s[1],10),u=parseInt(""+s[2],10)/100,f=parseInt(""+s[3],10)/100,c="rgb("+w(l,u,f)+")",h=L.exec(c);if(!h)throw new m(4,t,c);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var g=vt.exec(t.substring(0,50));if(g){var N=parseInt(""+g[1],10),je=parseInt(""+g[2],10)/100,Be=parseInt(""+g[3],10)/100,te="rgb("+w(N,je,Be)+")",_=L.exec(te);if(!_)throw new m(4,t,te);return{red:parseInt(""+_[1],10),green:parseInt(""+_[2],10),blue:parseInt(""+_[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}throw new m(5)}i(A,"parseToRgb");function we(e){var t=e.red/255,r=e.green/255,a=e.blue/255,o=Math.max(t,r,a),n=Math.min(t,r,a),s=(o+n)/2;if(o===n)return e.alpha!==void 0?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var l,u=o-n,f=s>.5?u/(2-o-n):u/(o+n);switch(o){case t:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-t)/u+2;break;default:l=(t-r)/u+4;break}return l*=60,e.alpha!==void 0?{hue:l,saturation:f,lightness:s,alpha:e.alpha}:{hue:l,saturation:f,lightness:s}}i(we,"rgbToHsl");function Q(e){return we(A(e))}i(Q,"parseToHsl");var xt=i(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),U=xt;function b(e){var t=e.toString(16);return t.length===1?"0"+t:t}i(b,"numberToHex");function I(e){return b(Math.round(e*255))}i(I,"colorToHex");function Pe(e,t,r){return U("#"+I(e)+I(t)+I(r))}i(Pe,"convertToHex");function P(e,t,r){return w(e,t,r,Pe)}i(P,"hslToHex");function Se(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return P(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return P(e.hue,e.saturation,e.lightness);throw new m(1)}i(Se,"hsl");function Ce(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?P(e,t,r):"rgba("+w(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?P(e.hue,e.saturation,e.lightness):"rgba("+w(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new m(2)}i(Ce,"hsla");function j(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return U("#"+b(e)+b(t)+b(r));if(typeof e=="object"&&t===void 0&&r===void 0)return U("#"+b(e.red)+b(e.green)+b(e.blue));throw new m(6)}i(j,"rgb");function S(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var o=A(e);return"rgba("+o.red+","+o.green+","+o.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?j(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?j(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new m(7)}i(S,"rgba");var wt=i(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),Pt=i(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),St=i(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),Ct=i(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function Z(e){if(typeof e!="object")throw new m(8);if(Pt(e))return S(e);if(wt(e))return j(e);if(Ct(e))return Ce(e);if(St(e))return Se(e);throw new m(8)}i(Z,"toColorString");function ee(e,t,r){return i(function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):ee(e,t,a)},"fn")}i(ee,"curried");function D(e){return ee(e,e.length,[])}i(D,"curry");function M(e,t,r){return Math.max(e,Math.min(t,r))}i(M,"guard");function _e(e,t){if(t==="transparent")return t;var r=Q(t);return Z(v({},r,{lightness:M(0,1,r.lightness-parseFloat(e))}))}i(_e,"darken");var _t=D(_e),Ot=_t;function Oe(e,t){if(t==="transparent")return t;var r=Q(t);return Z(v({},r,{lightness:M(0,1,r.lightness+parseFloat(e))}))}i(Oe,"lighten");var kt=D(Oe),Et=kt;function ke(e,t){if(t==="transparent")return t;var r=A(t),a=typeof r.alpha=="number"?r.alpha:1,o=v({},r,{alpha:M(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return S(o)}i(ke,"transparentize");var It=D(ke),Tt=It,d={secondary:"#029CFD",lightest:"#FFFFFF",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)"},ne={app:"#F6F9FC",hoverable:Tt(.9,d.secondary)},B={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")}},Ft={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:d.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:B.fonts.base,fontCode:B.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:d.mediumdark,barHoverColor:d.secondary,barSelectedColor:d.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:d.lightest,inputBorderRadius:4},jt=Ft,Bt={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:ne.app,appContentBg:d.lightest,appPreviewBg:d.lightest,appBorderColor:d.border,appBorderRadius:4,fontBase:B.fonts.base,fontCode:B.fonts.mono,textColor:d.darkest,textInverseColor:d.lightest,textMutedColor:d.dark,barTextColor:d.mediumdark,barHoverColor:d.secondary,barSelectedColor:d.secondary,barBg:d.lightest,buttonBg:ne.app,buttonBorder:d.medium,booleanBg:d.mediumlight,booleanSelectedBg:d.lightest,inputBg:d.lightest,inputBorder:d.border,inputTextColor:d.darkest,inputBorderRadius:4},ie=Bt,Rt=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:At}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:q}=Rt,Dt=i(e=>typeof e!="string"?(At.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),Mt=i(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),Nt=i((e,t)=>e==="darken"?S(`${Ot(1,t)}`,.95):e==="lighten"?S(`${Et(1,t)}`,.95):t,"applyPolished"),Ee=i(e=>t=>{if(!Dt(t)||!Mt(t))return t;try{return Nt(e,t)}catch{return t}},"colorFactory");Ee("lighten");Ee("darken");var Lt=i(()=>!q||!q.matchMedia?"light":q.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),z={light:ie,dark:jt,normal:ie},H=Lt(),Ie=i((e={base:H},t)=>{let r={...z[H],...z[e.base]||{},...e,base:z[e.base]?e.base:H};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}},"create"),$,se;function qt(){return se||(se=1,$=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var a,o,n;if(Array.isArray(t)){if(a=t.length,a!=r.length)return!1;for(o=a;o--!==0;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(n=Object.keys(t),a=n.length,a!==Object.keys(r).length)return!1;for(o=a;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[o]))return!1;for(o=a;o--!==0;){var s=n[o];if(!e(t[s],r[s]))return!1}return!0}return t!==t&&r!==r}),$}var zt=qt();const le=Ge(zt);function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}var V;function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ue(Object(r),!0).forEach(function(a){Ht(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Ht(e,t,r){return t=$t(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $t(e){var t=Vt(e,"string");return C(t)==="symbol"?t:String(t)}function Vt(e,t){if(C(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(C(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O(e){return Ut(e)||Yt(e)||Gt(e)||Kt()}function Kt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gt(e,t){if(e){if(typeof e=="string")return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(e,t)}}function Yt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ut(e){if(Array.isArray(e))return W(e)}function W(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const{global:Wt}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:Ar,SET_STORIES:Dr,DOCS_RENDERED:Mr}=__STORYBOOK_MODULE_CORE_EVENTS__;var Te=Wt,Xt=Te.document,R=Te.window,Fe="sb-addon-themes-3";(V=R.matchMedia)===null||V===void 0||V.call(R,"(prefers-color-scheme: dark)");var X={classTarget:"body",dark:re.dark,darkClass:["dark"],light:re.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},de=function(t){R.localStorage.setItem(Fe,JSON.stringify(t))},Jt=function(t,r){var a=r.current,o=r.darkClass,n=o===void 0?X.darkClass:o,s=r.lightClass,l=s===void 0?X.lightClass:s;if(a==="dark"){var u,f;(u=t.classList).remove.apply(u,O(k(l))),(f=t.classList).add.apply(f,O(k(n)))}else{var c,h;(c=t.classList).remove.apply(c,O(k(n))),(h=t.classList).add.apply(h,O(k(l)))}},k=function(t){var r=[];return r.concat(t).map(function(a){return a})},Qt=function(t){var r=Xt.querySelector(t.classTarget);r&&Jt(r,t)},Zt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=R.localStorage.getItem(Fe);if(typeof r=="string"){var a=JSON.parse(r);return t&&(t.dark&&!le(a.dark,t.dark)&&(a.dark=t.dark,de(a)),t.light&&!le(a.light,t.light)&&(a.light=t.light,de(a))),a}return pe(pe({},X),t)};Qt(Zt());const{addons:Nr,useState:Lr,useEffect:qr}=__STORYBOOK_MODULE_PREVIEW_API__,er=Ie({base:"light",brandTitle:'<img src="logo.svg" width="32px" />',brandTarget:"_self",fontBase:'"Inter", sans-serif',colorPrimary:"#E5103A",colorSecondary:"#585858",appBg:"#FAFBFC",appContentBg:"#ffffff",appPreviewBg:"#ffffff",appBorderColor:"#ffffff",appBorderRadius:8,textColor:"#303D55",textInverseColor:"#ffffff",barTextColor:"#647084",barSelectedColor:"#0D1625",barHoverColor:"#0D1625",barBg:"#ffffff",inputBg:"#ffffff",inputBorder:"#DCE0E5",inputTextColor:"#647084",inputBorderRadius:8}),tr=Ie({base:"dark",brandTitle:'<img src="logo.svg" width="32px" />',brandTarget:"_self",fontBase:'"Inter", sans-serif',colorPrimary:"#BB86FC",colorSecondary:"#647084",appBg:"#161F30",appContentBg:"#0D1625",appPreviewBg:"#0D1625",appBorderColor:"#202C42",appBorderRadius:8,textColor:"#A1ABBD",textInverseColor:"#121212",textMutedColor:"#A0A0A0",barTextColor:"#A1ABBD",barSelectedColor:"#A1ABBD",barHoverColor:"#A1ABBD",barBg:"#0D1625",inputBg:"#161F30",inputBorder:"#202C42",inputTextColor:"#647084",inputBorderRadius:8,buttonBg:"#161F30",buttonBorder:"#202C42",booleanBg:"#161F30",booleanSelectedBg:"#202C42"}),{addons:rr}=__STORYBOOK_MODULE_PREVIEW_API__,{DOCS_RENDERED:ar}=__STORYBOOK_MODULE_CORE_EVENTS__,fe=rr.getChannel(),or=e=>{const[t,r]=y.useState(!1),{context:a,children:o}=e,[n,s]=y.useState(null);a.channel.on(ar,u=>{s(u)});const l=n&&n.startsWith("experimental-");return y.useEffect(()=>(fe.on(ae,r),()=>fe.off(ae,r)),[]),p.jsxs(Ke,{theme:t?tr:er,...e,children:[l&&p.jsx("div",{className:"sb-unstyled",children:p.jsxs(Ye,{variant:"destructive",className:"mb-8",children:[p.jsx(Ue,{children:"Experimental component"}),p.jsxs(We,{children:["Please don't use experimental components in production unless you're part of a testing group. To know more about our testing process please check out our"," ",p.jsx("a",{href:"/?path=/docs/components-maturity--documentation",children:"Component Maturity Model"})]})]})}),o]})},nr={navigation:{sidebar:"Main navigation"},actions:{save:"Save",cancel:"Cancel",showAll:"Show all",showLess:"Show less",skipToContent:"Skip to content",view:"View",search:"Search",clear:"Clear",more:"More"},filters:{label:"Filters",applyFilters:"Apply filters",cancel:"Cancel"},collections:{actions:{actions:"Actions"},visualizations:{table:"Table view",card:"Card view",pagination:{of:"of"}},filters:{failedToLoadOptions:"Failed to load options",retry:"Retry"}},shortcut:"Shortcut"};Xe.skipAnimations=lt();const ir=()=>e=>p.jsx(Y,{theme:"light",children:p.jsx(e,{})}),sr=(e,{parameters:t})=>{const[r,a]=y.useState(t.currentPath??"/");return p.jsx(G,{layout:{fullScreen:t.layout==="fullscreen"},i18n:{translations:Me(nr)},link:{currentPath:r,component:(o,n)=>p.jsx("a",{ref:n,...o,onClick:(s,...l)=>{var u;Re("Link clicked")(s,...l),(u=o==null?void 0:o.onClick)==null||u.call(o,s,...l),s.preventDefault(),o.href&&a(o.href)}})},image:{src:({src:o,width:n,height:s})=>({src:o!=null&&o.startsWith("data:")?o:`${o}?w=${n}&h=${s}`})},children:p.jsx(e,{})})},zr={decorators:[sr,ir()],parameters:{chromatic:{diffThreshold:.2},a11y:{config:{rules:[{id:"color-contrast",enabled:!0,selector:"*:not([data-a11y-color-contrast-ignore])"}]}},html:{root:"#factorial-one-layout",highlighter:{showLineNumbers:!0,wrapLines:!0}},backgrounds:{default:"content",values:[{name:"content",value:"hsl(var(--neutral-0))"},{name:"page",value:"hsl(var(--page-background))"}]},viewport:{viewports:{...st}},docs:{container:or,toc:{headingSelector:"h2, h3"}},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:(e,t)=>{const r=["introduction","how-to-contribute","foundations","playground"],a=e.title.toLowerCase(),o=t.title.toLowerCase(),n=r.indexOf(a),s=r.indexOf(o);if(n!==-1&&s!==-1)return n-s;if(n!==-1)return-1;if(s!==-1)return 1;const l=a.startsWith("foundations/"),u=o.startsWith("foundations/");if(l||u){if(l&&u){const f=["colors","typography","spacing","borders","shadows","icons"],c=f.indexOf(a.split("/")[1]),h=f.indexOf(o.split("/")[1]);if(c!==-1&&h!==-1)return c-h}return l?-1:1}return e.title.localeCompare(t.title)}},darkMode:{stylePreview:!0}},tags:["autodocs"]};export{sr as FactorialOne,zr as default,ir as withTheme};
