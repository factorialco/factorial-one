import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { HighlightBanner, HighlightBannerProps } from "../../HighlightBanner"
import { CommunityPost, CommunityPostProps } from "../CommunityPost"

export interface CommunityPostListProps {
  posts: Omit<CommunityPostProps, "onClick">[]
  onClickPost: (postId: string) => void
  highlightBanner?: HighlightBannerProps
}

const BaseCommunityPostList = forwardRef<
  HTMLDivElement,
  CommunityPostListProps
>(function BaseCommunityPostList({ posts, onClickPost, highlightBanner }, ref) {
  const baseClassName = "flex flex-col gap-5"

  if (!posts.length) {
    return (
      <div className={baseClassName} ref={ref}>
        {!!highlightBanner && <HighlightBanner {...highlightBanner} />}
      </div>
    )
  }

  return (
    <div className={baseClassName} ref={ref}>
      <CommunityPost {...posts[0]} onClick={onClickPost} />
      {highlightBanner && <HighlightBanner {...highlightBanner} />}
      {posts.slice(1).map((post) => (
        <CommunityPost key={post.id} {...post} onClick={onClickPost} />
      ))}
    </div>
  )
})

const CommunityPostListSkeleton = () => {
  return (
    <div className="flex flex-col gap-5">
      {new Array(6).fill(null).map((_, index) => (
        <CommunityPost.Skeleton key={index} withEvent={index % 2 === 0} />
      ))}
    </div>
  )
}

export const CommunityPostList = withSkeleton(
  BaseCommunityPostList,
  CommunityPostListSkeleton
)
