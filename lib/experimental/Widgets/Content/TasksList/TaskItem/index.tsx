import { AlertTag } from "@/experimental/exports"
import { Counter } from "@/experimental/Information/Counter"
import { DottedCircle, InProgressTask } from "@/icons"
import { cn } from "@/lib/utils"

export type TaskStatus = "in-progress" | "due" | "no-due"
export interface Task {
  id: number | string
  text: string
  badge?: { text: string; isPastDue?: boolean }
  counter?: number
}

export type TaskItemProps = {
  task: Task
  status: TaskStatus
  onClick?: (task: Task) => void
  hideIcon?: boolean
}

type WrapperProps = {
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void
  className: string
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ onClick, className, children }) => {
  return onClick ? (
    <a className={className} onClick={onClick} tabIndex={0}>
      {children}
    </a>
  ) : (
    <div className={className} tabIndex={-1}>
      {children}
    </div>
  )
}

export function TaskItem({
  task,
  status,
  onClick,
  hideIcon = false,
}: TaskItemProps) {
  const className = cn(
    "flex flex-row items-center gap-2 rounded-[8px] border border-solid border-transparent px-2 py-[6px]",
    onClick
      ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none"
      : undefined
  )
  const handleOnClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault()
    onClick?.(task)
  }

  return (
    <Wrapper onClick={handleOnClick} className={className}>
      {!hideIcon && (status === "due" || status === "no-due") && (
        <DottedCircle
          width={24}
          color={
            status === "no-due"
              ? "hsl(var(--neutral-40))"
              : "hsl(var(--neutral-50))"
          }
        />
      )}
      {!hideIcon && status === "in-progress" && <InProgressTask />}
      <p className="mt-0.5 line-clamp-2 flex-1 font-medium">{task.text}</p>
      {!!task.badge && (
        <AlertTag
          level={task.badge.isPastDue ? "critical" : "warning"}
          text={task.badge.text}
        />
      )}
      {!!task.counter && <Counter value={task.counter} />}
    </Wrapper>
  )
}
