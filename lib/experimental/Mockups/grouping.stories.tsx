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
import { Sidebar } from "@/experimental/Navigation/Sidebar/Sidebar"
import * as Icons from "@/icons/app"
import * as ModuleIcons from "@/icons/modules"
import { useNavigation } from "@/lib/linkHandler"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import * as MenuConfig from "./menu"
const meta: Meta<typeof ApplicationFrame> = {
  title: "Mockups/Grouping",
  component: ApplicationFrame,
  parameters: {
    layout: "fullscreen",
    a11y: {
      skipCi: true,
    },
  },
}

export default meta

type Story = StoryObj<typeof ApplicationFrame>

export const Default: Story = {
  decorators: [
    (Story) => {
      const { isActive } = useNavigation()
      const [companySelected, setCompanySelected] = React.useState("1")

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
        Benefits: ModuleIcons.Benefits,
        Accounting: ModuleIcons.Finance,
      }

      type GroupingType = "none" | "bundles"
      type MenuStructure = {
        none: MenuCategory[]
        bundles: MenuCategory[]
      }

      const getCompanyMenus = (companyId: string): MenuStructure => {
        switch (companyId) {
          case "1": // Factorial
            return {
              none: MenuConfig.menuTreeNone,
              bundles: MenuConfig.menuTreeBundles,
            }
          case "2": // Dazlog
            return {
              none: MenuConfig.dazlogMenuTreeNone,
              bundles: MenuConfig.menuTreeBundles,
            }
          default:
            return {
              none: MenuConfig.menuTreeNone,
              bundles: MenuConfig.menuTreeBundles,
            }
        }
      }

      const [selectedDropdown, setSelectedDropdown] = React.useState<
        "None" | "Bundles"
      >("None")
      const menuTree =
        getCompanyMenus(companySelected)[
          selectedDropdown.toLowerCase() as GroupingType
        ]
      const activeMenuItem = findActiveMenuItem(menuTree)

      const handleDropdownClick = (value: "None" | "Bundles") => {
        setSelectedDropdown(value)
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
              header={
                <SidebarHeader
                  companies={[
                    {
                      id: "1",
                      name: "Factorial",
                      logo: "https://github.com/factorialco.png",
                    },
                    {
                      id: "2",
                      name: "Dazlog",
                      logo: "https://github.com/dazlog.png",
                    },
                    { id: "3", name: "Acme Corp" },
                  ]}
                  selected={companySelected}
                  onChange={(company) => setCompanySelected(company)}
                  isExpanded={true}
                />
              }
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
