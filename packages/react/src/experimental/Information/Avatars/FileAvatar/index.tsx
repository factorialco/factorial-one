import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/ui/avatar"
import { ElementRef, forwardRef } from "react"
import { getFileTypeInfo } from "./utils"

type FileAvatarProps = React.ComponentPropsWithoutRef<typeof Avatar> & {
  file: File
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

export { FileAvatar }
