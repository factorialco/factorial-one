import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { AvatarNameSelectorContent } from "./AvatarNameSelectorContent"
import { AvatarNameSelectorTrigger } from "./AvatarNameSelectorTrigger"
import {
  AvatarNamedEntity,
  AvatarNamedSubEntity,
  AvatarNameSelectorProps,
} from "./types"

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
    setSelectedEntities([])
  }

  const onSelectAll = () => {
    const newSelectedEntities = [
      ...selectedEntities,
      ...filteredEntities.filter(
        (entity) =>
          !selectedEntities.some((selected) => selected.id === entity.id)
      ),
    ]
    setSelectedEntities(newSelectedEntities)
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

  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredEntities(entities)
    } else {
      setFilteredEntities(
        entities.filter((entity) =>
          entity.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
      )
    }
  }, [debouncedSearch, entities])

  const groupView = entities.some((entity) => entity.subItems)

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
