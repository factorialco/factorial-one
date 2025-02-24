import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { PersonAvatar } from "@/experimental/Information/Avatars/exports"
import {
  RawTag,
  StatusTag,
  type StatusVariant,
} from "@/experimental/Information/Tags/exports"
import { OnePagination } from "@/experimental/OnePagination"
import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import {
  OneTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "."

const meta: Meta<typeof OneTable> = {
  title: "Table",
  component: OneTable,
  tags: ["experimental"],
}

export default meta
type Story = StoryObj<typeof OneTable>

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
    <OneTable>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <PersonAvatar
                  firstName={row.name.split(" ")[0]}
                  lastName={row.name.split(" ")[1]}
                  size="small"
                />
                <span className="font-medium">{row.name}</span>
              </div>
            </TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>
              <div className="w-fit">
                <RawTag text={row.role} />
              </div>
            </TableCell>
            <TableCell>
              <div className="w-fit">
                <StatusTag
                  text={row.status.label}
                  variant={row.status.variant}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </OneTable>
  ),
}

export const Check: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>(
      () => ({
        [sampleData[0].id]: true,
        [sampleData[2].id]: true,
      })
    )

    const selectedCount = Object.values(selectedRows).filter(Boolean).length
    const isAllSelected = selectedCount === sampleData.length
    const isPartiallySelected =
      selectedCount > 0 && selectedCount < sampleData.length

    const handleSelectAll = (checked: boolean) => {
      const newSelected = {} as Record<string, boolean>
      sampleData.forEach((row) => {
        newSelected[row.id] = checked
      })
      setSelectedRows(newSelected)
    }

    return (
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox
                checked={isAllSelected || isPartiallySelected}
                indeterminate={isPartiallySelected}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id} selected={selectedRows[row.id]}>
              <TableCell>
                <Checkbox
                  checked={!!selectedRows[row.id]}
                  onCheckedChange={(checked) => {
                    setSelectedRows((prev) => ({
                      ...prev,
                      [row.id]: checked,
                    }))
                  }}
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </OneTable>
    )
  },
}

export const InfoHeader: Story = {
  render: () => (
    <OneTable>
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
    </OneTable>
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
      <OneTable>
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
      </OneTable>
    )
  },
}

export const StickyTable: Story = {
  render: () => (
    <OneTable>
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
    </OneTable>
  ),
}

export const Skeleton: Story = {
  render: () => <OneTable.Skeleton columns={3} />,
}

const summatoryData = [
  {
    day: "Monday",
    productA: "1.200,00 €",
    productB: "850,00 €",
    productC: "1.500,00 €",
  },
  {
    day: "Tuesday",
    productA: "1.350,00 €",
    productB: "900,00 €",
    productC: "1.750,00 €",
  },
  {
    day: "Wednesday",
    productA: "1.500,00 €",
    productB: "1.000,00 €",
    productC: "1.600,00 €",
  },
  {
    day: "Thursday",
    productA: "1.400,00 €",
    productB: "950,00 €",
    productC: "1.700,00 €",
  },
  {
    day: "Friday",
    productA: "1.600,00 €",
    productB: "1.100,00 €",
    productC: "1.800,00 €",
  },
]

export const Summatory: Story = {
  render: () => (
    <OneTable>
      <TableHeader>
        <TableRow>
          <TableHead>Day</TableHead>
          <TableHead>
            <div className="w-full text-right">Product A Sales</div>
          </TableHead>
          <TableHead>
            <div className="w-full text-right">Product B Sales</div>
          </TableHead>
          <TableHead>
            <div className="w-full text-right">Product C Sales</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {summatoryData.map((row) => (
          <TableRow key={row.day}>
            <TableCell>
              <span className="font-medium">{row.day}</span>
            </TableCell>
            <TableCell>
              <div className="w-full text-right tabular-nums">
                {row.productA}
              </div>
            </TableCell>
            <TableCell>
              <div className="w-full text-right tabular-nums">
                {row.productB}
              </div>
            </TableCell>
            <TableCell>
              <div className="w-full text-right tabular-nums">
                {row.productC}
              </div>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell>
            <span className="font-medium">Total</span>
          </TableCell>
          <TableCell>
            <div className="flex w-full items-center justify-end gap-1">
              <span className="text-f1-foreground-secondary">sum</span>
              <span className="font-medium tabular-nums">7.050,00 €</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex w-full items-center justify-end gap-1">
              <span className="text-f1-foreground-secondary">sum</span>
              <span className="font-medium tabular-nums">4.800,00 €</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex w-full items-center justify-end gap-1">
              <span className="text-f1-foreground-secondary">sum</span>
              <span className="font-medium tabular-nums">8.350,00 €</span>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </OneTable>
  ),
}

export const Footer: Story = {
  render: () => (
    <>
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <PersonAvatar
                    firstName={row.name.split(" ")[0]}
                    lastName={row.name.split(" ")[1]}
                    size="small"
                  />
                  <span className="font-medium">{row.name}</span>
                </div>
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <div className="w-fit">
                  <RawTag text={row.role} />
                </div>
              </TableCell>
              <TableCell>
                <div className="w-fit">
                  <StatusTag
                    text={row.status.label}
                    variant={row.status.variant}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </OneTable>
      <div className="flex w-full items-center justify-between py-3">
        <span className="shrink-0 text-f1-foreground-secondary">
          1-4 of 100
        </span>
        <div className="flex items-center">
          <OnePagination totalPages={10} currentPage={1} />
        </div>
      </div>
    </>
  ),
}
