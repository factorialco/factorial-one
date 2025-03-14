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
  onSelect,
  width,
  loading = false,
  singleSelector = false,
  disabled = false,
  children,
  ...props
}: AvatarNameSelectorProps & { children?: React.ReactNode }) => {
  const [filteredEntities, setFilteredEntities] =
    useState<AvatarNamedEntity[]>(entities)

  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useDebounceValue("", 300)

  const onPrivateSelect = (entity: AvatarNamedEntity) => {
    const prevSelectedEntities = selectedAvatarName ?? []
    const alreadySelected = prevSelectedEntities.find((e) => e.id === entity.id)
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
    onSelect(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (singleSelector ? entity : newSelectedEntities) as any
    )
  }

  const onSubItemSelect = (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => {
    const existingSelectedEntity = (selectedAvatarName ?? []).find(
      (e) => e.id === parentEntity.id
    )
    let newSelectedEntities
    if (existingSelectedEntity) {
      newSelectedEntities = (selectedAvatarName ?? []).map((e) =>
        e.id === parentEntity.id
          ? {
              ...e,
              subItems: [...(e.subItems ?? []), entity],
            }
          : e
      )
    } else {
      newSelectedEntities = [
        ...(selectedAvatarName ?? []),
        { ...parentEntity, subItems: [entity] },
      ]
    }

    onSelect(
      (singleSelector
        ? { ...parentEntity, subItems: [{ ...entity }] }
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          newSelectedEntities) as any
    )
  }

  const onRemove = (entity: AvatarNamedEntity) => {
    const newSelectedEntities = (selectedAvatarName ?? []).filter(
      (e) => e.id !== entity.id
    )
    onSelect(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      singleSelector ? null : (newSelectedEntities as any)
    )
  }

  const onSubItemRemove = (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => {
    const newSelectedEntities = (selectedAvatarName ?? []).map((e) =>
      e.id === parentEntity.id
        ? {
            ...e,
            subItems: e.subItems?.filter((s) => s.subId !== entity.subId),
          }
        : e
    )

    onSelect(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      singleSelector ? null : (newSelectedEntities as any)
    )
  }

  const onClear = () => {
    const updatedSelected = [...(selectedAvatarName ?? [])]

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!singleSelector) onSelect(updatedSelected as any)
  }

  const onSelectAll = () => {
    const newSelected = [...(selectedAvatarName ?? [])]

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!singleSelector) onSelect(newSelected as any)
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
                expanded: entity.expanded ?? someSubItem,
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
          !width ? "w-full" : "w-fit"
        )}
      >
        <AvatarNameSelectorContent
          groupView={groupView}
          entities={filteredEntities}
          groups={groups}
          onGroupChange={onGroupChange}
          selectedGroup={selectedGroup}
          onSelect={onPrivateSelect}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          onSubItemSelect={onSubItemSelect}
          onClear={onClear}
          onSelectAll={onSelectAll}
          selectedEntities={selectedAvatarName ?? []}
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
          width={width ?? containerWidth - 2}
          disabled={disabled}
        />
      </div>
    )
  }

  return (
    <Popover {...props} onOpenChange={onOpenChange}>
      <PopoverTrigger className="w-full" disabled={disabled}>
        {children ? (
          children
        ) : (
          <AvatarNameSelectorTrigger
            placeholder={triggerPlaceholder}
            selected={triggerSelected}
            selectedAvatarName={selectedAvatarName ?? []}
            disabled={disabled}
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
          groups={groups}
          onGroupChange={onGroupChange}
          selectedGroup={selectedGroup}
          onSelect={onPrivateSelect}
          onRemove={onRemove}
          onSubItemRemove={onSubItemRemove}
          onSubItemSelect={onSubItemSelect}
          onClear={onClear}
          onSelectAll={onSelectAll}
          selectedEntities={selectedAvatarName ?? []}
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
          width={width}
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  )
}
