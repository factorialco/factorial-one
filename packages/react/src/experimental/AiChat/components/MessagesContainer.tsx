import { cn } from "@/lib/utils"
import { useLangGraphInterruptRender } from "@copilotkit/react-core"
import { useChatContext, type MessagesProps } from "@copilotkit/react-ui"
import {
  Message,
  ResultMessage,
  Role,
  TextMessage,
} from "@copilotkit/runtime-client-gql"
import { motion } from "motion/react"
import { useEffect, useMemo, useRef } from "react"
import OneIcon from "../OneIcon"
import { useAiChatLabels } from "../providers/AiChatLabelsProvider"
import { useChatWindowContext } from "./ChatWindow"

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
  const { greeting } = useAiChatLabels()
  const { reachedMaxHeight } = useChatWindowContext()
  const initialMessages = useMemo(
    () => makeInitialMessages(context.labels.initial),
    [context.labels.initial]
  )
  const showWelcomeBlock =
    messages.length == 0 && (greeting || initialMessages.length > 0)
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
    <motion.div
      layout
      className={cn(
        "scrollbar-macos isolate flex-1 px-4",
        reachedMaxHeight ? "overflow-y-scroll" : "overflow-y-hidden"
      )}
      ref={messagesContainerRef}
    >
      <motion.div className="flex flex-col" layout="position">
        {showWelcomeBlock && (
          <div className="flex flex-col px-2">
            <OneIcon className="my-4 h-10 w-10 cursor-pointer rounded-xl" />
            {greeting && (
              <p className="text-lg font-medium text-f1-foreground-secondary">
                {greeting}
              </p>
            )}
            {initialMessages.map((message) => {
              if (!message.isTextMessage()) {
                return null
              }

              return (
                <p
                  className="text-2xl font-semibold text-f1-foreground"
                  key={message.id}
                >
                  {message.content}
                </p>
              )
            })}
          </div>
        )}
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
      </motion.div>
      <footer className="copilotKitMessagesFooter" ref={messagesEndRef}>
        {children}
      </footer>
    </motion.div>
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
