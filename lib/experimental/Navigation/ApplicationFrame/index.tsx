import { cn } from "@/lib/utils"
import { motion, MotionConfig } from "framer-motion"
import { FrameProvider, useSidebar } from "./FrameProvider"

import { AnimatePresence } from "framer-motion"
interface ApplicationFrameProps {
  sidebar: React.ReactNode
  children: React.ReactNode
}

export function ApplicationFrame({ children, sidebar }: ApplicationFrameProps) {
  return (
    <FrameProvider>
      <ApplicationFrameContent sidebar={sidebar}>
        {children}
      </ApplicationFrameContent>
    </FrameProvider>
  )
}

function ApplicationFrameContent({ children, sidebar }: ApplicationFrameProps) {
  const { sidebarState, toggleSidebar, isSmallScreen } = useSidebar()

  return (
    <MotionConfig transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.2 }}>
      <div className="relative flex h-full flex-row">
        <AnimatePresence>
          {sidebarState === "unlocked" && (
            <motion.div
              className={cn("fixed inset-0 z-[5] bg-f1-background-bold/60", {
                hidden: !isSmallScreen,
              })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={toggleSidebar}
            />
          )}
        </AnimatePresence>
        <div
          className={cn(
            "transition-all",
            sidebarState === "locked" ? "w-64 pl-3" : "w-0"
          )}
        >
          {sidebar}
        </div>
        <motion.div
          className={cn(
            "xs:py-1 xs:pr-1 flex max-w-full flex-1 overflow-x-hidden",
            sidebarState === "locked" ? "pl-0" : "xs:pl-1"
          )}
          layout
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {children}
        </motion.div>
      </div>
    </MotionConfig>
  )
}
