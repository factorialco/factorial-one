import {
  EditorBubbleMenu,
  ToolbarLabels,
} from "@/experimental/RichText/CoreEditor"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import { Editor, EditorContent, JSONContent, useEditor } from "@tiptap/react"
import { forwardRef, useId, useImperativeHandle, useRef, useState } from "react"
import { AIBlockConfig, AIBlockLabels } from "../CoreEditor/Extensions/AIBlock"
import { LiveCompanionLabels } from "../CoreEditor/Extensions/LiveCompanion"
import { MoodTrackerLabels } from "../CoreEditor/Extensions/MoodTracker"
import "../index.css"
import { createBasicTextEditorExtensions } from "./extensions"

interface BasicTextEditorProps {
  onChange: (value: { json: JSONContent | null; html: string | null }) => void
  placeholder: string
  initialEditorState?: {
    content: JSONContent | string
  }
  readonly?: boolean
  aiBlockConfig?: AIBlockConfig

  labels: {
    toolbarLabels: ToolbarLabels
    slashCommandGroupLabels?: SlashCommandGroupLabels
    aiBlockLabels?: AIBlockLabels
    moodTrackerLabels?: MoodTrackerLabels
    liveCompanionLabels?: LiveCompanionLabels
  }
}

type BasicTextEditorHandle = {
  clear: () => void
  focus: () => void
  setContent: (content: string) => void
  insertAIBlock: () => void
}

const BasicTextEditorComponent = forwardRef<
  BasicTextEditorHandle,
  BasicTextEditorProps
>(function BasicTextEditor(
  {
    onChange,
    placeholder,
    initialEditorState,
    readonly = false,
    labels,
    aiBlockConfig,
  },
  ref
) {
  const {
    toolbarLabels,
    slashCommandGroupLabels,
    aiBlockLabels,
    moodTrackerLabels,
    liveCompanionLabels,
  } = labels
  const containerRef = useRef<HTMLDivElement>(null)
  const editorId = useId()

  // Capture initial content only once, not affected by prop changes
  const [initialContent] = useState(() => initialEditorState?.content || "")

  const editor = useEditor({
    extensions: createBasicTextEditorExtensions(
      placeholder,
      toolbarLabels,
      slashCommandGroupLabels,
      aiBlockConfig,
      aiBlockLabels,
      moodTrackerLabels,
      liveCompanionLabels
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
    insertAIBlock: () => {
      if (editor && aiBlockConfig) {
        const enhancedConfig = aiBlockLabels
          ? { ...aiBlockConfig, labels: aiBlockLabels }
          : aiBlockConfig

        editor.commands.insertAIBlock(
          {
            content: null,
            selectedAction: undefined,
          },
          enhancedConfig
        )
      }
    },
  }))

  if (!editor) return null

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full flex-row overflow-hidden"
      id={editorId}
    >
      <div
        className="scrollbar-macos relative w-full flex-grow overflow-y-scroll"
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
