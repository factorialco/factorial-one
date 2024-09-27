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
        className="flex flex-row items-start gap-1 text-f1-foreground-secondary"
      >
        <div className="pt-0.5">
          <Icon icon={iconSvg} size="sm" />
        </div>
        <p className="font-medium text-f1-foreground">
          {texts.map((text, index) => (
            <>
              {index > 0 && (
                <span
                  key={`dot-${index}`}
                  className="mx-1 inline-block h-[0.15rem] w-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground align-middle"
                />
              )}
              {text}
            </>
          ))}
        </p>
      </div>
    )
  }
)
