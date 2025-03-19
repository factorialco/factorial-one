import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{D as H}from"./index-DIdyo0Hg.js";import{u as $}from"./a11y-GqbGs7UY.js";import{c as G,E as K}from"./emojis-BNFZPiFB.js";import{L as T}from"./linkHandler-fUi2qCbR.js";import{w as U}from"./skeleton-BYaQrqsT.js";import{c as v,f as Q}from"./utils-B2yEwIwY.js";import{S as g}from"./skeleton-BQT1AIt_.js";import{r as i}from"./index-B6o7_jwP.js";import{g as X}from"./index-JFkZ0dF_.js";import"./Avatar--tDKy5Jw.js";import{P as Y}from"./index-C9oqVgzc.js";import{P as Z}from"./index-YO4D_ClJ.js";import"./index-yBjzXJbu.js";import"./date-DbrLY854.js";import"./format-CPFj0COA.js";import"./index-Bh5LNwUX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cwk_nZHn.js";import"./clsx-B-dksMZM.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./index-vIrfGXN5.js";import"./index-CDBnMHOu.js";import"./imageHandler-C2NaIYbW.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-B7GDqc_s.js";import"./index-BNL5Yqmu.js";import"./index-Ji25cujd.js";import"./index-DG6DbzsE.js";import"./index-Blak80_u.js";import"./button-CZujocQw.js";import"./Save-B3VvXevP.js";import"./Reaction-CKLBHP4X.js";import"./popover-BqXImKWO.js";import"./index-DW48STyt.js";import"./index-7k9rgiuw.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-BL6sZKvk.js";const ee={birthday:"🎂",anniversary:"🎉","first-day":"💼"},ae={viridian:"bg-[hsl(theme(colors.viridian.50)_/_0.2)]",malibu:"bg-[hsl(theme(colors.malibu.50)_/_0.2)]",yellow:"bg-[hsl(theme(colors.yellow.50)_/_0.2)]",purple:"bg-[hsl(theme(colors.purple.50)_/_0.2)]",lilac:"bg-[hsl(theme(colors.lilac.50)_/_0.2)]",barbie:"bg-[hsl(theme(colors.barbie.50)_/_0.2)]",smoke:"bg-[hsl(theme(colors.smoke.50)_/_0.2)]",army:"bg-[hsl(theme(colors.army.50)_/_0.2)]",flubber:"bg-[hsl(theme(colors.flubber.50)_/_0.2)]",indigo:"bg-[hsl(theme(colors.indigo.50)_/_0.2)]",camel:"bg-[hsl(theme(colors.camel.50)_/_0.2)]"};function x({firstName:a,lastName:r,src:t,canReact:o,lastEmojiReaction:c,onReactionSelect:s,pickerRef:n}){return e.jsxs("div",{className:v("relative h-32 w-full overflow-hidden rounded-md bg-f1-background",t?"":ae[X([a,r].join(""))]),children:[t&&e.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",style:{backgroundImage:`url(${t})`}}),e.jsx("div",{className:"relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur",children:e.jsxs("div",{className:"relative h-fit w-fit",children:[e.jsx("div",{style:o?{clipPath:"path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"}:{},children:e.jsx(Y,{src:t,firstName:a,lastName:r,size:"xlarge"})}),o&&e.jsx("div",{ref:n,className:v("absolute -right-0.5",t?"bottom-0.5":"-bottom-[3px]"),children:e.jsx(Z,{lastEmojiReaction:c,onSelect:s,size:"sm",variant:"neutral"})})]})})]})}try{x.displayName="CelebrationAvatar",x.__docgenInfo={description:"",displayName:"CelebrationAvatar",props:{firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},canReact:{defaultValue:null,description:"",name:"canReact",required:!0,type:{name:"boolean"}},lastEmojiReaction:{defaultValue:null,description:"",name:"lastEmojiReaction",required:!1,type:{name:"string"}},onReactionSelect:{defaultValue:null,description:"",name:"onReactionSelect",required:!1,type:{name:"((emoji: string) => void)"}},pickerRef:{defaultValue:null,description:"",name:"pickerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}}}}}catch{}function te(a){const r=i.useRef(null),t=i.useRef(),o=i.useCallback(()=>{const s=r.current;if(!s)return;const n=G.create(s,{resize:!0,useWorker:!1}),d=["9D76F3","3FC495","E61D46","F6AF3D"],m=.1;t.current=setInterval(()=>{n({particleCount:1,angle:90,spread:45,origin:{x:m+Math.random()*(1-m*2),y:-.1},gravity:.65,scalar:1,ticks:80,startVelocity:1,disableForReducedMotion:a,colors:[d[Math.floor(Math.random()*d.length)]]})},100)},[a]),c=i.useCallback(()=>{clearInterval(t.current)},[]);return{canvasRef:r,handleMouseEnter:o,handleMouseLeave:c}}const N=({link:a,firstName:r,lastName:t,src:o,canReact:c=!0,lastEmojiReaction:s,onReactionSelect:n,type:d,typeLabel:m,date:I})=>{const[z,j]=i.useState(s),B=i.useRef(null);i.useEffect(()=>{j(s)},[s]);const F=_=>{j(_),n==null||n(_)},b=$(),{canvasRef:O,handleMouseEnter:P,handleMouseLeave:J}=te(b),W=K({emoji:ee[d],size:"sm"});return e.jsxs(T,{href:a,className:v("relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary no-underline transition-shadow hover:shadow",Q()),onMouseEnter:b?void 0:P,onMouseLeave:b?void 0:J,children:[e.jsx("canvas",{ref:O,className:"pointer-events-none absolute inset-0 z-50 h-full w-full"}),e.jsx("div",{className:"basis-2/3 px-1 pt-1",children:e.jsx(x,{firstName:r,lastName:t,src:o,canReact:c,lastEmojiReaction:z,onReactionSelect:F,pickerRef:B})}),e.jsxs("div",{className:"flex basis-1/3 flex-row justify-between gap-2 p-3",children:[e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col",children:[e.jsxs("div",{className:"truncate font-medium text-f1-foreground",children:[r," ",t]}),e.jsxs("div",{className:"flex flex-row items-center gap-1.5 text-f1-foreground-secondary",children:[e.jsx("span",{className:"truncate",children:m}),e.jsx("span",{className:"shrink-0 leading-none",children:W})]})]}),e.jsx("div",{className:"shrink-0",children:e.jsx(H,{date:I})})]})]})},re=()=>e.jsxs("div",{className:"bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",role:"status","aria-busy":"true","aria-live":"polite",children:[e.jsx("div",{className:"basis-2/3 px-1 pt-1",children:e.jsx(g,{className:"h-32 w-full rounded-lg"})}),e.jsx("div",{className:"flex basis-1/3 flex-row justify-between gap-2 p-3",children:e.jsx("div",{className:"flex min-w-0 flex-1 flex-col",children:e.jsxs("div",{className:"flex flex-col gap-2 py-1",children:[e.jsx(g,{className:"h-3 w-2/3"}),e.jsx(g,{className:"h-3 w-1/3"})]})})})]}),l=U(N,re);try{N.displayName="BaseCelebration",N.__docgenInfo={description:"",displayName:"BaseCelebration",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},canReact:{defaultValue:{value:"true"},description:"",name:"canReact",required:!1,type:{name:"boolean"}},lastEmojiReaction:{defaultValue:null,description:"",name:"lastEmojiReaction",required:!1,type:{name:"string"}},onReactionSelect:{defaultValue:null,description:"",name:"onReactionSelect",required:!1,type:{name:"((emoji: string) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"birthday"'},{value:'"anniversary"'},{value:'"first-day"'}]}},typeLabel:{defaultValue:null,description:"",name:"typeLabel",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}}}}}catch{}try{l.displayName="Celebration",l.__docgenInfo={description:"",displayName:"Celebration",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},canReact:{defaultValue:{value:"true"},description:"",name:"canReact",required:!1,type:{name:"boolean"}},lastEmojiReaction:{defaultValue:null,description:"",name:"lastEmojiReaction",required:!1,type:{name:"string"}},onReactionSelect:{defaultValue:null,description:"",name:"onReactionSelect",required:!1,type:{name:"((emoji: string) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"birthday"'},{value:'"anniversary"'},{value:'"first-day"'}]}},typeLabel:{defaultValue:null,description:"",name:"typeLabel",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}}}}}catch{}const Ue={component:l,title:"Home/Communities/Celebration",parameters:{layout:"centered"},tags:["autodocs","experimental"]},h=new Date(2024,11,13,20,0),u={decorators:[a=>e.jsx("div",{className:"flex gap-4",children:e.jsx(a,{})})],render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-48",children:e.jsx(l,{link:"/",firstName:"Josep Jaume",lastName:"Rey",src:"https://github.com/josepjaume.png",type:"birthday",typeLabel:"Birthday",date:h})}),e.jsx("div",{className:"w-48",children:e.jsx(l,{link:"/",firstName:"Nik",lastName:"Lopin",src:"https://github.com/nlopin.png",type:"anniversary",typeLabel:"Anniversary",date:h})})]})},p={render:()=>e.jsx("div",{className:"w-48",children:e.jsx(l,{link:"/",firstName:"Saul",lastName:"Dominguez",src:"https://github.com/sauldom102.png",type:"birthday",typeLabel:"Birthday",date:h,lastEmojiReaction:"😍"})})},f={decorators:[a=>e.jsx("div",{className:"w-48",children:e.jsx(a,{})})],args:{link:"/",firstName:"Saúl",lastName:"Domínguez",canReact:!1,type:"first-day",typeLabel:"First day very long name",date:h}},y={decorators:[a=>e.jsx("div",{className:"w-48",children:e.jsx(a,{})})],args:{},render:()=>e.jsx(l.Skeleton,{})};var R,k,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [Story => <div className="flex gap-4">
        <Story />
      </div>],
  render: () => <>
      <div className="w-48">
        <Celebration link="/" firstName="Josep Jaume" lastName="Rey" src="https://github.com/josepjaume.png" type="birthday" typeLabel="Birthday" date={exampleDate} />
      </div>
      <div className="w-48">
        <Celebration link="/" firstName="Nik" lastName="Lopin" src="https://github.com/nlopin.png" type="anniversary" typeLabel="Anniversary" date={exampleDate} />
      </div>
    </>
}`,...(C=(k=u.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var w,S,V;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="w-48">
      <Celebration link="/" firstName="Saul" lastName="Dominguez" src="https://github.com/sauldom102.png" type="birthday" typeLabel="Birthday" date={exampleDate} lastEmojiReaction="😍" />
    </div>
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var q,L,D;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  decorators: [Story => <div className="w-48">
        <Story />
      </div>],
  args: {
    link: "/",
    firstName: "Saúl",
    lastName: "Domínguez",
    canReact: false,
    type: "first-day",
    typeLabel: "First day very long name",
    date: exampleDate
  }
}`,...(D=(L=f.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var E,M,A;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: [Story => <div className="w-48">
        <Story />
      </div>],
  args: {},
  render: () => <Celebration.Skeleton />
}`,...(A=(M=y.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const Qe=["Default","WithReaction","NoImage","Skeleton"];export{u as Default,f as NoImage,y as Skeleton,p as WithReaction,Qe as __namedExportsOrder,Ue as default};
