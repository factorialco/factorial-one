import { EmojiImage } from "@/lib/emojis"
import { cn } from "@/lib/utils"

type Props = {
  emoji: string
  size?: "small" | "medium" | "large"
}

const sizes = {
  small: "w-6 h-6 rounded-sm",
  medium: "w-9 h-9 rounded",
  large: "w-10 h-10 rounded-md",
}

const imageSizes = {
  small: "xs",
  medium: "sm",
  large: "md",
} as const

export const F0AvatarEmoji = ({ emoji, size = "medium" }: Props) => {
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

F0AvatarEmoji.displayName = "EmojiAvatar"
