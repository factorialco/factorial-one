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
  const { sidebarState } = useSidebar()

  const transition = {
    x: {
      ease:
        sidebarState !== "locked" ? [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: sidebarState !== "locked" ? 0.3 : 0.1,
    },
    top: { duration: 0.1 },
    left: { duration: 0.1 },
    default: { duration: 0.2 },
  }

  return (
    <motion.div
      initial={false}
      className={cn(
        "absolute bottom-0 left-0 top-0 flex w-64 flex-col gap-2 px-3 transition-colors",
        sidebarState === "locked"
          ? "h-screen"
          : "border-f1-border-bold/5 h-[calc(100vh-16px)] bg-f1-background-bold/5 pb-3 backdrop-blur-3xl"
      )}
      animate={{
        top: sidebarState === "locked" ? 0 : "8px",
        borderRadius: sidebarState === "locked" ? "0" : "12px",
        left: sidebarState === "locked" ? "0" : "8px",
        x: sidebarState === "hidden" ? -200 : 0,
        opacity: sidebarState === "hidden" ? 0 : 1,
        pointerEvents: sidebarState === "hidden" ? "none" : "auto",
      }}
      transition={transition}
    >
      {header}
      {body && <div className="flex-grow overflow-y-auto">{body}</div>}
      {footer}
    </motion.div>
  )
}
