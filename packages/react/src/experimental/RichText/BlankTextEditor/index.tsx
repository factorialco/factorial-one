import {
  EditorBubbleMenu,
  ToolbarLabels,
} from "@/experimental/RichText/CoreEditor"
import { Editor, EditorContent, JSONContent, useEditor } from "@tiptap/react"
import { forwardRef, useId, useImperativeHandle, useRef, useState } from "react"
import "../index.css"
import { createBlankTextEditorExtensions } from "./extensions"

interface BlankTextEditorProps {
  onChange: (value: { json: JSONContent | null; html: string | null }) => void
  placeholder: string
  initialEditorState?: {
    content: JSONContent | string
  }
  toolbarLabels: ToolbarLabels
  readonly?: boolean
}

type BlankTextEditorHandle = {
  clear: () => void
  focus: () => void
  setContent: (content: string) => void
}

const BlankTextEditorComponent = forwardRef<
  BlankTextEditorHandle,
  BlankTextEditorProps
>(function BlankTextEditor(
  {
    onChange,
    placeholder,
    initialEditorState,
    toolbarLabels,
    readonly = false,
  },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const editorId = useId()

  // Capture initial content only once, not affected by prop changes
  const [initialContent] = useState(() => initialEditorState?.content || "")

  const editor = useEditor({
    extensions: createBlankTextEditorExtensions(placeholder),
    content: initialContent,
    onUpdate: ({ editor }: { editor: Editor }) => {
      if (editor.isEmpty) {
        onChange({ json: null, html: null })
      } else {
        onChange({ json: editor.getJSON(), html: editor.getHTML() })
      }
    },
    editable: !readonly,
  })

  useImperativeHandle(ref, () => ({
    clear: () => editor?.commands.clearContent(),
    focus: () => editor?.commands.focus(),
    setContent: (content: string) => {
      if (editor) {
        editor.commands.setContent(content)
      }
    },
  }))

  if (!editor) return null

  return (
    <div ref={containerRef} className="relative w-full bg-f1-background">
      <div
        className="relative w-full overflow-hidden"
        onClick={() => editor?.commands.focus()}
      >
        <div className="w-full p-3">
          <EditorContent editor={editor} />
        </div>
      </div>

      <EditorBubbleMenu
        editor={editor}
        toolbarLabels={toolbarLabels}
        disableButtons={false}
        isToolbarOpen={false}
        isFullscreen={false}
        editorId={editorId}
      />
    </div>
  )
})

export { BlankTextEditorComponent as BlankTextEditor }
export type { BlankTextEditorHandle, BlankTextEditorProps }
