import { Icon, IconType } from "@/components/Utilities/Icon"

interface IconTextProps {
  icon: IconType
  text: string
}

export const IconText: React.FC<IconTextProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-row items-center gap-1 text-intermediate">
      <Icon icon={icon} size={"md"} />
      <p className="font-medium">{text}</p>
    </div>
  )
}
