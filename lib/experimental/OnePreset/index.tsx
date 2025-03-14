import { Counter } from "@/experimental/Information/Counter"
import { cn } from "@/lib/utils"

interface PresetProps {
  label: string
  number?: number
  onClick?: () => void
  selected?: boolean
}

export const Preset = ({ label, number, onClick, selected }: PresetProps) => {
  return (
    <label
      className={cn(
        "flex cursor-default appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all",
        onClick &&
          "focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2",
        number && "pr-1.5",
        onClick && "cursor-pointer hover:outline-f1-border-hover",
        selected &&
          "bg-f1-background-selected-secondary text-f1-foreground-selected"
      )}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={selected}
        onChange={() => onClick?.()}
      />
      <span className="whitespace-nowrap">{label}</span>
      {number && (
        <Counter value={number} type={selected ? "selected" : "default"} />
      )}
    </label>
  )
}
