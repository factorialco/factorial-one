import { FileItem } from "../../FileItem"

interface FileListProps {
  files: File[]
  onRemoveFile: (index: number) => void
  disabled: boolean
}

const FileList = ({ files, onRemoveFile, disabled }: FileListProps) => {
  if (!files.length) return null

  return (
    <div className="scrollbar-macos flex w-full items-end gap-2 overflow-x-auto py-2">
      {files.map((file, index) => (
        <FileItem
          key={`${file.name}-${index}`}
          file={file}
          onRemoveFile={() => onRemoveFile(index)}
          disabled={disabled}
        />
      ))}
    </div>
  )
}

export { FileList }
