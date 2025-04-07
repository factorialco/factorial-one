import { cn } from "@/lib/utils"
import { getFileTypeInfo } from "./utils"

interface FileAvatarProps {
  file: File
  className?: string
}

/**
 * FileAvatar component displays a visual representation of a file type
 * with appropriate coloring based on the file extension or MIME type.
 */
const FileAvatar = ({ file, className }: FileAvatarProps) => {
  const { type, color } = getFileTypeInfo(file)

  return (
    <div
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background",
        className
      )}
    >
      <p className={cn("text-xs font-semibold", color)}>{type}</p>
    </div>
  )
}

export { FileAvatar }
