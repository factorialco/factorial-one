import { Circle, InProgressTask } from "@/icons"
import { useCallback } from "react"

type TaskStatus = "in-progress" | "due" | "no-due"

type TaskItemProps = {
  title: string
  status: TaskStatus
  onClick?: (status: TaskStatus) => void
}

function TaskItem({ title, status, onClick }: TaskItemProps) {
  const handleClick = useCallback(() => {
    onClick?.(status)
  }, [onClick, status])

  return (
    <div className="flex flex-row items-start gap-2" onClick={handleClick}>
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
  onClickTask?: (status: TaskStatus) => void
}

export function TasksList({
  inProgressTasks,
  dueTasks,
  noDueTasks,
  onClickTask,
  maxTasksToShow = 5,
}: Props) {
  const tasksToRender = [
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
  ]

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
          onClick={onClickTask}
        />
      ))}
    </div>
  )
}
