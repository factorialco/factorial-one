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

interface IconTextProps {
  icon: keyof typeof iconsMap
  texts: string[]
}

export const IconText = forwardRef<HTMLDivElement, IconTextProps>(
  ({ icon, texts }, ref) => {
    const iconSvg = iconsMap[icon]
    return (
      <div
        ref={ref}
        className="flex flex-row items-center gap-1 text-f1-foreground-secondary"
      >
        <Icon icon={iconSvg} size={"sm"} />
        {texts.map((text, index) => {
          return (
            <div className="flex flex-row items-center justify-center gap-1">
              {index > 0 && (
                <div className="h-[0.15rem] w-[0.15rem] rounded-full bg-f1-foreground" />
              )}
              <p key={index} className="font-medium text-f1-foreground">
                {text}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
)
