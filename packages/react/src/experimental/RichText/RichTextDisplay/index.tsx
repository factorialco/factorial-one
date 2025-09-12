import { cn } from "@/lib/utils"
import DOMPurify from "dompurify"
import { forwardRef, HTMLAttributes } from "react"
import "../index.css"

interface RichTextDisplayProps extends HTMLAttributes<HTMLDivElement> {
  content: string
  className?: string
}

type RichTextDisplayHandle = HTMLDivElement

const RichTextDisplay = forwardRef<RichTextDisplayHandle, RichTextDisplayProps>(
  function RichTextDisplay({ content, className, ...props }, ref) {
    const isHtml = /<[^>]*>/.test(content)

    return (
      <div
        ref={ref}
        className={cn(
          "rich-text-display-container",
          !isHtml && "whitespace-pre-wrap",
          className
        )}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
        {...props}
      />
    )
  }
)

export { RichTextDisplay }
export type { RichTextDisplayHandle, RichTextDisplayProps }
