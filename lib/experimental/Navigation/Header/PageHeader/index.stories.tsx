import { Briefcase, Settings } from "@/icons/app"
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

export const Default: Story = {
  args: {
    module: defaultModule,
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
    actions: [
      {
        label: "Settings",
        icon: Settings,
        href: "/settings",
      },
    ],
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
