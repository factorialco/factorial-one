import { FlexBox } from "@/components/Layout/_FlexBox"
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
    <FlexBox className="px-10 py-6">
      <Avatar size="xlarge">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{alt}</AvatarFallback>
      </Avatar>
      <FlexBox className="flex-col gap-4 pl-5">
        <h1 className="pt-2 text-[1.69rem]/[1.6rem] font-medium text-grey-700">
          {title}
        </h1>
        <h2 className="text-[1.19rem]/4 font-normal text-grey-500">
          {subtitle}
        </h2>
      </FlexBox>
    </FlexBox>
  )
}
