import { Button as ActionButton } from "@/components/Actions/Button"
import { Icon, IconType } from "@/components/Utilities/Icon"
import {
  FaceNegative,
  FaceNeutral,
  FacePositive,
  FaceSuperNegative,
  FaceSuperPositive,
  Reaction,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Button } from "@/ui/button"
import { cva } from "cva"
import { AnimatePresence, motion } from "motion/react"
import { ComponentProps, useState } from "react"
import { EmojiImage } from "../../../../lib/emojis"
import { BaseAvatar } from "../BaseAvatar"

type Pulse =
  | "superNegative"
  | "negative"
  | "neutral"
  | "positive"
  | "superPositive"

const pulseIcon: Record<Pulse, IconType> = {
  superNegative: FaceSuperNegative,
  negative: FaceNegative,
  neutral: FaceNeutral,
  positive: FacePositive,
  superPositive: FaceSuperPositive,
}

const iconStyle = cva({
  variants: {
    pulse: {
      superNegative: "text-[hsl(theme(colors.radical.50))]",
      negative: "text-[hsl(theme(colors.orange.50))]",
      neutral: "text-[hsl(theme(colors.yellow.50))]",
      positive: "text-[hsl(theme(colors.flubber.50))]",
      superPositive: "text-[hsl(theme(colors.grass.50))]",
    },
  },
})

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

type Props = {
  firstName: string
  lastName: string
  src?: string
  pulse?: Pulse
  onPulseClick: () => void
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

export const PulseAvatar = ({
  firstName,
  lastName,
  src,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  pulse,
  onPulseClick,
}: Props) => {
  const translations = useI18n()
  const [showWave, setShowWave] = useState(!pulse)

  return (
    <div className="relative h-14 w-14">
      <AnimatePresence mode="popLayout" initial={showWave ? true : false}>
        {showWave ? (
          <motion.div
            className="relative h-14 w-14 rounded-full bg-f1-background-warning"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              scale: {
                type: "spring",
                stiffness: 290,
                damping: 15.1,
                mass: 1.4,
              },
              opacity: {
                type: "linear",
                duration: 0.2,
              },
            }}
          >
            <motion.div
              key="wave"
              initial={{ opacity: 0, originX: 0.6, originY: 0.6 }}
              animate={{
                rotate: [-15, 20, -15],
                opacity: 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: 0.4, ease: "easeOut" },
                scale: { duration: 0.4, ease: "easeOut" },
                rotate: {
                  repeat: 1,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              onAnimationComplete={() => setShowWave(false)}
              className="absolute inset-0 flex select-none items-center justify-center text-4xl"
            >
              <EmojiImage emoji="👋" size="md" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="avatar"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="relative"
            transition={{
              scale: {
                type: "spring",
                stiffness: 290,
                damping: 15.1,
                mass: 1.4,
              },
              opacity: {
                type: "linear",
                duration: 0.2,
              },
            }}
          >
            <BaseAvatar
              type="rounded"
              name={[firstName, lastName]}
              src={src}
              size="large"
              color="random"
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledby}
            />
            {pulse ? (
              <div className="absolute -bottom-1 -right-1 inline-flex rounded-sm bg-f1-background">
                <Button
                  variant="neutral"
                  size="sm"
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    onPulseClick()
                  }}
                  round
                  aria-label={translations.actions.edit}
                >
                  <Icon
                    icon={pulseIcon[pulse]}
                    className={iconStyle({ pulse })}
                  />
                </Button>
              </div>
            ) : (
              <motion.div
                key="reaction-button"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  opacity: { delay: 0.25 },
                  scale: { delay: 0.25 },
                }}
                className="absolute -bottom-1 -right-1 rounded-sm bg-f1-background"
              >
                <ActionButton
                  label={translations.actions.add}
                  variant="neutral"
                  size="sm"
                  icon={Reaction}
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    onPulseClick()
                  }}
                  hideLabel
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

PulseAvatar.displayName = "PulseAvatar"
