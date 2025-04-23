import { KanbanCard, KanbanCardProps } from "../KanbanCard"

export interface KanbanColumnProps {
  label: string
  items: KanbanCardProps[]
}

export function KanbanColumn({ label, items }: KanbanColumnProps) {
  return (
    <div className="flex flex-col gap-8">
      <div>{label}</div>
      {items.map((item) => (
        <KanbanCard
          key={item.id}
          id={item.id}
          title={item.title}
          projections={item.projections}
        />
      ))}
    </div>
  )
}
