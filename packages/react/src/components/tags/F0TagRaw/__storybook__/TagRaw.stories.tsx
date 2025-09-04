import { Ai } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0TagRaw } from "../"

const meta: Meta = {
  component: F0TagRaw,
  title: "Tags/TagRaw",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Label",
    icon: Ai,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRawTag: Story = {}

export const NoIconTag: Story = {
  args: {
    icon: undefined,
  },
}

export const IconTag: Story = {
  args: {
    text: undefined,
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-[200px] flex-col gap-2 overflow-hidden border-[1px] border-dotted border-[#333]">
      <h3 className="text-lg font-semibold">All Raw Tags</h3>
      <F0TagRaw text="Label" icon={Ai} />
      <F0TagRaw text="Label" />
      <F0TagRaw text="Label" icon={Ai} />
    </div>
  ),
}
