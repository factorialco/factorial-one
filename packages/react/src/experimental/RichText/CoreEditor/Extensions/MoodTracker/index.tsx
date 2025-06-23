import { Icon } from "@/components/Utilities/Icon"
import {
  Pulse,
  pulseIcon,
  pulseIconStyle,
} from "@/experimental/Information/Avatars/PulseAvatar"
import { Button } from "@/factorial-one"
import { ChevronDown, ChevronUp } from "@/icons/app"
import { Node } from "@tiptap/core"
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react"
import { AnimatePresence, motion } from "motion/react"
import React, { useState } from "react"

interface MoodTrackerData {
  title: string
  averageMoodComment: string
  days: {
    day: string
    mood: Pulse
    comment: string
  }[]
}

export const MoodTrackerView: React.FC<NodeViewProps> = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false)
  const data = node.attrs.data as MoodTrackerData

  if (!data) return null

  return (
    <NodeViewWrapper contentEditable={false}>
      <div
        className="editor-mood-tracker my-4 flex w-full flex-col gap-1 rounded bg-f1-background-selected-secondary p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex cursor-pointer flex-row items-center justify-between"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsOpen(!isOpen)
          }}
        >
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-3">
              <p className="text-f1-text-primary text-md font-semibold">
                {data.title}
              </p>
              <div className="flex flex-row items-center">
                {data.days.map((day) => (
                  <div
                    key={day.mood}
                    className="-ml-1.5 flex items-center justify-center rounded-full bg-f1-background"
                  >
                    <Icon
                      icon={pulseIcon[day.mood]}
                      size="lg"
                      className={pulseIconStyle({ pulse: day.mood })}
                    />
                  </div>
                ))}
              </div>
            </div>
            <p>
              <span className="text-f1-text-primary text-md font-normal">
                {data.averageMoodComment}
              </span>
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            label="Open"
            hideLabel
            icon={isOpen ? ChevronUp : ChevronDown}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
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
              className="pt-3"
            >
              <div className="flex flex-col gap-2">
                {data.days.map((day, index) => {
                  return (
                    <motion.div
                      key={index}
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
                        delay: index * 0.05,
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      className="flex flex-row items-center gap-2"
                    >
                      <div className="flex items-center justify-center rounded-full">
                        <Icon
                          icon={pulseIcon[day.mood]}
                          size="lg"
                          className={pulseIconStyle({ pulse: day.mood })}
                        />
                      </div>
                      <p className="text-f1-text-primary text-md font-normal">
                        <span className="font-semibold">{day.day}:</span>{" "}
                        {day.comment}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <NodeViewContent style={{ display: "none" }} />
    </NodeViewWrapper>
  )
}

export const MoodTracker = Node.create({
  name: "moodTracker",

  group: "block",

  atom: true,

  selectable: false,

  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (element) => {
          const dataAttr = element.getAttribute("data-mood-tracker")
          return dataAttr ? JSON.parse(dataAttr) : null
        },
        renderHTML: (attributes) => {
          if (!attributes.data) return {}
          return {
            "data-mood-tracker": JSON.stringify(attributes.data),
          }
        },
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: "div[data-mood-tracker]",
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    const data = node.attrs.data as MoodTrackerData
    if (!data) return ["div"]

    return [
      "div",
      {
        ...HTMLAttributes,
        class: "mood-tracker-block",
        "data-mood-tracker": JSON.stringify(data),
      },
      ["div", { class: "mood-tracker-content" }, `Mood Tracker: ${data.title}`],
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(MoodTrackerView)
  },
})

export const MoodTrackerExtension = MoodTracker
