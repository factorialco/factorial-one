import { Icon, IconType } from "../../../../components/Utilities/Icon"
import { AlertCircle, Warning } from "../../../../icons/app"
import { cn } from "../../../../lib/utils"
import { Avatar } from "../../Avatars/Avatar"
import { AvatarList } from "../../Avatars/AvatarList"
import { DotTag } from "../../Tags/DotTag"
import { RawTag } from "../../Tags/RawTag"
import { StatusTag } from "../../Tags/StatusTag"
import { MetadataItem, MetadataItemValue } from "./index"

const DATE_ICON_STYLES: Record<
  NonNullable<Extract<MetadataItemValue, { type: "date" }>["icon"]>,
  { icon: IconType; iconColor: string; textColor: string }
> = {
  warning: {
    icon: Warning,
    iconColor: "text-f1-icon-warning",
    textColor: "text-f1-foreground-warning",
  },
  critical: {
    icon: AlertCircle,
    iconColor: "text-f1-icon-critical",
    textColor: "text-f1-foreground-critical",
  },
}

export function MetadataValue({
  item,
  collapse = false,
}: {
  item: MetadataItem
  collapse?: boolean
}) {
  const { value } = item
  switch (value.type) {
    case "text":
      return <span>{value.content}</span>

    case "avatar":
      return (
        <div className="flex items-center gap-1">
          <Avatar avatar={value.variant} size="xsmall" />
          {value.text && <span>{value.text}</span>}
        </div>
      )

    case "status":
      return <StatusTag text={value.label} variant={value.variant} />
    case "list":
      return (
        <AvatarList
          avatars={value.avatars}
          size="xsmall"
          type={value.variant}
          max={3}
        />
      )

    case "data-list":
      return collapse ? (
        <div className="flex items-center justify-center gap-1 font-medium">
          {value.data[0]}
          {value.data.length > 1 && (
            <span className="tabular-nums text-f1-foreground-secondary">
              +{value.data.length - 1}
            </span>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {value.data.map((data) => (
            <span key={data}>{data}</span>
          ))}
        </div>
      )

    case "tag-list":
      return collapse ? (
        <div className="flex flex-wrap items-center justify-center gap-1 font-medium">
          <RawTag text={value.tags[0]} />
          {value.tags.length > 1 && (
            <span className="tabular-nums text-f1-foreground-secondary">
              +{value.tags.length - 1}
            </span>
          )}
        </div>
      ) : (
        <div
          className={cn(
            "flex flex-col gap-1 [&>div]:w-fit",
            value.tags.length > 1 && "-mt-[3px]"
          )}
        >
          {value.tags.map((tag) => (
            <RawTag key={tag} text={tag} />
          ))}
        </div>
      )

    case "dot-tag":
      return <DotTag text={value.label} color={value.color} />
    case "date": {
      if (value.icon === undefined) {
        return <span>{value.formattedDate}</span>
      }

      const { icon, iconColor, textColor } = DATE_ICON_STYLES[value.icon]
      return (
        <div className="flex items-center justify-center gap-0.5 font-medium">
          <Icon icon={icon} className={iconColor} />
          <span className={textColor}>{value.formattedDate}</span>
        </div>
      )
    }
  }
}
