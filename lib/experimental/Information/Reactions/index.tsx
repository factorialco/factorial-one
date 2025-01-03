import { Picker } from "./picker"
import { Reaction, ReactionProps } from "./reaction"

interface ReactionsProps {
  items: ReactionProps[]
  onInteraction?: () => void
}

export function Reactions({ items, onInteraction }: ReactionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Picker onSelect={onInteraction} />
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
