import { Button } from "@/ui/button"
import { VirtualItem } from "@tanstack/react-virtual"
import React, { useCallback, useMemo } from "react"
import { cn } from "../../../../../lib/utils"
import { Spinner } from "../../../../exports"
import { VirtualList } from "../../../../Navigation/VirtualList"
import { Select } from "../../../Fields/Select"
import { EntitySelectListItem } from "../../ListItem"
import {
  EntitySelectEntity,
  EntitySelectNamedGroup,
  EntitySelectSubEntity,
  FlattenedItem,
} from "../../types"
import { Searcher } from "./Searcher"

export const MainContent = ({
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
  className,
  singleSelector = false,
  loading = false,
  disabled = false,
  hiddenAvatar = false,
}: {
  groupView: boolean
  entities: EntitySelectEntity[]
  groups: EntitySelectNamedGroup[]
  selectedGroup: string
  search: string
  onSelect: (entity: EntitySelectEntity) => void
  onRemove: (entity: EntitySelectEntity) => void
  onSubItemRemove: (
    parentEntity: EntitySelectEntity,
    entity: EntitySelectSubEntity
  ) => void
  onSubItemSelect: (
    parentEntity: EntitySelectEntity,
    entity: EntitySelectSubEntity
  ) => void
  onClear: () => void
  onSelectAll: () => void
  onSearch: (search: string) => void
  selectedEntities?: EntitySelectEntity[]
  onGroupChange: (key: string | null) => void
  onToggleExpand: (entity: EntitySelectEntity, expanded: boolean) => void
  notFoundTitle: string
  notFoundSubtitle: string
  className?: string
  searchPlaceholder?: string
  selectAllLabel?: string
  clearLabel?: string
  singleSelector?: boolean
  loading?: boolean
  disabled?: boolean
  hiddenAvatar?: boolean
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
    (vi: VirtualItem) => {
      const entity = entities[vi.index]
      const selectedEntity = (selectedEntities ?? []).find(
        (el) => el.id === entity.id
      )
      const selectedSubItems = (entity.subItems ?? []).filter((subItem) =>
        selectedEntity?.subItems?.some(
          (selectedSubItem) => selectedSubItem.subId === subItem.subId
        )
      )
      const selected = groupView
        ? (entity.subItems?.length ?? 0) === selectedSubItems.length
        : !!(selectedEntities ?? []).find((el) => el.id === entity.id)
      const partialSelected = groupView
        ? !selected && selectedSubItems.length > 0
        : selected
      return (
        <EntitySelectListItem
          expanded={entity.expanded ?? false}
          onExpand={() => onToggleExpand(entity, true)}
          search={search}
          groupView={groupView}
          key={entity.id}
          entity={entity}
          onSelect={onSelect}
          onRemove={onRemove}
          selected={selected}
          partialSelected={partialSelected}
          showGroupIcon={
            groups.find((el) => el.value === selectedGroup)?.groupType ===
            "team"
          }
          singleSelector={singleSelector}
          goToFirst={goToFirst}
          goToLast={goToLast}
          disabled={disabled}
          hiddenAvatar={hiddenAvatar}
        />
      )
    },
    [
      disabled,
      entities,
      goToFirst,
      goToLast,
      groupView,
      groups,
      onRemove,
      onSelect,
      onToggleExpand,
      search,
      selectedEntities,
      selectedGroup,
      singleSelector,
      hiddenAvatar,
    ]
  )

  const flattenedList = useMemo<FlattenedItem[]>(() => {
    return !groupView
      ? entities.map((el) => ({
          parent: null,
          subItem: {
            subId: el.id,
            subName: el.name,
            subAvatar: el.avatar,
            subSearchKeys: el.searchKeys,
          } as EntitySelectSubEntity,
        }))
      : entities
          .flatMap((entity) => {
            const foundSelected = selectedEntities?.find(
              (el) => el.id === entity.id
            )
            return [
              {
                parent: null,
                subItem: {
                  subId: entity.id,
                  subName: entity.name,
                  subAvatar: entity.avatar,
                  expanded: entity.expanded ?? foundSelected?.expanded ?? false,
                  subItems: entity.subItems,
                  subSearchKeys: entity.searchKeys,
                },
              },
              ...(entity.subItems ?? []).map((subItem) => ({
                parent: {
                  ...entity,
                  expanded: entity.expanded ?? foundSelected?.expanded ?? false,
                },
                subItem,
              })),
            ]
          })
          .filter(
            (el) =>
              (!el.parent || el.parent.expanded) &&
              (!!el.parent ||
                (!!el.subItem.subItems && el.subItem.subItems.length > 0))
          )
  }, [groupView, entities, selectedEntities])

  const itemFlattenedRenderer = useCallback(
    (vi: VirtualItem) => {
      const parent = flattenedList[vi.index].parent
      const subItem = flattenedList[vi.index].subItem
      if (!parent) {
        const recoveredEntity: EntitySelectEntity = {
          id: subItem.subId,
          name: subItem.subName,
          avatar: subItem.subAvatar,
          subItems: subItem.subItems,
          expanded: subItem.expanded,
          searchKeys: subItem.subSearchKeys,
        }
        const selectedEntity = (selectedEntities ?? []).find(
          (el) => el.id === recoveredEntity.id
        )
        const selectedSubItems = (recoveredEntity?.subItems ?? []).filter(
          (subItem) =>
            selectedEntity?.subItems?.some(
              (selectedSubItem) => selectedSubItem.subId === subItem.subId
            )
        )
        const selected =
          (recoveredEntity.subItems?.length ?? 0) === selectedSubItems.length
        const partialSelected = !selected && selectedSubItems.length > 0

        return (
          <EntitySelectListItem
            groupView
            expanded={recoveredEntity.expanded ?? false}
            onExpand={(expanded) => onToggleExpand(recoveredEntity, expanded)}
            search={search}
            entity={recoveredEntity}
            onSelect={onSelect}
            onRemove={onRemove}
            selected={selected}
            partialSelected={partialSelected}
            showGroupIcon={
              groups.find((el) => el.value === selectedGroup)?.groupType ===
              "team"
            }
            singleSelector={singleSelector}
            goToFirst={goToFirst}
            goToLast={goToLast}
            hideLine={vi.index === flattenedList.length - 1}
            disabled={disabled}
            hiddenAvatar={hiddenAvatar}
          />
        )
      }

      let selected = !!(selectedEntities ?? []).find(
        (el) => el.id === subItem.subId
      )
      if (!selected) {
        const selectedParentEntity = (selectedEntities ?? []).find(
          (el) => el.id === parent.id
        )
        const selectedSubItems = (parent?.subItems ?? []).filter((subItem) =>
          selectedParentEntity?.subItems?.some(
            (selectedSubItem) => selectedSubItem.subId === subItem.subId
          )
        )
        selected = !!selectedSubItems.find((el) => el.subId === subItem.subId)
      }

      return (
        <EntitySelectListItem
          expanded={false}
          onExpand={() => null}
          search={search}
          groupView={false}
          entity={{
            id: subItem.subId,
            name: subItem.subName,
            avatar: subItem.subAvatar,
            searchKeys: subItem.subSearchKeys,
          }}
          onSelect={() => {
            onSubItemSelect(parent, subItem)
          }}
          onRemove={() => onSubItemRemove(parent, subItem)}
          selected={!!selected}
          partialSelected={false}
          singleSelector={singleSelector}
          goToFirst={goToFirst}
          goToLast={goToLast}
          isChild
          hiddenAvatar={hiddenAvatar}
        />
      )
    },
    [
      flattenedList,
      selectedEntities,
      search,
      singleSelector,
      goToFirst,
      goToLast,
      onSelect,
      onRemove,
      groups,
      disabled,
      onToggleExpand,
      selectedGroup,
      onSubItemSelect,
      onSubItemRemove,
      hiddenAvatar,
    ]
  )

  const [allVisibleSelected, anyVisibleSelected] = useMemo(() => {
    if (!entities.length) {
      return [false, false]
    }
    const selectedMap = new Map<number, EntitySelectEntity>(
      (selectedEntities ?? []).map((se) => [se.id, se])
    )

    let visibleCount = 0
    let selectedVisibleCount = 0

    if (!groupView) {
      visibleCount = entities.length
      selectedVisibleCount = entities.reduce(
        (acc, { id }) => acc + (selectedMap.has(id) ? 1 : 0),
        0
      )
    } else {
      entities.forEach((fe) => {
        const subItems = fe.subItems ?? []
        visibleCount += subItems.length
        const selectedSubIds = new Set(
          [...selectedMap.values()].flatMap(
            (selParent) =>
              selParent.subItems?.map((selectedSub) => selectedSub.subId) ?? []
          )
        )
        subItems.forEach((sub) => {
          if (selectedSubIds.has(sub.subId)) {
            selectedVisibleCount += 1
          }
        })
      })
    }

    const allSelected =
      visibleCount > 0 && selectedVisibleCount === visibleCount
    const anySelected = selectedVisibleCount > 0

    return [allSelected, anySelected]
  }, [entities, selectedEntities, groupView])

  const totalFlattenedItems = flattenedList.length

  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-l-xl border-0",
        singleSelector || loading ? "rounded-r-xl" : "",
        className
      )}
    >
      <header
        className={cn(
          "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
          singleSelector || loading ? "rounded-t-xl border-r-0" : ""
        )}
      >
        <div className="flex-1">
          <Searcher
            search={search}
            onSearch={onSearch}
            searchPlaceholder={searchPlaceholder}
            goToFirst={goToFirst}
            goToLast={goToLast}
          />
        </div>
        {groups && groups.length > 1 && (
          <div className="flex-1">
            <Select
              disabled={loading}
              onChange={onGroupChange}
              options={groups}
              value={selectedGroup}
              className={cn(
                "h-8 rounded-[10px] bg-transparent py-[5px]",
                selectedGroup === "all" ? "text-f1-foreground-secondary" : ""
              )}
            />
          </div>
        )}
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
              <VirtualList
                height={384}
                itemCount={totalFlattenedItems}
                itemSize={(index) =>
                  flattenedList[index].parent === null ? 37 : 36
                }
                renderer={itemFlattenedRenderer}
                ref={ref}
              />
            )}
          </div>
        )}
      </section>
      {showFooter && (
        <footer className="rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl">
          <div className="flex flex-1 justify-between p-2">
            {selectAllLabel && (
              <Button
                disabled={disabled || allVisibleSelected}
                variant="outline"
                size="sm"
                onClick={onSelectAll}
                title={selectAllLabel + ` (${totalFilteredEntities})`}
                type="button"
              >
                {selectAllLabel}
              </Button>
            )}
            {clearLabel && (
              <Button
                variant="ghost"
                size="sm"
                disabled={disabled || !anyVisibleSelected}
                onClick={onClear}
                title={clearLabel + ` (${totalFilteredEntities})`}
                type="button"
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
