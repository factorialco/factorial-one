import { cn } from "@/lib/utils"
import { useChatContext, type WindowProps } from "@copilotkit/react-ui"
import * as DialogPrimitive from "@radix-ui/react-dialog"

export const ChatWindow = ({ children, ...rest }: WindowProps) => {
  const { setOpen, open } = useChatContext()

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={setOpen}
      modal={false}
      {...rest}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content
          onPointerDownOutside={(e) => e.preventDefault()}
          className={cn(
            "fixed bottom-4 right-4 z-50 w-[90%] rounded-xl border bg-f1-background shadow-lg",
            "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "flex h-2/3 max-h-[680px] min-h-[416px] max-w-[464px] flex-col overflow-hidden rounded-xl border-solid border-f1-border shadow"
          )}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
