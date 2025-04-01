import { Button } from "@/components/Actions/Button"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils"
import { getFileTypeInfo } from "./utils"

interface FileItemProps {
  file: File
  onRemoveFile: () => void
  disabled: boolean
}

const FileItem = ({ file, onRemoveFile, disabled }: FileItemProps) => {
  const { type, color } = getFileTypeInfo(file)
  return (
    <Tooltip label={file.name}>
      <div className="flex w-48 flex-row items-center gap-1.5 rounded-md bg-f1-background-secondary p-1 pr-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border-[1px] border-solid border-f1-border bg-f1-background">
          <p className={cn("text-xs font-semibold", color)}>{type}</p>
        </div>
        <p
          title={file.name}
          className="text-neutral-1000 grow overflow-hidden truncate text-ellipsis text-sm font-medium"
        >
          {file.name}
        </p>
        <Button
          variant="ghost"
          icon={Cross}
          hideLabel
          round
          label="Delete"
          onClick={onRemoveFile}
          type="button"
          size="sm"
          disabled={disabled}
        />
      </div>
    </Tooltip>
  )
}

export { FileItem }
