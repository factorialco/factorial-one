import { Button, ButtonProps, IconType, ProductWidget } from "@/factorial-one"
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover"

import { PopoverContentProps } from "@radix-ui/react-popover"
import { Upsell } from "../../../icons/app"
import { Action } from "../ProductWidget"

type UpsellingPopoverProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  label: string
  variant: ButtonProps["variant"]
  size?: ButtonProps["size"]
  side?: PopoverContentProps["side"]
  align?: PopoverContentProps["align"]
  icon?: IconType
  showIcon?: boolean
  mediaUrl: string
  title: string
  description: string
  width?: string
  trackVisibility?: (visible: boolean) => void
  actions?: Action[]
  onClick?: () => void
  hideLabel?: boolean
}

export function UpsellingPopover({
  isOpen,
  setIsOpen,
  label,
  variant = "promote",
  size = "md",
  showIcon = true,
  side = "right",
  align = "center",
  icon = Upsell,
  mediaUrl,
  title,
  description,
  width = "300px",
  trackVisibility,
  actions,
  onClick,
  hideLabel = false,
}: UpsellingPopoverProps) {
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (onClick) {
      onClick()
    }
  }

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          label={label}
          size={size}
          icon={showIcon ? icon : undefined}
          onClick={() => setIsOpen(isOpen)}
          hideLabel={hideLabel}
        />
      </PopoverTrigger>
      <PopoverContent
        side={side}
        align={align}
        className="w-fit border-none bg-transparent p-2 shadow-none"
      >
        <ProductWidget
          mediaUrl={mediaUrl}
          title={title}
          description={description}
          onClose={() => setIsOpen(false)}
          dismissible={false}
          width={width}
          trackVisibility={trackVisibility}
          actions={actions}
        />
      </PopoverContent>
    </Popover>
  )
}
