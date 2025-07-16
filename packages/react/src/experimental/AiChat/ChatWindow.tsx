import { ButtonInternal } from "@/components/Actions/Button/internal"
import Cross from "@/icons/app/Cross"
import { useI18n } from "@/lib/providers/i18n"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/ui/dialog"
import {
  useChatContext,
  type HeaderProps,
  type WindowProps,
} from "@copilotkit/react-ui"

export const ChatWindow = ({ children, ...rest }: WindowProps) => {
  const { setOpen, open } = useChatContext()
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false} {...rest}>
      <DialogContent className="max-w-[460px] overflow-hidden rounded-xl border-f1-border shadow">
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
