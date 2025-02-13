import { Button } from "@/components/Actions/Button"
import { Icon } from "@/components/Utilities/Icon"
import { Counter } from "@/experimental/exports"
import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import LogoAvatar from "@/icons/app/LogoAvatar"
import { ChevronDown, ChevronRight } from "lucide-react"
import Checkbox from "../../Fields/Checkbox"
import { HighlightText } from "../AvatarNameHighLightText"
import { AvatarNamedEntity, AvatarNamedSubEntity } from "../types"

const AvatarNameListItemSingleContent = ({
  entity,
  selected,
  onSelect,
  onRemove,
  marginLeft,
  search,
}: {
  entity: AvatarNamedEntity
  selected: boolean
  onSelect: (entity: AvatarNamedEntity) => void
  onRemove: (entity: AvatarNamedEntity) => void
  marginLeft: "ml-3" | "ml-11"
  search: string
}) => {
  const name = entity.name.split(" ")
  const firstName = name[0]
  const lastName = name.slice(1).join(" ")

  return (
    <label
      aria-label={entity.name}
      className={
        marginLeft +
        " mr-3 flex flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:cursor-pointer" +
        " hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold"
      }
    >
      <PersonAvatar
        src={entity.avatar}
        firstName={firstName}
        lastName={lastName}
        size="xsmall"
      />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-row items-center gap-2">
          <HighlightText text={entity.name} search={search} />
        </div>
      </div>
      <Checkbox
        checked={selected}
        onClick={() => (selected ? onRemove(entity) : onSelect(entity))}
        className="ml-auto h-[20px] w-[20px] rounded-xs border-[1px] data-[state=checked]:text-f1-foreground-inverse"
        style={{
          backgroundColor: selected ? "hsl(var(--selected-50))" : undefined,
          borderColor: selected ? "hsl(var(--selected-50))" : undefined,
        }}
      />
    </label>
  )
}

export const AvatarNameListItem = ({
  groupView,
  expanded,
  search,
  entity,
  selected,
  partialSelected,
  selectedEntity,
  onSelect,
  onRemove,
  onSubItemRemove,
  onExpand,
  onSubItemSelect,
}: {
  entity: AvatarNamedEntity
  groupView: boolean
  expanded: boolean
  selected: boolean
  partialSelected: boolean
  selectedEntity?: AvatarNamedEntity
  search: string
  onSelect: (entity: AvatarNamedEntity) => void
  onRemove: (entity: AvatarNamedEntity) => void
  onSubItemSelect: (
    entity: AvatarNamedEntity,
    subItem: AvatarNamedSubEntity
  ) => void
  onSubItemRemove: (
    entity: AvatarNamedEntity,
    subItem: AvatarNamedSubEntity
  ) => void
  onExpand: () => void
}) => {
  if (!groupView) {
    return (
      <AvatarNameListItemSingleContent
        marginLeft="ml-3"
        entity={entity}
        search={search}
        selected={selected}
        onSelect={onSelect}
        onRemove={onRemove}
      />
    )
  }

  const checked = selected || partialSelected
  return (
    <>
      <div className="ml-3 mr-3 flex flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold">
        <Button
          round={true}
          hideLabel={true}
          icon={expanded ? ChevronDown : ChevronRight}
          onClick={onExpand}
          label={expanded ? "Collapse" : "Expand"}
          size="sm"
          variant="ghost"
        />

        <label
          aria-label={entity.name}
          className="flex flex-1 flex-row items-center gap-2"
        >
          <Icon
            icon={LogoAvatar}
            className="rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
          />
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-row items-center gap-2">
              <HighlightText text={entity.name} search={search} />
              <Counter value={entity.subItems?.length ?? 0} />
            </div>
          </div>
          {entity.subItems?.length && (
            <Checkbox
              checked={checked}
              indeterminate={partialSelected}
              onClick={() => (selected ? onRemove(entity) : onSelect(entity))}
              className="ml-auto h-[20px] w-[20px] rounded-xs border-[1px] data-[state=checked]:text-f1-foreground-inverse"
              style={{
                backgroundColor: selected
                  ? "hsl(var(--selected-50))"
                  : "hsl(var(--background))",
                color:
                  !selected && partialSelected
                    ? "hsl(var(--selected-50))"
                    : undefined,
                borderColor: checked ? "hsl(var(--selected-50))" : undefined,
              }}
            />
          )}
        </label>
      </div>
      {expanded &&
        entity.subItems?.map((subItem) => {
          const selected = !!selectedEntity?.subItems?.find(
            (el) => el.subId === subItem.subId
          )

          return (
            <AvatarNameListItemSingleContent
              key={entity.id + "-" + subItem.subId}
              marginLeft="ml-11"
              entity={{
                id: subItem.subId,
                avatar: subItem.subAvatar,
                name: subItem.subName,
              }}
              selected={selected ?? false}
              onSelect={() => onSubItemSelect?.(entity, subItem)}
              onRemove={() => onSubItemRemove?.(entity, subItem)}
              search={search}
            />
          )
        })}
    </>
  )
}
