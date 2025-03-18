import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{R as J}from"./index-BegHU_l6.js";import{f as S}from"./index-DuopzoTV.js";import{r as s}from"./index-B6o7_jwP.js";import{A as u}from"./index-DO6oHkvw.js";import{f as d}from"./avatar-name.factory-mtRlZ_pS.js";import{w as K,t as M}from"./groups-avatar-name.factory-DcMevC6P.js";import{C as Q}from"./index-BXq7-9tX.js";import{C as V}from"./chevron-right-CmdJHgzf.js";import"./index-yBjzXJbu.js";import"./text-CLXhi3RU.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-C2XIGUiK.js";import"./exports-BcFg0xa3.js";import"./component-BI8hiL87.js";import"./index-Cwk_nZHn.js";import"./index-Cy3P-1Ig.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-fNjTmf9T.js";import"./index-CDBnMHOu.js";import"./popover-BqXImKWO.js";import"./index-DW48STyt.js";import"./index-B7GDqc_s.js";import"./index-BKKrtyrw.js";import"./index-7k9rgiuw.js";import"./index-BNL5Yqmu.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-BL6sZKvk.js";import"./index-Bh5LNwUX.js";import"./exports-IwKL35tc.js";import"./scrollarea-CRia_fH-.js";import"./index-BiB69Vyw.js";import"./index-BdQq_4o_.js";import"./index-B0SOT-3H.js";import"./index-BobS88kg.js";import"./button-CZujocQw.js";import"./index-rQB-1XLh.js";import"./index-DJtxxfEW.js";import"./Save-B3VvXevP.js";import"./Search-DyMYdF6H.js";import"./input-BTRPgdqa.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./ChevronDown-LBI9f9x4.js";import"./Select-tQGJVFmO.js";import"./ChevronUp-DDAshzCv.js";import"./CheckCircle-DR890WNk.js";import"./index-Bmycdo5-.js";import"./index-D15UBmr5.js";import"./index-Cl3QsgNf.js";import"./createLucideIcon-DSAetUgs.js";import"./index-DrkntLAK.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./index-DeMbA3mW.js";import"./Cross-C-APJ_G3.js";import"./index-BjvC5kk3.js";import"./avatar-Cgym3e8O.js";import"./index-Blak80_u.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./LogoAvatar-CNz_KRMw.js";import"./checkbox-BkoZAF6b.js";import"./Check-FJXU9bTg.js";import"./Minus-CDz936Bf.js";import"./index-Dy8WLFmQ.js";import"./index-B2OpD_bL.js";const m={all:d,teams:M,workplaces:K},g={entities:[],triggerPlaceholder:"Select employees...",triggerSelected:"employees selected",searchPlaceholder:"Search...",selectAllLabel:"Select all",clearLabel:"Clear",selectedLabel:"selected",notFoundTitle:"No results found",disabled:!1,notFoundSubtitle:"Try searching with a different term.",groups:[{label:"None",value:"all",type:"avatar"},{label:"Team",value:"teams",type:"team"},{label:"Workplace",value:"workplaces"}],selectedGroup:"all",onGroupChange:S(),onSelect:S(),singleSelector:!1,width:500},ht={component:u,title:"AvatarNameSelector/AvatarNameSelector",parameters:{layout:"centered"},tags:["autodocs","experimental"],decorators:[e=>l.jsx("div",{className:"h-[520px] w-full",children:l.jsx(e,{})})],args:{...g},render:e=>{const[c,a]=s.useState(e.loading??!0),[n,r]=s.useState(e.selectedGroup??"all");return l.jsx("div",{className:"w-64",children:l.jsx(u,{...e,loading:c,entities:m[n]||[],selectedGroup:n,onGroupChange:o=>r(o??"all"),onOpenChange:o=>o?setTimeout(()=>a(!1),500):a(!0)})})}},A={args:g,render:e=>{const[c,a]=s.useState(e.loading??!0),[n,r]=s.useState([{...d[0]},{...d[1]}]),[o,i]=s.useState(e.selectedGroup??"all");return l.jsx(u,{...e,singleSelector:!1,loading:c,entities:m[o]||[],selectedGroup:o,onGroupChange:t=>{r([]),i(t??"all")},onOpenChange:t=>t?setTimeout(()=>a(!1),500):a(!0),selectedAvatarName:n,onSelect:t=>{r(t)}})}},v={args:{...g,selectedGroup:"teams"},render:e=>{const[c,a]=s.useState(e.loading??!0),[n,r]=s.useState([{...d[0]},{...d[1]}]),[o,i]=s.useState(e.selectedGroup??"all");return l.jsx(u,{...e,singleSelector:!1,loading:c,entities:m[o]||[],selectedGroup:o,onGroupChange:t=>{r([]),i(t??"all")},onOpenChange:t=>t?setTimeout(()=>a(!1),500):a(!0),selectedAvatarName:n,onSelect:t=>{r(t)}})}},h={args:{...g,onSelect:S(),singleSelector:!0},render:e=>{const[c,a]=s.useState(e.loading??!0),[n,r]=s.useState(),[o,i]=s.useState(e.selectedGroup??"all");return l.jsx(u,{...e,singleSelector:!0,loading:c,entities:m[o]||[],selectedGroup:o,onGroupChange:t=>{r(void 0),i(t??"all")},onOpenChange:t=>t?setTimeout(()=>a(!1),500):a(!0),selectedAvatarName:n?[n]:[],onSelect:t=>{if(o!="all"){const f=m.all.find(O=>{var G,p;return O.id===((p=(G=t==null?void 0:t.subItems)==null?void 0:G[0])==null?void 0:p.subId)});r(f)}else r(t??void 0)}})}},N={args:{...g,onSelect:S(),singleSelector:!1,loading:!1,alwaysOpen:!0},render:e=>{const[c,a]=s.useState(e.loading??!0),[n,r]=s.useState([{...d[0]},{...d[1]}]),[o,i]=s.useState(e.selectedGroup??"all");return l.jsx("div",{className:"w-[300px] border-2",children:l.jsx(u,{...e,singleSelector:!1,width:void 0,loading:c,entities:m[o]||[],selectedGroup:o,onGroupChange:t=>{r([]),i(t??"all")},onOpenChange:t=>t?setTimeout(()=>a(!1),500):a(!0),selectedAvatarName:n,onSelect:t=>{r(t)}})})}},y={args:{...g,onSelect:S(),singleSelector:!1,loading:!1,alwaysOpen:!0},render:e=>{const[c,a]=s.useState([{...d[0]},{...d[1]}]),[n,r]=s.useState(e.selectedGroup??"all");return l.jsx("form",{onSubmit:S,children:l.jsx(u,{...e,singleSelector:!1,entities:m[n]||[],selectedGroup:n,onGroupChange:o=>{a([]),r(o??"all")},selectedAvatarName:c,onSelect:o=>{a(o)}})})}},C={args:{...g,onSelect:S()},render:e=>{const[c,a]=s.useState(e.loading??!0),[n,r]=s.useState(e.selectedGroup??"all"),[o,i]=s.useState([{...d[0]},{...d[1]}]),[t,f]=s.useState(2),[O,G]=s.useState(!1);return l.jsx("div",{className:"w-[600px]",children:l.jsx(u,{...e,singleSelector:!1,loading:c,entities:m[n]||[],selectedGroup:n,onGroupChange:p=>{i([]),f(0),r(p??"all")},onOpenChange:p=>{p?setTimeout(()=>a(!1),500):a(!0),G(p)},selectedAvatarName:o,onSelect:p=>{if(i(p),n!="all"){let T=0;p.forEach(H=>{var x;return T+=((x=H.subItems)==null?void 0:x.length)??0}),f(T)}else f(p.length)},children:l.jsxs("div",{className:"flex justify-start gap-2",children:[l.jsx(J,{icon:O?Q:V}),l.jsx("span",{className:"my-auto",children:`${t} selected`})]})})})}};var E,P,w;A.parameters={...A.parameters,docs:{...(E=A.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: defaultArgs,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true);
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([{
      ...famousEmployees[0]
    }, {
      ...famousEmployees[1]
    }]);
    const [selectedGroup, setSelectedGroup] = useState<string>(props.selectedGroup ?? "all");
    return <AvatarNameSelector {...props} singleSelector={false} loading={loading} entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []} selectedGroup={selectedGroup} onGroupChange={value => {
      setSelected([]);
      setSelectedGroup(value ?? "all");
    }} onOpenChange={open => open ? setTimeout(() => setLoading(false), 500) : setLoading(true)} selectedAvatarName={selected} onSelect={selection => {
      setSelected(selection);
    }} />;
  }
}`,...(w=(P=A.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var b,L,j;v.parameters={...v.parameters,docs:{...(b=v.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    selectedGroup: "teams"
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true);
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([{
      ...famousEmployees[0]
    }, {
      ...famousEmployees[1]
    }]);
    const [selectedGroup, setSelectedGroup] = useState<string>(props.selectedGroup ?? "all");
    return <AvatarNameSelector {...props} singleSelector={false} loading={loading} entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []} selectedGroup={selectedGroup} onGroupChange={value => {
      setSelected([]);
      setSelectedGroup(value ?? "all");
    }} onOpenChange={open => open ? setTimeout(() => setLoading(false), 500) : setLoading(true)} selectedAvatarName={selected} onSelect={selection => {
      setSelected(selection);
    }} />;
  }
}`,...(j=(L=v.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var R,D,_;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onSelect: fn(),
    singleSelector: true
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true);
    const [selected, setSelected] = useState<AvatarNamedEntity | undefined>();
    const [selectedGroup, setSelectedGroup] = useState<string>(props.selectedGroup ?? "all");
    return <AvatarNameSelector {...props} singleSelector loading={loading} entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []} selectedGroup={selectedGroup} onGroupChange={value => {
      setSelected(undefined);
      setSelectedGroup(value ?? "all");
    }} onOpenChange={open => open ? setTimeout(() => setLoading(false), 500) : setLoading(true)} selectedAvatarName={!selected ? [] : [selected]} onSelect={selection => {
      if (selectedGroup != "all") {
        const found = GROUP_DATA["all"].find(el => el.id === selection?.subItems?.[0]?.subId);
        setSelected(found);
      } else {
        setSelected(selection ?? undefined);
      }
    }} />;
  }
}`,...(_=(D=h.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var U,k,I;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onSelect: fn(),
    singleSelector: false,
    loading: false,
    alwaysOpen: true
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true);
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([{
      ...famousEmployees[0]
    }, {
      ...famousEmployees[1]
    }]);
    const [selectedGroup, setSelectedGroup] = useState<string>(props.selectedGroup ?? "all");
    return <div className="w-[300px] border-2">
        <AvatarNameSelector {...props} singleSelector={false} width={undefined} loading={loading} entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []} selectedGroup={selectedGroup} onGroupChange={value => {
        setSelected([]);
        setSelectedGroup(value ?? "all");
      }} onOpenChange={open => open ? setTimeout(() => setLoading(false), 500) : setLoading(true)} selectedAvatarName={selected} onSelect={(selection: AvatarNamedEntity[]) => {
        setSelected(selection);
      }} />
      </div>;
  }
}`,...(I=(k=N.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var W,F,$;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onSelect: fn(),
    singleSelector: false,
    loading: false,
    alwaysOpen: true
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([{
      ...famousEmployees[0]
    }, {
      ...famousEmployees[1]
    }]);
    const [selectedGroup, setSelectedGroup] = useState<string>(props.selectedGroup ?? "all");
    return <form onSubmit={fn}>
        <AvatarNameSelector {...props} singleSelector={false} entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []} selectedGroup={selectedGroup} onGroupChange={value => {
        setSelected([]);
        setSelectedGroup(value ?? "all");
      }} selectedAvatarName={selected} onSelect={(selection: AvatarNamedEntity[]) => {
        setSelected(selection);
      }} />
      </form>;
  }
}`,...($=(F=y.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var q,z,B;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onSelect: fn()
  } as AvatarNameSelectorProps,
  render: (props: ComponentProps<typeof AvatarNameSelector>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true);
    const [selectedGroup, setSelectedGroup] = useState<string>(props.selectedGroup ?? "all");
    const [selected, setSelected] = useState<AvatarNamedEntity[]>([{
      ...famousEmployees[0]
    }, {
      ...famousEmployees[1]
    }]);
    const [numSelected, setNumSelected] = useState<number>(2);
    const [open, setOpen] = useState<boolean>(false);
    return <div className="w-[600px]">
        <AvatarNameSelector {...props} singleSelector={false} loading={loading} entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []} selectedGroup={selectedGroup} onGroupChange={value => {
        setSelected([]);
        setNumSelected(0);
        setSelectedGroup(value ?? "all");
      }} onOpenChange={open => {
        if (open) setTimeout(() => setLoading(false), 500);else setLoading(true);
        setOpen(open);
      }} selectedAvatarName={selected} onSelect={(selection: AvatarNamedEntity[]) => {
        setSelected(selection);
        if (selectedGroup != "all") {
          let total = 0;
          selection.forEach(el => total += el.subItems?.length ?? 0);
          setNumSelected(total);
        } else {
          setNumSelected(selection.length);
        }
      }}>
          <div className="flex justify-start gap-2">
            <RawTag icon={open ? ChevronDown : ChevronRight} />
            <span className="my-auto">{\`\${numSelected} selected\`}</span>
          </div>
        </AvatarNameSelector>
      </div>;
  }
}`,...(B=(z=C.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const Nt=["Default","WithSelectedGroup","SingleSelector","AlwaysOpen","AlwaysOpenInForm","WithCustomTrigger"];export{N as AlwaysOpen,y as AlwaysOpenInForm,A as Default,h as SingleSelector,C as WithCustomTrigger,v as WithSelectedGroup,Nt as __namedExportsOrder,ht as default};
