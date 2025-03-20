import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as de}from"./index-Blak80_u.js";import{C as S}from"./index-Dx7Y6k44.js";import"./Avatar--tDKy5Jw.js";import{P as R}from"./index-C9oqVgzc.js";import"./exports-Cqu6GprC.js";import{D as oe}from"./index-B79dpo_y.js";import{O as Te}from"./index-CiVFoefN.js";import{F as ce}from"./Save-B3VvXevP.js";import{F as me}from"./Ellipsis-BFYYAK1r.js";import{F as be}from"./Pencil-B6sRWFIu.js";import{r as ue,R as E}from"./index-B6o7_jwP.js";import{R as y}from"./index-BegHU_l6.js";import{O as d,T as o,a as s,b as n,c,d as l}from"./index-ReJqEmKK.js";import{S as u}from"./index-X_rOtbsL.js";import"./index-yBjzXJbu.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./checkbox-BkoZAF6b.js";import"./Check-FJXU9bTg.js";import"./Minus-CDz936Bf.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-DW48STyt.js";import"./index-BL6sZKvk.js";import"./index-BNL5Yqmu.js";import"./index-D15UBmr5.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-Dy8WLFmQ.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-DG6DbzsE.js";import"./EllipsisHorizontal-CXMIya4N.js";import"./linkHandler-fUi2qCbR.js";import"./index-3YeXfHId.js";import"./index-Bg_GsVj5.js";import"./index-7k9rgiuw.js";import"./Combination-DneYXzaJ.js";import"./index-Bmycdo5-.js";import"./index-BiB69Vyw.js";import"./index-C-USI-jp.js";import"./index-qX83RIrM.js";import"./chevron-right-CmdJHgzf.js";import"./createLucideIcon-DSAetUgs.js";import"./exports-IwKL35tc.js";import"./component-BI8hiL87.js";import"./scrollarea-CRia_fH-.js";import"./index-BdQq_4o_.js";import"./ChevronLeft-D47n-iX-.js";import"./ChevronRight-zM-ePXcJ.js";import"./text-CLXhi3RU.js";import"./index-C2XIGUiK.js";import"./exports-BcFg0xa3.js";import"./skeleton-BYaQrqsT.js";import"./skeleton-BQT1AIt_.js";import"./i18n-provider-DLZYpdh4.js";import"./index-Ci88gSgP.js";import"./index-XjqIyxWy.js";import"./Windows-juRZgWzJ.js";import"./UserPlatformProvider-CL37nBDW.js";import"./tooltip-D2WqQ3hx.js";import"./index-Cl3QsgNf.js";import"./ArrowDown-YyY6Rvxf.js";import"./InfoCircleLine-BOiNe5O3.js";const Ja={title:"Table",component:d,tags:["experimental"]},r=[{id:1,name:"Nik Lopin",email:"nik@example.com",role:"Admin",joined:"2024-01-01",manager:"Eliseo Juan Quintanilla",status:{label:"Active",variant:"positive"},selected:!1},{id:2,name:"Josep Jaume Rey",email:"jj@example.com",role:"User",joined:"2024-01-01",manager:"Eliseo Juan Quintanilla",status:{label:"Active",variant:"positive"},selected:!0},{id:3,name:"Saúl Domínguez",email:"saul@example.com",role:"Editor",joined:"2024-01-01",manager:"Eliseo Juan Quintanilla",status:{label:"Promoted",variant:"warning"},selected:!0},{id:4,name:"Desirée Navarro",email:"desi@example.com",role:"Editor",joined:"2024-01-01",manager:"René Galindo",status:{label:"Active",variant:"positive"},selected:!1}],x={render:()=>e.jsxs(d,{children:[e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(c,{children:r.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{firstName:a.name.split(" ")[0],lastName:a.name.split(" ")[1],size:"small"}),e.jsx("span",{className:"font-medium",children:a.name})]})}),e.jsx(l,{children:a.email}),e.jsx(l,{children:e.jsx("div",{className:"w-fit",children:e.jsx(y,{text:a.role})})}),e.jsx(l,{children:e.jsx("div",{className:"w-fit",children:e.jsx(u,{text:a.status.label,variant:a.status.variant})})})]},a.id))})]})},p={render:()=>{const[a,h]=ue.useState(()=>({[r[0].id]:!0,[r[2].id]:!0})),m=Object.values(a).filter(Boolean).length,k=m===r.length,i=m>0&&m<r.length,T=t=>{const b={};r.forEach(D=>{b[D.id]=t}),h(b)};return e.jsxs(d,{children:[e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(n,{width:"fit",children:e.jsx(S,{checked:k||i,indeterminate:i,onCheckedChange:T,title:"Select all",hideLabel:!0})}),e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(c,{children:r.map(t=>e.jsxs(s,{selected:a[t.id],children:[e.jsx(l,{children:e.jsx(S,{checked:!!a[t.id],onCheckedChange:b=>{h(D=>({...D,[t.id]:b}))},title:`Select ${t.name}`,hideLabel:!0})}),e.jsx(l,{children:t.name}),e.jsx(l,{children:t.email}),e.jsx(l,{children:t.role})]},t.id))})]})}},j={render:()=>e.jsxs(d,{children:[e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(n,{info:"Legal name of the employee",children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{info:"This is the current status of the employee",children:"Status"})]})}),e.jsx(c,{children:r.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{children:a.role})]},a.id))})]})},f={render:()=>{const[a,h]=E.useState({column:"name",order:"asc"}),m=i=>{h(T=>({column:i,order:T.column===i&&T.order==="asc"?"desc":"asc"}))},k=E.useMemo(()=>a.column?[...r].sort((i,T)=>{const t=i[a.column],b=T[a.column];return a.order==="asc"?t.localeCompare(b):b.localeCompare(t)}):r,[a]);return e.jsxs(d,{children:[e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(n,{onSortClick:()=>m("name"),sortState:a.column==="name"?a.order:void 0,children:"Name"}),e.jsx(n,{onSortClick:()=>m("email"),sortState:a.column==="email"?a.order:void 0,children:"Email"}),e.jsx(n,{onSortClick:()=>m("role"),sortState:a.column==="role"?a.order:void 0,children:"Status"})]})}),e.jsx(c,{children:k.map(i=>e.jsxs(s,{children:[e.jsx(l,{children:i.name}),e.jsx(l,{children:i.email}),e.jsx(l,{children:i.role})]},i.id))})]})}},C={render:()=>e.jsxs(d,{children:[e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(n,{sticky:!0,children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Joined"}),e.jsx(n,{children:"Manager"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(c,{children:r.map(a=>e.jsxs(s,{children:[e.jsx(l,{sticky:!0,children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{children:a.role}),e.jsx(l,{children:a.joined}),e.jsx(l,{children:a.manager}),e.jsx(l,{children:e.jsx("div",{className:"w-fit",children:e.jsx(u,{text:a.status.label,variant:a.status.variant})})}),e.jsx(l,{children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{children:a.role}),e.jsx(l,{children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{children:a.role}),e.jsx(l,{children:a.name}),e.jsx(l,{children:a.email}),e.jsx(l,{children:a.role})]},a.id))})]})},w={render:()=>e.jsx(d.Skeleton,{columns:3})},he=[{day:"Monday",productA:"1.200,00 €",productB:"850,00 €",productC:"1.500,00 €"},{day:"Tuesday",productA:"1.350,00 €",productB:"900,00 €",productC:"1.750,00 €"},{day:"Wednesday",productA:"1.500,00 €",productB:"1.000,00 €",productC:"1.600,00 €"},{day:"Thursday",productA:"1.400,00 €",productB:"950,00 €",productC:"1.700,00 €"},{day:"Friday",productA:"1.600,00 €",productB:"1.100,00 €",productC:"1.800,00 €"}],v={render:()=>e.jsxs(d,{children:[e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(n,{children:"Day"}),e.jsx(n,{children:e.jsx("div",{className:"w-full text-right",children:"Product A Sales"})}),e.jsx(n,{children:e.jsx("div",{className:"w-full text-right",children:"Product B Sales"})}),e.jsx(n,{children:e.jsx("div",{className:"w-full text-right",children:"Product C Sales"})})]})}),e.jsxs(c,{children:[he.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsx("span",{className:"font-medium",children:a.day})}),e.jsx(l,{children:e.jsx("div",{className:"w-full text-right tabular-nums",children:a.productA})}),e.jsx(l,{children:e.jsx("div",{className:"w-full text-right tabular-nums",children:a.productB})}),e.jsx(l,{children:e.jsx("div",{className:"w-full text-right tabular-nums",children:a.productC})})]},a.day)),e.jsxs(s,{children:[e.jsx(l,{children:e.jsx("span",{className:"font-medium",children:"Total"})}),e.jsx(l,{children:e.jsxs("div",{className:"flex w-full items-center justify-end gap-1",children:[e.jsx("span",{className:"text-f1-foreground-secondary",children:"sum"}),e.jsx("span",{className:"font-medium tabular-nums",children:"7.050,00 €"})]})}),e.jsx(l,{children:e.jsxs("div",{className:"flex w-full items-center justify-end gap-1",children:[e.jsx("span",{className:"text-f1-foreground-secondary",children:"sum"}),e.jsx("span",{className:"font-medium tabular-nums",children:"4.800,00 €"})]})}),e.jsx(l,{children:e.jsxs("div",{className:"flex w-full items-center justify-end gap-1",children:[e.jsx("span",{className:"text-f1-foreground-secondary",children:"sum"}),e.jsx("span",{className:"font-medium tabular-nums",children:"8.350,00 €"})]})})]})]})]})},H={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(c,{children:r.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{firstName:a.name.split(" ")[0],lastName:a.name.split(" ")[1],size:"small"}),e.jsx("span",{className:"font-medium",children:a.name})]})}),e.jsx(l,{children:a.email}),e.jsx(l,{children:e.jsx("div",{className:"w-fit",children:e.jsx(y,{text:a.role})})}),e.jsx(l,{children:e.jsx("div",{className:"w-fit",children:e.jsx(u,{text:a.status.label,variant:a.status.variant})})})]},a.id))})]}),e.jsxs("div",{className:"flex w-full items-center justify-between py-3",children:[e.jsx("span",{className:"shrink-0 text-f1-foreground-secondary",children:"1-4 of 100"}),e.jsx("div",{className:"flex items-center",children:e.jsx(Te,{totalPages:10,currentPage:1})})]})]})},N={render:()=>e.jsxs(d,{children:[e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"}),e.jsx(n,{width:"fit",hidden:!0,children:"Actions"})]})}),e.jsx(c,{children:r.map(a=>e.jsxs(s,{children:[e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{firstName:a.name.split(" ")[0],lastName:a.name.split(" ")[1],size:"small"}),e.jsx("span",{className:"font-medium",children:a.name})]})}),e.jsx(l,{children:a.email}),e.jsx(l,{children:e.jsx("div",{className:"w-fit",children:e.jsx(y,{text:a.role})})}),e.jsx(l,{children:e.jsx("div",{className:"w-fit",children:e.jsx(u,{text:a.status.label,variant:a.status.variant})})}),e.jsx(l,{children:e.jsx(oe,{items:[{label:"Edit",icon:be,onClick:()=>{}},{label:"Delete",icon:ce,onClick:()=>{},critical:!0}],children:e.jsx(de,{hideLabel:!0,variant:"ghost",icon:me,onClick:()=>{},round:!0,label:"Actions"})})})]},a.id))})]})},g={render:()=>e.jsxs(d,{children:[e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(n,{width:"fit",children:e.jsx(S,{checked:!1,title:"Select all",hideLabel:!0})}),e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"}),e.jsx(n,{width:"fit",hidden:!0,children:"Actions"})]})}),e.jsx(c,{children:r.map(a=>e.jsxs(s,{children:[e.jsx(l,{firstCell:!0,href:"/",children:e.jsx(S,{checked:!1,title:"Select",hideLabel:!0})}),e.jsx(l,{href:"/",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{firstName:a.name.split(" ")[0],lastName:a.name.split(" ")[1],size:"small"}),e.jsx("span",{className:"font-medium",children:a.name})]})}),e.jsx(l,{href:"/",children:a.email}),e.jsx(l,{href:"/",children:e.jsx("div",{className:"w-fit",children:e.jsx(y,{text:a.role})})}),e.jsx(l,{href:"/",children:e.jsx("div",{className:"w-fit",children:e.jsx(u,{text:a.status.label,variant:a.status.variant})})}),e.jsx(l,{href:"/",children:e.jsx(oe,{items:[{label:"Edit",icon:be,onClick:()=>{}},{label:"Delete",icon:ce,onClick:()=>{},critical:!0}],children:e.jsx(de,{hideLabel:!0,variant:"ghost",icon:me,onClick:()=>{},round:!0,label:"Actions"})})})]},a.id))})]})};var A,B,O;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <OneTable>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <PersonAvatar firstName={row.name.split(" ")[0]} lastName={row.name.split(" ")[1]} size="small" />
                <span className="font-medium">{row.name}</span>
              </div>
            </TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>
              <div className="w-fit">
                <RawTag text={row.role} />
              </div>
            </TableCell>
            <TableCell>
              <div className="w-fit">
                <StatusTag text={row.status.label} variant={row.status.variant} />
              </div>
            </TableCell>
          </TableRow>)}
      </TableBody>
    </OneTable>
}`,...(O=(B=x.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var P,L,F;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>(() => ({
      [sampleData[0].id]: true,
      [sampleData[2].id]: true
    }));
    const selectedCount = Object.values(selectedRows).filter(Boolean).length;
    const isAllSelected = selectedCount === sampleData.length;
    const isPartiallySelected = selectedCount > 0 && selectedCount < sampleData.length;
    const handleSelectAll = (checked: boolean) => {
      const newSelected = {} as Record<string, boolean>;
      sampleData.forEach(row => {
        newSelected[row.id] = checked;
      });
      setSelectedRows(newSelected);
    };
    return <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead width="fit">
              <Checkbox checked={isAllSelected || isPartiallySelected} indeterminate={isPartiallySelected} onCheckedChange={handleSelectAll} title="Select all" hideLabel />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map(row => <TableRow key={row.id} selected={selectedRows[row.id]}>
              <TableCell>
                <Checkbox checked={!!selectedRows[row.id]} onCheckedChange={checked => {
              setSelectedRows(prev => ({
                ...prev,
                [row.id]: checked
              }));
            }} title={\`Select \${row.name}\`} hideLabel />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </OneTable>;
  }
}`,...(F=(L=p.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var z,V,J;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <OneTable>
      <TableHeader>
        <TableRow>
          <TableHead info="Legal name of the employee">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead info="This is the current status of the employee">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </OneTable>
}`,...(J=(V=j.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var M,$,Q;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [sortConfig, setSortConfig] = React.useState<{
      column: SortColumn | null;
      order: SortState;
    }>({
      column: "name",
      order: "asc"
    });
    const handleSort = (column: SortColumn) => {
      setSortConfig(current => ({
        column,
        order: current.column === column ? current.order === "asc" ? "desc" : "asc" : "asc"
      }));
    };
    const sortedData = React.useMemo(() => {
      if (!sortConfig.column) return sampleData;
      return [...sampleData].sort((a, b) => {
        const aValue = a[sortConfig.column!];
        const bValue = b[sortConfig.column!];
        return sortConfig.order === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      });
    }, [sortConfig]);
    return <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead onSortClick={() => handleSort("name")} sortState={sortConfig.column === "name" ? sortConfig.order : undefined}>
              Name
            </TableHead>
            <TableHead onSortClick={() => handleSort("email")} sortState={sortConfig.column === "email" ? sortConfig.order : undefined}>
              Email
            </TableHead>
            <TableHead onSortClick={() => handleSort("role")} sortState={sortConfig.column === "role" ? sortConfig.order : undefined}>
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map(row => <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </OneTable>;
  }
}`,...(Q=($=f.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var W,I,_;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <OneTable>
      <TableHeader>
        <TableRow>
          <TableHead sticky>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Joined</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell sticky>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.joined}</TableCell>
            <TableCell>{row.manager}</TableCell>
            <TableCell>
              <div className="w-fit">
                <StatusTag text={row.status.label} variant={row.status.variant} />
              </div>
            </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </OneTable>
}`,...(_=(I=C.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var G,U,q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <OneTable.Skeleton columns={3} />
}`,...(q=(U=w.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var K,X,Y;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <OneTable>
      <TableHeader>
        <TableRow>
          <TableHead>Day</TableHead>
          <TableHead>
            <div className="w-full text-right">Product A Sales</div>
          </TableHead>
          <TableHead>
            <div className="w-full text-right">Product B Sales</div>
          </TableHead>
          <TableHead>
            <div className="w-full text-right">Product C Sales</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {summatoryData.map(row => <TableRow key={row.day}>
            <TableCell>
              <span className="font-medium">{row.day}</span>
            </TableCell>
            <TableCell>
              <div className="w-full text-right tabular-nums">
                {row.productA}
              </div>
            </TableCell>
            <TableCell>
              <div className="w-full text-right tabular-nums">
                {row.productB}
              </div>
            </TableCell>
            <TableCell>
              <div className="w-full text-right tabular-nums">
                {row.productC}
              </div>
            </TableCell>
          </TableRow>)}
        <TableRow>
          <TableCell>
            <span className="font-medium">Total</span>
          </TableCell>
          <TableCell>
            <div className="flex w-full items-center justify-end gap-1">
              <span className="text-f1-foreground-secondary">sum</span>
              <span className="font-medium tabular-nums">7.050,00 €</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex w-full items-center justify-end gap-1">
              <span className="text-f1-foreground-secondary">sum</span>
              <span className="font-medium tabular-nums">4.800,00 €</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex w-full items-center justify-end gap-1">
              <span className="text-f1-foreground-secondary">sum</span>
              <span className="font-medium tabular-nums">8.350,00 €</span>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </OneTable>
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;H.parameters={...H.parameters,docs:{...(Z=H.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <>
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map(row => <TableRow key={row.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <PersonAvatar firstName={row.name.split(" ")[0]} lastName={row.name.split(" ")[1]} size="small" />
                  <span className="font-medium">{row.name}</span>
                </div>
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <div className="w-fit">
                  <RawTag text={row.role} />
                </div>
              </TableCell>
              <TableCell>
                <div className="w-fit">
                  <StatusTag text={row.status.label} variant={row.status.variant} />
                </div>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </OneTable>
      <div className="flex w-full items-center justify-between py-3">
        <span className="shrink-0 text-f1-foreground-secondary">
          1-4 of 100
        </span>
        <div className="flex items-center">
          <OnePagination totalPages={10} currentPage={1} />
        </div>
      </div>
    </>
}`,...(ae=(ee=H.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,ne,se;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <OneTable>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead width="fit" hidden>
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <PersonAvatar firstName={row.name.split(" ")[0]} lastName={row.name.split(" ")[1]} size="small" />
                <span className="font-medium">{row.name}</span>
              </div>
            </TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>
              <div className="w-fit">
                <RawTag text={row.role} />
              </div>
            </TableCell>
            <TableCell>
              <div className="w-fit">
                <StatusTag text={row.status.label} variant={row.status.variant} />
              </div>
            </TableCell>
            <TableCell>
              <Dropdown items={[{
            label: "Edit",
            icon: Pencil,
            onClick: () => {}
          }, {
            label: "Delete",
            icon: Delete,
            onClick: () => {},
            critical: true
          }]}>
                <Button hideLabel variant="ghost" icon={Ellipsis} onClick={() => {}} round label="Actions" />
              </Dropdown>
            </TableCell>
          </TableRow>)}
      </TableBody>
    </OneTable>
}`,...(se=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,te,ie;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <OneTable>
      <TableHeader>
        <TableRow>
          <TableHead width="fit">
            <Checkbox checked={false} title="Select all" hideLabel />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead width="fit" hidden>
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell firstCell href="/">
              <Checkbox checked={false} title="Select" hideLabel />
            </TableCell>
            <TableCell href="/">
              <div className="flex items-center gap-2">
                <PersonAvatar firstName={row.name.split(" ")[0]} lastName={row.name.split(" ")[1]} size="small" />
                <span className="font-medium">{row.name}</span>
              </div>
            </TableCell>
            <TableCell href="/">{row.email}</TableCell>
            <TableCell href="/">
              <div className="w-fit">
                <RawTag text={row.role} />
              </div>
            </TableCell>
            <TableCell href="/">
              <div className="w-fit">
                <StatusTag text={row.status.label} variant={row.status.variant} />
              </div>
            </TableCell>
            <TableCell href="/">
              <Dropdown items={[{
            label: "Edit",
            icon: Pencil,
            onClick: () => {}
          }, {
            label: "Delete",
            icon: Delete,
            onClick: () => {},
            critical: true
          }]}>
                <Button hideLabel variant="ghost" icon={Ellipsis} onClick={() => {}} round label="Actions" />
              </Dropdown>
            </TableCell>
          </TableRow>)}
      </TableBody>
    </OneTable>
}`,...(ie=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const Ma=["Default","Check","InfoHeader","Sortable","StickyColumn","Skeleton","Summatory","Footer","Actions","WithLinks"];export{N as Actions,p as Check,x as Default,H as Footer,j as InfoHeader,w as Skeleton,f as Sortable,C as StickyColumn,v as Summatory,g as WithLinks,Ma as __namedExportsOrder,Ja as default};
