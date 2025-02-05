import { ModuleAvatar } from "@/experimental/Information/ModuleAvatar/"
import { Kudos } from "@/icons/modules/"
import { Button } from "@/ui/button"

type HighlightBannerProps = {
  title: string
  subtitle: string
  buttonLabel: string
  onClick?: () => void
}

export const HighlightBanner = ({
  title,
  subtitle,
  buttonLabel,
  onClick,
}: HighlightBannerProps) => {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <ModuleAvatar icon={Kudos} size="lg" />
        <div className="flex flex-col gap-0">
          <span className="font-medium text-f1-foreground">{title}</span>
          <span className="text-f1-foreground-secondary">{subtitle}</span>
        </div>
      </div>
      <div className="w-full sm:w-fit">
        <Button
          variant="outline"
          onClick={onClick}
          className="w-full sm:w-auto"
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}
