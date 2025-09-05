import { Briefcase, Building, Envelope, Star } from "@/icons/app"
import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo, useState } from "react"
import { GroupingDefinition } from "../../grouping"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import type { Visualization } from "../../visualizations/collection"
import {
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
  getMockVisualizations,
  sortings,
  type FiltersType,
  type MockUser,
} from "../mockData"

const meta = {
  title: "Data Collection/Visualizations/Kanban",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Kanban view visualization. Displays records distributed across lanes.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicKanbanVisualization: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [instanceId] = useState(() => Symbol("kanban-visualization"))
    // Increase dataset to demonstrate per-lane infinite scroll
    const [items, setItems] = useState<MockUser[]>(() => generateMockUsers(90))
    const mockVisualizations = getMockVisualizations({
      frozenColumns: 0,
    })
    const kanbanVis: Visualization<
      MockUser,
      FiltersType,
      typeof sortings,
      SummariesDefinition,
      ItemActionsDefinition<MockUser>,
      NavigationFiltersDefinition,
      GroupingDefinition<MockUser>
    > = {
      type: "kanban",
      options: {
        lanes: [
          {
            id: "eng",
            title: "Engineering",
            variant: "info",
          },
          {
            id: "prod",
            title: "Product",
            variant: "neutral",
          },
          {
            id: "design",
            title: "Design",
            variant: "positive",
          },
          {
            id: "other",
            title: "Other",
            variant: "warning",
          },
        ],
        title: (u) => u.name,
        description: (u) => u.role,
        avatar: (u) => ({
          type: "person",
          firstName: u.name.split(" ")[0] ?? "",
          lastName: u.name.split(" ")[1] ?? "",
        }),
        metadata: (u) => [
          { icon: Envelope, property: { type: "text", value: u.email } },
          { icon: Building, property: { type: "text", value: u.department } },
          { icon: Briefcase, property: { type: "text", value: u.role } },
          { icon: Star, property: { type: "text", value: u.id } },
        ],
        onMove: async (fromLaneId, toLaneId, sourceId, toIndex) => {
          const laneToDept: Record<string, MockUser["department"]> = {
            eng: "Engineering",
            prod: "Product",
            design: "Design",
            other: "Marketing",
          }
          const itemsClone = items.map((u) => ({ ...u }))

          // 1) Emulate change of department
          const idx = itemsClone.findIndex((u) => u.id === sourceId)
          if (idx === -1) {
            return
          }

          const newDept = laneToDept[toLaneId] ?? itemsClone[idx].department

          itemsClone[idx] = {
            ...itemsClone[idx],
            department: newDept,
          }

          if (toIndex !== null) {
            if (fromLaneId === toLaneId) {
              // Same-lane reorder: compute absolute destination AFTER removal
              const laneAbsBefore = itemsClone
                .map((u, i) => ({ u, i }))
                .filter(({ u }) => u.department === laneToDept[toLaneId])
                .map(({ i }) => i)
              if (laneAbsBefore.length === 0) return
              const absFrom = itemsClone.findIndex((u) => u.id === sourceId)
              if (absFrom === -1) return
              const [moved] = itemsClone.splice(absFrom, 1)
              const laneAbsAfter = itemsClone
                .map((u, i) => ({ u, i }))
                .filter(({ u }) => u.department === laneToDept[toLaneId])
                .map(({ i }) => i)
              const maxAfter = laneAbsAfter.length
              const clamp = (n: number, min: number, max: number) =>
                Math.min(Math.max(n, min), max)
              const clampedTo = clamp(toIndex, 0, maxAfter)
              let absTo: number
              if (clampedTo === maxAfter) {
                absTo = (laneAbsAfter[laneAbsAfter.length - 1] ?? absFrom) + 1
              } else {
                absTo = laneAbsAfter[clampedTo] as number
              }
              itemsClone.splice(absTo, 0, moved)
            } else {
              // Cross-lane move with toIndex: remove first, compute dest indices, insert
              const absFrom = itemsClone.findIndex((u) => u.id === sourceId)
              if (absFrom === -1) return

              const [moved] = itemsClone.splice(absFrom, 1)
              const destAbs = itemsClone
                .map((u, i) => ({ u, i }))
                .filter(({ u }) => u.department === laneToDept[toLaneId])
                .map(({ i }) => i)

              const clamp = (n: number, min: number, max: number) =>
                Math.min(Math.max(n, min), max)
              const max = destAbs.length
              const clampedTo = clamp(toIndex, 0, max)

              let absTo: number
              if (clampedTo === max) {
                absTo = (destAbs[max - 1] ?? absFrom) + 1
              } else {
                absTo = destAbs[clampedTo] as number
              }

              itemsClone.splice(absTo, 0, moved)
            }
          }

          setItems(itemsClone)
        },
      },
    }

    // Create a dataAdapter that recreates when items change (to trigger lane refetch)
    const dataAdapter = useMemo(() => {
      console.log(`🔄 Creating new dataAdapter with ${items.length} items`)
      return createDataAdapter({
        data: items, // Always use current items
        paginationType: "infinite-scroll",
        perPage: 10,
      })
    }, [items])

    return (
      <DndProvider driver={createAtlaskitDriver(instanceId)}>
        <ExampleComponent
          visualizations={[kanbanVis, mockVisualizations.table]}
          dataAdapter={dataAdapter}
        />
      </DndProvider>
    )
  },
}
