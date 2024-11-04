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

export function StandardLayout({ children, variant }: StandardLayoutProps) {
  return (
    <div className="relative flex-1 overflow-auto">
      <div className={cn(layoutVariants({ variant }))}>{children}</div>
    </div>
  )
}
