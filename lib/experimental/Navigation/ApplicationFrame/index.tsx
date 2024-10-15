import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { motion, MotionConfig } from "framer-motion"
import { Menu } from "lucide-react"
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
  const { sidebarState, toggleSidebar } = useSidebar()

  return (
    <MotionConfig transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 0.3 }}>
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
          className="flex flex-1"
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
        <Button
          variant="outline"
          size="md"
          className="fixed bottom-4 right-4 z-50"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-4 w-4" />
          Toggle sidebar
        </Button>
      </div>
    </MotionConfig>
  )
}
