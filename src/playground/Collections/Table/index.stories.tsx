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

const randomFirstName = () => {
  const firstNames = [
    "Peter",
    "Egon",
    "Ray",
    "Winston",
    "Janine",
    "Dana",
    "Louis",
  ]

  return firstNames[Math.floor(Math.random() * firstNames.length)]
}

const randomLastName = () => {
  const lastNames = [
    "Venkman",
    "Spengler",
    "Stantz",
    "Zeddemore",
    "Melnitz",
    "Tully",
  ]

  return lastNames[Math.floor(Math.random() * lastNames.length)]
}

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generateRowData = (count = 4000): RowData[] => {
  return Array.from({ length: count }, () => ({
    id: count + 1,
    firstName: randomFirstName(),
    lastName: randomLastName(),
    legalEntityId: randomNumber(1, 3),
    employeeGroupId: randomNumber(1, 3),
    managerId: randomNumber(1, 1),
  }))
}

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
    data: generateRowData(),
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
