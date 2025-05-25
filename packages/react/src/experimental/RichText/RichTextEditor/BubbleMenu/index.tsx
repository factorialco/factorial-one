import { BubbleMenu, Editor } from "@tiptap/react"
import { Toolbar } from "../Toolbar"
import { toolbarLabels } from "../utils/types"

interface EditorBubbleMenuProps {
  editor: Editor
  disableButtons: boolean
  toolbarLabels: toolbarLabels
  isToolbarOpen: boolean
  isFullscreen: boolean
  editorId: string
}

const EditorBubbleMenu = ({
  editorId,
  editor,
  disableButtons,
  toolbarLabels,
  isToolbarOpen,
  isFullscreen,
}: EditorBubbleMenuProps) => {
  return (
    <BubbleMenu
      tippyOptions={{
        duration: 100,
        placement: "top-start",
        hideOnClick: false,
        appendTo: () =>
          isFullscreen
            ? document.body
            : document.getElementById(editorId) || document.body,
        zIndex: 9999,
      }}
      editor={editor}
    >
      {!isToolbarOpen && (
        <div className="z-50 flex w-max flex-row items-center rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-md">
          <Toolbar
            labels={toolbarLabels}
            editor={editor}
            disableButtons={disableButtons}
          />
        </div>
      )}
    </BubbleMenu>
  )
}

export { EditorBubbleMenu }
