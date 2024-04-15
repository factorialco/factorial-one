import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  sizes,
} from "@/foundations/avatar"
import { Button } from "@/foundations/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/foundations/hover-card"

interface Props {
  firstName: string
  lastName: string
  job: string
  image: string
  size?: (typeof sizes)[number]
}

export const EmployeeAvatar: React.FC<Props> = ({
  firstName,
  lastName,
  job,
  image,
  size = "medium",
}) => {
  let fullName = firstName + " " + lastName
  let nameFallback = firstName[0] + lastName[0]
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar size={size}>
          <AvatarImage src={image} alt={fullName} />
          <AvatarFallback>{nameFallback}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        sideOffset={12}
        align="start"
        className="w-80 rounded-2xl slide-in-from-right-2"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex-none">
              <Avatar size="xlarge">
                <AvatarImage src={image} alt={fullName} />
                <AvatarFallback>{nameFallback}</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-medium leading-none tracking-tight">
                {firstName} {lastName}
              </p>
              <p className="text-secondary-foreground">{job}</p>
            </div>
          </div>
          <Button variant="secondary" className="w-full">
            View profile
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
