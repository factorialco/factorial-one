import { ReactNode } from "react"

interface SidebarProps {
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
}

export function Sidebar({ header, body, footer }: SidebarProps) {
  return (
    <div className="flex h-full flex-col gap-2">
      {header}
      {body && <div className="flex-grow overflow-y-auto">{body}</div>}
      {footer}
    </div>
  )
}
