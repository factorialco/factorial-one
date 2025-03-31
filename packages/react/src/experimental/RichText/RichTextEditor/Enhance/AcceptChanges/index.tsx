import { Button } from "@/components/Actions/Button"
import { enhanceLabelsType } from "@/experimental/exports"
import { Check, Cross, Reset } from "@/icons/app"
import { useI18n } from "@/lib/i18n-provider"
import { ToolbarDivider } from "../../Footer/Toolbar"

interface AcceptChangesProps {
  onAccept: () => void
  onReject: () => void
  onRepeat: () => void
  labels?: enhanceLabelsType
}

const AcceptChanges = ({
  onAccept,
  onReject,
  onRepeat,
  labels,
}: AcceptChangesProps) => {
  const i18n = useI18n()

  return (
    <div className="flex items-center gap-2 rounded-md border-[1px] border-solid border-f1-border-secondary bg-f1-background p-2 drop-shadow-sm">
      <Button
        label={labels?.rejectChangesButtonLabel || i18n.actions.cancel}
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
        label={labels?.repeatButtonLabel || i18n.collections.filters.retry}
        onClick={(e) => {
          e.preventDefault()
          onRepeat()
        }}
        size="sm"
        variant="outline"
        icon={Reset}
        type="button"
      />

      <ToolbarDivider />

      <Button
        label={labels?.acceptChangesButtonLabel || i18n.actions.save}
        onClick={(e) => {
          e.preventDefault()
          onAccept()
        }}
        size="sm"
        variant="ghost"
        icon={Check}
        type="button"
        // @ts-ignore
        className="magicBackground magicColor rounded-xs"
      />
    </div>
  )
}

export { AcceptChanges }
