import { Button } from "@/components/exports"
import { Paperclip } from "@/icons/app"
import { Editor } from "@tiptap/react"
import { ToolbarDivider } from "../Toolbar"
import { actionType, primaryActionType } from "../utils/types"

interface FooterProps {
  editor: Editor | null
  maxCharacters: number | undefined
  secondaryActions: actionType[] | undefined
  primaryAction: primaryActionType | undefined
  isAcceptChangesOpen: boolean
  fileInputRef: React.RefObject<HTMLInputElement>
  canUseFiles: boolean
  isToolbarOpen: boolean
  setIsToolbarOpen: (isToolbarOpen: boolean) => void
  canToggleToolbar: boolean
}

const Footer = ({
  editor,
  maxCharacters,
  secondaryActions,
  primaryAction,
  isAcceptChangesOpen,
  fileInputRef,
  canUseFiles,
  isToolbarOpen,
  setIsToolbarOpen,
  canToggleToolbar,
}: FooterProps) => {
  if (!editor) return null
  if (
    !maxCharacters &&
    !secondaryActions &&
    !primaryAction &&
    !canUseFiles &&
    !canToggleToolbar
  )
    return null

  return (
    <div className="flex w-full items-center gap-2">
      <div className="flex flex-shrink-0 items-center gap-2">
        {canToggleToolbar && (
          <Button
            onClick={(e) => {
              e.preventDefault()
              setIsToolbarOpen(!isToolbarOpen)
            }}
            variant="outline"
            size="md"
            label="Toolbar"
            disabled={isAcceptChangesOpen}
            type="button"
          />
        )}
        {canUseFiles && (
          <Button
            icon={Paperclip}
            onClick={(e) => {
              e.preventDefault()
              if (fileInputRef?.current) {
                fileInputRef.current.click()
              } else {
                const fileInput = document.getElementById(
                  "rich-text-editor-upload-button"
                )
                fileInput?.click()
              }
            }}
            hideLabel
            round
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
      <div className="flex grow items-center justify-end gap-2 overflow-x-hidden">
        {secondaryActions && secondaryActions.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto">
            {secondaryActions?.map((action) => (
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  action.onClick()
                }}
                variant={action.variant ?? "outline"}
                size="md"
                label={action.label}
                disabled={isAcceptChangesOpen || action.disabled}
                type="button"
              />
            ))}
          </div>
        )}
        {secondaryActions && secondaryActions.length > 0 && <ToolbarDivider />}
        {primaryAction && (
          <Button
            onClick={(e) => {
              e.preventDefault()
              primaryAction.action.onClick()
            }}
            variant={primaryAction.action.variant ?? "default"}
            size="md"
            label={primaryAction.action.label}
            disabled={isAcceptChangesOpen || primaryAction.action.disabled}
            icon={primaryAction.action.icon ?? undefined}
            type="button"
          />
        )}
      </div>
    </div>
  )
}

export { Footer }
