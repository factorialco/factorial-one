import { Button } from "@/components/Actions/Button"
import { Icon } from "@/components/Utilities/Icon"
import { Counter } from "@/experimental/exports"
import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { VirtualList } from "@/experimental/Navigation/VirtualList"
import { CheckCircle } from "@/icons/app"
import LogoAvatar from "@/icons/app/LogoAvatar"
import { cn } from "@/lib/utils"
import { VirtualItem } from "@tanstack/react-virtual"
import { ChevronDown, ChevronRight } from "lucide-react"
import { forwardRef } from "react"
import { Checkbox } from "../../Fields/Checkbox"
import { HighlightText } from "../AvatarNameHighLightText"
import { AvatarNamedEntity, AvatarNamedSubEntity } from "../types"

interface Props {
  entity: AvatarNamedEntity
  selected: boolean
  onSelect: (entity: AvatarNamedEntity) => void
  onRemove: (entity: AvatarNamedEntity) => void
  marginLeft: "ml-0" | "ml-6"
  search: string
  singleSelector?: boolean
  goToFirst?: () => void
  goToLast?: () => void
}

export function focusNextFocusable(
  currentElement: HTMLElement,
  goToFirst?: () => void
) {
  const focusableSelectors = '[data-avatarname-navigator-element="true"]'
  const allFocusable = Array.from(
    document.querySelectorAll(focusableSelectors)
  ) as HTMLElement[]

  const currentIndex = allFocusable.indexOf(currentElement)
  if (currentIndex >= 0 && currentIndex < allFocusable.length - 1) {
    allFocusable[currentIndex + 1].focus()
  } else if (allFocusable.length > 0) {
    goToFirst?.()
  }
}

export function focusPreviousFocusable(
  currentElement: HTMLElement,
  goToLast?: () => void
) {
  const focusableSelectors = '[data-avatarname-navigator-element="true"]'
  const allFocusable = Array.from(
    document.querySelectorAll(focusableSelectors)
  ) as HTMLElement[]

  const currentIndex = allFocusable.indexOf(currentElement)
  if (currentIndex > 0) {
    allFocusable[currentIndex - 1].focus()
  } else if (allFocusable.length > 0) {
    goToLast?.()
  }
}
export const AvatarNameListItemSingleContent = ({
  entity,
  selected,
  onSelect,
  onRemove,
  marginLeft,
  search,
  goToFirst,
  goToLast,
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
      focusNextFocusable(ev.currentTarget, goToFirst)
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault()
      ev.stopPropagation()
      focusPreviousFocusable(ev.currentTarget, goToLast)
    }
  }

  return (
    <div className="w-full pl-1 pr-1">
      <label
        onClick={handleLabelClick}
        onKeyDown={handleKeyDown}
        aria-label={entity.name}
        data-avatarname-navigator-element="true"
        className={cn(
          marginLeft,
          "flex flex-row flex-wrap items-center gap-2 rounded-[10px] border p-2 hover:cursor-pointer",
          "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
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

        <Checkbox
          checked={selected}
          onClick={(ev) => {
            ev.preventDefault()
          }}
          className={cn(
            "pointer-events-none ml-auto h-[20px] w-[20px] rounded-xs border-[1px] data-[state=checked]:text-f1-foreground-inverse",
            singleSelector ? "opacity-0" : ""
          )}
          style={{
            backgroundColor: selected ? "hsl(var(--selected-50))" : undefined,
            borderColor: selected ? "hsl(var(--selected-50))" : undefined,
          }}
        />

        {singleSelector && selected && (
          <Icon
            className="text-f1-icon-selected"
            icon={CheckCircle}
            size="md"
          />
        )}
      </label>
    </div>
  )
}

const AvatarNameListItem = forwardRef(
  (
    {
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
      goToFirst,
      goToLast,
      hideLine = false,
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
      hideLine?: boolean
      goToFirst?: () => void
      goToLast?: () => void
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    if (!groupView) {
      return (
        <AvatarNameListItemSingleContent
          marginLeft="ml-0"
          entity={entity}
          search={search}
          selected={selected}
          onSelect={onSelect}
          onRemove={onRemove}
          singleSelector={singleSelector}
          goToFirst={goToFirst}
          goToLast={goToLast}
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
        focusNextFocusable(ev.currentTarget, goToFirst)
      } else if (ev.key === "ArrowUp") {
        ev.preventDefault()
        ev.stopPropagation()
        focusPreviousFocusable(ev.currentTarget, goToLast)
      }
    }

    const handleGroupClick = (ev: React.MouseEvent) => {
      if (singleSelector) return
      if (selected) onRemove(entity)
      else onSelect(entity)
      ev.stopPropagation()
    }

    if (!entity.subItems?.length) return null

    const checked = selected || partialSelected
    return (
      <>
        <div className="flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-1 pr-1">
          <Button
            round
            hideLabel
            icon={expanded ? ChevronDown : ChevronRight}
            onClick={onExpand}
            label={expanded ? "Collapse" : "Expand"}
            size="sm"
            variant="ghost"
            tabIndex={-1}
          />
          <label
            aria-label={entity.name}
            onKeyDown={handleKeyDown}
            data-avatarname-navigator-element="true"
            onClick={(ev) => {
              ev.preventDefault()
              onExpand()
            }}
            className="flex flex-1 flex-row items-center gap-2 rounded-[10px] border p-2 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover"
          >
            {showGroupIcon && (
              <Icon
                icon={LogoAvatar}
                className="rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              />
            )}
            <div className="flex flex-grow flex-row items-center gap-2">
              <HighlightText semiBold text={entity.name} search={search} />
              <Counter value={entity.subItems?.length ?? 0} />
            </div>
            <Checkbox
              checked={checked}
              onClick={handleGroupClick}
              indeterminate={partialSelected}
              className={cn(
                "ml-auto h-[20px] w-[20px] rounded-xs border-[1px] data-[state=checked]:text-f1-foreground-inverse",
                singleSelector ? "opacity-0" : ""
              )}
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
          </label>
        </div>
        {expanded && entity.subItems && entity.subItems.length && (
          <VirtualList
            ref={ref}
            height={Math.min(348, entity.subItems.length * 36)} // total height less the parent, to make it visible
            itemCount={entity.subItems.length}
            itemSize={36}
            renderer={(vi?: VirtualItem) => {
              if (!vi) return <></>
              const subItem = entity.subItems![vi.index]
              const selected = !!selectedEntity?.subItems?.find(
                (el) => el.subId === subItem.subId
              )

              return (
                <AvatarNameListItemSingleContent
                  key={entity.id + "-" + subItem.subId}
                  marginLeft="ml-6"
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
                  goToFirst={goToFirst}
                  goToLast={goToLast}
                />
              )
            }}
          />
        )}

        {!hideLine && <div className="h-[1px] w-full bg-f1-border-secondary" />}
      </>
    )
  }
)

AvatarNameListItem.displayName = "AvatarNameListItem"

export { AvatarNameListItem }
