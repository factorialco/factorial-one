import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"
import "../index.css"

interface RichTextDisplayProps extends HTMLAttributes<HTMLDivElement> {
  content: string
  className?: string
}

type RichTextDisplayHandle = HTMLDivElement

const RichTextDisplay = forwardRef<RichTextDisplayHandle, RichTextDisplayProps>(
  function RichTextDisplay({ content, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("ProseMirror", className)}
        dangerouslySetInnerHTML={{ __html: content }}
        {...props}
      />
    )
  }
)

export { RichTextDisplay }
export type { RichTextDisplayHandle, RichTextDisplayProps }
