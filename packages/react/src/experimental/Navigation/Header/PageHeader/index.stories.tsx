import { Briefcase, EllipsisHorizontal, Settings } from "../../../../icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { PageHeader } from "./index"

const meta = {
  title: "Navigation/PageHeader",
  component: PageHeader,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
    a11y: {
      // Disable color contrast checks for this component since the status tags
      // are designed to be used with specific backgrounds in the actual application
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-f1-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof PageHeader>

const defaultModule = {
  name: "Time Tracking",
  href: "/time-tracking",
  icon: Briefcase,
}

const defaultActions = [
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "More options",
    icon: EllipsisHorizontal,
    actions: [
      {
        label: "Download",
        href: "/download",
      },
      {
        label: "Export",
        href: "/export",
      },
    ],
  },
]

const defaultNavigation = {
  previous: {
    url: "/previous",
    title: "Previous Employee: John Smith",
  },
  next: {
    url: "/next",
    title: "Next Employee: Sarah Johnson",
  },
  counter: {
    current: 1,
    total: 30,
  },
}

export const Default: Story = {
  args: {
    module: defaultModule,
  },
}

export const WithActions: Story = {
  args: {
    module: defaultModule,
    actions: defaultActions,
  },
}

export const WithStatus: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Published",
      variant: "positive",
    },
  },
}

export const WithStatusVariants: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Draft",
      variant: "warning",
      tooltip: "This document is not yet published",
    },
  },
}

export const WithNavigation: Story = {
  args: {
    module: defaultModule,
    navigation: defaultNavigation,
  },
}

export const WithNavigationDisabled: Story = {
  args: {
    module: defaultModule,
    navigation: {
      next: {
        url: "/next",
        title: "Next Employee: Sarah Johnson",
      },
      counter: {
        current: 1,
        total: 30,
      },
    },
  },
}

export const WithBreadcrumbs: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
  },
}

export const WithSelectBreadcrumb: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      {
        type: "select",
        id: "employee",
        label: "Ainhoa Aznar Lago",
        searchbox: true,
        options: Array.from({ length: 10 }, (_, idx) => ({
          value: idx.toString(),
          label: `Offer ${idx}`,
        })),
        value: "1",
        onChange: (value) => {
          console.log("WithSelectBreadcrumb value", value)
        },
      },
    ],
  },
}

export const WithEverything: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    navigation: defaultNavigation,
    statusTag: {
      text: "Draft",
      tooltip: "This employee profile is not yet published",
      variant: "critical",
    },
    actions: defaultActions,
  },
}

export const WithProductUpdate: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    navigation: defaultNavigation,
    statusTag: {
      text: "Draft",
      tooltip: "This employee profile is not yet published",
      variant: "critical",
    },
    actions: defaultActions,
    productUpdates: {
      isVisible: true,
      label: "Product Updates",
      updatesPageUrl: "https://factorialmakers.atlassian.net/browse/FCT-24580",
      getUpdatesQuery: async () => {
        return new Promise((resolve) => {
          setTimeout(
            () =>
              resolve([
                {
                  title: "Project timetable with absence information",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                  imageURL: "https://placecats.com/neo/300/200",
                  updated: "4 mar 2025",
                  unread: true
                },
                {title: "New Client section",
                  imageURL: "https://placecats.com/neo/300/200",
                  updated: "3 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                  unread: true
                },
                {title: "Spending tab in projects",
                  imageURL: "https://placecats.com/neo/300/200",
                  updated: "2 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                },
                {title: "Improved management of planned income and costs",
                  imageURL: "https://placecats.com/neo/300/200",
                  updated: "1 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                },
                {title: "Project hours by employee export",
                  imageURL: "https://placecats.com/neo/300/200",
                  updated: "1 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                }
              ]),
            0
          )
        })
      },
      hasUnread: false,
    },
  },
}

export const Embedded: Story = {
  args: {
    module: defaultModule,
    embedded: true,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
  },
}

export const EmbeddedWithLoading: Story = {
  args: {
    module: defaultModule,
    embedded: true,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "loading", loading: true },
    ],
  },
}
