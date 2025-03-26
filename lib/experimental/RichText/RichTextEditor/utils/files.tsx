import { FileType, filesConfig } from "./types"

const handleAddFiles = (
  newFiles: File[],
  files: File[],
  filesConfig: filesConfig | undefined,
  setFiles: (files: File[]) => void
) => {
  if (filesConfig) {
    const updatedFiles = filesConfig.multipleFiles
      ? [...files, ...newFiles]
      : newFiles
    setFiles(updatedFiles)
    filesConfig.onFiles(updatedFiles)
  }
}

const handleRemoveFile = (
  fileIndex: number,
  files: File[],
  filesConfig: filesConfig | undefined,
  setFiles: (files: File[]) => void
) => {
  if (filesConfig) {
    const updatedFiles = [...files]
    updatedFiles.splice(fileIndex, 1)
    setFiles(updatedFiles)
    filesConfig.onFiles(updatedFiles)
  }
}

const getAcceptFileTypeString = (
  filesConfig: filesConfig | undefined
): string => {
  if (
    filesConfig?.acceptedFileType &&
    filesConfig.acceptedFileType.length > 0
  ) {
    return filesConfig.acceptedFileType
      .map((type) => {
        switch (type) {
          case FileType.IMAGE:
            return "image/*"
          case FileType.VIDEO:
            return "video/*"
          case FileType.PDF:
            return "application/pdf"
          case FileType.DOC:
            return "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          case FileType.EXCEL:
            return "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          case FileType.PPT:
            return "application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation"
          case FileType.TXT:
            return "text/plain"
          case FileType.AUDIO:
            return "audio/*"
          case FileType.ARCHIVE:
            return ".zip,.rar,.tar,.gz,.7z"
          case FileType.CSV:
            return "text/csv"
          case FileType.HTML:
            return "text/html"
          case FileType.MARKDOWN:
            return "text/markdown"
          default:
            return ""
        }
      })
      .filter(Boolean)
      .join(", ")
  }
  return "*"
}

export { getAcceptFileTypeString, handleAddFiles, handleRemoveFile }
