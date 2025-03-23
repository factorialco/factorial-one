import { RichTextEditorHeight } from "./types"

const heightMapping: Record<RichTextEditorHeight, string> = {
  xxs: "h-32",
  xs: "h-40",
  sm: "h-60",
  md: "h-64",
  lg: "h-72",
  xl: "h-80",
  "2xl": "h-96",
  full: "h-full",
}

const defaultToolbarConfig = {
  format: {
    bold: true,
    italic: true,
    underline: true,
    highlight: true,
  },
  textSize: {
    normal: true,
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

export { defaultToolbarConfig, heightMapping }
