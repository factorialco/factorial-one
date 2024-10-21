import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"
import { useSidebar } from "../ApplicationFrame/FrameProvider"

interface SidebarProps {
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
}

export function Sidebar({ header, body, footer }: SidebarProps) {
  const { sidebarState, isSmallScreen } = useSidebar()
  const shouldReduceMotion = useReducedMotion()

  const transition = {
    x: {
      ease:
        sidebarState !== "locked"
          ? isSmallScreen
            ? [0.25, 0.46, 0.45, 0.94]
            : [0.175, 0.885, 0.32, 1.1]
          : [0, 0, 0.58, 1],
      duration: shouldReduceMotion
        ? 0
        : sidebarState !== "locked" && !isSmallScreen
          ? 0.3
          : 0.2,
    },
    top: { duration: shouldReduceMotion ? 0 : 0.1 },
    left: { duration: shouldReduceMotion ? 0 : 0.1 },
    default: { duration: shouldReduceMotion ? 0 : 0.2 },
  }

  return (
    <motion.div
      initial={false}
      className={cn(
        "absolute bottom-0 left-0 top-0 z-10 flex w-64 flex-col px-3 transition-[background-color]",
        sidebarState === "locked"
          ? "h-screen"
          : cn(
              "pb-3",
              isSmallScreen
                ? "h-screen bg-f1-background-secondary"
                : "h-[calc(100vh-16px)] border-solid border-f1-border/40 bg-f1-background/60 shadow-lg backdrop-blur-2xl"
            )
      )}
      animate={{
        top: sidebarState === "locked" ? 0 : isSmallScreen ? 0 : "8px",
        borderRadius:
          sidebarState === "locked" ? "0" : isSmallScreen ? "0" : "12px",
        left: sidebarState === "locked" ? "0" : isSmallScreen ? 0 : "8px",
        x: sidebarState === "hidden" ? -260 : 0,
        opacity: sidebarState === "hidden" ? (isSmallScreen ? 0.7 : 0) : 1,
        pointerEvents: sidebarState === "hidden" ? "none" : "auto",
      }}
      transition={transition}
    >
      <div className="flex-shrink-0">{header}</div>
      {body && <div className="flex-grow overflow-y-auto">{body}</div>}
      <div className="flex-shrink-0">{footer}</div>
    </motion.div>
  )
}
