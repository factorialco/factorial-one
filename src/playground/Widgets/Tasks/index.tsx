import { Button } from "@/components/Actions/Button"
import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import { Circle } from "@/icons"
import AlertCircle from "@/icons/AlertCircle"
import { Indicator } from "@/ui/indicator"
import { forwardRef } from "react"
import { TasksList } from "../TasksList"

export interface TasksInsightData {
  title: string
  inProgressTasks: string[]
  pendingTasks: string[]
  overdueLabel: string
  overdueTasks: number
  dueLabel: string
  dueTasks: number
  noDueLabel: string
  noDueTasks: number
  linkUrl: string
  linkTitle: string
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
      inProgressTasks,
      pendingTasks,
      overdueTasks,
      dueTasks,
      noDueTasks,
      linkUrl,
      linkTitle,
      buttonLabel,
      overdueLabel,
      dueLabel,
      noDueLabel,
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
        color: "text-f1-foreground-secondary",
      },
      {
        label: noDueLabel,
        count: noDueTasks,
        icon: Circle,
        color: "text-f1-foreground-secondary",
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
        {(inProgressTasks.length || pendingTasks.length) && (
          <TasksList
            inProgressTasks={inProgressTasks}
            pendingTasks={pendingTasks}
          />
        )}
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
