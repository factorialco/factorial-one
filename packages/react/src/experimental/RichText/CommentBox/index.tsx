import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"
import { forwardRef } from "react"
import {
  actionType,
  enhanceConfig,
  errorConfig,
  filesConfig,
  primaryActionType,
  resultType,
  RichTextEditorBase,
  RichTextEditorHandle,
} from "../RichTextEditorBase"

interface CommentBoxProps {
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  secondaryAction?: actionType
  primaryAction?: primaryActionType
  onChange: (result: resultType) => void
  maxCharacters?: number
  placeholder: string
  initialEditorState?: {
    content?: string
    files?: File[]
  }
  title: string
  errorConfig?: errorConfig
}

const CommentBoxComponent = forwardRef<RichTextEditorHandle, CommentBoxProps>(
  (props, ref) => {
    return <RichTextEditorBase {...props} isPlainText={true} ref={ref} />
  }
)

const CommentBoxSkeleton = () => {
  return (
    <div className="relative flex w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background">
      <div className="relative w-full flex-grow overflow-hidden">
        <div className="h-auto w-full pl-3 pr-4 pt-3">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      </div>
      <div className="px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const CommentBox = withSkeleton(CommentBoxComponent, CommentBoxSkeleton)
