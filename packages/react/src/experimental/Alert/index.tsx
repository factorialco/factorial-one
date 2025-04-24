import { Button } from "@/components/Actions/Button"
import Share from "@/icons/app/Share"
import { AlertAvatar } from "../Information/Avatars/AlertAvatar"

type AlertProps = {
  title: string
  description: string
  buttonPrimaryLabel: string
  buttonSecondaryLabel: string
  onRequestClick?: () => void
  onSeeClick?: () => void
  variant: "info" | "warning" | "critical"
}

interface AlertType {
  buttonType: "outline" | "promote" | "critical"
  fontColor:
    | "text-f1-foreground"
    | "text-f1-foreground-info"
    | "text-f1-foreground-warning"
    | "text-f1-foreground-critical"
  backgroundColor:
    | "bg-f1-background-info"
    | "bg-f1-background-warning"
    | "bg-f1-background-critical"
  alertType: "info" | "warning" | "critical"
}

export const Alert = ({
  title,
  description,
  buttonPrimaryLabel,
  buttonSecondaryLabel,
  onRequestClick,
  onSeeClick,
  variant,
}: AlertProps) => {
  const alertType = (): AlertType => {
    switch (variant) {
      case "info":
        return {
          buttonType: "outline",
          fontColor: "text-f1-foreground-info",
          backgroundColor: "bg-f1-background-info",
          alertType: "info",
        }
      case "warning":
        return {
          buttonType: "promote",
          fontColor: "text-f1-foreground-warning",
          backgroundColor: "bg-f1-background-warning",
          alertType: "warning",
        }
      case "critical":
        return {
          buttonType: "outline",
          fontColor: "text-f1-foreground-critical",
          backgroundColor: "bg-f1-background-critical",
          alertType: "critical",
        }
    }
  }

  const alertVariant = alertType()

  return (
    <div
      className={`flex w-full flex-col items-start justify-between gap-4 rounded-md ${alertVariant.backgroundColor} px-3 py-3 text-f1-foreground ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4`}
    >
      <div className="flex flex-row items-center justify-between gap-16">
        <div className="flex flex-row gap-4">
          <AlertAvatar type={alertVariant.alertType} />
          <div className="flex flex-col gap-2">
            <h3 className={`${alertVariant.fontColor}`}>{title}</h3>
            <p className="text-base text-f1-foreground">{description}</p>
          </div>
        </div>
        <div className="flex flex-row">
          <Button
            icon={Share}
            label={buttonSecondaryLabel}
            variant="ghost"
            onClick={onSeeClick}
          />
          <Button
            label={buttonPrimaryLabel}
            variant={alertVariant.buttonType}
            onClick={onRequestClick}
          />
        </div>
      </div>
    </div>
  )
}
