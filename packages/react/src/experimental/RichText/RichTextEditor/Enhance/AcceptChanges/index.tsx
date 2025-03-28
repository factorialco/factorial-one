import { Button } from "@/components/Actions/Button"
import { enhanceLabelsType } from "@/experimental/exports"
import { Check, Cross } from "@/icons/app"

interface AcceptChangesProps {
  onAccept: () => void
  onReject: () => void
  labels?: enhanceLabelsType
}

const AcceptChanges = ({ onAccept, onReject, labels }: AcceptChangesProps) => {
  return (
    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-md border-[1px] border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md">
      <Button
        label={labels?.rejectChangesButtonLabel || "Reject chnages"}
        onClick={(e) => {
          e.preventDefault()
          onReject()
        }}
        size="sm"
        variant="outline"
        icon={Cross}
        type="button"
      />
      <Button
        label={labels?.acceptChangesButtonLabel || "Accept changes"}
        onClick={(e) => {
          e.preventDefault()
          onAccept()
        }}
        size="sm"
        variant="default"
        icon={Check}
        type="button"
      />
    </div>
  )
}

export { AcceptChanges }
