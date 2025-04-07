import { Icon } from "@/components/Utilities/Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { CrossedCircle } from "@/icons/app"
import { cn } from "@/lib/utils"
import { FileAvatar } from "../FileAvatar"

interface FileItemProps {
  file: File
  onRemoveFile: () => void
  disabled: boolean
}

const FileItem = ({ file, onRemoveFile, disabled }: FileItemProps) => {
  return (
    <Tooltip label={file.name}>
      <div className="flex w-fit max-w-48 flex-row items-center gap-1.5 rounded-md bg-f1-background-tertiary p-0.5 pr-2">
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

export { FileItem }
