import { ScrollArea } from "@/ui/scrollarea"
import { AvatarNameListTag } from "../AvatarNameListTag"
import { AvatarNamedEntity, AvatarNamedSubEntity } from "../types"

export const AvatarNameSelectorSecondaryContent = ({
  groupView,
  onRemove,
  onSubItemRemove,
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
  singleSelector?: boolean
  loading?: boolean
}) => {
  const totalSelectedSubItems = groupView
    ? selectedEntities.reduce(
        (acc, entity) => acc + (entity.subItems?.length ?? 0),
        0
      )
    : selectedEntities.length

  return (
    <div className="w-56 flex-col rounded-r-xl">
      <div className="flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl">
        {selectedLabel && (
          <span className="my-auto text-f1-foreground-secondary">
            {totalSelectedSubItems} {selectedLabel}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 rounded-br-xl bg-f1-background px-3 pb-0">
        <ScrollArea
          className="-mr-3 pr-3 pt-1.5"
          style={{ height: "calc(24rem + 40px)" }}
        >
          {selectedEntities.map((entity) => (
            <AvatarNameListTag
              groupView={groupView}
              key={entity.id}
              entity={entity}
              subItemsSelected={entity.subItems ?? []}
              onSubItemRemove={(subItem) => onSubItemRemove?.(entity, subItem)}
              onRemove={onRemove}
            />
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}
