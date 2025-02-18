import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useEffect, useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { AvatarNameSelectorContent } from "./AvatarNameSelectorContent"
import { AvatarNameSelectorTrigger } from "./AvatarNameSelectorTrigger"
import {
  AvatarNamedEntity,
  AvatarNamedSubEntity,
  AvatarNameSelectorProps,
} from "./types"

function extractLeafs(list: AvatarNamedEntity[]) {
  const oldWasGroupView = list.some(
    (entity) => entity.subItems && entity.subItems.length > 0
  )
  return oldWasGroupView
    ? list
        .flatMap((entity) => entity.subItems ?? [])
        .map((el) => ({ id: el.subId, name: el.subName }) as AvatarNamedEntity)
    : list
}

function transformSelection(
  prevSelected: AvatarNamedEntity[],
  entities: AvatarNamedEntity[]
): AvatarNamedEntity[] {
  const newIsGroupView = entities.some(
    (entity) => entity.subItems && entity.subItems.length > 0
  )
  const selectedLeafs = extractLeafs(prevSelected)

  if (newIsGroupView) {
    return entities
      .map((parent) => {
        if (parent.subItems && parent.subItems.length > 0) {
          return {
            ...parent,
            subItems: parent.subItems.filter(
              (el) => !!selectedLeafs.find((leaf) => leaf.id === el.subId)
            ),
          }
        }
        return parent
      })
      .filter((el) => !!el.subItems && el.subItems.length > 0)
  }
  return entities.filter(
    (el) => !!selectedLeafs.find((leaf) => leaf.id === el.id)
  )
}

export const AvatarNameSelector = ({
  entities,
  groups,
  onGroupChange,
  triggerPlaceholder,
  triggerSelected,
  selectedGroup,
  searchPlaceholder,
  selectAllLabel,
  clearLabel,
  selectedLabel,
  notFoundTitle,
  notFoundSubtitle,
  selectedAvatarName,
  onSelect: onSelectProp,
  loading = false,
  singleSelector = false,
  ...props
}: AvatarNameSelectorProps) => {
  const [selectedEntities, setSelectedEntities] = useState<AvatarNamedEntity[]>(
    selectedAvatarName ?? []
  )
  const [filteredEntities, setFilteredEntities] =
    useState<AvatarNamedEntity[]>(entities)

  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useDebounceValue("", 300)

  const onSelect = (entity: AvatarNamedEntity) => {
    setSelectedEntities((prevSelectedEntities) => {
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
                subItems: entities.find((e) => e.id === entity.id)?.subItems,
              }
            : e
        )
      }
      onSelectProp(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (singleSelector ? entity : newSelectedEntities) as any
      )
      return singleSelector ? [entity] : newSelectedEntities
    })
  }

  const onSubItemSelect = (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => {
    const existingSelectedEntity = selectedEntities.find(
      (e) => e.id === parentEntity.id
    )
    let newSelectedEntities
    if (existingSelectedEntity) {
      newSelectedEntities = selectedEntities.map((e) =>
        e.id === parentEntity.id
          ? {
              ...e,
              subItems: [...(e.subItems ?? []), entity],
            }
          : e
      )
    } else {
      newSelectedEntities = [
        ...selectedEntities,
        { ...parentEntity, subItems: [entity] },
      ]
    }

    onSelectProp(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (singleSelector ? entity : newSelectedEntities) as any
    )

    setSelectedEntities(newSelectedEntities)
  }

  const onRemove = (entity: AvatarNamedEntity) => {
    const newSelectedEntities = selectedEntities.filter(
      (e) => e.id !== entity.id
    )
    setSelectedEntities(newSelectedEntities)
    onSelectProp(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      singleSelector ? null : (newSelectedEntities as any)
    )
  }

  const onSubItemRemove = (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => {
    const newSelectedEntities = selectedEntities.map((e) =>
      e.id === parentEntity.id
        ? {
            ...e,
            subItems: e.subItems?.filter((s) => s.subId !== entity.subId),
          }
        : e
    )
    setSelectedEntities(newSelectedEntities)
    onSelectProp(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      singleSelector ? null : (newSelectedEntities as any)
    )
  }

  const onClear = () => {
    const updatedSelected = [...selectedEntities]

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

    setSelectedEntities(updatedSelected)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!singleSelector) onSelectProp(updatedSelected as any)
  }

  const onSelectAll = () => {
    const newSelected = [...selectedEntities]

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

    setSelectedEntities(newSelected)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!singleSelector) onSelectProp(newSelected as any)
  }

  const onSearch = (search: string) => {
    setSearch(search)
    setDebouncedSearch(search)
  }

  const onToggleExpand = (entity: AvatarNamedEntity) => {
    setFilteredEntities(
      filteredEntities.map((e) =>
        e.id === entity.id ? { ...e, expanded: !e.expanded } : e
      )
    )
  }

  const groupView = useMemo(
    () =>
      entities.some((entity) => entity.subItems && entity.subItems.length > 0),
    [entities]
  )

  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredEntities(entities)
    } else {
      if (groupView) {
        setFilteredEntities(
          entities
            .filter(
              (entity) =>
                entity.name
                  .toLowerCase()
                  .includes(debouncedSearch.toLowerCase()) ||
                entity.subItems?.some((subItem) =>
                  subItem.subName
                    .toLowerCase()
                    .includes(debouncedSearch.toLowerCase())
                )
            )
            .map((entity) => {
              const someSubItem = entity.subItems?.some((subItem) =>
                subItem.subName
                  .toLowerCase()
                  .includes(debouncedSearch.toLowerCase())
              )
              return {
                ...entity,
                expanded: someSubItem,
                subItems: entity.subItems?.filter((subItem) =>
                  subItem.subName
                    .toLowerCase()
                    .includes(debouncedSearch.toLowerCase())
                ),
              }
            })
        )
      } else {
        setFilteredEntities(
          entities.filter((entity) =>
            entity.name.toLowerCase().includes(debouncedSearch.toLowerCase())
          )
        )
      }
    }
  }, [debouncedSearch, entities, groupView])

  useEffect(() => {
    setSelectedEntities((prevSelected) => {
      const trans = transformSelection(prevSelected, entities)
      return trans
    })
  }, [entities])

  const onOpenChange = (open: boolean) => {
    if (!open) setSelectedEntities(selectedAvatarName ?? [])
    props.onOpenChange?.(open)
  }

  return (
    <Popover {...props} onOpenChange={onOpenChange}>
      <PopoverTrigger className="w-full">
        <AvatarNameSelectorTrigger
          placeholder={triggerPlaceholder}
          selected={triggerSelected}
          selectedAvatarName={selectedEntities}
        />
      </PopoverTrigger>
      <PopoverContent className="w-full rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0">
        <AvatarNameSelectorContent
          groupView={groupView}
          entities={filteredEntities}
          groups={groups}
          onGroupChange={onGroupChange}
          selectedGroup={selectedGroup}
          onSelect={onSelect}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          onSubItemSelect={onSubItemSelect}
          onClear={onClear}
          onSelectAll={onSelectAll}
          selectedEntities={selectedEntities}
          search={search}
          onSearch={onSearch}
          onToggleExpand={onToggleExpand}
          searchPlaceholder={searchPlaceholder}
          selectAllLabel={selectAllLabel}
          clearLabel={clearLabel}
          selectedLabel={selectedLabel}
          singleSelector={singleSelector}
          loading={loading}
          notFoundTitle={notFoundTitle}
          notFoundSubtitle={notFoundSubtitle}
        />
      </PopoverContent>
    </Popover>
  )
}
