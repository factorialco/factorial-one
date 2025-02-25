import { cn, focusRing } from "@/lib/utils.ts"
import { AnimatePresence, motion, MotionConfig } from "framer-motion"

import { useReducedMotion } from "@/lib/a11y.tsx"
import { useI18n } from "@/lib/i18n-provider.tsx"

import { FrameProvider, useSidebar } from "./FrameProvider.tsx"

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
  const translations = useI18n()
  return (
    <a
      href={`#${contentId}`}
      className={focusRing(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      )}
    >
      {translations.actions.skipToContent}
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
                <motion.nav
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
              ref={(node) => {
                // React types does not yet support ["inert" attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert) at the moment
                if (sidebarState === "hidden") {
                  node?.setAttribute("inert", "")
                } else {
                  node?.removeAttribute("inert")
                }
              }}
            >
              <SkipToContentButton contentId="content" />
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
