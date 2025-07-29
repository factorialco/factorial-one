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
import { type TextMessage } from "@copilotkit/runtime-client-gql"
import { useCallback, useRef, useState } from "react"
import { markdownRenderers } from "../markdownRenderers"

export const AssistantMessage = ({
  message,
  isGenerating,
  isCurrentMessage: _isCurrentMessage,
  isLoading,
  markdownTagRenderers,
  onCopy,
  onThumbsDown,
  onThumbsUp,
}: AssistantMessageProps) => {
  const translations = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isThumbsUpToggleActive, setIsThumbsUpToggleActive] = useState(false)
  const [isThumbsDownToggleActive, setIsThumbsDownToggleActive] =
    useState(false)
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

  return (
    <div
      className="relative isolate flex min-h-[20px] w-fit max-w-[330px] flex-col items-start justify-center last:mb-8"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLoading && <Spinner size="small" className="text-f1-foreground" />}
      {message && (
        <>
          <div className="[&>div]:flex [&>div]:flex-col [&>div]:gap-1">
            <Markdown
              content={message}
              components={markdownTagRenderers || markdownRenderers}
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
                  valueToCopy={message}
                  disabled={isGenerating}
                  onCopy={(e) => {
                    e.currentTarget.blur()
                    onCopy?.(message)
                  }}
                />
              </div>
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  label={translations.actions.thumbsUp}
                  icon={isThumbsUpToggleActive ? ThumbsUpFilled : ThumbsUp}
                  hideLabel
                  disabled={isGenerating}
                  onClick={(e) => {
                    // Blocked! new version of the sdk changes the type of the `message` variable so we can pass it directly
                    // the current version does not provide enough information to create `TextMessage` correctly
                    setIsThumbsUpToggleActive((val) => !val)
                    onThumbsUp?.({} as TextMessage)
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
                    isThumbsDownToggleActive ? ThumbsDownFilled : ThumbsDown
                  }
                  hideLabel
                  disabled={isGenerating}
                  onClick={(e) => {
                    // Blocked! new version of the sdk changes the type of the `message` variable so we can pass it directly
                    // the current version does not provide enough information to create `TextMessage` correctly
                    setIsThumbsDownToggleActive((val) => !val)
                    onThumbsDown?.({} as TextMessage)
                    e.currentTarget.blur()
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
