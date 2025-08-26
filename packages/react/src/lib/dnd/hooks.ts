import { useEffect } from "react"
import { useDndContextOptional } from "./context"
import type { DragPayload } from "./types"

export function useDraggable(args: {
  ref: React.RefObject<HTMLElement>
  payload: DragPayload
  disabled?: boolean
  handleRef?: React.RefObject<HTMLElement | null>
}) {
  const ctx = useDndContextOptional()
  const { ref, payload, disabled, handleRef } = args

  useEffect(() => {
    if (!ref.current) return
    if (!ctx || disabled) return
    return ctx.driver.registerDraggable(ref.current, {
      payload,
      disabled,
      handle: handleRef?.current ?? null,
    })
  }, [ctx, ref, payload.id, payload.kind, disabled, handleRef])
}

export function useDroppableList(args: {
  ref: React.RefObject<HTMLElement>
  id: string
  accepts: string[]
}) {
  const ctx = useDndContextOptional()
  const { ref, id, accepts } = args

  useEffect(() => {
    if (!ref.current) return
    if (!ctx) return
    return ctx.driver.registerDroppable(ref.current, { id, accepts })
  }, [ctx, ref, id, accepts.join("|")])
}

export function useDndEvents(handler: (e: any) => void) {
  const ctx = useDndContextOptional()
  useEffect(
    () => (ctx ? ctx.driver.subscribe(handler) : undefined),
    [ctx, handler]
  )
}
