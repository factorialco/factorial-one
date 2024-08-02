import * as React from "react"

import { cn } from "@/lib/utils"

import ArrowRight from "@/icons/ArrowRight"
import InfoCircleLine from "@/icons/InfoCircleLine"

import { Icon } from "@/components/Utilities/Icon"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "min-w-60 rounded-2xl border border-solid border-border bg-card text-card-foreground",
      className
    )}
    {...props}
  />
))

Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row gap-1.5 p-4 pb-0", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-base font-medium", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-base font-normal text-muted-foreground", className)}
    {...props}
  />
))
CardSubtitle.displayName = "CardSubtitle"

const CardInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("-ml-1 h-6 w-6", className)}>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-default text-muted-foreground">
          <Icon icon={InfoCircleLine} size="md" />
        </TooltipTrigger>
        <TooltipContent>
          <p {...props} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
))
CardInfo.displayName = "CardInfo"

const CardLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "h-6 w-6 text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
      {...props}
    >
      <Icon icon={ArrowRight} size="md" />
    </a>
  )
})
CardLink.displayName = "CardLink"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("px-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-4 pb-4 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardInfo,
  CardLink,
  CardSubtitle,
  CardTitle,
}
