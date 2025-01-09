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

const defaultHeaderProps = {
  ...HeaderStories.Default.args,
  module: defaultModule,
}

const navigationHeaderProps = {
  ...HeaderStories.WithNavigation.args,
  module: defaultModule,
}

const navigationWithActionsHeaderProps = {
  ...HeaderStories.WithNavigationAndActions.args,
  module: defaultModule,
}

const breadcrumbsNavigationHeaderProps = {
  ...HeaderStories.WithBreadcrumbsAndNavigation.args,
  module: defaultModule,
}

const breadcrumbsNavigationWithActionsHeaderProps = {
  ...HeaderStories.WithBreadcrumbsNavigationAndActions.args,
  module: defaultModule,
}

export const Default: Story = {
  args: {
    header: (
      <>
        <PageHeader {...defaultHeaderProps} />
        <Tabs {...TabsStories.Primary.args} />
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

export const WithActions: Story = {
  args: {
    header: (
      <>
        <PageHeader
          {...HeaderStories.WithActions.args}
          module={defaultModule}
        />
        <Tabs {...TabsStories.Primary.args} />
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
        <PageHeader {...navigationHeaderProps} />
        <Tabs {...TabsStories.Primary.args} />
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

export const WithNavigationAndActions: Story = {
  args: {
    header: (
      <>
        <PageHeader {...navigationWithActionsHeaderProps} />
        <Tabs {...TabsStories.Primary.args} />
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

export const WithNavigationAndBreadcrumbs: Story = {
  args: {
    header: (
      <>
        <PageHeader {...breadcrumbsNavigationHeaderProps} />
        <Tabs {...TabsStories.Primary.args} />
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

export const WithNavigationBreadcrumbsAndActions: Story = {
  args: {
    header: (
      <>
        <PageHeader {...breadcrumbsNavigationWithActionsHeaderProps} />
        <Tabs {...TabsStories.Primary.args} />
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

export const Daytime: Story = {
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
        <>
          <PageHeader {...defaultHeaderProps} />
        </>
      }
    >
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    </DaytimePage>
  ),
}

export const DaytimeWithNavigation: Story = {
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
        <>
          <PageHeader {...navigationHeaderProps} />
        </>
      }
    >
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    </DaytimePage>
  ),
}

export const DaytimeWithNavigationAndActions: Story = {
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
        <>
          <PageHeader {...navigationWithActionsHeaderProps} />
        </>
      }
    >
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    </DaytimePage>
  ),
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

export const Embedded: Story = {
  args: {
    embedded: true,
    header: (
      <>
        <PageHeader {...defaultHeaderProps} embedded />
        <Tabs {...TabsStories.Primary.args} />
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

export const EmbeddedWithNavigation: Story = {
  args: {
    embedded: true,
    header: (
      <>
        <PageHeader {...navigationHeaderProps} embedded />
        <Tabs {...TabsStories.Primary.args} />
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

export const EmbeddedWithNavigationAndActions: Story = {
  args: {
    embedded: true,
    header: (
      <>
        <PageHeader {...navigationWithActionsHeaderProps} embedded />
        <Tabs {...TabsStories.Primary.args} />
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

export const EmbeddedDaytime: Story = {
  args: {
    embedded: true,
    period: "morning",
  },
  argTypes: {
    period: {
      control: "select",
      options: ["morning", "afternoon", "evening"],
    },
  },
  render: ({ period, embedded }) => (
    <DaytimePage
      period={period}
      embedded={embedded}
      header={
        <>
          <PageHeader {...defaultHeaderProps} embedded />
        </>
      }
    >
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    </DaytimePage>
  ),
}
