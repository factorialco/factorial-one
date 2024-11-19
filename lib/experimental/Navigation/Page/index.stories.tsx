import { Placeholder } from "@/lib/storybook-utils/placeholder"
import type { Meta, StoryObj } from "@storybook/react"
import { DaytimePage, DaytimePageProps, Page } from "."

import { PageHeader } from "../Header/PageHeader"
import * as HeaderStories from "../Header/PageHeader/index.stories"
import { Tabs } from "../Tabs"
import * as TabsStories from "../Tabs/index.stories"

import { StandardLayout } from "@/experimental/PageLayouts/StandardLayout"

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

export const Default: Story = {
  args: {
    header: (
      <>
        <PageHeader {...HeaderStories.FirstLevel.args} />
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
          <PageHeader {...HeaderStories.FirstLevel.args} />
          <Tabs {...TabsStories.Primary.args} />
        </>
      }
      children={
        <StandardLayout>
          {Array(25)
            .fill(0)
            .map((_, index) => (
              <Placeholder key={index} className="min-h-24" />
            ))}
        </StandardLayout>
      }
    />
  ),
}
