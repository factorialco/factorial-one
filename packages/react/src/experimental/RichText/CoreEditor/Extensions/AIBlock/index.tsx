import {
  ColorExtension,
  CustomTaskExtension,
  HighlightExtension,
  LinkExtension,
  MoodTrackerExtension,
  PersistSelection,
  StarterKitExtension,
  TaskListExtension,
  TextAlignExtension,
  TextStyleExtension,
  TypographyExtension,
  UnderlineExtension,
} from "@/experimental/RichText/CoreEditor"
import { Button } from "@/factorial-one"
import { ChevronDown, ChevronUp, Reset } from "@/icons/app"
import { JSONContent, Node } from "@tiptap/core"
import {
  EditorContent,
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
  useEditor,
} from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
import React, { useEffect, useState } from "react"

export type AIButton = {
  type: string
  emoji: string
  label: string
}

interface AIBlockConfig {
  buttons: AIButton[]
  onClick: (type: string) => Promise<JSONContent | null>
  title: string
}

interface AIBlockData {
  config: AIBlockConfig
  content?: JSONContent | null
  isLoading?: boolean
  selectedAction?: string
  isCollapsed?: boolean
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    aiBlock: {
      insertAIBlock: (data: AIBlockData) => ReturnType
    }
  }
}

// Skeleton component for loading state
const TextSkeleton = () => (
  <div className="space-y-3">
    <div className="flex space-x-2">
      <div className="h-4 w-16 animate-pulse rounded bg-f1-background-secondary"></div>
      <div className="h-4 w-32 animate-pulse rounded bg-f1-background-secondary"></div>
    </div>
    <div className="space-y-2">
      <div className="h-3 w-full animate-pulse rounded bg-f1-background-secondary"></div>
      <div className="h-3 w-4/5 animate-pulse rounded bg-f1-background-secondary"></div>
      <div className="h-3 w-3/4 animate-pulse rounded bg-f1-background-secondary"></div>
    </div>
    <div className="flex space-x-2 pt-2">
      <div className="h-2 w-4 animate-pulse rounded bg-f1-background-secondary"></div>
      <div className="h-2 w-20 animate-pulse rounded bg-f1-background-secondary"></div>
      <div className="h-2 w-12 animate-pulse rounded bg-f1-background-secondary"></div>
    </div>
  </div>
)

export const AIBlockView: React.FC<NodeViewProps> = ({
  node,
  updateAttributes,
}) => {
  const data = node.attrs.data as AIBlockData
  const [isLoading, setIsLoading] = useState(data?.isLoading || false)
  const [isCollapsed, setIsCollapsed] = useState(data?.isCollapsed || false)

  const extensions = [
    StarterKitExtension,
    UnderlineExtension,
    TextStyleExtension,
    ColorExtension,
    TypographyExtension,
    TaskListExtension,
    CustomTaskExtension,
    HighlightExtension,
    TextAlignExtension,
    LinkExtension,
    MoodTrackerExtension,
    PersistSelection,
  ]
  // Create a read-only editor for the generated content
  const contentEditor = useEditor({
    extensions: extensions,
    content: data?.content || null,
    editable: false,
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none focus:outline-none",
        "data-testid": "ai-block-content",
      },
      handleClick: () => true, // Prevent click events
      handleKeyDown: () => true, // Prevent keyboard events
      handleDOMEvents: {
        focus: () => true, // Prevent focus
        blur: () => true, // Prevent blur
        mousedown: () => true, // Prevent mouse events
      },
    },
  })

  // Update content editor when data changes
  useEffect(() => {
    if (contentEditor && data?.content) {
      contentEditor.commands.setContent(data.content)
    }
  }, [contentEditor, data?.content])

  // Sync local loading state with node data
  useEffect(() => {
    setIsLoading(data?.isLoading || false)
  }, [data?.isLoading])

  // Sync local collapsed state with node data
  useEffect(() => {
    setIsCollapsed(data?.isCollapsed || false)
  }, [data?.isCollapsed])

  if (!data || !data.config) return null

  const { config } = data
  const content = data.content
  const selectedAction = data.selectedAction

  // Get the display title and emoji
  const getDisplayTitle = () => {
    if (selectedAction && content) {
      const selectedButton = config.buttons.find(
        (button) => button.type === selectedAction
      )
      return {
        title: selectedButton?.label || selectedAction,
        emoji: selectedButton?.emoji || "🤖",
      }
    }
    return {
      title: config.title,
      emoji: "🤖",
    }
  }

  const { title: displayTitle, emoji: displayEmoji } = getDisplayTitle()

  const handleClick = async (type: string) => {
    // Immediately update UI: hide buttons, change title, show loading
    const updatedData = {
      ...data,
      isLoading: true,
      selectedAction: type,
      content: null, // Clear any existing content during loading
    }

    updateAttributes({
      data: updatedData,
    })

    try {
      const newContent = await config.onClick(type)

      // Ensure we preserve all state when updating with new content
      updateAttributes({
        data: {
          ...data,
          content: newContent,
          isLoading: false,
          selectedAction: type, // Keep the selected action
        },
      })
    } catch (error) {
      console.error("AIBlock error:", error)
      // On error, keep the selected action but clear loading state
      updateAttributes({
        data: {
          ...data,
          isLoading: false,
          selectedAction: type,
          content: null, // Clear content on error
        },
      })
    }
  }

  const handleReset = () => {
    // Reset the block to its initial state
    updateAttributes({
      data: {
        ...data,
        content: null,
        isLoading: false,
        selectedAction: undefined,
        isCollapsed: false,
      },
    })
  }

  const handleToggleCollapse = () => {
    const newCollapsedState = !isCollapsed

    // Update the node attributes to persist the state
    updateAttributes({
      data: {
        ...data,
        isCollapsed: newCollapsedState,
      },
    })
  }

  return (
    <NodeViewWrapper contentEditable={false}>
      <motion.div
        className="editor-ai-block my-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary bg-gradient-to-t from-f1-background to-[#F5F1FF] p-3 drop-shadow-sm"
        onClick={(e) => e.stopPropagation()}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-row items-center justify-between gap-2"
          layout
        >
          <div
            className={`flex flex-row items-center gap-2 ${selectedAction && content && !isLoading ? "cursor-pointer" : ""}`}
            onClick={
              selectedAction && content && !isLoading
                ? handleToggleCollapse
                : undefined
            }
          >
            <motion.span
              className="text-lg"
              animate={{
                scale: isLoading ? [1, 1.1, 1] : 1,
                rotate: isLoading ? [0, 5, -5, 0] : 0,
              }}
              transition={{
                duration: isLoading ? 2 : 0.3,
                repeat: isLoading ? Infinity : 0,
                ease: "easeInOut",
              }}
            >
              {displayEmoji}
            </motion.span>
            <p className="text-f1-text-primary text-lg font-semibold">
              {displayTitle}
            </p>
          </div>

          <div className="flex flex-row items-center gap-1">
            {/* Add collapse/expand button when content is present */}
            {selectedAction && content && !isLoading && (
              <Button
                onClick={handleToggleCollapse}
                variant="ghost"
                size="sm"
                hideLabel
                label={isCollapsed ? "Expand" : "Collapse"}
                icon={isCollapsed ? ChevronDown : ChevronUp}
              />
            )}

            {/* Add reset button when content is present */}
            {selectedAction && content && !isLoading && (
              <Button
                onClick={handleReset}
                variant="ghost"
                size="sm"
                hideLabel
                label="Reset"
                icon={Reset}
              />
            )}
          </div>
        </motion.div>

        {/* Show buttons only when not loading and no action selected */}
        <AnimatePresence>
          {!isLoading && !selectedAction && (
            <motion.div
              className="relative flex flex-row flex-wrap items-center gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {config.buttons.map((button, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Button
                    onClick={() => handleClick(button.type)}
                    variant="outline"
                    size="sm"
                    emoji={button.emoji}
                    label={button.label}
                    disabled={isLoading}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <TextSkeleton />
            </motion.div>
          )}

          {content && !isLoading && !isCollapsed && contentEditor && (
            <motion.div
              key="content"
              initial={{
                height: 0,
                opacity: 0,
                scaleY: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                scaleY: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
                scaleY: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                opacity: { duration: 0.2 },
              }}
              style={{
                transformOrigin: "top",
                overflow: "hidden",
              }}
            >
              <motion.div
                className="text-f1-text-primary"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <EditorContent editor={contentEditor} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <NodeViewContent style={{ display: "none" }} />
    </NodeViewWrapper>
  )
}

export const AIBlock = Node.create({
  name: "aiBlock",

  group: "block",

  atom: true,

  selectable: false,

  draggable: false,

  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (element) => {
          const dataAttr = element.getAttribute("data-ai-block")
          return dataAttr ? JSON.parse(dataAttr) : null
        },
        renderHTML: (attributes) => {
          if (!attributes.data) return {}
          return {
            "data-ai-block": JSON.stringify(attributes.data),
          }
        },
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: "div[data-ai-block]",
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    const data = node.attrs.data as AIBlockData
    if (!data || !data.config) return ["div"]

    return [
      "div",
      {
        ...HTMLAttributes,
        class: "ai-block",
        "data-ai-block": JSON.stringify(data),
      },
      ["div", { class: "ai-block-content" }, `AI Block: ${data.config.title}`],
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(AIBlockView)
  },

  addCommands() {
    return {
      insertAIBlock:
        (data: AIBlockData) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { data },
          })
        },
    }
  },
})

export const AIBlockExtension = AIBlock
