import { find, keys } from "lodash"
import { FileType, filesConfig } from "./types"

type FileTypeInfo = {
  type: string
  color: string
}

const FILE_TYPE_MAP: Record<string, FileTypeInfo> = {
  pdf: {
    type: "PDF",
    color: "text-f1-foreground-accent",
  },
  image: {
    type: "IMG",
    color: "text-f1-foreground-info",
  },
  doc: {
    type: "DOC",
    color: "text-f1-foreground-info",
  },
  excel: {
    type: "XLS",
    color: "text-f1-foreground-positive",
  },
  ppt: {
    type: "PPT",
    color: "text-f1-foreground-warning",
  },
  txt: {
    type: "TXT",
    color: "text-f1-foreground-secondary",
  },
  video: {
    type: "VID",
    color: "text-f1-foreground-info",
  },
  audio: {
    type: "AUD",
    color: "text-f1-foreground-accent",
  },
  archive: {
    type: "ZIP",
    color: "text-f1-foreground-warning",
  },
  csv: {
    type: "CSV",
    color: "text-f1-foreground-positive",
  },
  html: {
    type: "HTML",
    color: "text-f1-foreground-accent",
  },
  markdown: {
    type: "MD",
    color: "text-f1-foreground-secondary",
  },
  default: {
    type: "FILE",
    color: "text-f1-foreground",
  },
}

const MIME_MATCH_MAP: Record<string, keyof typeof FILE_TYPE_MAP> = {
  pdf: "pdf",
  image: "image",
  word: "doc",
  excel: "excel",
  powerpoint: "ppt",
  text: "txt",
  video: "video",
  audio: "audio",
  archive: "archive",
  csv: "csv",
  html: "html",
  markdown: "markdown",
  zip: "archive",
  rar: "archive",
  tar: "archive",
  gz: "archive",
  "7z": "archive",
}

const EXTENSION_MAP: Record<string, keyof typeof FILE_TYPE_MAP> = {
  // PDF
  pdf: "pdf",
  // Images
  jpg: "image",
  jpeg: "image",
  png: "image",
  gif: "image",
  svg: "image",
  // Word documents
  doc: "doc",
  docx: "doc",
  // Excel spreadsheets
  xls: "excel",
  xlsx: "excel",
  csv: "csv",
  // PowerPoint
  ppt: "ppt",
  pptx: "ppt",
  // Plain text
  txt: "txt",
  // Video
  mp4: "video",
  mov: "video",
  mkv: "video",
  avi: "video",
  webm: "video",
  // Audio
  mp3: "audio",
  wav: "audio",
  flac: "audio",
  ogg: "audio",
  // Archives
  zip: "archive",
  rar: "archive",
  tar: "archive",
  gz: "archive",
  "7z": "archive",
  // HTML
  html: "html",
  htm: "html",
  // Markdown
  md: "markdown",
  markdown: "markdown",
}

const getFileTypeInfo = (file: File): FileTypeInfo => {
  const mimeType = file.type.toLowerCase()

  const matchedMimeKey = find(keys(MIME_MATCH_MAP), (key) =>
    mimeType.includes(key)
  )

  if (matchedMimeKey) {
    return FILE_TYPE_MAP[MIME_MATCH_MAP[matchedMimeKey]]
  }

  const extension = file.name.toLowerCase().split(".").pop()

  if (extension && EXTENSION_MAP[extension]) {
    return FILE_TYPE_MAP[EXTENSION_MAP[extension]]
  }

  return FILE_TYPE_MAP.default
}

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

export {
  getAcceptFileTypeString,
  getFileTypeInfo,
  handleAddFiles,
  handleRemoveFile,
}
