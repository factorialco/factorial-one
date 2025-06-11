import { Icon } from "@/components/Utilities/Icon"
import { ChevronDown } from "@/icons/app"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

export type ChevronToggleProps = {
  open?: boolean
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export const ChevronToggle = ({
  open,
  className,
  onClick,
  disabled,
}: ChevronToggleProps) => {
  return (
    <motion.div
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
        disabled && "cursor-not-allowed opacity-50",

        className
      )}
      onClick={onClick}
    >
      <Icon icon={ChevronDown} size="xs" role="button" />
    </motion.div>
  )
}
