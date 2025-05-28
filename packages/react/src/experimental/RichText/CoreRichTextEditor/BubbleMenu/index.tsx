import { BubbleMenu, Editor } from "@tiptap/react"
import { Toolbar } from "../Toolbar"
import { enhanceConfig, toolbarLabels } from "../utils/types"
import { TableBubbleMenu } from "./TableBubbleMenu"

interface EditorBubbleMenuProps {
  editorId: string
  editor: Editor
  disableButtons: boolean
  toolbarLabels: toolbarLabels
  isToolbarOpen: boolean
  isFullscreen: boolean
  onEnhanceWithAI: (
    selectedIntent?: string,
    customIntent?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  enhanceConfig?: enhanceConfig
  setLastIntent?: (
    lastIntent: {
      selectedIntent?: string
      customIntent?: string
    } | null
  ) => void
}

const EditorBubbleMenu = ({
  editorId,
  editor,
  disableButtons,
  toolbarLabels,
  isToolbarOpen,
  isFullscreen,
  onEnhanceWithAI,
  isLoadingEnhance,
  enhanceConfig,
  setLastIntent,
}: EditorBubbleMenuProps) => {
  return (
    <>
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
        shouldShow={({ editor }) =>
          editor.view.state.selection.content().size > 0
        }
      >
        {!isToolbarOpen && (
          <div className="z-50 flex w-max flex-row items-center rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-md">
            <Toolbar
              labels={toolbarLabels}
              editor={editor}
              disableButtons={disableButtons}
              onEnhanceWithAI={onEnhanceWithAI}
              isLoadingEnhance={isLoadingEnhance}
              enhanceConfig={enhanceConfig}
              setLastIntent={setLastIntent}
            />
          </div>
        )}
      </BubbleMenu>

      {/* Table-specific bubble menu to show when in a table */}
      <TableBubbleMenu
        editor={editor}
        isFullscreen={isFullscreen}
        editorId={editorId}
      />
    </>
  )
}

export { EditorBubbleMenu }
