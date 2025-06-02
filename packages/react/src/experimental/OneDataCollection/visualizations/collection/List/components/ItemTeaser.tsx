import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/Avatar"
import { cn } from "@/lib/utils"

export type ItemTeaserProps = {
  title: string
  avatar?: AvatarVariant
  description?: string
  metadata?: string
  className?: string
}

export const ItemTeaser = ({
  title,
  avatar,
  description,
  metadata,
  className,
}: ItemTeaserProps) => {
  return (
    <article className={cn("flex items-center gap-2", className)}>
      {avatar && <Avatar avatar={avatar} size="medium" />}
      <div>
        <header>
          <h3 className="text-base font-medium text-f1-foreground">{title}</h3>
        </header>
        <aside className="font-regular flex flex-row gap-1 text-base text-f1-foreground-secondary">
          {description && (
            <h6 className="font-regular text-base">{description}</h6>
          )}
          {metadata && (
            <>
              {" • "}
              <h6 className="font-regular text-base">{metadata}</h6>
            </>
          )}
        </aside>
      </div>
    </article>
  )
}
