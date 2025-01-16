import { Placeholder } from "@/lib/storybook-utils/placeholder"
import type { Meta, StoryObj } from "@storybook/react"
import { DaytimePage, DaytimePageProps, Page } from "."

import { PageHeader } from "../Header/PageHeader"
import * as HeaderStories from "../Header/PageHeader/index.stories"
import { Tabs } from "../Tabs"
import * as TabsStories from "../Tabs/index.stories"

import { HomeLayout } from "@/experimental/PageLayouts/HomeLayout"
import { Default as DefaultHomeLayoutStory } from "@/experimental/PageLayouts/HomeLayout/index.stories"
import { StandardLayout } from "@/experimental/PageLayouts/StandardLayout"
import { Briefcase } from "@/icons/app"
import { ComponentProps } from "react"

type TabsProps = ComponentProps<typeof Tabs>

const meta: Meta<typeof Page> = {
  component: Page,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-f1-background-tertiary p-2">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<DaytimePageProps>

const defaultModule = {
  name: "Time Tracking",
  href: "/time-tracking",
  icon: Briefcase,
}

// Common real-world combinations
export const Default: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          actions={HeaderStories.WithActions.args?.actions}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const WithBreadcrumbs: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          breadcrumbs={[
            { label: "Employees", href: "/employees" },
            { label: "Ainhoa Aznar Lago", href: "/employees/123" },
          ]}
          actions={HeaderStories.WithActions.args?.actions}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const WithBreadcrumbsAndStatus: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          breadcrumbs={[
            { label: "Employees", href: "/employees" },
            { label: "Ainhoa Aznar Lago", href: "/employees/123" },
          ]}
          statusTag={{
            text: "Draft",
            variant: "warning",
            tooltip: "This employee profile is not yet published",
          }}
          actions={HeaderStories.WithActions.args?.actions}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const WithNavigation: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          navigation={{
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
          }}
          actions={HeaderStories.WithActions.args?.actions}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const WithNavigationAndStatus: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          navigation={{
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
          }}
          statusTag={{
            text: "Processing",
            variant: "info",
            tooltip: "Importing employee data",
          }}
          actions={HeaderStories.WithActions.args?.actions}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const Embedded: Story = {
  args: {
    embedded: true,
    header: (
      <>
        <PageHeader
          module={defaultModule}
          embedded
          breadcrumbs={[
            { label: "Employees", href: "/employees" },
            { label: "Ainhoa Aznar Lago", href: "/employees/123" },
          ]}
          statusTag={{
            text: "Published",
            variant: "positive",
          }}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const DaytimeHomeLayout: Story = {
  args: {
    period: "morning",
  },
  argTypes: {
    period: {
      control: "select",
      options: ["morning", "afternoon", "evening"],
    },
  },
  render: ({ period }) => (
    <DaytimePage
      period={period}
      header={
        <div className="px-3 py-4 lg:px-6">
          <p className="text-xl font-semibold">Good morning, Saul!</p>
        </div>
      }
    >
      <HomeLayout {...DefaultHomeLayoutStory.args} />
    </DaytimePage>
  ),
}
