import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-BPfm77MI.js";import{M as s,C as i}from"./index-B48kslfD.js";import{F as a,D as c,A as m,a as l,M as d,N as p}from"./index.stories-BPyLNgFR.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CY9Y-e4A.js";import"./index-Cy3P-1Ig.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DgRHuOkM.js";import"./utils-B2yEwIwY.js";import"./clsx-B-dksMZM.js";import"./index-Cwk_nZHn.js";import"./shared-BFpDpFz4.js";import"./textarea-B0DMaynk.js";import"./index-Blak80_u.js";import"./index-CDBnMHOu.js";import"./button-CZujocQw.js";import"./index-B7GDqc_s.js";import"./emojis-BNFZPiFB.js";import"./a11y-GqbGs7UY.js";import"./index-Bh5LNwUX.js";import"./proxy-CqNJYjyK.js";import"./filter-props-BKVLvpUz.js";import"./label-DDSGvqAM.js";import"./index-BKKrtyrw.js";import"./index-Dx7Y6k44.js";import"./checkbox-BkoZAF6b.js";import"./Save-B3VvXevP.js";import"./Check-FJXU9bTg.js";import"./Minus-CDz936Bf.js";import"./index-DW48STyt.js";import"./index-BL6sZKvk.js";import"./index-BNL5Yqmu.js";import"./index-D15UBmr5.js";import"./index-CvAaZOpw.js";import"./index-yradL_ub.js";import"./index-Dy8WLFmQ.js";import"./index-CPweB39o.js";import"./input-BTRPgdqa.js";import"./index-mW0ngcE-.js";import"./ChevronDown-LBI9f9x4.js";import"./ChevronUp-DDAshzCv.js";import"./index-rQB-1XLh.js";import"./index-DJtxxfEW.js";import"./Search-DyMYdF6H.js";import"./Avatar--tDKy5Jw.js";import"./index-Ji25cujd.js";import"./index-JFkZ0dF_.js";import"./index-vIrfGXN5.js";import"./imageHandler-C2NaIYbW.js";import"./index-C9oqVgzc.js";import"./index-DG6DbzsE.js";import"./Select-tQGJVFmO.js";import"./index-BobS88kg.js";import"./CheckCircle-DR890WNk.js";import"./index-BdQq_4o_.js";import"./index-Bmycdo5-.js";import"./index-BiB69Vyw.js";import"./index-7k9rgiuw.js";import"./Combination-DneYXzaJ.js";import"./index-Bg_GsVj5.js";import"./index-C-USI-jp.js";import"./index-Cl3QsgNf.js";function t(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:a}),`
`,e.jsx(o.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(o.p,{children:["This is a quick Introduction of ",e.jsx(o.a,{href:"https://react-hook-form.com/",rel:"nofollow",children:"React hook form"}),`
and `,e.jsx(o.a,{href:"https://zod.dev/",rel:"nofollow",children:"Zod"}),"."]}),`
`,e.jsx(o.h3,{id:"general-definition-of-form",children:"General definition of form"}),`
`,e.jsxs(o.p,{children:["We use the hook ",e.jsx(o.code,{children:"useForm"}),` which allow us (passing a Zod squema) to interact with
a form. We did a simplication of this process with the hook `,e.jsx(o.code,{children:"useFormSchema"}),`. But
a more complete example can be:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`const form = useForm<SchemaType>({
    defaultValues: {
      companyId: getCurrentCompanyId(),
      reporterId: useCurrentEmployeeId()
    },
    context: formContext,
    resolver: async (values, context, options) => {
      const createResolver = zodResolver(
       mySchema
      )

      return createResolver(values, context, options)
    }
`})}),`
`,e.jsx(o.p,{children:`As you can see you can specify different schemas if you define a function so you
can use for example different schemas to validate.`}),`
`,e.jsx(o.h3,{id:"react-hook-form-api-frequent-commands",children:"React hook form API frequent commands"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[`How do I access values? → React hook form got you covered. You can use
`,e.jsx(o.code,{children:"form.getValues()"}),` to access all the values and you can access to the specific
you want to.`]}),`
`,e.jsxs(o.li,{children:["I do not see my values update. → you can use ",e.jsx(o.code,{children:"form.watch"}),` to subscribe to
field changes. You can pass to that method an array of methods you want to
listen to. This is specially useful if you don’t use controlled inputs.`]}),`
`,e.jsxs(o.li,{children:["I want to set an specific field to a value → you can do this ",e.jsx(o.code,{children:"form.setValue"})]}),`
`,e.jsxs(o.li,{children:[`I want to reset a field → you can reset the state of an specific value with
`,e.jsx(o.code,{children:"form.resetField"})]}),`
`,e.jsxs(o.li,{children:[`I change a value but I cannot see the validations → you can trigger
validations over specific fields or the general form with `,e.jsx(o.code,{children:"form.trigger"})]}),`
`]}),`
`,e.jsx(o.h3,{id:"zod-usage",children:"Zod usage"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Zod"}),` is the library we use to define the schema against it will validate our
forms. A general example of this:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`const schema = z
  .object({
    username: z
      .string()
      .min(2)
      .max(10)
      .refine((username) => username !== "admin", {
        message: "Username cannot be admin",
      }),
    fullName: z.string().min(6).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(50),
    passwordConfirmation: z.string(),
    bio: z.string().max(500),
    tag: z.string(),
    acceptedTerms: z.boolean(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  })
`})}),`
`,e.jsxs(o.p,{children:[`As you saw, we have different primitives to define values, (more info in
`,e.jsx(o.a,{href:"https://zod.dev/?id=primitives",rel:"nofollow",children:"primitives"}),`) such as strings, booleans,
numbers, etc. You can improve validations setting this primitives as optional, a
max value, min value, parsing values, etc. But if you want to perform more
complex validations over an specific field you can use the refine function where
you can specify a path and an error message for it:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`const mySupercoolField = z.string()
mySupercoolField.refine((data) => condition, {
  message: "This is invalid",
  path: ["mySupercoolFieldPath"],
})
`})}),`
`,e.jsx(o.p,{children:"Or if you want to validate the whole form, you can use superRefine:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`mySchema.superRefine(({ field1, field2 }, context) => {
  validationFucntion1()

  validationFucntion2()
})
`})}),`
`,e.jsxs(o.p,{children:[`If you want a more complete example you can check this
`,e.jsx(o.a,{href:"https://www.notion.so/factorialco/How-to-use-react-hook-form-zod-in-forms-14d5e6e051ee8009a266ed7ed517c944",rel:"nofollow",children:"notion"}),`
where we describe how we use this libraries in order to build the forms in the
mobile app for Expenses.`]}),`
`,e.jsx(o.h3,{id:"default",children:"Default"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(o.h3,{id:"asyncfieldvalidation",children:"AsyncFieldValidation"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(o.h3,{id:"asyncsubmit",children:"AsyncSubmit"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(o.h3,{id:"multipletypeschema",children:"MultipleTypeSchema"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(o.h3,{id:"nestedschemas",children:"NestedSchemas"}),`
`,e.jsx(i,{of:p})]})}function Se(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{Se as default};
