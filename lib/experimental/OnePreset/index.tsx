import { Counter } from "@/experimental/Information/Counter"
import { cn, focusRing } from "@/lib/utils"
interface PresetProps {
  label: string
  number?: number
  onClick?: () => void
  selected?: boolean
}

export const Preset = ({ label, number, onClick, selected }: PresetProps) => {
  return (
    <button
      className={cn(
        "flex cursor-default appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all",
        "focus:outline focus:outline-1",
        number && "pr-1.5",
        onClick && "cursor-pointer hover:outline-f1-border-hover",
        selected && "bg-f1-background-selected text-f1-foreground-selected",
        onClick && focusRing()
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      {number && (
        <Counter value={number} type={selected ? "selected" : "default"} />
      )}
    </button>
  )
}
