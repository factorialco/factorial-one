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
    <div className="bg-gray-100 flex flex-col gap-8 rounded-lg">
      <div>
        {isStatusVariant(statusColor) ? (
          <StatusTag text={label} variant={statusColor} />
        ) : (
          <DotTag text={label} color={statusColor} />
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
