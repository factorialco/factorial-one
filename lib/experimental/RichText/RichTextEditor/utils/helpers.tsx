import { Editor } from "@tiptap/react"
import { RichTextEditorHeight } from "./types"

const heightMapping: Record<RichTextEditorHeight, string> = {
  xxs: "md:h-32",
  xs: "md:h-40",
  sm: "md:h-60",
  md: "md:h-64",
  lg: "md:h-72",
  xl: "md:h-80",
  "2xl": "md:h-96",
  full: "md:h-full",
}

const defaultAllToolbarConfig = {
  format: {
    bold: true,
    italic: true,
    underline: true,
    strike: true,
    highlight: true,
  },
  textSize: {
    heading1: true,
    heading2: true,
    heading3: true,
  },
  textAlign: {
    left: true,
    center: true,
    right: true,
    justify: true,
  },
  list: {
    bullet: true,
    ordered: true,
    task: true,
  },
  moreOptions: {
    code: true,
    horizontalRule: true,
    quote: true,
  },
  fullScreen: true,
}

const defaultNoneToolbarConfig = {
  format: {
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    highlight: false,
  },
  textSize: {
    normal: false,
    heading1: false,
    heading2: false,
    heading3: false,
  },
  textAlign: {
    left: false,
    center: false,
    right: false,
    justify: false,
  },
  list: {
    bullet: false,
    ordered: false,
    task: false,
  },
  moreOptions: {
    code: false,
    horizontalRule: false,
    quote: false,
  },
  fullScreen: false,
}

const getHeadingLabel = (editor: Editor) => {
  if (editor.isActive("heading")) {
    const headingLevel = editor.getAttributes("heading").level
    if (headingLevel === 1) return "H1"
    if (headingLevel === 2) return "H2"
    if (headingLevel === 3) return "H3"
  }
  return "Normal"
}

const getTextAlignLabel = (editor: Editor) => {
  if (editor.isActive({ textAlign: "left" })) return "Left"
  if (editor.isActive({ textAlign: "center" })) return "Center"
  if (editor.isActive({ textAlign: "right" })) return "Right"
  if (editor.isActive({ textAlign: "justify" })) return "Justify"
  return "Left"
}

export {
  defaultAllToolbarConfig,
  defaultNoneToolbarConfig,
  getHeadingLabel,
  getTextAlignLabel,
  heightMapping,
}
