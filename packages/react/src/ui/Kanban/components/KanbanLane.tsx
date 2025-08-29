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
  getIndexById,
  onMove,
  allowReorder: _allowReorder,
  ...laneProps
}: {
  id?: string
  getIndexById?: (id: string) => number
  onMove?: (
    fromLaneId: string,
    toLaneId: string,
    sourceId: string,
    toIndex: number | null
  ) => void
  allowReorder?: boolean
} & LaneProps<TRecord>) {
  const laneRef = useRef<HTMLDivElement | null>(null)
  const [isOver, setIsOver] = useState(false)
  const hasFullDnD = Boolean(id && getIndexById)

  useDroppableList(
    hasFullDnD
      ? {
          ref: laneRef as React.RefObject<HTMLElement>,
          id: id as string,
          accepts: ["list-card"],
        }
      : undefined
  )

  useEffect(() => {
    if (!id) return
    return monitorForElements({
      // Allow monitoring universally; driver already scopes by its own instance
      onDropTargetChange: ({ location }) => {
        const overThisLane = location.current.dropTargets.some((t) => {
          const data = t.data as { type?: string; id?: string }
          return data.type === "list-droppable" && data.id === id
        })
        setIsOver(overThisLane)
        if (overThisLane) {
          // Debug: hover over lane
          console.log("[KanbanLane] over lane", id)
        }
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
        const sourceId = String((source.data as { id?: string }).id)
        // Prefer source laneId from payload; fallback to initial drop target
        const sourceLaneIdFromPayload = String(
          (source.data as unknown as { data?: { laneId?: string } }).data
            ?.laneId ?? ""
        )
        const initialLaneId =
          sourceLaneIdFromPayload ||
          String(
            (
              location.initial.dropTargets.find(
                (t) => (t.data as { type?: string }).type === "list-droppable"
              )?.data as { id?: string }
            )?.id ?? ""
          )
        const isSameLane = Boolean(initialLaneId && id && initialLaneId === id)

        // Cross-lane move: always allowed, compute toIndex from card target edge
        if (!isSameLane && onMove && initialLaneId) {
          console.log(
            "[KanbanLane] onMove",
            initialLaneId,
            "->",
            id,
            "source:",
            sourceId
          )
          const cardTarget = location.current.dropTargets.find(
            (t) => (t.data as { type?: string }).type === "list-card-target"
          ) as { data?: { index?: number } } | undefined
          const indexOfTarget: number | null = cardTarget
            ? Number(cardTarget.data?.index)
            : null
          const edge = cardTarget?.data
            ? extractClosestEdge(cardTarget.data as Record<string, unknown>)
            : null
          const toIndex =
            indexOfTarget === null
              ? null
              : edge === "bottom"
                ? indexOfTarget + 1
                : indexOfTarget
          onMove(initialLaneId, id, sourceId, toIndex)
          setIsOver(false)
          return
        }

        // Same-lane reorder → compute finishIndex and call onMove with toIndex
        if (!isSameLane || !getIndexById) return
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
        if (onMove && initialLaneId) {
          // Unify to onMove: same-lane reorder becomes onMove with toIndex
          onMove(initialLaneId, id as string, sourceId, finishIndex)
        }
        setIsOver(false)
      },
    })
  }, [id, getIndexById, onMove])

  // Fallback: directly track hover on the lane element to ensure visual feedback
  useEffect(() => {
    if (!laneRef.current || !id || hasFullDnD) return
    return dropTargetForElements({
      element: laneRef.current,
      getData: () => ({ type: "list-droppable", id }),
      onDragEnter: () => setIsOver(true),
      onDrag: () => setIsOver(true),
      onDragLeave: () => setIsOver(false),
      onDrop: () => setIsOver(false),
    })
  }, [id, hasFullDnD])

  return (
    <div className="h-full rounded">
      <div
        ref={laneRef}
        className={
          "relative flex h-full min-h-56 w-full flex-col gap-0 rounded-xl border transition-colors"
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
