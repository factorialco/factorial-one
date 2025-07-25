import { Dialog, DialogContent } from "@/ui/dialog"
import { useChatContext, type WindowProps } from "@copilotkit/react-ui"

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
