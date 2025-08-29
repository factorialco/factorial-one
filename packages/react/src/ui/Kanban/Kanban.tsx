import { ScrollArea } from "@/experimental"
import type { RecordType } from "@/experimental/OneDataCollection/types"
import { cn } from "@/lib/utils"
import { KanbanLane } from "./components/KanbanLane"
import type { KanbanLaneAttributes, KanbanProps } from "./types.ts"

const KANBAN_LANE_HEIGHT = 700

export function Kanban<TRecord extends RecordType>(
  props: KanbanProps<TRecord>
): JSX.Element {
  const { lanes, renderCard, getKey, className, dnd } = props

  return (
    <ScrollArea className={cn("w-full", className)}>
      <div className="mb-2 flex gap-2">
        {lanes.map((lane: KanbanLaneAttributes<TRecord>, laneIndex: number) => {
          const total = lane.items.length
          return (
            <div key={lane.id ?? String(laneIndex)} className="shrink-0">
              <KanbanLane<TRecord>
                id={lane.id}
                getIndexById={
                  lane.id && dnd
                    ? (id) => dnd.getIndexById(lane.id as string, id)
                    : undefined
                }
                onMove={dnd?.onMove}
                allowReorder={dnd?.allowReorder}
                title={lane.title}
                items={lane.items}
                getKey={(item, index) => getKey(item, index, lane.id)}
                renderCard={(item, index) => {
                  const node = renderCard(item, index, total, lane.id)
                  // If it's a KanbanCard, pass laneId to identify its lane for targets
                  return node
                }}
                emptyState={lane.emptyState}
                loading={lane.loading}
                maxHeight={KANBAN_LANE_HEIGHT}
                variant={lane.variant}
                hasMore={lane.hasMore}
                loadingMore={lane.loadingMore}
                fetchMore={lane.fetchMore}
              />
            </div>
          )
        })}
      </div>
    </ScrollArea>
  )
}
