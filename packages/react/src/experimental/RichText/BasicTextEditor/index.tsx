import { F0Icon } from "@/components/F0Icon"
import { Toolbar, ToolbarLabels } from "@/experimental/RichText/CoreEditor"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import { Handle, Plus } from "@/icons/app"
import { Button } from "@/ui/button"
import { ScrollArea } from "@/ui/scrollarea"
import DragHandle from "@tiptap/extension-drag-handle-react"
import { Node } from "@tiptap/pm/model"
import { Editor, EditorContent, JSONContent, useEditor } from "@tiptap/react"
import {
  forwardRef,
  useCallback,
  useEffect,
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
  initialEditorState?: { content: JSONContent | string; title?: string }
  readonly?: boolean
  aiBlockConfig?: AIBlockConfig
  onTitleChange?: (title: string) => void
  labels: {
    toolbarLabels: ToolbarLabels
    slashCommandGroupLabels?: SlashCommandGroupLabels
    aiBlockLabels?: AIBlockLabels
    moodTrackerLabels?: MoodTrackerLabels
    liveCompanionLabels?: LiveCompanionLabels
    transcriptLabels?: TranscriptLabels
    titlePlaceholder?: string
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
    onTitleChange,
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
  const [title, setTitle] = useState(initialEditorState?.title || "")

  useEffect(() => {
    if (onTitleChange) {
      onTitleChange(title)
    }
  }, [title, onTitleChange])

  const editor = useEditor({
    extensions: createBasicTextEditorExtensions(
      placeholder,
      toolbarLabels,
      slashCommandGroupLabels,
      aiBlockConfig
        ? {
            ...aiBlockConfig,
            toolbarLabels,
            slashCommandGroupLabels,
            moodTrackerLabels,
            liveCompanionLabels,
            transcriptLabels,
            labels: aiBlockLabels,
            placeholder,
          }
        : undefined,
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
        : undefined
      editor
        .chain()
        .focus()
        .insertContentAt(editor.state.doc.content.size, [
          {
            type: "aiBlock",
            attrs: {
              data: { content: null, selectedAction: undefined },
              config: cfg,
              isCollapsed: false,
            },
          },
          { type: "paragraph" },
        ])
        .run()
    },
    insertTranscript: (title, users, messages) => {
      if (!editor) return
      const cfg = transcriptLabels ? { labels: transcriptLabels } : undefined
      editor
        .chain()
        .focus()
        .insertContentAt(editor.state.doc.content.size, [
          {
            type: "transcript",
            attrs: {
              data: { title, users, messages },
              config: cfg,
              isOpen: false,
            },
          },
          { type: "paragraph" },
        ])
        .run()
    },
  }))

  const tippyOptions = useMemo(
    () => ({
      offset: [0, 5] as [number, number],
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
    <div
      className="relative flex h-full w-full flex-col"
      ref={containerRef}
      id={editorId}
    >
      <div className="border-0 border-b border-solid border-f1-border-secondary px-6 py-3">
        <Toolbar
          labels={toolbarLabels}
          editor={editor}
          disableButtons={false}
          darkMode
          showEmojiPicker={false}
          plainHtmlMode={false}
        />
      </div>

      <ScrollArea className="h-full gap-6 pt-6">
        {(onTitleChange || title) && (
          <div className="flex flex-col px-16 pb-6">
            <input
              disabled={!onTitleChange}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={labels.titlePlaceholder || ""}
              className="text-3xl font-semibold text-f1-foreground placeholder-f1-foreground-tertiary"
            />
          </div>
        )}
        <div
          className="basic-text-editor-container h-full"
          onClick={() => editor.commands.focus()}
        >
          <DragHandle
            editor={editor}
            tippyOptions={tippyOptions}
            onNodeChange={handleNodeChange}
          >
            <div className="flex flex-row">
              <Button
                round
                variant="ghost"
                size="sm"
                className="text-f1-foreground-tertiary"
                onClick={handlePlusClick}
              >
                <F0Icon icon={Plus} size="sm" />
              </Button>
              <Button
                round
                variant="ghost"
                size="sm"
                className="text-f1-foreground-tertiary"
                data-drag-handle
                draggable
              >
                <F0Icon icon={Handle} size="xs" />
              </Button>
            </div>
          </DragHandle>

          <EditorContent
            editor={editor}
            className="pb-6 [&>div]:w-full [&>div]:px-16"
          />
        </div>
      </ScrollArea>
    </div>
  )
})

export type { Message, User } from "../CoreEditor/Extensions/Transcript"
export { BasicTextEditorComponent as BasicTextEditor }
export type { BasicTextEditorHandle, BasicTextEditorProps }
