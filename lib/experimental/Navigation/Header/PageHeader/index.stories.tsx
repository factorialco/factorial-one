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

export const WithNavigation: Story = {
  args: {
    module: defaultModule,
    navigation: {
      previous: {
        url: "/previous",
      },
      next: {
        url: "/next",
      },
      counter: {
        current: 1,
        total: 30,
      },
    },
  },
}

export const WithNavigationAndActions: Story = {
  args: {
    module: defaultModule,
    navigation: {
      previous: {
        url: "/previous",
      },
      next: {
        url: "/next",
      },
      counter: {
        current: 1,
        total: 30,
      },
    },
    actions: defaultActions,
  },
}

export const WithNavigationDisabledPrevious: Story = {
  args: {
    module: defaultModule,
    navigation: {
      next: {
        url: "/next",
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
      },
      next: {
        url: "/next",
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
      },
      next: {
        url: "/next",
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
    navigation: {
      previous: {
        url: "/previous",
      },
      next: {
        url: "/next",
      },
      counter: {
        current: 1,
        total: 30,
      },
    },
  },
}

export const WithBreadcrumbsNavigationAndActions: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { label: "Employees", href: "/employees" },
      { label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    navigation: {
      previous: {
        url: "/previous",
      },
      next: {
        url: "/next",
      },
      counter: {
        current: 1,
        total: 30,
      },
    },
    actions: defaultActions,
  },
}

export const WithNavigationAndStatus: Story = {
  args: {
    module: defaultModule,
    navigation: {
      previous: {
        url: "/previous",
      },
      next: {
        url: "/next",
      },
      counter: {
        current: 1,
        total: 30,
      },
    },
    statusTag: {
      text: "Published",
      variant: "positive",
    },
  },
}

export const WithNavigationStatusAndActions: Story = {
  args: {
    module: defaultModule,
    navigation: {
      previous: {
        url: "/previous",
      },
      next: {
        url: "/next",
      },
      counter: {
        current: 1,
        total: 30,
      },
    },
    statusTag: {
      text: "Published",
      variant: "positive",
    },
    actions: defaultActions,
  },
}

export const WithStatusAndActions: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Published",
      variant: "positive",
    },
    actions: defaultActions,
  },
}
