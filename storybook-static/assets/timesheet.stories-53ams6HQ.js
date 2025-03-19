import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as r}from"./index-DydGTLJi.js";import{W as d}from"./index-DdikQjRD.js";import{W as n}from"./index-Ch0Anrm1.js";import"./index-yBjzXJbu.js";import"./index-DZqzqdH4.js";import"./tooltip-D2WqQ3hx.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-B7GDqc_s.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-7k9rgiuw.js";import"./index-BNL5Yqmu.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-BL6sZKvk.js";import"./index-Cl3QsgNf.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./colors-o1uwkeKe.js";import"./forwardRef-CVda-fSC.js";import"./index-Blak80_u.js";import"./index-CDBnMHOu.js";import"./index-Cwk_nZHn.js";import"./button-CZujocQw.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./index-B2OpD_bL.js";import"./index-DmGuVwWp.js";import"./Save-B3VvXevP.js";import"./AlertCircle-CAZ1CSgr.js";import"./InfoCircle-BQwEmo9G.js";import"./Warning-CA_bta6S.js";import"./text-CLXhi3RU.js";import"./index-C2XIGUiK.js";import"./exports-BcFg0xa3.js";import"./component-BI8hiL87.js";import"./index-X_rOtbsL.js";import"./index-Bi7lMEGG.js";import"./privacyMode-Bq89xGSE.js";import"./EyeVisible-Fd0tDaAb.js";import"./skeleton-BYaQrqsT.js";import"./card-B_wFt02l.js";import"./ChevronRight-zM-ePXcJ.js";import"./InfoCircleLine-BOiNe5O3.js";import"./linkHandler-fUi2qCbR.js";import"./skeleton-BQT1AIt_.js";const ue={title:"Insights/Examples/Timesheet",parameters:{layout:"centered"},tags:["autodocs"],decorators:[c=>e.jsx("div",{className:"w-[380px]",children:e.jsx(c,{})})]},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"mb-4",children:"Timesheet example"}),e.jsxs(d,{header:{title:"Timesheet",subtitle:"July",link:{title:"View timesheet",url:"#"}},children:[e.jsx(n,{title:"Worked / Planned hours",children:e.jsx(r,{title:"75h",subtitle:"100h",data:[{name:"Worked",value:75},{name:"Remaining",value:25,color:"#25253D1A"}],legend:!0})}),e.jsx(n,{title:"Balance",children:e.jsx(r,{title:"9h",subtitle:"50h",data:[{name:"Worked",value:9},{name:"Remaining",value:41,color:"#25253D1A"}],legend:!0})})]})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"mb-4",children:"Timesheet Overtime example"}),e.jsxs(d,{header:{title:"Timesheet",subtitle:"July",link:{title:"View timesheet",url:"#"}},children:[e.jsx(n,{title:"Worked / Planned hours",children:e.jsx(r,{title:"121h",subtitle:"100h",data:[{name:"Regular",value:100},{name:"Overtime",value:21,color:"#FF9153"}],legend:!0})}),e.jsx(n,{title:"Balance",children:e.jsx(r,{title:"+9h",subtitle:"50h",data:[{name:"Regular",value:9,color:"#FF9153"},{name:"Overtime",value:41,color:"#FF915333"}]})})]})]})};var o,m,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <>
      <h2 className="mb-4">Timesheet example</h2>
      <Widget header={{
      title: "Timesheet",
      subtitle: "July",
      link: {
        title: "View timesheet",
        url: "#"
      }
    }}>
        <WidgetSection title="Worked / Planned hours">
          <CategoryBarSection title="75h" subtitle="100h" data={[{
          name: "Worked",
          value: 75
        }, {
          name: "Remaining",
          value: 25,
          color: "#25253D1A"
        }]} legend />
        </WidgetSection>
        <WidgetSection title="Balance">
          <CategoryBarSection title="9h" subtitle="50h" data={[{
          name: "Worked",
          value: 9
        }, {
          name: "Remaining",
          value: 41,
          color: "#25253D1A"
        }]} legend />
        </WidgetSection>
      </Widget>
    </>
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var l,s,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <>
      <h2 className="mb-4">Timesheet Overtime example</h2>
      <Widget header={{
      title: "Timesheet",
      subtitle: "July",
      link: {
        title: "View timesheet",
        url: "#"
      }
    }}>
        <WidgetSection title="Worked / Planned hours">
          <CategoryBarSection title="121h" subtitle="100h" data={[{
          name: "Regular",
          value: 100
        }, {
          name: "Overtime",
          value: 21,
          color: "#FF9153"
        }]} legend />
        </WidgetSection>
        <WidgetSection title="Balance">
          <CategoryBarSection title="+9h" subtitle="50h" data={[{
          name: "Regular",
          value: 9,
          color: "#FF9153"
        }, {
          name: "Overtime",
          value: 41,
          color: "#FF915333"
        }]} />
        </WidgetSection>
      </Widget>
    </>
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const ge=["Timesheet","TimesheetOvertime"];export{t as Timesheet,i as TimesheetOvertime,ge as __namedExportsOrder,ue as default};
