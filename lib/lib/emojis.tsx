import { cva, type VariantProps } from "class-variance-authority"
import { parse } from "twemoji-parser"

interface ParseObject {
  url: string
  indices: [number, number]
  text: string
}

const emojiVariants = cva("", {
  variants: {
    size: {
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
