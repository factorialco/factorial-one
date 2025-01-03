import { forwardRef } from "react"
import { HighlightBanner, HighlightBannerProps } from "../../HighlightBanner"
import { CommunityPost, CommunityPostProps } from "../CommunityPost"

export interface CommunityPostListProps {
  posts: Omit<CommunityPostProps, "onClick">[]
  onClickPost: (postId: string) => void
  highlightBanner?: HighlightBannerProps
}

export const CommunityPostList = forwardRef<
  HTMLDivElement,
  CommunityPostListProps
>(function CommunityPostList({ posts, onClickPost, highlightBanner }, ref) {
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
