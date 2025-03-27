import { Button } from "@/components/Actions/Button"
import { enhanceLabelsType } from "@/experimental/exports"
import { Reset } from "@/icons/app"

interface AcceptChangesProps {
  onAccept: () => void
  onReject: () => void
  labels?: enhanceLabelsType
}

const AcceptChanges = ({ onAccept, onReject, labels }: AcceptChangesProps) => {
  return (
    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-md border-[1px] border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md">
      <Button
        label={labels?.rejectChangesButtonLabel || "Reject"}
        onClick={(e) => {
          e.preventDefault()
          onReject()
        }}
        size="sm"
        variant="critical"
        icon={Reset}
        type="button"
      />
      <Button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        className="aiMagicLoading"
        label={labels?.acceptChangesButtonLabel || "Accept"}
        onClick={(e) => {
          e.preventDefault()
          onAccept()
        }}
        size="sm"
        variant="outline"
        type="button"
      />
    </div>
  )
}

export { AcceptChanges }
