import { Button } from "@/components/Actions/Button"
import Share from "@/icons/app/Share"
import { AlertAvatar } from "../Information/Avatars/AlertAvatar"


type BannerProps = {
  title: string
  description: string
  buttonType: 'promote' | 'outline'
  onRequestClick?: () => void
  onSeeClick?: () => void
}

export const Banner = ({
  title,
  description,
  buttonType,
  onRequestClick,
  onSeeClick
}: BannerProps) => {
    const fontColor = buttonType == 'outline' ? 'text-f1-foreground-info' : 'text-f1-foreground-warning'
    const backgroundColor  = buttonType == 'outline' ? 'bg-f1-background-info' : 'bg-f1-background-warning'
    const alertType = buttonType == 'outline' ? 'info' : 'warning'
  return (    
    <div className={`flex w-full flex-col items-start justify-between gap-4 rounded-md ${backgroundColor} text-f1-foreground  px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4`}>
  <div className="flex flex-row justify-between items-center gap-4">
    <div className="flex flex-row gap-4">
      <AlertAvatar type={alertType} />
      <div className="flex flex-col pl-4 gap-4">
      <h3 className={`${fontColor}`}>{title}</h3>
        <p className="text-base text-f1-foreground">{description}</p>
      </div>
    </div>
    <div className="flex flex-row gap-16">
      <div className="flex flex-row">
        <Button icon={Share} label="See all invoices" variant="ghost"  onClick={onSeeClick} />
      </div>
      <Button label="Request info" variant={buttonType}  onClick={onRequestClick} />
    </div>
  </div>
</div>
  )
}
