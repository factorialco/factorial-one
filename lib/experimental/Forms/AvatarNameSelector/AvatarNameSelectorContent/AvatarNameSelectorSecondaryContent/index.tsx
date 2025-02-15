import { VirtualList2 } from "@/experimental/Navigation/VirtualList2"
import { useMemo } from "react"
import { AvatarNameListTag } from "../../AvatarNameListTag"
import { AvatarNamedEntity, AvatarNamedSubEntity } from "../../types"

export type FlattenedItem = {
  parent: AvatarNamedEntity
  subItem: AvatarNamedSubEntity
}

export const AvatarNameSelectorSecondaryContent = ({
  onSubItemRemove,
  selectedEntities,
  selectedLabel,
}: {
  onSubItemRemove: (
    parentEntity: AvatarNamedEntity,
    entity: AvatarNamedSubEntity
  ) => void
  selectedEntities: AvatarNamedEntity[]
  selectedLabel?: string
}) => {
  const flattenedList = useMemo<FlattenedItem[]>(() => {
    return selectedEntities.flatMap((entity) =>
      (entity.subItems ?? []).map((subItem) => ({
        parent: entity,
        subItem,
      }))
    )
  }, [selectedEntities])

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
        <VirtualList2
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
                  onSubItemRemove?.(current.parent, current.subItem)
                }
              />
            )
          }}
        />
      </div>
    </div>
  )
}
