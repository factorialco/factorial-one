import { Spinner } from "@/experimental/exports"
import { VirtualList } from "@/experimental/Navigation/VirtualList"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { VirtualItem } from "@tanstack/react-virtual"
import React, { useCallback, useMemo } from "react"
import { Select } from "../../../Fields/Select"
import { AvatarNameListItem } from "../../AvatarNameListItem"
import {
  AvatarNamedEntity,
  AvatarNamedGroup,
  AvatarNamedSubEntity,
} from "../../types"
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
  const ref = React.useRef<HTMLDivElement | null>(null)

  const totalFilteredEntities = useMemo(
    () =>
      groupView
        ? entities.reduce(
            (acc, entity) => acc + (entity.subItems?.length ?? 0),
            0
          )
        : entities.length,
    [entities, groupView]
  )

  const showFooter =
    !loading && !singleSelector && (selectAllLabel || clearLabel)

  const goToFirst = useCallback(() => {
    ref.current?.scrollTo({
      top: 0,
    })
    setTimeout(() => {
      const focusableSelectors = '[data-avatarname-navigator-element="true"]'
      const allFocusable = Array.from(
        document.querySelectorAll(focusableSelectors)
      ) as HTMLElement[]
      allFocusable[0]?.focus()
    }, 100)
  }, [])

  const goToLast = useCallback(() => {
    ref.current?.scrollTo({ top: ref.current?.scrollHeight })
    setTimeout(() => {
      const focusableSelectors = '[data-avatarname-navigator-element="true"]'
      const allFocusable = Array.from(
        document.querySelectorAll(focusableSelectors)
      ) as HTMLElement[]
      allFocusable[allFocusable.length - 1]?.focus()
    }, 100)
  }, [])

  const itemRenderer = useCallback(
    (vi?: VirtualItem) => {
      if (!vi) return <></>
      const entity = entities[vi.index]
      const selectedEntity = selectedEntities.find((el) => el.id === entity.id)
      const selectedSubItems = (entity.subItems ?? []).filter((subItem) =>
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
            groups.find((el) => el.value === selectedGroup)?.type === "team"
          }
          singleSelector={singleSelector}
          goToFirst={goToFirst}
          goToLast={goToLast}
        />
      )
    },
    [
      entities,
      goToFirst,
      goToLast,
      groupView,
      groups,
      onRemove,
      onSelect,
      onSubItemRemove,
      onSubItemSelect,
      onToggleExpand,
      search,
      selectedEntities,
      selectedGroup,
      singleSelector,
    ]
  )

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
            goToFirst={goToFirst}
            goToLast={goToLast}
          />
        </div>
        <div className="flex-1">
          {groups && groups.length > 1 && (
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
          "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
          singleSelector || loading ? "rounded-b-xl border-r-0" : ""
        )}
      >
        {loading && (
          <div className="flex h-full w-full flex-row items-center justify-center">
            <Spinner />
          </div>
        )}
        {!loading && !totalFilteredEntities && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-0.5">
            <span className="text-lg font-medium">{notFoundTitle}</span>
            <span className="text-f1-foreground-secondary">
              {notFoundSubtitle}
            </span>
          </div>
        )}
        {!loading && !!totalFilteredEntities && (
          <div className="h-full">
            {!groupView ? (
              <VirtualList
                height={384}
                itemCount={entities.length}
                itemSize={36}
                renderer={itemRenderer}
                ref={ref}
              />
            ) : (
              <div className="scrollbar-macos h-full overflow-auto">
                {entities.map((entity, index) => {
                  const selectedEntity = selectedEntities.find(
                    (el) => el.id === entity.id
                  )
                  const selectedSubItems = (entity.subItems ?? []).filter(
                    (subItem) =>
                      selectedEntity?.subItems?.some(
                        (selectedSubItem) =>
                          selectedSubItem.subId === subItem.subId
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
                        groups.find((el) => el.value === selectedGroup)
                          ?.type === "team"
                      }
                      singleSelector={singleSelector}
                      hideLine={index === entities.length - 1}
                      ref={ref}
                    />
                  )
                })}
              </div>
            )}
          </div>
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
