import { Icon } from "@/components/Utilities/Icon"
import {
  EditorBubbleMenu,
  ToolbarLabels,
} from "@/experimental/RichText/CoreEditor"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import { Handle, Plus } from "@/icons/app"
import DragHandle from "@tiptap/extension-drag-handle-react"
import { Node } from "@tiptap/pm/model"
import { Editor, EditorContent, JSONContent, useEditor } from "@tiptap/react"
import {
  forwardRef,
  useCallback,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"
import { AIBlockConfig, AIBlockLabels } from "../CoreEditor/Extensions/AIBlock"
import { LiveCompanionLabels } from "../CoreEditor/Extensions/LiveCompanion"
import { MoodTrackerLabels } from "../CoreEditor/Extensions/MoodTracker"
import {
  Message,
  TranscriptLabels,
  User,
} from "../CoreEditor/Extensions/Transcript"
import "../index.css"
import { createBasicTextEditorExtensions } from "./extensions"

interface BasicTextEditorProps {
  onChange: (value: { json: JSONContent | null; html: string | null }) => void
  placeholder: string
  initialEditorState?: { content: JSONContent | string }
  readonly?: boolean
  aiBlockConfig?: AIBlockConfig

  labels: {
    toolbarLabels: ToolbarLabels
    slashCommandGroupLabels?: SlashCommandGroupLabels
    aiBlockLabels?: AIBlockLabels
    moodTrackerLabels?: MoodTrackerLabels
    liveCompanionLabels?: LiveCompanionLabels
    transcriptLabels?: TranscriptLabels
  }
}

type BasicTextEditorHandle = {
  clear: () => void
  focus: () => void
  setContent: (content: string) => void
  insertAIBlock: () => void
  insertTranscript: (title: string, users: User[], messages: Message[]) => void
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
    transcriptLabels,
  } = labels

  const containerRef = useRef<HTMLDivElement>(null)
  const hoveredRef = useRef<{ pos: number; nodeSize: number } | null>(null)
  const editorId = useId()

  const [initialContent] = useState(() => initialEditorState?.content || "")

  const editor = useEditor({
    extensions: createBasicTextEditorExtensions(
      placeholder,
      toolbarLabels,
      slashCommandGroupLabels,
      aiBlockConfig,
      aiBlockLabels,
      moodTrackerLabels,
      liveCompanionLabels,
      transcriptLabels
    ),
    content: initialContent,
    onUpdate: ({ editor }: { editor: Editor }) => {
      onChange(
        editor.isEmpty
          ? { json: null, html: null }
          : { json: editor.getJSON(), html: editor.getHTML() }
      )
    },
    editable: !readonly,
  })

  useImperativeHandle(ref, () => ({
    clear: () => editor?.commands.clearContent(),
    focus: () => editor?.commands.focus(),
    setContent: (content) => editor?.commands.setContent(content),
    insertAIBlock: () => {
      if (!editor || !aiBlockConfig) return
      const cfg = aiBlockLabels
        ? { ...aiBlockConfig, labels: aiBlockLabels }
        : aiBlockConfig
      editor.commands.insertAIBlock(
        { content: null, selectedAction: undefined },
        cfg
      )
    },
    insertTranscript: (title, users, messages) => {
      if (!editor) return
      const cfg = transcriptLabels ? { labels: transcriptLabels } : undefined
      editor.commands.insertTranscript({ title, users, messages }, cfg)
    },
  }))

  const tippyOptions = useMemo(
    () => ({
      offset: [0, 2] as [number, number],
    }),
    []
  )

  const handleNodeChange = useCallback(
    ({ node, pos }: { node: Node | null; pos: number; editor: Editor }) => {
      hoveredRef.current = node ? { pos, nodeSize: node.nodeSize } : null
    },
    []
  )

  const handlePlusClick = useCallback(() => {
    const hovered = hoveredRef.current
    if (!hovered || !editor) return

    const { pos, nodeSize } = hovered
    const node = editor.state.doc.nodeAt(pos)

    if (node && node.content.size === 0) {
      editor
        .chain()
        .focus()
        .setTextSelection(pos + 1)
        .insertContent("/")
        .run()
    } else {
      const afterBlock = pos + nodeSize

      editor
        .chain()
        .focus()
        .insertContentAt(afterBlock, { type: "paragraph" })
        .setTextSelection(afterBlock + 1)
        .insertContent("/")
        .run()
    }
  }, [editor])

  if (!editor) return null

  return (
    <div className="relative w-full" ref={containerRef} id={editorId}>
      <DragHandle
        editor={editor}
        tippyOptions={tippyOptions}
        onNodeChange={handleNodeChange}
      >
        <div className="flex flex-row">
          <div
            className="flex h-5 w-[16px] cursor-pointer items-center justify-center rounded-2xs hover:bg-f1-background-hover"
            onClick={handlePlusClick}
          >
            <Icon
              icon={Plus}
              size="sm"
              className="text-f1-foreground-tertiary"
            />
          </div>

          <div
            data-drag-handle
            draggable
            className="flex h-5 w-[16px] cursor-grab items-center justify-center rounded-2xs hover:bg-f1-background-hover"
          >
            <Icon
              icon={Handle}
              size="xs"
              className="text-f1-foreground-tertiary"
            />
          </div>
        </div>
      </DragHandle>

      <EditorContent editor={editor} className="[&>div]:w-full [&>div]:pl-10" />

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

export type { Message, User } from "../CoreEditor/Extensions/Transcript"
export { BasicTextEditorComponent as BasicTextEditor }
export type { BasicTextEditorHandle, BasicTextEditorProps }
