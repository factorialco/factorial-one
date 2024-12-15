import { EmojiImage } from "@/lib/emojis"

interface EmojiBadgeProps {
  emoji: string
}

export const EmojiBadge = ({ emoji }: EmojiBadgeProps) => {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-f1-background-secondary">
      <EmojiImage emoji={emoji} size="xs" />
    </div>
  )
}
