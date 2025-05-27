import { Add, ChevronDown, ChevronUp, Minus } from "@/icons/app"
import { Button } from "@/ui/button"
import { BubbleMenu, Editor } from "@tiptap/react"
import { useState } from "react"

import { Button as Onebutton } from "@/factorial-one"
import { Trash } from "lucide-react"
import { ToolbarDivider } from "../Toolbar"

interface TableBubbleMenuProps {
  editor: Editor
  isFullscreen?: boolean
  editorId: string
}

const TableBubbleMenu = ({
  editor,
  isFullscreen,
  editorId,
}: TableBubbleMenuProps) => {
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <BubbleMenu
      editor={editor}
      shouldShow={({ editor }) => {
        return editor.isActive("table")
      }}
      tippyOptions={{
        duration: 100,
        placement: "bottom",
        hideOnClick: false,
        appendTo: () =>
          isFullscreen
            ? document.body
            : document.getElementById(editorId) || document.body,
        zIndex: 9999,
      }}
    >
      <div className="flex w-max flex-col rounded-md border border-solid border-f1-border bg-f1-background p-1 drop-shadow-md">
        <div className="flex flex-row items-center gap-1 p-1">
          <div className="flex items-center gap-1">
            <Onebutton
              variant="ghost"
              icon={Add}
              label="Add column after"
              onClick={() => {
                editor.chain().focus().addColumnBefore().run()
              }}
              hideLabel
              disabled={!editor.can().addColumnBefore()}
            />
            Col
            <Onebutton
              variant="ghost"
              icon={Add}
              label="Add column after"
              onClick={() => {
                editor.chain().focus().addColumnAfter().run()
              }}
              hideLabel
              disabled={!editor.can().addColumnAfter()}
            />
            <Onebutton
              variant="ghost"
              icon={Minus}
              label="Delete column"
              onClick={() => {
                editor.chain().focus().deleteColumn().run()
              }}
              disabled={!editor.can().deleteColumn()}
              hideLabel
            />
          </div>

          <ToolbarDivider />

          <div className="flex items-center gap-1">
            <Onebutton
              variant="ghost"
              icon={Add}
              label="Add row before"
              onClick={() => {
                editor.chain().focus().addRowBefore().run()
              }}
              disabled={!editor.can().addRowBefore()}
              hideLabel
            />
            Row
            <Onebutton
              variant="ghost"
              icon={Add}
              label="Add row after"
              onClick={() => {
                editor.chain().focus().addRowAfter().run()
              }}
              disabled={!editor.can().addRowAfter()}
              hideLabel
            />
            <Onebutton
              variant="ghost"
              icon={Minus}
              label="Delete row"
              onClick={() => {
                editor.chain().focus().deleteRow().run()
              }}
              disabled={!editor.can().deleteRow()}
              hideLabel
            />
          </div>

          <ToolbarDivider />
          <Onebutton
            variant="ghost"
            icon={showAdvanced ? ChevronUp : ChevronDown}
            label="More options"
            hideLabel
            onClick={() => setShowAdvanced(!showAdvanced)}
          />
        </div>

        {/* Advanced controls */}
        {showAdvanced && (
          <div className="flex flex-row items-center gap-1 border-t border-f1-border p-1 pt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
              disabled={!editor.can().toggleHeaderColumn()}
              title="Toggle header column"
            >
              Header Col
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleHeaderRow().run()}
              disabled={!editor.can().toggleHeaderRow()}
              title="Toggle header row"
            >
              Header Row
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleHeaderCell().run()}
              disabled={!editor.can().toggleHeaderCell()}
              title="Toggle header cell"
            >
              Header Cell
            </Button>

            <ToolbarDivider />

            <Onebutton
              variant="critical"
              icon={Trash}
              size="sm"
              label="Delete table"
              onClick={() => {
                editor.chain().focus().deleteTable().run()
              }}
              disabled={!editor.can().deleteTable()}
              hideLabel
            />
          </div>
        )}
      </div>
    </BubbleMenu>
  )
}

export { TableBubbleMenu }
