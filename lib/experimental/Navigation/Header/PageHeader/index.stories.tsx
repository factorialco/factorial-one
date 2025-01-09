import { Briefcase, EllipsisHorizontal, Settings } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { PageHeader } from "."

const meta = {
  title: "Navigation/Header/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
  },
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

export const WithStatusAndTooltip: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Draft",
      variant: "warning",
      tooltip: "This document is not yet published",
    },
  },
}

export const WithStatusCritical: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Error",
      variant: "critical",
    },
  },
}

export const WithStatusInfo: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Processing",
      variant: "info",
    },
  },
}

export const WithStatusNeutral: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Archived",
      variant: "neutral",
    },
  },
}

export const WithNavigation: Story = {
  args: {
    module: defaultModule,
    navigation: defaultNavigation,
  },
}

export const WithNavigationAndActions: Story = {
  args: {
    module: defaultModule,
    navigation: defaultNavigation,
    actions: defaultActions,
  },
}

export const WithNavigationDisabledPrevious: Story = {
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

export const WithNavigationDisabledNext: Story = {
  args: {
    module: defaultModule,
    navigation: {
      previous: {
        url: "/previous",
        title: "Previous Employee: John Smith",
      },
      counter: {
        current: 30,
        total: 30,
      },
    },
  },
}

export const WithNavigationNoCounter: Story = {
  args: {
    module: defaultModule,
    navigation: {
      previous: {
        url: "/previous",
        title: "Previous Employee: John Smith",
      },
      next: {
        url: "/next",
        title: "Next Employee: Sarah Johnson",
      },
    },
  },
}

export const WithNavigationNoCounterAndActions: Story = {
  args: {
    module: defaultModule,
    navigation: {
      previous: {
        url: "/previous",
        title: "Previous Employee: John Smith",
      },
      next: {
        url: "/next",
        title: "Next Employee: Sarah Johnson",
      },
    },
    actions: defaultActions,
  },
}

export const WithBreadcrumbsAndNavigation: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { label: "Employees", href: "/employees" },
      { label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    navigation: defaultNavigation,
  },
}

export const WithBreadcrumbsNavigationAndActions: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { label: "Employees", href: "/employees" },
      { label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    navigation: defaultNavigation,
    actions: defaultActions,
  },
}

export const WithNavigationAndStatus: Story = {
  args: {
    module: defaultModule,
    navigation: defaultNavigation,
    statusTag: {
      text: "Published",
      variant: "positive",
    },
  },
}

export const WithNavigationStatusAndActions: Story = {
  args: {
    module: defaultModule,
    navigation: defaultNavigation,
    statusTag: {
      text: "Published",
      variant: "positive",
    },
    actions: defaultActions,
  },
}

export const WithBreadcrumbsAndStatus: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { label: "Employees", href: "/employees" },
      { label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    statusTag: {
      text: "Draft",
      variant: "warning",
      tooltip: "This employee profile is not yet published",
    },
  },
}

export const WithBreadcrumbsStatusAndActions: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { label: "Employees", href: "/employees" },
      { label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    statusTag: {
      text: "Draft",
      variant: "warning",
      tooltip: "This employee profile is not yet published",
    },
    actions: defaultActions,
  },
}
