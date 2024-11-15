import { parse } from "twemoji-parser"
import { cn } from "./utils"

interface ParseObject {
  url: string
  indices: [number, number]
  text: string
}

interface EmojiOptions {
  assetType?: "svg" | "png"
  size?: "72x72" | "16x16"
  cdn?: "jsdelivr" | "unpkg"
}

const CDN_URLS = {
  jsdelivr: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets",
  unpkg: "https://unpkg.com/twemoji@latest/assets",
} as const

export function parseEmoji(
  emoji: string,
  options?: EmojiOptions
): ParseObject | null {
  const { assetType = "svg", cdn = "jsdelivr" } = options ?? {}

  const [entity] = parse(emoji, {
    buildUrl: (codePoints) =>
      `${CDN_URLS[cdn]}/${assetType}/${codePoints}.${assetType}`,
  })

  return entity || null
}

export function EmojiImage({
  emoji,
  className,
  size = 4,
}: {
  emoji: string
  className?: string
  size?: number
}) {
  const emojiEntity = parseEmoji(emoji)

  return emojiEntity ? (
    <img
      src={emojiEntity.url}
      alt={emoji}
      className={cn(`w-${size} h-${size}`, className)}
      draggable={false}
    />
  ) : (
    <span>{emoji}</span>
  )
}

export function getEmojiLabel(emoji: string): string {
  return `${emoji} emoji`
}
