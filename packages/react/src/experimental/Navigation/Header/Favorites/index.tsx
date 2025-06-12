import { Icon } from "@/components/Utilities/Icon"
import Star from "@/icons/app/Star"
import StarFilled from "@/icons/app/StarFilled"
import { cn, focusRing } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"

const IconMotion = motion.create(Icon)

interface FavoriteButtonProps {
  /**
   * the state of the button pressed/unpressed
   */
  isMarked: boolean
  onChange: (newValue: boolean) => void
  /**
   * Label of the button, will be used as accessibility
   */
  label: string
}

export const FavoriteButton = ({
  isMarked,
  onChange,
  label,
}: FavoriteButtonProps) => {
  return (
    <AnimatePresence mode="wait">
      <button
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded",
          focusRing()
        )}
        onClick={() => onChange(!isMarked)}
        aria-label={label}
      >
        {isMarked ? (
          <IconMotion
            size="sm"
            key="favorite"
            icon={StarFilled}
            className="text-[hsl(var(--promote-50))]"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{
              ease: [0.175, 0.885, 0.27, 2],
            }}
          />
        ) : (
          <IconMotion
            size="sm"
            key="not-favorite"
            icon={Star}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{
              ease: [0, 0, 0.58, 1],
            }}
          />
        )}
      </button>
    </AnimatePresence>
  )
}
