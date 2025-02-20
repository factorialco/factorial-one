import {
  StatusTag,
  type StatusVariant,
} from "@/experimental/Information/Tags/exports"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "."

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
  tags: ["experimental"],
}

export default meta
type Story = StoryObj<typeof Table>

const sampleData = [
  {
    id: 1,
    name: "Nik Lopin",
    email: "nik@example.com",
    role: "Admin",
    joined: "2024-01-01",
    manager: "Eliseo Juan Quintanilla",
    status: {
      label: "Active",
      variant: "positive" as StatusVariant,
    },
    selected: false,
  },
  {
    id: 2,
    name: "Josep Jaume Rey",
    email: "jj@example.com",
    role: "User",
    joined: "2024-01-01",
    manager: "Eliseo Juan Quintanilla",
    status: {
      label: "Active",
      variant: "positive" as StatusVariant,
    },
    selected: true,
  },
  {
    id: 3,
    name: "Saúl Domínguez",
    email: "saul@example.com",
    role: "Editor",
    joined: "2024-01-01",
    manager: "Eliseo Juan Quintanilla",
    status: {
      label: "Promoted",
      variant: "warning" as StatusVariant,
    },
    selected: true,
  },
  {
    id: 4,
    name: "Desirée Navarro",
    email: "desi@example.com",
    role: "Editor",
    joined: "2024-01-01",
    manager: "René Galindo",
    status: {
      label: "Active",
      variant: "positive" as StatusVariant,
    },
    selected: false,
  },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Check: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id} selected={row.selected}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const InfoHeader: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead info="Legal name of the employee">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead info="This is the current status of the employee">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

type SortState = "asc" | "desc" | undefined
type SortColumn = "name" | "email" | "role"

export const SortableHeader: Story = {
  render: () => {
    const [sortConfig, setSortConfig] = React.useState<{
      column: SortColumn | null
      direction: SortState
    }>({
      column: "name",
      direction: "asc",
    })

    const handleSort = (column: SortColumn) => {
      setSortConfig((current) => ({
        column,
        direction:
          current.column === column
            ? current.direction === "asc"
              ? "desc"
              : "asc"
            : "asc",
      }))
    }

    const sortedData = React.useMemo(() => {
      if (!sortConfig.column) return sampleData

      return [...sampleData].sort((a, b) => {
        const aValue = a[sortConfig.column!]
        const bValue = b[sortConfig.column!]

        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      })
    }, [sortConfig])

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              onSortClick={() => handleSort("name")}
              sortState={
                sortConfig.column === "name" ? sortConfig.direction : undefined
              }
            >
              Name
            </TableHead>
            <TableHead
              onSortClick={() => handleSort("email")}
              sortState={
                sortConfig.column === "email" ? sortConfig.direction : undefined
              }
            >
              Email
            </TableHead>
            <TableHead
              onSortClick={() => handleSort("role")}
              sortState={
                sortConfig.column === "role" ? sortConfig.direction : undefined
              }
            >
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

export const StickyTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead sticky>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Joined</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell sticky>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.joined}</TableCell>
            <TableCell>{row.manager}</TableCell>
            <TableCell>
              <div className="w-fit">
                <StatusTag
                  text={row.status.label}
                  variant={row.status.variant}
                />
              </div>
            </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Skeleton: Story = {
  render: () => <Table.Skeleton columns={3} />,
}
