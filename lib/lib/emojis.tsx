import confetti from "canvas-confetti"
import { cva, type VariantProps } from "cva"
import { RefObject, useCallback } from "react"
import { parse } from "twemoji-parser"
import { useReducedMotion } from "./a11y"

interface ParseObject {
  url: string
  indices: [number, number]
  text: string
}

const emojiVariants = cva({
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

export interface EmojiImageProps extends VariantProps<typeof emojiVariants> {
  emoji: string
}

export function EmojiImage({ emoji, size }: EmojiImageProps) {
  const emojiEntity = parseEmoji(emoji)

  return emojiEntity ? (
    <img
      src={emojiEntity.url}
      alt={emoji}
      className={emojiVariants({ size })}
      draggable={false}
    />
  ) : (
    <span>{emoji}</span>
  )
}

const parseEmoji = (emoji: string): ParseObject | null => {
  const [entity] = parse(emoji, {
    buildUrl: (codePoints) =>
      `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoints}.svg`,
  })

  return entity || null
}

export function getEmojiLabel(emoji: string): string {
  return `${emoji} emoji`
}

export const useEmojiConfetti = () => {
  const shouldReduceMotion = useReducedMotion()

  const fireEmojiConfetti = useCallback(
    (emoji: string, elementRef: RefObject<HTMLElement>) => {
      const button = elementRef.current
      if (button) {
        const rect = button.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top

        confetti({
          particleCount: 20,
          gravity: 0,
          spread: 360,
          startVelocity: 10,
          ticks: 50,
          origin: {
            x: centerX / window.innerWidth,
            y: centerY / window.innerHeight,
          },
          shapes: [confetti.shapeFromText({ text: emoji, scalar: 2 })],
          scalar: 2,
          disableForReducedMotion: shouldReduceMotion,
        })
      }
    },
    [shouldReduceMotion]
  )

  return { fireEmojiConfetti }
}
