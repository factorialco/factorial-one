import { EmojiImage } from "@/lib/emojis.tsx"
import { cn } from "@/lib/utils.ts"

type Props = {
  emoji: string
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: "w-6 rounded-sm",
  md: "w-9 rounded-md",
  lg: "w-10 rounded-lg",
}

const imageSizes = {
  sm: "xs",
  md: "sm",
  lg: "md",
} as const

export const EmojiAvatar = ({ emoji, size = "md" }: Props) => {
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
