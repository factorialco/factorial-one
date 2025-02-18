import { Icon } from "@/components/Utilities/Icon"
import { EllipsisHorizontal } from "@/icons/app"
import { sizes, type } from "@/ui/avatar"
import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"
import { cva } from "cva"
import { type AvatarVariant } from "../Avatar"

const sizeVariants = cva({
  base: "flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary",
  variants: {
    size: {
      xsmall: "h-5 w-5 rounded-xs text-sm",
      small: "h-6 min-w-6 rounded-sm px-1 text-sm",
      medium: "h-8 min-w-8 rounded px-1.5",
      large: "h-14 min-w-14 rounded-xl px-3 text-xl",
      xlarge: "h-18 min-w-18 rounded-[20px] px-4 text-2xl",
    },
    type: {
      base: "",
      rounded: "!rounded-full",
    },
  },
  defaultVariants: {
    size: "medium",
    type: "base",
  },
})

type Props = {
  count: number
  size?: (typeof sizes)[number]
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
    <div className={sizeVariants({ size, type })}>
      {size === "xsmall" ? (
        <Icon icon={EllipsisHorizontal} size="xs" />
      ) : (
        `+${count}`
      )}
    </div>
  )

  if (!list?.length) return counter

  return (
    <TooltipProvider>
      <TooltipPrimitive>
        <TooltipTrigger asChild>{counter}</TooltipTrigger>
        <TooltipContent>
          <div className="flex flex-col gap-1">
            {list.map((avatar, index) => (
              <div key={index}>
                {avatar.type === "person"
                  ? `${avatar.firstName} ${avatar.lastName}`
                  : avatar.name}
              </div>
            ))}
          </div>
        </TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  )
}
