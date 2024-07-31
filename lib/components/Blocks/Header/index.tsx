import { FlexBox } from "@/components/Layout/_FlexBox"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"

interface HeaderProps {
  title: string
  subtitle: string
  src: string
  alt: string
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  src,
  alt,
}) => {
  return (
    <FlexBox className={cn("px-10 py-6")}>
      <Avatar size="xlarge">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{alt}</AvatarFallback>
      </Avatar>
      <FlexBox className={cn("flex-col gap-4 pl-5")}>
        <h1
          className={cn(
            "text-grey-700 pt-2 text-[1.69rem]/[1.6rem] font-semibold"
          )}
        >
          {title}
        </h1>
        <h2 className={cn("text-grey-500 text-[1.19rem]/4 font-normal")}>
          {subtitle}
        </h2>
      </FlexBox>
    </FlexBox>
  )
}
