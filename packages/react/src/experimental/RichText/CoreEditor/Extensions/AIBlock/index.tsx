import { Dropdown } from "@/experimental/Navigation/Dropdown"
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
import { Button, Icon, IconType } from "@/factorial-one"
import { Ai, ChevronDown, ChevronUp, Delete } from "@/icons/app"
import { cn } from "@/lib/utils"
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
  icon: IconType
}

export interface AIBlockLabels {
  reset: string
  resetDescription: string
  deleteBlock: string
  expand: string
  collapse: string
}

export interface AIBlockConfig {
  buttons: AIButton[]
  onClick: (type: string) => Promise<JSONContent | null>
  title: string
  labels?: AIBlockLabels
}

interface AIBlockData {
  content?: JSONContent | null
  selectedAction?: string
  selectedTitle?: string
  selectedEmoji?: string
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    aiBlock: {
      insertAIBlock: (data: AIBlockData, config: AIBlockConfig) => ReturnType
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
  deleteNode,
  extension,
}) => {
  const data = node.attrs.data as AIBlockData
  // Use dynamic config from extension options instead of persisted config
  const config =
    (extension.options.currentConfig as AIBlockConfig) ||
    (node.attrs.config as AIBlockConfig)

  // Generate unique key for this block instance
  const blockId = React.useRef(Math.random().toString(36).substr(2, 9)).current

  // Local state - not persisted
  const [isLoading, setIsLoading] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Get persisted values
  const content = data?.content
  const selectedAction = data?.selectedAction

  // Detect if this block was created from slash command (has selectedAction but no content)
  // and set initial loading state only once
  useEffect(() => {
    if (selectedAction && !content && !isLoading) {
      setIsLoading(true)
    }
  }, [selectedAction, content, isLoading]) // Empty dependency array - only run once on mount

  // Clear loading state when content arrives (from slash commands)
  useEffect(() => {
    if (content && isLoading) {
      setIsLoading(false)
    }
  }, [content, isLoading])

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
  const contentEditor = useEditor(
    {
      extensions: extensions,
      content: data?.content || null,
      editable: true,
      editorProps: {
        attributes: {
          class: `ai-block-editor-${blockId}`,
          "data-testid": `ai-block-content-${blockId}`,
        },
      },
      onUpdate: ({ editor }) => {
        // Check if content is empty and automatically reset if it is
        const isEmpty = editor.isEmpty

        if (isEmpty && data?.selectedAction && !isLoading) {
          // Reset the block to its initial state when content becomes empty
          updateAttributes({
            data: {
              content: null,
              selectedAction: undefined,
              selectedTitle: undefined,
              selectedEmoji: undefined,
            },
          })
        } else if (!isEmpty) {
          // Update the node with the new content to trigger parent editor onChange
          // Keep all existing selection data
          const newContent = editor.getJSON()
          updateAttributes({
            data: {
              content: newContent,
              selectedAction: data?.selectedAction,
              selectedTitle: data?.selectedTitle,
              selectedEmoji: data?.selectedEmoji,
            },
          })
        }
      },
    },
    [blockId]
  )

  // Update content editor when data changes
  useEffect(() => {
    if (contentEditor && data?.content) {
      contentEditor.commands.setContent(data.content)
    }
  }, [contentEditor, data?.content])

  if (!data || !config) return null

  // Get the display title and emoji
  const getDisplayTitle = () => {
    // Use persisted title and emoji if available
    if (data?.selectedTitle && data?.selectedEmoji) {
      return {
        title: data.selectedTitle,
        emoji: data.selectedEmoji,
      }
    }

    // Fallback to searching in current buttons (for backwards compatibility)
    if (selectedAction) {
      const selectedButton = config.buttons.find(
        (button: AIButton) => button.type === selectedAction
      )

      if (selectedButton) {
        return {
          title: selectedButton.label,
          emoji: selectedButton.emoji,
        }
      }
    }

    return {
      title: config.title,
    }
  }

  const { title: displayTitle, emoji: displayEmoji } = getDisplayTitle()

  const handleClick = async (type: string) => {
    // Find the selected button to get its title and emoji
    const selectedButton = config.buttons.find(
      (button: AIButton) => button.type === type
    )
    // Set local loading state immediately
    setIsLoading(true)

    // Update with selectedAction, title, and emoji in persisted data
    const newData = {
      selectedAction: type,
      selectedTitle: selectedButton?.label || type,
      selectedEmoji: selectedButton?.emoji || "🤖",
      content: null, // Clear content while loading
    }

    updateAttributes({ data: newData })

    try {
      const newContent = await config.onClick(type)

      // Update with new content and keep all selection data
      const finalData = {
        content: newContent,
        selectedAction: type,
        selectedTitle: selectedButton?.label || type,
        selectedEmoji: selectedButton?.emoji || "🤖",
      }

      updateAttributes({ data: finalData })
    } catch (error) {
      console.error("AIBlock error:", error)
      // On error, clear content but keep selection data
      const errorData = {
        selectedAction: type,
        selectedTitle: selectedButton?.label || type,
        selectedEmoji: selectedButton?.emoji || "🤖",
        content: null,
      }

      updateAttributes({ data: errorData })
    } finally {
      // Always clear loading state
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    // Reset only persisted data
    updateAttributes({
      data: {
        content: null,
        selectedAction: undefined,
        selectedTitle: undefined,
        selectedEmoji: undefined,
      },
    })
    // Reset local state
    setIsLoading(false)
    setIsCollapsed(false)
  }

  const handleToggleCollapse = () => {
    // Only update local state, don't persist collapse state
    setIsCollapsed(!isCollapsed)
  }

  // Generate dropdown items based on block state
  const getDropdownItems = () => {
    const items = []

    // Add reset option only if there's config AND a selected title (meaning an option was selected)
    if (config && (data?.selectedTitle || selectedAction) && !isLoading) {
      items.push({
        label: config.labels?.reset || "Reset",
        description: config.labels?.resetDescription || "Reset the block",
        onClick: handleReset,
      })
    }

    // Add separator if we have other items
    if (items.length > 0) {
      items.push({
        type: "separator" as const,
      })
    }

    // Always add delete option
    items.push({
      label: config?.labels?.deleteBlock || "Delete",
      icon: Delete,
      critical: true,
      onClick: () => deleteNode(),
    })

    return items
  }

  return (
    <NodeViewWrapper contentEditable={false}>
      <motion.div
        className={cn(
          "editor-ai-block my-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
          !content &&
            !isLoading &&
            "bg-gradient-to-t from-f1-background to-[#efeafa]"
        )}
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
              className="flex items-center text-lg"
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
              {displayEmoji ?? <Icon icon={Ai} />}
            </motion.span>
            <p className="text-f1-text-primary text-lg font-semibold">
              {displayTitle}
            </p>
          </div>

          <div className="flex flex-row items-center gap-1">
            {/* Add collapse/expand button when content is present */}
            {(data?.selectedTitle || selectedAction) &&
              content &&
              !isLoading && (
                <Button
                  onClick={handleToggleCollapse}
                  variant="outline"
                  hideLabel
                  label={
                    isCollapsed
                      ? config.labels?.expand || "Expand"
                      : config.labels?.collapse || "Collapse"
                  }
                  icon={isCollapsed ? ChevronDown : ChevronUp}
                />
              )}
            <Dropdown items={getDropdownItems()} />
          </div>
        </motion.div>

        {/* Show buttons only when not loading, no option selected, and no content */}
        <AnimatePresence>
          {!isLoading &&
            !data?.selectedTitle &&
            !selectedAction &&
            !content && (
              <motion.div
                className="relative flex flex-row flex-wrap items-center gap-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {config.buttons.map((button: AIButton, index: number) => (
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
                      size="md"
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

  addOptions() {
    return {
      currentConfig: null,
    }
  },

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
      config: {
        default: null,
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
    const config = node.attrs.config as AIBlockConfig
    if (!data || !config) return ["div"]

    return [
      "div",
      {
        ...HTMLAttributes,
        class: "ai-block",
        "data-ai-block": JSON.stringify(data),
      },
      ["div", { class: "ai-block-content" }, `AI Block: ${config.title}`],
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(AIBlockView)
  },

  addCommands() {
    return {
      insertAIBlock:
        (data: AIBlockData, config: AIBlockConfig) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { data, config },
          })
        },
    }
  },
})

export const AIBlockExtension = AIBlock
