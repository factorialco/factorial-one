import { Button, IconType } from "@/factorial-one"
import CrossIcon from "@/icons/app/Cross"
import { useEffect, useState } from "react"
import { ModuleAvatar } from "../../Information/ModuleAvatar"

export type ProductCardProps = {
  title: string
  description: string
  onClick: () => void
  onClose?: () => void
  isVisible: boolean
  icon: IconType
  dismissable?: boolean
  trackVisibility?: (open: boolean) => void
}

export function ProductCard({
  title,
  description,
  onClick,
  onClose,
  isVisible,
  icon,
  dismissable = false,
  trackVisibility,
}: ProductCardProps) {
  const [open, setOpen] = useState(isVisible)

  useEffect(() => {
    setOpen(isVisible)
    if (trackVisibility) {
      trackVisibility(isVisible)
    }
  }, [isVisible, trackVisibility])

  const handleClose = () => {
    setOpen(false)
    if (onClose) {
      onClose()
    }
  }

  return (
    open && (
      <div>
        <div className="p-2">
          <div
            className="flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary"
            onClick={onClick}
          >
            <ModuleAvatar icon={icon} size="lg" />
            <div className="flex flex-1 flex-col">
              <div>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="text-f1-foreground-secondary">{description}</p>
              </div>
            </div>
            {dismissable && (
              <div className="h-6 w-6">
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
          </div>
        </div>
      </div>
    )
  )
}
