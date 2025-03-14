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

  const onPrivateSelect = (entity: AvatarNamedEntity) => {
    if (props.singleSelector) {
      props.onSelect(entity)
    } else {
      const prevSelectedEntities = props.selectedAvatarName ?? []
      const alreadySelected = prevSelectedEntities.find(
        (e) => e.id === entity.id
      )
      let newSelectedEntities
      if (!alreadySelected) {
        newSelectedEntities = [...prevSelectedEntities, entity]
      } else {
        newSelectedEntities = prevSelectedEntities.map((e) =>
          e.id === entity.id
            ? {
                ...e,
                subItems: props.entities.find((e) => e.id === entity.id)
                  ?.subItems,
              }
            : e
        )
      }
      props.onSelect(newSelectedEntities)
    }
  }

  const onSubItemSelect = (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => {
    const existingSelectedEntity = (props.selectedAvatarName ?? []).find(
      (e) => e.id === parentEntity.id
    )
    let newSelectedEntities
    if (existingSelectedEntity) {
      newSelectedEntities = (props.selectedAvatarName ?? []).map((e) =>
        e.id === parentEntity.id
          ? {
              ...e,
              subItems: [...(e.subItems ?? []), entity],
            }
          : e
      )
    } else {
      newSelectedEntities = [
        ...(props.selectedAvatarName ?? []),
        { ...parentEntity, subItems: [entity] },
      ]
    }

    if (props.singleSelector) {
      props.onSelect({ ...parentEntity, subItems: [{ ...entity }] })
    } else {
      props.onSelect(newSelectedEntities)
    }
  }

  const onRemove = (entity: AvatarNamedEntity) => {
    const newSelectedEntities = (props.selectedAvatarName ?? []).filter(
      (e) => e.id !== entity.id
    )
    if (props.singleSelector) {
      props.onSelect(null)
    } else {
      props.onSelect(newSelectedEntities)
    }
  }

  const onSubItemRemove = (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => {
    const newSelectedEntities = (props.selectedAvatarName ?? []).map((e) =>
      e.id === parentEntity.id
        ? {
            ...e,
            subItems: e.subItems?.filter((s) => s.subId !== entity.subId),
          }
        : e
    )

    if (props.singleSelector) {
      props.onSelect(null)
    } else {
      props.onSelect(newSelectedEntities)
    }
  }

  const onClear = () => {
    const updatedSelected = [...(props.selectedAvatarName ?? [])]

    filteredEntities.forEach((filteredEntity) => {
      const existingIndex = updatedSelected.findIndex(
        (sel) => sel.id === filteredEntity.id
      )

      if (existingIndex === -1) return

      const existingEntity = updatedSelected[existingIndex]

      const filteredSubs = filteredEntity.subItems ?? []
      if (filteredSubs.length > 0) {
        const newSubItems =
          existingEntity.subItems?.filter(
            (sub) => !filteredSubs.some((f) => f.subId === sub.subId)
          ) ?? []

        if (newSubItems.length === 0) {
          updatedSelected.splice(existingIndex, 1)
        } else {
          updatedSelected[existingIndex] = {
            ...existingEntity,
            subItems: newSubItems,
          }
        }
      } else {
        updatedSelected.splice(existingIndex, 1)
      }
    })

    if (!props.singleSelector) props.onSelect(updatedSelected)
  }

  const onSelectAll = () => {
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

  const onToggleExpand = (entity: AvatarNamedEntity) => {
    setFilteredEntities(
      filteredEntities.map((e) =>
        e.id === entity.id ? { ...e, expanded: !entity.expanded } : e
      )
    )
  }

  const groupView = useMemo(
    () =>
      props.entities.some(
        (entity) => entity.subItems && entity.subItems.length > 0
      ),
    [props.entities]
  )

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
