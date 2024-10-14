import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { useSidebar } from "../ApplicationFrame/FrameProvider"

interface SidebarProps {
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
}

export function Sidebar({ header, body, footer }: SidebarProps) {
  const { isSidebarExpanded } = useSidebar()

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-2",
        isSidebarExpanded ? "" : "fixed left-0 top-0"
      )}
    >
      {header}
      {body && <div className="flex-grow overflow-y-auto">{body}</div>}
      {footer}
    </div>
  )
}
