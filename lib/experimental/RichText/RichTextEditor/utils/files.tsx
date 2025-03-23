import { find, keys } from "lodash"

/**
 * Describes the information to be displayed for a file type,
 * such as a label and a color (e.g., a CSS class).
 */
export type FileTypeInfo = {
  /** A string that labels the file type (e.g., "PDF", "IMG", "VID") */
  type: string
  /** A string for color or a CSS class name (e.g., "text-f1-foreground") */
  color: string
}

/**
 * The main map that defines the label and color
 * for each supported file type.
 *
 * Feel free to adjust `color` values to match your design system.
 */
export const FILE_TYPE_MAP: Record<string, FileTypeInfo> = {
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

/**
 * A mapping of keywords found within the MIME type string
 * to the corresponding file type key in `FILE_TYPE_MAP`.
 */
export const MIME_MATCH_MAP: Record<string, keyof typeof FILE_TYPE_MAP> = {
  pdf: "pdf",
  image: "image",
  word: "doc",
  excel: "excel",
  powerpoint: "ppt",
  text: "txt", // covers "text/plain", "text/html", etc.
  video: "video",
  audio: "audio",
  // If you want to detect archives by MIME, you might add "zip" => "archive"
  // but sometimes MIME can be "application/zip", "application/x-rar-compressed" etc.
}

/**
 * A mapping of file extensions to the corresponding
 * file type key in `FILE_TYPE_MAP`.
 */
export const EXTENSION_MAP: Record<string, keyof typeof FILE_TYPE_MAP> = {
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

/**
 * Determines the file type (label and color) by inspecting
 * the MIME type and extension of the provided `File`. If no
 * match is found, a default file type is returned.
 *
 * @param file - The file to be analyzed.
 * @returns An object containing `type` and `color` corresponding
 *          to the file's recognized type, or a default if unmatched.
 */
export function getFileTypeInfo(file: File): FileTypeInfo {
  const mimeType = file.type.toLowerCase()

  // 1) Check if the MIME type matches any key in MIME_MATCH_MAP
  const matchedMimeKey = find(keys(MIME_MATCH_MAP), (key) =>
    mimeType.includes(key)
  )
  if (matchedMimeKey) {
    return FILE_TYPE_MAP[MIME_MATCH_MAP[matchedMimeKey]]
  }

  // 2) If no match by MIME, look for a matching file extension
  const extension = file.name.toLowerCase().split(".").pop()
  if (extension && EXTENSION_MAP[extension]) {
    return FILE_TYPE_MAP[EXTENSION_MAP[extension]]
  }

  // 3) Return the default file type if none of the above matched
  return FILE_TYPE_MAP.default
}
