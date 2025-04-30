import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { forwardRef, HTMLAttributes } from "react"
import "../index.css"

interface RichTextDisplayProps extends HTMLAttributes<HTMLDivElement> {
  content: string
  collapsed?: boolean
  className?: string
}

type RichTextDisplayHandle = HTMLDivElement

const BaseRichTextDisplay = forwardRef<
  RichTextDisplayHandle,
  RichTextDisplayProps
>(function RichTextDisplay({ content, className, collapsed, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "rich-text-display-container",
        className,
        collapsed && "line-clamp-5"
      )}
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  )
})

export const RichTextDisplaySkeleton = () => (
  <div className="flex flex-col justify-around gap-3 py-2">
    <Skeleton className="h-2.5 w-1/2 rounded-2xs" />
    <Skeleton className="h-2.5 w-2/3 rounded-2xs" />
  </div>
)

export const RichTextDisplay = withSkeleton(
  BaseRichTextDisplay,
  RichTextDisplaySkeleton
)

export type { RichTextDisplayHandle, RichTextDisplayProps }
