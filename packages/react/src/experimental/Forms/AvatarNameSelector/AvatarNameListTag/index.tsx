import { Icon } from "../../../../components/Utilities/Icon"
import { BaseAvatar } from "../../../Information/Avatars/BaseAvatar"
import { BaseTag } from "../../../Information/Tags/BaseTag"
import { Cross } from "../../../../icons/app"
import { cn } from "../../../../lib/utils"
import { AvatarNamedSubEntity } from "../types"

export const AvatarNameListTag = ({
  entity,
  onRemove,
  disabled = false,
}: {
  entity: AvatarNamedSubEntity
  onRemove: (entity: AvatarNamedSubEntity) => void
  disabled?: boolean
}) => {
  return (
    <div className="pr-2 pt-1.5">
      <BaseTag
        className={cn(
          "max-w-54 w-fit gap-1 text-ellipsis border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
          "rounded-full"
        )}
        left={
          <BaseAvatar
            src={entity.subAvatar}
            name={entity.subName}
            size="xsmall"
            type="rounded"
          />
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
