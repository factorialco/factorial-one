import { Button } from "@/components/Actions/Button"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils"
import { getFileTypeInfo } from "../utils/files"

interface FileItemProps {
  file: File
  onRemoveFile: (index: number) => void
  index: number
  disabled: boolean
}

const FileItem = ({ file, onRemoveFile, index, disabled }: FileItemProps) => {
  const { type, color } = getFileTypeInfo(file)
  return (
    <div className="flex w-48 flex-row items-center gap-1.5 rounded-md bg-f1-background-secondary p-1 pr-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border-[1px] border-solid border-f1-border bg-f1-background">
        <p className={cn("text-sm font-semibold", color)}>{type}</p>
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
        onClick={() => onRemoveFile(index)}
        type="button"
        size="sm"
        disabled={disabled}
      />
    </div>
  )
}

interface FileListProps {
  files: File[]
  onRemoveFile: (index: number) => void
  disabled: boolean
}

const FileList = ({ files, onRemoveFile, disabled }: FileListProps) => {
  if (!files.length) return null

  return (
    <div className="absolute bottom-0 grid grid-cols-2 items-end gap-1 px-4 py-2">
      {files.map((file, index) => (
        <FileItem
          key={`${file.name}-${index}`}
          file={file}
          onRemoveFile={onRemoveFile}
          index={index}
          disabled={disabled}
        />
      ))}
    </div>
  )
}

export { FileList }
