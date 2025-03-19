import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{f as e}from"./index-DuopzoTV.js";import{r as c}from"./index-B6o7_jwP.js";import{A}from"./index-BXq7-9tX.js";import{f as N}from"./avatar-name.factory-mtRlZ_pS.js";import{t as i}from"./groups-avatar-name.factory-DcMevC6P.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Blak80_u.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./exports-IwKL35tc.js";import"./component-BI8hiL87.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./scrollarea-CRia_fH-.js";import"./index-BKKrtyrw.js";import"./index-yradL_ub.js";import"./index-BNL5Yqmu.js";import"./index-BiB69Vyw.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-C9oqVgzc.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./Save-B3VvXevP.js";import"./CheckCircle-DR890WNk.js";import"./LogoAvatar-CNz_KRMw.js";import"./checkbox-BkoZAF6b.js";import"./Check-FJXU9bTg.js";import"./Minus-CDz936Bf.js";import"./index-BL6sZKvk.js";import"./index-D15UBmr5.js";import"./index-CvAaZOpw.js";import"./index-Dy8WLFmQ.js";import"./createLucideIcon-DSAetUgs.js";import"./chevron-right-CmdJHgzf.js";import"./index-B2OpD_bL.js";import"./avatar-Cgym3e8O.js";const Ge={component:A,title:"AvatarNameSelector/AvatarNameListItem",parameters:{layout:"centered"},tags:["autodocs","experimental"],decorators:[p=>n.jsx("div",{className:"w-full min-w-72 max-w-96",children:n.jsx(p,{})})],args:{entity:N[0],partialSelected:!1,groupView:!1,selected:!1,onSelect:e(),onRemove:e(),onExpand:e(),expanded:!1,search:"",singleSelector:!1}},r={},t={args:{entity:i[0],partialSelected:!1,groupView:!0,selected:!0,onSelect:e(),onRemove:e(),onExpand:e(),expanded:!1}},o={args:{entity:i[0],partialSelected:!0,groupView:!0,selected:!1,onSelect:e(),onRemove:e(),onExpand:e(),expanded:!1}},a={args:{...t.args,expanded:!0}},s={args:{entity:i[0],partialSelected:!1,groupView:!1,selected:!1,onSelect:e(),onRemove:e(),onExpand:e(),expanded:!1},render:p=>{const[m,I]=c.useState(!1),l=c.useCallback(()=>{I(!m)},[m]);return n.jsx("form",{children:n.jsx(A,{...p,onSelect:l,onRemove:l,selected:m})})}};var d,u,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var S,x,g;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entity: teamsWithEmployees[0],
    partialSelected: false,
    groupView: true,
    selected: true,
    onSelect: fn(),
    onRemove: fn(),
    onExpand: fn(),
    expanded: false
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var w,E,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    entity: teamsWithEmployees[0],
    partialSelected: true,
    groupView: true,
    selected: false,
    onSelect: fn(),
    onRemove: fn(),
    onExpand: fn(),
    expanded: false
  }
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var y,V,R;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...GroupViewSelected.args,
    expanded: true
  }
}`,...(R=(V=a.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var h,G,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    entity: teamsWithEmployees[0],
    partialSelected: false,
    groupView: false,
    selected: false,
    onSelect: fn(),
    onRemove: fn(),
    onExpand: fn(),
    expanded: false
  },
  render: (props: ComponentProps<typeof AvatarNameListItem>) => {
    const [selected, setSelected] = useState(false);
    const onSelect = useCallback(() => {
      setSelected(!selected);
    }, [selected]);
    return <form>
        <AvatarNameListItem {...props} onSelect={onSelect} onRemove={onSelect} selected={selected} />
      </form>;
  }
}`,...(j=(G=s.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};const je=["Default","GroupViewSelected","GroupViewPartial","GroupViewExpanded","DefaultInForm"];export{r as Default,s as DefaultInForm,a as GroupViewExpanded,o as GroupViewPartial,t as GroupViewSelected,je as __namedExportsOrder,Ge as default};
