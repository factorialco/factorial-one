import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { useReducedMotion } from "@/lib/a11y"
import { EmojiImage, getEmojiLabel } from "@/lib/emojis"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import NumberFlow from "@number-flow/react"
import confetti from "canvas-confetti"
import { useCallback, useRef, useState } from "react"

interface User {
  name: string
}

export interface ReactionProps {
  emoji: string
  initialCount: number
  hasReacted?: boolean
  users?: User[]
  onInteraction?: () => void
}

export function Reaction({
  emoji,
  initialCount,
  hasReacted = false,
  users,
  onInteraction,
}: ReactionProps) {
  const [isActive, setIsActive] = useState(hasReacted)
  const [count, setCount] = useState(initialCount)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const fireConfetti = useCallback(() => {
    const button = buttonRef.current
    if (button) {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top

      confetti({
        particleCount: 5,
        gravity: 0.8,
        spread: 45,
        startVelocity: 12,
        ticks: 30,
        // @ts-expect-error flat property exists in canvas-confetti
        flat: true,
        origin: {
          x: centerX / window.innerWidth,
          y: centerY / window.innerHeight,
        },
        shapes: [confetti.shapeFromText({ text: emoji })],
        scalar: 1.5,
        disableInteraction: shouldReduceMotion,
      })
    }
  }, [])

  const handleClick = () => {
    setCount(count + (isActive ? -1 : 1))
    setIsActive(!isActive)
    onInteraction?.()

    if (!isActive && !shouldReduceMotion) {
      fireConfetti()
    }
  }

  const tooltipContent = users?.map((user) => user.name).join(", ") || ""

  const button = (
    <Button
      ref={buttonRef}
      variant="outline"
      size="md"
      onMouseUp={handleClick}
      className={cn(
        "flex items-center gap-1 px-2 py-1 font-medium leading-tight transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        isActive &&
          "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      )}
      aria-label={getEmojiLabel(emoji)}
    >
      <EmojiImage emoji={emoji} size="md" />
      <NumberFlow
        value={count}
        spinTiming={{
          duration: 200,
          easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
        className={cn(
          "tabular-nums",
          isActive ? "text-f1-foreground-selected" : "text-f1-foreground"
        )}
      />
    </Button>
  )

  return tooltipContent ? (
    <Tooltip label={tooltipContent}>{button}</Tooltip>
  ) : (
    button
  )
}
