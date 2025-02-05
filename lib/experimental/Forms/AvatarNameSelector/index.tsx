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

function transformSelection(
  prevSelected: AvatarNamedEntity[],
  entities: AvatarNamedEntity[]
): AvatarNamedEntity[] {
  const oldWasGroupView = prevSelected.some((entity) => entity.subItems)
  const newIsGroupView = entities.some((entity) => entity.subItems)

  const selectedLeafs = oldWasGroupView
    ? prevSelected
        .flatMap((entity) => entity.subItems ?? [])
        .map((el) => ({ id: el.subId, name: el.subName }) as AvatarNamedEntity)
    : prevSelected

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
  placeholder,
  selectedGroup,
  searchPlaceholder,
  selectAllLabel,
  clearLabel,
  selectedLabel
}: AvatarNameSelectorProps) => {
  const [selectedEntities, setSelectedEntities] = useState<AvatarNamedEntity[]>(
    []
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
      if (!alreadySelected) {
        return [...prevSelectedEntities, entity]
      } else {
        return prevSelectedEntities.map((e) =>
          e.id === entity.id
            ? {
                ...e,
                subItems: entities.find((e) => e.id === entity.id)?.subItems,
              }
            : e
        )
      }
    })
  }

  const onRemove = (entity: AvatarNamedEntity) => {
    setSelectedEntities(selectedEntities.filter((e) => e.id !== entity.id))
  }

  const onSubItemRemove = (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => {
    setSelectedEntities(
      selectedEntities.map((e) =>
        e.id === parentEntity.id
          ? {
              ...e,
              subItems: e.subItems?.filter((s) => s.subId !== entity.subId),
            }
          : e
      )
    )
  }

  const onSubItemSelect = (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => {
    const existingSelectedEntity = selectedEntities.find(
      (e) => e.id === parentEntity.id
    )
    if (existingSelectedEntity) {
      setSelectedEntities(
        selectedEntities.map((e) =>
          e.id === parentEntity.id
            ? {
                ...e,
                subItems: [...(e.subItems ?? []), entity],
              }
            : e
        )
      )
    } else {
      setSelectedEntities([
        ...selectedEntities,
        { ...parentEntity, subItems: [entity] },
      ])
    }
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
    () => entities.some((entity) => entity.subItems),
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
    setSelectedEntities((prevSelected) =>
      transformSelection(prevSelected, entities)
    )
  }, [entities])

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <AvatarNameSelectorTrigger placeholder={placeholder} />
      </PopoverTrigger>
      <PopoverContent className="w-full rounded-xl border-[1px] border-solid border-f1-border-secondary p-0">
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

        />
      </PopoverContent>
    </Popover>
  )
}
