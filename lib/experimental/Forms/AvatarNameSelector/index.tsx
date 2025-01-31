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
  newGroupView: boolean
): AvatarNamedEntity[] {
  if (newGroupView) {
    return prevSelected
      .map((parent) => {
        if (parent.subItems && parent.subItems.length > 0) {
          return {
            ...parent,
          }
        }
        return null
      })
      .filter(Boolean) as AvatarNamedEntity[]
  } else {
    const newSelection: AvatarNamedEntity[] = []

    prevSelected.forEach((parent) => {
      if (parent.subItems && parent.subItems.length > 0) {
        parent.subItems.forEach((sub) => {
          newSelection.push({
            id: sub.id,
            name: sub.name,
            subItems: [],
          })
        })
      }
    })

    return newSelection
  }
}

export const AvatarNameSelector = ({
  entities,
  groups,
  onGroupChange,
  placeholder,
  selectedGroup,
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
              subItems: e.subItems?.filter((s) => s.id !== entity.id),
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
            (sub) => !filteredSubs.some((f) => f.id === sub.id)
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
                  subItem.name
                    .toLowerCase()
                    .includes(debouncedSearch.toLowerCase())
                )
            )
            .map((entity) => {
              const someSubItem = entity.subItems?.some((subItem) =>
                subItem.name
                  .toLowerCase()
                  .includes(debouncedSearch.toLowerCase())
              )
              return {
                ...entity,
                expanded: someSubItem,
                subItems: entity.subItems?.filter((subItem) =>
                  subItem.name
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
      transformSelection(prevSelected, groupView)
    )
  }, [selectedGroup, groupView])

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
        />
      </PopoverContent>
    </Popover>
  )
}
