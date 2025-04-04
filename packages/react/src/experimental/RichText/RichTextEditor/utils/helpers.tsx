import {
  AlignTextCenter,
  AlignTextJustify,
  AlignTextLeft,
  AlignTextRight,
} from "@/icons/app"
import { Editor } from "@tiptap/react"
import { RefObject } from "react"
import { heightType } from "./types"

const getTextAlignLabel = (editor: Editor) => {
  if (editor.isActive({ textAlign: "left" })) return "Left"
  if (editor.isActive({ textAlign: "center" })) return "Center"
  if (editor.isActive({ textAlign: "right" })) return "Right"
  if (editor.isActive({ textAlign: "justify" })) return "Justify"
  return "Left"
}

const getTextAlignIcon = (editor: Editor) => {
  if (editor.isActive({ textAlign: "left" })) return AlignTextLeft
  if (editor.isActive({ textAlign: "center" })) return AlignTextCenter
  if (editor.isActive({ textAlign: "right" })) return AlignTextRight
  if (editor.isActive({ textAlign: "justify" })) return AlignTextJustify
  return AlignTextLeft
}

const checkContainerHeight = (
  containerRef: RefObject<HTMLDivElement>,
  heightThreshold: number = 240
): boolean => {
  if (!containerRef.current) return false
  return containerRef.current.clientHeight >= heightThreshold
}

const isScrolledToBottom = (
  containerRef: RefObject<HTMLDivElement>
): boolean => {
  if (!containerRef.current) return true

  const container = containerRef.current
  return (
    container.scrollHeight - container.scrollTop - container.clientHeight < 1
  )
}

const setupContainerObservers = (
  containerRef: RefObject<HTMLDivElement>,
  onHeightChange: (hasFullHeight: boolean) => void,
  onScrollChange: (isAtBottom: boolean) => void
): (() => void) => {
  const updateStates = () => {
    onHeightChange(checkContainerHeight(containerRef))
    onScrollChange(isScrolledToBottom(containerRef))
  }

  updateStates()

  const container = containerRef.current
  if (!container) return () => {}

  const handleScroll = () => {
    onScrollChange(isScrolledToBottom(containerRef))
  }
  container.addEventListener("scroll", handleScroll)

  const resizeObserver = new ResizeObserver(updateStates)
  resizeObserver.observe(container)

  return () => {
    container.removeEventListener("scroll", handleScroll)
    resizeObserver.disconnect()
  }
}

const getHeight = (height: heightType) => {
  if (height === "xxs") return "h-20"
  if (height === "xs") return "h-28"
  if (height === "sm") return "h-40"
  if (height === "md") return "h-52"
  if (height === "lg") return "h-60"
  if (height === "xl") return "h-72"
  if (height === "2xl") return "h-80"
  if (height === "3xl") return "h-96"
  if (height === "full") return "h-full"
  if (height === "auto") return "h-auto max-h-60"
}

export {
  checkContainerHeight,
  getHeight,
  getTextAlignIcon,
  getTextAlignLabel,
  isScrolledToBottom,
  setupContainerObservers,
}
