import { Picker } from "./picker"
import { Reaction, ReactionProps } from "./reaction"

interface ReactionsProps {
  items: ReactionProps[]
}

export function Reactions({ items }: ReactionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Picker />
      {items.map((item) => (
        <Reaction
          key={item.emoji}
          emoji={item.emoji}
          initialCount={item.initialCount}
          hasReacted={item.hasReacted}
          users={item.users}
        />
      ))}
    </div>
  )
}
