import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { cn } from "@/lib/utils"
import { MentionedUser } from "../../../../RichTextEditor/utils/types"

interface MentionItemProps {
  item: MentionedUser
  selected: boolean
}

export const MentionItem = ({ item, selected }: MentionItemProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md border border-solid p-1.5 hover:bg-f1-background-hover",
        selected ? "border-f1-border-selected-bold" : "border-f1-border-inverse"
      )}
    >
      <PersonAvatar
        firstName={item.label}
        lastName=""
        src={item.image_url ?? undefined}
        size="small"
      />
      <p className="text-neutral-100 text-md truncate text-ellipsis font-medium">
        {item.label}
      </p>
    </div>
  )
}
