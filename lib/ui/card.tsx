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
      "rounded-2xl border border-solid border-border bg-card text-card-foreground",
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
    className={cn(
      "truncate text-base font-normal text-muted-foreground",
      className
    )}
    {...props}
  />
))
CardSubtitle.displayName = "CardSubtitle"

const CardInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, content }, ref) => (
  <div
    ref={ref}
    className={cn("-ml-1 flex h-6 w-6 items-center justify-center", className)}
  >
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="h-5 w-5 cursor-help text-muted-foreground"
          aria-label={content}
        >
          <Icon icon={InfoCircleLine} size="md" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
))
CardInfo.displayName = "CardInfo"

const CardLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }) => {
  return (
    <a
      className={cn(
        "flex h-6 w-6 items-center justify-center text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
      aria-label={title}
      {...props}
    >
      <Icon icon={ArrowRight} size="md" />
    </a>
  )
})
CardLink.displayName = "CardLink"

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
  CardFooter,
  CardHeader,
  CardInfo,
  CardLink,
  CardSubtitle,
  CardTitle,
}
