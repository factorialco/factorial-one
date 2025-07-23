import { ButtonInternal } from "@/components/Actions/Button/internal"
import { ArrowUp, SolidStop } from "@/icons/app"
import Cross from "@/icons/app/Cross"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/ui/dialog"
import { useLangGraphInterruptRender } from "@copilotkit/react-core"
import {
  useChatContext,
  type ButtonProps,
  type HeaderProps,
  type InputProps,
  type MessagesProps,
  type UserMessageProps,
  type WindowProps,
} from "@copilotkit/react-ui"
import {
  Message,
  ResultMessage,
  Role,
  TextMessage,
} from "@copilotkit/runtime-client-gql"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"
import OneIcon from "./OneIcon"

export const ChatWindow = ({ children, ...rest }: WindowProps) => {
  const { setOpen, open } = useChatContext()
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false} {...rest}>
      <DialogContent
        onPointerDownOutside={(e) => e.preventDefault()}
        className="flex h-2/3 max-h-[680px] min-h-[416px] max-w-[464px] flex-col overflow-hidden rounded-xl border-solid border-f1-border shadow"
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

export const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <div className="w-fit max-w-[330px] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3">
      {message}
    </div>
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
    <div className="flex-1 overflow-y-scroll px-4" ref={messagesContainerRef}>
      <div className="flex flex-col">
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
        open ? "hidden" : "block",
        focusRing()
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <OneIcon onDarkBackground />
    </button>
  )
}

export const ChatTextarea = ({ inProgress, onSend, onStop }: InputProps) => {
  const [inputValue, setInputValue] = useState("")
  const [hasScrollbar, setHasScrollbar] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const hasDataToSend = inputValue.trim().length > 0

  useEffect(() => {
    if (textareaRef.current && inputValue.length > 0) {
      const { scrollHeight, clientHeight } = textareaRef.current
      setHasScrollbar(scrollHeight > clientHeight)
    } else {
      setHasScrollbar(false)
    }
  }, [inputValue])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inProgress) {
      onStop?.()
    } else if (hasDataToSend) {
      onSend(inputValue.trim())
      setInputValue("")
    }

    textareaRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (!inProgress) {
        formRef.current?.requestSubmit()
      }
    }
  }

  return (
    <form
      aria-busy={inProgress}
      ref={formRef}
      className={cn(
        "relative m-2 flex flex-col gap-3 rounded-xl border border-solid border-f1-border",
        "has-[textarea:focus]:shadow has-[textarea:focus]:outline-none has-[textarea:focus]:ring-1 has-[textarea:focus]:ring-f1-ring has-[textarea:focus]:ring-offset-0"
      )}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 grid-rows-1">
        <div
          aria-hidden={true}
          className="pointer-events-none invisible col-start-1 row-start-1 mx-3 mb-0 mt-2 max-h-36 whitespace-pre-wrap"
        >
          {inputValue.endsWith("\n") ? inputValue + "_" : inputValue}
        </div>
        <AnimatePresence>
          {hasScrollbar && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "pointer-events-none absolute inset-x-0 z-10 h-3 rounded-t-xl after:absolute after:inset-x-0 after:h-px after:bg-f1-background-bold after:opacity-[0.04] after:content-['']",
                "-top-px bg-gradient-to-b from-f1-background-selected to-transparent after:-top-px"
              )}
            />
          )}
        </AnimatePresence>
        <textarea
          autoFocus={true}
          name="one-ai-input"
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          placeholder="Write something here.."
          className={cn(
            "col-start-1 row-start-1",
            "mx-3 mb-0 max-h-36 flex-1 resize-none overflow-y-scroll outline-none transition-all",
            "bg-f1-background text-f1-foreground placeholder:text-f1-foreground-secondary",
            !hasScrollbar && "mt-2"
          )}
        />
      </div>

      <div className="flex flex-row-reverse p-3 pt-0">
        {inProgress ? (
          <ButtonInternal
            type="submit"
            variant="neutral"
            label="Stop generating"
            icon={SolidStop}
            hideLabel
            round
          />
        ) : (
          <ButtonInternal
            type="submit"
            disabled={!hasDataToSend}
            variant={hasDataToSend ? "default" : "neutral"}
            label="Send message"
            icon={ArrowUp}
            hideLabel
            round
          />
        )}
      </div>
    </form>
  )
}
