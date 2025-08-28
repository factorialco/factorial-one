import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0AvatarPulse } from "../F0AvatarPulse"

const meta: Meta<typeof F0AvatarPulse> = {
  component: F0AvatarPulse,
  title: "Avatars/AvatarPulse",
  tags: ["autodocs", "experimental"],
  args: {
    firstName: "Dani",
    lastName: "Moreno",
  },
} satisfies Meta<typeof F0AvatarPulse>

export default meta

type Story = StoryObj<typeof F0AvatarPulse>

export const Default: Story = {}

export const WithSelectedPulse: Story = {
  args: {
    pulse: "neutral",
  },
  render: (props) => (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <F0AvatarPulse {...props} pulse="superNegative" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="negative" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="neutral" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="positive" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="superPositive" onPulseClick={() => {}} />
    </div>
  ),
}
