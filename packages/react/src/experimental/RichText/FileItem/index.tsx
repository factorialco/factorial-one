import { Icon } from "@/components/Utilities/Icon"
import { FileAvatar } from "@/experimental/exports"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { CrossedCircle } from "@/icons/app"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface FileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  file: File
  onRemoveFile: () => void
  disabled: boolean
}

const FileItem = forwardRef<HTMLDivElement, FileItemProps>(
  ({ file, onRemoveFile, disabled, className, ...props }, ref) => {
    return (
      <Tooltip label={file.name}>
        <div
          ref={ref}
          className={cn(
            "flex w-fit max-w-48 flex-row items-center gap-1.5 rounded-md bg-f1-background-tertiary p-0.5 pr-2",
            className
          )}
          {...props}
        >
          <FileAvatar file={file} />
          <p
            title={file.name}
            className="text-neutral-1000 grow overflow-hidden truncate text-ellipsis text-sm font-medium"
          >
            {file.name}
          </p>

          <Icon
            size="md"
            icon={CrossedCircle}
            className={cn(
              "cursor-pointer text-f1-icon",
              disabled ? "cursor-not-allowed" : "hover:text-f1-icon-bold"
            )}
            onClick={disabled ? undefined : onRemoveFile}
          />
        </div>
      </Tooltip>
    )
  }
)
FileItem.displayName = "FileItem"

export { FileItem }
