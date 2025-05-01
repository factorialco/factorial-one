export interface KanbanCardProps {
  id: string
  title: string
  projections: React.ReactNode[]
}

export function KanbanCard({ title, projections }: KanbanCardProps) {
  return (
    <div className="rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-3 hover:border-f1-border-hover">
      <div className="text-[14px] font-medium">{title}</div>
      <div className="flex flex-col gap-3">
        {projections.map((projection) => projection)}
      </div>
    </div>
  )
}
