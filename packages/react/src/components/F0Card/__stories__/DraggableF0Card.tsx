import { useDraggable } from "@/lib/exports"
import { useRef } from "react"
import { F0Card } from "../F0Card"

type DragConfig = { id: string; type?: string; data?: Record<string, unknown> }

export function DraggableF0Card({
  drag,
  ...props
}: { drag: DragConfig } & React.ComponentProps<typeof F0Card>) {
  const ref = useRef<HTMLDivElement | null>(null)

  useDraggable({
    ref: ref as React.RefObject<HTMLElement>,
    payload: { kind: drag.type ?? "f0-card", id: drag.id, data: drag.data },
  })

  return <F0Card ref={ref} {...props} />
}
