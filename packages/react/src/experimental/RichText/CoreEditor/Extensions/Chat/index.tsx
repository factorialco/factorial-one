import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Button } from "@/factorial-one"
import { ChevronDown, ChevronUp, Delete } from "@/icons/app"
import { Node } from "@tiptap/core"
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react"
import { format } from "date-fns"
import { AnimatePresence, motion } from "motion/react"
import React, { useState } from "react"

export interface ChatMessage {
  role: "user" | "assistant"
  message: string
  dateTime?: string
}

export interface ChatData {
  title: string
  messages: ChatMessage[]
}

export interface ChatLabels {
  deleteBlock: string
  expand: string
  collapse: string
  messagesCount: string
  messagesCountSingular: string
}

export interface ChatConfig {
  labels?: ChatLabels
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    chat: {
      insertChat: (data: ChatData, config?: ChatConfig) => ReturnType
    }
  }
}

const ChatView: React.FC<NodeViewProps> = ({
  node,
  deleteNode,
  extension,
  updateAttributes,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(node.attrs.isOpen ?? false)
  const data = node.attrs.data as ChatData

  // Dynamic config from extension options
  const config =
    (extension.options.currentConfig as ChatConfig) ||
    (node.attrs.config as ChatConfig) ||
    {}

  if (!data) return null

  const handleToggleCollapse = () => {
    const newState = !isOpen
    setIsOpen(newState)
    updateAttributes({ isOpen: newState })
  }

  const dropdownItems = [
    {
      label: config.labels?.deleteBlock || "Delete",
      icon: Delete,
      critical: true,
      onClick: () => deleteNode(),
    },
  ]

  const formatDateTime = (dateTimeStr?: string): string | undefined => {
    if (!dateTimeStr) return undefined
    try {
      const date = new Date(dateTimeStr)
      return format(date, "HH:mm")
    } catch (e) {
      console.error(e)
      return dateTimeStr
    }
  }

  return (
    <NodeViewWrapper contentEditable={false}>
      <motion.div
        className="editor-chat my-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3"
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
            className="flex cursor-pointer flex-row items-center gap-2"
            onClick={handleToggleCollapse}
          >
            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-3">
                <p className="text-f1-text-primary text-lg font-semibold">
                  {data.title}
                </p>
              </div>
              <p className="text-f1-text-secondary text-sm">
                {data.messages.length}{" "}
                {data.messages.length === 1
                  ? config.labels?.messagesCountSingular || "message"
                  : config.labels?.messagesCount || "messages"}
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <Button
              onClick={handleToggleCollapse}
              variant="outline"
              hideLabel
              label={
                isOpen
                  ? config.labels?.collapse || "Collapse"
                  : config.labels?.expand || "Expand"
              }
              icon={isOpen ? ChevronUp : ChevronDown}
              size="sm"
            />
            <Dropdown items={dropdownItems} size="sm" />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {isOpen && (
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
                <div className="scrollbar-macos flex max-h-[500px] flex-col gap-4 overflow-y-auto">
                  {data.messages.map((msg, idx) => {
                    const isUser = msg.role === "user"
                    const bubbleClasses = isUser
                      ? "bg-f1-background-secondary text-f1-foreground"
                      : "bg-f1-background text-f1-foreground border border-f1-border border-solid"
                    return (
                      <motion.div
                        key={idx}
                        initial={{
                          opacity: 0,
                          y: -10,
                          scale: 0.95,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        transition={{
                          delay: idx * 0.05,
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-md px-3 py-2 ${bubbleClasses}`}
                        >
                          <p className="whitespace-pre-line">{msg.message}</p>
                          {msg.dateTime && (
                            <span className="text-f1-text-tertiary mt-1 block text-right text-xs">
                              {formatDateTime(msg.dateTime)}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <NodeViewContent style={{ display: "none" }} />
    </NodeViewWrapper>
  )
}

export const Chat = Node.create({
  name: "chat",

  group: "block",

  atom: true,

  selectable: true,

  draggable: true,

  addOptions() {
    return {
      currentConfig: null,
    }
  },

  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (element: HTMLElement) => {
          const attr = element.getAttribute("data-chat")
          return attr ? JSON.parse(attr) : null
        },
        renderHTML: (attrs: { data: ChatData }) => {
          if (!attrs.data) return {}
          return {
            "data-chat": JSON.stringify(attrs.data),
          }
        },
      },
      config: {
        default: null,
      },
      isOpen: {
        default: false,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: "div[data-chat]",
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    const data = node.attrs.data as ChatData
    if (!data) return ["div"]

    return [
      "div",
      {
        ...HTMLAttributes,
        class: "chat-block",
        "data-chat": JSON.stringify(data),
      },
      ["div", { class: "chat-content" }, `Chat: ${data.title}`],
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(ChatView)
  },

  addCommands() {
    return {
      insertChat:
        (data: ChatData, config?: ChatConfig) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { data, config },
          })
        },
    }
  },
})

export const ChatExtension = Chat
