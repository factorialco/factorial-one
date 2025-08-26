import { F0Card } from "@/components/F0Card"
import { ArrowUp, Clock, Delete, Pencil, Person, Search } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useState } from "react"
import { RecordType } from "../../OneDataCollection/types"
import { OneLane } from "../OneLane"
import {
  additionalMockTasks,
  allMockTasks,
  MockTask,
  mockTasks,
} from "./mockData"

const FETCH_DELAY = 1000

const meta = {
  component: OneLane,
  title: "Lane",
  parameters: {
    docs: {
      story: { inline: false, height: "750px" },
    },
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="flex h-[calc(100vh-32px)] w-full items-center justify-center p-4">
        <div className="w-full max-w-[400px]">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof OneLane>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    maxHeight: 600,
    title: "In Progress",
    items: mockTasks,
    getKey: (task, _index) => (task as MockTask).id,
    hasMore: false,
    renderCard: (task: RecordType, _index: number) => {
      const mockTask = task as MockTask
      return (
        <F0Card
          title={mockTask.title}
          description={mockTask.description}
          metadata={[
            {
              icon: Person,
              property: { type: "text", value: mockTask.assignee },
            },
            {
              icon: ArrowUp,
              property: { type: "text", value: mockTask.priority },
            },
            {
              icon: Clock,
              property: { type: "text", value: mockTask.dueDate },
            },
          ]}
          primaryAction={{
            label: "View Details",
            onClick: () => console.log("View task:", mockTask.id),
          }}
          secondaryActions={[
            {
              label: "Edit",
              icon: Pencil,
              onClick: () => console.log("Edit task:", mockTask.id),
            },
          ]}
          otherActions={[
            {
              label: "Quick View",
              icon: Search,
              onClick: () => console.log("Quick view:", mockTask.id),
            },
            {
              label: "Delete",
              icon: Delete,
              onClick: () => console.log("Delete task:", mockTask.id),
            },
          ]}
        />
      )
    },
  },
}

export const WithFetchMore: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the infinite scroll functionality. Scroll to the bottom of the lane to automatically fetch more items. The loading state is shown while fetching, and new items are added to the list.",
      },
    },
  },
  args: {
    maxHeight: 600,
    title: "Tasks - Infinite Scroll",
    items: mockTasks,
    getKey: (task, _index) => (task as MockTask).id,
    hasMore: true,
    loading: false,
    renderCard: (task: RecordType, _index: number) => {
      const mockTask = task as MockTask
      return (
        <F0Card
          metadata={[
            {
              icon: Person,
              property: { type: "text", value: mockTask.assignee },
            },
            {
              icon: ArrowUp,
              property: { type: "text", value: mockTask.priority },
            },
            {
              icon: Clock,
              property: { type: "text", value: mockTask.dueDate },
            },
          ]}
        />
      )
    },
  },
  render: function Render(args: any) {
    const [items, setItems] = useState<MockTask[]>(mockTasks)
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, FETCH_DELAY)
    }, [])

    const handleFetchMore = () => {
      console.log("Fetching more tasks...")

      // Simulate loading
      setLoadingMore(true)

      setTimeout(() => {
        const currentCount = items.length
        const alreadyLoadedCount = mockTasks.length
        const additionalItemsLoaded = currentCount - alreadyLoadedCount

        // Calculate the correct start index for additionalMockTasks
        const startIndex = additionalItemsLoaded
        const endIndex = startIndex + 2

        console.log("Loading items:", {
          currentCount,
          alreadyLoadedCount,
          additionalItemsLoaded,
          startIndex,
          endIndex,
          availableItems: additionalMockTasks.length,
        })

        const itemsToAdd = additionalMockTasks.slice(startIndex, endIndex)

        const newItems = [...items, ...itemsToAdd]
        const hasMoreItems = newItems.length < allMockTasks.length

        console.log(
          "New items added:",
          itemsToAdd.length,
          "Total items:",
          newItems.length,
          "Has more:",
          hasMoreItems
        )

        setItems(newItems)
        setHasMore(hasMoreItems)
        setLoadingMore(false)
      }, FETCH_DELAY)
    }

    return (
      <OneLane
        {...args}
        items={items}
        loading={loading}
        hasMore={hasMore}
        loadingMore={loadingMore}
        fetchMore={handleFetchMore}
      />
    )
  },
}

export const EmptyState: Story = {
  args: {
    title: "Backlog",
    items: [],
    getKey: (task) => (task as MockTask).id,
    renderCard: (task) => {
      const mockTask = task as MockTask
      return (
        <F0Card title={mockTask.title} description={mockTask.description} />
      )
    },
  },
}

export const CustomEmptyState: Story = {
  args: {
    title: "Backlog",
    items: [],
    getKey: (task) => (task as MockTask).id,
    renderCard: (task) => {
      const mockTask = task as MockTask
      return (
        <F0Card title={mockTask.title} description={mockTask.description} />
      )
    },
    emptyState: (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="mb-2 text-f1-foreground-secondary">
          No tasks in backlog
        </div>
        <div className="text-sm text-f1-foreground-tertiary">
          Tasks will appear here when added to the backlog
        </div>
      </div>
    ),
  },
}

export const Loading: Story = {
  args: {
    title: "Loading Tasks",
    items: [],
    getKey: (task) => (task as MockTask).id,
    renderCard: (task) => <F0Card title={(task as MockTask).title} />,
    loading: true,
  },
}

export const CompactCards: Story = {
  args: {
    title: "Quick Tasks",
    items: mockTasks.slice(0, 2),
    getKey: (task) => (task as MockTask).id,
    renderCard: (task) => {
      const mockTask = task as MockTask
      return (
        <F0Card
          compact
          title={mockTask.title}
          description={mockTask.description}
          metadata={[
            {
              icon: ArrowUp,
              property: { type: "text", value: mockTask.priority },
            },
          ]}
        />
      )
    },
  },
}

export const WithImages: Story = {
  args: {
    title: "Projects",
    items: [
      {
        id: "project-1",
        title: "E-commerce Redesign",
        description: "Complete overhaul of the online store interface",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
        team: "Design Team",
      },
      {
        id: "project-2",
        title: "Mobile App Launch",
        description: "Release new mobile application for iOS and Android",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
        team: "Development Team",
      },
    ] as Array<{
      id: string
      title: string
      description: string
      image: string
      team: string
    }>,
    getKey: (project) => (project as any).id,
    renderCard: (project) => {
      const proj = project as any
      return (
        <F0Card
          title={proj.title}
          description={proj.description}
          image={proj.image}
          metadata={[
            {
              icon: Person,
              property: { type: "text", value: proj.team },
            },
          ]}
          link={`/projects/${proj.id}`}
        />
      )
    },
  },
}
