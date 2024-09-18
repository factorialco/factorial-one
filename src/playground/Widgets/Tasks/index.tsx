import { Button } from "@/components/Actions/Button"
import { TasksList } from "@/components/Widgets/TasksList"
import { WidgetContainer } from "@/components/Widgets/WidgetContainer"
import { Circle } from "@/icons"
import AlertCircle from "@/icons/AlertCircle"
import { Indicator } from "@/ui/indicator"
import { forwardRef } from "react"

export interface TasksInsightData {
  title: string
  inProgressTasks: string[]
  dueTasks: string[]
  noDueTasks: string[]
  overdueLabel: string
  overdueTasksCount: string
  dueLabel: string
  dueTasksCount: string
  noDueLabel: string
  noDueTasksCount: string
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
      dueTasksCount,
      noDueTasksCount,
      overdueTasksCount,
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
        content: overdueTasksCount,
        icon: AlertCircle,
        color: "text-critical-50",
      },
      {
        label: dueLabel,
        content: dueTasksCount,
        icon: Circle,
        color: "text-f1-foreground-secondary",
      },
      {
        label: noDueLabel,
        content: noDueTasksCount,
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
          {taskCategories.map(({ label, content, icon, color }) => (
            <Indicator
              key={label}
              label={label}
              content={content}
              icon={icon}
              color={color}
            />
          ))}
        </div>
        {(inProgressTasks.length || dueTasks.length || noDueTasks.length) && (
          <TasksList
            inProgressTasks={inProgressTasks}
            noDueTasks={noDueTasks}
            dueTasks={dueTasks}
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
