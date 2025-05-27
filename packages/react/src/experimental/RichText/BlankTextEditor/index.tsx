import { forwardRef } from "react"
import {
  CoreRichTextEditor,
  RichTextEditorHandle,
  type enhanceConfig,
  type errorConfig,
  type mentionsConfig,
  type resultType,
  type toolbarLabels,
} from "../CoreRichTextEditor"

interface BlankTextEditorProps {
  mentionsConfig?: mentionsConfig
  enhanceConfig?: enhanceConfig
  onChange: (result: resultType) => void
  placeholder: string
  initialEditorState?: {
    content?: string
  }
  toolbarLabels: toolbarLabels
  errorConfig?: errorConfig
  title: string
}

/**
 * BlankTextEditor - A minimal text editor without borders or headers
 *
 * This component is a simplified version of the CoreRichTextEditor
 * that renders in "blank" mode, providing a clean, borderless interface
 * suitable for inline editing or minimal design requirements.
 */
export const BlankTextEditor = forwardRef<
  RichTextEditorHandle,
  BlankTextEditorProps
>(function BlankTextEditor(props, ref) {
  return <CoreRichTextEditor {...props} mode="blank" ref={ref} />
})

export type { BlankTextEditorProps, RichTextEditorHandle }
