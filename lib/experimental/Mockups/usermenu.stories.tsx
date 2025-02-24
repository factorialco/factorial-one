import { Icon as IconComp } from "@/components/Utilities/Icon"
import {
  Menu,
  Page,
  PageHeader,
  PersonAvatar,
  SidebarHeader,
} from "@/experimental/exports"
import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame"
import * as SidebarHeaderStories from "@/experimental/Navigation/Sidebar/Header/index.stories"
import * as SidebarMenuStories from "@/experimental/Navigation/Sidebar/Menu/index.stories"
import { Sidebar } from "@/experimental/Navigation/Sidebar/Sidebar"
import * as Icon from "@/icons/app"
import { Recruitment } from "@/icons/modules/"
import { cn } from "@/lib/utils"
import type { Meta, StoryObj } from "@storybook/react"
import { AnimatePresence, motion } from "framer-motion"
import { useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"

const meta: Meta<typeof ApplicationFrame> = {
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
      const [isOpen, setIsOpen] = useState(false)
      const ref = useRef(null)
      useOnClickOutside(ref, () => setIsOpen(false))

      return (
        <ApplicationFrame
          sidebar={
            <Sidebar
              header={<SidebarHeader {...SidebarHeaderStories.Default.args} />}
              body={<Menu {...SidebarMenuStories.Default.args} />}
              footer={
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    className="flex items-center justify-center pt-2"
                    animate={{
                      paddingLeft: isOpen ? "4px" : "12px",
                      paddingRight: isOpen ? "4px" : "12px",
                      paddingBottom: isOpen ? "4px" : "12px",
                    }}
                  >
                    <motion.div
                      className={cn(
                        "w-full rounded transition-[background-color,box-shadow] duration-500",
                        isOpen && "bg-f1-page p-3 shadow-md",
                        !isOpen && "bg-f1-transparent shadow-none"
                      )}
                      animate={{ height: isOpen ? "176px" : "32px" }}
                    >
                      {isOpen ? (
                        <div ref={ref} className="w-full">
                          <motion.div
                            className="flex w-full flex-col gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className="flex items-center gap-2">
                              <motion.div
                                className="relative size-8"
                                layoutId="user-avatar"
                              >
                                <PersonAvatar
                                  firstName="René"
                                  lastName="Galindo"
                                  src="https://github.com/renegalindo.png"
                                  size="medium"
                                />
                              </motion.div>
                              <div className="flex flex-col">
                                <motion.span
                                  className="w-fit font-medium"
                                  layoutId="user-name"
                                >
                                  René Galindo
                                </motion.span>
                                <motion.span
                                  className="text-sm text-f1-foreground-secondary"
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ delay: 0.1 }}
                                >
                                  renegalindo@gmail.com
                                </motion.span>
                              </div>
                            </div>
                            <div className="mt-2 flex flex-col gap-[2px]">
                              <motion.div
                                className="flex items-center gap-2 rounded p-1.5 font-medium transition-colors hover:cursor-pointer hover:bg-f1-background-hover"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ delay: 0.1 }}
                              >
                                <IconComp
                                  icon={Icon.Person}
                                  className="text-f1-icon"
                                />
                                Profile
                              </motion.div>
                              <motion.div
                                className="flex items-center gap-2 rounded p-1.5 font-medium transition-colors hover:cursor-pointer hover:bg-f1-background-hover"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ delay: 0.2 }}
                              >
                                <IconComp
                                  icon={Icon.Sliders}
                                  className="text-f1-icon"
                                />
                                Preferences
                              </motion.div>
                              <motion.div
                                className="flex items-center gap-2 rounded p-1.5 font-medium transition-colors hover:cursor-pointer hover:bg-f1-background-hover"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ delay: 0.3 }}
                              >
                                <IconComp
                                  icon={Icon.Bell}
                                  className="text-f1-icon"
                                />
                                Notifications
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      ) : (
                        <motion.div
                          className="flex w-full items-center gap-1.5 rounded p-1.5 hover:cursor-pointer hover:bg-f1-background-secondary"
                          onClick={() => setIsOpen(true)}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <motion.div
                            className="relative size-5"
                            layoutId="user-avatar"
                          >
                            <PersonAvatar
                              firstName="René"
                              lastName="Galindo"
                              src="https://github.com/renegalindo.png"
                              size="xsmall"
                            />
                          </motion.div>
                          <motion.span
                            className="w-fit font-medium"
                            layoutId="user-name"
                          >
                            René Galindo
                          </motion.span>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              }
            />
          }
        >
          <Page
            header={
              <PageHeader
                module={{
                  name: "Recruitment",
                  href: "/recruitment",
                  icon: Recruitment,
                }}
                breadcrumbs={[
                  {
                    id: "jobs",
                    href: "/jobs",
                    label: "Job openings",
                  },
                  {
                    id: "product-designer",
                    href: "/jobs/product-designer",
                    label: "Product Designer",
                  },
                ]}
                actions={[
                  {
                    label: "Settings",
                    icon: Icon.Settings,
                    href: "/settings",
                  },
                ]}
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
