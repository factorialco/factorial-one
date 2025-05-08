import { Icon } from "@/components/Utilities/Icon"
import Star from "@/icons/app/Star"
import StarFilled from "@/icons/app/StarFilled"
import { AnimatePresence, motion } from "framer-motion"

const IconMotion = motion.create(Icon)

export const Favorites = ({
  isMarked,
  onChange,
}: {
  isMarked: boolean
  onChange: (newValue: boolean) => void
}) => {
  return (
    <AnimatePresence mode="wait">
      <button onClick={() => onChange(!isMarked)}>
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
