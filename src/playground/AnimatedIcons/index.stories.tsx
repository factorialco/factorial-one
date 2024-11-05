import type { Meta, StoryObj } from "@storybook/react"
import CheckCircleAnimatedIcon from "./CheckCircle"
import ClockAnimatedIcon from "./clock"
import FolderUserAnimatedIcon from "./FolderUser"
import GraphAnimatedIcon from "./Graph"
import HomeAnimatedIcon from "./Home"
import MoneyBagAnimatedIcon from "./moneybag"
import PalmTreeAnimatedIcon from "./PalmTree"
import PersonAnimatedIcon from "./Person"
import RocketAnimatedIcon from "./Rocket"
import SettingsAnimatedIcon from "./settings"
const meta = {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <ClockAnimatedIcon />
      <CheckCircleAnimatedIcon />
      <SettingsAnimatedIcon />
      <MoneyBagAnimatedIcon />
      <RocketAnimatedIcon />
      <PalmTreeAnimatedIcon />
      <GraphAnimatedIcon />
      <PersonAnimatedIcon />
      <FolderUserAnimatedIcon />
      <HomeAnimatedIcon />
    </div>
  ),
}
