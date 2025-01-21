"use client"

import { Image } from "@/lib/imageHandler"
import { cn } from "@/lib/utils"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva } from "class-variance-authority"
import * as React from "react"

export const sizes = ["xsmall", "small", "medium", "large", "xlarge"] as const

export const type = ["base", "rounded"] as const

export const color = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel",
] as const

const avatarVariants = cva(
  "relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold ring-1 ring-inset ring-f1-border-secondary",
  {
    variants: {
      size: {
        xsmall: "size-5 rounded-xs text-sm",
        small: "size-6 rounded-sm text-sm",
        medium: "size-8 rounded",
        large: "size-14 rounded-xl text-xl",
        xlarge: "size-18 rounded-[20px] text-2xl",
      } satisfies Record<(typeof sizes)[number], string>,
      type: {
        base: "",
        rounded: "rounded-full",
      } satisfies Record<(typeof type)[number], string>,
      color: {
        viridian: "bg-[hsl(theme(colors.viridian.70))]",
        malibu: "bg-[hsl(theme(colors.malibu.70))]",
        yellow: "bg-[hsl(theme(colors.yellow.70))]",
        purple: "bg-[hsl(theme(colors.purple.70))]",
        lilac: "bg-[hsl(theme(colors.lilac.70))]",
        barbie: "bg-[hsl(theme(colors.barbie.70))]",
        smoke: "bg-[hsl(theme(colors.smoke.70))]",
        army: "bg-[hsl(theme(colors.army.70))]",
        flubber: "bg-[hsl(theme(colors.flubber.70))]",
        indigo: "bg-[hsl(theme(colors.indigo.70))]",
        camel: "bg-[hsl(theme(colors.camel.70))]",
      } satisfies Record<(typeof color)[number], string>,
    },
    defaultVariants: {
      size: "medium",
      type: "base",
      color: "viridian",
    },
  }
)

type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> & {
  size?: (typeof sizes)[number]
  type?: (typeof type)[number]
  color?: (typeof color)[number]
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ size, type, color, className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, type, color, className }))}
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
    className={cn("aspect-square h-full w-full object-cover", className)}
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
      "flex h-full w-full items-center justify-center text-f1-foreground-inverse",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
