import { Button } from "@/components/Actions/Button"
import { AlertAvatar } from "@/experimental/exports"

interface EnhanceErrorProps {
  error: string
  onClose: () => void
  closeErrorButtonLabel?: string
}

const EnhanceError = ({
  error,
  onClose,
  closeErrorButtonLabel,
}: EnhanceErrorProps) => {
  return (
    <div className="flex w-max max-w-full items-center gap-10 rounded-md bg-f1-background-critical py-1 pl-2 pr-1 drop-shadow-sm">
      <div className="flex w-full flex-row items-center gap-2">
        <div className="flex-shrink-0">
          <AlertAvatar size="sm" type="critical" />
        </div>
        <p className="text-md w-full flex-grow text-ellipsis text-f1-foreground-critical">
          {error || "Error"}
        </p>
      </div>
      <div className="mr- flex-shrink-0">
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault()
            onClose()
          }}
          label={closeErrorButtonLabel || "Continue editing"}
          type="button"
        />
      </div>
    </div>
  )
}

export { EnhanceError }
