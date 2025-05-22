// packages/react/src/experimental/Banner/index.tsx
import { Button } from "@/components/Actions/Button"
import { X } from "lucide-react"
import { forwardRef } from "react"

type BannerProps = {
  title: string
  subtitle?: string
  image: string
  variant?: "default" | "promote"
  primaryAction?: {
    label: string
    icon?: React.ReactNode
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  onClose?: () => void
}

export const Banner = forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      title,
      subtitle,
      image,
      variant = "default",
      primaryAction,
      secondaryAction,
      onClose,
    },
    ref
  ) => (
    <div
      ref={ref}
      className="bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5"
    >
      {/* Imagen 16:9 */}
      <div className="aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-lg object-cover"
        />
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
          {primaryAction && (
            <Button
              onClick={primaryAction.onClick}
              label={primaryAction.label}
              variant={variant}
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

      {/* Botón de cerrar */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-f1-foreground-secondary hover:text-f1-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  )
)

Banner.displayName = "Banner"
