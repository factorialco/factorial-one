import { BaseAvatar } from "@/core/components/experimental/Information/Avatars/BaseAvatar"
import { BaseTag } from "@/core/components/experimental/Information/Tags/BaseTag"
import { Icon } from "@/core/components/utility/Icon"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import { AvatarNamedEntity, AvatarNamedSubEntity } from "../types.ts"

const AvatarNameListTagContent = <T extends { avatar?: string; name: string }>({
  entity,
  onRemove,
}: {
  entity: T
  onRemove?: (entity: T) => void
}) => {
  return (
    <div className="pb-[6px]">
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
            onClick={() => onRemove?.(entity)}
          />
        }
        text={entity.name}
      />
    </div>
  )
}

export const AvatarNameListTag = ({
  groupView,
  entity,
  subItemsSelected,
  onSubItemRemove,
  onRemove,
}: {
  groupView: boolean
  entity: AvatarNamedEntity
  subItemsSelected: AvatarNamedSubEntity[]
  onSubItemRemove: (entity: AvatarNamedSubEntity) => void
  onRemove: (entity: AvatarNamedEntity) => void
}) => {
  return (
    <>
      {!groupView && (
        <AvatarNameListTagContent entity={entity} onRemove={onRemove} />
      )}
      {groupView &&
        subItemsSelected.map((el) => (
          <AvatarNameListTagContent
            key={el.subId}
            entity={{
              avatar: el.subAvatar,
              name: el.subName,
            }}
            onRemove={() => onSubItemRemove?.(el)}
          />
        ))}
    </>
  )
}
