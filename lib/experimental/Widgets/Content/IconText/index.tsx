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
  function IconText({ icon, texts }, ref) {
    const iconSvg = iconsMap[icon]
    return (
      <div
        ref={ref}
        className="flex flex-row items-start gap-1 text-f1-foreground-secondary"
      >
        <div className="relative top-0.5">
          <Icon icon={iconSvg} size="sm" />
        </div>
        <p className="font-medium text-f1-foreground">
          {texts.map((text, index) => (
            <span
              key={text}
              className={
                index > 0 ? "before:mx-1 before:content-['·']" : undefined
              }
            >
              {text}
            </span>
          ))}
        </p>
      </div>
    )
  }
)
