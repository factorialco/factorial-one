import { Button } from "@/components/Actions/Button"
import { TasksList } from "@/experimental/Widgets/Content/TasksList"
import { Widget } from "@/experimental/Widgets/Widget"
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
  function TasksInsight({ data }, ref) {
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
      <Widget
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
            tasks={{
              inProgress: inProgressTasks.map((task) => ({
                text: task,
              })),
              noDue: noDueTasks.map((task) => ({
                text: task,
              })),
              due: dueTasks.map((task) => ({
                text: task,
              })),
            }}
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
      </Widget>
    )
  }
)
