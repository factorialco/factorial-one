import { useState } from "react"
import { RecordType } from "./types"
import { GroupRecord } from "./useData"

export const useGroups = <R extends RecordType>(groups: GroupRecord<R>[]) => {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    groups.reduce(
      (acc, group) => {
        acc[group.key] = false
        return acc
      },
      {} as Record<string, boolean>
    )
  )

  const setGroupOpen = (key: string, open: boolean) => {
    setOpenGroups((prev) => ({ ...prev, [key]: open }))
  }

  return { openGroups, setGroupOpen }
}

type AnimationVariantsOptions = {
  delay?: number
  duration?: number
  maxDelay?: number
}

const DEFAULT_ANIMATION_OPTIONS: Required<AnimationVariantsOptions> = {
  delay: 0.03,
  duration: 0.03,
  maxDelay: 20,
}
export const getAnimationVariants = (options?: AnimationVariantsOptions) => {
  const { delay, duration, maxDelay } = {
    ...DEFAULT_ANIMATION_OPTIONS,
    ...options,
  }

  return {
    hidden: { opacity: 0, y: -10 }, // Start position for the animation
    visible: (i: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: Math.min(i * delay, maxDelay), // Delay each row based on its index
          duration, // Duration of the animation
          type: "spring", // Use a spring type animation for a bounce effect
          stiffness: 100, // Spring stiffness, adjust for more/less bounce
          damping: 10, // Spring damping, adjust to change how the bounce behaves
        },
      }
    },
  }
}
