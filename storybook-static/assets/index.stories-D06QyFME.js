import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{L as qe}from"./index-Ca0ib38l.js";import{F as P}from"./Save-B3VvXevP.js";import{F as w}from"./Ai-BZ7CWqdH.js";import{F as Ge}from"./ArrowRight-BUhLMLAY.js";import{F as He}from"./Download-dZY34nmz.js";import{F as k}from"./Pencil-B6sRWFIu.js";import{F as R,a as Ie}from"./Table-BAD0IT6Z.js";import{u as f,D as b,a as Ke,O as q}from"./index-DDdGrGDE.js";import"./index-yBjzXJbu.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./ExternalLink-Bgb90MI7.js";import"./linkHandler-fUi2qCbR.js";import"./index-Bh5LNwUX.js";import"./index-CXxsC3ng.js";import"./index-Blak80_u.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./index-B2OpD_bL.js";import"./index-DrJ36aH6.js";import"./Reset-X8BOYMzq.js";import"./i18n-provider-DLZYpdh4.js";import"./index-C2I-PfoO.js";import"./ChevronDown-LBI9f9x4.js";import"./popover-BqXImKWO.js";import"./index-DW48STyt.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-7k9rgiuw.js";import"./index-BNL5Yqmu.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-BL6sZKvk.js";import"./skeleton-BQT1AIt_.js";import"./index-Bw8Q85K6.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./Search-DyMYdF6H.js";import"./input-BTRPgdqa.js";import"./InFilter-Buwt2jJ3.js";import"./index-Dx7Y6k44.js";import"./checkbox-BkoZAF6b.js";import"./Check-FJXU9bTg.js";import"./Minus-CDz936Bf.js";import"./index-D15UBmr5.js";import"./index-Dy8WLFmQ.js";import"./index-DrkntLAK.js";import"./index-C5N-cZbj.js";import"./index-BKeKnJdY.js";import"./Sliders-CAPe_jzK.js";import"./card-B_wFt02l.js";import"./ChevronRight-zM-ePXcJ.js";import"./InfoCircleLine-BOiNe5O3.js";import"./tooltip-D2WqQ3hx.js";import"./index-Cl3QsgNf.js";import"./index-CiVFoefN.js";import"./ChevronLeft-D47n-iX-.js";import"./EllipsisHorizontal-CXMIya4N.js";import"./index-B79dpo_y.js";import"./index-3YeXfHId.js";import"./index-Bmycdo5-.js";import"./index-BiB69Vyw.js";import"./index-qX83RIrM.js";import"./chevron-right-CmdJHgzf.js";import"./createLucideIcon-DSAetUgs.js";import"./exports-IwKL35tc.js";import"./component-BI8hiL87.js";import"./scrollarea-CRia_fH-.js";import"./index-BdQq_4o_.js";import"./Ellipsis-BFYYAK1r.js";import"./index-ReJqEmKK.js";import"./skeleton-BYaQrqsT.js";import"./index-Ci88gSgP.js";import"./index-XjqIyxWy.js";import"./Windows-juRZgWzJ.js";import"./UserPlatformProvider-CL37nBDW.js";import"./ArrowDown-YyY6Rvxf.js";const C=["Engineering","Product","Design","Marketing"],D={search:{type:"search",label:"Search"},department:{type:"in",label:"Department",options:C.map(r=>({value:r,label:r}))}},h=[{label:"Engineering Team",filter:{department:["Engineering"]}},{label:"Product Team",filter:{department:["Product"]}},{label:"Design Team",filter:{department:["Design"]}},{label:"Marketing Team",filter:{department:["Marketing"]}}],A=[{id:"user-1",name:"John Doe",email:"john@example.com",role:"Senior Engineer",department:C[0],status:"active",isStarred:!0},{id:"user-2",name:"Jane Smith",email:"jane@example.com",role:"Product Manager",department:C[1],status:"active",isStarred:!1},{id:"user-3",name:"Bob Johnson",email:"bob@example.com",role:"Designer",department:C[2],status:"inactive",isStarred:!1},{id:"user-4",name:"Alice Williams",email:"alice@example.com",role:"Marketing Lead",department:C[3],status:"active",isStarred:!0}],G=(r,e,n,t)=>{let p=[...r];const u=e.search;if(typeof u=="string"){const l=u.toLowerCase();p=p.filter(a=>a.name.toLowerCase().includes(l)||a.email.toLowerCase().includes(l))}n&&(p=p.sort((l,a)=>{const o=l[n.field],i=a[n.field];return typeof o=="string"&&typeof i=="string"?n.order==="asc"?o.localeCompare(i):i.localeCompare(o):typeof o=="number"&&typeof i=="number"?n.order==="asc"?o-i:i-o:typeof o=="boolean"&&typeof i=="boolean"?n.order==="asc"?o===i?0:o?1:-1:o===i?0:o?-1:1:n.order==="asc"?String(o).localeCompare(String(i)):String(i).localeCompare(String(o))}));const g=e.department;return Array.isArray(g)&&g.length>0&&(p=p.filter(l=>g.some(a=>a===l.department))),t&&(p=p.filter(l=>l.name.toLowerCase().includes(t.toLowerCase())||l.email.toLowerCase().includes(t.toLowerCase()))),p},Qe=(r=0)=>({filters:e,sortings:n})=>new q(t=>{t.next({loading:!0,error:null,data:null});const p=setTimeout(()=>{t.next({loading:!1,error:null,data:G(A,e,n)}),t.complete()},r);return()=>clearTimeout(p)}),E=(r=500)=>({filters:e,sortings:n,search:t})=>new Promise(p=>{setTimeout(()=>{p(G(A,e,n,t))},r)}),_e=({useObservable:r=!1,usePresets:e=!1})=>{const n=f({filters:D,presets:e?h:void 0,sortings:y,actions:t=>[{label:"Edit",icon:k,onClick:()=>console.log(`Editing ${t.name}`),description:"Modify user information"},{label:"View Profile",icon:w,onClick:()=>console.log(`Viewing ${t.name}'s profile`)},"separator",{label:t.isStarred?"Remove Star":"Star User",icon:R,onClick:()=>console.log(`Toggling star for ${t.name}`),description:t.isStarred?"Remove from favorites":"Add to favorites"},{label:"Delete",icon:P,onClick:()=>console.log(`Deleting ${t.name}`),critical:!0,description:"Permanently remove user",enabled:t.department==="Engineering"&&t.status==="active"}],dataAdapter:{fetchData:r?Qe():E()}});return s.jsx("div",{className:"space-y-4",children:s.jsx(b,{source:n,visualizations:[{type:"table",options:{columns:[{label:"Name",render:t=>t.name,sorting:"name"},{label:"Email",render:t=>t.email,sorting:"email"},{label:"Role",render:t=>t.role,sorting:"role"},{label:"Department",render:t=>t.department,sorting:"department"}]}},{type:"card",options:{title:t=>t.name,cardProperties:[{label:"Email",render:t=>t.email},{label:"Role",render:t=>t.role},{label:"Department",render:t=>t.department}]}}]})})},Jr={title:"Data Collection/DataSource",component:_e,parameters:{layout:"padded"},argTypes:{useObservable:{control:"boolean",description:"Use Observable for data fetching"},usePresets:{control:"boolean",description:"Include filter presets"}}},$={render:()=>{const r=f({filters:D,presets:h,sortings:{name:{label:"Name"},email:{label:"Email"},role:{label:"Role"},department:{label:"Department"}},search:{enabled:!0},dataAdapter:{fetchData:E()},actions:e=>[{label:"Edit",icon:k,onClick:()=>console.log(`Editing ${e.name}`),description:"Modify user information"},{label:"View Profile",icon:w,onClick:()=>console.log(`Viewing ${e.name}'s profile`)},"separator",{label:e.isStarred?"Remove Star":"Star User",icon:R,onClick:()=>console.log(`Toggling star for ${e.name}`),description:e.isStarred?"Remove from favorites":"Add to favorites"},{label:"Delete",icon:P,onClick:()=>console.log(`Deleting ${e.name}`),critical:!0,description:"Permanently remove user",enabled:e.department==="Engineering"&&e.status==="active"}]});return s.jsx("div",{className:"space-y-4",children:s.jsx(b,{source:r,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>e.name,sorting:"name"},{label:"Email",render:e=>e.email,sorting:"email"},{label:"Role",render:e=>e.role,sorting:"role"},{label:"Department",render:e=>e.department,sorting:"department"}]}}]})})}},V={render:()=>{const r=f({filters:D,presets:h,itemUrl:e=>`/users/${e.id}`,sortings:{name:{label:"Name"},email:{label:"Email"},role:{label:"Role"},department:{label:"Department"}},dataAdapter:{fetchData:E()},actions:e=>[{label:"Edit",icon:k,onClick:()=>console.log(`Editing ${e.name}`),description:"Modify user information"},{label:"View Profile",icon:w,onClick:()=>console.log(`Viewing ${e.name}'s profile`)},"separator",{label:e.isStarred?"Remove Star":"Star User",icon:R,onClick:()=>console.log(`Toggling star for ${e.name}`),description:e.isStarred?"Remove from favorites":"Add to favorites"},{label:"Delete",icon:P,onClick:()=>console.log(`Deleting ${e.name}`),critical:!0,description:"Permanently remove user",enabled:e.department==="Engineering"&&e.status==="active"}]});return s.jsx("div",{className:"space-y-4",children:s.jsx(b,{source:r,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>e.name,sorting:"name"},{label:"Email",render:e=>e.email,sorting:"email"},{label:"Role",render:e=>e.role,sorting:"role"},{label:"Department",render:e=>e.department,sorting:"department"}]}},{type:"card",options:{title:e=>e.name,cardProperties:[{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department}]}}]})})}},L={render:()=>{const r=f({filters:D,sortings:y,presets:h,dataAdapter:{fetchData:E()},actions:e=>[{label:"Edit",icon:k,onClick:()=>console.log(`Editing ${e.name}`)},{label:"Share",icon:Ie,onClick:()=>console.log(`Sharing ${e.name}`)}]});return s.jsx(b,{source:r,visualizations:[{type:"card",options:{cardProperties:[{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department}],title:e=>e.name}}]})}},x={render:()=>{const r=f({filters:D,sortings:y,presets:h,dataAdapter:{fetchData:E()}});return s.jsx(b,{source:r,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>`👤  ${e.name}`,sorting:"name"},{label:"Email",render:e=>s.jsx(qe,{href:`mailto:${e.email}`,children:e.email}),sorting:"email"},{label:"Role",render:e=>`💼  ${e.role}`,sorting:"role"},{label:"Department",render:e=>`🏢 ${e.department}`,sorting:"department"}]}}]})}},T={render:()=>{const r=f({filters:D,sortings:y,presets:h,dataAdapter:{fetchData:E()}});return s.jsx(b,{source:r,visualizations:[{type:"card",options:{cardProperties:[{label:"Role",render:e=>e.role}],title:e=>e.name}}]})}},M={render:()=>s.jsx(_e,{})},N={render:()=>{const r=f({filters:D,sortings:y,presets:h,currentFilters:{department:["Engineering"]},dataAdapter:{fetchData:E()}});return s.jsx(b,{source:r,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>e.name},{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department}]}}]})}},y={name:{label:"Name"},email:{label:"Email"},department:{label:"Department"},role:{label:"Role"}},Ye=({source:r})=>{const{data:e,isLoading:n}=Ke(r);return n?s.jsx("pre",{className:"bg-muted overflow-auto rounded-lg p-4",children:s.jsx("code",{children:"Loading..."})}):s.jsx("pre",{className:"overflow-auto rounded-lg bg-f1-background-info p-4",children:s.jsx("code",{children:JSON.stringify(e,null,2)})})},F={render:()=>{const r=f({filters:D,sortings:y,presets:h,dataAdapter:{fetchData:E()}});return s.jsx(b,{source:r,visualizations:[{type:"custom",label:"JSON View",icon:w,component:({source:e})=>s.jsx(Ye,{source:e})},{type:"table",options:{columns:[{label:"Name",render:e=>e.name,sorting:"name"},{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department}]}},{type:"card",options:{cardProperties:[{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department}],title:e=>e.name}}]})}},z={render:()=>{const r=f({filters:D,sortings:y,defaultSorting:{field:"name",order:"asc"},presets:h,dataAdapter:X({data:A,delay:500})});return s.jsx(b,{source:r,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>e.name,sorting:"name"},{label:"Email",render:e=>e.email,sorting:"email"},{label:"Role",render:e=>e.role,sorting:"role"},{label:"Department",render:e=>e.department,sorting:"department"}]}}]})}};function X({data:r,delay:e=500,useObservable:n=!1,paginationType:t,perPage:p=10}){const u=(l,a,o,i)=>{let m=[...l];if("search"in a&&typeof a.search=="string"&&a.search.trim()!==""){const c=a.search.toLowerCase();m=m.filter(d=>d.name.toLowerCase().includes(c)||d.email.toLowerCase().includes(c))}if("department"in a&&Array.isArray(a.department)&&a.department.length>0&&(m=m.filter(c=>a.department.includes(c.department))),o){const c=o.field,d=o.order;m.sort((U,H)=>{const S=U[c],v=H[c];return typeof S=="string"&&typeof v=="string"?d==="asc"?S.localeCompare(v):v.localeCompare(S):typeof S=="number"&&typeof v=="number"?d==="asc"?S-v:v-S:typeof S=="boolean"&&typeof v=="boolean"?d==="asc"?S===v?0:S?1:-1:S===v?0:S?-1:1:d==="asc"?String(S).localeCompare(String(v)):String(v).localeCompare(String(S))})}if(i&&t==="pages"){const{currentPage:c=1}=i,d=i.perPage||p,U=(c-1)*d;return{records:m.slice(U,U+d),total:m.length,currentPage:c,perPage:d,pagesCount:Math.ceil(m.length/d)}}return m};return t==="pages"?{paginationType:"pages",perPage:p,fetchData:({filters:a,sortings:o,pagination:i})=>n?new q(m=>{m.next({loading:!0,error:null,data:null}),setTimeout(()=>{const c=()=>u(r,a,o,i);try{m.next({loading:!1,error:null,data:c()}),m.complete()}catch(d){m.next({loading:!1,error:d instanceof Error?d:new Error(String(d)),data:null}),m.complete()}},e)}):new Promise((m,c)=>{setTimeout(()=>{try{m(u(r,a,o,i))}catch(d){c(d)}},e)})}:{fetchData:({filters:l,sortings:a})=>n?new q(o=>{o.next({loading:!0,error:null,data:null}),setTimeout(()=>{try{const i=()=>u(r,l,a);o.next({loading:!1,error:null,data:i()}),o.complete()}catch(i){o.next({loading:!1,error:i instanceof Error?i:new Error(String(i)),data:null}),o.complete()}},e)}):new Promise((o,i)=>{setTimeout(()=>{try{o(u(r,l,a))}catch(m){i(m)}},e)})}}const j={render:()=>{const r=f({filters:D,presets:h,sortings:y,dataAdapter:X({data:A,delay:1e3,useObservable:!0})});return s.jsx(b,{source:r,visualizations:[{type:"card",options:{cardProperties:[{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department}],title:e=>e.name}}]})}},W={render:()=>{const r=f({filters:D,presets:h,sortings:y,dataAdapter:X({data:A,delay:500})});return s.jsx(b,{source:r,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>e.name,sorting:"name"},{label:"Email",render:e=>e.email,sorting:"email"},{label:"Role",render:e=>e.role,sorting:"role"},{label:"Department",render:e=>e.department,sorting:"department"}]}},{type:"card",options:{cardProperties:[{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department}],title:e=>e.name}}]})}},Xe=r=>Array.from({length:r}).map((e,n)=>({id:`user-${n+1}`,name:`User ${n+1}`,email:`user${n+1}@example.com`,role:n%3===0?"Engineer":n%3===1?"Designer":"Manager",department:C[n%C.length],status:n%5===0?"inactive":"active",isStarred:n%3===0,href:`/users/user-${n+1}`})),J={render:()=>{const r=Xe(50),e=f({filters:D,presets:h,sortings:y,dataAdapter:X({data:r,delay:500,paginationType:"pages",perPage:10})});return s.jsx(b,{source:e,visualizations:[{type:"table",options:{columns:[{label:"Name",render:n=>n.name,sorting:"name"},{label:"Email",render:n=>n.email,sorting:"email"},{label:"Role",render:n=>n.role,sorting:"role"},{label:"Department",render:n=>n.department,sorting:"department"}]}},{type:"card",options:{cardProperties:[{label:"Email",render:n=>n.email},{label:"Role",render:n=>n.role},{label:"Department",render:n=>n.department}],title:n=>n.name}}]})}},B={render:()=>{const r=f({filters:D,sortings:y,presets:h,dataAdapter:{fetchData:({filters:e,sortings:n})=>G(A,e,n)}});return s.jsx(b,{source:r,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>e.name,sorting:"name"},{label:"Email",render:e=>e.email,sorting:"email"},{label:"Role",render:e=>e.role,sorting:"role"},{label:"Department",render:e=>e.department,sorting:"department"}]}}]})}},O={render:()=>{const r=f({filters:D,sortings:y,presets:h,dataAdapter:{fetchData:E()},actions:e=>[{label:"View Details",icon:w,onClick:()=>console.log(`Viewing ${e.name}`),description:"See complete user information"},{label:"Edit",icon:k,onClick:()=>console.log(`Editing ${e.name}`)},"separator",...e.status==="active"?[{label:"Deactivate User",icon:P,onClick:()=>console.log(`Deactivating ${e.name}`),description:"Temporarily disable account"}]:[{label:"Activate User",icon:Ge,onClick:()=>console.log(`Activating ${e.name}`),description:"Re-enable account"}],{label:"Download Data",icon:He,onClick:()=>console.log(`Downloading data for ${e.name}`),enabled:e.status==="active"},{label:"Delete Permanently",icon:P,onClick:()=>{confirm(`Are you sure you want to delete ${e.name}?`)&&console.log(`Deleting ${e.name}`)},critical:!0,description:"This action cannot be undone",enabled:e.department==="Engineering"},{label:e.isStarred?"Remove Star":"Add Star",icon:R,onClick:()=>console.log(`Toggling star for ${e.name}`),description:e.isStarred?"Remove from favorites":"Add to favorites"},{label:"Duplicate User",icon:Ie,onClick:()=>console.log(`Duplicating ${e.name}`),description:"Create a copy of this user"}]});return s.jsx(b,{source:r,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>e.name,sorting:"name"},{label:"Email",render:e=>e.email,sorting:"email"},{label:"Role",render:e=>e.role,sorting:"role"},{label:"Department",render:e=>e.department,sorting:"department"},{label:"Status",render:e=>e.status}]}}]})}},I={render:()=>{const r=f({filters:D,sortings:y,search:{enabled:!0,sync:!0},dataAdapter:{fetchData:({filters:e,sortings:n,search:t})=>{let u=[...[{id:"user-1",name:"John Doe",email:"john@example.com",role:"Senior Engineer",department:C[0],status:"active",isStarred:!0},{id:"user-2",name:"Jane Smith",email:"jane@example.com",role:"Product Manager",department:C[1],status:"active",isStarred:!1},{id:"user-3",name:"Alice Johnson",email:"alice@example.com",role:"UX Designer",department:C[2],status:"active",isStarred:!1},{id:"user-4",name:"Bob Brown",email:"bob@example.com",role:"Developer",department:C[0],status:"inactive",isStarred:!0},{id:"user-5",name:"Emma Wilson",email:"emma@example.com",role:"Marketing Lead",department:C[3],status:"active",isStarred:!1}]];if(t){const l=t.toLowerCase();u=u.filter(a=>a.name.toLowerCase().includes(l)||a.email.toLowerCase().includes(l)||a.role.toLowerCase().includes(l)||a.department.toLowerCase().includes(l)),console.log(`Searching for: "${t}" - Found ${u.length} results`)}const g=e.department;if(g&&g.length>0&&(u=u.filter(l=>g.includes(l.department))),n){const l=n.field,a=n.order;u.sort((o,i)=>{const m=o[l],c=i[l];return typeof m=="string"&&typeof c=="string"?a==="asc"?m.localeCompare(c):c.localeCompare(m):0})}return u}}});return s.jsx(b,{source:r,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>e.name,sorting:"name"},{label:"Email",render:e=>e.email,sorting:"email"},{label:"Role",render:e=>e.role,sorting:"role"},{label:"Department",render:e=>e.department,sorting:"department"}]}},{type:"card",options:{title:e=>e.name,cardProperties:[{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department}]}}]})}},_={render:()=>{const r=f({filters:D,sortings:y,search:{enabled:!0,sync:!1,debounceTime:300},actions:e=>[{label:"Edit",icon:k,onClick:()=>console.log(`Editing ${e.name}`),description:"Modify user information"},{label:"View Profile",icon:w,onClick:()=>console.log(`Viewing ${e.name}'s profile`)},"separator",{label:e.isStarred?"Remove Star":"Star User",icon:R,onClick:()=>console.log(`Toggling star for ${e.name}`),description:e.isStarred?"Remove from favorites":"Add to favorites"}],dataAdapter:{fetchData:({filters:e,sortings:n,search:t})=>new Promise(p=>{setTimeout(()=>{let g=[...Xe(20)];if(t){const a=t.toLowerCase();g=g.filter(o=>o.name.toLowerCase().includes(a)||o.email.toLowerCase().includes(a)||o.role.toLowerCase().includes(a)||o.department.toLowerCase().includes(a)),console.log(`Async search for: "${t}" - Found ${g.length} results`)}const l=e.department;if(l&&l.length>0&&(g=g.filter(a=>l.includes(a.department))),n){const a=n.field,o=n.order;g.sort((i,m)=>{const c=i[a],d=m[a];return typeof c=="string"&&typeof d=="string"?o==="asc"?c.localeCompare(d):d.localeCompare(c):0})}p(g)},1e3)})}});return s.jsx(b,{source:r,visualizations:[{type:"table",options:{columns:[{label:"Name",render:e=>e.name,sorting:"name"},{label:"Email",render:e=>e.email,sorting:"email"},{label:"Role",render:e=>e.role,sorting:"role"},{label:"Department",render:e=>e.department,sorting:"department"}]}},{type:"card",options:{title:e=>e.name,cardProperties:[{label:"Email",render:e=>e.email},{label:"Role",render:e=>e.role},{label:"Department",render:e=>e.department}]}}]})}};var K,Q,Y;$.parameters={...$.parameters,docs:{...(K=$.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const dataSource = useDataSource({
      filters,
      presets: filterPresets,
      sortings: {
        name: {
          label: "Name"
        },
        email: {
          label: "Email"
        },
        role: {
          label: "Role"
        },
        department: {
          label: "Department"
        }
      },
      search: {
        enabled: true
      },
      dataAdapter: {
        fetchData: createPromiseDataFetch()
      },
      actions: item => [{
        label: "Edit",
        icon: Pencil,
        onClick: () => console.log(\`Editing \${item.name}\`),
        description: "Modify user information"
      }, {
        label: "View Profile",
        icon: Ai,
        onClick: () => console.log(\`Viewing \${item.name}'s profile\`)
      }, "separator", {
        label: item.isStarred ? "Remove Star" : "Star User",
        icon: Star,
        onClick: () => console.log(\`Toggling star for \${item.name}\`),
        description: item.isStarred ? "Remove from favorites" : "Add to favorites"
      }, {
        label: "Delete",
        icon: Delete,
        onClick: () => console.log(\`Deleting \${item.name}\`),
        critical: true,
        description: "Permanently remove user",
        enabled: item.department === "Engineering" && item.status === "active"
      }]
    });
    return <div className="space-y-4">
        <DataCollection source={dataSource} visualizations={[{
        type: "table",
        options: {
          columns: [{
            label: "Name",
            render: item => item.name,
            sorting: "name"
          }, {
            label: "Email",
            render: item => item.email,
            sorting: "email"
          }, {
            label: "Role",
            render: item => item.role,
            sorting: "role"
          }, {
            label: "Department",
            render: item => item.department,
            sorting: "department"
          }]
        }
      }]} />
      </div>;
  }
}`,...(Y=(Q=$.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const dataSource = useDataSource({
      filters,
      presets: filterPresets,
      itemUrl: item => \`/users/\${item.id}\`,
      sortings: {
        name: {
          label: "Name"
        },
        email: {
          label: "Email"
        },
        role: {
          label: "Role"
        },
        department: {
          label: "Department"
        }
      },
      dataAdapter: {
        fetchData: createPromiseDataFetch()
      },
      actions: item => [{
        label: "Edit",
        icon: Pencil,
        onClick: () => console.log(\`Editing \${item.name}\`),
        description: "Modify user information"
      }, {
        label: "View Profile",
        icon: Ai,
        onClick: () => console.log(\`Viewing \${item.name}'s profile\`)
      }, "separator", {
        label: item.isStarred ? "Remove Star" : "Star User",
        icon: Star,
        onClick: () => console.log(\`Toggling star for \${item.name}\`),
        description: item.isStarred ? "Remove from favorites" : "Add to favorites"
      }, {
        label: "Delete",
        icon: Delete,
        onClick: () => console.log(\`Deleting \${item.name}\`),
        critical: true,
        description: "Permanently remove user",
        enabled: item.department === "Engineering" && item.status === "active"
      }]
    });
    return <div className="space-y-4">
        <DataCollection source={dataSource} visualizations={[{
        type: "table",
        options: {
          columns: [{
            label: "Name",
            render: item => item.name,
            sorting: "name"
          }, {
            label: "Email",
            render: item => item.email,
            sorting: "email"
          }, {
            label: "Role",
            render: item => item.role,
            sorting: "role"
          }, {
            label: "Department",
            render: item => item.department,
            sorting: "department"
          }]
        }
      }, {
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
          }]
        }
      }]} />
      </div>;
  }
}`,...(ne=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,ae;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch()
      },
      actions: item => [{
        label: "Edit",
        icon: Pencil,
        onClick: () => console.log(\`Editing \${item.name}\`)
      }, {
        label: "Share",
        icon: Share,
        onClick: () => console.log(\`Sharing \${item.name}\`)
      }]
    });
    return <DataCollection source={dataSource} visualizations={[{
      type: "card",
      options: {
        cardProperties: [{
          label: "Email",
          render: item => item.email
        }, {
          label: "Role",
          render: item => item.role
        }, {
          label: "Department",
          render: item => item.department
        }],
        title: item => item.name
      }
    }]} />;
  }
}`,...(ae=(te=L.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ie,le;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch()
      }
    });
    return <DataCollection source={dataSource} visualizations={[{
      type: "table",
      options: {
        columns: [{
          label: "Name",
          render: item => \`👤  \${item.name}\`,
          sorting: "name"
        }, {
          label: "Email",
          render: item => <Link href={\`mailto:\${item.email}\`}>{item.email}</Link>,
          sorting: "email"
        }, {
          label: "Role",
          render: item => \`💼  \${item.role}\`,
          sorting: "role"
        }, {
          label: "Department",
          render: item => \`🏢 \${item.department}\`,
          sorting: "department"
        }]
      }
    }]} />;
  }
}`,...(le=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,me,ce;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch()
      }
    });
    return <DataCollection source={dataSource} visualizations={[{
      type: "card",
      options: {
        cardProperties: [{
          label: "Role",
          render: item => item.role
        }],
        title: item => item.name
      }
    }]} />;
  }
}`,...(ce=(me=T.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,pe,ue;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <ExampleComponent />
}`,...(ue=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,fe,be;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      currentFilters: {
        department: ["Engineering"]
      },
      dataAdapter: {
        fetchData: createPromiseDataFetch()
      }
    });
    return <DataCollection source={dataSource} visualizations={[{
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
        }]
      }
    }]} />;
  }
}`,...(be=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var De,he,ye;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const dataSource = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch()
      }
    });
    return <DataCollection source={dataSource} visualizations={[{
      type: "custom",
      label: "JSON View",
      icon: Ai,
      component: ({
        source
      }) => <JsonVisualization source={source} />
    }, {
      type: "table",
      options: {
        columns: [{
          label: "Name",
          render: item => item.name,
          sorting: "name"
        }, {
          label: "Email",
          render: item => item.email
        }, {
          label: "Role",
          render: item => item.role
        }, {
          label: "Department",
          render: item => item.department
        }]
      }
    }, {
      type: "card",
      options: {
        cardProperties: [{
          label: "Email",
          render: item => item.email
        }, {
          label: "Role",
          render: item => item.role
        }, {
          label: "Department",
          render: item => item.department
        }],
        title: item => item.name
      }
    }]} />;
  }
}`,...(ye=(he=F.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Se,Ce,ve;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const source = useDataSource({
      filters,
      sortings,
      defaultSorting: {
        field: "name",
        order: "asc"
      },
      presets: filterPresets,
      dataAdapter: createDataAdapter<(typeof mockUsers)[number], typeof filters, typeof sortings>({
        data: mockUsers,
        delay: 500
      })
    });
    return <DataCollection source={source} visualizations={[{
      type: "table",
      options: {
        columns: [{
          label: "Name",
          render: item => item.name,
          sorting: "name"
        }, {
          label: "Email",
          render: item => item.email,
          sorting: "email"
        }, {
          label: "Role",
          render: item => item.role,
          sorting: "role"
        }, {
          label: "Department",
          render: item => item.department,
          sorting: "department"
        }]
      }
    }]} />;
  }
}`,...(ve=(Ce=z.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var Ee,we,ke;j.parameters={...j.parameters,docs:{...(Ee=j.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const source = useDataSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: createDataAdapter<(typeof mockUsers)[number], typeof filters, typeof sortings>({
        data: mockUsers,
        delay: 1000,
        useObservable: true
      })
    });
    return <DataCollection source={source} visualizations={[{
      type: "card",
      options: {
        cardProperties: [{
          label: "Email",
          render: item => item.email
        }, {
          label: "Role",
          render: item => item.role
        }, {
          label: "Department",
          render: item => item.department
        }],
        title: item => item.name
      }
    }]} />;
  }
}`,...(ke=(we=j.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Ae,Pe,Re;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const source = useDataSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: createDataAdapter<(typeof mockUsers)[number], typeof filters, typeof sortings>({
        data: mockUsers,
        delay: 500
      })
    });
    return <DataCollection source={source} visualizations={[{
      type: "table",
      options: {
        columns: [{
          label: "Name",
          render: item => item.name,
          sorting: "name"
        }, {
          label: "Email",
          render: item => item.email,
          sorting: "email"
        }, {
          label: "Role",
          render: item => item.role,
          sorting: "role"
        }, {
          label: "Department",
          render: item => item.department,
          sorting: "department"
        }]
      }
    }, {
      type: "card",
      options: {
        cardProperties: [{
          label: "Email",
          render: item => item.email
        }, {
          label: "Role",
          render: item => item.role
        }, {
          label: "Department",
          render: item => item.department
        }],
        title: item => item.name
      }
    }]} />;
  }
}`,...(Re=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Ue,$e,Ve;J.parameters={...J.parameters,docs:{...(Ue=J.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => {
    // Create a fixed set of paginated users so we're not regenerating them on every render
    const paginatedMockUsers = generateMockUsers(50);
    const source = useDataSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: createDataAdapter<(typeof mockUsers)[number], typeof filters, typeof sortings>({
        data: paginatedMockUsers,
        delay: 500,
        paginationType: "pages",
        perPage: 10
      })
    });
    return <DataCollection source={source} visualizations={[{
      type: "table",
      options: {
        columns: [{
          label: "Name",
          render: item => item.name,
          sorting: "name"
        }, {
          label: "Email",
          render: item => item.email,
          sorting: "email"
        }, {
          label: "Role",
          render: item => item.role,
          sorting: "role"
        }, {
          label: "Department",
          render: item => item.department,
          sorting: "department"
        }]
      }
    }, {
      type: "card",
      options: {
        cardProperties: [{
          label: "Email",
          render: item => item.email
        }, {
          label: "Role",
          render: item => item.role
        }, {
          label: "Department",
          render: item => item.department
        }],
        title: item => item.name
      }
    }]} />;
  }
}`,...(Ve=($e=J.parameters)==null?void 0:$e.docs)==null?void 0:Ve.source}}};var Le,xe,Te;B.parameters={...B.parameters,docs:{...(Le=B.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const source = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: ({
          filters,
          sortings
        }) => {
          // Ensure sortings are properly applied
          return filterUsers(mockUsers, filters, sortings);
        }
      }
    });
    return <DataCollection source={source} visualizations={[{
      type: "table",
      options: {
        columns: [{
          label: "Name",
          render: item => item.name,
          sorting: "name"
        }, {
          label: "Email",
          render: item => item.email,
          sorting: "email"
        }, {
          label: "Role",
          render: item => item.role,
          sorting: "role"
        }, {
          label: "Department",
          render: item => item.department,
          sorting: "department"
        }]
      }
    }]} />;
  }
}`,...(Te=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Me,Ne,Fe;O.parameters={...O.parameters,docs:{...(Me=O.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => {
    const source = useDataSource({
      filters,
      sortings,
      presets: filterPresets,
      dataAdapter: {
        fetchData: createPromiseDataFetch()
      },
      actions: item => [
      // Basic actions
      {
        label: "View Details",
        icon: Ai,
        onClick: () => console.log(\`Viewing \${item.name}\`),
        description: "See complete user information"
      }, {
        label: "Edit",
        icon: Pencil,
        onClick: () => console.log(\`Editing \${item.name}\`)
      }, "separator",
      // Conditional actions based on item state
      ...(item.status === "active" ? [{
        label: "Deactivate User",
        icon: Delete,
        onClick: () => console.log(\`Deactivating \${item.name}\`),
        description: "Temporarily disable account"
      } as const] : [{
        label: "Activate User",
        icon: ArrowRight,
        onClick: () => console.log(\`Activating \${item.name}\`),
        description: "Re-enable account"
      } as const]),
      // Conditional visibility
      {
        label: "Download Data",
        icon: Download,
        onClick: () => console.log(\`Downloading data for \${item.name}\`),
        enabled: item.status === "active"
      },
      // Critical action with confirmation
      {
        label: "Delete Permanently",
        icon: Delete,
        onClick: () => {
          if (confirm(\`Are you sure you want to delete \${item.name}?\`)) {
            console.log(\`Deleting \${item.name}\`);
          }
        },
        critical: true,
        description: "This action cannot be undone",
        enabled: item.department === "Engineering"
      },
      // Toggle action
      {
        label: item.isStarred ? "Remove Star" : "Add Star",
        icon: Star,
        onClick: () => console.log(\`Toggling star for \${item.name}\`),
        description: item.isStarred ? "Remove from favorites" : "Add to favorites"
      },
      // Copy action
      {
        label: "Duplicate User",
        icon: Share,
        onClick: () => console.log(\`Duplicating \${item.name}\`),
        description: "Create a copy of this user"
      }]
    });
    return <DataCollection source={source} visualizations={[{
      type: "table",
      options: {
        columns: [{
          label: "Name",
          render: item => item.name,
          sorting: "name"
        }, {
          label: "Email",
          render: item => item.email,
          sorting: "email"
        }, {
          label: "Role",
          render: item => item.role,
          sorting: "role"
        }, {
          label: "Department",
          render: item => item.department,
          sorting: "department"
        }, {
          label: "Status",
          render: item => item.status
        }]
      }
    }]} />;
  }
}`,...(Fe=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.source}}};var ze,je,We;I.parameters={...I.parameters,docs:{...(ze=I.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const source = useDataSource({
      filters,
      sortings,
      search: {
        enabled: true,
        // Set sync to true to see immediate search results without debounce
        sync: true
      },
      dataAdapter: {
        fetchData: ({
          filters,
          sortings,
          search
        }) => {
          // Store mock data in a local variable for filtering
          const mockUserData = [{
            id: "user-1",
            name: "John Doe",
            email: "john@example.com",
            role: "Senior Engineer",
            department: DEPARTMENTS[0],
            status: "active",
            isStarred: true
          }, {
            id: "user-2",
            name: "Jane Smith",
            email: "jane@example.com",
            role: "Product Manager",
            department: DEPARTMENTS[1],
            status: "active",
            isStarred: false
          }, {
            id: "user-3",
            name: "Alice Johnson",
            email: "alice@example.com",
            role: "UX Designer",
            department: DEPARTMENTS[2],
            status: "active",
            isStarred: false
          }, {
            id: "user-4",
            name: "Bob Brown",
            email: "bob@example.com",
            role: "Developer",
            department: DEPARTMENTS[0],
            status: "inactive",
            isStarred: true
          }, {
            id: "user-5",
            name: "Emma Wilson",
            email: "emma@example.com",
            role: "Marketing Lead",
            department: DEPARTMENTS[3],
            status: "active",
            isStarred: false
          }];

          // Apply search filter if search term is provided
          let filteredUsers = [...mockUserData];
          if (search) {
            const searchLower = search.toLowerCase();
            filteredUsers = filteredUsers.filter(user => user.name.toLowerCase().includes(searchLower) || user.email.toLowerCase().includes(searchLower) || user.role.toLowerCase().includes(searchLower) || user.department.toLowerCase().includes(searchLower));
            console.log(\`Searching for: "\${search}" - Found \${filteredUsers.length} results\`);
          }

          // Apply department filter if provided
          const departmentFilter = filters.department as string[] | undefined;
          if (departmentFilter && departmentFilter.length > 0) {
            filteredUsers = filteredUsers.filter(user => departmentFilter.includes(user.department));
          }

          // Apply sorting if provided
          if (sortings) {
            const field = sortings.field as keyof (typeof mockUserData)[0];
            const direction = sortings.order;
            filteredUsers.sort((a, b) => {
              const aValue = a[field];
              const bValue = b[field];
              if (typeof aValue === "string" && typeof bValue === "string") {
                return direction === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
              }
              return 0;
            });
          }
          return filteredUsers;
        }
      }
    });
    return <DataCollection source={source} visualizations={[{
      type: "table",
      options: {
        columns: [{
          label: "Name",
          render: item => item.name,
          sorting: "name"
        }, {
          label: "Email",
          render: item => item.email,
          sorting: "email"
        }, {
          label: "Role",
          render: item => item.role,
          sorting: "role"
        }, {
          label: "Department",
          render: item => item.department,
          sorting: "department"
        }]
      }
    }, {
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
        }]
      }
    }]} />;
  }
}`,...(We=(je=I.parameters)==null?void 0:je.docs)==null?void 0:We.source}}};var Je,Be,Oe;_.parameters={..._.parameters,docs:{...(Je=_.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => {
    type MockUser = (typeof mockUsers)[number];
    type MockActions = ActionsDefinition<MockUser>;
    const source = useDataSource<MockUser, typeof filters, typeof sortings, MockActions>({
      filters,
      sortings,
      search: {
        enabled: true,
        // Set sync to false to simulate async search with debounce
        sync: false,
        // Set debounce time to 300ms
        debounceTime: 300
      },
      actions: item => [{
        label: "Edit",
        icon: Pencil,
        onClick: () => console.log(\`Editing \${item.name}\`),
        description: "Modify user information"
      }, {
        label: "View Profile",
        icon: Ai,
        onClick: () => console.log(\`Viewing \${item.name}'s profile\`)
      }, "separator", {
        label: item.isStarred ? "Remove Star" : "Star User",
        icon: Star,
        onClick: () => console.log(\`Toggling star for \${item.name}\`),
        description: item.isStarred ? "Remove from favorites" : "Add to favorites"
      }],
      dataAdapter: {
        fetchData: ({
          filters,
          sortings,
          search
        }) => {
          // Simulate an API call with a delay
          return new Promise(resolve => {
            setTimeout(() => {
              const mockUserData = generateMockUsers(20);
              let filteredUsers = [...mockUserData];
              if (search) {
                const searchLower = search.toLowerCase();
                filteredUsers = filteredUsers.filter(user => user.name.toLowerCase().includes(searchLower) || user.email.toLowerCase().includes(searchLower) || user.role.toLowerCase().includes(searchLower) || user.department.toLowerCase().includes(searchLower));
                console.log(\`Async search for: "\${search}" - Found \${filteredUsers.length} results\`);
              }

              // Apply department filter if provided
              const departmentFilter = filters.department as string[] | undefined;
              if (departmentFilter && departmentFilter.length > 0) {
                filteredUsers = filteredUsers.filter(user => departmentFilter.includes(user.department));
              }

              // Apply sorting if provided
              if (sortings) {
                const field = sortings.field as keyof MockUser;
                const direction = sortings.order;
                filteredUsers.sort((a, b) => {
                  const aValue = a[field];
                  const bValue = b[field];
                  if (typeof aValue === "string" && typeof bValue === "string") {
                    return direction === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                  }
                  return 0;
                });
              }
              resolve(filteredUsers);
            }, 1000); // Simulate 1 second delay for API response
          });
        }
      }
    });
    return <DataCollection source={source} visualizations={[{
      type: "table",
      options: {
        columns: [{
          label: "Name",
          render: (item: MockUser) => item.name,
          sorting: "name"
        }, {
          label: "Email",
          render: (item: MockUser) => item.email,
          sorting: "email"
        }, {
          label: "Role",
          render: (item: MockUser) => item.role,
          sorting: "role"
        }, {
          label: "Department",
          render: (item: MockUser) => item.department,
          sorting: "department"
        }]
      }
    }, {
      type: "card",
      options: {
        title: (item: MockUser) => item.name,
        cardProperties: [{
          label: "Email",
          render: (item: MockUser) => item.email
        }, {
          label: "Role",
          render: (item: MockUser) => item.role
        }, {
          label: "Department",
          render: (item: MockUser) => item.department
        }]
      }
    }]} />;
  }
}`,...(Oe=(Be=_.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};const Br=["BasicTableView","WithLinkedItems","BasicCardView","ComponentsAsCells","CustomCardProperties","SwitchableVisualizations","WithPreselectedFilters","WithCustomJsonView","WithTableVisualization","WithCardVisualization","WithMultipleVisualizations","WithPagination","WithSynchronousData","WithAdvancedActions","WithSyncSearch","WithAsyncSearch"];export{L as BasicCardView,$ as BasicTableView,x as ComponentsAsCells,T as CustomCardProperties,M as SwitchableVisualizations,O as WithAdvancedActions,_ as WithAsyncSearch,j as WithCardVisualization,F as WithCustomJsonView,V as WithLinkedItems,W as WithMultipleVisualizations,J as WithPagination,N as WithPreselectedFilters,I as WithSyncSearch,B as WithSynchronousData,z as WithTableVisualization,Br as __namedExportsOrder,Jr as default};
