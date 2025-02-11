import { Icon } from "@/components/Utilities/Icon"
import { Search } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { ScrollArea } from "@/ui/scrollarea"
import { Select } from "../../Fields/Select"
import { AvatarNameListItem } from "../AvatarNameListItem"
import { AvatarNameListTag } from "../AvatarNameListTag"
import {
  AvatarNamedEntity,
  AvatarNamedGroup,
  AvatarNamedSubEntity,
} from "../types"

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
              "flex flex-1 items-center justify-between rounded-[10px] border-[1px] border-solid border-f1-border bg-f1-background-inverse-secondary px-2 py-0.5 transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover"
            )}
          >
            <div className="flex justify-between gap-1">
              <Icon icon={Search} size="md" />
              <input
                type="text"
                className="w-full border-none bg-transparent text-f1-foreground-secondary focus:outline-none"
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
              className="h-8 rounded-[10px] py-[5px]"
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
                  showGroupIcon={
                    groups.find((el) => el.value === selectedGroup)?.type ===
                    "team"
                  }
                />
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
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onSelectAll}
                  title={selectAllLabel + ` (${totalFilteredEntities})`}
                >
                  {selectAllLabel}
                </Button>
              )}
              {clearLabel && (
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={selectedEntities.length === 0}
                  onClick={onClear}
                  title={clearLabel + ` (${totalFilteredEntities})`}
                >
                  {clearLabel}
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
        <div className="mt-1 flex h-full flex-col gap-3 p-3 pb-0">
          {selectedLabel && (
            <span className="text-f1-foreground-secondary">
              {totalSelectedSubItems} {selectedLabel}
            </span>
          )}
          <ScrollArea
            className="-mr-3 pr-3"
            style={{ height: "calc(24rem + 40px)" }}
          >
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
