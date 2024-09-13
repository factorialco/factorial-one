import { Button } from "@/components/Actions/Button"
import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import { Circle } from "@/icons"
import AlertCircle from "@/icons/AlertCircle"
import { Indicator } from "@/ui/indicator"
import { forwardRef } from "react"

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
  emptyStateText: string
  handleNavigate: () => void
  buttonLabel?: string
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
        color: "text-critical-50",
      },
      {
        label: dueLabel,
        count: dueTasks,
        icon: Circle,
        color: "text-f1-foreground-neutral-secondary",
      },
      {
        label: noDueLabel,
        count: noDueTasks,
        icon: Circle,
        color: "text-f1-foreground-neutral-secondary",
      },
    ]

    return (
      <WidgetContainer
        ref={ref}
        header={{
          title,
          link: { title: linkTitle, url: linkUrl },
        }}
      >
        <div className="grid grid-cols-3">
          {taskCategories.map(({ label, count, icon, color }) => (
            <Indicator
              key={label}
              label={label}
              count={count}
              icon={icon}
              color={color}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {!tasks?.length ? (
            <p>{emptyStateText}</p>
          ) : (
            tasks.slice(0, 5).map((task, i) => (
              <div
                key={`${task} ${i}`}
                className="flex flex-row items-center gap-3"
              >
                <div className="border-f1-border-neutral h-5 min-w-5 rounded-md border border-solid" />
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
    )
  }
)
