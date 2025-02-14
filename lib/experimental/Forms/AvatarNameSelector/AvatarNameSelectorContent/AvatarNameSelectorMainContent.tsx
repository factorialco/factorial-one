import { Spinner } from "@/experimental/exports"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { ScrollArea } from "@/ui/scrollarea"
import { Select } from "../../Fields/Select"
import { AvatarNameListItem } from "../AvatarNameListItem"
import {
  AvatarNamedEntity,
  AvatarNamedGroup,
  AvatarNamedSubEntity,
} from "../types"
import { AvatarNameSelectorSearcher } from "./AvatarNameSelectorSearcher"

export const AvatarNameSelectorMainContent = ({
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
  notFoundTitle,
  notFoundSubtitle,
  singleSelector = false,
  loading = false,
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
  singleSelector?: boolean
  loading?: boolean
}) => {
  const totalFilteredEntities = groupView
    ? entities.reduce((acc, entity) => acc + (entity.subItems?.length ?? 0), 0)
    : entities.length

  const showFooter =
    !loading && !singleSelector && (selectAllLabel || clearLabel)

  return (
    <div
      className={cn(
        "flex w-96 flex-col rounded-l-xl border-0",
        singleSelector || loading ? "rounded-r-xl" : ""
      )}
    >
      <header
        className={cn(
          "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
          singleSelector || loading ? "rounded-t-xl border-r-0" : ""
        )}
      >
        <div className="flex-1">
          <AvatarNameSelectorSearcher
            search={search}
            onSearch={onSearch}
            searchPlaceholder={searchPlaceholder}
          />
        </div>
        <div className="flex-1">
          {(!singleSelector || !groups || !groups.length) && (
            <Select
              disabled={loading}
              onChange={onGroupChange}
              options={groups}
              value={selectedGroup}
              className="h-8 rounded-[10px] bg-transparent py-[5px] text-f1-foreground-secondary"
            />
          )}
        </div>
      </header>
      <section
        className={cn(
          "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background pr-2",
          singleSelector || loading ? "rounded-b-xl border-r-0" : ""
        )}
      >
        {loading && (
          <div className="flex h-full w-full flex-row items-center justify-center">
            <Spinner />
          </div>
        )}
        {!totalFilteredEntities && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-0.5">
            <span className="text-lg font-medium">{notFoundTitle}</span>
            <span className="text-f1-foreground-secondary">
              {notFoundSubtitle}
            </span>
          </div>
        )}
        {!loading && !!totalFilteredEntities && (
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
                  singleSelector={singleSelector}
                />
              )
            })}
          </ScrollArea>
        )}
      </section>
      {showFooter && (
        <footer className="rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl">
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
        </footer>
      )}
    </div>
  )
}
