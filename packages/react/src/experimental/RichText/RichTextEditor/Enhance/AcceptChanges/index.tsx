import { Button } from "@/components/Actions/Button"
import { enhanceLabelsType, lastIntentType } from "@/experimental/exports"
import { Check, Cross, Reset } from "@/icons/app"
import { useI18n } from "@/lib/i18n-provider"
import { Editor } from "@tiptap/react"
import { ToolbarDivider } from "../../Toolbar"

interface AcceptChangesProps {
  labels?: enhanceLabelsType
  setLastIntent: (lastIntent: lastIntentType) => void
  lastIntent: lastIntentType
  setIsAcceptChangesOpen: (isAcceptChangesOpen: boolean) => void
  editor: Editor
  handleEnhanceWithAI: (selectedIntent?: string, customIntent?: string) => void
}

const AcceptChanges = ({
  labels,
  setLastIntent,
  lastIntent,
  setIsAcceptChangesOpen,
  editor,
  handleEnhanceWithAI,
}: AcceptChangesProps) => {
  const i18n = useI18n()

  return (
    <div className="dark flex items-center gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-0.5 drop-shadow-sm">
      <Button
        label={labels?.rejectChangesButtonLabel || i18n.actions.cancel}
        onClick={(e) => {
          e.preventDefault()
          editor.chain().focus().undo().run()
          setIsAcceptChangesOpen(false)
          editor.setEditable(true)
          setLastIntent(null)
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
          editor.chain().focus().undo().run()
          handleEnhanceWithAI(
            lastIntent?.selectedIntent,
            lastIntent?.customIntent
          )
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
          setIsAcceptChangesOpen(false)
          editor.setEditable(true)
          setLastIntent(null)
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
