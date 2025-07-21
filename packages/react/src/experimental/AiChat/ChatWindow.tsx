import { ButtonInternal } from "@/components/Actions/Button/internal"
import Cross from "@/icons/app/Cross"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/ui/dialog"
import { useLangGraphInterruptRender } from "@copilotkit/react-core"
import {
  useChatContext,
  type ButtonProps,
  type HeaderProps,
  type MessagesProps,
  type WindowProps,
} from "@copilotkit/react-ui"
import {
  Message,
  ResultMessage,
  Role,
  TextMessage,
} from "@copilotkit/runtime-client-gql"
import { useEffect, useMemo, useRef } from "react"
import OneIcon from "./OneIcon"

export const ChatWindow = ({ children, ...rest }: WindowProps) => {
  const { setOpen, open } = useChatContext()
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false} {...rest}>
      <DialogContent
        className="flex h-1/3 min-h-[426px] max-w-[460px] flex-col overflow-hidden rounded-xl border-f1-border shadow"
        position="bottom right"
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

export const ChatHeader = (props: HeaderProps) => {
  const { setOpen, labels } = useChatContext()
  const translations = useI18n()

  // todo: title is only shown for the active dialog with at least one user message present
  return (
    <DialogHeader className="flex justify-between p-3">
      <DialogTitle>{labels.title}</DialogTitle>
      <div className="flex items-center" {...props}>
        <ButtonInternal
          variant="outline"
          hideLabel
          label={translations.actions.close}
          icon={Cross}
          size="sm"
          onClick={() => setOpen(false)}
        />
      </div>
    </DialogHeader>
  )
}

export const MessagesContainer = ({
  messages,
  inProgress,
  children,
  RenderTextMessage,
  RenderActionExecutionMessage,
  RenderAgentStateMessage,
  RenderResultMessage,
  RenderImageMessage,
  AssistantMessage,
  UserMessage,
  onRegenerate,
  onCopy,
  onThumbsUp,
  onThumbsDown,
  markdownTagRenderers,
}: MessagesProps) => {
  const context = useChatContext()
  const initialMessages = useMemo(
    () => makeInitialMessages(context.labels.initial),
    [context.labels.initial]
  )

  messages = [...initialMessages, ...messages]

  const actionResults: Record<string, string> = {}

  for (let i = 0; i < messages.length; i++) {
    if (messages[i].isActionExecutionMessage()) {
      const id = messages[i].id
      const resultMessage: ResultMessage | undefined = messages.find(
        (message) =>
          message.isResultMessage() && message.actionExecutionId === id
      ) as ResultMessage | undefined

      if (resultMessage) {
        actionResults[id] = ResultMessage.decodeResult(
          resultMessage.result || ""
        )
      }
    }
  }

  const { messagesContainerRef, messagesEndRef } = useScrollToBottom(messages)

  const interrupt = useLangGraphInterruptRender()

  return (
    <div className="flex-1 overflow-y-scroll px-3" ref={messagesContainerRef}>
      <div>
        {messages.map((message, index) => {
          const isCurrentMessage = index === messages.length - 1

          if (message.isTextMessage()) {
            return (
              <RenderTextMessage
                key={index}
                message={message}
                inProgress={inProgress}
                index={index}
                isCurrentMessage={isCurrentMessage}
                AssistantMessage={AssistantMessage}
                UserMessage={UserMessage}
                onRegenerate={onRegenerate}
                onCopy={onCopy}
                onThumbsUp={onThumbsUp}
                onThumbsDown={onThumbsDown}
                markdownTagRenderers={markdownTagRenderers}
              />
            )
          } else if (message.isActionExecutionMessage()) {
            return (
              <RenderActionExecutionMessage
                key={index}
                message={message}
                inProgress={inProgress}
                index={index}
                isCurrentMessage={isCurrentMessage}
                actionResult={actionResults[message.id]}
                AssistantMessage={AssistantMessage}
                UserMessage={UserMessage}
              />
            )
          } else if (message.isAgentStateMessage()) {
            return (
              <RenderAgentStateMessage
                key={index}
                message={message}
                inProgress={inProgress}
                index={index}
                isCurrentMessage={isCurrentMessage}
                AssistantMessage={AssistantMessage}
                UserMessage={UserMessage}
              />
            )
          } else if (message.isResultMessage()) {
            return (
              <RenderResultMessage
                key={index}
                message={message}
                inProgress={inProgress}
                index={index}
                isCurrentMessage={isCurrentMessage}
                AssistantMessage={AssistantMessage}
                UserMessage={UserMessage}
              />
            )
          } else if (message.isImageMessage && message.isImageMessage()) {
            return (
              <RenderImageMessage
                key={index}
                message={message}
                inProgress={inProgress}
                index={index}
                isCurrentMessage={isCurrentMessage}
                AssistantMessage={AssistantMessage}
                UserMessage={UserMessage}
                onRegenerate={onRegenerate}
                onCopy={onCopy}
                onThumbsUp={onThumbsUp}
                onThumbsDown={onThumbsDown}
              />
            )
          }
        })}
        {interrupt}
      </div>
      <footer className="copilotKitMessagesFooter" ref={messagesEndRef}>
        {children}
      </footer>
    </div>
  )
}

function makeInitialMessages(initial?: string | string[]): Message[] {
  const initialArray: string[] = []
  if (initial) {
    if (Array.isArray(initial)) {
      initialArray.push(...initial)
    } else {
      initialArray.push(initial)
    }
  }

  return initialArray.map(
    (message) =>
      new TextMessage({
        role: Role.Assistant,
        content: message,
      })
  )
}

export function useScrollToBottom(messages: Message[]) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)
  const isProgrammaticScrollRef = useRef(false)
  const isUserScrollUpRef = useRef(false)

  const scrollToBottom = () => {
    if (messagesContainerRef.current && messagesEndRef.current) {
      isProgrammaticScrollRef.current = true
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight
    }
  }

  const handleScroll = () => {
    if (isProgrammaticScrollRef.current) {
      isProgrammaticScrollRef.current = false
      return
    }

    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        messagesContainerRef.current
      isUserScrollUpRef.current = scrollTop + clientHeight < scrollHeight
    }
  }

  useEffect(() => {
    const container = messagesContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) {
      return
    }

    const mutationObserver = new MutationObserver(() => {
      if (!isUserScrollUpRef.current) {
        scrollToBottom()
      }
    })

    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    return () => {
      mutationObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    isUserScrollUpRef.current = false
    scrollToBottom()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.filter((m) => m.isTextMessage() && m.role === Role.User).length])

  return { messagesEndRef, messagesContainerRef }
}

export const ChatButton = (props: ButtonProps) => {
  const { open, setOpen } = useChatContext()

  return (
    <button
      className={cn(
        "h-10 w-10 cursor-pointer rounded-xl bg-[hsl(220,27,26%)] p-1 pl-2",
        open ? "hidden" : "block"
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <OneIcon onDarkBackground />
    </button>
  )
}
