import {
  EditorBubbleMenu,
  ToolbarLabels,
} from "@/experimental/RichText/CoreEditor"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import { Editor, EditorContent, JSONContent, useEditor } from "@tiptap/react"
import { forwardRef, useId, useImperativeHandle, useRef, useState } from "react"
import "../index.css"
import { createBasicTextEditorExtensions } from "./extensions"

interface BasicTextEditorProps {
  onChange: (value: { json: JSONContent | null; html: string | null }) => void
  placeholder: string
  initialEditorState?: {
    content: JSONContent | string
  }
  toolbarLabels: ToolbarLabels
  slashCommandGroupLabels?: SlashCommandGroupLabels
  readonly?: boolean
}

type BasicTextEditorHandle = {
  clear: () => void
  focus: () => void
  setContent: (content: string) => void
}

const BasicTextEditorComponent = forwardRef<
  BasicTextEditorHandle,
  BasicTextEditorProps
>(function BasicTextEditor(
  {
    onChange,
    placeholder,
    initialEditorState,
    toolbarLabels,
    slashCommandGroupLabels,
    readonly = false,
  },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const editorId = useId()

  // Capture initial content only once, not affected by prop changes
  const [initialContent] = useState(() => initialEditorState?.content || "")

  const editor = useEditor({
    extensions: createBasicTextEditorExtensions(
      placeholder,
      toolbarLabels,
      slashCommandGroupLabels
    ),
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
    <div
      ref={containerRef}
      className="relative flex h-full w-full flex-row"
      id={editorId}
    >
      <div
        className="relative w-full flex-grow overflow-hidden"
        onClick={() => editor?.commands.focus()}
      >
        <EditorContent editor={editor} />
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

export { BasicTextEditorComponent as BasicTextEditor }
export type { BasicTextEditorHandle, BasicTextEditorProps }
