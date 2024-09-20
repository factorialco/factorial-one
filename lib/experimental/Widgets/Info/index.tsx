import { Icon } from "@/components/Utilities/Icon"
import BriefcaseIcon from "@/icons/Briefcase"
import HomeIcon from "@/icons/Home"
import OfficeIcon from "@/icons/Office"
import { forwardRef } from "react"

const iconsMap = {
  office: OfficeIcon,
  briefcase: BriefcaseIcon,
  home: HomeIcon,
}

interface InfoProps {
  icon: keyof typeof iconsMap
  text: string
}

export const Info = forwardRef<HTMLDivElement, InfoProps>(
  ({ icon, text }, ref) => {
    const iconSvg = iconsMap[icon]
    return (
      <div
        ref={ref}
        className="flex flex-row items-center gap-1 text-f1-foreground-secondary"
      >
        <Icon icon={iconSvg} size={"md"} />
        <p className="font-medium text-f1-foreground">{text}</p>
      </div>
    )
  }
)
