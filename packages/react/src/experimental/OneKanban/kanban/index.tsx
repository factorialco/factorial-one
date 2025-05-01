import { KanbanColumn, KanbanColumnProps } from "../KanbanColumn"

interface KanbanProps {
  columns: KanbanColumnProps[]
}

export function Kanban({ columns }: KanbanProps) {
  const renderColumn = (column: KanbanColumnProps) => {
    return (
      <KanbanColumn
        key={column.label}
        label={column.label}
        statusColor={column.statusColor}
        items={column.items}
      />
    )
  }

  return (
    <div className="flex flex-row gap-3 overflow-x-auto pb-6">
      {columns.map((column) => renderColumn(column))}
    </div>
  )
}
