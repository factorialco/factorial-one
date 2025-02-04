import { sizes } from "@/ui/avatar"
import { cva } from "cva"
import { Avatar, AvatarVariant } from "../Avatar"
import { getMask } from "./utils"

type AvatarType = AvatarVariant["type"]

const avatarListVariants = cva({
  base: "flex items-center",
  variants: {
    size: {
      xsmall: "-space-x-0.5",
      small: "-space-x-[3px]",
      medium: "-space-x-1",
      large: "-space-x-2",
      xlarge: "-space-x-3",
    } satisfies Record<(typeof sizes)[number], string>,
  },
  defaultVariants: {
    size: "medium",
  },
})

type Props = {
  avatars: AvatarVariant[]
  size?: (typeof sizes)[number]
  type?: AvatarType
}

export const AvatarList = ({ avatars, size = "medium", type }: Props) => {
  return (
    <div className={avatarListVariants({ size })}>
      {avatars.map((avatar, index) => (
        <div
          className="flex h-fit w-fit items-center justify-center overflow-hidden"
          key={index}
          style={
            index !== avatars.length - 1
              ? {
                  clipPath: getMask.get(
                    type === "person" ? "rounded" : "base",
                    size
                  ),
                }
              : undefined
          }
        >
          <Avatar avatar={avatar} size={size} />
        </div>
      ))}
    </div>
  )
}

AvatarList.displayName = "AvatarList"
