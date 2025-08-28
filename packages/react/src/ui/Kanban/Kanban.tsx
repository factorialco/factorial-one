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
                instanceId={dnd?.instanceId}
                getIndexById={
                  lane.id && dnd
                    ? (id) => dnd.getIndexById(lane.id as string, id)
                    : undefined
                }
                onReorder={
                  lane.id && dnd
                    ? (from, to, sourceId) =>
                        dnd.onReorder(lane.id as string, from, to, sourceId)
                    : undefined
                }
                title={lane.title}
                items={lane.items}
                getKey={(item, index) => getKey(item, index, lane.id)}
                renderCard={(item, index) =>
                  renderCard(item, index, total, lane.id)
                }
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
