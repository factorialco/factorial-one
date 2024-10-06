import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "@/factorial-one"
import { Column, Table } from "."

type RowData = {
  id: number
  firstName: string
  lastName: string
  legalEntityId: number
  employeeGroupId: number
  managerId: number
}

const firstNames = [
  "Peter",
  "Egon",
  "Ray",
  "Winston",
  "Janine",
  "Dana",
  "Louis",
]

const lastNames = [
  "Venkman",
  "Spengler",
  "Stantz",
  "Zeddemore",
  "Melnitz",
  "Tully",
]

const randomElement = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)]
}

const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateRowData = (count = 4000): RowData[] => {
  return Array.from({ length: count }, (_, index) => {
    const firstName = randomElement(firstNames)
    const lastName = randomElement(lastNames)

    return {
      id: index + 1,
      firstName,
      lastName,
      legalEntityId: randomNumber(1, 3),
      employeeGroupId: randomNumber(1, 3),
      managerId: randomNumber(1, 1),
      employee: () => (
        <Badge
          avatar={{
            alt: `${firstName[0]}${lastName[0]}`,
            src: "https://github.com/dani-moreno.png",
          }}
          text={`${firstName} ${lastName}`}
          variant="name"
        />
      ),
    }
  })
}

const columns: Column<RowData>[] = [
  {
    accessorKey: "employee",
    header: "Employee",
  },
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
