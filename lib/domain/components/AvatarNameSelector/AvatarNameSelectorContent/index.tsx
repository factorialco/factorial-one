import { Select } from "@/core/components/experimental/forms/fields/Select"
import { Icon } from "@/core/components/utility/Icon"
import { Button } from "@/core/internal/button.tsx"
import { ScrollArea } from "@/core/internal/scrollarea.tsx"
import { Search } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import { AvatarNameListItem } from "../AvatarNameListItem"
import { AvatarNameListTag } from "../AvatarNameListTag"
import {
  AvatarNamedEntity,
  AvatarNamedGroup,
  AvatarNamedSubEntity,
} from "../types.ts"

export const AvatarNameSelectorContent = ({
  groupView,
  entities,
  groups,
  selectedGroup,
  search,
  onSelect,
  onRemove,
  onSubItemRemove,
  onSubItemSelect,
  onClear,
  onSelectAll,
  onSearch,
  selectedEntities,
  onGroupChange,
  onToggleExpand,
  searchPlaceholder,
  selectAllLabel,
  clearLabel,
  selectedLabel,
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
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  selectedLabel?: string
}) => {
  const totalSelectedSubItems = groupView
    ? selectedEntities.reduce(
        (acc, entity) => acc + (entity.subItems?.length ?? 0),
        0
      )
    : selectedEntities.length

  const totalFilteredEntities = groupView
    ? entities.reduce((acc, entity) => acc + (entity.subItems?.length ?? 0), 0)
    : entities.length

  return (
    <div className="flex">
      <div className="flex w-96 flex-col rounded-l-xl border-0 border-r-[1px] border-solid border-f1-border-secondary">
        <div className="flex justify-between gap-2 p-2">
          <div
            className={cn(
              "flex flex-1 items-center justify-between rounded border-[1px] border-solid border-f1-border bg-f1-background-inverse-secondary p-1.5 transition-all hover:border-f1-border-hover focus:border-f1-border-hover"
            )}
          >
            <div className="flex items-center gap-1">
              <Icon icon={Search} size="md" />
              <input
                type="text"
                className="w-full border-none bg-transparent text-f1-foreground-secondary outline-none"
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1">
            <Select
              onChange={onGroupChange}
              options={groups}
              value={selectedGroup}
            />
          </div>
        </div>
        <div className="flex-grow-1 flex h-96 flex-col justify-start gap-1 pr-2">
          <ScrollArea className="-mr-2 h-full">
            {entities.map((entity) => {
              const selectedEntity = selectedEntities.find(
                (el) => el.id === entity.id
              )
              const selectedSubItems = (entity.subItems ?? []).filter(
                (subItem) =>
                  selectedEntity?.subItems?.some(
                    (selectedSubItem) => selectedSubItem.subId === subItem.subId
                  )
              )
              const selected = groupView
                ? (entity.subItems?.length ?? 0) === selectedSubItems.length
                : !!selectedEntities.find((el) => el.id === entity.id)
              const partialSelected = groupView
                ? !selected && selectedSubItems.length > 0
                : selected
              return (
                <>
                  <AvatarNameListItem
                    expanded={entity.expanded ?? false}
                    onExpand={() => onToggleExpand(entity)}
                    search={search}
                    groupView={groupView}
                    key={entity.id}
                    entity={entity}
                    selectedEntity={selectedEntity}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    onSubItemRemove={onSubItemRemove}
                    onSubItemSelect={onSubItemSelect}
                    selected={selected}
                    partialSelected={partialSelected}
                  />
                  {groupView && (
                    <div className="h-[1px] w-full bg-f1-border-secondary" />
                  )}
                </>
              )
            })}
          </ScrollArea>
        </div>
        {(selectAllLabel || clearLabel) && (
          <div
            className="rounded-bl-xl border-0 border-t-[1px] border-solid border-f1-border-secondary"
            style={{
              backgroundColor: "hsla(var(--white-70))",
            }}
          >
            <div className="flex flex-1 justify-between p-2">
              {selectAllLabel && (
                <Button variant="outline" size="sm" onClick={onSelectAll}>
                  {selectAllLabel} {search ? `(${totalFilteredEntities})` : ""}
                </Button>
              )}
              {clearLabel && (
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={selectedEntities.length === 0}
                  onClick={onClear}
                >
                  {clearLabel} {search ? `(${totalFilteredEntities})` : ""}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
      <div
        className="w-56 rounded-r-xl"
        style={{
          background:
            "linear-gradient(270deg, rgba(250, 251, 252, 0) 50%, #FAFBFC 100%)",
        }}
      >
        <div className="mt-1 flex h-full flex-col gap-3 p-3">
          {selectedLabel && (
            <span className="text-f1-foreground-secondary">
              {totalSelectedSubItems} {selectedLabel}
            </span>
          )}
          <ScrollArea className="mr-1" style={{ height: "calc(24rem + 40px)" }}>
            {selectedEntities.map((entity) => (
              <AvatarNameListTag
                groupView={groupView}
                key={entity.id}
                entity={entity}
                subItemsSelected={entity.subItems ?? []}
                onSubItemRemove={(subItem) =>
                  onSubItemRemove?.(entity, subItem)
                }
                onRemove={onRemove}
              />
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
