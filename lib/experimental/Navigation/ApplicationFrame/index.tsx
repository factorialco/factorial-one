import { cn } from "@/lib/utils"
import { motion, MotionConfig } from "framer-motion"
import { FrameProvider, useSidebar } from "./FrameProvider"

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
  const { sidebarState } = useSidebar()

  return (
    <MotionConfig transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.2 }}>
      <div className="relative flex h-full flex-row">
        <div
          className={cn(
            "transition-all",
            sidebarState === "locked" ? "w-64 pl-3" : "w-0"
          )}
        >
          <motion.div
            initial={false}
            animate={{
              opacity: 1,
            }}
          >
            {sidebar}
          </motion.div>
        </div>
        <motion.div
          className={cn(
            "xs:py-1 xs:pr-1 flex max-w-full flex-1",
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
