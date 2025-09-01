import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../BaseAvatar/__stories__/utils"
import { F0AvatarPulse, F0AvatarPulseProps, pulses } from "../F0AvatarPulse"

const meta: Meta<typeof F0AvatarPulse> = {
  component: F0AvatarPulse,
  title: "Avatars/AvatarPulse",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: ["An avatar component that displays a pulse on the avatar."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    pulse: {
      control: "select",
      options: pulses,
      table: {
        type: {
          summary: "Pulse",
        },
      },
    },
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
  },
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    onPulseClick: () => {
      console.log("Pulse clicked")
    },
  },
} satisfies Meta<typeof F0AvatarPulse>

export default meta

type Story = StoryObj<typeof F0AvatarPulse>

export const Default: Story = {}

export const WithSelectedPulse: Story = {
  args: {
    pulse: "neutral",
  },
  render: (props: F0AvatarPulseProps) => (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <F0AvatarPulse {...props} pulse="superNegative" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="negative" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="neutral" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="positive" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="superPositive" onPulseClick={() => {}} />
    </div>
  ),
}
