import { FiltersDefinition, PresetsDefinition } from "../types"

export const filterDefinition: FiltersDefinition = {
  date: {
    type: "date",
    label: "Date",
    options: {},
  },
  dateRange: {
    type: "date",
    label: "Date Range",
    options: {
      mode: "range",
    },
  },
  dateWeek: {
    type: "date",
    label: "Date Week",
    options: {
      view: "week",
    },
  },
  dateRangeWeek: {
    type: "date",
    label: "Date Range Week",
    options: {
      mode: "range",
      view: "week",
    },
  },
  dateMonth: {
    type: "date",
    label: "Date Month",
    options: {
      view: "month",
    },
  },
  dateMonthRange: {
    type: "date",
    label: "Date Month Range",
    options: {
      view: "month",
      mode: "range",
    },
  },
  dateQuarter: {
    type: "date",
    label: "Date Quarter",
    options: {
      view: "quarter",
    },
  },
  dateHalfYear: {
    type: "date",
    label: "Date Half Year",
    options: {
      view: "halfyear",
    },
  },
  dateYear: {
    type: "date",
    label: "Date Year",
    options: {
      view: "year",
    },
  },
  department: {
    type: "in",
    label: "Department",
    options: {
      options: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return [
          {
            value: "engineering",
            label: "Engineering",
          },
          { value: "marketing", label: "Marketing" },
          { value: "sales", label: "Sales" },
          { value: "hr", label: "Human Resources" },
          { value: "finance", label: "Finance" },
        ]
      },
    },
  },
  name: {
    type: "search",
    label: "Employee name",
  },
  manager: {
    type: "in",
    label: "Manager",
    options: {
      options: [
        { value: "alice", label: "Alice Johnson" },
        { value: "bob", label: "Bob Smith" },
        { value: "carol", label: "Carol Williams" },
        { value: "dave", label: "Dave Brown" },
      ],
    },
  },
  location: {
    type: "in",
    label: "Office location",
    options: {
      options: [
        { value: "london", label: "London" },
        { value: "new_york", label: "New York" },
        { value: "tokyo", label: "Tokyo" },
        { value: "remote", label: "Remote" },
      ],
    },
  },
  role: {
    type: "in",
    label: "Role",
    options: {
      options: [
        { value: "engineer", label: "Software Engineer" },
        { value: "designer", label: "Product Designer" },
        { value: "manager", label: "Product Manager" },
        { value: "analyst", label: "Data Analyst" },
        { value: "marketer", label: "Marketing Specialist" },
        { value: "sales", label: "Sales Representative" },
        { value: "hr", label: "Human Resources Specialist" },
        { value: "finance", label: "Financial Analyst" },
        { value: "customer_support", label: "Customer Support Specialist" },
        { value: "legal", label: "Legal Counsel" },
        { value: "operations", label: "Operations Manager" },
        { value: "research", label: "Research Scientist" },
        { value: "product", label: "Product Manager" },
        { value: "security", label: "Security Specialist" },
        { value: "other", label: "Other" },
      ],
    },
  },
}

// Define sample presets for use in stories
export const samplePresets: PresetsDefinition<typeof filterDefinition> = [
  {
    label: "Engineering Team",
    filter: {
      department: ["engineering"],
      role: ["engineer", "manager"],
    },
  },
  {
    label: "Remote Workers",
    filter: {
      location: ["remote"],
    },
  },
  {
    label: "Alice's Team",
    filter: {
      manager: ["alice"],
    },
  },
]

export const generateCountries = () => {
  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "mx", label: "Mexico" },
    { value: "br", label: "Brazil" },
    { value: "ar", label: "Argentina" },
    { value: "uk", label: "United Kingdom" },
    { value: "fr", label: "France" },
    { value: "de", label: "Germany" },
    { value: "it", label: "Italy" },
    { value: "es", label: "Spain" },
    { value: "pt", label: "Portugal" },
    { value: "ru", label: "Russia" },
    { value: "cn", label: "China" },
    { value: "jp", label: "Japan" },
    { value: "kr", label: "South Korea" },
    { value: "in", label: "India" },
    { value: "au", label: "Australia" },
    { value: "nz", label: "New Zealand" },
    { value: "za", label: "South Africa" },
    { value: "eg", label: "Egypt" },
    { value: "ng", label: "Nigeria" },
    { value: "ke", label: "Kenya" },
    { value: "sa", label: "Saudi Arabia" },
    { value: "ae", label: "United Arab Emirates" },
    { value: "il", label: "Israel" },
    { value: "tr", label: "Turkey" },
    { value: "th", label: "Thailand" },
    { value: "vn", label: "Vietnam" },
    { value: "my", label: "Malaysia" },
    { value: "sg", label: "Singapore" },
    { value: "id", label: "Indonesia" },
    { value: "ph", label: "Philippines" },
    { value: "se", label: "Sweden" },
    { value: "no", label: "Norway" },
    { value: "dk", label: "Denmark" },
    { value: "fi", label: "Finland" },
    { value: "nl", label: "Netherlands" },
    { value: "be", label: "Belgium" },
    { value: "ch", label: "Switzerland" },
    { value: "at", label: "Austria" },
    { value: "gr", label: "Greece" },
    { value: "pl", label: "Poland" },
    { value: "cz", label: "Czech Republic" },
    { value: "hu", label: "Hungary" },
    { value: "ro", label: "Romania" },
    { value: "bg", label: "Bulgaria" },
    { value: "hr", label: "Croatia" },
    { value: "rs", label: "Serbia" },
    { value: "ua", label: "Ukraine" },
  ]
  return countries
}

export const getPresetMock = (itemsCount: boolean = false) => {
  return samplePresets.map((preset, index) => ({
    ...preset,
    itemsCount: itemsCount ? () => index * 12 : undefined,
  }))
}
