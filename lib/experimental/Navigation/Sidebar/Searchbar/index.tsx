import { Icon } from "@/components/Utilities/Icon"
import { Shortcut } from "@/experimental/Information/Shortcut"
import { Search } from "@/icons"
import { cn, focusRing } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder: string
  shortcut?: string[]
}

export function SearchBar({
  onClick,
  placeholder,
  shortcut = ["cmd", "k"],
  ...props
}: SearchBarProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full cursor-pointer items-center justify-between rounded border border-solid border-f1-border bg-f1-background p-1.5 text-f1-foreground-secondary transition-colors hover:border-f1-border-hover",
        focusRing()
      )}
      type="button"
      {...props}
    >
      <div className="flex items-center gap-1">
        <Icon icon={Search} size="md" />
        <span>{placeholder}</span>
      </div>
      <Shortcut keys={shortcut} />
    </button>
  )
}
