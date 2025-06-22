import { BubbleMenu, Editor } from "@tiptap/react"
import { Toolbar } from "../Toolbar"
import { ToolbarLabels } from "../Toolbar/types"

interface EditorBubbleMenuProps {
  editor: Editor
  disableButtons: boolean
  toolbarLabels: ToolbarLabels
  isToolbarOpen: boolean
  isFullscreen: boolean
  editorId: string
  plainHtmlMode?: boolean
}

export const EditorBubbleMenu = ({
  editorId,
  editor,
  disableButtons,
  toolbarLabels,
  isToolbarOpen,
  isFullscreen,
  plainHtmlMode = false,
}: EditorBubbleMenuProps) => {
  return (
    <BubbleMenu
      tippyOptions={{
        duration: 100,
        placement: "top",
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
        <div className="dark z-50 flex w-max flex-row items-center rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm">
          <Toolbar
            labels={toolbarLabels}
            editor={editor}
            disableButtons={disableButtons}
            darkMode
            showEmojiPicker={false}
            plainHtmlMode={plainHtmlMode}
          />
        </div>
      )}
    </BubbleMenu>
  )
}
