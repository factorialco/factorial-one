"use client"

import { Image } from "@/lib/imageHandler"
import { cn } from "@/lib/utils"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva } from "class-variance-authority"
import * as React from "react"

export const sizes = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge",
] as const

const avatarVariants = cva("relative flex shrink-0 overflow-hidden", {
  variants: {
    size: {
      xsmall: "h-6 w-6 rounded-xl text-sm",
      small: "h-10 w-10 rounded-xl text-sm",
      medium: "h-12 w-12 rounded-xl",
      large: "h-16 w-16 rounded-2xl text-xl",
      xlarge: "h-20 w-20 rounded-2xl text-xl",
      xxlarge: "h-32 w-32 rounded-3xl text-2xl",
    } satisfies Record<(typeof sizes)[number], string>,
  },
  defaultVariants: {
    size: "medium",
  },
})

type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> & {
  size?: (typeof sizes)[number]
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ size, className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, className }))}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
    asChild
  >
    <Image />
  </AvatarPrimitive.Image>
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-xl bg-f1-background-promote text-f1-foreground",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
