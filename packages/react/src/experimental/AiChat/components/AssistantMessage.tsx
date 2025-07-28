import { Button, CopyButton } from "@/components/Actions/Button"
import { Spinner } from "@/experimental"
import { ThumbsDown, ThumbsUp } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Markdown, type AssistantMessageProps } from "@copilotkit/react-ui"
import { type TextMessage } from "@copilotkit/runtime-client-gql"
import { useRef, useState } from "react"
import { markdownRenderers } from "../markdownRenderers"

export const AssistantMessage = ({
  message,
  isGenerating: _isGenerating,
  isCurrentMessage: _isCurrentMessage,
  isLoading,
  markdownTagRenderers,
  onCopy,
  onThumbsDown,
  onThumbsUp,
}: AssistantMessageProps) => {
  const translations = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative isolate flex min-h-[20px] w-fit max-w-[330px] flex-col items-start justify-center last:pb-8"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        console.log("onMouseLeave")
        setIsHovered(false)
        containerRef.current?.focus()
      }}
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
              "invisible absolute bottom-1 left-0 mt-1 focus-within:visible",
              isHovered && "visible"
            )}
          >
            <div className="flex gap-1">
              <div>
                <CopyButton
                  variant="ghost"
                  valueToCopy={message}
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
                  icon={ThumbsUp}
                  hideLabel
                  onClick={(e) => {
                    // Blocked! new version of the sdk changes the type of the `message` variable so we can pass it directly
                    // the current version does not provide enough information to create `TextMessage` correctly
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
                  icon={ThumbsDown}
                  hideLabel
                  onClick={(e) => {
                    // Blocked! new version of the sdk changes the type of the `message` variable so we can pass it directly
                    // the current version does not provide enough information to create `TextMessage` correctly
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
