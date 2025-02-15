import {
  AvatarNamedEntity,
  AvatarNamedGroup,
  AvatarNamedSubEntity,
} from "../types"
import { AvatarNameSelectorMainContent } from "./AvatarNameSelectorMainContent"
import { AvatarNameSelectorSecondaryContent } from "./AvatarNameSelectorSecondaryContent"

export const AvatarNameSelectorContent = ({
  groupView,
  onRemove,
  onSubItemRemove,
  selectedEntities,
  selectedLabel,
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
  onToggleExpand: (entity: AvatarNamedEntity) => void
  notFoundTitle: string
  notFoundSubtitle: string
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  selectedLabel?: string
  singleSelector?: boolean
  loading?: boolean
}) => {
  return (
    <div className="flex">
      <AvatarNameSelectorMainContent
        {...props}
        groupView={groupView}
        onRemove={onRemove}
        onSubItemRemove={onSubItemRemove}
        selectedEntities={selectedEntities}
        singleSelector={singleSelector}
        loading={loading}
      />
      {!loading && !singleSelector && (
        <AvatarNameSelectorSecondaryContent
          onSubItemRemove={onSubItemRemove}
          selectedEntities={selectedEntities}
          selectedLabel={selectedLabel}
        />
      )}
    </div>
  )
}
