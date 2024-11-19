import { DateAvatar } from "@/experimental/Information/Avatars/DateAvatar/"
import { useReducedMotion } from "@/lib/a11y"
import { EmojiImage } from "@/lib/emojis"
import { Link } from "@/lib/linkHandler"
import { withSkeleton } from "@/lib/skeleton"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { CelebrationAvatar } from "./components/avatar"
import { useConfetti } from "./hooks/useConfetti"
import { CelebrationProps, EMOJI_MAP } from "./types"

export const BaseCelebration = ({
  firstName,
  lastName,
  src,
  type,
  typeLabel,
  date,
}: CelebrationProps) => {
  const shouldReduceMotion = useReducedMotion()
  const { canvasRef, handleMouseEnter, handleMouseLeave } =
    useConfetti(shouldReduceMotion)

  const emoji = EmojiImage({
    emoji: EMOJI_MAP[type as keyof typeof EMOJI_MAP],
    size: "sm",
  })

  return (
    <Link
      href="/"
      className={cn(
        "bg-f1-background-inverse-secondar relative flex flex-col rounded-xl border border-solid border-f1-border-secondary no-underline transition-shadow hover:shadow",
        focusRing()
      )}
      onMouseEnter={shouldReduceMotion ? undefined : handleMouseEnter}
      onMouseLeave={shouldReduceMotion ? undefined : handleMouseLeave}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-50 h-full w-full"
      />
      <div className="basis-2/3 px-1 pt-1">
        <CelebrationAvatar
          firstName={firstName}
          lastName={lastName}
          src={src}
        />
      </div>
      <div className="flex basis-1/3 flex-row justify-between gap-2 p-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="truncate font-medium text-f1-foreground">
            {firstName} {lastName}
          </div>
          <div className="flex flex-row items-center gap-1.5 text-f1-foreground-secondary">
            <span className="truncate">{typeLabel}</span>
            <span className="shrink-0 leading-none">{emoji}</span>
          </div>
        </div>
        <div className="shrink-0">
          <DateAvatar month={date.month} day={date.day} />
        </div>
      </div>
    </Link>
  )
}

export const CelebrationSkeleton = () => {
  return (
    <div
      className="bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="basis-2/3 px-1 pt-1">
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
      <div className="flex basis-1/3 flex-row justify-between gap-2 p-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-col gap-2 py-1">
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const Celebration = withSkeleton(BaseCelebration, CelebrationSkeleton)
