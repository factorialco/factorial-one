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
    <div className="flex w-40 flex-row items-center gap-1.5 rounded-md bg-f1-background-secondary p-2">
      <div className="bg-neutral-0 flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
        <Icon icon={File} />
      </div>
      <div className="flex-grow">
        <p
          title={file.name}
          className="text-neutral-1000 overflow-hidden text-ellipsis text-sm font-medium"
        >
          {file.name}
        </p>
      </div>
      <div className="shrink-0">
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
    </div>
  )
}

const FileList = ({ files, onRemoveFile }: FileListProps) => {
  if (!files.length) return null

  return (
    <div className="flex flex-col gap-2 p-3">
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
