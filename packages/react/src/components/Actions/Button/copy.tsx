import { Check, LayersFront } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Button as ShadcnButton } from "@/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { ComponentProps, forwardRef, useEffect, useState } from "react"
import { Icon } from "../../Utilities/Icon"
import { iconOnlyVariants } from "./internal"

// Props for the new CopyButton
// Extends ShadcnButton props but omits things we'll control
export type CopyButtonProps = Omit<
  ComponentProps<typeof ShadcnButton>,
  "onClick" | "children" | "title" | "label" | "hideLabel" | "icon" | "round"
> & {
  valueToCopy: string
  copiedTooltipLabel?: string
  copyTooltipLabel?: string
}

// Animation variants for copy icon
const copyIconMotionVariants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0 },
}
const copyIconTransition = { duration: 0.15, ease: "easeOut" }

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      valueToCopy,
      copyTooltipLabel: customCopyTooltipLabel,
      copiedTooltipLabel: customCopiedTooltipLabel,
      variant = "neutral", // Default variant
      size = "sm", // Default size
      ...props // Pass remaining props (like className, style, data attributes)
    },
    ref
  ) => {
    const [isCopying, setIsCopying] = useState(false)
    const translations = useI18n()

    // Determine tooltip labels
    const defaultCopyLabel = customCopyTooltipLabel ?? translations.actions.copy
    const defaultCopiedLabel = customCopiedTooltipLabel ?? "Copied" // Fallback
    const currentTooltipLabel = isCopying
      ? defaultCopiedLabel
      : defaultCopyLabel

    // Effect to reset copying state
    useEffect(() => {
      let timeoutId: ReturnType<typeof setTimeout> | null = null
      if (isCopying) {
        timeoutId = setTimeout(() => setIsCopying(false), 1000)
      }
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
      }
    }, [isCopying])

    const handleCopyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation() // Prevent event bubbling if needed
      window.navigator.clipboard.writeText(valueToCopy)
      setIsCopying(true)
    }

    // Remove Tooltip wrappers
    return (
      <ShadcnButton
        ref={ref}
        variant={variant}
        size={size}
        round // Copy button is always round
        onClick={handleCopyClick}
        aria-live="polite"
        aria-label={currentTooltipLabel}
        title={currentTooltipLabel} // Add title attribute back
        {...props} // Spread remaining props
      >
        {/* Removed outer span - Applying flex directly to motion.span */}
        <AnimatePresence mode="wait" initial={false}>
          {/* motion.span handles animation AND flex alignment */}
          <motion.span
            key={isCopying ? "check" : "copy"}
            variants={copyIconMotionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={copyIconTransition}
            style={{
              display: "inline-flex", // Use flex for alignment
              alignItems: "center",
              justifyContent: "center",
              verticalAlign: "middle", // Keep for potential line-box alignment
              width: "1em", // Explicit size
              height: "1em",
            }}
          >
            {/* Icon component renders the SVG */}
            <Icon
              size={size === "sm" ? "sm" : "md"}
              icon={isCopying ? Check : LayersFront}
              className={iconOnlyVariants({ variant })}
            />
          </motion.span>
        </AnimatePresence>
      </ShadcnButton>
    )
  }
)

CopyButton.displayName = "CopyButton"
