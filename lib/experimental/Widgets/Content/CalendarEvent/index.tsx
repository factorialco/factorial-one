import { Icon, IconType } from "@/components/Utilities/Icon"
import { DateAvatar } from "@/experimental/Information/Avatars/DateAvatar"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { ChevronRight } from "@/icons/app"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type Tag = {
  icon: IconType
  label?: string
  description?: string
}

const Tags = ({ tags, right }: { tags: Tag[]; right?: boolean }) => (
  <div
    className={cn(
      "flex flex-1 flex-row items-center gap-1.5",
      right && "justify-end"
    )}
  >
    {tags.map((tag) => (
      <Tooltip key={tag.label} label={tag.label} description={tag.description}>
        <div>
          <RawTag icon={tag.icon} />
        </div>
      </Tooltip>
    ))}
  </div>
)

export interface CalendarEventProps {
  label?: string
  title: string
  subtitle: string
  description: string
  color: string
  isPending: boolean
  leftTags?: Tag[]
  rightTags?: Tag[]
  fromDate?: Date
  toDate: Date
  showBackground?: boolean
}

export const CalendarEvent = forwardRef<HTMLDivElement, CalendarEventProps>(
  function CalendarEvent(
    {
      label,
      title,
      subtitle,
      description,
      color,
      isPending,
      leftTags,
      rightTags,
      fromDate,
      toDate,
      showBackground = true,
    },
    ref
  ) {
    return (
      <div
        ref={ref}
        className="relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2"
      >
        {showBackground && (
          <>
            <div
              className="absolute bottom-0 left-0 right-0 top-0 -z-10 opacity-5"
              style={{
                background: `${color}`,
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 top-0 -z-10 opacity-5"
              style={{
                background: `linear-gradient(to right, ${color}, transparent)`,
              }}
            />
          </>
        )}

        <div
          className="min-h-10 min-w-1 rounded-2xs"
          style={
            isPending
              ? {
                  backgroundImage: `repeating-linear-gradient(
              135deg,
              ${color} 0px,
              ${color} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`,
                }
              : {
                  backgroundColor: color,
                }
          }
        />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-row items-start gap-2.5">
            <div className="flex flex-1 flex-col gap-0.5">
              {!!label && (
                <p className="line-clamp-1 text-sm text-f1-foreground-secondary">
                  {label}
                </p>
              )}
              <p className="line-clamp-3 font-medium">
                {title}
                {!!subtitle && (
                  <span className="pl-1 font-normal text-f1-foreground-secondary">{`· ${subtitle}`}</span>
                )}
              </p>
              <p className="text-f1-foreground-secondary">{description}</p>
            </div>
            <div className="flex flex-row items-center">
              {fromDate && (
                <>
                  <DateAvatar date={fromDate} />
                  <Icon
                    icon={ChevronRight}
                    size="sm"
                    className="text-f1-foreground-tertiary"
                  />
                </>
              )}
              {toDate && <DateAvatar date={toDate} />}
            </div>
          </div>
          {(leftTags || rightTags) && (
            <div className="flex flex-row items-center justify-between">
              {leftTags && <Tags tags={leftTags} />}
              {rightTags && <Tags tags={rightTags} right />}
            </div>
          )}
        </div>
      </div>
    )
  }
)
