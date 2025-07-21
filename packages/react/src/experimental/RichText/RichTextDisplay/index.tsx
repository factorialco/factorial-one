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
    // convert line breaks to <br> if no HTML tags are detected to be retro compatible with the old text
    const processedContent = /<[^>]*>/.test(content)
      ? content
      : content.replace(/\n/g, "<br>")

    return (
      <div
        ref={ref}
        className={cn("rich-text-display-container", className)}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(processedContent),
        }}
        {...props}
      />
    )
  }
)

export { RichTextDisplay }
export type { RichTextDisplayHandle, RichTextDisplayProps }
