import { Button } from "@/components/exports"
import { Paperclip } from "@/icons/app"
import { Editor } from "@tiptap/react"
import { ToolbarDivider } from "../Toolbar"
import { actionConfig } from "../utils/types"

interface FooterProps {
  editor: Editor | null
  maxCharacters: number | undefined
  secondaryActions: actionConfig[] | undefined
  primaryAction: actionConfig | undefined
  isAcceptChangesOpen: boolean
  fileInputRef: React.RefObject<HTMLInputElement>
  canUseFiles: boolean
}

const Footer = ({
  editor,
  maxCharacters,
  secondaryActions,
  primaryAction,
  isAcceptChangesOpen,
  fileInputRef,
  canUseFiles,
}: FooterProps) => {
  if (!editor) return null
  if (!maxCharacters && !secondaryActions && !primaryAction) return null

  return (
    <div className="flex w-full items-center justify-between border-0 border-t-[1px] border-solid border-f1-border px-4 py-3">
      <div className="flex items-center gap-2">
        {canUseFiles && (
          <Button
            icon={Paperclip}
            onClick={() => {
              if (fileInputRef?.current) {
                fileInputRef.current.click()
              } else {
                const fileInput = document.getElementById("upload-button")
                if (fileInput) fileInput.click()
              }
            }}
            hideLabel
            label="Add Attachment"
            variant="outline"
            type="button"
            disabled={isAcceptChangesOpen}
          />
        )}
        {maxCharacters && (
          <p className="text-sm font-medium text-f1-foreground-secondary">
            {editor.storage.characterCount.characters()} / {maxCharacters}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {secondaryActions?.map((action) => (
          <Button
            onClick={action.onClick}
            variant={action.variant ?? "outline"}
            size="md"
            label={action.label}
            disabled={isAcceptChangesOpen || action.disabled}
          />
        ))}
        {secondaryActions && secondaryActions.length > 0 && <ToolbarDivider />}
        {primaryAction && (
          <Button
            onClick={primaryAction.onClick}
            variant={primaryAction.variant ?? "default"}
            size="md"
            label={primaryAction.label}
            disabled={isAcceptChangesOpen || primaryAction.disabled}
            icon={primaryAction.icon ?? undefined}
          />
        )}
      </div>
    </div>
  )
}

export { Footer }
