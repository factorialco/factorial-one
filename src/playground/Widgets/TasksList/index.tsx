import { Circle, InProgressTask } from "@/icons"
import { useMemo } from "react"

type TaskStatus = "in-progress" | "due" | "no-due"

type TaskItemProps = {
  title: string
  status: TaskStatus
}

function TaskItem({ title, status }: TaskItemProps) {
  return (
    <div className="flex flex-row items-start gap-2">
      {(status === "due" || status === "no-due") && (
        <Circle
          width={24}
          color={
            status === "no-due"
              ? "hsl(var(--neutral-40))"
              : "hsl(var(--neutral-50))"
          }
        />
      )}
      {status === "in-progress" && <InProgressTask />}
      <p className="mt-0.5 line-clamp-2 flex-1 font-medium">{title}</p>
    </div>
  )
}

interface Props {
  inProgressTasks: string[]
  noDueTasks: string[]
  dueTasks: string[]
  maxTasksToShow?: number
}

export function TasksList({
  inProgressTasks,
  dueTasks,
  noDueTasks,
  maxTasksToShow = 5,
}: Props) {
  const tasksToRender = useMemo(
    () => [
      ...inProgressTasks.map((t) => ({
        title: t,
        status: "in-progress" as TaskStatus,
      })),
      ...dueTasks.map((t) => ({
        title: t,
        status: "due" as TaskStatus,
      })),
      ...noDueTasks.map((t) => ({
        title: t,
        status: "no-due" as TaskStatus,
      })),
    ],
    [inProgressTasks, dueTasks, noDueTasks]
  )

  if (!tasksToRender.length) {
    return null
  }

  return (
    <div className="flex flex-col gap-3">
      {tasksToRender.slice(0, maxTasksToShow).map((task, i) => (
        <TaskItem
          key={`${task} ${i}`}
          title={task.title}
          status={task.status}
        />
      ))}
    </div>
  )
}
