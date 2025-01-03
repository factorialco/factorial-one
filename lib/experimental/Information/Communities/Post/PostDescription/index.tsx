import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import "./TextEditorTheme.css"

export default {}

type PostDescriptionProps = {
  content: string
  collapsed?: boolean
}

export const BasePostDescription = ({
  content,
  collapsed,
}: PostDescriptionProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={cn("FactorialOneTextEditor", collapsed && "line-clamp-2")}
    />
  )
}

export const PostDescriptionSkeleton = () => (
  <div className="flex flex-col justify-around gap-3 py-2">
    <Skeleton className="h-2.5 w-1/2 rounded-2xs" />
    <Skeleton className="h-2.5 w-2/3 rounded-2xs" />
  </div>
)

export const PostDescription = withSkeleton(
  BasePostDescription,
  PostDescriptionSkeleton
)
