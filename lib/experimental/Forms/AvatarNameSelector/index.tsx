import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { AvatarNameSelectorContent } from "./AvatarNameSelectorContent"
import { AvatarNameSelectorTrigger } from "./AvatarNameSelectorTrigger"
import {
  AvatarNamedEntity,
  AvatarNamedSubEntity,
  AvatarNameSelectorProps,
} from "./types"

export const AvatarNameSelector = (
  props: AvatarNameSelectorProps & { children?: React.ReactNode }
) => {
  const [filteredEntities, setFilteredEntities] = useState<AvatarNamedEntity[]>(
    props.entities
  )

  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useDebounceValue("", 300)

  const groupView = useMemo(
    () =>
      props.entities.some(
        (entity) => entity.subItems && entity.subItems.length > 0
      ),
    [props.entities]
  )

  function onPrivateSelect(entity: AvatarNamedEntity) {
    if (props.singleSelector) {
      props.onSelect(entity)
      return
    }

    const prevSelected = props.selectedAvatarName ?? []

    const filteredEntity = filteredEntities.find((fe) => fe.id === entity.id)
    if (!filteredEntity) {
      return
    }

    const visibleSubIds = new Set(
      (filteredEntity.subItems ?? []).map((s) => s.subId)
    )

    const parentIdsToUpdate = new Set<number>([filteredEntity.id])
    filteredEntities.forEach((possibleParent) => {
      if (possibleParent.id !== filteredEntity.id) {
        const hasIntersection = (possibleParent.subItems ?? []).some((sub) =>
          visibleSubIds.has(sub.subId)
        )
        if (hasIntersection) {
          parentIdsToUpdate.add(possibleParent.id)
        }
      }
    })

    const newSelectedEntities = [...prevSelected]

    function upsertSelectedEntity(updated: AvatarNamedEntity) {
      const idx = newSelectedEntities.findIndex((x) => x.id === updated.id)
      if (idx >= 0) {
        newSelectedEntities[idx] = updated
      } else {
        newSelectedEntities.push(updated)
      }
    }

    parentIdsToUpdate.forEach((parentId) => {
      const filteredParent = filteredEntities.find((p) => p.id === parentId)
      if (!filteredParent) return

      const newVisibleSubItems =
        filteredParent.subItems?.filter((sub) =>
          visibleSubIds.has(sub.subId)
        ) ?? []

      const oldIndex = newSelectedEntities.findIndex((x) => x.id === parentId)
      if (oldIndex >= 0) {
        const oldSubItems = newSelectedEntities[oldIndex].subItems ?? []
        const setOldSubIds = new Set(oldSubItems.map((s) => s.subId))

        const mergedSubItems = [
          ...oldSubItems,
          ...newVisibleSubItems.filter((s) => !setOldSubIds.has(s.subId)),
        ]

        upsertSelectedEntity({
          ...filteredParent,
          subItems: mergedSubItems,
        })
      } else {
        upsertSelectedEntity({
          ...filteredParent,
          subItems: newVisibleSubItems,
        })
      }
    })

    props.onSelect(newSelectedEntities)
  }

  function onSubItemSelect(
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) {
    if (props.singleSelector) {
      props.onSelect({ ...parentEntity, subItems: [{ ...entity }] })
    } else {
      const prevSelected = props.selectedAvatarName ?? []
      const selectedIds = new Set(prevSelected.map((sel) => sel.id))
      const selectedSubItemsMap = new Map<number, AvatarNamedSubEntity[]>(
        prevSelected.map((sel) => [sel.id, sel.subItems ?? []])
      )

      selectedIds.add(parentEntity.id)

      props.entities.forEach((possibleParent) => {
        const parentHasNewSubItem = possibleParent.subItems?.some(
          (sub) => sub.subId === entity.subId
        )
        if (parentHasNewSubItem) {
          selectedIds.add(possibleParent.id)
        }
      })

      const newSelectedEntities: AvatarNamedEntity[] = []

      props.entities.forEach((parent) => {
        if (selectedIds.has(parent.id)) {
          const oldSubItems = selectedSubItemsMap.get(parent.id) ?? []

          let mergedSubItems = [...oldSubItems]
          const parentContainsNewSub = parent.subItems?.some(
            (p) => p.subId === entity.subId
          )
          if (parentContainsNewSub) {
            const alreadyHasIt = mergedSubItems.some(
              (x) => x.subId === entity.subId
            )
            if (!alreadyHasIt) {
              mergedSubItems.push(entity)
            }
          }

          const realSubIds = new Set(
            (parent.subItems ?? []).map((sub) => sub.subId)
          )
          mergedSubItems = mergedSubItems.filter((sub) =>
            realSubIds.has(sub.subId)
          )

          newSelectedEntities.push({
            ...parent,
            subItems: mergedSubItems,
          })
        }
      })

      props.onSelect(newSelectedEntities)
    }
  }

  function onRemove(entityToRemove: AvatarNamedEntity) {
    if (props.singleSelector) {
      props.onSelect(null)
      return
    }

    const prevSelected = props.selectedAvatarName ?? []

    const filteredVersion = filteredEntities.find(
      (fe) => fe.id === entityToRemove.id
    )

    if (!filteredVersion) {
      return
    }

    const visibleSubIds = new Set(
      (filteredVersion.subItems ?? []).map((sub) => sub.subId)
    )

    const newSelectedEntities: AvatarNamedEntity[] = []

    for (const selectedParent of prevSelected) {
      const filteredSubItems = (selectedParent.subItems ?? []).filter(
        (sub) => !visibleSubIds.has(sub.subId)
      )

      if (filteredSubItems.length > 0) {
        newSelectedEntities.push({
          ...selectedParent,
          subItems: filteredSubItems,
        })
      }
    }

    props.onSelect(newSelectedEntities)
  }

  function onSubItemRemove(
    _parentEntity: AvatarNamedEntity,
    subEntity: AvatarNamedSubEntity
  ) {
    if (props.singleSelector) {
      props.onSelect(null)
      return
    }

    const prevSelected = props.selectedAvatarName ?? []
    const subIdToRemove = subEntity.subId

    const newSelectedEntities: AvatarNamedEntity[] = []

    for (const parent of prevSelected) {
      const filteredSubItems =
        parent.subItems?.filter((s) => s.subId !== subIdToRemove) ?? []

      if (filteredSubItems.length > 0) {
        newSelectedEntities.push({
          ...parent,
          subItems: filteredSubItems,
        })
      }
    }

    props.onSelect(newSelectedEntities)
  }

  function onClear() {
    if (props.singleSelector) {
      props.onSelect(null)
      return
    }

    const prevSelected = props.selectedAvatarName ?? []

    let newSelected: AvatarNamedEntity[] = []

    if (groupView) {
      const visibleSubIds = new Set<number>(
        filteredEntities.flatMap((ent) =>
          (ent.subItems ?? []).map((sub) => sub.subId)
        )
      )

      for (const selectedEntity of prevSelected) {
        const filteredSubItems = (selectedEntity.subItems ?? []).filter(
          (sub) => !visibleSubIds.has(sub.subId)
        )

        if (filteredSubItems.length > 0) {
          newSelected.push({
            ...selectedEntity,
            subItems: filteredSubItems,
          })
        }
      }
    } else {
      const visibleIds = new Set<number>(filteredEntities.map((ent) => ent.id))
      newSelected = (prevSelected ?? []).filter((el) => !visibleIds.has(el.id))
    }

    props.onSelect(newSelected)
  }

  function onSelectAll() {
    const newSelected = [...(props.selectedAvatarName ?? [])]

    filteredEntities.forEach((entity) => {
      const existingEntity = newSelected.find((sel) => sel.id === entity.id)

      if (!existingEntity) {
        newSelected.push({
          ...entity,
          subItems: entity.subItems || [],
        })
      } else {
        const mergedSubItems = Array.from(
          new Set([
            ...(existingEntity.subItems ?? []),
            ...(entity.subItems ?? []),
          ])
        )
        existingEntity.subItems = mergedSubItems
      }
    })

    if (!props.singleSelector) props.onSelect(newSelected)
  }

  const onSearch = (search: string) => {
    setSearch(search)
    setDebouncedSearch(search)
  }

  const onToggleExpand = (entity: AvatarNamedEntity, expanded: boolean) => {
    props.onItemExpandedChange(entity.id, expanded)
    setFilteredEntities(
      filteredEntities.map((e) =>
        e.id === entity.id ? { ...e, expanded: !entity.expanded } : e
      )
    )
  }

  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredEntities(props.entities)
      return
    }

    if (groupView) {
      const nextEntities = props.entities
        .map((entity) => {
          const entityScore = getBestScoreForEntity(entity, debouncedSearch)

          const filteredSubItems = entity.subItems
            ?.map((el) => ({
              ...el,
              score: getMatchScore(
                debouncedSearch,
                el.subSearchKeys ?? el.subName.split(" ")
              ),
            }))
            .filter((subEntity) => subEntity.score < Infinity)
            .sort((a, b) => a.score - b.score)

          return {
            ...entity,
            score: entityScore,
            expanded: entity.expanded ?? (filteredSubItems?.length ?? 0) > 0,
            subItems: filteredSubItems,
          }
        })
        .filter((entity) => entity.score < Infinity)
        .sort((a, b) => a.score - b.score)

      setFilteredEntities(nextEntities)
    } else {
      const nextEntities = props.entities
        .map((entity) => {
          const entityScore = getMatchScore(
            debouncedSearch,
            entity.searchKeys ?? entity.name.split(" ")
          )
          return { ...entity, score: entityScore }
        })
        .filter((entity) => entity.score < Infinity)
        .sort((a, b) => a.score - b.score)

      setFilteredEntities(nextEntities)
    }
  }, [debouncedSearch, props.entities, groupView, setFilteredEntities])

  const onOpenChange = (open: boolean) => {
    props.onOpenChange?.(open)
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  if (props.alwaysOpen) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "scrollbar-macos relative overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
          !props.width ? "w-full" : "w-fit"
        )}
      >
        <AvatarNameSelectorContent
          groupView={groupView}
          entities={filteredEntities}
          groups={props.groups}
          onGroupChange={props.onGroupChange}
          selectedGroup={props.selectedGroup}
          onSelect={onPrivateSelect}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          onSubItemSelect={onSubItemSelect}
          onClear={onClear}
          onSelectAll={onSelectAll}
          selectedEntities={props.selectedAvatarName ?? []}
          search={search}
          onSearch={onSearch}
          onToggleExpand={onToggleExpand}
          searchPlaceholder={props.searchPlaceholder}
          selectAllLabel={props.selectAllLabel}
          clearLabel={props.clearLabel}
          selectedLabel={props.selectedLabel}
          singleSelector={props.singleSelector}
          loading={props.loading}
          notFoundTitle={props.notFoundTitle}
          notFoundSubtitle={props.notFoundSubtitle}
          width={props.width ?? containerWidth - 2}
          disabled={props.disabled}
        />
      </div>
    )
  }

  return (
    <Popover {...props} onOpenChange={onOpenChange}>
      <PopoverTrigger className="w-full" disabled={props.disabled}>
        {props.children ? (
          props.children
        ) : (
          <AvatarNameSelectorTrigger
            placeholder={props.triggerPlaceholder}
            selected={props.triggerSelected}
            selectedAvatarName={props.selectedAvatarName ?? []}
            disabled={props.disabled}
          />
        )}
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "scrollbar-macos relative w-full overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        )}
      >
        <AvatarNameSelectorContent
          groupView={groupView}
          entities={filteredEntities}
          groups={props.groups}
          onGroupChange={props.onGroupChange}
          selectedGroup={props.selectedGroup}
          onSelect={onPrivateSelect}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          onSubItemSelect={onSubItemSelect}
          onClear={onClear}
          onSelectAll={onSelectAll}
          selectedEntities={props.selectedAvatarName ?? []}
          search={search}
          onSearch={onSearch}
          onToggleExpand={onToggleExpand}
          searchPlaceholder={props.searchPlaceholder}
          selectAllLabel={props.selectAllLabel}
          clearLabel={props.clearLabel}
          selectedLabel={props.selectedLabel}
          singleSelector={props.singleSelector}
          loading={props.loading}
          notFoundTitle={props.notFoundTitle}
          notFoundSubtitle={props.notFoundSubtitle}
          width={props.width}
          disabled={props.disabled}
        />
      </PopoverContent>
    </Popover>
  )
}

function getMatchScore(text = "", searchKeys: string[]): number {
  const lowerText = text.toLowerCase().trim()

  let bestMatchIndex = Infinity

  for (let i = 0; i < searchKeys.length; i++) {
    const lowerKey = searchKeys[i].toLowerCase()

    if (lowerKey.startsWith(lowerText)) {
      return -(searchKeys.length - i)
    }

    if (lowerKey.includes(lowerText) && bestMatchIndex === Infinity) {
      bestMatchIndex = i + 1
    }
  }

  return bestMatchIndex
}

function getBestScoreForEntity(entity: AvatarNamedEntity, search: string) {
  const nameScore = getMatchScore(
    search,
    entity.searchKeys ?? entity.name.split(" ")
  )

  let bestSubItemScore = Infinity
  if (entity.subItems?.length) {
    bestSubItemScore = entity.subItems.reduce((minScore, subItem) => {
      const current = getMatchScore(
        search,
        subItem.subSearchKeys ?? subItem.subName.split(" ")
      )
      return Math.min(minScore, current)
    }, Infinity)
  }

  return Math.min(nameScore, bestSubItemScore)
}
