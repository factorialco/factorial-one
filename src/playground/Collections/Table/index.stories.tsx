import type { Meta, StoryObj } from "@storybook/react"

import { Table, type ColumnDef } from "."

type RowData = {
  id: number
  firstName: string
  lastName: string
  legalEntityId: number
  employeeGroupId: number
  managerId: number
}

const data: RowData[] = [
  {
    id: 1,
    firstName: "Peter",
    lastName: "Venkman",
    legalEntityId: 1,
    employeeGroupId: 1,
    managerId: 1,
  },
  {
    id: 2,
    firstName: "Egon",
    lastName: "Spemngler",
    legalEntityId: 1,
    employeeGroupId: 1,
    managerId: 1,
  },
  {
    id: 3,
    firstName: "Ray",
    lastName: "Stantz",
    legalEntityId: 1,
    employeeGroupId: 1,
    managerId: 1,
  },
  {
    id: 4,
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
  },
  {
    accessorKey: "lastName",
    header: "Last name",
  },
  {
    accessorKey: "legalEntityId",
    header: "Legal entity",
  },
  {
    accessorKey: "employeeGroupId",
    header: "Legal entity",
  },
  {
    accessorKey: "managerId",
    header: "Manager",
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

export const Editable: Story = {
  args: {
    isEditable: true,
  },
}
