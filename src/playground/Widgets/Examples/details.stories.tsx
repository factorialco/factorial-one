import { PersonTag, TeamTag } from "@/experimental/Information/Tags/exports"
import {
  DetailsItem,
  DetailsItemType,
} from "@/experimental/Layouts/Utils/DetailsItem"
import { Weekdays } from "@/experimental/Widgets/Content/Weekdays"
import { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"

const meta: Meta = {
  title: "Insights/Examples/Details",
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Details",
    details: [
      {
        title: "Email",
        content: "alicia.keys@factorial.co",
      },
      {
        title: "Phone",
        content: "(120) 687-3123",
      },
      {
        title: "Legal entity",
        content: "Everyday Software SL",
      },
      {
        title: "Start date",
        content: "01/01/2023",
      },
      {
        title: "Contract type",
        content: "Full time",
      },
    ],
    manager: {
      title: "Manager",
      name: "Isabella González",
      avatar: "https://github.com/dani-moreno.png",
    },
    workableDays: {
      title: "Workable days",
      activatedDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
    teams: { title: "Team", list: ["Design", "Product", "Foundations Squad"] },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

interface DetailsType {
  title?: string
  details?: DetailsItemType[]
  manager?: { title: string; name: string; avatar: string }
  teams?: { title: string; list: string[] }
  workableDays?: {
    title: string
    activatedDays?: ComponentProps<typeof Weekdays>["activatedDays"]
  }
}

export const Details: Story = {
  render: ({ details, workableDays, manager, teams, title }: DetailsType) => {
    return (
      <div className="flex flex-col gap-4">
        {!!title && (
          <p className="mb-1 text-sm font-medium text-f1-foreground">{title}</p>
        )}
        {details?.map((item) => {
          return !item?.title ? null : (
            <DetailsItem
              title={item.title}
              key={item.title}
              content={item.content}
            />
          )
        })}
        {workableDays?.title && (
          <DetailsItem
            title={workableDays.title}
            content={<Weekdays activatedDays={workableDays.activatedDays} />}
          />
        )}
        {!!manager && (
          <DetailsItem
            title={manager.title}
            content={
              <PersonTag name={manager.name} avatarUrl={manager.avatar} />
            }
          />
        )}
        {!!teams?.list?.length && (
          <DetailsItem
            title={teams.title}
            content={
              <div className="flex flex-row flex-wrap gap-2">
                {teams.list.map((team, index) => {
                  return !team ? null : (
                    <TeamTag
                      key={team + index}
                      teamName={team}
                      teamImageUrl={team[0]}
                    />
                  )
                })}
              </div>
            }
          />
        )}
      </div>
    )
  },
}
