import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{P as v}from"./index-C9oqVgzc.js";import{b as D,c as N,F as C}from"./Save-B3VvXevP.js";import{F as y}from"./Home-BAwEvcom.js";import{F as S}from"./InfoCircleLine-BOiNe5O3.js";import{F as w}from"./Pencil-B6sRWFIu.js";import{F as R}from"./Settings-Cz6pRfwJ.js";import{D as f}from"./index-B79dpo_y.js";import"./index-yBjzXJbu.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./index-CDBnMHOu.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./imageHandler-C2NaIYbW.js";import"./index-BKKrtyrw.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-B7GDqc_s.js";import"./index-BNL5Yqmu.js";import"./index-Blak80_u.js";import"./button-CZujocQw.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./EllipsisHorizontal-CXMIya4N.js";import"./linkHandler-fUi2qCbR.js";import"./index-3YeXfHId.js";import"./index-DW48STyt.js";import"./index-Bg_GsVj5.js";import"./index-BL6sZKvk.js";import"./index-7k9rgiuw.js";import"./Combination-DneYXzaJ.js";import"./index-yradL_ub.js";import"./index-Bmycdo5-.js";import"./index-BiB69Vyw.js";import"./index-C-USI-jp.js";import"./index-CvAaZOpw.js";import"./index-qX83RIrM.js";import"./chevron-right-CmdJHgzf.js";import"./createLucideIcon-DSAetUgs.js";import"./exports-IwKL35tc.js";import"./component-BI8hiL87.js";import"./scrollarea-CRia_fH-.js";import"./index-BdQq_4o_.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-DG6DbzsE.js";const Re={title:"Dropdown",component:f,tags:["autodocs","experimental"]},e={args:{items:[{label:"Create",onClick:()=>console.log("Create clicked"),icon:D,description:"New creation process"},{label:"Edit",onClick:()=>console.log("Edit clicked"),icon:w,description:"Edit item's information"},{label:"Save",onClick:()=>console.log("Save clicked"),icon:N,description:"Preserve changes"},"separator",{label:"Delete",onClick:()=>console.log("Delete clicked"),description:"Remove item",critical:!0,icon:C}]}},r={args:{items:[{label:"Upload new avatar",onClick:()=>console.log("Create clicked")},{label:"Delete current avatar",onClick:()=>console.log("Delete clicked"),critical:!0}]},render:k=>t.jsx(f,{...k,children:t.jsx("button",{"aria-label":"Open user menu",children:t.jsx(v,{src:"https://github.com/dani-moreno.png",firstName:"Dani",lastName:"Moreno",size:"large"})})}),parameters:{a11y:{config:{rules:[]}}}},o={args:{items:[{label:"Dashboard",href:"/dashboard",description:"View your dashboard",icon:y},{label:"Settings",href:"/settings",description:"Adjust your settings",icon:R},{label:"Help",href:"/help",description:"Get help and support",icon:S}]}},a={args:{items:[{label:"Josep Jaume Rey",avatar:{type:"person",firstName:"Josep Jaume",lastName:"Rey",src:"https://github.com/josepjaume.png","aria-label":"Josep Jaume Rey avatar"}},{label:"Nik Lopin",avatar:{type:"person",firstName:"Nik",lastName:"Lopin",src:"https://github.com/nlopin.png","aria-label":"Nik Lopin avatar"}},{label:"Saúl Domínguez",avatar:{type:"person",firstName:"Saúl",lastName:"Domínguez",src:"https://github.com/sauldom102.png","aria-label":"Saúl Domínguez avatar"}}]}};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Create",
      onClick: () => console.log("Create clicked"),
      icon: Icons.Add,
      description: "New creation process"
    }, {
      label: "Edit",
      onClick: () => console.log("Edit clicked"),
      icon: Icons.Pencil,
      description: "Edit item's information"
    }, {
      label: "Save",
      onClick: () => console.log("Save clicked"),
      icon: Icons.Save,
      description: "Preserve changes"
    }, "separator", {
      label: "Delete",
      onClick: () => console.log("Delete clicked"),
      description: "Remove item",
      critical: true,
      icon: Icons.Delete
    }]
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,p,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Upload new avatar",
      onClick: () => console.log("Create clicked")
    }, {
      label: "Delete current avatar",
      onClick: () => console.log("Delete clicked"),
      critical: true
    }]
  },
  render: args => <Dropdown {...args}>
      <button aria-label="Open user menu">
        <PersonAvatar src="https://github.com/dani-moreno.png" firstName="Dani" lastName="Moreno" size="large" />
      </button>
    </Dropdown>,
  parameters: {
    a11y: {
      config: {
        rules: []
      }
    }
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard",
      href: "/dashboard",
      description: "View your dashboard",
      icon: Icons.Home
    }, {
      label: "Settings",
      href: "/settings",
      description: "Adjust your settings",
      icon: Icons.Settings
    }, {
      label: "Help",
      href: "/help",
      description: "Get help and support",
      icon: Icons.InfoCircleLine
    }]
  }
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,b,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Josep Jaume Rey",
      avatar: {
        type: "person",
        firstName: "Josep Jaume",
        lastName: "Rey",
        src: "https://github.com/josepjaume.png",
        "aria-label": "Josep Jaume Rey avatar"
      }
    }, {
      label: "Nik Lopin",
      avatar: {
        type: "person",
        firstName: "Nik",
        lastName: "Lopin",
        src: "https://github.com/nlopin.png",
        "aria-label": "Nik Lopin avatar"
      }
    }, {
      label: "Saúl Domínguez",
      avatar: {
        type: "person",
        firstName: "Saúl",
        lastName: "Domínguez",
        src: "https://github.com/sauldom102.png",
        "aria-label": "Saúl Domínguez avatar"
      }
    }]
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Fe=["Default","WithCustomTrigger","WithLinks","WithAvatars"];export{e as Default,a as WithAvatars,r as WithCustomTrigger,o as WithLinks,Fe as __namedExportsOrder,Re as default};
