import { Picker } from "./Picker"
import { Reaction, ReactionProps } from "./reaction"

export interface ReactionsProps {
  items: ReactionProps[]
  onInteraction?: (emoji: string) => void
  locale?: string
}

export function Reactions({ items, onInteraction, locale }: ReactionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Picker onSelect={onInteraction} locale={locale} />
      {items.map((item) => (
        <Reaction
          key={item.emoji}
          emoji={item.emoji}
          initialCount={item.initialCount}
          hasReacted={item.hasReacted}
          users={item.users}
          onInteraction={onInteraction}
        />
      ))}
    </div>
  )
}
