import { Meta, StoryFn } from "@storybook/react"
import { CalendarDays, Clock, Home, Mail, Sparkles, User } from "lucide-react"
import { Menu } from "."

export default {
  component: Menu,
  decorators: [
    (Story) => (
      <div className="w-72 bg-f1-background-secondary/50 p-3">
        <Story />
      </div>
    ),
  ],
  args: {
    categories: [
      {
        title: "Root",
        items: [
          { label: "Home", icon: Home, href: "/home" },
          {
            label: "Inbox",
            icon: Mail,
            href: "/inbox",
            badge: "10",
          },
          { label: "Discover Factorial", icon: Sparkles, href: "/discover" },
        ],
        isRoot: true,
      },
      {
        title: "You",
        items: [
          { label: "Me", icon: User, href: "/me" },
          { label: "Clock in", icon: Clock, href: "/clock-in" },
          { label: "Time off", icon: CalendarDays, href: "/time-off" },
        ],
        isOpen: true,
      },
      {
        title: "Your company",
        items: [
          { label: "Organization", icon: User, href: "/organization" },
          { label: "Calendar", icon: CalendarDays, href: "/calendar" },
        ],
        isOpen: true,
      },
    ],
  },
} as Meta

const Template: StoryFn = (args) => <Menu categories={[]} {...args} />

export const Default = Template.bind({})
