import type { IconType } from "@/components/Utilities/Icon"
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
import { AlertCircle, CheckCircle, DottedCircle } from "../../../icons/app"
import { AlertAvatar } from "../../Information/Avatars/AlertAvatar"

interface UpsellRequestResponseDialogProps {
  open?: boolean
  onClose?: () => void
  success?: boolean
}

interface StepItemProps {
  icon: IconType
  iconClassName: string
  text: string
  isCompleted?: boolean
}

const StepItem = ({
  icon,
  iconClassName,
  text,
  isCompleted,
}: StepItemProps) => (
  <div className="flex flex-row items-center gap-2">
    <Icon className={iconClassName} icon={icon} size="md" />
    <span
      className={
        isCompleted
          ? "font-medium text-f1-foreground"
          : "text-f1-foreground-secondary"
      }
    >
      {text}
    </span>
  </div>
)

const NextSteps = () => (
  <div className="px-4 pb-2">
    <div className="mb-2 text-sm text-f1-foreground-secondary">Next steps</div>

    <div className="flex flex-col gap-2">
      <StepItem
        icon={CheckCircle}
        iconClassName="text-f1-icon-positive"
        text="Request information."
        isCompleted
      />
      <StepItem
        icon={DottedCircle}
        iconClassName="text-f1-icon-secondary"
        text="Product expert contacting you."
      />
      <StepItem
        icon={DottedCircle}
        iconClassName="text-f1-icon-secondary"
        text="Demo to answer all your questions."
      />
    </div>
  </div>
)

const DialogActions = ({
  onClose,
  success,
}: {
  onClose?: () => void
  success: boolean
}) => (
  <DialogFooter className="px-4 pb-4 pt-2 [&_div]:w-full">
    <div className="hidden sm:flex sm:flex-row sm:justify-between sm:gap-3">
      <Button variant="outline" label="Close" onClick={onClose} />
      {success && (
        <Button
          variant="promote"
          label="Discover more products"
          onClick={onClose}
        />
      )}
    </div>
    <div className="flex flex-col-reverse gap-2 sm:hidden">
      <Button variant="outline" label="Close" onClick={onClose} size="lg" />
      {success && (
        <Button
          variant="promote"
          label="Discover more products"
          onClick={onClose}
          size="lg"
        />
      )}
    </div>
  </DialogFooter>
)

const UpsellRequestResponseDialog = forwardRef<
  HTMLDivElement,
  UpsellRequestResponseDialogProps
>(({ open, onClose, success = true }, ref) => {
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
        <DialogHeader
          className={`flex flex-col items-start gap-4 px-4 ${success ? "pt-5" : "py-5"}`}
        >
          <AlertAvatar
            type={success ? "positive" : "critical"}
            size="lg"
            icon={success ? CheckCircle : AlertCircle}
          />
          <div className="flex flex-col gap-0.5">
            <DialogTitle className="text-xl font-semibold sm:text-lg">
              {success ? "Request submitted!" : "Error submitting request"}
            </DialogTitle>
            <DialogDescription className="text-lg sm:text-base">
              {success
                ? "One of our experts will contact you as soon as possible with all the details."
                : "We're sorry but your submission couldn't be completed. Please try again later."}
            </DialogDescription>
          </div>
        </DialogHeader>
        {success ? (
          <>
            <Separator />
            <NextSteps />
          </>
        ) : null}
        <DialogActions onClose={handleClose} success={success} />
      </DialogContent>
    </Dialog>
  )
})

UpsellRequestResponseDialog.displayName = "UpsellRequestResponseDialog"

export { UpsellRequestResponseDialog }
