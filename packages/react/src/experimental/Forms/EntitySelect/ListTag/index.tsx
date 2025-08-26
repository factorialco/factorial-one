import { BaseTag } from "../../../../components/F0Tags/BaseTag"
import { Icon } from "../../../../components/Utilities/Icon"
import { Cross } from "../../../../icons/app"
import { cn } from "../../../../lib/utils"
import { BaseAvatar } from "../../../Information/Avatars/BaseAvatar"
import { EntitySelectSubEntity } from "../types"

export const ListTag = ({
  entity,
  onRemove,
  disabled = false,
  hiddenAvatar = false,
}: {
  entity: EntitySelectSubEntity
  onRemove: (entity: EntitySelectSubEntity) => void
  disabled?: boolean
  hiddenAvatar?: boolean
}) => {
  return (
    <div className="pr-2 pt-1.5">
      <BaseTag
        className={cn(
          "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
          "rounded-full",
          hiddenAvatar ? "pl-2" : "pl-0"
        )}
        left={
          !hiddenAvatar && (
            <BaseAvatar
              src={entity.subAvatar}
              name={entity.subName}
              size="xsmall"
              type="rounded"
            />
          )
        }
        right={
          !disabled && (
            <Icon
              icon={Cross}
              size="sm"
              className="cursor-pointer text-f1-icon-secondary"
              onClick={() => onRemove?.(entity)}
            />
          )
        }
        text={entity.subName}
      />
    </div>
  )
}
