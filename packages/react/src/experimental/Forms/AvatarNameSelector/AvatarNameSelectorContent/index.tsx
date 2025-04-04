import {
  AvatarNamedEntity,
  AvatarNamedGroup,
  AvatarNamedSubEntity,
} from "../types"
import { AvatarNameSelectorMainContent } from "./AvatarNameSelectorMainContent"
import { AvatarNameSelectorSecondaryContent } from "./AvatarNameSelectorSecondaryContent"

const breakpointToShowEmployeeList = 500
const totalDefaultWidth = 520
const asideWidth = 210

export const AvatarNameSelectorContent = ({
  groupView,
  onRemove,
  onSubItemRemove,
  selectedEntities,
  selectedLabel,
  width,
  singleSelector = false,
  loading = false,
  ...props
}: {
  groupView: boolean
  entities: AvatarNamedEntity[]
  groups: AvatarNamedGroup[]
  selectedGroup: string
  search: string
  onSelect: (entity: AvatarNamedEntity) => void
  onRemove: (entity: AvatarNamedEntity) => void
  onSubItemRemove: (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => void
  onSubItemSelect: (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => void
  onClear: () => void
  onSelectAll: () => void
  onSearch: (search: string) => void
  selectedEntities: AvatarNamedEntity[]
  onGroupChange: (key: string | null) => void
  onToggleExpand: (entity: AvatarNamedEntity, expanded: boolean) => void
  notFoundTitle: string
  notFoundSubtitle: string
  width?: number
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  selectedLabel?: string
  singleSelector?: boolean
  loading?: boolean
  disabled?: boolean
}) => {
  const blockSecondaryContent =
    (width ?? totalDefaultWidth) < breakpointToShowEmployeeList
  const isExpanded = !loading && !singleSelector && !blockSecondaryContent
  const defaultWidth = width ?? totalDefaultWidth
  const finalWidthMain = isExpanded ? defaultWidth - asideWidth : defaultWidth

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: singleSelector ? "435px" : "473px",
        width: defaultWidth,
      }}
    >
      <div
        className="absolute right-0 top-0"
        style={{
          width: asideWidth + "px",
        }}
      >
        <AvatarNameSelectorSecondaryContent
          groupView={groupView}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          selectedEntities={selectedEntities ?? []}
          selectedLabel={selectedLabel}
          disabled={props.disabled}
        />
      </div>
      <div
        className="absolute left-0"
        style={{ width: finalWidthMain + 1 + "px" }}
      >
        <AvatarNameSelectorMainContent
          {...props}
          groupView={groupView}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          selectedEntities={selectedEntities}
          singleSelector={singleSelector}
          loading={loading}
          disabled={props.disabled}
        />
      </div>
    </div>
  )
}
