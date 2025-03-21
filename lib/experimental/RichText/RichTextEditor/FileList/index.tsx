import { Button } from "@/components/Actions/Button"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils"
import { getFileTypeInfo } from "../utils/files"

interface FileListProps {
  files: File[]
  onRemoveFile: (index: number) => void
}

interface FileItemProps {
  file: File
  onRemoveFile: (index: number) => void
  index: number
}

const FileItem = ({ file, onRemoveFile, index }: FileItemProps) => {
  const { type, color } = getFileTypeInfo(file)
  return (
    <div className="flex w-48 flex-row items-center gap-1.5 rounded-md bg-f1-background-secondary p-1">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-f1-background">
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
      />
    </div>
  )
}

const FileList = ({ files, onRemoveFile }: FileListProps) => {
  if (!files.length) return null

  return (
    <div className="absolute bottom-0 grid grid-cols-2 items-end gap-2 px-4 py-3">
      {files.map((file, index) => (
        <FileItem
          key={`${file.name}-${index}`}
          file={file}
          onRemoveFile={onRemoveFile}
          index={index}
        />
      ))}
    </div>
  )
}

export { FileList }
