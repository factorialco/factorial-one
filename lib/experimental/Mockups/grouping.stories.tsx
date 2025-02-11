import { IconType } from "@/components/Utilities/Icon/"
import {
  Menu,
  MenuCategory,
  Page,
  PageHeader,
  SidebarHeader,
  User,
} from "@/experimental/exports"
import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame"
import * as SidebarHeaderStories from "@/experimental/Navigation/Sidebar/Header/index.stories"
import { Sidebar } from "@/experimental/Navigation/Sidebar/Sidebar"
import * as Icons from "@/icons/app"
import * as ModuleIcons from "@/icons/modules"
import { useNavigation } from "@/lib/linkHandler"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
const meta: Meta<typeof ApplicationFrame> = {
  title: "Mockups/Grouping",
  component: ApplicationFrame,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof ApplicationFrame>

export const Default: Story = {
  decorators: [
    (Story) => {
      const { isActive } = useNavigation()

      const findActiveMenuItem = (tree: MenuCategory[]) => {
        for (const category of tree) {
          const activeItem = category.items.find((item) =>
            isActive(item.href, { exact: item.exactMatch })
          )
          if (activeItem) return activeItem
        }
        return null
      }

      const moduleIcons: Record<string, IconType> = {
        Home: ModuleIcons.Home,
        Inbox: ModuleIcons.Inbox,
        "Discover Factorial": ModuleIcons.Discover,
        Me: ModuleIcons.Profile,
        "Clock in": ModuleIcons.ClockIn,
        "Time off": ModuleIcons.TimeOff,
        Tasks: ModuleIcons.Tasks,
        "My documents": ModuleIcons.Documents,
        "My goals": ModuleIcons.Goals,
        "My training": ModuleIcons.Trainings,
        "My spending": ModuleIcons.Spending,
        Kudos: ModuleIcons.Kudos,
        Calendar: ModuleIcons.Calendar,
        "Time tracking": ModuleIcons.TimeTracking,
        Shifts: ModuleIcons.Shifts,
        Payroll: ModuleIcons.Payroll,
        Recruitment: ModuleIcons.Recruitment,
        Performance: ModuleIcons.Performance,
        Engagement: ModuleIcons.Engagement,
        Training: ModuleIcons.Trainings,
        Finance: ModuleIcons.Finance,
        Spending: ModuleIcons.Spending,
        Projects: ModuleIcons.Projects,
        Organization: ModuleIcons.Organization,
        Documents: ModuleIcons.Documents,
        Analytics: ModuleIcons.Reports,
        Spaces: ModuleIcons.Spaces,
        Software: ModuleIcons.Software,
        Workflows: ModuleIcons.Workflows,
      }

      const menuTreeNone = [
        {
          title: "Root",
          id: "root",
          items: [
            {
              label: "Home",
              icon: Icons.Home,
              href: "/",
              exactMatch: true,
            },
            {
              label: "Inbox",
              icon: Icons.Envelope,
              href: "/inbox",
              badge: 6,
            },
            {
              label: "Discover Factorial",
              icon: Icons.Sparkles,
              href: "/discover",
            },
          ],
          isRoot: true,
        },
        {
          title: "Personal",
          id: "personal",
          items: [
            { label: "Me", icon: Icons.Person, href: "/me" },
            {
              label: "Clock in",
              icon: Icons.Clock,
              href: "/clock-in",
            },
            {
              label: "Time off",
              icon: Icons.PalmTree,
              href: "/time-off",
            },
            {
              label: "Tasks",
              icon: Icons.CheckCircleLine,
              href: "/tasks",
            },
            {
              label: "My documents",
              icon: Icons.Folder,
              href: "/my-documents",
            },
            {
              label: "My goals",
              icon: Icons.Flag,
              href: "/my-goals",
            },
            {
              label: "My training",
              icon: Icons.BookOpen,
              href: "/my-training",
            },
            {
              label: "My spending",
              icon: Icons.Wallet,
              href: "/my-spending",
            },
            {
              label: "Kudos",
              icon: Icons.Heart,
              href: "/kudos",
            },
          ],
          isOpen: true,
        },
        {
          title: "Company",
          id: "company",
          items: [
            {
              label: "Organization",
              icon: Icons.People,
              href: "/organization",
            },
            {
              label: "Calendar",
              icon: Icons.Calendar,
              href: "/calendar",
            },
            {
              label: "Recruitment",
              icon: Icons.SearchPerson,
              href: "/recruitment",
            },
            {
              label: "Performance",
              icon: Icons.Graph,
              href: "/performance",
            },
            {
              label: "Engagement",
              icon: Icons.MessageHeart,
              href: "/engagement",
            },
            {
              label: "Training",
              icon: Icons.BookOpen,
              href: "/training",
            },
            {
              label: "Time tracking",
              icon: Icons.Timer,
              href: "/time-tracking",
            },
            {
              label: "Projects",
              icon: Icons.Suitcase,
              href: "/projects",
            },
            {
              label: "Analytics",
              icon: Icons.BarGraph,
              href: "/analytics",
            },
            {
              label: "Finance",
              icon: Icons.MoneyBag,
              href: "/finance",
            },
            {
              label: "Spending",
              icon: Icons.Wallet,
              href: "/spending",
            },
            {
              label: "Payroll",
              icon: Icons.Money,
              href: "/payroll",
            },
            {
              label: "Documents",
              icon: Icons.Folder,
              href: "/documents",
            },
            {
              label: "Shifts",
              icon: Icons.Schedule,
              href: "/shifts",
            },
            {
              label: "Spaces",
              icon: Icons.Building,
              href: "/spaces",
            },
            {
              label: "Software",
              icon: Icons.Desktop,
              href: "/software",
            },
            {
              label: "Workflows",
              icon: Icons.Split,
              href: "/workflows",
            },
          ],
          isOpen: true,
        },
      ]

      const menuTreeBundles = [
        {
          title: "Root",
          id: "root",
          items: [
            {
              label: "Home",
              icon: Icons.Home,
              href: "/",
              exactMatch: true,
            },
            {
              label: "Inbox",
              icon: Icons.Envelope,
              href: "/inbox",
              badge: 6,
            },
            {
              label: "Discover Factorial",
              icon: Icons.Sparkles,
              href: "/discover",
            },
          ],
          isRoot: true,
        },
        {
          title: "Personal",
          id: "personal",
          items: [
            { label: "Me", icon: Icons.Person, href: "/me" },
            {
              label: "Clock in",
              icon: Icons.Clock,
              href: "/clock-in",
            },
            {
              label: "Time off",
              icon: Icons.PalmTree,
              href: "/time-off",
            },
            {
              label: "Tasks",
              icon: Icons.CheckCircleLine,
              href: "/tasks",
            },
            {
              label: "My documents",
              icon: Icons.Folder,
              href: "/my-documents",
            },
            {
              label: "My goals",
              icon: Icons.Flag,
              href: "/my-goals",
            },
            {
              label: "My training",
              icon: Icons.BookOpen,
              href: "/my-training",
            },
            {
              label: "My spending",
              icon: Icons.Wallet,
              href: "/my-spending",
            },
            {
              label: "Kudos",
              icon: Icons.Heart,
              href: "/kudos",
            },
          ],
          isOpen: true,
        },
        {
          title: "General",
          id: "bundle-general",
          items: [
            {
              label: "Organization",
              icon: Icons.People,
              href: "/organization",
            },
            {
              label: "Documents",
              icon: Icons.Folder,
              href: "/documents",
            },
            {
              label: "Analytics",
              icon: Icons.BarGraph,
              href: "/analytics",
            },
            {
              label: "Spaces",
              icon: Icons.Building,
              href: "/spaces",
            },
            {
              label: "Software",
              icon: Icons.Desktop,
              href: "/software",
            },
            {
              label: "Workflows",
              icon: Icons.Split,
              href: "/workflows",
            },
          ],
          isOpen: true,
        },
        {
          title: "Operations",
          id: "operations",
          items: [
            {
              label: "Calendar",
              icon: Icons.Calendar,
              href: "/calendar",
            },
            {
              label: "Time tracking",
              icon: Icons.Timer,
              href: "/time-tracking",
            },
            {
              label: "Shifts",
              icon: Icons.Schedule,
              href: "/shifts",
            },
            {
              label: "Payroll",
              icon: Icons.Money,
              href: "/payroll",
            },
          ],
          isOpen: true,
        },
        {
          title: "Talent",
          id: "talent",
          items: [
            {
              label: "Recruitment",
              icon: Icons.SearchPerson,
              href: "/recruitment",
            },
            {
              label: "Performance",
              icon: Icons.Graph,
              href: "/performance",
            },
            {
              label: "Engagement",
              icon: Icons.MessageHeart,
              href: "/engagement",
            },
            {
              label: "Training",
              icon: Icons.BookOpen,
              href: "/training",
            },
          ],
          isOpen: true,
        },
        {
          title: "Spending",
          id: "spending",
          items: [
            {
              label: "Finance",
              icon: Icons.MoneyBag,
              href: "/finance",
            },
            {
              label: "Spending",
              icon: Icons.Wallet,
              href: "/spending",
            },
            {
              label: "Projects",
              icon: Icons.Suitcase,
              href: "/projects",
            },
          ],
          isOpen: true,
        },
      ]

      const [menuTree, setMenuTree] = React.useState(menuTreeNone)
      const [selectedDropdown, setSelectedDropdown] = React.useState(
        menuTree === menuTreeNone ? "None" : "Bundles"
      )
      const activeMenuItem = findActiveMenuItem(menuTree)

      const handleDropdownClick = (value: string) => {
        if (value === "None") {
          setMenuTree(menuTreeNone)
          setSelectedDropdown("None")
        } else {
          setMenuTree(menuTreeBundles)
          setSelectedDropdown("Bundles")
        }
      }

      const dropdownItems = [
        {
          label: "None",
          onClick: () => handleDropdownClick("None"),
          selected: selectedDropdown === "None",
        },
        {
          label: "Bundles",
          onClick: () => handleDropdownClick("Bundles"),
          selected: selectedDropdown === "Bundles",
        },
      ]

      return (
        <ApplicationFrame
          sidebar={
            <Sidebar
              header={<SidebarHeader {...SidebarHeaderStories.Default.args} />}
              body={<Menu tree={menuTree} dropdownItems={dropdownItems} />}
              footer={
                <User
                  firstName="René"
                  lastName="Galindo"
                  avatarUrl="https://github.com/renegalindo.png"
                  options={[
                    {
                      label: "Preferences",
                      href: "/preferences",
                      icon: Icons.Sliders,
                    },
                    {
                      label: "Notifications",
                      href: "/notifications",
                      icon: Icons.Bell,
                    },
                    "separator",
                    {
                      label: "Logout",
                      href: "/logout",
                      icon: Icons.Exit,
                      critical: true,
                    },
                  ]}
                />
              }
            />
          }
        >
          <Page
            header={
              <PageHeader
                module={{
                  name: activeMenuItem?.label || "Home",
                  href: activeMenuItem?.href || "/",
                  icon:
                    moduleIcons[activeMenuItem?.label || "Home"] ||
                    ModuleIcons.Home,
                }}
              />
            }
          >
            <div className="flex flex-col">
              <div className="top-0 z-10 flex flex-col border-x border-solid border-f1-border-secondary border-b-transparent border-t-transparent bg-f1-background md:sticky">
                <Story />
              </div>
            </div>
          </Page>
        </ApplicationFrame>
      )
    },
  ],
}
