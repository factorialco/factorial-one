import { Circle, InProgressTask } from "@/icons"
import { useMemo } from "react"

type TaskStatus = "in-progress" | "pending"

type TaskItemProps = {
  title: string
  status: TaskStatus
}

function TaskItem({ title, status }: TaskItemProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      {status === "pending" && <Circle width={24} opacity={0.4} />}
      {status === "in-progress" && <InProgressTask />}
      <p className="truncate font-medium">{title}</p>
    </div>
  )
}

interface Props {
  inProgressTasks: string[]
  pendingTasks: string[]
}

const MAX_TASKS_TO_SHOW = 5

export function TasksList({ inProgressTasks, pendingTasks }: Props) {
  const totalTasks = inProgressTasks.length + pendingTasks.length

  const maxPendingTasks = Math.max(0, 5 - inProgressTasks.length)

  const tasksToRender = useMemo(
    () => [
      ...inProgressTasks.slice(0, MAX_TASKS_TO_SHOW).map((t) => ({
        title: t,
        status: "in-progress" as TaskStatus,
      })),
      ...pendingTasks.slice(0, maxPendingTasks).map((t) => ({
        title: t,
        status: "pending" as TaskStatus,
      })),
    ],
    [inProgressTasks, pendingTasks, maxPendingTasks]
  )

  if (!totalTasks) {
    return null
  }

  return (
    <div className="flex flex-col gap-3">
      {tasksToRender.map((task, i) => (
        <TaskItem
          key={`${task} ${i}`}
          title={task.title}
          status={task.status}
        />
      ))}
    </div>
  )
}
