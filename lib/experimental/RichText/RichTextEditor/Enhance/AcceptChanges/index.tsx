import { Button } from "@/components/Actions/Button"

interface AcceptChangesProps {
  onAccept: () => void
  onReject: () => void
}

const AcceptChanges = ({ onAccept, onReject }: AcceptChangesProps) => {
  return (
    <div className="absolute bottom-18 left-1/2 flex -translate-x-1/2 gap-2 rounded-md border-[1px] border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md">
      <Button
        label="Reject changes"
        onClick={onReject}
        size="sm"
        variant="critical"
      />
      <Button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        className="aiMagicLoading"
        label="Accept changes"
        onClick={onAccept}
        size="sm"
        variant="outline"
      />
    </div>
  )
}

export { AcceptChanges }
