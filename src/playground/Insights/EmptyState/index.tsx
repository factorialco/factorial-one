import { Button } from "@/components/Actions/Button"
import AreaGraph from "@/icons/AreaGraph"
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
          "relative flex h-52 max-w-96 flex-col justify-between rounded-xl pb-6 pl-5 pr-5 pt-4",
          emptyStateVariants({ background: variant })
        )}
        ref={ref}
      >
        <AreaGraph className="absolute -bottom-6 -right-7 z-10 h-64" />

        <div className="flex flex-row justify-between">
          <p className="text-lg font-semibold">{title}</p>
          <CardLink href={link} />
        </div>
        <p className="flex w-3/4 text-xl font-semibold">{content}</p>
        <div className="z-10 flex flex-row gap-3">
          {buttons.map((button) => (
            <Button label={button.label} variant={button.variant} />
          ))}
        </div>
      </div>
    )
  }
)
