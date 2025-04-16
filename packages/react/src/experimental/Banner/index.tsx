import { Button } from "@/components/Actions/Button"
import Share from "@/icons/app/Share"
import { AlertAvatar } from "../Information/Avatars/AlertAvatar"


type BannerProps = {
  title: string
  description: string
  buttonPrimaryLabel: string
  buttonSecondaryLabel: string
  onRequestClick?: () => void
  onSeeClick?: () => void
  variant: 'neutral' | 'info' | 'warning' | 'critical'
}

interface BannerType {
    buttonType: 'outline' | 'promote' | 'critical'
    fontColor: 'text-f1-foreground' | 'text-f1-foreground-info' | 'text-f1-foreground-warning' | 'text-f1-foreground-critical'
    backgroundColor: 'bg-f1-background-secondary' | 'bg-f1-background-info' | 'bg-f1-background-warning' | 'bg-f1-background-critical'
    alertType: 'info' | 'warning' | 'positive' | 'critical'
  }

export const Banner = ({
  title,
  description,
  buttonPrimaryLabel,
  buttonSecondaryLabel,
  onRequestClick,
  onSeeClick,
  variant
}: BannerProps) => {

    const bannerType = (): BannerType => {
        switch (variant){
            case 'info':
                return{
                    buttonType: 'outline',
                    fontColor: 'text-f1-foreground-info',
                    backgroundColor: 'bg-f1-background-info',
                    alertType: 'info'
                }
            case 'warning':
                return{
                    buttonType: 'promote',                    
                    fontColor: 'text-f1-foreground-warning',
                    backgroundColor: 'bg-f1-background-warning',
                    alertType: 'warning'
                    }
            case 'critical':
                return{
                    buttonType: 'outline',
                    fontColor: 'text-f1-foreground-critical',
                    backgroundColor: 'bg-f1-background-critical',
                    alertType: 'critical'
                }
            default: 
            return{
                buttonType: 'outline',
                fontColor: 'text-f1-foreground',
                backgroundColor: 'bg-f1-background-secondary',
                alertType: 'positive'
            }
        }
    }


    const bannerVariant = bannerType()    
    
  return (    
    <div className={`flex w-full flex-col items-start justify-between gap-4 rounded-md ${bannerVariant.backgroundColor} text-f1-foreground  px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4`}>
        <div className="flex flex-row justify-between items-center gap-16">
            <div className="flex flex-row gap-4">
                <AlertAvatar type={bannerVariant.alertType} />
                <div className="flex flex-col  gap-2">
                    <h3 className={`${bannerVariant.fontColor}`}>{title}</h3>
                    <p className="text-base text-f1-foreground">{description}</p>
                </div>
            </div>
            <div className="flex flex-row ">
                <Button icon={Share} label={buttonSecondaryLabel} variant="ghost"  onClick={onSeeClick} />
                <Button label={buttonPrimaryLabel} variant={bannerVariant.buttonType}  onClick={onRequestClick} />
            </div>
        </div>
    </div>
  )
}
