import { Icon } from "@/components/Utilities/Icon"
import { BaseAvatar } from "@/experimental/Information/Avatars/BaseAvatar"
import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { BaseTag } from "@/experimental/Information/Tags/BaseTag"
import { ScrollArea } from "@/experimental/Utilities/ScrollArea"
import { ChevronDown, Cross, Search } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { Checkbox } from "@/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { AvatarNamedEntity, AvatarNameSelectorProps } from "./types"

const AvatarNameListTag = ({
  entity,
  onRemove,
}: {
  entity: AvatarNamedEntity
  onRemove: (entity: AvatarNamedEntity) => void
}) => {
  return (
    <div className="pb-2">
      <BaseTag
        className={cn(
          "w-auto gap-1 border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
          "rounded-full"
        )}
        left={
          <BaseAvatar
            src={entity.avatar}
            name={entity.name}
            size="xsmall"
            type="rounded"
          />
        }
        right={
          <Icon
            icon={Cross}
            size="sm"
            className="ml-auto cursor-pointer text-f1-icon-secondary"
            onClick={() => onRemove(entity)}
          />
        }
        text={entity.name}
      />
    </div>
  )
}

const AvatarNameListItem = ({
  entity,
  selected,
  onSelect,
  onRemove,
}: {
  entity: AvatarNamedEntity
  selected: boolean
  onSelect: (entity: AvatarNamedEntity) => void
  onRemove: (entity: AvatarNamedEntity) => void
}) => {
  const name = entity.name.split(" ")
  const firstName = name[0]
  const lastName = name.slice(1).join(" ")
  return (
    <div
      className="flex flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold"
      style={{ width: "calc(100% - 12px)" }}
    >
      <PersonAvatar
        src={entity.avatar}
        firstName={firstName}
        lastName={lastName}
        size="xsmall"
      />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-row items-center gap-1">
          <span className="truncate font-medium">{`${entity.name}`}</span>
        </div>
      </div>
      <Checkbox
        checked={selected}
        onClick={() => (selected ? onRemove(entity) : onSelect(entity))}
        className="ml-auto data-[state=checked]:bg-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse"
      />
    </div>
  )
}

const AvatarNameSelectorContent = ({
  entities,
  search,
  onSelect,
  onRemove,
  onClear,
  onSelectAll,
  onSearch,
  selectedEntities,
}: {
  entities: AvatarNamedEntity[]
  search: string
  onSelect: (entity: AvatarNamedEntity) => void
  onRemove: (entity: AvatarNamedEntity) => void
  onClear: () => void
  onSelectAll: () => void
  onSearch: (search: string) => void
  selectedEntities: AvatarNamedEntity[]
}) => {
  return (
    <div className="flex">
      <div className="flex w-96 flex-col rounded-l-xl border-0 border-r-[1px] border-solid border-f1-border-secondary">
        <div className="flex justify-between p-2">
          <div
            className={cn(
              "flex items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover"
            )}
          >
            <div className="flex items-center gap-1">
              <Icon icon={Search} size="md" />
              <input
                type="text"
                className="w-full border-none bg-transparent text-f1-foreground-secondary outline-none"
                placeholder="Search..."
                value={search}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex-grow-1 flex h-96 flex-col justify-start gap-1 pl-3 pr-2">
          <ScrollArea className="-mr-2 h-full">
            {entities.map((entity) => (
              <AvatarNameListItem
                key={entity.id}
                entity={entity}
                onSelect={onSelect}
                onRemove={onRemove}
                selected={selectedEntities.includes(entity)}
              />
            ))}
          </ScrollArea>
        </div>
        <div
          className="rounded-bl-xl border-0 border-t-[1px] border-solid border-f1-border-secondary"
          style={{
            backgroundColor: "hsla(var(--white-70))",
          }}
        >
          <div className="flex flex-1 justify-between p-2">
            <Button variant="outline" size="sm" onClick={onSelectAll}>
              Select all ({entities.length})
            </Button>
            <Button
              variant="ghost"
              size="sm"
              disabled={selectedEntities.length === 0}
              onClick={onClear}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
      <div
        className="w-56 rounded-r-xl"
        style={{
          background:
            "linear-gradient(270deg, rgba(250, 251, 252, 0) 50%, #FAFBFC 100%)",
        }}
      >
        <div className="flex h-full flex-col">
          <span className="mt-1 p-3 text-f1-foreground-secondary">
            {selectedEntities.length} selected
          </span>
          <ScrollArea
            className="mr-1 px-3"
            style={{ height: "calc(24rem + 40px)" }}
          >
            {selectedEntities.map((entity) => (
              <AvatarNameListTag
                key={entity.id}
                entity={entity}
                onRemove={onRemove}
              />
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export const AvatarNameSelector = ({
  entities,
  placeholder,
}: AvatarNameSelectorProps) => {
  const [selectedEntities, setSelectedEntities] = useState<AvatarNamedEntity[]>(
    []
  )
  const [filteredEntities, setFilteredEntities] =
    useState<AvatarNamedEntity[]>(entities)

  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useDebounceValue("", 300)

  const onSelect = (entity: AvatarNamedEntity) => {
    setSelectedEntities([...selectedEntities, entity])
  }

  const onRemove = (entity: AvatarNamedEntity) => {
    setSelectedEntities(selectedEntities.filter((e) => e.id !== entity.id))
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

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex justify-between rounded border border-solid border-f1-border p-2">
          <span className="my-auto pl-2 text-f1-foreground-secondary">
            {placeholder}
          </span>
          <div className="p-0.5">
            <div className="h-[16px] w-[16px]">
              <Icon
                icon={ChevronDown}
                size="sm"
                className="rounded-2xs bg-f1-background-secondary p-0.5"
              />
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full rounded-xl border-[1px] border-solid border-f1-border-secondary p-0">
        <AvatarNameSelectorContent
          entities={filteredEntities}
          onSelect={onSelect}
          onRemove={onRemove}
          onClear={onClear}
          onSelectAll={onSelectAll}
          selectedEntities={selectedEntities}
          search={search}
          onSearch={onSearch}
        />
      </PopoverContent>
    </Popover>
  )
}
