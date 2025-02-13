import { Button } from "@/components/Actions/Button"
import { Icon } from "@/components/Utilities/Icon"
import { Counter } from "@/experimental/exports"
import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { CheckCircle } from "@/icons/app"
import LogoAvatar from "@/icons/app/LogoAvatar"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Checkbox } from "../../Fields/Checkbox"
import { HighlightText } from "../AvatarNameHighLightText"
import { AvatarNamedEntity, AvatarNamedSubEntity } from "../types"

interface Props {
  entity: AvatarNamedEntity
  selected: boolean
  onSelect: (entity: AvatarNamedEntity) => void
  onRemove: (entity: AvatarNamedEntity) => void
  marginLeft: "ml-1.5" | "ml-8"
  search: string
  singleSelector?: boolean
}

export function focusNextFocusable(currentElement: HTMLElement) {
  const focusableSelectors = 'label[tabindex]:not([tabindex="-1"])'
  const allFocusable = Array.from(
    document.querySelectorAll(focusableSelectors)
  ) as HTMLElement[]

  const currentIndex = allFocusable.indexOf(currentElement)
  if (currentIndex >= 0 && currentIndex < allFocusable.length - 1) {
    allFocusable[currentIndex + 1].focus()
  } else if (allFocusable.length > 0) {
    allFocusable[0].focus()
  }
}

export function focusPreviousFocusable(currentElement: HTMLElement) {
  const focusableSelectors = 'label[tabindex]:not([tabindex="-1"])'
  const allFocusable = Array.from(
    document.querySelectorAll(focusableSelectors)
  ) as HTMLElement[]

  const currentIndex = allFocusable.indexOf(currentElement)
  if (currentIndex > 0) {
    allFocusable[currentIndex - 1].focus()
  } else if (allFocusable.length > 0) {
    allFocusable[allFocusable.length - 1].focus()
  }
}

export const AvatarNameListItemSingleContent = ({
  entity,
  selected,
  onSelect,
  onRemove,
  marginLeft,
  search,
  singleSelector = false,
}: Props) => {
  const nameParts = entity.name.split(" ")
  const firstName = nameParts[0] || ""
  const lastName = nameParts.slice(1).join(" ")

  const handleLabelClick = (ev: React.MouseEvent<HTMLLabelElement>) => {
    ev.preventDefault()
    ev.stopPropagation()

    if (selected) {
      onRemove(entity)
    } else {
      onSelect(entity)
    }
  }

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLLabelElement>) => {
    if (ev.key === "Enter" || ev.key === " ") {
      ev.preventDefault()
      ev.stopPropagation()
      if (!selected) {
        onSelect(entity)
      }
    } else if (ev.key === "Backspace") {
      ev.preventDefault()
      ev.stopPropagation()
      if (selected) {
        onRemove(entity)
      }
    } else if (ev.key === "ArrowDown") {
      ev.preventDefault()
      ev.stopPropagation()
      focusNextFocusable(ev.currentTarget)
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault()
      ev.stopPropagation()
      focusPreviousFocusable(ev.currentTarget)
    }
  }

  return (
    <label
      onClick={handleLabelClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-pressed={selected}
      aria-label={entity.name}
      className={cn(
        marginLeft,
        "mr-3 flex flex-row flex-wrap items-center gap-2 rounded-[10px] border p-2 hover:cursor-pointer",
        "hover:bg-f1-background-hover focus:outline focus:outline-1 focus:-outline-offset-1 focus:outline-f1-border-selected-bold",
        selected && singleSelector
          ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20"
          : ""
      )}
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

      {!singleSelector && (
        <Checkbox
          checked={selected}
          tabIndex={-1}
          onClick={(ev) => {
            ev.preventDefault()
          }}
          className="pointer-events-none ml-auto h-[20px] w-[20px] rounded-xs border-[1px] data-[state=checked]:text-f1-foreground-inverse"
          style={{
            backgroundColor: selected ? "hsl(var(--selected-50))" : undefined,
            borderColor: selected ? "hsl(var(--selected-50))" : undefined,
          }}
        />
      )}

      {singleSelector && selected && (
        <Icon className="text-f1-icon-selected" icon={CheckCircle} size="md" />
      )}
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
  showGroupIcon = false,
  singleSelector = false,
}: {
  entity: AvatarNamedEntity
  groupView: boolean
  expanded: boolean
  selected: boolean
  partialSelected: boolean
  selectedEntity?: AvatarNamedEntity
  search: string
  showGroupIcon?: boolean
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
  singleSelector: boolean
}) => {
  if (!groupView) {
    return (
      <AvatarNameListItemSingleContent
        marginLeft="ml-1.5"
        entity={entity}
        search={search}
        selected={selected}
        onSelect={onSelect}
        onRemove={onRemove}
        singleSelector={singleSelector}
      />
    )
  }

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLLabelElement>) => {
    if (ev.key === " ") {
      ev.preventDefault()
      ev.stopPropagation()
      onExpand()
    } else if (ev.key === "Enter") {
      ev.preventDefault()
      ev.stopPropagation()
      if (!selected || partialSelected) {
        onSelect(entity)
      }
    } else if (ev.key === "Backspace") {
      ev.preventDefault()
      ev.stopPropagation()
      if (selected || partialSelected) {
        onRemove(entity)
      }
    } else if (ev.key === "ArrowDown") {
      ev.preventDefault()
      ev.stopPropagation()
      focusNextFocusable(ev.currentTarget)
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault()
      ev.stopPropagation()
      focusPreviousFocusable(ev.currentTarget)
    }
  }

  const handleGroupClick = () => {
    if (singleSelector) return
    if (selected) onRemove(entity)
    else onSelect(entity)
  }

  if (!entity.subItems?.length) return null

  const checked = selected || partialSelected
  return (
    <>
      <div className="ml-2 mr-3 flex flex-row flex-wrap items-center gap-0 rounded-md border">
        <Button
          round={true}
          hideLabel={true}
          icon={expanded ? ChevronDown : ChevronRight}
          onClick={onExpand}
          label={expanded ? "Collapse" : "Expand"}
          size="sm"
          variant="ghost"
          tabIndex={-1}
        />
        <label
          aria-label={entity.name}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={(ev) => {
            ev.preventDefault()
            onExpand()
          }}
          className="flex flex-1 flex-row items-center gap-2 rounded-[10px] border p-2 hover:cursor-pointer hover:bg-f1-background-hover focus:outline focus:outline-1 focus:-outline-offset-1 focus:outline-f1-border-selected-bold"
        >
          {showGroupIcon && (
            <Icon
              icon={LogoAvatar}
              className="rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
            />
          )}
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-row items-center gap-2">
              <HighlightText semiBold text={entity.name} search={search} />
              <Counter value={entity.subItems?.length ?? 0} />
            </div>
          </div>
          {!singleSelector && (
            <Checkbox
              tabIndex={-1}
              checked={checked}
              onClick={handleGroupClick}
              indeterminate={partialSelected}
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
              marginLeft="ml-8"
              entity={{
                id: subItem.subId,
                avatar: subItem.subAvatar,
                name: subItem.subName,
              }}
              selected={selected ?? false}
              onSelect={() => onSubItemSelect?.(entity, subItem)}
              onRemove={() => onSubItemRemove?.(entity, subItem)}
              search={search}
              singleSelector={singleSelector}
            />
          )
        })}

      <div className="h-[1px] w-full bg-f1-border-secondary" />
    </>
  )
}
