import type { NewColor } from "@/experimental/Information/Tags/DotTag"
import { DotTag } from "@/experimental/Information/Tags/DotTag"
import type { StatusVariant } from "@/experimental/Information/Tags/StatusTag"
import { StatusTag } from "@/experimental/Information/Tags/StatusTag"
import { KanbanCard, KanbanCardProps } from "../KanbanCard"
export interface KanbanColumnProps {
  label: string
  statusColor: StatusVariant | NewColor
  items: KanbanCardProps[]
}

export function KanbanColumn({ label, statusColor, items }: KanbanColumnProps) {
  const isStatusVariant = (status: string): status is StatusVariant => {
    return ["neutral", "info", "positive", "warning", "critical"].includes(
      status
    )
  }
  return (
    <div className="h-max max-h-[800px] min-h-[200px] w-max rounded-lg bg-f1-background-tertiary p-1">
      <div className="flex w-[300px] flex-col gap-3">
        {isStatusVariant(statusColor) ? (
          <div className="w-max">
            <StatusTag text={label} variant={statusColor} />
          </div>
        ) : (
          <div className="w-max">
            <DotTag text={label} color={statusColor} />
          </div>
        )}
        {items.map((item) => (
          <KanbanCard
            key={item.id}
            id={item.id}
            title={item.title}
            projections={item.projections}
          />
        ))}
      </div>
    </div>
  )
}
