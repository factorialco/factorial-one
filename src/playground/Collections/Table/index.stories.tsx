import type { Meta, StoryObj } from "@storybook/react"

import { Column, Table } from "."

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

const columns: Column<RowData>[] = [
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
    meta: {
      options: [
        { label: "Forever LE", value: 1 },
        { label: "Another LE", value: 2 },
        { label: "The third one LE", value: 3 },
      ],
    },
  },
  {
    accessorKey: "employeeGroupId",
    header: "Employee Group",
    meta: {
      options: [
        { label: "Default", value: 1 },
        { label: "Another EG", value: 2 },
        { label: "The third one EG", value: 3 },
      ],
    },
  },
  {
    accessorKey: "managerId",
    header: "Manager",
    meta: {
      options: [{ label: "Jimmy Floyd Hasselbaink", value: 1 }],
    },
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
    onDataChange: (updatedData: RowData[]) => console.log(updatedData),
  },
}
