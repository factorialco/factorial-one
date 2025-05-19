// packages/react/src/experimental/ProductBlankslate/index.tsx
import { Button } from "@/components/Actions/Button"
import { Icon } from "@/components/Utilities/Icon"
import { CheckCircle } from "@/icons/app"
import { forwardRef } from "react"

type ProductBlankslateProps = {
  title: string
  subtitle?: string
  image: string
  benefits: string[]
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

const Benefits = ({ benefits }: { benefits: string[] }) => (
  <div className="flex flex-col gap-2">
    {benefits.map((text, idx) => (
      <BenefitItem key={idx} text={text} />
    ))}
  </div>
)

interface BenefitItemProps {
  text: string
}

const BenefitItem = ({ text }: BenefitItemProps) => (
  <div className="flex flex-row items-start gap-2">
    <Icon icon={CheckCircle} size="md" className="text-f1-icon-positive" />
    <span>{text}</span>
  </div>
)

export const ProductBlankslate = forwardRef<
  HTMLDivElement,
  ProductBlankslateProps
>(
  (
    {
      title,
      image,
      benefits,
      variant = "default",
      primaryAction,
      secondaryAction,
    },
    ref
  ) => (
    <div
      ref={ref}
      className="bg-white flex flex-row rounded-xl border border-f1-border-secondary shadow-md"
    >
      {/* Imagen 16:9 */}
      <div className="aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-center gap-8 px-8 py-5">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl text-f1-foreground">{title}</h2>
          <Benefits benefits={benefits} />
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
    </div>
  )
)

ProductBlankslate.displayName = "ProductBlankslate"
