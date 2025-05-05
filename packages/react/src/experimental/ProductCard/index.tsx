import { Button, IconType } from "@/factorial-one"
import CrossIcon from "@/icons/app/Cross"
import { cn } from "@/lib/utils"
import { ModuleAvatar } from "../Information/ModuleAvatar"
type ProductCardProps = {
  title: string
  description: string
  buttonText: string
  onClick: () => void
  onClose: () => void
  isVisible: boolean
  icon: IconType
  variant: "outline" | "promote"
}

const variants = {
  outline: "border-f1-border",
  promote: "border-f1-border-promote bg-f1-background-promote",
}

const ProductCard = ({
  title,
  description,
  buttonText,
  onClick,
  onClose,
  isVisible,
  icon,
  variant,
}: ProductCardProps) =>
  isVisible && (
    <div>
      <div className="p-2">
        <div
          className={cn(
            "flex flex-row gap-2 rounded-md border border-solid p-3 text-f1-foreground",
            variants[variant]
          )}
        >
          <ModuleAvatar icon={icon} size="md" />
          <div className="flex flex-1 flex-col justify-center">
            <div>
              <p className="font-medium">{title}</p>
              <p className="text-f1-foreground-secondary">{description}</p>
            </div>
            <div className="mt-3 w-[100px]">
              <Button variant="outline" label={buttonText} onClick={onClick} />
            </div>
          </div>
          <div className="h-6 w-6">
            <Button
              variant="ghost"
              icon={CrossIcon}
              size="sm"
              hideLabel
              onClick={onClose}
              label=""
            />
          </div>
        </div>
      </div>
    </div>
  )

export default ProductCard
