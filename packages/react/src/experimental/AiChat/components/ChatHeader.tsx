import { ButtonInternal } from "@/components/Actions/Button/internal"
import Cross from "@/icons/app/Cross"
import { useI18n } from "@/lib/providers/i18n"
import { DialogHeader, DialogTitle } from "@/ui/dialog"
import { useChatContext, type HeaderProps } from "@copilotkit/react-ui"

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
