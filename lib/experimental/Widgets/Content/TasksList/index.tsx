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

interface Tasks {
  inProgress?: string[]
  noDue?: string[]
  due?: string[]
}

interface Props {
  tasks: Pick<Tasks, "inProgress" | "noDue" | "due">
  maxTasksToShow?: number
  onClickTask?: (status: TaskStatus) => void
  emptyMessage?: string
}

export function TasksList({
  tasks,
  onClickTask,
  maxTasksToShow = 5,
  emptyMessage = "No tasks assigned",
}: Props) {
  const taskTypes = [
    { key: "inProgress", status: "in-progress" },
    { key: "due", status: "due" },
    { key: "noDue", status: "no-due" },
  ] as const

  const tasksToRender = taskTypes.flatMap(({ key, status }) =>
    (tasks?.[key] || []).map((title) => ({
      title,
      status: status as TaskStatus,
    }))
  )

  const isEmpty = !tasksToRender.length

  return (
    <div className="flex flex-col gap-3">
      {isEmpty ? (
        <p className="font-medium">{emptyMessage}</p>
      ) : (
        tasksToRender
          .slice(0, maxTasksToShow)
          .map((task, i) => (
            <TaskItem
              key={`${task} ${i}`}
              title={task.title}
              status={task.status}
              onClick={onClickTask}
            />
          ))
      )}
    </div>
  )
}
