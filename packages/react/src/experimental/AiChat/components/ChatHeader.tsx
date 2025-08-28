import { ButtonInternal } from "@/components/Actions/Button/internal"
import Add from "@/icons/app/Add"
import Cross from "@/icons/app/Cross"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { DialogDescription, DialogHeader, DialogTitle } from "@/ui/dialog"
import { useCopilotChatInternal } from "@copilotkit/react-core"
import { useChatContext, type HeaderProps } from "@copilotkit/react-ui"
import { useChatWindowContext } from "./ChatWindow"

export const ChatHeader = (props: HeaderProps) => {
  const { setOpen, labels } = useChatContext()
  const { messages, reset } = useCopilotChatInternal()
  const { messageContainerScrollTop } = useChatWindowContext()
  const translations = useI18n()
  const hasDefaultTitle = labels.title === "CopilotKit"

  // todo: title is only shown for the active dialog with at least one user message present
  return (
    <DialogHeader
      className={cn(
        "absolute inset-x-0 top-0 z-10 flex justify-between border-0 border-solid border-f1-border-secondary p-3",
        messageContainerScrollTop > 0 &&
          "border-b bg-f1-background/30 backdrop-blur-lg"
      )}
    >
      <DialogTitle className="text-f1-foreground">
        {hasDefaultTitle ? "" : labels.title}
      </DialogTitle>
      <DialogDescription className="sr-only">
        {translations.ai.description}
      </DialogDescription>
      <div className="flex items-center gap-x-2" {...props}>
        {messages.length > 0 && (
          <ButtonInternal
            variant="outline"
            hideLabel
            label={translations.ai.newChat}
            icon={Add}
            size="sm"
            onClick={() => reset()}
          />
        )}
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
