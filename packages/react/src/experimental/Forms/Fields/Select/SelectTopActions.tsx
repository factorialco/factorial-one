import { F1SearchBox } from "../F1SearchBox"

interface SelectTopActionsProps {
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
  onSearchChange: (value: string) => void
  searchValue: string | undefined
  searchInputRef: React.RefObject<HTMLInputElement>
}

export const SelectTopActions = ({
  showSearchBox,
  searchBoxPlaceholder,
  onSearchChange,
  searchValue,
  searchInputRef,
}: SelectTopActionsProps) => {
  if (!showSearchBox) return null
  return (
    <div className="px-2 pt-2">
      <F1SearchBox
        placeholder={searchBoxPlaceholder}
        onChange={onSearchChange}
        clearable
        value={searchValue}
        key="search-input"
        ref={searchInputRef}
      />
    </div>
  )
}
