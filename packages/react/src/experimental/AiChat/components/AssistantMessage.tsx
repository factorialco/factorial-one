import { Spinner } from "@/experimental"
import { Markdown, type AssistantMessageProps } from "@copilotkit/react-ui"
import { markdownRenderers } from "../markdownRenderers"

export const AssistantMessage = ({
  message,
  isGenerating: _isGenerating,
  isCurrentMessage: _isCurrentMessage,
  isLoading,
  rawData: _rawData,
  markdownTagRenderers,
  onCopy: _onCopy,
  onRegenerate: _onRegenerate,
  onThumbsDown: _onThumbsDown,
  onThumbsUp: _onThumbsUp,
}: AssistantMessageProps) => {
  return (
    <div className="flex min-h-[20px] w-fit max-w-[330px] flex-col items-start justify-center">
      {isLoading && <Spinner size="small" className="text-f1-foreground" />}
      {message && (
        <div className="[&>div]:flex [&>div]:flex-col [&>div]:gap-1">
          <Markdown
            content={message}
            components={markdownTagRenderers || markdownRenderers}
          />
        </div>
      )}
    </div>
  )
}
