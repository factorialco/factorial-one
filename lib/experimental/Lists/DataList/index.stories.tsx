import { Meta, StoryObj } from "@storybook/react"

import { Check } from "@/icons"
import { action } from "@storybook/addon-actions"
import { DataList } from "."

const meta: Meta<typeof DataList> = {
  component: DataList,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <DataList.Item text="test" />
        <DataList.Item icon={Check} text="Make coffee" />
        <DataList.ItemWithCopyButton text="hellen@factorial.co" />
        <DataList.LinkItem
          onClick={() => {
            action("on link click")
          }}
          href="https://factorialhr.com/"
          text="Factorial"
        />
        <DataList.LinkItem
          onClick={() => {
            action("on link click")
          }}
          href="https://factorialhr.com/"
          text="Banco Bilbao Vizcaya Argentaria"
        />
      </>
    ),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithLabel: Story = {
  args: {
    label: "Related Data",
  },
}
