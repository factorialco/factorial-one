import type { RecordType } from "@/experimental/OneDataCollection/types"
import { useDroppableList } from "@/lib/dnd/hooks"
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { getReorderDestinationIndex } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index"
import {
  dropTargetForElements,
  monitorForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"
import { Lane } from "../../Lane"
import type { LaneProps } from "../../Lane/types"

export function KanbanLane<TRecord extends RecordType>({
  id,
  instanceId,
  getIndexById,
  onReorder,
  ...laneProps
}: {
  id?: string
  instanceId?: symbol
  getIndexById?: (id: string) => number
  onReorder?: (fromIndex: number, toIndex: number, sourceId: string) => void
} & LaneProps<TRecord>) {
  const laneRef = useRef<HTMLDivElement | null>(null)
  const [isOver, setIsOver] = useState(false)

  useDroppableList(
    id && instanceId && getIndexById && onReorder
      ? {
          ref: laneRef as React.RefObject<HTMLElement>,
          id,
          accepts: ["list-card"],
        }
      : undefined
  )

  useEffect(() => {
    if (!id) return
    return monitorForElements({
      canMonitor: ({ source }) =>
        !instanceId ||
        (source.data as { instanceId?: symbol }).instanceId === instanceId,
      onDropTargetChange: ({ location }) => {
        const overThisLane = location.current.dropTargets.some((t) => {
          const data = t.data as { type?: string; id?: string }
          return data.type === "list-droppable" && data.id === id
        })
        setIsOver(overThisLane)
      },
      onDrop: ({ location, source }) => {
        if (!location.current.dropTargets.length) return
        const inThisLane = location.current.dropTargets.some(
          (t) =>
            (t.data as { type?: string; id?: string }).type ===
              "list-droppable" &&
            (t.data as { type?: string; id?: string }).id === id
        )
        if (!inThisLane) return
        if (!getIndexById || !onReorder) return
        const sourceId = String((source.data as { id?: string }).id)
        const cardTarget = location.current.dropTargets.find(
          (t) => (t.data as { type?: string }).type === "list-card-target"
        ) as { data?: { index?: number } } | undefined
        // If no specific card target, insert at the start of the lane
        const indexOfTarget: number = cardTarget
          ? Number(cardTarget.data?.index)
          : 0
        const closestEdge =
          cardTarget && cardTarget.data
            ? extractClosestEdge(cardTarget.data as Record<string, unknown>)
            : null
        const startIndex = getIndexById(sourceId)
        if (startIndex === -1) return
        const finishIndex = getReorderDestinationIndex({
          startIndex,
          indexOfTarget,
          closestEdgeOfTarget: closestEdge,
          axis: "vertical",
        })
        onReorder(startIndex, finishIndex, sourceId)
      },
    })
  }, [instanceId, id, getIndexById, onReorder])

  // Fallback: directly track hover on the lane element to ensure visual feedback
  useEffect(() => {
    if (!laneRef.current || !id) return
    return dropTargetForElements({
      element: laneRef.current,
      canDrop: ({ source }) =>
        !instanceId ||
        (source.data as { instanceId?: symbol }).instanceId === instanceId,
      getData: () => ({ type: "list-droppable", id }),
      onDragEnter: () => setIsOver(true),
      onDrag: () => setIsOver(true),
      onDragLeave: () => setIsOver(false),
      onDrop: () => setIsOver(false),
    })
  }, [id, instanceId])

  console.log("is Over: ", isOver)

  return (
    <div className="rounded">
      <div
        ref={laneRef}
        className={
          "relative flex min-h-56 w-full flex-col gap-0 rounded-xl border transition-colors"
        }
        style={{
          backgroundColor: isOver
            ? "hsla(210, 91%, 22%, 0.04)"
            : "hsla(210, 91%, 22%, 0.02)",
        }}
      >
        <Lane<TRecord> {...laneProps} />
      </div>
    </div>
  )
}
