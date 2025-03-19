import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{f as h}from"./index-DuopzoTV.js";import{r as t}from"./index-B6o7_jwP.js";import{A as E}from"./index-DO6oHkvw.js";import{a as v}from"./avatar-Cgym3e8O.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./popover-BqXImKWO.js";import"./index-DW48STyt.js";import"./index-B7GDqc_s.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-7k9rgiuw.js";import"./index-BNL5Yqmu.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-BL6sZKvk.js";import"./index-Bh5LNwUX.js";import"./exports-IwKL35tc.js";import"./component-BI8hiL87.js";import"./index-Cwk_nZHn.js";import"./scrollarea-CRia_fH-.js";import"./index-BiB69Vyw.js";import"./index-BdQq_4o_.js";import"./index-B0SOT-3H.js";import"./index-BobS88kg.js";import"./button-CZujocQw.js";import"./index-rQB-1XLh.js";import"./index-CDBnMHOu.js";import"./index-DJtxxfEW.js";import"./Save-B3VvXevP.js";import"./Search-DyMYdF6H.js";import"./input-BTRPgdqa.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./ChevronDown-LBI9f9x4.js";import"./Select-tQGJVFmO.js";import"./ChevronUp-DDAshzCv.js";import"./CheckCircle-DR890WNk.js";import"./index-Bmycdo5-.js";import"./index-D15UBmr5.js";import"./index-Cl3QsgNf.js";import"./index-BXq7-9tX.js";import"./index-Blak80_u.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./LogoAvatar-CNz_KRMw.js";import"./checkbox-BkoZAF6b.js";import"./Check-FJXU9bTg.js";import"./Minus-CDz936Bf.js";import"./index-Dy8WLFmQ.js";import"./createLucideIcon-DSAetUgs.js";import"./chevron-right-CmdJHgzf.js";import"./index-B2OpD_bL.js";import"./index-DrkntLAK.js";import"./index-DeMbA3mW.js";import"./index-C2XIGUiK.js";import"./Cross-C-APJ_G3.js";import"./index-BjvC5kk3.js";const A={employees:{employeeNames:[{id:5,firstName:"Hellen",fullName:"Hellen the HR",lastName:"the HR",preferredName:null,__typename:"EmployeesEmployeeName",avatar:{id:3,url:v,__typename:"ApiCoreAttachment"}},{id:6,firstName:"Phebe",fullName:"Phebe Jacobson",lastName:"Jacobson",preferredName:null,__typename:"EmployeesEmployeeName",avatar:null},{id:7,firstName:"Arnulfo",fullName:"Arnulfo Maggio",lastName:"Maggio",preferredName:null,__typename:"EmployeesEmployeeName",avatar:null}]}},De={title:"AvatarNameSelector/EmployeeSelector",argTypes:{singleSelector:{control:"boolean",defaultValue:!1,description:"Toggle between single and multiple employee selection."},onSelect:h()},parameters:{layout:"centered",docs:{description:{component:`
**Request GraphQL:**

\`\`\`graphql
query EmployeeSelector($active: Boolean, $companyId: Int!, $ids: [Int!], $legalEntityIds: [Int!], $search: String) {
  employees {
    employeeNames(
      companyId: $companyId
      ids: $ids
      legalEntityIds: $legalEntityIds
      onlyActive: $active
      search: $search
    ) {
      ...AvatarNameForSelect
      __typename
    }
    __typename
  }
}

fragment AvatarNameForSelect on EmployeesEmployeeName {
  id
  avatar {
    id
    url
    __typename
  }
  firstName
  fullName
  lastName
  preferredName
  __typename
}

\`\`\`

**Response:**

\`\`\`ts
interface FetchEmployee {
  id: number
  firstName: string
  fullName: string
  lastName: string
  preferredName: string | null
  __typename: "EmployeesEmployeeName"
  avatar: {
    id: number
    url: string
    __typename: "ApiCoreAttachment"
  } | null
}
\`\`\`
      `}}}},r={render:p=>{const[i,o]=t.useState(!0),[c,d]=t.useState([]),[u,y]=t.useState("all"),[g,f]=t.useState([]),N=e=>{e?setTimeout(()=>{d([...A.employees.employeeNames]),o(!1)},500):o(!0)},S=e=>{f(Array.isArray(e)?e:e?[e]:[])};return l.jsx("div",{className:"w-60",children:l.jsx(E,{groups:[{label:"None",value:"all",type:"avatar"}],selectedGroup:u,onGroupChange:e=>y(e??"all"),entities:c.map(e=>{var a;return{id:e.id,name:e.fullName,avatar:((a=e.avatar)==null?void 0:a.url)||void 0}}),loading:i,onOpenChange:N,triggerPlaceholder:"Select employees...",triggerSelected:"employees selected",searchPlaceholder:"Search...",selectAllLabel:"Select all",clearLabel:"Clear",selectedLabel:"selected",notFoundTitle:"No results found",notFoundSubtitle:"Try searching with a different term.",singleSelector:p.singleSelector,onSelect:S,selectedAvatarName:g})})},args:{singleSelector:!1}};var n,m,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => {
    const [loading, setLoading] = useState<boolean>(true);
    const [fetchEmployees, setFetchEmployees] = useState<FetchEmployee[]>([]);
    const [selectedGroup, setSelectedGroup] = useState<string>("all");
    const [selectedEmployees, setSelectedEmployees] = useState<AvatarNamedEntity[]>([]);
    const onOpenChange = (open: boolean) => {
      if (open) {
        setTimeout(() => {
          setFetchEmployees([...response.employees.employeeNames]);
          setLoading(false);
        }, 500);
      } else {
        setLoading(true);
      }
    };
    const onSelect = (el: AvatarNamedEntity[] | AvatarNamedEntity | null) => {
      setSelectedEmployees(Array.isArray(el) ? el : el ? [el] : []);
    };
    return <div className="w-60">
        <AvatarNameSelector
      // Groups (hard-coded as an example)
      groups={[{
        label: "None",
        value: "all",
        type: "avatar"
      }]} selectedGroup={selectedGroup} onGroupChange={value => setSelectedGroup(value ?? "all")}
      // Convert our fetched employees to the shape needed by AvatarNameSelector
      entities={fetchEmployees.map(emp => ({
        id: emp.id,
        name: emp.fullName,
        avatar: emp.avatar?.url || undefined
      }))}
      // Loading animation
      loading={loading} onOpenChange={onOpenChange}
      // Basic placeholders and labels
      triggerPlaceholder="Select employees..." triggerSelected="employees selected" searchPlaceholder="Search..." selectAllLabel="Select all" clearLabel="Clear" selectedLabel="selected" notFoundTitle="No results found" notFoundSubtitle="Try searching with a different term."
      // Exposed props from EmployeeSelectorProps
      singleSelector={props.singleSelector} onSelect={onSelect} selectedAvatarName={selectedEmployees} />
      </div>;
  },
  args: {
    singleSelector: false
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const Je=["Default"];export{r as Default,Je as __namedExportsOrder,De as default};
