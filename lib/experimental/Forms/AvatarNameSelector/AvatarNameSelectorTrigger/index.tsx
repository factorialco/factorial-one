import { Icon } from "@/components/Utilities/Icon"
import { PersonAvatar } from "@/experimental/exports"
import { ChevronDown } from "@/icons/app"
import { useMemo } from "react"
import {
  AvatarNamedEntity,
  AvatarNamedSubEntity,
  FlattenedItem,
} from "../types"

export const AvatarNameSelectorTrigger = ({
  placeholder,
  selected,
  selectedAvatarName,
}: {
  placeholder: string
  selected: string
  selectedAvatarName: AvatarNamedEntity[]
}) => {
  const groupView = useMemo(
    () =>
      selectedAvatarName.some(
        (entity) => entity.subItems && entity.subItems.length > 0
      ),
    [selectedAvatarName]
  )
  const flattenedList = useMemo<FlattenedItem[]>(() => {
    return !groupView
      ? selectedAvatarName.map((el) => ({
          parent: null,
          subItem: {
            subId: el.id,
            subName: el.name,
            subAvatar: el.avatar,
          } as AvatarNamedSubEntity,
        }))
      : selectedAvatarName.flatMap((entity) =>
          (entity.subItems ?? []).map((subItem) => ({
            parent: entity,
            subItem,
          }))
        )
  }, [groupView, selectedAvatarName])

  return (
    <div className="flex cursor-pointer justify-between rounded border border-solid border-f1-border p-2">
      <span className="my-auto pl-1 text-f1-foreground-secondary">
        {flattenedList.length === 0 ? (
          placeholder
        ) : flattenedList.length === 1 ? (
          <div className="flex flex-row gap-2 p-0">
            <PersonAvatar
              firstName={flattenedList[0].subItem.subName}
              lastName={""}
              src={flattenedList[0].subItem.subAvatar}
              size="xsmall"
            />
            <span>{flattenedList[0].subItem.subName}</span>
          </div>
        ) : (
          flattenedList.length + " " + selected
        )}
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
  )
}
