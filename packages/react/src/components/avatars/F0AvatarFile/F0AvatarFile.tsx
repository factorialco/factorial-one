import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/ui/Avatar"
import { ElementRef, forwardRef } from "react"
import { BaseAvatarProps } from "../BaseAvatar"
import { AvatarFileSize, FileDef } from "./types"
import { getFileTypeInfo } from "./utils"

export type F0AvatarFileProps = Omit<
  React.ComponentPropsWithoutRef<typeof Avatar>,
  "type"
> & {
  file: FileDef
  size?: AvatarFileSize
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

const F0AvatarFile = forwardRef<ElementRef<typeof Avatar>, F0AvatarFileProps>(
  ({ file, ...props }, ref) => {
    const { type: fileType, color: fileColor } = getFileTypeInfo(file)

    return (
      <Avatar ref={ref} className={cn("bg-f1-background")} {...props}>
        <AvatarFallback className={cn("text-xs font-semibold", fileColor)}>
          {fileType}
        </AvatarFallback>
      </Avatar>
    )
  }
)
F0AvatarFile.displayName = "F0AvatarFile"

export { F0AvatarFile, type FileDef }
