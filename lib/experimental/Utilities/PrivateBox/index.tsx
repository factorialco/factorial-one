import { usePrivacyMode } from "@/lib/privacyMode"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { FC, PropsWithChildren } from "react"

export const PrivateBox: FC<PropsWithChildren> = ({ children }) => {
  const { enabled } = usePrivacyMode()

  return (
    <div
      className={cn(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        enabled &&
          "select-none overflow-hidden rounded-sm ring-f1-border-secondary"
      )}
      aria-hidden={enabled}
    >
      <motion.div
        className="h-full w-full"
        animate={{
          opacity: enabled ? 0.3 : 1,
          filter: enabled ? "blur(5px)" : "blur(0px)",
        }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
