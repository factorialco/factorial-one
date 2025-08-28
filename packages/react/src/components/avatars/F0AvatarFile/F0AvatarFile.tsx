import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, sizes } from "@/ui/avatar"
import { ElementRef, forwardRef } from "react"
import { FileDef } from "./types"
import { getFileTypeInfo } from "./utils"

type F0AvatarFileSize = Extract<
  (typeof sizes)[number],
  "small" | "medium" | "large"
>

export type F0AvatarFileProps = Omit<
  React.ComponentPropsWithoutRef<typeof Avatar>,
  "type"
> & {
  file: FileDef
  size?: F0AvatarFileSize
}

const F0AvatarFile = forwardRef<ElementRef<typeof Avatar>, F0AvatarFileProps>(
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
F0AvatarFile.displayName = "F0AvatarFile"

export { F0AvatarFile, type FileDef }
