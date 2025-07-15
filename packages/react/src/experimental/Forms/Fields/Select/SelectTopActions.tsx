import { GroupingSelector } from "@/experimental/OneDataCollection/Settings/components/GroupingSelector"
import {
  GroupingDefinition,
  GroupingState,
  RecordType,
} from "@/hooks/datasource"
import { F1SearchBox } from "../F1SearchBox"

interface SelectTopActionsProps<R extends RecordType = RecordType> {
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
  onSearchChange: (value: string) => void
  searchValue: string | undefined
  searchInputRef: React.RefObject<HTMLInputElement>
  onFocus?: () => void
  onBlur?: () => void
  grouping?: GroupingDefinition<R>
  currentGrouping?: GroupingState<R, GroupingDefinition<R>>
  onGroupingChange?: (grouping: GroupingState<R, GroupingDefinition<R>>) => void
}

export const SelectTopActions = ({
  showSearchBox,
  searchBoxPlaceholder,
  onSearchChange,
  searchValue,
  searchInputRef,
  onFocus,
  onBlur,
  grouping,
  currentGrouping,
  onGroupingChange,
}: SelectTopActionsProps) => {
  if (!showSearchBox) return null
  return (
    <div className="flex gap-2 px-2 pt-2">
      <F1SearchBox
        placeholder={searchBoxPlaceholder}
        onChange={onSearchChange}
        clearable
        value={searchValue}
        key="search-input"
        ref={searchInputRef}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <GroupingSelector
        grouping={grouping}
        currentGrouping={currentGrouping}
        onGroupingChange={onGroupingChange}
      />
    </div>
  )
}
