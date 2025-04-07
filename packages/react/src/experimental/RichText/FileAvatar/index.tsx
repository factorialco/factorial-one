import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/ui/avatar"
import * as React from "react"
import { getFileTypeInfo } from "./utils"

type FileAvatarProps = React.ComponentPropsWithoutRef<typeof Avatar> & {
  file: File
}

/**
 * FileAvatar component displays a visual representation of a file type
 * with appropriate coloring based on the file extension or MIME type.
 */
const FileAvatar = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  FileAvatarProps
>(({ file, className, ...props }, ref) => {
  const { type: fileType, color: fileColor } = getFileTypeInfo(file)

  return (
    <Avatar
      ref={ref}
      className={cn(
        "border border-solid border-f1-border-secondary bg-f1-background",
        className
      )}
      {...props}
    >
      <AvatarFallback className={cn("text-xs font-semibold", fileColor)}>
        {fileType}
      </AvatarFallback>
    </Avatar>
  )
})
FileAvatar.displayName = "FileAvatar"

export { FileAvatar }
