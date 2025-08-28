import { Button, CopyButton } from "@/components/Actions/Button"
import { Spinner } from "@/experimental"
import {
  ThumbsDown,
  ThumbsDownFilled,
  ThumbsUp,
  ThumbsUpFilled,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Markdown, type AssistantMessageProps } from "@copilotkit/react-ui"
import { useCallback, useRef, useState } from "react"
import { markdownRenderers as f0MarkdownRenderers } from "../markdownRenderers"

export const AssistantMessage = ({
  message,
  isGenerating,
  isLoading,
  markdownTagRenderers,
  onCopy,
  onThumbsDown,
  onThumbsUp,
}: AssistantMessageProps) => {
  const translations = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const [reactionValue, setReactionValue] = useState<"like" | "dislike" | null>(
    null
  )
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsHovered(true)
  }, [])
  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 150)
  }, [])
  const content = message?.content || ""
  const subComponent = message?.generativeUI?.()

  return (
    <div
      className="relative isolate flex w-full flex-col items-start justify-center last:mb-8"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLoading && (
        <div className="min-h-[20px]">
          <Spinner size="small" className="text-f1-foreground" />
        </div>
      )}
      {message && (
        <>
          <div className="w-fit max-w-[330px] [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
            <Markdown
              content={content}
              components={{ ...f0MarkdownRenderers, ...markdownTagRenderers }}
            />
          </div>

          <div
            className={cn(
              // add paddings to make the area bigger and avoid flickering when the mouse is over the actions
              "invisible absolute left-0 top-full py-1 pr-4 focus-within:visible",
              isHovered && !isGenerating && "visible"
            )}
            onMouseEnter={handleMouseEnter}
            // no onMouseLeave attached because the div is part of the upper container with the handler attached
          >
            <div className="flex gap-1">
              <div>
                <CopyButton
                  variant="ghost"
                  valueToCopy={content}
                  disabled={isGenerating}
                  onCopy={(e) => {
                    e.currentTarget.blur()
                    onCopy?.(content)
                  }}
                />
              </div>
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  label={translations.actions.thumbsUp}
                  icon={reactionValue === "like" ? ThumbsUpFilled : ThumbsUp}
                  hideLabel
                  disabled={isGenerating}
                  onClick={(e) => {
                    setReactionValue((val) => (val === "like" ? null : "like"))
                    onThumbsUp?.(message)
                    e.currentTarget.blur()
                  }}
                />
              </div>
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  label={translations.actions.thumbsDown}
                  icon={
                    reactionValue === "dislike" ? ThumbsDownFilled : ThumbsDown
                  }
                  hideLabel
                  disabled={isGenerating}
                  onClick={(e) => {
                    setReactionValue((val) =>
                      val === "dislike" ? null : "dislike"
                    )
                    onThumbsDown?.(message)
                    e.currentTarget.blur()
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {!!subComponent && <div>{subComponent}</div>}
    </div>
  )
}
