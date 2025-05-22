import { Button } from "@/factorial-one"
import CrossIcon from "@/icons/app/Cross"
import { Card, CardContent, CardFooter } from "@/ui/Card"
import { Label } from "@/ui/label"
import { useEffect, useState } from "react"

type ProductWidgetProps = {
  mediaUrl: string
  title: string
  description: string
  buttonText: string
  onClick: () => void
  onClose: () => void
  dismissible: boolean
  width?: string
  trackVisibility?: (visible: boolean) => void
}

export function ProductWidget({
  mediaUrl,
  title,
  description,
  buttonText,
  onClick,
  onClose,
  dismissible,
  width,
  trackVisibility,
}: ProductWidgetProps) {
  const [isDismissed, setIsDismissed] = useState(false)

  const handleClose = () => {
    setIsDismissed(true)
    if (onClose) {
      onClose()
    }
  }

  useEffect(() => {
    if (trackVisibility) {
      trackVisibility(!isDismissed)
    }
  }, [trackVisibility, isDismissed])

  const isVideo = mediaUrl?.includes(".mp4")

  return (
    <>
      {!isDismissed ? (
        <Card style={{ width }} className="relative bg-f1-background p-1">
          <CardContent>
            {dismissible && (
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
            )}
            <div>
              <div>
                {isVideo ? (
                  <video
                    src={mediaUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full rounded-md"
                  />
                ) : (
                  <img
                    src={mediaUrl}
                    alt={title}
                    className="h-full w-full rounded-md"
                  />
                )}
              </div>
              <div className="flex flex-col gap-[2px] p-3">
                <Label className="text-lg font-medium">{title}</Label>
                <Label className="line-clamp-2 text-base font-normal text-f1-foreground-secondary">
                  {description}
                </Label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-3">
            <Button
              variant="neutral"
              size="sm"
              label={buttonText}
              onClick={onClick}
            />
          </CardFooter>
        </Card>
      ) : null}
    </>
  )
}
