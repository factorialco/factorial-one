import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, sizes } from "@/ui/avatar"
import { ElementRef, forwardRef } from "react"
import { FileDef } from "./types"
import { getFileTypeInfo } from "./utils"

type FileAvatarSize = Extract<
  (typeof sizes)[number],
  "small" | "medium" | "large"
>

export type FileAvatarProps = Omit<
  React.ComponentPropsWithoutRef<typeof Avatar>,
  "type"
> & {
  file: FileDef
  size?: FileAvatarSize
}

const FileAvatar = forwardRef<ElementRef<typeof Avatar>, FileAvatarProps>(
  ({ file, className, ...props }, ref) => {
    const { type: fileType, color: fileColor } = getFileTypeInfo(file)

    return (
      <Avatar
        ref={ref}
        className={cn("bg-f1-background", className)}
        {...props}
      >
        <AvatarFallback className={cn("text-xs font-semibold", fileColor)}>
          {fileType}
        </AvatarFallback>
      </Avatar>
    )
  }
)
FileAvatar.displayName = "FileAvatar"

export { FileAvatar, type FileDef }
