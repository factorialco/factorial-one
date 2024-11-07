import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ReactNode, useState } from "react"
import { useSidebar } from "../ApplicationFrame/FrameProvider"

interface SidebarProps {
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
}

export function Sidebar({ header, body, footer }: SidebarProps) {
  const { sidebarState, isSmallScreen } = useSidebar()
  const shouldReduceMotion = useReducedMotion()
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 0)
  }

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
      {body && (
        <div className="relative flex-grow overflow-y-hidden">
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="from-f1-foreground-tertiary pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b to-transparent mix-blend-soft-light [mask-image:linear-gradient(to_right,transparent,black_30%,black_60%,transparent)]"
              />
            )}
          </AnimatePresence>
          <div
            className="h-full overflow-y-auto"
            onScroll={handleScroll}
            onTouchMove={handleScroll}
          >
            {body}
          </div>
        </div>
      )}
      <div className="flex-shrink-0">{footer}</div>
    </motion.div>
  )
}
