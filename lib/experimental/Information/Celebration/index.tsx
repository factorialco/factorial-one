import { Button } from "@/components/Actions/Button"
import { getAvatarColor } from "@/experimental/Information/Avatars/BaseAvatar/utils"
import { PersonAvatar } from "@/experimental/Information/Avatars/exports"
import Reaction from "@/icons/app/Reaction"
import { EmojiImage } from "@/lib/emojis"
import { Link } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"

type CelebrationProps = {
  firstName: string
  lastName: string
  src?: string
  type?: "birthday" | "anniversary" | "first-day"
  typeLabel: string
  date: {
    day: number
    month: string
  }
}

export const Celebration = ({
  firstName,
  lastName,
  src,
  type,
  typeLabel,
  date,
}: CelebrationProps) => {
  const backgroundColors = {
    viridian: "bg-[hsl(theme(colors.viridian.50)_/_0.2)]",
    malibu: "bg-[hsl(theme(colors.malibu.50)_/_0.2)]",
    yellow: "bg-[hsl(theme(colors.yellow.50)_/_0.2)]",
    purple: "bg-[hsl(theme(colors.purple.50)_/_0.2)]",
    lilac: "bg-[hsl(theme(colors.lilac.50)_/_0.2)]",
    barbie: "bg-[hsl(theme(colors.barbie.50)_/_0.2)]",
    smoke: "bg-[hsl(theme(colors.smoke.50)_/_0.2)]",
    army: "bg-[hsl(theme(colors.army.50)_/_0.2)]",
    flubber: "bg-[hsl(theme(colors.flubber.50)_/_0.2)]",
    indigo: "bg-[hsl(theme(colors.indigo.50)_/_0.2)]",
    camel: "bg-[hsl(theme(colors.camel.50)_/_0.2)]",
  } as const

  const emojiMap = {
    birthday: "🎂",
    anniversary: "🎉",
    "first-day": "💼",
  }

  const emojiList = emojiMap[type as keyof typeof emojiMap]
  const emoji = EmojiImage({ emoji: emojiList, size: "sm" })

  return (
    <Link
      href="/"
      className={cn(
        "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary no-underline transition-shadow hover:shadow",
        focusRing()
      )}
    >
      <div className="basis-2/3 px-1 pt-1">
        <div
          className={cn(
            "relative h-32 w-full overflow-hidden rounded-md bg-f1-background",
            !src
              ? backgroundColors[
                  getAvatarColor(
                    [firstName, lastName].join("")
                  ) as keyof typeof backgroundColors
                ]
              : ""
          )}
        >
          {src && (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
              style={{ backgroundImage: `url(${src})` }}
            />
          )}
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur">
            <div className="relative h-fit w-fit">
              <div
                style={{
                  clipPath:
                    "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')",
                }}
              >
                <PersonAvatar
                  src={src}
                  firstName={firstName}
                  lastName={lastName}
                  size="large"
                />
              </div>
              <div className="absolute -bottom-[3px] -right-0.5">
                <Button
                  label="React"
                  hideLabel
                  round
                  variant="neutral"
                  size="sm"
                  icon={Reaction}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex basis-1/3 flex-row justify-between p-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="truncate font-medium text-f1-foreground">
            {firstName} {lastName}
          </div>
          <div className="flex flex-row items-center gap-1.5 text-f1-foreground-secondary">
            <span>{typeLabel}</span>
            <span className="leading-none">{emoji}</span>
          </div>
        </div>
        <div className="shrink-0">{date.month}</div>
      </div>
    </Link>
  )
}
