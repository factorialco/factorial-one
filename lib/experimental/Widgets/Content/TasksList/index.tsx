import { Task, TaskItem, TaskStatus } from "./TaskItem"

interface TasksList {
  inProgress?: Task[]
  noDue?: Task[]
  due?: Task[]
}

export interface TasksListProps {
  tasks: TasksList
  maxTasksToShow?: number
  onClickTask?: (task: Task) => void
  emptyMessage?: string
  hideIcons?: boolean
}

export function TasksList({
  tasks,
  onClickTask,
  hideIcons = false,
  maxTasksToShow = 5,
  emptyMessage = "No tasks assigned",
}: TasksListProps) {
  const taskTypes: {
    key: "inProgress" | "due" | "noDue"
    status: TaskStatus
  }[] = [
    { key: "inProgress", status: "in-progress" },
    { key: "due", status: "due" },
    { key: "noDue", status: "no-due" },
  ]

  const tasksToRender = taskTypes.flatMap(({ key, status }) =>
    (tasks[key] || []).map(({ id, text, badge, counter }) => ({
      id,
      text,
      badge,
      counter,
      status: status,
    }))
  )

  const isEmpty = !tasksToRender.length

  return (
    <div className="flex flex-col gap-0">
      {isEmpty ? (
        <p className="font-medium">{emptyMessage}</p>
      ) : (
        tasksToRender
          .slice(0, maxTasksToShow)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              status={task.status}
              hideIcon={hideIcons}
              onClick={onClickTask}
            />
          ))
      )}
    </div>
  )
}
