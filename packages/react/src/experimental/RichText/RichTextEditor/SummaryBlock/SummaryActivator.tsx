import { Button } from "@/components/Actions/Button"
import { File } from "@/icons/app" // Or use a more appropriate icon
import { Editor } from "@tiptap/react"

interface SummaryActivatorProps {
  editor: Editor
  onGenerateSummary: () => Promise<void>
  isLoading: boolean
  disableButtons: boolean
  hideLabel?: boolean
}

export const SummaryActivator = ({
  editor,
  onGenerateSummary,
  isLoading,
  disableButtons,
  hideLabel,
}: SummaryActivatorProps) => {
  return (
    <Button
      type="button"
      variant="outline"
      size="md"
      label="Generate Summary"
      icon={File} // Use appropriate icon
      hideLabel={hideLabel}
      onClick={(e) => {
        e.preventDefault()
        onGenerateSummary()
      }}
      disabled={disableButtons || isLoading}
      data-loading={isLoading ? "true" : "false"}
    />
  )
}
