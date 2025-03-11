import { Icon, IconType } from "@/components/Utilities/Icon"
import { Avatar } from "@/experimental/Information/Avatars/Avatar"
import { AvatarList } from "@/experimental/Information/Avatars/AvatarList"
import { DotTag } from "@/experimental/Information/Tags/DotTag"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { StatusTag } from "@/experimental/Information/Tags/StatusTag"
import { AlertCircle, Warning } from "@/icons/app"
import { cn } from "@/lib/utils"
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
  switch (item.value.type) {
    case "text":
      return <span>{item.value.content}</span>

    case "avatar":
      return (
        <div className="flex items-center gap-1">
          <Avatar avatar={item.value.variant} size="xsmall" />
          {item.value.text && <span>{item.value.text}</span>}
        </div>
      )

    case "status":
      return <StatusTag text={item.value.label} variant={item.value.variant} />
    case "list":
      return (
        <AvatarList
          avatars={item.value.avatars}
          size="xsmall"
          type={item.value.variant}
          max={3}
        />
      )

    case "data-list":
      return collapse ? (
        <div className="flex items-center justify-center gap-1 font-medium">
          {item.value.data[0]}
          {item.value.data.length > 1 && (
            <span className="tabular-nums text-f1-foreground-secondary">
              +{item.value.data.length - 1}
            </span>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {item.value.data.map((data) => (
            <span key={data}>{data}</span>
          ))}
        </div>
      )

    case "tag-list":
      return collapse ? (
        <div className="flex flex-wrap items-center justify-center gap-1 font-medium">
          <RawTag text={item.value.tags[0]} />
          {item.value.tags.length > 1 && (
            <span className="tabular-nums text-f1-foreground-secondary">
              +{item.value.tags.length - 1}
            </span>
          )}
        </div>
      ) : (
        <div
          className={cn(
            "flex flex-col gap-1 [&>div]:w-fit",
            item.value.tags.length > 1 && "-mt-[3px]"
          )}
        >
          {item.value.tags.map((tag) => (
            <RawTag key={tag} text={tag} />
          ))}
        </div>
      )

    case "dot-tag":
      return <DotTag text={item.value.label} color={item.value.color} />
    case "date": {
      if (item.value.icon === undefined) {
        return <span>{item.value.formattedDate}</span>
      }

      const { icon, iconColor, textColor } = DATE_ICON_STYLES[item.value.icon]
      return (
        <div className="flex items-center justify-center gap-0.5 font-medium">
          <Icon icon={icon} className={iconColor} />
          <span className={textColor}>{item.value.formattedDate}</span>
        </div>
      )
    }
  }
}
