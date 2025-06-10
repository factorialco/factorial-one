// packages/react/src/experimental/Banner/index.tsx
import { Button } from "@/components/Actions/Button"
import CrossIcon from "@/icons/app/Cross"
import { useState } from "react"
import { UpsellingButton, type UpsellingButtonProps } from "../UpsellingButton"

type DefaultAction = {
  variant: "default"
  label: string
  onClick: () => void
}

type PromoteAction = {
  variant: "promote"
  label: string
  onClick: () => void
  errorMessage: UpsellingButtonProps["errorMessage"]
  successMessage: UpsellingButtonProps["successMessage"]
  loadingState: UpsellingButtonProps["loadingState"]
  nextSteps: UpsellingButtonProps["nextSteps"]
  closeLabel: UpsellingButtonProps["closeLabel"]
  showIcon?: boolean
  showConfirmation?: boolean
}

type UpsellingBannerProps = {
  title: string
  subtitle?: string
  mediaUrl: string
  primaryAction?: DefaultAction | PromoteAction
  secondaryAction?: DefaultAction | PromoteAction
  onClose?: () => void
}

export function UpsellingBanner({
  title,
  subtitle,
  mediaUrl,
  primaryAction,
  secondaryAction,
  onClose,
}: UpsellingBannerProps) {
  const isVideo = mediaUrl?.includes(".mp4")

  const [isDismissed, setIsDismissed] = useState(false)

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
    setIsDismissed(true)
  }

  return !isDismissed ? (
    <div className="bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5">
      {/* Imagen 16:9 */}
      <div className="aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1">
        {isVideo ? (
          <video
            src={mediaUrl}
            autoPlay
            muted
            loop
            className="h-full w-full rounded-lg object-cover"
          />
        ) : (
          <img
            src={mediaUrl}
            alt=""
            className="h-full w-full rounded-lg object-cover"
          />
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3">
        <div className="flex w-full flex-col gap-1 sm:max-w-lg">
          <h3 className="font-bold text-xl text-f1-foreground">{title}</h3>
          {subtitle && (
            <p className="text-base text-f1-foreground-secondary">{subtitle}</p>
          )}
        </div>
        <div className="flex gap-3">
          {primaryAction && primaryAction.variant === "promote" && (
            <UpsellingButton
              label={primaryAction.label}
              onRequest={async () => {
                await primaryAction.onClick()
              }}
              errorMessage={primaryAction.errorMessage}
              successMessage={primaryAction.successMessage}
              loadingState={primaryAction.loadingState}
              nextSteps={primaryAction.nextSteps}
              closeLabel={primaryAction.closeLabel}
              showIcon={primaryAction.showIcon}
              showConfirmation={primaryAction.showConfirmation}
              variant={primaryAction.variant}
            />
          )}
          {primaryAction && primaryAction.variant === "default" && (
            <Button
              onClick={primaryAction.onClick}
              label={primaryAction.label}
              variant="default"
              size="md"
            />
          )}
          {secondaryAction && (
            <Button
              onClick={secondaryAction.onClick}
              label={secondaryAction.label}
              variant="outline"
              size="md"
            />
          )}
        </div>
      </div>
      <div className="absolute right-2 top-2 z-10">
        <Button
          variant="ghost"
          icon={CrossIcon}
          size="sm"
          hideLabel
          onClick={handleClose}
          label="Close"
        />
      </div>
    </div>
  ) : null
}

UpsellingBanner.displayName = "UpsellingBanner"
