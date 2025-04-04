import type { Meta, StoryObj } from "@storybook/react"
import { Props, WidgetAvatarsListItem } from "./index"

const meta: Meta<Props> = {
  title: "Widgets/WidgetAvatarsListItem",
  component: WidgetAvatarsListItem,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[348px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<Props>

export const Default: Story = {
  args: {
    id: "1",
    emoji: "🤝",
    title: "Title",
    subtitle: "4 people",
    avatars: [
      {
        type: "person",
        firstName: "Miguel",
        lastName: "Pousa",
        src: "https://github.com/MiguelPF.png",
      },
      {
        type: "person",
        firstName: "Nik",
        lastName: "Lopin",
        src: "https://github.com/nlopin.png",
      },
      {
        type: "person",
        firstName: "Josep Jaume",
        lastName: "Rey",
        src: "https://github.com/josepjaume.png",
      },
      {
        type: "person",
        firstName: "Saúl",
        lastName: "Domínguez",
      },
    ],
    onClick: () => {},
  },
}

export const WithLongTitle: Story = {
  args: {
    ...Default.args,
    emoji: "🤝",
    title: "This item will show a really really really long title",
    subtitle: "4 people",
    avatars: [
      {
        type: "person",
        firstName: "Miguel",
        lastName: "Pousa",
        src: "https://github.com/MiguelPF.png",
      },
      {
        type: "person",
        firstName: "Nik",
        lastName: "Lopin",
        src: "https://github.com/nlopin.png",
      },
      {
        type: "person",
        firstName: "Josep Jaume",
        lastName: "Rey",
        src: "https://github.com/josepjaume.png",
      },
      {
        type: "person",
        firstName: "Saúl",
        lastName: "Domínguez",
      },
    ],
  },
}
