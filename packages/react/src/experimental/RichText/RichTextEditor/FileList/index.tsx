import { FileItem } from "../../FileItem"

interface FileListProps {
  files: File[]
  onRemoveFile: (index: number) => void
  disabled: boolean
}

const FileList = ({ files, onRemoveFile, disabled }: FileListProps) => {
  if (!files.length) return null

  return (
    <div className="flex w-full items-end gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:thin]">
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
