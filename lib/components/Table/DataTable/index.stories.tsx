import type { Meta, StoryObj } from "@storybook/react"
import { DataTable, ExtendedColumnDef } from "."

interface Expense {
  id: number
  owner: string
  status: "Draft" | "Reversed" | "Pending" | "In payroll" | "Paid"
  documentDate: string
  amount: number
  category: string
}

const meta: Meta<typeof DataTable<Expense>> = {
  component: DataTable,
  parameters: {},
  tags: ["autodocs"],
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

// Function to generate random data
function generateRandomData(count: number): Expense[] {
  const owners = [
    "John Smith",
    "Emma Johnson",
    "Michael Brown",
    "Olivia Davis",
    "William Wilson",
    "Sophia Taylor",
    "James Anderson",
    "Isabella Thomas",
  ]
  const statuses: Expense["status"][] = [
    "Draft",
    "Reversed",
    "Pending",
    "In payroll",
    "Paid",
  ]
  const categories = [
    "Travel expenses",
    "Meals",
    "Transportation",
    "Office supplies",
    "Training",
    "Technology",
    "Marketing",
    "Professional services",
  ]

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    owner: owners[Math.floor(Math.random() * owners.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    documentDate: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
      .toISOString()
      .split("T")[0],
    amount: Number((Math.random() * 1000 + 10).toFixed(2)),
    category: categories[Math.floor(Math.random() * categories.length)],
  }))
}

const data: Expense[] = generateRandomData(100)

const BasicColumns: ExtendedColumnDef<Expense>[] = [
  { accessorKey: "owner", header: "Owner" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "documentDate", header: "Document Date" },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `€${row.getValue<number>("amount").toFixed(2)}`,
  },
  { accessorKey: "category", header: "Category" },
]

const columns: ExtendedColumnDef<Expense>[] = [
  { accessorKey: "owner", header: "Owner", sortable: true },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "documentDate", header: "Document Date", sortable: true },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `€${row.getValue<number>("amount").toFixed(2)}`,
    sortable: true,
  },
  { accessorKey: "category", header: "Category" },
]

export const Basic: Story = {
  args: {
    columns: BasicColumns,
    data: data.slice(0, 9),
  },
  render(props) {
    return <DataTable<Expense> {...props} />
  },
}

export const WithPagination: Story = {
  args: {
    columns: BasicColumns,
    data,
  },
  render(props) {
    return <DataTable<Expense> {...props} />
  },
}

export const WithFilters: Story = {
  args: {
    columns: BasicColumns,
    data,
    filterColumn: "owner",
  },
  render(props) {
    return <DataTable<Expense> {...props} />
  },
}

export const Sortable: Story = {
  args: {
    columns: columns,
    data,
    filterColumn: "owner",
  },
  render(props) {
    return <DataTable<Expense> {...props} />
  },
}

export const Cards: Story = {
  args: {
    columns: columns,
    data,
    filterColumn: "owner",
    listType: "cards",
  },
  render(props) {
    return <DataTable<Expense> {...props} />
  },
}
