import { BubbleMenu, Editor } from "@tiptap/react"
import { Toolbar } from "../Toolbar"
import { toolbarLabels } from "../utils/types"

interface EditorBubbleMenuProps {
  editor: Editor
  disableButtons: boolean
  toolbarLabels: toolbarLabels
  isToolbarOpen: boolean
}

const EditorBubbleMenu = ({
  editor,
  disableButtons,
  toolbarLabels,
  isToolbarOpen,
}: EditorBubbleMenuProps) => {
  return (
    <BubbleMenu
      tippyOptions={{
        duration: 100,
        placement: "top",
        hideOnClick: false,
        appendTo: () =>
          document.getElementById("rich-text-editor-container") ||
          document.body,
      }}
      editor={editor}
    >
      {!isToolbarOpen && (
        <div className="dark z-50 flex w-max flex-row items-center rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-1 drop-shadow-sm">
          <Toolbar
            labels={toolbarLabels}
            editor={editor}
            disableButtons={disableButtons}
            mode="dark"
          />
        </div>
      )}
    </BubbleMenu>
  )
}

export { EditorBubbleMenu }
