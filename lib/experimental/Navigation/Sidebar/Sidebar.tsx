import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
import { AnimatePresence, motion } from "framer-motion"
import { ReactNode } from "react"
import { useIntersectionObserver } from "usehooks-ts"
import { useSidebar } from "../ApplicationFrame/FrameProvider"

const ScrollShadow = ({ position }: { position: "top" | "bottom" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.5 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={cn(
      "pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-bold after:opacity-[0.04] after:content-['']",
      position === "top"
        ? [
            "top-0",
            "bg-gradient-to-b from-f1-background-secondary to-transparent",
            "after:top-0",
          ]
        : [
            "bottom-0",
            "bg-gradient-to-t from-f1-background-secondary to-transparent",
            "after:bottom-0",
          ]
    )}
  />
)

interface SidebarProps {
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
}

export function Sidebar({ header, body, footer }: SidebarProps) {
  const { sidebarState, isSmallScreen } = useSidebar()
  const shouldReduceMotion = useReducedMotion()

  const [topRef, isAtTop] = useIntersectionObserver({ threshold: 1 })
  const [bottomRef, isAtBottom] = useIntersectionObserver({ threshold: 1 })

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
        "absolute bottom-0 left-0 top-0 z-10 flex w-[240px] flex-col transition-[background-color]",
        sidebarState === "locked"
          ? "h-full"
          : cn(
              "border-solid border-f1-border-secondary shadow-lg backdrop-blur-2xl",
              isSmallScreen
                ? "h-full border-y-transparent border-l-transparent bg-f1-background/90"
                : "h-[calc(100%-16px)] bg-f1-background/60"
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
      <header className="flex-shrink-0">{header}</header>
      {body && (
        <nav className="relative flex-grow overflow-y-hidden">
          <ScrollArea className="h-full">
            <div ref={topRef} className="h-px" aria-hidden="true" />
            {body}
            <div ref={bottomRef} className="h-px" aria-hidden="true" />
          </ScrollArea>

          <AnimatePresence>
            {!isAtTop && <ScrollShadow position="top" />}
            {!isAtBottom && <ScrollShadow position="bottom" />}
          </AnimatePresence>
        </nav>
      )}
      <div className="flex-shrink-0">{footer}</div>
    </motion.div>
  )
}
