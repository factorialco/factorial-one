import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import"./exports-Cqu6GprC.js";import{D as o}from"./index-DZd7-6nn.js";import{W as u}from"./index-7CTq1I30.js";import{P as g}from"./index-DCjSddZw.js";import{T as f}from"./index-CLMWXPNZ.js";import"./index-yBjzXJbu.js";import"./index-BegHU_l6.js";import"./text-CLXhi3RU.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-C2XIGUiK.js";import"./exports-BcFg0xa3.js";import"./component-BI8hiL87.js";import"./index-Cwk_nZHn.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-CDBnMHOu.js";import"./index-DmNYtGBX.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-BKKrtyrw.js";import"./index-B7GDqc_s.js";import"./index-BNL5Yqmu.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./Save-B3VvXevP.js";import"./CheckCircle-DR890WNk.js";import"./LayersFront-CDxc9biS.js";import"./ChevronRight-zM-ePXcJ.js";import"./linkHandler-fUi2qCbR.js";import"./toggleGroup-mqqLdlYg.js";import"./index-qX83RIrM.js";import"./index-DW48STyt.js";import"./index-Bmycdo5-.js";import"./index-Bg_GsVj5.js";import"./index-BL6sZKvk.js";import"./index-BiB69Vyw.js";import"./index-Cl3AK6IN.js";const ot={title:"Insights/Examples/Details",parameters:{layout:"centered"},args:{title:"Details",details:[{title:"Email",content:"alicia.keys@factorial.co"},{title:"Phone",content:"(120) 687-3123"},{title:"Legal entity",content:"Everyday Software SL"},{title:"Start date",content:"01/01/2023"},{title:"Contract type",content:"Full time"}],manager:{title:"Manager",name:"Isabella González",avatar:"https://github.com/dani-moreno.png"},workableDays:{title:"Workable days",activatedDays:["Monday","Tuesday","Wednesday","Thursday","Friday"]},teams:{title:"Team",list:["Design","Product","Foundations Squad"]}},tags:["autodocs"],decorators:[a=>t.jsx("div",{className:"w-[350px]",children:t.jsx(a,{})})]},m={render:({details:a,workableDays:i,manager:n,teams:r,title:l})=>{var s;return t.jsxs("div",{className:"flex flex-col gap-4",children:[!!l&&t.jsx("p",{className:"mb-1 text-sm font-medium text-f1-foreground",children:l}),a==null?void 0:a.map(e=>e!=null&&e.title?t.jsx(o,{title:e.title,content:e.content},e.title):null),(i==null?void 0:i.title)&&t.jsx(o,{title:i.title,content:t.jsx(u,{activatedDays:i.activatedDays})}),!!n&&t.jsx(o,{title:n.title,content:t.jsx(g,{name:n.name,avatarUrl:n.avatar})}),!!((s=r==null?void 0:r.list)!=null&&s.length)&&t.jsx(o,{title:r.title,content:t.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:r.list.map((e,x)=>e?t.jsx(f,{teamName:e,teamImageUrl:e[0]},e+x):null)})})]})}};var p,c,d;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    details,
    workableDays,
    manager,
    teams,
    title
  }: DetailsType) => {
    return <div className="flex flex-col gap-4">
        {!!title && <p className="mb-1 text-sm font-medium text-f1-foreground">{title}</p>}
        {details?.map(item => {
        return !item?.title ? null : <DetailsItem title={item.title} key={item.title} content={item.content} />;
      })}
        {workableDays?.title && <DetailsItem title={workableDays.title} content={<Weekdays activatedDays={workableDays.activatedDays} />} />}
        {!!manager && <DetailsItem title={manager.title} content={<PersonTag name={manager.name} avatarUrl={manager.avatar} />} />}
        {!!teams?.list?.length && <DetailsItem title={teams.title} content={<div className="flex flex-row flex-wrap gap-2">
                {teams.list.map((team, index) => {
          return !team ? null : <TeamTag key={team + index} teamName={team} teamImageUrl={team[0]} />;
        })}
              </div>} />}
      </div>;
  }
}`,...(d=(c=m.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const mt=["Details"];export{m as Details,mt as __namedExportsOrder,ot as default};
