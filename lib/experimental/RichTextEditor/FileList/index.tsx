import { Button, Icon } from "@/factorial-one"
import { Cross, File } from "@/icons/app"

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
  return (
    <div className="flex w-48 flex-row items-center gap-1.5 rounded-md bg-f1-background-secondary p-1">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-f1-background">
        <Icon icon={File} />
      </div>
      <p
        title={file.name}
        className="text-neutral-1000 overflow-hidden truncate text-ellipsis text-sm font-medium"
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
    <div className="flex flex-col gap-2 py-3">
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
