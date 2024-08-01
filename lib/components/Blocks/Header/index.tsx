import { Avatar } from "@/components/Information/Avatar"
import { forwardRef } from "react"

interface HeaderProps {
  title: string
  subtitle: string
  src: string
  alt: string
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ title, subtitle, src, alt }, ref) => {
    return (
      <div className="flex px-10 py-6" ref={ref}>
        <Avatar size="xlarge" src={src} alt={alt} />
        <div className="flex flex-col gap-4 pl-5">
          <h1 className="pt-2 text-[1.69rem]/[1.6rem] font-medium text-foreground">
            {title}
          </h1>
          <h2 className="text-[1.19rem]/4 font-normal text-intermediate">
            {subtitle}
          </h2>
        </div>
      </div>
    )
  }
)
