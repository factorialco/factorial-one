import { Button } from "@/components/Actions/Button"
import { Icon } from "@/components/Utilities/Icon"
import Performance from "@/icons/Performance"
import { cn } from "@/lib/utils"
import { Button as ShadcnButton } from "@/ui/button"
import { CardLink } from "@/ui/card"
import { cva } from "class-variance-authority"
import { ComponentProps, forwardRef } from "react"

export type Variants = "performance" | "salary"

export interface EmptyStateType {
  title: string
  content: string
  link: string
  variant: Variants
  buttons: {
    label: string
    variant: ComponentProps<typeof ShadcnButton>["variant"]
  }[]
}

const emptyStateVariants = cva("", {
  variants: {
    background: {
      performance: "bg-warning",
      salary: "bg-red-200",
    },
  },
})

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateType>(
  ({ title, link, variant, content, buttons }, ref) => {
    return (
      <div
        className={cn(
          "relative flex h-48 max-w-96 flex-col justify-between rounded-xl pb-6 pl-5 pr-5 pt-4",
          emptyStateVariants({ background: variant })
        )}
        ref={ref}
      >
        <div className="flex flex-row justify-between">
          <p className="text-lg font-semibold">{title}</p>
          <CardLink href={link} />
        </div>
        <p className="flex text-xl font-semibold">{content}</p>
        <div className="flex flex-row gap-3">
          {buttons.map((button) => (
            <Button label={button.label} variant={button.variant} />
          ))}
        </div>
        <div className="absolute bottom-0 right-0 z-0 text-orange-300">
          <Icon icon={Performance} size="xl" />
        </div>
      </div>
    )
  }
)
