import { cn, focusRing } from "@/lib/utils"
import { motion, MotionConfig } from "framer-motion"
import { FrameProvider, useSidebar } from "./FrameProvider"

import { useReducedMotion } from "@/lib/a11y"
import { AnimatePresence } from "framer-motion"
interface ApplicationFrameProps {
  banner?: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
}

export function ApplicationFrame({
  children,
  sidebar,
  banner,
}: ApplicationFrameProps) {
  return (
    <FrameProvider>
      <ApplicationFrameContent sidebar={sidebar} banner={banner}>
        {children}
      </ApplicationFrameContent>
    </FrameProvider>
  )
}

const SkipToContentButton = ({ contentId }: { contentId?: string }) => {
  return (
    <a
      href={`#${contentId}`}
      className={focusRing(
        "absolute z-50 -translate-y-full translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      )}
    >
      Skip to content
    </a>
  )
}

function ApplicationFrameContent({
  children,
  sidebar,
  banner,
}: ApplicationFrameProps) {
  const { sidebarState, toggleSidebar, isSmallScreen } = useSidebar()
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <SkipToContentButton contentId="content" />
      <MotionConfig
        reducedMotion={shouldReduceMotion ? "always" : "never"}
        transition={{
          ease: [0.25, 0.1, 0.25, 1],
          duration: shouldReduceMotion ? 0 : 0.2,
        }}
      >
        <div className="grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)] items-stretch">
          <div className="col-[1/-1]">{banner}</div>
          <div className="relative isolate flex h-full">
            <AnimatePresence>
              {sidebarState === "unlocked" && (
                <motion.div
                  className={cn("fixed inset-0 z-[5] bg-f1-background-bold", {
                    hidden: !isSmallScreen,
                  })}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                  onClick={toggleSidebar}
                />
              )}
            </AnimatePresence>
            <div
              className={cn(
                { "transition-all": !shouldReduceMotion },
                sidebarState === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              )}
            >
              {sidebar}
            </div>
            <motion.main
              id="content"
              className={cn(
                "flex max-w-full flex-1 overflow-auto xs:py-1 xs:pr-1",
                sidebarState === "locked" ? "pl-0" : "xs:pl-1"
              )}
              layout
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {children}
            </motion.main>
          </div>
        </div>
      </MotionConfig>
    </>
  )
}
