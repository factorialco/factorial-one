import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{C as z,a as K,b as I,c as E,d as G}from"./chart-23aT_Z91.js";import{a as f}from"./colors-o1uwkeKe.js";import{m as R,C as W,c as X,Y,y as U,X as H,x as Q}from"./elements-CurrDGdw.js";import{f as Z}from"./forwardRef-CVda-fSC.js";import{p as ee}from"./muncher-CuEbTD78.js";import{B as ae}from"./BarChart-M1jhFDDf.js";import{B as te,c as le}from"./generateCategoricalChart-DK672pYy.js";const se=({dataConfig:e,data:v,xAxis:u,yAxis:l={hide:!0},label:h=!1,type:c="simple",hideTooltip:P=!1,aspect:S,legend:w,showValueUnderLabel:g=!1,highlightLastBar:y=!1,onClick:k},N)=>{const p=Object.keys(e),x=ee(v).map((a,s,r)=>{var n;return y&&p.length===1&&!((n=e[p[0]])!=null&&n.color)?{...a,fill:s===r.length-1?f(0):`hsl(${f(0,!1)} / 0.5)`}:a}),O=Math.max(...x.flatMap(a=>p.map(s=>R(l!=null&&l.tickFormatter?l.tickFormatter(`${a[s]}`):`${a[s]}`))));return t.jsx(z,{config:e,ref:N,aspect:S,children:t.jsxs(ae,{accessibilityLayer:!0,data:x,margin:{left:l&&!l.hide?0:12,right:12,top:h?24:0,bottom:g?24:12},stackOffset:c==="stacked-by-sign"?"sign":void 0,onClick:a=>{if(!k||!a.activeLabel||!a.activePayload)return;const s={label:a.activeLabel,values:{}};for(const r of a.activePayload)s.values[r.name]=r.value;k(s)},children:[P&&t.jsx(K,{cursor:!0,content:t.jsx(I,{yAxisFormatter:l.tickFormatter})}),t.jsx(W,{...X()}),t.jsx(Y,{...U(l),tick:!0,width:l.width??O+20,hide:l.hide}),t.jsx(H,{...Q(u),hide:u==null?void 0:u.hide,tick:g?a=>{var j,F;const{x:s,y:r,payload:n}=a,C=((j=v.find(J=>J.label===n.value))==null?void 0:j.values)||"",m=Object.keys(C).length===1?(F=Object.values(C))==null?void 0:F[0]:void 0,T=m!==void 0&&l.tickFormatter?l.tickFormatter(`${m}`):m.toLocaleString();return t.jsxs("g",{transform:`translate(${s},${r})`,children:[t.jsx("text",{x:0,y:0,dy:12,textAnchor:"middle",className:"text-sm font-medium !text-f1-foreground-secondary",children:n.value}),!!m&&t.jsx("text",{x:0,y:0,dy:28,textAnchor:"middle",className:"!fill-f1-foreground text-sm font-medium",children:T})]})}:void 0}),p.map((a,s)=>t.jsx(te,{isAnimationActive:!1,dataKey:a,stackId:c==="stacked"||c==="stacked-by-sign"?"stack":void 0,fill:y?r=>r.fill:e[a].color??f(s),radius:c==="stacked-by-sign"?[4,4,0,0]:4,maxBarSize:32,children:h&&t.jsx(le,{position:"top",offset:10,className:"fill-f1-foreground",fontSize:12},`label-${a}`)},`bar-${a}`)),w&&t.jsx(E,{content:t.jsx(G,{nameKey:"label"}),align:"center",verticalAlign:"bottom",layout:"vertical",className:"flex-row items-start gap-4 pr-3 pt-2"})]})})},b=Z(se);try{b.displayName="BarChart",b.__docgenInfo={description:"",displayName:"BarChart",props:{dataConfig:{defaultValue:null,description:"",name:"dataConfig",required:!0,type:{name:"ChartConfig"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChartItem<K>[]"}},xAxis:{defaultValue:null,description:"",name:"xAxis",required:!1,type:{name:"AxisConfig"}},yAxis:{defaultValue:{value:"{ hide: true }"},description:"",name:"yAxis",required:!1,type:{name:"AxisConfig"}},aspect:{defaultValue:null,description:"",name:"aspect",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"square"'},{value:'"wide"'}]}},type:{defaultValue:{value:"simple"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"simple"'},{value:'"stacked"'},{value:'"stacked-by-sign"'}]}},label:{defaultValue:{value:"false"},description:"",name:"label",required:!1,type:{name:"boolean"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"boolean"}},showValueUnderLabel:{defaultValue:{value:"false"},description:"",name:"showValueUnderLabel",required:!1,type:{name:"boolean"}},highlightLastBar:{defaultValue:{value:"false"},description:"",name:"highlightLastBar",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((data: ChartDataPoint<K>) => void)"}},hideTooltip:{defaultValue:{value:"false"},description:"",name:"hideTooltip",required:!1,type:{name:"boolean"}}}}}catch{}const re={desktop:{label:"Desktop"}},ne={title:"Charts/BarChart",component:b,tags:["autodocs"],decorators:[e=>t.jsx("div",{className:"w-100 h-52",children:t.jsx(e,{})})],args:{dataConfig:re,xAxis:{hide:!1,tickFormatter:e=>e.slice(0,3)},data:[{label:"January",values:{desktop:4e3}},{label:"February",values:{desktop:3e3}},{label:"March",values:{desktop:2e3}},{label:"April",values:{desktop:1500}},{label:"May",values:{desktop:2e3}}],onClick:e=>{console.log("Bar clicked",e)}}},o={},oe={desktop:{label:"Desktop"},mobile:{label:"Mobile"},tablet:{label:"Tablet"}},i={args:{dataConfig:oe,data:[{label:"January",values:{desktop:2400,mobile:4e3,tablet:3e3}},{label:"February",values:{desktop:1398,mobile:3e3,tablet:2500}},{label:"March",values:{desktop:4e3,mobile:2e3,tablet:3500}},{label:"April",values:{desktop:8e3,mobile:1500,tablet:4500}},{label:"May",values:{desktop:6e3,mobile:2e3,tablet:5e3}}],xAxis:{hide:!1,tickFormatter:e=>e.slice(0,3)}}},ie={profit:{label:"Profit"},losses:{label:"Losses"}},d={args:{type:"stacked-by-sign",dataConfig:ie,data:[{label:"January",values:{profit:4e3,losses:-1200}},{label:"February",values:{profit:3200,losses:-800}},{label:"March",values:{profit:5e3,losses:-3e3}},{label:"April",values:{profit:7e3,losses:-1e3}},{label:"May",values:{profit:4500,losses:-1500}}],xAxis:{hide:!1,tickFormatter:e=>e.slice(0,3)},yAxis:{hide:!1,tickFormatter:e=>e+" €"}}};var M,V,_;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(_=(V=o.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,B,L;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    dataConfig: dataMultiConfig,
    data: [{
      label: "January",
      values: {
        desktop: 2400,
        mobile: 4000,
        tablet: 3000
      }
    }, {
      label: "February",
      values: {
        desktop: 1398,
        mobile: 3000,
        tablet: 2500
      }
    }, {
      label: "March",
      values: {
        desktop: 4000,
        mobile: 2000,
        tablet: 3500
      }
    }, {
      label: "April",
      values: {
        desktop: 8000,
        mobile: 1500,
        tablet: 4500
      }
    }, {
      label: "May",
      values: {
        desktop: 6000,
        mobile: 2000,
        tablet: 5000
      }
    }],
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3)
    }
  }
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var A,D,$;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "stacked-by-sign",
    dataConfig: financialDataConfig,
    data: [{
      label: "January",
      values: {
        profit: 4000,
        losses: -1200
      }
    }, {
      label: "February",
      values: {
        profit: 3200,
        losses: -800
      }
    }, {
      label: "March",
      values: {
        profit: 5000,
        losses: -3000
      }
    }, {
      label: "April",
      values: {
        profit: 7000,
        losses: -1000
      }
    }, {
      label: "May",
      values: {
        profit: 4500,
        losses: -1500
      }
    }],
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3)
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value + " €"
    }
  }
}`,...($=(D=d.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const de=["Default","MultipleValues","FinancialValues"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:o,FinancialValues:d,MultipleValues:i,__namedExportsOrder:de,default:ne},Symbol.toStringTag,{value:"Module"}));export{b as B,ge as i,ne as m};
