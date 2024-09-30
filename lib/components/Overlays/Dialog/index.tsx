import { Button, ButtonProps } from "@/components/Actions/Button"
import { Icon, IconType } from "@/components/Utilities/Icon"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogTitle,
} from "@/ui/dialog"
import { Skeleton } from "@/ui/skeleton"
import { forwardRef, ReactNode, useCallback, useState } from "react"

type Action = Pick<ButtonProps, "label" | "onClick" | "disabled">

type DialogProps = {
  header?: {
    icon?: IconType
    title: string
    description: string
  }
  actions?: {
    primary: Action
    secondary?: Action
  }
  loading?: boolean
  children: ReactNode
  open?: boolean
  onClose?: () => void
}

const OneDialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ header, children, loading, actions, open, onClose }, ref) => {
    // We do this in order to give the illusion of a controlled state via `open`, but in reality
    // we're taking control and closing the dialog after a few milliseconds to give the closing
    // animation time to play out.
    const [closing, setIsClosing] = useState(false)

    const handleClose = useCallback(() => {
      setIsClosing(true)

      const timeout = setTimeout(() => {
        onClose?.()
        setIsClosing(false)
      }, 200)

      return () => clearTimeout(timeout)
    }, [onClose])

    return (
      <Dialog
        open={open && !closing}
        onOpenChange={(open) => !open && handleClose?.()}
      >
        <DialogContent ref={ref}>
          {header && (
            <DialogHeader>
              {header.icon && (
                <DialogIcon>
                  <Icon size="lg" icon={header.icon} />
                </DialogIcon>
              )}
              <DialogTitle>{header.title}</DialogTitle>
              <DialogDescription>{header.description}</DialogDescription>
            </DialogHeader>
          )}
          <div className="flex-grow flex-col">
            {loading ? (
              <div className="flex flex-col gap-4">
                <Skeleton className="h-6 w-full rounded-full" />
                <Skeleton className="h-6 w-full rounded-full" />
              </div>
            ) : (
              children
            )}
          </div>
          {actions && (
            <DialogFooter>
              {actions.secondary && (
                <Button variant="outline" {...actions.secondary} />
              )}
              <Button variant="default" {...actions.primary} />
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    )
  }
)

OneDialog.displayName = "Dialog"

export { OneDialog as Dialog }
