import { DateAvatar } from "@/experimental/Information/Avatars/DateAvatar"
import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"

type PostEventProps = {
  title: string
  image?: string
  place: string
  date: {
    hour: string
    day: number
    month: string
  }
}

export const BasePostEvent = ({
  title,
  image,
  place,
  date,
}: PostEventProps) => {
  return (
    <div className="flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow">
      {image && (
        <img
          src={image}
          alt={title}
          className="aspect-video h-full w-full rounded-md object-cover"
        />
      )}
      <div className="flex h-full flex-row gap-3 p-2">
        <div className="w-1 shrink-0 self-stretch rounded-full bg-f1-background-accent-bold" />
        <div className="flex min-w-0 grow flex-col">
          <span className="truncate font-medium text-f1-foreground">
            {title}
          </span>
          <span className="flex min-w-0 flex-row gap-1 text-f1-foreground-secondary">
            <span>{date.hour}</span>
            <span>·</span>
            <span className="truncate">{place}</span>
          </span>
        </div>
        <div className="shrink-0">
          <DateAvatar day={date.day} month={date.month} />
        </div>
      </div>
    </div>
  )
}

export const PostEventSkeleton = () => (
  <div
    className="flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1"
    role="status"
    aria-busy="true"
    aria-live="polite"
  >
    <div>
      <Skeleton className="aspect-video h-full w-full rounded-lg" />
    </div>
    <div className="flex h-full flex-row gap-3 p-2">
      <Skeleton className="w-1 shrink-0 self-stretch rounded-full" />
      <div className="flex grow flex-col gap-1.5 py-1">
        <Skeleton className="mt-px h-3 w-1/2" />
        <Skeleton className="mb-px h-3 w-1/4" />
      </div>
    </div>
  </div>
)

export const PostEvent = withSkeleton(BasePostEvent, PostEventSkeleton)
