import { EmojiImage } from "@/lib/emojis"
import { forwardRef } from "react"
import { Icon, IconType } from "../components/Utilities/Icon"
import { cn } from "../lib/utils"

interface IndicatorProps {
  content: string
  label: string
  color?: string
  icon?: IconType
  emoji?: string
}

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
  function Indicator({ content, label, icon, emoji, color }, ref) {
    return (
      <div key={label} className="flex flex-col gap-1" ref={ref}>
        <p className="text-3xl font-semibold">{content}</p>
        <div className="flex items-center gap-1">
          <p
            className="line-clamp-1 text-f1-foreground-secondary"
            title={label}
          >
            {label}
          </p>
          {icon && !emoji && (
            <span className={cn("flex", color)}>
              <Icon icon={icon} />
            </span>
          )}
          {emoji && !icon && <EmojiImage emoji={emoji} size="md" />}
        </div>
      </div>
    )
  }
)
