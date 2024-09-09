import { Icon, IconType } from "@/components/Utilities/Icon"
import { forwardRef } from "react"

interface IconTextProps {
  icon: IconType
  text: string
}

export const IconText = forwardRef<HTMLDivElement, IconTextProps>(
  ({ icon, text }, ref) => {
    return (
      <div
        ref={ref}
        className="text-neutral-80 flex flex-row items-center gap-1"
      >
        <Icon icon={icon} size={"md"} />
        <p className="font-medium">{text}</p>
      </div>
    )
  }
)
