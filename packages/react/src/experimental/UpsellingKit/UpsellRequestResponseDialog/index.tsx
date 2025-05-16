import { Icon } from "@/components/Utilities/Icon"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog"
import { Separator } from "@/ui/separator"
import { forwardRef, useCallback, useState } from "react"
import { Button } from "../../../components/Actions/Button"
import { CheckCircle, DottedCircle } from "../../../icons/app"
import { AlertAvatar } from "../../Information/Avatars/AlertAvatar"

const UpsellRequestResponseDialog = forwardRef<
  HTMLDivElement,
  {
    open?: boolean
    onClose?: () => void
  }
>(({ open, onClose }, ref) => {
  const [closing, setIsClosing] = useState(false)

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      onClose?.()
      setIsClosing(false)
    }, 200)
  }, [onClose])

  return (
    <Dialog
      open={open && !closing}
      onOpenChange={(open) => !open && handleClose?.()}
    >
      <DialogContent
        ref={ref}
        className="bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]"
      >
        <DialogHeader className="flex flex-col items-start gap-4 px-4 pt-5">
          <AlertAvatar type="positive" size="lg" icon={CheckCircle} />
          <div className="flex flex-col gap-0.5">
            <DialogTitle className="text-xl font-semibold sm:text-lg">
              Request submitted!
            </DialogTitle>
            <DialogDescription className="text-lg sm:text-base">
              One of our experts will contact you as soon as possible with all
              the details.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="px-4 pb-2">
          <Separator />
          <div className="mb-2 text-sm text-f1-foreground-secondary">
            Next steps
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <Icon
                className="text-f1-icon-positive"
                icon={CheckCircle}
                size="md"
              />
              <span className="font-medium text-f1-foreground">
                Request information.
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Icon
                className="text-f1-icon-secondary"
                icon={DottedCircle}
                size="md"
              />
              <span className="text-f1-foreground-secondary">
                Product expert contacting you.
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Icon
                className="text-f1-icon-secondary"
                icon={DottedCircle}
                size="md"
              />
              <span className="text-f1-foreground-secondary">
                Demo to answer all your questions.
              </span>
            </div>
          </div>
        </div>
        <DialogFooter className="px-4 pb-4 pt-2 [&_div]:w-full">
          <div className="hidden sm:flex sm:flex-row sm:justify-between sm:gap-3">
            <Button variant="outline" label="Close" onClick={handleClose} />
            <Button
              variant="promote"
              label="Discover more products"
              onClick={onClose}
            />
          </div>
          <div className="flex flex-col-reverse gap-2 sm:hidden">
            <Button
              variant="outline"
              label="Close"
              onClick={handleClose}
              size="lg"
            />
            <Button
              variant="promote"
              label="Discover more products"
              onClick={onClose}
              size="lg"
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
})

UpsellRequestResponseDialog.displayName = "UpsellRequestResponseDialog"

export { UpsellRequestResponseDialog }
