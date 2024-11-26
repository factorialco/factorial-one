import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

export interface StandardLayoutProps
  extends VariantProps<typeof layoutVariants> {
  children?: React.ReactNode
}

const layoutVariants = cva(
  "relative flex w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  {
    variants: {
      variant: {
        narrow: "max-w-screen-lg",
      },
    },
  }
)

export const StandardLayout = React.forwardRef<
  HTMLElement,
  StandardLayoutProps & React.HTMLAttributes<HTMLElement>
>(({ children, variant, className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("relative flex-1 overflow-auto", className)}
      {...props}
    >
      <div className={cn(layoutVariants({ variant }))}>{children}</div>
    </section>
  )
})

StandardLayout.displayName = "StandardLayout"
