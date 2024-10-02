import type { Meta, StoryObj } from "@storybook/react"

import { ColumnDef } from "@tanstack/react-table"
import { Table } from "."

type RowData = {
  firstName: string
  lastName: string
  legalEntityId: number
  employeeGroupId: number
  managerId: number
}

const data: RowData[] = [
  {
    firstName: "Peter",
    lastName: "Venkman",
    legalEntityId: 1,
    employeeGroupId: 1,
    managerId: 1,
  },
  {
    firstName: "Egon",
    lastName: "Spemngler",
    legalEntityId: 1,
    employeeGroupId: 1,
    managerId: 1,
  },
  {
    firstName: "Ray",
    lastName: "Stantz",
    legalEntityId: 1,
    employeeGroupId: 1,
    managerId: 1,
  },
  {
    firstName: "Winston",
    lastName: "Zeddemore",
    legalEntityId: 1,
    employeeGroupId: 1,
    managerId: 1,
  },
]

const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: "firstName",
    header: "First name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "lastName",
    header: "Last name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "legalEntityId",
    header: "Legal entity",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "employeeGroupId",
    header: "Legal entity",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "managerId",
    header: "Manager",
    cell: (info) => info.getValue(),
  },
]

const meta: Meta = {
  component: Table,
  args: {
    columns,
    data,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
