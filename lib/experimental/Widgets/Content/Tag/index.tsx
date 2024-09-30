import { Avatar } from "@/components/Information/Avatar"
import { ComponentProps } from "react"

interface TagProps {
  text: string
  avatar: ComponentProps<typeof Avatar>
}

const Tag: React.FC<TagProps> = ({ text, avatar }) => {
  return (
    <div className="flex flex-row items-center justify-start rounded-md border border-solid border-f1-border py-1 pl-1 pr-2 font-medium text-f1-foreground">
      <span className="mr-1.5">
        <Avatar alt={avatar.alt || text[0]} src={avatar.src} size="xsmall" />
      </span>
      <p>{text}</p>
    </div>
  )
}

export { Tag }
