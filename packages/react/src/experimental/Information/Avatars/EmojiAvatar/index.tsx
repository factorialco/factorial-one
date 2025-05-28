import { EmojiImage } from "../../../../lib/emojis"
import { cn } from "../../../../lib/utils"

type Props = {
  emoji: string
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: "w-6 h-6 rounded-sm",
  md: "w-9 h-9 rounded-md",
  lg: "w-10 h-10 rounded-lg",
}

const imageSizes = {
  sm: "xs",
  md: "sm",
  lg: "md",
} as const

export const EmojiAvatar = ({ emoji, size = "md" }: Props) => {
  // Check if emoji is a single emoji character using regex
  // \uFE0F is the variation selector that makes emojis display as colored graphics instead of black & white text
  const emojiRegex = /^\p{Emoji}\uFE0F?$/u
  if (!emojiRegex.test(emoji)) {
    emoji = "🤔" // Fallback to thinking face emoji if invalid
  }

  return (
    <div
      className={cn(
        "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background dark:bg-f1-background-inverse-secondary",
        sizes[size]
      )}
    >
      <EmojiImage emoji={emoji} size={imageSizes[size]} />
    </div>
  )
}

EmojiAvatar.displayName = "EmojiAvatar"
