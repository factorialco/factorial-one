import { Button, ButtonProps } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { ExternalLink } from "@/icons/app"

type Props = {
  title: string
  description: string
  action?: Pick<ButtonProps, "label" | "onClick"> & {
    icon: IconType
  }
  help?: {
    label: string
    onClick: () => void
  }
}

export const SectionHeader = ({ title, description, action, help }: Props) => {
  return (
    <div className="flex justify-between px-6 py-5">
      <div className="flex grow flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-f1-foreground">{title}</h2>
          <p className="text-f1-foreground-secondary">{description}</p>
        </div>
        {help && (
          <div className="w-fit">
            <Button
              label={help.label}
              variant="neutral"
              icon={ExternalLink}
              size="sm"
              onClick={help.onClick}
            />
          </div>
        )}
      </div>
      {action && (
        <Button
          label={action.label}
          variant="ghost"
          icon={action.icon}
          size="md"
          onClick={action.onClick}
        />
      )}
    </div>
  )
}

SectionHeader.displayName = "SectionHeader"
