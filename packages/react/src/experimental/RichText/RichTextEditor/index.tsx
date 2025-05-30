import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"
import { forwardRef } from "react"
import {
  CoreRichTextEditor,
  RichTextEditorHandle,
  type enhanceConfig,
  type errorConfig,
  type filesConfig,
  type heightType,
  type mentionsConfig,
  type primaryActionType,
  type resultType,
  type secondaryActionType,
  type toolbarLabels,
} from "../CoreRichTextEditor"

interface RichTextEditorProps {
  mentionsConfig?: mentionsConfig
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  secondaryAction?: secondaryActionType
  primaryAction?: primaryActionType
  onChange: (result: resultType) => void
  maxCharacters?: number
  placeholder: string
  initialEditorState?: {
    content?: string
    files?: File[]
  }
  toolbarLabels: toolbarLabels
  title: string
  errorConfig?: errorConfig
  height?: heightType
}

/**
 * RichTextEditor - A full-featured text editor with complete UI
 *
 * This component is a full-featured version of the CoreRichTextEditor
 * that renders in "normal" mode, providing a complete interface with
 * borders, headers, toolbars, and all standard editing features.
 */
export const RichTextEditorComponent = forwardRef<
  RichTextEditorHandle,
  RichTextEditorProps
>(function RichTextEditor(props, ref) {
  return <CoreRichTextEditor {...props} mode="normal" ref={ref} />
})

interface RichTextEditorSkeletonProps {
  rows?: number
}

const RichTextEditorSkeleton = ({ rows = 2 }: RichTextEditorSkeletonProps) => {
  const staticWidthPattern = ["75%", "100%", "60%", "85%", "70%"]
  const widths = Array.from(
    { length: rows },
    (_, i) => staticWidthPattern[i % staticWidthPattern.length]
  )

  return (
    <div className="relative flex w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background">
      <div className="relative w-full flex-grow overflow-hidden">
        <div className="h-auto w-full pl-3 pr-4 pt-3">
          <div className="flex flex-col gap-2">
            {widths.map((width, index) => (
              <Skeleton key={index} className="h-4" style={{ width }} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-8 w-32 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const RichTextEditor = withSkeleton(
  RichTextEditorComponent,
  RichTextEditorSkeleton
)

export type { RichTextEditorHandle, RichTextEditorProps }
