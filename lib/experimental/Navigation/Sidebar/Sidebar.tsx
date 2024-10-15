import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
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
    <motion.div
      initial={false}
      className={cn(
        "absolute bottom-0 left-0 top-0 flex w-64 flex-col gap-2 px-3",
        isSidebarExpanded
          ? "h-screen"
          : "border-f1-border-bold/5 h-[calc(100vh-16px)] bg-f1-background-bold/5 pb-3 backdrop-blur-3xl"
      )}
      animate={{
        opacity: isSidebarExpanded ? 1 : 1,
        top: isSidebarExpanded ? 0 : "8px",
        borderRadius: isSidebarExpanded ? "0" : "12px",
        left: isSidebarExpanded ? "0" : "8px",
      }}
    >
      {header}
      {body && <div className="flex-grow overflow-y-auto">{body}</div>}
      {footer}
    </motion.div>
  )
}
