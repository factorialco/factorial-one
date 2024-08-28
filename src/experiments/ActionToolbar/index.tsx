import { AnimatePresence, motion } from "framer-motion"

const toolbarVariants = {
  initial: { y: 16, opacity: 0, scale: 0.8, filter: "blur(8px)" },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      ease: "circInOut",
    },
  },
  exit: {
    y: 16,
    opacity: 0,
    scale: 0.8,
    filter: "blur(8px)",
    transition: {
      duration: 0.2,
      ease: "circInOut",
    },
  },
}

interface ActionToolbarProps {
  children: React.ReactNode
  isVisible: boolean
}

export function ActionToolbar({ children, isVisible }: ActionToolbarProps) {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={toolbarVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center gap-1 rounded-2xl border-muted-foreground bg-card px-2 py-2 text-card-foreground shadow-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
