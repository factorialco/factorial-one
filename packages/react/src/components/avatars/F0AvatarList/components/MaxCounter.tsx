import { Icon } from "@/components/Utilities/Icon"
import { EllipsisHorizontal } from "@/icons/app"
import { cn } from "@/lib/utils"
import { type } from "@/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { cva } from "cva"
import { AvatarVariant, F0Avatar } from "../../F0Avatar"
import { type AvatarListSize } from "../types"
import { getAvatarDisplayName } from "../utils"

const sizeVariants = cva({
  base: "flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary",
  variants: {
    size: {
      xsmall: "h-5 w-5 rounded-xs text-sm",
      small: "h-6 min-w-6 rounded-sm px-1 text-sm",
      medium: "h-8 min-w-8 rounded px-1.5",
    } satisfies Record<AvatarListSize, string>,
    type: {
      base: "",
      rounded: "!rounded-full",
    } satisfies Record<(typeof type)[number], string>,
  },
  compoundVariants: [
    {
      size: "small",
      type: "rounded",
      className: "px-1.5",
    },
    {
      size: "medium",
      type: "rounded",
      className: "px-2",
    },
  ],
  defaultVariants: {
    size: "medium",
    type: "base",
  },
})

type Props = {
  count: number
  size?: AvatarListSize
  type?: (typeof type)[number]
  list?: AvatarVariant[]
}

export const MaxCounter = ({
  count,
  size = "medium",
  type = "base",
  list,
}: Props) => {
  const counter = (
    <div
      className={cn("cursor-default font-medium", sizeVariants({ size, type }))}
    >
      {size === "xsmall" ? (
        <Icon icon={EllipsisHorizontal} size="xs" />
      ) : (
        `+${count}`
      )}
    </div>
  )

  if (!list?.length) return counter

  return (
    <HoverCard>
      <HoverCardTrigger asChild>{counter}</HoverCardTrigger>
      <HoverCardContent side="top">
        <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col">
          {list.map((avatar, index) => (
            <div
              key={index}
              className="flex w-[180px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2"
            >
              <div className="h-6 w-6 shrink-0">
                <F0Avatar avatar={avatar} size="small" />
              </div>
              <div className="min-w-0 flex-1 truncate font-semibold">
                {getAvatarDisplayName(avatar)}
              </div>
            </div>
          ))}
          <ScrollBar
            orientation="vertical"
            className="[&_div]:bg-f1-background"
          />
        </ScrollArea>
      </HoverCardContent>
    </HoverCard>
  )
}
