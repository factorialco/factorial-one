import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { useChatContext, type ButtonProps } from "@copilotkit/react-ui"
import OneIcon from "../OneIcon"

export const ChatButton = (props: ButtonProps) => {
  const { open, setOpen } = useChatContext()
  const translations = useI18n()

  return (
    <button
      aria-label={translations.ai.openChat}
      className={cn(
        "absolute bottom-4 right-4",
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
