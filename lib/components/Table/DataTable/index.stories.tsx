import type { Meta, StoryObj } from "@storybook/react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "."

interface Person {
  id: number
  name: string
  email: string
}

const meta: Meta<typeof DataTable<Person>> = {
  component: DataTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

const data: Person[] = [
  { id: 1, name: "Homer Simpson", email: "homer@simpsons.com" },
  { id: 2, name: "Marge Simpson", email: "marge@simpsons.com" },
  { id: 3, name: "Bart Simpson", email: "bart@simpsons.com" },
  { id: 4, name: "Lisa Simpson", email: "lisa@simpsons.com" },
  { id: 5, name: "Maggie Simpson", email: "maggie@simpsons.com" },
  { id: 6, name: "Peter Griffin", email: "peter@familyguy.com" },
  { id: 7, name: "Lois Griffin", email: "lois@familyguy.com" },
  { id: 8, name: "Stewie Griffin", email: "stewie@familyguy.com" },
  { id: 9, name: "Brian Griffin", email: "brian@familyguy.com" },
  { id: 10, name: "Meg Griffin", email: "meg@familyguy.com" },
  { id: 11, name: "Bender Rodriguez", email: "bender@futurama.com" },
  { id: 12, name: "Philip J. Fry", email: "fry@futurama.com" },
  { id: 13, name: "Turanga Leela", email: "leela@futurama.com" },
  { id: 14, name: "Professor Farnsworth", email: "farnsworth@futurama.com" },
  { id: 15, name: "Amy Wong", email: "amy@futurama.com" },
  { id: 16, name: "Hermes Conrad", email: "hermes@futurama.com" },
  { id: 17, name: "Zoidberg", email: "zoidberg@futurama.com" },
  { id: 18, name: "Scruffy", email: "scruffy@futurama.com" },
  { id: 19, name: "Rick Sanchez", email: "rick@rickandmorty.com" },
  { id: 20, name: "Morty Smith", email: "morty@rickandmorty.com" },
  { id: 21, name: "Summer Smith", email: "summer@rickandmorty.com" },
  { id: 22, name: "Beth Smith", email: "beth@rickandmorty.com" },
  { id: 23, name: "Jerry Smith", email: "jerry@rickandmorty.com" },
  { id: 24, name: "Squidward Tentacles", email: "squidward@spongebob.com" },
  { id: 25, name: "Patrick Star", email: "patrick@spongebob.com" },
  { id: 26, name: "Sandy Cheeks", email: "sandy@spongebob.com" },
  { id: 27, name: "Mr. Krabs", email: "krabs@spongebob.com" },
  { id: 28, name: "Plankton", email: "plankton@spongebob.com" },
  { id: 29, name: "SpongeBob SquarePants", email: "spongebob@spongebob.com" },
  { id: 30, name: "Squilliam Fancyson", email: "squilliam@spongebob.com" },
]

const columns: ColumnDef<Person>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
]

export const Basic: Story = {
  args: {
    columns,
    data: data.slice(0, 9),
  },
  render(props) {
    return <DataTable<Person> {...props} />
  },
}

export const WithPagination: Story = {
  args: {
    columns,
    data,
  },
  render(props) {
    return <DataTable<Person> {...props} />
  },
}

export const WithFilters: Story = {
  args: {
    columns,
    data,
    filtering: true,
  },
  render(props) {
    return <DataTable<Person> {...props} />
  },
}

// export const WithSorting: Story = {
//   args: {
//     columns,
//     data,
//     sorting: true,
//   },
//   render(props) {
//     return <DataTable<Person> {...props} />
//   },
// }
