import { Badge } from "@/components/Information/Badge"
import { DottedCircle, InProgressTask } from "@/icons"
import { useCallback } from "react"

type TaskStatus = "in-progress" | "due" | "no-due"

type TaskItemProps = {
  title: string
  status: TaskStatus
  onClick?: (status: TaskStatus) => void
  badge?: {
    text: string
    isPastDue?: boolean
  }
  counter?: string
}

function TaskItem({ title, status, onClick, badge, counter }: TaskItemProps) {
  const handleClick = useCallback(() => {
    onClick?.(status)
  }, [onClick, status])

  return (
    <div className="flex flex-row items-start gap-2" onClick={handleClick}>
      {(status === "due" || status === "no-due") && (
        <DottedCircle
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
      {!!badge && (
        <Badge
          text={badge.text}
          variant={badge.isPastDue ? "critical" : "neutral"}
        />
      )}
      {!!counter && <Badge variant="neutral" text={counter} />}
    </div>
  )
}

interface Task {
  text: string
  badge?: { text: string; isPastDue?: boolean }
  counter?: string
}

interface Tasks {
  inProgress?: Task[]
  noDue?: Task[]
  due?: Task[]
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
    (tasks?.[key] || []).map(({ text, badge, counter }) => ({
      title: text,
      badge,
      counter,
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
              badge={task.badge}
              counter={task.counter}
            />
          ))
      )}
    </div>
  )
}
