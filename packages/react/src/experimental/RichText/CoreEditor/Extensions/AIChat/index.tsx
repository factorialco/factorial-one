import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Button } from "@/factorial-one"
import { ArrowRight, ChevronDown, ChevronUp, Delete } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Node } from "@tiptap/core"
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
import React, { useRef, useState } from "react"

// Define the types for the chat messages
interface ChatMessage {
  role: "user" | "assistant"
  content: string
  timestamp: number
}

// Define the data structure that will be stored in the node
interface AIChatData {
  messages: ChatMessage[]
  title?: string
}

// Define labels for internationalization
export interface AIChatLabels {
  deleteBlock: string
  expand: string
  collapse: string
  placeholder: string
  sendMessage: string
  emptyChat: string
  userTitle: string
  assistantTitle: string
}

// Configuration object for the extension
export interface AIChatConfig {
  onSendMessage?: (message: string) => Promise<string>
  labels?: AIChatLabels
}

// Extend Tiptap commands interface
declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    aiChat: {
      insertAIChat: (data?: AIChatData, config?: AIChatConfig) => ReturnType
    }
  }
}

// Message skeleton component
const MessageSkeleton = () => (
  <motion.div
    className="mr-auto flex w-3/4 flex-row gap-2 rounded-lg bg-f1-background-secondary p-2"
    initial={{ opacity: 0.4 }}
    animate={{ opacity: [0.4, 0.7, 0.4] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
  >
    <div className="flex w-full flex-col">
      <div className="h-3 w-full rounded-full bg-f1-background-tertiary"></div>
      <div className="h-3 w-5/6 rounded-full bg-f1-background-tertiary"></div>
      <div className="h-3 w-4/6 rounded-full bg-f1-background-tertiary"></div>
    </div>
  </motion.div>
)

// Default mock response function when no config is provided
const defaultSendMessage = async (message: string): Promise<string> => {
  // Simple echo response with a small delay to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return `Echo: ${message}`
}

// The React component for the AI Chat view
export const AIChatView: React.FC<NodeViewProps> = ({
  node,
  deleteNode,
  updateAttributes,
  extension,
}) => {
  const [isOpen, setIsOpen] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Get data from node attributes
  const data = (node.attrs.data as AIChatData) || { messages: [] }

  // Asegurarse de que los mensajes siempre sean un array
  const messages = data.messages || []

  // Use dynamic config from extension options or node attributes
  const config =
    (extension.options.currentConfig as AIChatConfig) ||
    (node.attrs.config as AIChatConfig) ||
    {}

  // Default labels
  const defaultLabels = {
    deleteBlock: "Delete",
    expand: "Expand",
    collapse: "Collapse",
    placeholder: "Type a message...",
    sendMessage: "Send message",
    emptyChat: "No messages yet. Start a conversation!",
    userTitle: "You",
    assistantTitle: "Assistant",
  }

  // Merge default labels with provided labels
  const labels = { ...defaultLabels, ...config.labels }

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    // Crear mensaje del usuario
    const userMessage: ChatMessage = {
      role: "user",
      content: inputValue.trim(),
      timestamp: Date.now(),
    }

    // Obtener el array actual de mensajes
    const currentMessages = [...(messages || [])]

    // Añadir el mensaje del usuario
    currentMessages.push(userMessage)

    // Actualizar el estado con el mensaje del usuario
    updateAttributes({
      data: {
        ...data,
        messages: currentMessages,
      },
    })

    // Clear input and set loading state
    setInputValue("")
    setIsLoading(true)

    try {
      // Use provided function or default
      const sendMessageFn = config.onSendMessage || defaultSendMessage

      // Obtener la respuesta
      const responseText = await sendMessageFn(userMessage.content)

      // Crear mensaje del asistente
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: responseText,
        timestamp: Date.now(),
      }

      // Obtener la lista actual de mensajes y añadir la respuesta
      const updatedMessages = [...currentMessages, assistantMessage]

      // Actualizar el estado con ambos mensajes
      updateAttributes({
        data: {
          ...data,
          messages: updatedMessages,
        },
      })
    } catch (error) {
      console.error("Failed to get AI response:", error)
    } finally {
      setIsLoading(false)
      // Focus the input field for continued conversation
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Generate dropdown items
  const dropdownItems = [
    {
      label: labels.deleteBlock,
      icon: Delete,
      critical: true,
      onClick: () => deleteNode(),
    },
  ]

  return (
    <NodeViewWrapper contentEditable={false}>
      <motion.div
        className="editor-ai-chat my-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3"
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
              <p className="text-f1-text-primary text-lg font-semibold">
                AI Chat {data.title ? `- ${data.title}` : ""}
              </p>
              <p className="text-f1-text-secondary text-sm">
                {messages.length} messages
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-1">
            {/* Toggle button */}
            <Button
              onClick={handleToggleCollapse}
              variant="outline"
              hideLabel
              label={isOpen ? labels.collapse : labels.expand}
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
              <div className="flex flex-col gap-2">
                {/* Messages container */}
                <div className="flex h-64 flex-col gap-3 overflow-auto rounded-md p-3">
                  {messages && messages.length > 0 ? (
                    messages.map((message, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex flex-row gap-2 rounded-lg p-2",
                          message.role === "user"
                            ? "bg-f1-background-primary ml-auto"
                            : "mr-auto bg-f1-background-secondary"
                        )}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1">
                            <span className="text-f1-text-secondary text-xs font-medium">
                              {message.role === "user"
                                ? labels.userTitle
                                : labels.assistantTitle}
                            </span>
                          </div>
                          <p className="text-f1-text-primary whitespace-pre-wrap break-words">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <p className="text-f1-text-secondary text-sm">
                        {labels.emptyChat}
                      </p>
                    </div>
                  )}
                  {isLoading && <MessageSkeleton />}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input form */}
                <div className="flex flex-row gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={labels.placeholder}
                    disabled={isLoading}
                    ref={inputRef}
                    className="bg-f1-background-primary text-f1-text-primary placeholder:text-f1-text-secondary focus:border-f1-primary-accent w-full rounded-md border border-solid border-f1-border px-3 py-2 text-sm focus:outline-none"
                  />
                  <Button
                    onClick={handleSendMessage}
                    icon={ArrowRight}
                    hideLabel
                    label={labels.sendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    loading={isLoading}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <NodeViewContent style={{ display: "none" }} />
    </NodeViewWrapper>
  )
}

// Create the Node extension
export const AIChatExtension = Node.create({
  name: "aiChat",

  group: "block",

  // This node is an atom - doesn't have editable content inside
  atom: true,

  // Cannot be selected directly, only as a node
  selectable: false,

  // Can be dragged
  draggable: false,

  // Define proper options
  addOptions() {
    return {
      currentConfig: null,
    }
  },

  // Define attributes with proper defaults
  addAttributes() {
    return {
      data: {
        default: {
          messages: [],
        },
      },
      config: {
        default: {},
      },
    }
  },

  // HTML parsing rules
  parseHTML() {
    return [
      {
        tag: 'div[data-type="ai-chat"]',
      },
    ]
  },

  // HTML rendering rules
  renderHTML({ HTMLAttributes, node }) {
    return [
      "div",
      {
        ...HTMLAttributes,
        "data-type": "ai-chat",
        "data-messages": JSON.stringify(node.attrs.data?.messages || []),
      },
    ]
  },

  // Use our React component to render the node
  addNodeView() {
    return ReactNodeViewRenderer(AIChatView)
  },

  // Commands to insert this node
  addCommands() {
    return {
      insertAIChat:
        (data = { messages: [] }, config = {}) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              data,
              config,
            },
          })
        },
    }
  },
})
