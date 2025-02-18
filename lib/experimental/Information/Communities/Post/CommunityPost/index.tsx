import { Button } from "@/components/Actions/Button"
import { Link } from "@/components/Actions/Link"
import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { Reactions, ReactionsProps } from "@/experimental/Information/Reactions"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { EllipsisHorizontal } from "@/icons/app"
import { getAgo } from "@/lib/date"
import { withSkeleton } from "@/lib/skeleton"
import { useIsStorybook } from "@/lib/storybook-utils/isStorybook"
import { Skeleton } from "@/ui/skeleton"
import { PostDescription, PostDescriptionProps } from "../PostDescription"
import { PostEvent, PostEventProps } from "../PostEvent"
import { isVideo } from "./video"

export type CommunityPostProps = {
  id: string
  author: {
    firstName: string
    lastName: string
    avatarUrl?: string
    url: string
  }
  group: {
    title: string
    onClick: () => void
  }
  createdAt: Date

  title: string
  description?: PostDescriptionProps["content"]
  mediaUrl?: string

  event?: PostEventProps

  counters: {
    views?: string
    comments: string
  }

  reactions?: ReactionsProps
  inLabel: string

  comment: {
    label: string
    onClick: () => void
  }

  onClick: (id: string) => void

  dropdownItems?: DropdownItem[]
}

export const BaseCommunityPost = ({
  id,
  author,
  group,
  createdAt,
  title,
  description,
  onClick,
  mediaUrl,
  event,
  counters,
  reactions,
  inLabel,
  comment,
  dropdownItems,
}: CommunityPostProps) => {
  const countersDisplay = [counters.views, counters.comments]
    .filter(Boolean)
    .join(" · ")

  const ago = getAgo(createdAt)

  const isStorybook = useIsStorybook()

  const handleClick = () => {
    onClick(id)
  }

  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.stopPropagation()
  }

  const authorFullName = `${author.firstName} ${author.lastName}`

  return (
    <div
      className="flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3"
      onClick={handleClick}
    >
      <div className="hidden md:block">
        <Link href={author.url} title={authorFullName} stopPropagation>
          <PersonAvatar
            firstName={author.firstName}
            lastName={author.lastName}
            src={author.avatarUrl}
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div className="flex flex-1 flex-row flex-wrap items-center gap-1">
              <Link
                href={author.url}
                className="block md:hidden"
                title={authorFullName}
                stopPropagation
              >
                <span className="flex items-center">
                  <PersonAvatar
                    firstName={author.firstName}
                    lastName={author.lastName}
                    src={author.avatarUrl}
                    size="xsmall"
                  />
                </span>
              </Link>
              <Link
                href={author.url}
                title={authorFullName}
                className="font-medium text-f1-foreground no-underline visited:text-f1-foreground"
                stopPropagation
              >
                {authorFullName}
              </Link>
              <span className="text-f1-foreground-secondary">{inLabel}</span>
              <Link
                onClick={group.onClick}
                title={group.title}
                className="font-medium text-f1-foreground no-underline visited:text-f1-foreground"
                stopPropagation
              >
                {group.title}
              </Link>
              <span className="hidden text-f1-foreground-secondary md:inline">
                ·
              </span>
              <span className="text-f1-foreground-secondary">{ago}</span>
            </div>

            <div className="flex flex-row gap-2">
              <div className="hidden flex-row gap-2 md:flex">
                <Link
                  onClick={comment.onClick}
                  title={comment.label}
                  stopPropagation
                >
                  <Button label={comment.label} size="sm" variant="outline" />
                </Link>
                {dropdownItems?.length && (
                  <Dropdown
                    items={dropdownItems}
                    icon={EllipsisHorizontal}
                    size="sm"
                  />
                )}
              </div>
              <div className="md:hidden">
                <Dropdown
                  items={[
                    {
                      label: comment.label,
                      onClick: comment.onClick,
                    },
                    ...(dropdownItems ?? []),
                  ]}
                  icon={EllipsisHorizontal}
                  size="sm"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-f1-foreground">
            <p className="text-xl font-semibold">{title}</p>
            {description && <PostDescription content={description} collapsed />}
          </div>
        </div>
        {mediaUrl && !event && (
          <div className="relative aspect-video overflow-hidden rounded-xl md:w-2/3">
            {isVideo(mediaUrl) ? (
              <video
                controls
                className="h-full w-full object-cover"
                onClick={handleVideoClick}
                preload={isStorybook ? "none" : "auto"}
              >
                <source src={mediaUrl} />
              </video>
            ) : (
              <img
                src={mediaUrl}
                role="presentation"
                loading="lazy"
                className="aspect-video h-full w-full object-cover"
              />
            )}
            <Skeleton className="absolute inset-0 -z-10 h-full w-full" />
          </div>
        )}
        {event && (
          <div className="w-full md:w-2/3">
            <PostEvent {...event} />
          </div>
        )}
        <p className="text-f1-foreground-secondary">{countersDisplay}</p>
        <Reactions
          items={reactions?.items ?? []}
          onInteraction={reactions?.onInteraction}
        />
      </div>
    </div>
  )
}

export type CommunityPostSkeletonProps = {
  withEvent?: boolean
  withImage?: boolean
}

export const CommunityPostSkeleton = ({
  withEvent,
  withImage,
}: CommunityPostSkeletonProps) => (
  <div className="flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3">
    <div className="hidden md:block">
      <Skeleton className="aspect-square w-8 rounded-full" />
    </div>
    <div className="w-full">
      <div className="flex h-6 flex-row items-center gap-2">
        <div className="md:hidden">
          <Skeleton className="aspect-square w-4 rounded-full" />
        </div>
        <Skeleton className="h-2.5 w-14 rounded-2xs" />
        <Skeleton className="h-2.5 w-18 rounded-2xs" />
      </div>
      <Skeleton className="mt-3.5 h-3.5 w-1/5 rounded-2xs" />
      <div className="mt-3">
        <PostDescription.Skeleton />
      </div>
      {withImage && !withEvent && (
        <div className="mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3">
          <Skeleton className="h-full w-full rounded-2xs" />
        </div>
      )}
      {withEvent && (
        <div className="mt-3 w-full md:w-2/3">
          <PostEvent.Skeleton />
        </div>
      )}
      <div className="mt-3 flex flex-row items-center gap-1 py-1">
        <Skeleton className="h-2.5 w-14 rounded-2xs" />
        <Skeleton className="h-2.5 w-14 rounded-2xs" />
      </div>
    </div>
  </div>
)

export const CommunityPost = withSkeleton(
  BaseCommunityPost,
  CommunityPostSkeleton
)
