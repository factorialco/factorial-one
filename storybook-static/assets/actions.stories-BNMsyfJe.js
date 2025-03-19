import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{F as n}from"./Save-B3VvXevP.js";import{F as x}from"./Ai-BZ7CWqdH.js";import{F as g}from"./ArrowRight-BUhLMLAY.js";import{F as h}from"./Download-dZY34nmz.js";import{F as v}from"./Pencil-B6sRWFIu.js";import{F as S,a as D}from"./Table-BAD0IT6Z.js";import{u as d,D as u}from"./index-DDdGrGDE.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-Bh5LNwUX.js";import"./index-CXxsC3ng.js";import"./index-Blak80_u.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./index-B2OpD_bL.js";import"./index-DrJ36aH6.js";import"./Reset-X8BOYMzq.js";import"./i18n-provider-DLZYpdh4.js";import"./index-C2I-PfoO.js";import"./ChevronDown-LBI9f9x4.js";import"./popover-BqXImKWO.js";import"./index-DW48STyt.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-7k9rgiuw.js";import"./index-BNL5Yqmu.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-BL6sZKvk.js";import"./skeleton-BQT1AIt_.js";import"./index-Bw8Q85K6.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./Search-DyMYdF6H.js";import"./input-BTRPgdqa.js";import"./InFilter-Buwt2jJ3.js";import"./index-Dx7Y6k44.js";import"./checkbox-BkoZAF6b.js";import"./Check-FJXU9bTg.js";import"./Minus-CDz936Bf.js";import"./index-D15UBmr5.js";import"./index-Dy8WLFmQ.js";import"./index-DrkntLAK.js";import"./index-C5N-cZbj.js";import"./index-BKeKnJdY.js";import"./Sliders-CAPe_jzK.js";import"./card-B_wFt02l.js";import"./ChevronRight-zM-ePXcJ.js";import"./InfoCircleLine-BOiNe5O3.js";import"./linkHandler-fUi2qCbR.js";import"./tooltip-D2WqQ3hx.js";import"./index-Cl3QsgNf.js";import"./index-CiVFoefN.js";import"./ChevronLeft-D47n-iX-.js";import"./EllipsisHorizontal-CXMIya4N.js";import"./index-B79dpo_y.js";import"./index-3YeXfHId.js";import"./index-Bmycdo5-.js";import"./index-BiB69Vyw.js";import"./index-qX83RIrM.js";import"./chevron-right-CmdJHgzf.js";import"./createLucideIcon-DSAetUgs.js";import"./exports-IwKL35tc.js";import"./component-BI8hiL87.js";import"./scrollarea-CRia_fH-.js";import"./index-BdQq_4o_.js";import"./Ellipsis-BFYYAK1r.js";import"./index-ReJqEmKK.js";import"./skeleton-BYaQrqsT.js";import"./index-Ci88gSgP.js";import"./index-XjqIyxWy.js";import"./Windows-juRZgWzJ.js";import"./UserPlatformProvider-CL37nBDW.js";import"./ArrowDown-YyY6Rvxf.js";const st={title:"Data Collection/Actions",parameters:{layout:"padded"}},f=[{id:"user-1",name:"John Doe",email:"john@example.com",role:"Senior Engineer",department:"Engineering",status:"active",isStarred:!0,permissions:{canEdit:!0,canDelete:!0,canShare:!0}},{id:"user-2",name:"Jane Smith",email:"jane@example.com",role:"Product Manager",department:"Product",status:"active",isStarred:!1,permissions:{canEdit:!0,canDelete:!1,canShare:!0}},{id:"user-3",name:"Bob Johnson",email:"bob@example.com",role:"Designer",department:"Design",status:"inactive",isStarred:!1,permissions:{canEdit:!1,canDelete:!1,canShare:!0}},{id:"user-4",name:"Alice Williams",email:"alice@example.com",role:"Marketing Lead",department:"Marketing",status:"active",isStarred:!0,permissions:{canEdit:!0,canDelete:!0,canShare:!1}}],b=()=>t=>[{label:"View Profile",icon:x,onClick:()=>console.log(`Viewing ${t.name}'s profile`)},{label:"Edit User",icon:v,onClick:()=>console.log(`Editing ${t.name}`),description:"Modify user information",enabled:t.permissions.canEdit},"separator",{label:t.isStarred?"Remove Star":"Add Star",icon:S,onClick:()=>console.log(`Toggling star for ${t.name}`),description:t.isStarred?"Remove from favorites":"Add to favorites"},{label:"Share User",icon:D,onClick:()=>console.log(`Sharing ${t.name}`),enabled:t.permissions.canShare},...t.status==="active"?[{label:"Deactivate User",icon:n,onClick:()=>console.log(`Deactivating ${t.name}`),description:"Temporarily disable account"}]:[{label:"Activate User",icon:g,onClick:()=>console.log(`Activating ${t.name}`),description:"Re-enable account"}],{label:"Delete Permanently",icon:n,onClick:()=>{confirm(`Are you sure you want to delete ${t.name}?`)&&console.log(`Deleting ${t.name}`)},critical:!0,description:"This action cannot be undone",enabled:t.permissions.canDelete},{label:"Download Data",icon:h,onClick:()=>{console.log(`Downloading data for ${t.name}`)},enabled:t.status==="active"}],a={render:()=>{const t=d({dataAdapter:{fetchData:()=>Promise.resolve(f)},actions:b()});return r.jsxs("div",{className:"space-y-8",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"mb-2 text-xl font-semibold",children:"Actions Example"}),r.jsx("p",{className:"mb-4 text-f1-foreground-secondary",children:"This example demonstrates various types of actions that can be used in Collections. Click on the actions menu (three dots) to see the available actions for each user."})]}),r.jsx(u,{source:t,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>e.name},{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department},{label:"Status",render:e=>r.jsx("span",{className:`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${e.status==="active"?"bg-f1-background-success text-f1-foreground-success":"bg-f1-background-warning text-f1-foreground-warning"}`,children:e.status})}]}}]})]})}},o={render:()=>{const t=d({dataAdapter:{fetchData:()=>Promise.resolve(f)},actions:b()});return r.jsxs("div",{className:"space-y-8",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"mb-2 text-xl font-semibold",children:"Card Actions Example"}),r.jsx("p",{className:"mb-4 text-f1-foreground-secondary",children:"This example shows how actions work with card visualization."})]}),r.jsx(u,{source:t,visualizations:[{type:"card",options:{title:e=>e.name,cardProperties:[{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department},{label:"Status",render:e=>r.jsx("span",{className:`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${e.status==="active"?"bg-f1-background-success text-f1-foreground-success":"bg-f1-background-warning text-f1-foreground-warning"}`,children:e.status})}]}}]})]})}};var i,s,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const dataSource = useDataSource({
      dataAdapter: {
        fetchData: () => Promise.resolve(mockUsers)
      },
      actions: createUserActions()
    });
    return <div className="space-y-8">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Actions Example</h2>
          <p className="mb-4 text-f1-foreground-secondary">
            This example demonstrates various types of actions that can be used
            in Collections. Click on the actions menu (three dots) to see the
            available actions for each user.
          </p>
        </div>

        <DataCollection source={dataSource} visualizations={[{
        type: "table",
        options: {
          columns: [{
            label: "Name",
            render: item => item.name
          }, {
            label: "Email",
            render: item => item.email
          }, {
            label: "Role",
            render: item => item.role
          }, {
            label: "Department",
            render: item => item.department
          }, {
            label: "Status",
            render: item => <span className={\`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium \${item.status === "active" ? "bg-f1-background-success text-f1-foreground-success" : "bg-f1-background-warning text-f1-foreground-warning"}\`}>
                        {item.status}
                      </span>
          }]
        }
      }]} />
      </div>;
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const dataSource = useDataSource({
      dataAdapter: {
        fetchData: () => Promise.resolve(mockUsers)
      },
      actions: createUserActions()
    });
    return <div className="space-y-8">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Card Actions Example</h2>
          <p className="mb-4 text-f1-foreground-secondary">
            This example shows how actions work with card visualization.
          </p>
        </div>

        <DataCollection source={dataSource} visualizations={[{
        type: "card",
        options: {
          title: item => item.name,
          cardProperties: [{
            label: "Email",
            render: item => item.email
          }, {
            label: "Role",
            render: item => item.role
          }, {
            label: "Department",
            render: item => item.department
          }, {
            label: "Status",
            render: item => <span className={\`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium \${item.status === "active" ? "bg-f1-background-success text-f1-foreground-success" : "bg-f1-background-warning text-f1-foreground-warning"}\`}>
                        {item.status}
                      </span>
          }]
        }
      }]} />
      </div>;
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const mt=["BasicActionsExample","CardActionsExample"];export{a as BasicActionsExample,o as CardActionsExample,mt as __namedExportsOrder,st as default};
