import { VirtualList } from "@/experimental/Navigation/VirtualList"
import { useMemo } from "react"
import { AvatarNameListTag } from "../../AvatarNameListTag"
import { AvatarNamedEntity, AvatarNamedSubEntity } from "../../types"

export type FlattenedItem = {
  parent: AvatarNamedEntity | null
  subItem: AvatarNamedSubEntity
}

export const AvatarNameSelectorSecondaryContent = ({
  groupView,
  onSubItemRemove,
  onRemove,
  selectedEntities,
  selectedLabel,
}: {
  groupView: boolean
  onRemove: (entity: AvatarNamedEntity) => void
  onSubItemRemove: (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => void
  selectedEntities: AvatarNamedEntity[]
  selectedLabel?: string
}) => {
  const flattenedList = useMemo<FlattenedItem[]>(() => {
    return !groupView
      ? selectedEntities.map((el) => ({
          parent: null,
          subItem: {
            subId: el.id,
            subName: el.name,
            subAvatar: el.avatar,
          } as AvatarNamedSubEntity,
        }))
      : selectedEntities.flatMap((entity) =>
          (entity.subItems ?? []).map((subItem) => ({
            parent: entity,
            subItem,
          }))
        )
  }, [groupView, selectedEntities])

  const totalSelectedSubItems = flattenedList.length

  return (
    <div className="w-56 flex-col rounded-r-xl">
      <div className="flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl">
        {selectedLabel && (
          <span className="my-auto text-f1-foreground-secondary">
            {totalSelectedSubItems} {selectedLabel}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2">
        <VirtualList
          height={419}
          itemCount={totalSelectedSubItems}
          itemSize={30}
          renderer={(vi) => {
            const current = flattenedList[vi.index]
            if (!current) {
              return <></>
            }
            return (
              <AvatarNameListTag
                entity={current.subItem}
                onRemove={() =>
                  current.parent
                    ? onSubItemRemove?.(current.parent, current.subItem)
                    : onRemove({
                        id: current.subItem.subId,
                        name: current.subItem.subName,
                        avatar: current.subItem.subAvatar,
                      })
                }
              />
            )
          }}
        />
      </div>
    </div>
  )
}
