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
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import * as MenuConfigOne from "./menu1"
import * as MenuConfigTwo from "./menu2"
import * as MenuConfigThree from "./menu3"
import * as MenuConfigFour from "./menu4"

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
        if (!Array.isArray(tree)) return null

        for (const category of tree) {
          if (!category?.items) continue
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
        Profile: ModuleIcons.Profile,
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
          case "1": // Full CrossFit
            return {
              none: MenuConfigOne.menuTreeNone,
              bundles: MenuConfigOne.menuTreeBundles,
            }
          case "2": // CHC Energia
            return {
              none: MenuConfigTwo.menuTreeNone,
              bundles: MenuConfigTwo.menuTreeBundles,
            }
          case "3": // Patterson Group
            return {
              none: MenuConfigThree.menuTreeNone,
              bundles: MenuConfigThree.menuTreeBundles,
            }
          case "4": // Factorial
            return {
              none: MenuConfigFour.menuTreeNone,
              bundles: MenuConfigFour.menuTreeBundles,
            }
          default:
            return {
              none: MenuConfigOne.menuTreeNone,
              bundles: MenuConfigOne.menuTreeBundles,
            }
        }
      }

      const [selectedDropdown, setSelectedDropdown] = React.useState<
        "None" | "Bundles"
      >("None")
      const menuTree =
        getCompanyMenus(companySelected)[
          selectedDropdown.toLowerCase() as GroupingType
        ] || []
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
                      name: "Full CrossFit",
                      logo: "https://github.com/zen-browser.png",
                    },
                    {
                      id: "2",
                      name: "CHC Energía",
                      logo: "https://github.com/codacy.png",
                    },
                    {
                      id: "3",
                      name: "Patterson Group",
                      logo: "https://github.com/hoppscotch.png",
                    },
                    {
                      id: "4",
                      name: "Factorial",
                      logo: "https://github.com/factorialco.png",
                    },
                  ]}
                  selected={companySelected}
                  onChange={(company) => {
                    setCompanySelected(company)
                    setSelectedDropdown("None")
                  }}
                  isExpanded={true}
                />
              }
              body={
                <AnimatePresence mode="wait">
                  <motion.div
                    key={companySelected}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu tree={menuTree} dropdownItems={dropdownItems} />
                  </motion.div>
                </AnimatePresence>
              }
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
