import { Placeholder } from "@/lib/storybook-utils"
import type { Meta, StoryObj } from "@storybook/react"
import { Page } from "."

import Header from "../Header/Header"
import * as HeaderStories from "../Header/Header/index.stories"
import { Tabs } from "../Tabs"
import * as TabsStories from "../Tabs/index.stories"

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
type Story = StoryObj

export const Default: Story = {
  args: {
    header: (
      <>
        <Header
          {...HeaderStories.FirstLevel.args}
          menu={{ show: false, onClick: () => {} }}
        />
        <Tabs {...TabsStories.Primary.args} />
      </>
    ),
    children: (
      <>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </>
    ),
  },
}
