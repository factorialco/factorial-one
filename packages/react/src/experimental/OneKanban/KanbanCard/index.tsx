export interface KanbanCardProps {
  id: string
  title: string
  projections: React.ReactNode[]
}

export function KanbanCard({ title, projections }: KanbanCardProps) {
  return (
    <div>
      <div>{title}</div>
      <div className="flex flex-col gap-4">
        {projections.map((projection) => projection)}
      </div>
    </div>
  )
}
