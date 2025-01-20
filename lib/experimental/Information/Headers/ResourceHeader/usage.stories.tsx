import { Button } from "@/components/Actions/Button"
import { Icon as IconComponent } from "@/components/Utilities/Icon"
import {
  Page,
  PageHeader,
  RawTag,
  SidebarHeader,
  StatusTag,
  Tabs,
  User,
} from "@/experimental/exports"
import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame"
import * as SidebarHeaderStories from "@/experimental/Navigation/Sidebar/Header/index.stories"
import { Menu } from "@/experimental/Navigation/Sidebar/Menu"
import { Sidebar } from "@/experimental/Navigation/Sidebar/Sidebar"
import * as Icon from "@/icons/app"
import { Recruitment } from "@/icons/modules/"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { ResourceHeader } from "./index"

const meta: Meta<typeof ResourceHeader> = {
  component: ResourceHeader,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof ResourceHeader>

const TableRow = ({
  name,
  phase,
  addedOn,
  rating,
}: {
  name: string
  phase: React.ReactNode
  addedOn: string
  rating: React.ReactNode
}) => {
  return (
    <tr className="relative transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-f1-border-secondary after:content-[''] hover:bg-f1-background-tertiary [&>td]:py-2.5">
      <td className="pl-6 font-medium">{name}</td>
      <td>
        <div className="w-fit">{phase}</div>
      </td>
      <td className="hidden tabular-nums md:table-cell">{addedOn}</td>
      <td className="pr-6">
        <div className="w-fit">{rating}</div>
      </td>
    </tr>
  )
}

const TableExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4 px-6 pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 items-center justify-center gap-1 rounded border border-solid border-f1-border">
            <div className="flex size-6 items-center justify-center">
              <IconComponent icon={Icon.ChevronLeft} size="sm" />
            </div>
            <div className="font-medium">Q1, 2025</div>
            <div className="flex size-6 items-center justify-center">
              <IconComponent icon={Icon.ChevronRight} size="sm" />
            </div>
          </div>
          <div className="flex h-8 items-center justify-center gap-1 rounded border border-solid border-f1-border pl-3 pr-2">
            <div className="font-medium">Filter</div>
            <IconComponent icon={Icon.ChevronDown} size="sm" />
          </div>
          <div className="font-medium">
            <strong>15</strong> elements
          </div>
        </div>
        <div className="hidden md:block">
          <Button label="New candidate" icon={Icon.Add} />
        </div>
        <div className="block md:hidden">
          <Button label="New candidate" icon={Icon.Add} hideLabel round />
        </div>
      </div>
      <table className="mb-3 w-full border-spacing-0 border-0">
        <thead className="min-h-10 border border-solid border-f1-border-secondary">
          <tr className="relative text-left text-f1-foreground-secondary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-f1-border-secondary after:content-[''] [&>th]:py-2.5">
            <th className="pl-6">Name</th>
            <th>Phase</th>
            <th className="hidden md:table-cell">Added on</th>
            <th className="pr-6">Rating</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            name="Lucía Pellisa Igarza"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="20/01/2025"
            rating="-"
          />
          <TableRow
            name="Juan Pablo Carrión Teruel"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="18/01/2025"
            rating={<RawTag text="Match" icon={Icon.Ai} />}
          />
          <TableRow
            name="Elena López García"
            phase={<StatusTag text="Hired" variant="info" />}
            addedOn="15/01/2025"
            rating={<RawTag text="Match" icon={Icon.Ai} />}
          />
          <TableRow
            name="Joaquín Costa Martos"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="09/01/2025"
            rating="-"
          />
          <TableRow
            name="Martina Sempere Navarrete"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="09/01/2025"
            rating="-"
          />
          <TableRow
            name="Juan Diego Valverde Novoa"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="07/01/2025"
            rating="-"
          />
          <TableRow
            name="Aurea Rodríguez Montenegro"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="30/12/2024"
            rating="-"
          />
          <TableRow
            name="Jose Enrique Montenegro Calatayud"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="30/12/2024"
            rating={<RawTag text="Match" icon={Icon.Ai} />}
          />
          <TableRow
            name="Ibon Ayuso Jiménez"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="23/12/2024"
            rating="-"
          />
          <TableRow
            name="Joaquim Bastida Novo"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="20/12/2024"
            rating="-"
          />
          <TableRow
            name="Rafael Losada Vaca"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="17/12/2024"
            rating="-"
          />
          <TableRow
            name="Eugenio Prieto Noguera"
            phase={<StatusTag text="Hired" variant="info" />}
            addedOn="14/12/2024"
            rating="-"
          />
          <TableRow
            name="Brian Fernandez Cordoba"
            phase={<StatusTag text="Hired" variant="info" />}
            addedOn="12/12/2024"
            rating={<RawTag text="Match" icon={Icon.Ai} />}
          />
          <TableRow
            name="Sonia Diallo"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="08/12/2024"
            rating={<RawTag text="Match" icon={Icon.Ai} />}
          />
          <TableRow
            name="Fernando Bernal Navarro"
            phase={<StatusTag text="New" variant="positive" />}
            addedOn="04/12/2024"
            rating="-"
          />
        </tbody>
        <tfoot>
          <tr className="text-left [&>td]:py-2.5">
            <td>
              <div className="flex items-center justify-between px-6">
                <div className="text-f1-foreground-secondary">
                  1-15 of 15 items
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export const Default: Story = {
  decorators: [
    (Story) => (
      <ApplicationFrame
        sidebar={
          <Sidebar
            header={<SidebarHeader {...SidebarHeaderStories.Default.args} />}
            body={
              <Menu
                tree={[
                  {
                    title: "Root",
                    items: [
                      {
                        label: "Home",
                        icon: Icon.Home,
                        href: "/Home",
                        exactMatch: true,
                      },
                      {
                        label: "Inbox",
                        icon: Icon.Inbox,
                        href: "/inbox",
                      },
                      {
                        label: "Discover Factorial",
                        icon: Icon.Sparkles,
                        href: "/discover",
                      },
                    ],
                    isRoot: true,
                  },
                  {
                    title: "Personal",
                    items: [
                      { label: "Profile", icon: Icon.Person, href: "/me" },
                      {
                        label: "Clock in",
                        icon: Icon.Clock,
                        href: "/clock-in",
                      },
                      {
                        label: "Time off",
                        icon: Icon.PalmTree,
                        href: "/time-off",
                      },
                      {
                        label: "Tasks",
                        icon: Icon.CheckCircleLine,
                        href: "/tasks",
                      },
                      {
                        label: "My goals",
                        icon: Icon.Flag,
                        href: "/goals",
                      },
                      {
                        label: "My training",
                        icon: Icon.BookOpen,
                        href: "/training",
                      },
                      {
                        label: "My spending",
                        icon: Icon.Wallet,
                        href: "/spending",
                      },
                      {
                        label: "Kudos",
                        icon: Icon.Heart,
                        href: "/kudos",
                      },
                    ],
                    isOpen: true,
                  },
                  {
                    title: "Company",
                    items: [
                      {
                        label: "Organization",
                        icon: Icon.People,
                        href: "/organization",
                      },
                      {
                        label: "Calendar",
                        icon: Icon.Calendar,
                        href: "/calendar",
                      },
                      {
                        label: "Recruitment",
                        icon: Icon.SearchPerson,
                        href: "/",
                        exactMatch: true,
                      },
                      {
                        label: "Performance",
                        icon: Icon.ChartLine,
                        href: "/performance",
                      },
                      {
                        label: "Training",
                        icon: Icon.BookOpen,
                        href: "/training",
                      },
                      {
                        label: "Time tracking",
                        icon: Icon.Timer,
                        href: "/time-tracking",
                      },
                      {
                        label: "Projects",
                        icon: Icon.Briefcase,
                        href: "/projects",
                      },
                      {
                        label: "Analytics",
                        icon: Icon.BarGraph,
                        href: "/analytics",
                      },
                      {
                        label: "Spending",
                        icon: Icon.Wallet,
                        href: "/spending",
                      },
                      {
                        label: "Settings",
                        icon: Icon.Settings,
                        href: "/settings",
                      },
                    ],
                    isOpen: true,
                  },
                ]}
              />
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
                  href: "/jobs",
                  label: "Job openings",
                },
                {
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
              <Tabs
                tabs={[
                  {
                    label: "Applications",
                    href: "/",
                  },
                  {
                    label: "Promotion",
                    href: "/jobs/product-designer/promotion",
                  },
                ]}
              />
            </div>
            <TableExample />
          </div>
        </Page>
      </ApplicationFrame>
    ),
  ],
  args: {
    title: "Product Designer",
    description:
      "Open position on our team, seeking an experienced product designer to lead design initiatives.",
    status: {
      label: "Status",
      text: "Published",
      variant: "positive",
      actions: [
        {
          label: "Edit",
          icon: Icon.Pencil,
          onClick: fn(),
        },
      ],
    },
    secondaryActions: [
      {
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn(),
      },
      {
        label: "Unlist",
        icon: Icon.Delete,
        variant: "critical",
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Location",
        value: { type: "text", content: "Barcelona" },
        actions: [
          {
            label: "Copy",
            icon: Icon.LayersFront,
            onClick: fn(),
          },
          {
            label: "Edit",
            icon: Icon.Pencil,
            onClick: fn(),
          },
        ],
      },
      {
        label: "Hiring team",
        value: {
          type: "avatar",
          variant: {
            type: "person",
            firstName: "Josep Jaume",
            lastName: "Rey",
            src: "https://github.com/josepjaume.png",
          },
          text: "",
        },
      },
      {
        label: "Team",
        value: { type: "text", content: "Human Resources" },
        actions: [
          {
            label: "Copy",
            icon: Icon.LayersFront,
            onClick: fn(),
          },
          {
            label: "Edit",
            icon: Icon.Pencil,
            onClick: fn(),
          },
        ],
      },
    ],
  },
}
