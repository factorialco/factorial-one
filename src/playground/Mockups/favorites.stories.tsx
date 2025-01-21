import { Icon as IconComponent, IconType } from "@/components/Utilities/Icon"
import {
  Avatar,
  Page,
  PageHeader,
  SidebarHeader,
  User,
} from "@/experimental/exports"
import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import * as SidebarHeaderStories from "@/experimental/Navigation/Sidebar/Header/index.stories"
import { Sidebar } from "@/experimental/Navigation/Sidebar/Sidebar"
import * as Icon from "@/icons/app"
import { Recruitment } from "@/icons/modules/"
import { cn } from "@/lib/utils"
import type { Meta, StoryObj } from "@storybook/react"
import { AnimatePresence, Reorder } from "framer-motion"
import { useState } from "react"

const meta: Meta<typeof ApplicationFrame> = {
  component: ApplicationFrame,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof ApplicationFrame>

type FavoriteItemProps = {
  label: string
  icon?: {
    icon: IconType
    className?: string
  }
  avatar?:
    | {
        type: "person"
        firstName: string
        lastName: string
        src?: string
      }
    | {
        type: "team" | "company"
        name: string
        src?: string
      }
}

const FavoriteItem = ({
  label,
  icon,
  avatar,
  onRemove,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: FavoriteItemProps & {
  onRemove: (label: string) => void
  onMoveUp: (label: string) => void
  onMoveDown: (label: string) => void
  isFirst: boolean
  isLast: boolean
}) => {
  const dropdownItems = [
    ...(isFirst
      ? []
      : [
          {
            label: "Move up",
            icon: Icon.ArrowUp,
            onClick: () => onMoveUp(label),
          },
        ]),
    ...(isLast
      ? []
      : [
          {
            label: "Move down",
            icon: Icon.ArrowDown,
            onClick: () => onMoveDown(label),
          },
        ]),
    ...(!isFirst || !isLast ? ["separator" as const] : []),
    {
      label: "Remove favorite",
      icon: Icon.Delete,
      critical: true,
      onClick: () => onRemove(label),
    },
  ]

  return (
    <div className="group flex w-full items-center justify-between">
      <div className="flex w-full items-center justify-between gap-1.5 font-medium text-f1-foreground">
        <div className="flex gap-1.5">
          {icon && (
            <IconComponent
              icon={icon.icon}
              size="md"
              className={cn("transition-colors", icon.className)}
            />
          )}
          {avatar && <Avatar avatar={avatar} size="xsmall" />}
          <span>{label}</span>
        </div>
        <Dropdown items={dropdownItems}>
          <div className="flex size-6 items-center justify-center rounded-xs text-f1-icon opacity-0 transition-all hover:bg-f1-background-secondary hover:text-f1-icon-bold group-hover:opacity-100 data-[state=open]:bg-f1-background-secondary data-[state=open]:text-f1-icon-bold data-[state=open]:opacity-100">
            <IconComponent icon={Icon.EllipsisHorizontal} size="md" />
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export const Default: Story = {
  decorators: [
    (Story) => {
      const FavoriteList: FavoriteItemProps[] = [
        {
          label: "Product designer",
          icon: { icon: Icon.SearchPerson },
        },
        {
          label: "René Galindo",
          avatar: {
            type: "person",
            firstName: "René",
            lastName: "Galindo",
            src: "https://github.com/renegalindo.png",
          },
        },
        {
          label: "Dani Moreno",
          avatar: {
            type: "person",
            firstName: "Dani",
            lastName: "Moreno",
            src: "https://github.com/dani-moreno.png",
          },
        },
        {
          label: "Design Team",
          avatar: {
            type: "team",
            name: "Design team",
          },
        },
      ]
      const [favorites, setFavorites] = useState(FavoriteList)

      const removeFavorite = (label: string) => {
        setFavorites(favorites.filter((favorite) => favorite.label !== label))
      }

      const moveFavorite = (label: string, direction: "up" | "down") => {
        const index = favorites.findIndex(
          (favorite) => favorite.label === label
        )
        const offset = direction === "up" ? -1 : 1

        if (
          (direction === "up" && index > 0) ||
          (direction === "down" && index < favorites.length - 1)
        ) {
          const newFavorites = [...favorites]
          ;[newFavorites[index], newFavorites[index + offset]] = [
            newFavorites[index + offset],
            newFavorites[index],
          ]
          setFavorites(newFavorites)
        }
      }

      const moveFavoriteUp = (label: string) => moveFavorite(label, "up")
      const moveFavoriteDown = (label: string) => moveFavorite(label, "down")

      return (
        <ApplicationFrame
          sidebar={
            <Sidebar
              header={<SidebarHeader {...SidebarHeaderStories.Default.args} />}
              body={
                <div className="flex w-full flex-col bg-transparent px-3">
                  <div className="flex w-full cursor-pointer items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:bg-f1-background-secondary">
                    Favorites
                    <IconComponent
                      icon={Icon.ChevronDown}
                      size="xs"
                      className="text-f1-icon-secondary"
                    />
                  </div>
                  <Reorder.Group
                    axis="y"
                    values={favorites}
                    onReorder={setFavorites}
                    className="flex list-none flex-col gap-0.5"
                  >
                    <AnimatePresence>
                      {favorites.map((item, index) => (
                        <Reorder.Item
                          key={item.label}
                          value={item}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{
                            opacity: 0,
                            scale: 0.95,
                            filter: "blur(8px)",
                          }}
                          transition={{
                            opacity: { duration: 0.2, ease: "easeInOut" },
                            filter: { duration: 0.1, ease: "easeInOut" },
                            scale: {
                              duration: 0.2,
                              ease: [0.175, 0.885, 0.32, 1.275],
                            },
                          }}
                          whileDrag={{
                            scale: 1.04,
                            cursor: "grabbing",
                          }}
                          className={cn(
                            "relative cursor-pointer rounded py-1 pl-1.5 pr-1",
                            "backdrop-blur transition-colors",
                            "hover:bg-f1-background-secondary"
                          )}
                        >
                          <FavoriteItem
                            {...item}
                            onRemove={removeFavorite}
                            onMoveUp={moveFavoriteUp}
                            onMoveDown={moveFavoriteDown}
                            isFirst={index === 0}
                            isLast={index === favorites.length - 1}
                          />
                        </Reorder.Item>
                      ))}
                    </AnimatePresence>
                  </Reorder.Group>
                </div>
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
                      icon: Icon.Sliders,
                    },
                    {
                      label: "Notifications",
                      href: "/notifications",
                      icon: Icon.Bell,
                    },
                    "separator",
                    {
                      label: "Logout",
                      href: "/logout",
                      icon: Icon.Exit,
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
