import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/Avatar"

export type ItemTeaserProps = {
  title: string
  avatar?: AvatarVariant
  description?: string[]
}

export const ItemTeaser = ({ title, avatar, description }: ItemTeaserProps) => {
  return (
    <article className="flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2">
      {avatar && <Avatar avatar={avatar} size="medium" />}
      <div className="flex flex-col gap-0.5 md:gap-1">
        <header>
          <h3 className="text-base font-medium text-f1-foreground">{title}</h3>
        </header>
        <aside>
          {description && description.length > 0 && (
            <div className="flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1">
              {description.map((item, index) => (
                <div key={index} className="flex flex-row gap-1">
                  <span className="line-clamp-1 break-all">{item}</span>
                  {index < description.length - 1 && (
                    <span className="hidden md:inline"> · </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </article>
  )
}
