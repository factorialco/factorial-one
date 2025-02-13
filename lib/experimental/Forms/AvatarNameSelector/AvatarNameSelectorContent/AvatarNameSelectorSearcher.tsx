import { Icon } from "@/components/Utilities/Icon"
import { Search } from "lucide-react"
import {
  focusNextFocusable,
  focusPreviousFocusable,
} from "../AvatarNameListItem"

export const AvatarNameSelectorSearcher = ({
  search,
  onSearch,
  searchPlaceholder,
  disabled = false,
}: {
  search: string
  onSearch: (search: string) => void
  searchPlaceholder?: string
  disabled?: boolean
}) => {
  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "ArrowDown") {
      ev.preventDefault()
      ev.stopPropagation()
      focusNextFocusable(ev.currentTarget)
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault()
      ev.stopPropagation()
      focusPreviousFocusable(ev.currentTarget)
    }
  }

  return (
    <div className="flex justify-between gap-1 rounded-[10px] border-[1px] border-solid border-f1-border px-2 py-0.5 transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover">
      <Icon icon={Search} size="md" />
      <input
        disabled={disabled}
        onKeyDown={handleKeyDown}
        type="text"
        className="w-full border-none bg-transparent text-f1-foreground-secondary focus:outline-none"
        placeholder={searchPlaceholder}
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
