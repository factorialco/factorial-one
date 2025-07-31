/**
 * Alert tag cell type for displaying alert indicators with labels.
 * Used for showing alerts on items in data collections.
 */
import { FileAvatar } from "@/experimental/Information/Avatars/FileAvatar"
import { ComponentProps } from "react"

export type FileCellValue = ComponentProps<typeof FileAvatar>["file"]

export const FileCell = (args: FileCellValue) => (
  <div className="text-f1-text-default text-md flex items-center gap-2 font-medium">
    <FileAvatar file={args} /> <span>{args.name}</span>
  </div>
)
