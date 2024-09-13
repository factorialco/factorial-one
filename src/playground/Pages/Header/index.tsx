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
        <div className="flex flex-col gap-2 pl-5">
          <h1 className="text-f1-foreground pt-2 text-xl font-medium">
            {title}
          </h1>
          <h2 className="text-f1-foreground text-lg font-normal">{subtitle}</h2>
        </div>
      </div>
    )
  }
)
