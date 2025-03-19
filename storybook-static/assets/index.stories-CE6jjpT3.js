import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{I as pe}from"./input-BTRPgdqa.js";import{L as me}from"./label-DDSGvqAM.js";import{r as t}from"./index-B6o7_jwP.js";import{F as i}from"./index-CXxsC3ng.js";import"./index-yBjzXJbu.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-fNjTmf9T.js";import"./index-B7GDqc_s.js";import"./index-Blak80_u.js";import"./button-CZujocQw.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./index-B2OpD_bL.js";import"./index-DrJ36aH6.js";import"./Save-B3VvXevP.js";import"./Reset-X8BOYMzq.js";import"./i18n-provider-DLZYpdh4.js";import"./index-C2I-PfoO.js";import"./ChevronDown-LBI9f9x4.js";import"./popover-BqXImKWO.js";import"./index-DW48STyt.js";import"./index-7k9rgiuw.js";import"./index-BNL5Yqmu.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-BL6sZKvk.js";import"./skeleton-BQT1AIt_.js";import"./index-Bw8Q85K6.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./Search-DyMYdF6H.js";import"./InFilter-Buwt2jJ3.js";import"./index-Dx7Y6k44.js";import"./checkbox-BkoZAF6b.js";import"./Check-FJXU9bTg.js";import"./Minus-CDz936Bf.js";import"./index-D15UBmr5.js";import"./index-Dy8WLFmQ.js";import"./index-DrkntLAK.js";function b(n){const e=JSON.stringify(n);return btoa(e)}function z(n){try{const e=atob(n);return JSON.parse(e)}catch{throw new Error("Invalid filter string format")}}function de(n,e="filters"){const l=new URL(window.location.href),r=b(n);l.searchParams.set(e,r),window.history.replaceState({},"",l.toString())}function he(n="filters"){const l=new URL(window.location.href).searchParams.get(n);if(!l)return null;try{return z(l)}catch{return null}}const Fa={title:"Data Collection/Filters",component:i},u={department:{type:"in",label:"Department",options:[{value:"engineering",label:"Engineering"},{value:"marketing",label:"Marketing"},{value:"sales",label:"Sales"},{value:"hr",label:"Human Resources"},{value:"finance",label:"Finance"}]},name:{type:"search",label:"Employee name"},manager:{type:"in",label:"Manager",options:[{value:"alice",label:"Alice Johnson"},{value:"bob",label:"Bob Smith"},{value:"carol",label:"Carol Williams"},{value:"dave",label:"Dave Brown"}]},location:{type:"in",label:"Office location",options:[{value:"london",label:"London"},{value:"new_york",label:"New York"},{value:"tokyo",label:"Tokyo"},{value:"remote",label:"Remote"}]},role:{type:"in",label:"Role",options:[{value:"engineer",label:"Software Engineer"},{value:"designer",label:"Product Designer"},{value:"manager",label:"Product Manager"},{value:"analyst",label:"Data Analyst"},{value:"marketer",label:"Marketing Specialist"},{value:"sales",label:"Sales Representative"},{value:"hr",label:"Human Resources Specialist"},{value:"finance",label:"Financial Analyst"},{value:"customer_support",label:"Customer Support Specialist"},{value:"legal",label:"Legal Counsel"},{value:"operations",label:"Operations Manager"},{value:"research",label:"Research Scientist"},{value:"product",label:"Product Manager"},{value:"security",label:"Security Specialist"},{value:"other",label:"Other"}]}},x=[{label:"Engineering Team",filter:{department:["engineering"],role:["engineer","manager"]}},{label:"Remote Workers",filter:{location:["remote"]}},{label:"Alice's Team",filter:{manager:["alice"]}}],be=()=>{const[n,e]=t.useState({});return a.jsx(i,{schema:u,filters:n,onChange:e})},v={render:()=>a.jsx(be,{})},ve=()=>{const[n,e]=t.useState({department:["engineering","marketing"],name:"John",manager:["alice"]});return a.jsx(i,{schema:u,filters:n,onChange:e})},g={render:()=>a.jsx(ve,{})},ge=()=>{const[n,e]=t.useState({});return a.jsx(i,{schema:u,filters:n,presets:x,onChange:e})},f={render:()=>a.jsx(ge,{})},fe=()=>{const[n,e]=t.useState({department:["engineering"],role:["engineer"]});return a.jsx(i,{schema:u,filters:n,presets:x,onChange:e})},y={render:()=>a.jsx(fe,{})},S={args:{schema:u,filters:{}}},c={args:{schema:u,filters:{},presets:x}},p={args:{schema:u},render:n=>{const[e,l]=t.useState(()=>he()||{}),[r,o]=t.useState(()=>b(e));t.useEffect(()=>{de(e),o(b(e))},[e]);const F=s=>{o(s);try{const w=z(s);l(w)}catch{}};return a.jsxs("div",{className:"flex w-[600px] flex-col gap-4",children:[a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx(me,{htmlFor:"serialized-filters",children:"Serialized Filters"}),a.jsx(pe,{id:"serialized-filters",value:r,onChange:s=>F(s.target.value),className:"font-mono text-sm"}),a.jsx("p",{className:"text-muted-foreground text-sm",children:"This field shows the serialized filter state that would normally be in the URL. You can modify it to see how the filters update."})]}),a.jsx(i,{...n,filters:e,onChange:l})]})}},m={args:{schema:u},render:n=>{const[e,l]=t.useState(()=>he()||{}),[r,o]=t.useState(()=>b(e));t.useEffect(()=>{de(e),o(b(e))},[e]);const F=s=>{o(s);try{const w=z(s);l(w)}catch{}};return a.jsxs("div",{className:"flex w-[600px] flex-col gap-4",children:[a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx(me,{htmlFor:"serialized-filters",children:"Serialized Filters"}),a.jsx(pe,{id:"serialized-filters",value:r,onChange:s=>F(s.target.value),className:"font-mono text-sm"}),a.jsx("p",{className:"text-muted-foreground text-sm",children:"This field shows the serialized filter state that would normally be in the URL. You can modify it to see how the filters update."})]}),a.jsx(i,{...n,filters:e,presets:x,onChange:l})]})}},d={render:()=>{const[n,e]=t.useState({}),l={department:{type:"in",label:"Department",options:[{value:"engineering",label:"Engineering"},{value:"marketing",label:"Marketing"},{value:"sales",label:"Sales"},{value:"hr",label:"Human Resources"}]},users:{type:"in",label:"Users",options:async()=>new Promise(r=>{setTimeout(()=>{r([{value:"user1",label:"John Doe"},{value:"user2",label:"Jane Smith"},{value:"user3",label:"Bob Johnson"},{value:"user4",label:"Alice Williams"},{value:"user5",label:"Michael Brown"}])},1500)})},status:{type:"in",label:"Status",options:()=>[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"pending",label:"Pending"}]},search:{type:"search",label:"Search"}};return a.jsx("div",{className:"w-[600px]",children:a.jsx(i,{schema:l,filters:n,onChange:e})})}},h={render:()=>{const[n,e]=t.useState({}),l=()=>[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico"},{value:"br",label:"Brazil"},{value:"ar",label:"Argentina"},{value:"uk",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"it",label:"Italy"},{value:"es",label:"Spain"},{value:"pt",label:"Portugal"},{value:"ru",label:"Russia"},{value:"cn",label:"China"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"},{value:"in",label:"India"},{value:"au",label:"Australia"},{value:"nz",label:"New Zealand"},{value:"za",label:"South Africa"},{value:"eg",label:"Egypt"},{value:"ng",label:"Nigeria"},{value:"ke",label:"Kenya"},{value:"sa",label:"Saudi Arabia"},{value:"ae",label:"United Arab Emirates"},{value:"il",label:"Israel"},{value:"tr",label:"Turkey"},{value:"th",label:"Thailand"},{value:"vn",label:"Vietnam"},{value:"my",label:"Malaysia"},{value:"sg",label:"Singapore"},{value:"id",label:"Indonesia"},{value:"ph",label:"Philippines"},{value:"se",label:"Sweden"},{value:"no",label:"Norway"},{value:"dk",label:"Denmark"},{value:"fi",label:"Finland"},{value:"nl",label:"Netherlands"},{value:"be",label:"Belgium"},{value:"ch",label:"Switzerland"},{value:"at",label:"Austria"},{value:"gr",label:"Greece"},{value:"pl",label:"Poland"},{value:"cz",label:"Czech Republic"},{value:"hu",label:"Hungary"},{value:"ro",label:"Romania"},{value:"bg",label:"Bulgaria"},{value:"hr",label:"Croatia"},{value:"rs",label:"Serbia"},{value:"ua",label:"Ukraine"}],r={countries:{type:"in",label:"Countries",options:async()=>new Promise(o=>{setTimeout(()=>{o(l())},1e3)})},search:{type:"search",label:"Search"}};return a.jsxs("div",{className:"w-[600px]",children:[a.jsx("p",{className:"mb-4 text-sm text-f1-foreground-secondary",children:"This example loads a large list of countries asynchronously. Open the Countries filter and use the search field to filter the options."}),a.jsx(i,{schema:r,filters:n,onChange:e})]})}};var A,C,U;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <FiltersWithState />
}`,...(U=(C=v.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var P,j,N;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <FiltersWithInitialState />
}`,...(N=(j=g.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var R,W,k;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <FiltersWithPresets />
}`,...(k=(W=f.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var D,T,I;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <FiltersWithPresetsAndInitialState />
}`,...(I=(T=y.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var L,V,E;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    schema: sampleDefinition,
    filters: {}
  }
}`,...(E=(V=S.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var M,O,B,J,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    schema: sampleDefinition,
    filters: {},
    presets: samplePresets
  }
}`,...(B=(O=c.parameters)==null?void 0:O.docs)==null?void 0:B.source},description:{story:`This example demonstrates how presets can be used to quickly apply
predefined filter combinations.`,...(H=(J=c.parameters)==null?void 0:J.docs)==null?void 0:H.description}}};var K,Y,G,_,Z;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    schema: sampleDefinition
  },
  render: args => {
    const [filters, setFilters] = useState(() => {
      // On initial render, try to get filters from URL
      return getFiltersFromUrl() || {};
    });
    const [serializedValue, setSerializedValue] = useState(() => serializeFilters(filters));

    // Update URL and serialized value whenever filters change
    useEffect(() => {
      updateUrlWithFilters(filters);
      setSerializedValue(serializeFilters(filters));
    }, [filters]);
    const handleSerializedValueChange = (value: string) => {
      setSerializedValue(value);
      try {
        const newFilters = deserializeFilters(value);
        setFilters(newFilters);
      } catch {
        // If the value is invalid, we just update the input but not the filters
      }
    };
    return <div className="flex w-[600px] flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="serialized-filters">Serialized Filters</Label>
          <Input id="serialized-filters" value={serializedValue} onChange={e => handleSerializedValueChange(e.target.value)} className="font-mono text-sm" />
          <p className="text-muted-foreground text-sm">
            This field shows the serialized filter state that would normally be
            in the URL. You can modify it to see how the filters update.
          </p>
        </div>
        <Filters {...args} filters={filters} onChange={setFilters} />
      </div>;
  }
}`,...(G=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:G.source},description:{story:`This example demonstrates how filters can be serialized to and from the URL.
Try selecting some filters and notice how the URL updates. You can copy this URL
and paste it in a new tab to restore the same filter state.`,...(Z=(_=p.parameters)==null?void 0:_.docs)==null?void 0:Z.description}}};var q,Q,X,$,ee;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    schema: sampleDefinition
  },
  render: args => {
    const [filters, setFilters] = useState(() => {
      // On initial render, try to get filters from URL
      return getFiltersFromUrl() || {};
    });
    const [serializedValue, setSerializedValue] = useState(() => serializeFilters(filters));

    // Update URL and serialized value whenever filters change
    useEffect(() => {
      updateUrlWithFilters(filters);
      setSerializedValue(serializeFilters(filters));
    }, [filters]);
    const handleSerializedValueChange = (value: string) => {
      setSerializedValue(value);
      try {
        const newFilters = deserializeFilters(value);
        setFilters(newFilters);
      } catch {
        // If the value is invalid, we just update the input but not the filters
      }
    };
    return <div className="flex w-[600px] flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="serialized-filters">Serialized Filters</Label>
          <Input id="serialized-filters" value={serializedValue} onChange={e => handleSerializedValueChange(e.target.value)} className="font-mono text-sm" />
          <p className="text-muted-foreground text-sm">
            This field shows the serialized filter state that would normally be
            in the URL. You can modify it to see how the filters update.
          </p>
        </div>
        <Filters {...args} filters={filters} presets={samplePresets} onChange={setFilters} />
      </div>;
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`This example demonstrates how presets can be used together with URL serialization.
Clicking on a preset will update both the filters and the URL.`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var ae,ne,le,te,re;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    type AsyncDefinitionType = {
      department: {
        type: "in";
        label: string;
        options: Array<{
          value: string;
          label: string;
        }>;
      };
      users: {
        type: "in";
        label: string;
        options: () => Promise<Array<{
          value: string;
          label: string;
        }>>;
      };
      status: {
        type: "in";
        label: string;
        options: () => Array<{
          value: string;
          label: string;
        }>;
      };
      search: {
        type: "search";
        label: string;
      };
    };
    const [filters, setFilters] = useState<FiltersState<AsyncDefinitionType>>({});
    const asyncDefinition: AsyncDefinitionType = {
      department: {
        type: "in",
        label: "Department",
        options: [{
          value: "engineering",
          label: "Engineering"
        }, {
          value: "marketing",
          label: "Marketing"
        }, {
          value: "sales",
          label: "Sales"
        }, {
          value: "hr",
          label: "Human Resources"
        }]
      },
      users: {
        type: "in",
        label: "Users",
        options: async () => {
          // Simulate API call with a delay
          return new Promise(resolve => {
            setTimeout(() => {
              resolve([{
                value: "user1",
                label: "John Doe"
              }, {
                value: "user2",
                label: "Jane Smith"
              }, {
                value: "user3",
                label: "Bob Johnson"
              }, {
                value: "user4",
                label: "Alice Williams"
              }, {
                value: "user5",
                label: "Michael Brown"
              }]);
            }, 1500);
          });
        }
      },
      status: {
        type: "in",
        label: "Status",
        // Sync function example
        options: () => [{
          value: "active",
          label: "Active"
        }, {
          value: "inactive",
          label: "Inactive"
        }, {
          value: "pending",
          label: "Pending"
        }]
      },
      search: {
        type: "search",
        label: "Search"
      }
    };
    return <div className="w-[600px]">
        <Filters schema={asyncDefinition} filters={filters} onChange={setFilters} />
      </div>;
  }
}`,...(le=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:le.source},description:{story:`This example demonstrates how filters can be used with async options.
The "Users" filter loads options asynchronously with a simulated delay.`,...(re=(te=d.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var se,ie,oe,ue,ce;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    type LargeAsyncDefinitionType = {
      countries: {
        type: "in";
        label: string;
        options: () => Promise<Array<{
          value: string;
          label: string;
        }>>;
      };
      search: {
        type: "search";
        label: string;
      };
    };
    const [filters, setFilters] = useState<FiltersState<LargeAsyncDefinitionType>>({});

    // Generate a large list of countries
    const generateCountries = () => {
      const countries = [{
        value: "us",
        label: "United States"
      }, {
        value: "ca",
        label: "Canada"
      }, {
        value: "mx",
        label: "Mexico"
      }, {
        value: "br",
        label: "Brazil"
      }, {
        value: "ar",
        label: "Argentina"
      }, {
        value: "uk",
        label: "United Kingdom"
      }, {
        value: "fr",
        label: "France"
      }, {
        value: "de",
        label: "Germany"
      }, {
        value: "it",
        label: "Italy"
      }, {
        value: "es",
        label: "Spain"
      }, {
        value: "pt",
        label: "Portugal"
      }, {
        value: "ru",
        label: "Russia"
      }, {
        value: "cn",
        label: "China"
      }, {
        value: "jp",
        label: "Japan"
      }, {
        value: "kr",
        label: "South Korea"
      }, {
        value: "in",
        label: "India"
      }, {
        value: "au",
        label: "Australia"
      }, {
        value: "nz",
        label: "New Zealand"
      }, {
        value: "za",
        label: "South Africa"
      }, {
        value: "eg",
        label: "Egypt"
      }, {
        value: "ng",
        label: "Nigeria"
      }, {
        value: "ke",
        label: "Kenya"
      }, {
        value: "sa",
        label: "Saudi Arabia"
      }, {
        value: "ae",
        label: "United Arab Emirates"
      }, {
        value: "il",
        label: "Israel"
      }, {
        value: "tr",
        label: "Turkey"
      }, {
        value: "th",
        label: "Thailand"
      }, {
        value: "vn",
        label: "Vietnam"
      }, {
        value: "my",
        label: "Malaysia"
      }, {
        value: "sg",
        label: "Singapore"
      }, {
        value: "id",
        label: "Indonesia"
      }, {
        value: "ph",
        label: "Philippines"
      }, {
        value: "se",
        label: "Sweden"
      }, {
        value: "no",
        label: "Norway"
      }, {
        value: "dk",
        label: "Denmark"
      }, {
        value: "fi",
        label: "Finland"
      }, {
        value: "nl",
        label: "Netherlands"
      }, {
        value: "be",
        label: "Belgium"
      }, {
        value: "ch",
        label: "Switzerland"
      }, {
        value: "at",
        label: "Austria"
      }, {
        value: "gr",
        label: "Greece"
      }, {
        value: "pl",
        label: "Poland"
      }, {
        value: "cz",
        label: "Czech Republic"
      }, {
        value: "hu",
        label: "Hungary"
      }, {
        value: "ro",
        label: "Romania"
      }, {
        value: "bg",
        label: "Bulgaria"
      }, {
        value: "hr",
        label: "Croatia"
      }, {
        value: "rs",
        label: "Serbia"
      }, {
        value: "ua",
        label: "Ukraine"
      }];
      return countries;
    };
    const largeAsyncDefinition: LargeAsyncDefinitionType = {
      countries: {
        type: "in",
        label: "Countries",
        options: async () => {
          // Simulate API call with a delay
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(generateCountries());
            }, 1000);
          });
        }
      },
      search: {
        type: "search",
        label: "Search"
      }
    };
    return <div className="w-[600px]">
        <p className="mb-4 text-sm text-f1-foreground-secondary">
          This example loads a large list of countries asynchronously. Open the
          Countries filter and use the search field to filter the options.
        </p>
        <Filters schema={largeAsyncDefinition} filters={filters} onChange={setFilters} />
      </div>;
  }
}`,...(oe=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:`This example demonstrates how filters can be used with a large number of async options,
showcasing the search functionality for filtering through many options.`,...(ce=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:ce.description}}};const wa=["Interactive","WithInitialFilters","WithPresets","WithPresetsAndInitialFilters","Default","WithPresetsArgs","WithUrlSerialization","WithPresetsAndUrlSerialization","WithAsyncOptions","WithLargeAsyncOptions"];export{S as Default,v as Interactive,d as WithAsyncOptions,g as WithInitialFilters,h as WithLargeAsyncOptions,f as WithPresets,y as WithPresetsAndInitialFilters,m as WithPresetsAndUrlSerialization,c as WithPresetsArgs,p as WithUrlSerialization,wa as __namedExportsOrder,Fa as default};
