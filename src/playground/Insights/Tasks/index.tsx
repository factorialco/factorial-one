import { Button } from "@/components/Actions/Button"
import { Icon } from "@/components/Utilities/Icon"
import { Circle } from "@/icons"
import AlertCircle from "@/icons/AlertCircle"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardLink, CardTitle } from "@/ui/card"
import { forwardRef } from "react"
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
        <Card>
          <CardHeader className="flex flex-row justify-between">
            <CardTitle>{title}</CardTitle>
            <CardLink href={linkUrl} title={linkTitle} />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3">
              {taskCategories.map(({ label, count, icon, color }) => (
                <div key={label} className="grid-row-2 col-span-1 grid">
                  <p className="font-medium text-intermediate">{label}</p>
                  <div className="flex items-center gap-1">
                    <p className="text-2xl font-semibold">{count}</p>
                    <span className={cn("flex", color)}>
                      <Icon icon={icon} size="md" />
                    </span>
                  </div>
                </div>
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
                <Button variant="outline" label={buttonLabel} />
              </span>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }
)
