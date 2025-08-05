import { ButtonInternal } from "@/components/Actions/Button/internal"
import { ArrowUp, SolidStop } from "@/icons/app"
import { cn } from "@/lib/utils"
import { type InputProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

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
        "relative isolate m-2 flex flex-col gap-3 rounded-xl border border-solid border-f1-border",
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
                "pointer-events-none absolute inset-x-0 z-10 h-3 rounded-t-xl after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']",
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
