import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{F as d,a as _}from"./Recruitment-UCu0IDtg.js";import{B as T}from"./button-CZujocQw.js";import{w as z,a as c,e as t,u as s}from"./index-DuopzoTV.js";import{r as y}from"./index-B6o7_jwP.js";import{B as $}from"./index-CsFqNNCa.js";import"./index-yBjzXJbu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-B7GDqc_s.js";import"./index-Cwk_nZHn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./linkHandler-fUi2qCbR.js";import"./index-C5N-cZbj.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./index-Dy8WLFmQ.js";import"./skeleton-BQT1AIt_.js";import"./index-BpAFfwO3.js";import"./index-B79dpo_y.js";import"./index-Blak80_u.js";import"./index-CDBnMHOu.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./Save-B3VvXevP.js";import"./EllipsisHorizontal-CXMIya4N.js";import"./index-3YeXfHId.js";import"./index-DW48STyt.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-Bg_GsVj5.js";import"./index-BNL5Yqmu.js";import"./index-BL6sZKvk.js";import"./index-7k9rgiuw.js";import"./Combination-DneYXzaJ.js";import"./index-yradL_ub.js";import"./index-Bmycdo5-.js";import"./index-BiB69Vyw.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-qX83RIrM.js";import"./chevron-right-CmdJHgzf.js";import"./createLucideIcon-DSAetUgs.js";import"./exports-IwKL35tc.js";import"./component-BI8hiL87.js";import"./scrollarea-CRia_fH-.js";import"./index-BdQq_4o_.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./ChevronRight-zM-ePXcJ.js";import"./index-idP0doZy.js";import"./index-rQB-1XLh.js";import"./index-DJtxxfEW.js";import"./Search-DyMYdF6H.js";import"./input-BTRPgdqa.js";import"./ChevronDown-LBI9f9x4.js";import"./Select-tQGJVFmO.js";import"./index-BobS88kg.js";import"./ChevronUp-DDAshzCv.js";import"./CheckCircle-DR890WNk.js";import"./index-D15UBmr5.js";import"./index-Cl3QsgNf.js";const ct={title:"Navigation/Breadcrumbs",component:$,tags:["autodocs","experimental"]},u={args:{breadcrumbs:[{id:"recruitment",label:"Recruitment",href:"/recruitment",icon:d},{id:"candidates",label:"Candidates",href:"/recruitment/candidates"},{id:"dani-moreno",label:"Dani Moreno"}]}},l={args:{breadcrumbs:[{id:"recruitment",label:"Recruitment",href:"/recruitment",icon:d},{id:"candidates",label:"Candidates",href:"/recruitment/candidates"},{id:"loading",label:"Loading",loading:!0}]}},p={args:{breadcrumbs:[{id:"recruitment",label:"Recruitment",href:"/recruitment",icon:d},{id:"loading-1",label:"Loading",loading:!0},{id:"loading-2",label:"Loading",loading:!0}]}},b={args:{breadcrumbs:[{id:"recruitment",label:"Recruitment",href:"/recruitment",icon:d},{id:"offers",label:"Offers",href:"/offers"},{id:"my-entity",type:"select",searchbox:!0,options:Array.from({length:10},(n,e)=>({value:e.toString(),label:`Offer ${e}`})),label:"Offer 1",value:"1",onChange:n=>{console.log("WithSelectBreadcrumb value",n)}}]}},h={args:{breadcrumbs:[{id:"documents",label:"Documents",href:"/",icon:_},{id:"employee-documents",label:"Employee Documents",href:"/documents"},{id:"human-resources",label:"Human Resources",href:"/documents/hr"},{id:"recruitment",label:"Recruitment",href:"/documents/hr/recruitment"},{id:"candidates",label:"Candidates",href:"/documents/hr/recruitment/candidates"},{id:"dani-moreno",label:"Dani Moreno",href:"/dani-moreno"},{id:"applications",label:"Applications",href:"/dani-moreno/applications"},{id:"interviews",label:"Interviews",href:"/dani-moreno/applications/interviews"}]}},m=n=>new Promise(e=>setTimeout(e,n)),B={render:()=>{const n=[{id:"recruitment",label:"Recruitment",href:"/recruitment",icon:d},{id:"candidates",label:"Candidates",href:"/recruitment/candidates"},{id:"dani-moreno",label:"Dani Moreno",href:"/recruitment/candidates/dani-moreno"},{id:"applications",label:"Applications",href:"/recruitment/candidates/dani-moreno/applications"}],e=[{id:"documents",label:"Documents",href:"/documents",icon:_},{id:"employee-documents",label:"Employee Documents",href:"/documents/employee"},{id:"contracts",label:"Contracts",href:"/documents/employee/contracts"},{id:"templates",label:"Templates",href:"/documents/employee/contracts/templates"}],[r,g]=y.useState("recruitment"),[a,f]=y.useState(n),H=()=>{const o=r==="recruitment"?n:e;a.length<o.length&&f(v=>[...v,o[v.length]])},P=()=>{f(o=>o.slice(0,-1))},V=()=>{const o=r==="recruitment"?"documents":"recruitment";g(o),f(o==="recruitment"?n:e)};return i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex gap-2",children:[i.jsx(T,{onClick:H,disabled:a.length>=(r==="recruitment"?n.length:e.length),variant:"outline",children:"Add Breadcrumb"}),i.jsx(T,{onClick:P,disabled:a.length<=1,variant:"outline",children:"Remove Breadcrumb"}),i.jsx(T,{onClick:V,variant:"outline",children:"Switch Section"})]}),i.jsx("div",{className:"flex w-full items-center","data-testid":"breadcrumbs-container",children:i.jsx($,{breadcrumbs:a},r)})]})},play:async({canvasElement:n})=>{const e=z(n);await c(()=>{t(e.getByText("Recruitment")).toBeInTheDocument(),t(e.getByText("Candidates")).toBeInTheDocument(),t(e.getByText("Dani Moreno")).toBeInTheDocument(),t(e.getByText("Applications")).toBeInTheDocument()});const r=e.getByText("Remove Breadcrumb");await s.click(r),await c(()=>{t(e.queryByText("Applications")).not.toBeInTheDocument()}),await m(500),await s.click(r),await c(()=>{t(e.queryByText("Dani Moreno")).not.toBeInTheDocument()}),await m(500);const g=e.getByText("Add Breadcrumb");await s.click(g),await c(()=>{t(e.getByText("Dani Moreno")).toBeInTheDocument()}),await m(500);const a=e.getByText("Switch Section");await s.click(a),await c(()=>{t(e.getByText("Documents")).toBeInTheDocument(),t(e.getByText("Employee Documents")).toBeInTheDocument(),t(e.getByText("Contracts")).toBeInTheDocument(),t(e.getByText("Templates")).toBeInTheDocument()}),await m(500),await s.click(r),await s.click(r),await c(()=>{t(e.queryByText("Templates")).not.toBeInTheDocument(),t(e.queryByText("Contracts")).not.toBeInTheDocument()}),await m(500),await s.click(a),await c(()=>{t(e.getByText("Recruitment")).toBeInTheDocument(),t(e.getByText("Candidates")).toBeInTheDocument(),t(e.getByText("Dani Moreno")).toBeInTheDocument(),t(e.getByText("Applications")).toBeInTheDocument()})}};var w,x,D;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      id: "recruitment",
      label: "Recruitment",
      href: "/recruitment",
      icon: Recruitment
    }, {
      id: "candidates",
      label: "Candidates",
      href: "/recruitment/candidates"
    }, {
      id: "dani-moreno",
      label: "Dani Moreno"
    }]
  }
}`,...(D=(x=u.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var I,S,R;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      id: "recruitment",
      label: "Recruitment",
      href: "/recruitment",
      icon: Recruitment
    }, {
      id: "candidates",
      label: "Candidates",
      href: "/recruitment/candidates"
    }, {
      id: "loading",
      label: "Loading",
      loading: true
    }]
  }
}`,...(R=(S=l.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var C,k,A;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      id: "recruitment",
      label: "Recruitment",
      href: "/recruitment",
      icon: Recruitment
    }, {
      id: "loading-1",
      label: "Loading",
      loading: true
    }, {
      id: "loading-2",
      label: "Loading",
      loading: true
    }]
  }
}`,...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var E,L,M;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      id: "recruitment",
      label: "Recruitment",
      href: "/recruitment",
      icon: Recruitment
    }, {
      id: "offers",
      label: "Offers",
      href: "/offers"
    }, {
      id: "my-entity",
      type: "select",
      searchbox: true,
      options: Array.from({
        length: 10
      }, (_, idx) => ({
        value: idx.toString(),
        label: \`Offer \${idx}\`
      })),
      label: \`Offer 1\`,
      value: "1",
      onChange: value => {
        console.log("WithSelectBreadcrumb value", value);
      }
    }]
  }
}`,...(M=(L=b.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var F,j,q;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      id: "documents",
      label: "Documents",
      href: "/",
      icon: Documents
    }, {
      id: "employee-documents",
      label: "Employee Documents",
      href: "/documents"
    }, {
      id: "human-resources",
      label: "Human Resources",
      href: "/documents/hr"
    }, {
      id: "recruitment",
      label: "Recruitment",
      href: "/documents/hr/recruitment"
    }, {
      id: "candidates",
      label: "Candidates",
      href: "/documents/hr/recruitment/candidates"
    }, {
      id: "dani-moreno",
      label: "Dani Moreno",
      href: "/dani-moreno"
    }, {
      id: "applications",
      label: "Applications",
      href: "/dani-moreno/applications"
    }, {
      id: "interviews",
      label: "Interviews",
      href: "/dani-moreno/applications/interviews"
    }]
  }
}`,...(q=(j=h.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var N,O,W;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const recruitmentBreadcrumbs: BreadcrumbItemType[] = [{
      id: "recruitment",
      label: "Recruitment",
      href: "/recruitment",
      icon: Recruitment
    }, {
      id: "candidates",
      label: "Candidates",
      href: "/recruitment/candidates"
    }, {
      id: "dani-moreno",
      label: "Dani Moreno",
      href: "/recruitment/candidates/dani-moreno"
    }, {
      id: "applications",
      label: "Applications",
      href: "/recruitment/candidates/dani-moreno/applications"
    }];
    const documentsBreadcrumbs: BreadcrumbItemType[] = [{
      id: "documents",
      label: "Documents",
      href: "/documents",
      icon: Documents
    }, {
      id: "employee-documents",
      label: "Employee Documents",
      href: "/documents/employee"
    }, {
      id: "contracts",
      label: "Contracts",
      href: "/documents/employee/contracts"
    }, {
      id: "templates",
      label: "Templates",
      href: "/documents/employee/contracts/templates"
    }];
    const [currentSection, setCurrentSection] = useState<"recruitment" | "documents">("recruitment");
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemType[]>(recruitmentBreadcrumbs);
    const handleAdd = () => {
      const sourceBreadcrumbs = currentSection === "recruitment" ? recruitmentBreadcrumbs : documentsBreadcrumbs;
      if (breadcrumbs.length < sourceBreadcrumbs.length) {
        setBreadcrumbs(prev => [...prev, sourceBreadcrumbs[prev.length]]);
      }
    };
    const handleRemove = () => {
      setBreadcrumbs(prev => prev.slice(0, -1));
    };
    const handleSwitch = () => {
      const newSection = currentSection === "recruitment" ? "documents" : "recruitment";
      setCurrentSection(newSection);
      setBreadcrumbs(newSection === "recruitment" ? recruitmentBreadcrumbs : documentsBreadcrumbs);
    };
    return <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={handleAdd} disabled={breadcrumbs.length >= (currentSection === "recruitment" ? recruitmentBreadcrumbs.length : documentsBreadcrumbs.length)} variant="outline">
            Add Breadcrumb
          </Button>
          <Button onClick={handleRemove} disabled={breadcrumbs.length <= 1} variant="outline">
            Remove Breadcrumb
          </Button>
          <Button onClick={handleSwitch} variant="outline">
            Switch Section
          </Button>
        </div>
        <div className="flex w-full items-center" data-testid="breadcrumbs-container">
          <Breadcrumbs key={currentSection} breadcrumbs={breadcrumbs} />
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initial state - full Recruitment breadcrumbs
    await waitFor(() => {
      expect(canvas.getByText("Recruitment")).toBeInTheDocument();
      expect(canvas.getByText("Candidates")).toBeInTheDocument();
      expect(canvas.getByText("Dani Moreno")).toBeInTheDocument();
      expect(canvas.getByText("Applications")).toBeInTheDocument();
    });

    // Remove some items
    const removeButton = canvas.getByText("Remove Breadcrumb");
    await userEvent.click(removeButton);
    await waitFor(() => {
      expect(canvas.queryByText("Applications")).not.toBeInTheDocument();
    });
    await sleep(500);
    await userEvent.click(removeButton);
    await waitFor(() => {
      expect(canvas.queryByText("Dani Moreno")).not.toBeInTheDocument();
    });
    await sleep(500);

    // Add items back
    const addButton = canvas.getByText("Add Breadcrumb");
    await userEvent.click(addButton);
    await waitFor(() => {
      expect(canvas.getByText("Dani Moreno")).toBeInTheDocument();
    });
    await sleep(500);

    // Switch to Documents section
    const switchButton = canvas.getByText("Switch Section");
    await userEvent.click(switchButton);

    // Verify full Documents section loaded
    await waitFor(() => {
      expect(canvas.getByText("Documents")).toBeInTheDocument();
      expect(canvas.getByText("Employee Documents")).toBeInTheDocument();
      expect(canvas.getByText("Contracts")).toBeInTheDocument();
      expect(canvas.getByText("Templates")).toBeInTheDocument();
    });
    await sleep(500);

    // Remove some items from Documents
    await userEvent.click(removeButton);
    await userEvent.click(removeButton);
    await waitFor(() => {
      expect(canvas.queryByText("Templates")).not.toBeInTheDocument();
      expect(canvas.queryByText("Contracts")).not.toBeInTheDocument();
    });
    await sleep(500);

    // Switch back to Recruitment
    await userEvent.click(switchButton);
    await waitFor(() => {
      // Should show full Recruitment breadcrumbs again
      expect(canvas.getByText("Recruitment")).toBeInTheDocument();
      expect(canvas.getByText("Candidates")).toBeInTheDocument();
      expect(canvas.getByText("Dani Moreno")).toBeInTheDocument();
      expect(canvas.getByText("Applications")).toBeInTheDocument();
    });
  }
}`,...(W=(O=B.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const st=["Default","LoadingLastItem","LoadingLastTwoItems","WithSelectBreadcrumb","LongBreadcrumbs","Interactive"];export{u as Default,B as Interactive,l as LoadingLastItem,p as LoadingLastTwoItems,h as LongBreadcrumbs,b as WithSelectBreadcrumb,st as __namedExportsOrder,ct as default};
