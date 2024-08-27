import { Button } from "@/components/Actions/Button"
import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import { Circle } from "@/icons"
import AlertCircle from "@/icons/AlertCircle"
import { forwardRef } from "react"
import { Indicator } from "../ui/indicator"
import { Separator } from "../ui/separator"

export interface TasksInsightData {
  title: string
  tasks: string[]
  overdueLabel: string
  overdueTasks: number
  dueLabel: string
  dueTasks: number
  noDueLabel: string
  noDueTasks: number
  linkUrl: string
  linkTitle: string
  buttonLabel?: string
  emptyStateText?: string
  handleNavigate: () => void
}

export interface TasksInsightProps {
  data: TasksInsightData
}

export const TasksInsight = forwardRef<HTMLDivElement, TasksInsightProps>(
  ({ data }, ref) => {
    const {
      title = "Tasks",
      tasks,
      overdueTasks,
      dueTasks,
      noDueTasks,
      linkUrl,
      linkTitle,
      buttonLabel,
      overdueLabel,
      dueLabel,
      noDueLabel,
      emptyStateText,
      handleNavigate,
    } = data

    const taskCategories = [
      {
        label: overdueLabel,
        count: overdueTasks,
        icon: AlertCircle,
        color: "text-layout-foreground",
      },
      {
        label: dueLabel,
        count: dueTasks,
        icon: Circle,
        color: "text-intermediate",
      },
      {
        label: noDueLabel,
        count: noDueTasks,
        icon: Circle,
        color: "text-input-hover",
      },
    ]

    return (
      <div className="max-w-96" ref={ref}>
        <WidgetContainer
          header={{
            title,
            link: { title: linkTitle, url: linkUrl },
          }}
        >
          <div className="grid grid-cols-3">
            {taskCategories.map(({ label, count, icon, color }) => (
              <Indicator
                label={label}
                count={count}
                icon={icon}
                color={color}
              />
            ))}
          </div>
          <Separator />
          <div className="flex flex-col gap-3">
            {!tasks?.length ? (
              <p>{emptyStateText ?? "No tasks"}</p>
            ) : (
              tasks.map((task, i) => (
                <div
                  key={`${task} ${i}`}
                  className="flex flex-row items-center gap-3"
                >
                  <div className="h-5 min-w-5 rounded-md border border-solid border-secondary-intermediate" />
                  <p className="truncate font-medium">{task}</p>
                </div>
              ))
            )}
          </div>
          {buttonLabel && (
            <span className="mt-4 max-w-20">
              <Button
                variant="outline"
                label={buttonLabel}
                onClick={handleNavigate}
              />
            </span>
          )}
        </WidgetContainer>
      </div>
    )
  }
)
