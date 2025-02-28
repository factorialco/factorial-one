import { VirtualList } from "@/experimental/Navigation/VirtualList"
import { motion } from "framer-motion"
import { useMemo } from "react"
import { AvatarNameListTag } from "../../AvatarNameListTag"
import {
  AvatarNamedEntity,
  AvatarNamedSubEntity,
  FlattenedItem,
} from "../../types"

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
    <div className="w-full flex-col rounded-r-xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { delay: 0.3, duration: 0.5 },
        }}
        className="flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl"
      >
        {selectedLabel && (
          <span className="my-auto text-f1-foreground-secondary">
            {totalSelectedSubItems} {selectedLabel}
          </span>
        )}
      </motion.div>
      <div className="flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2">
        <VirtualList
          height={425}
          itemCount={totalSelectedSubItems}
          itemSize={30}
          className="overflow-x-hidden"
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
