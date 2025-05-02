import type { Meta, StoryObj } from "@storybook/react"
import { PulseAvatar } from "./index"

const meta: Meta<typeof PulseAvatar> = {
  component: PulseAvatar,
  title: "Home/PulseAvatar",
  tags: ["autodocs", "experimental"],
  args: {
    firstName: "Dani",
    lastName: "Moreno",
  },
} satisfies Meta<typeof PulseAvatar>

export default meta

type Story = StoryObj<typeof PulseAvatar>

export const Default: Story = {}

export const WithSelectedPulse: Story = {
  args: {
    pulse: "neutral",
  },
  render: (props) => (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <PulseAvatar {...props} pulse="superNegative" onPulseClick={() => {}} />
      <PulseAvatar {...props} pulse="negative" onPulseClick={() => {}} />
      <PulseAvatar {...props} pulse="neutral" onPulseClick={() => {}} />
      <PulseAvatar {...props} pulse="positive" onPulseClick={() => {}} />
      <PulseAvatar {...props} pulse="superPositive" onPulseClick={() => {}} />
    </div>
  ),
}
