import { Icon } from "@/components/Utilities/Icon"
import { Spinner } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import type { VariantProps } from "cva"
import { AnimatePresence, motion } from "motion/react"
import React, { ReactNode } from "react"
import {
  actionVariants,
  buttonSizeVariants,
  iconVariants,
  linkSizeVariants,
} from "./variants"

export interface ActionCommonProps {
  children: ReactNode

  prepend?: ReactNode
  append?: ReactNode
  prependOutside?: boolean
  appendOutside?: boolean

  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void

  disabled?: boolean
  loading?: boolean
  pressed?: boolean

  className?: string
  size?: "sm" | "md" | "lg"
}

export interface LinkActionProps {
  href: string
  target?: "_blank" | "_self" | "_parent" | "_top"
}

type ActionVariantProps = VariantProps<typeof actionVariants>

export type ActionProps = ActionCommonProps &
  Partial<LinkActionProps> &
  ActionVariantProps

export const Action = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ActionProps
>(
  (
    {
      children,
      prepend,
      append,
      prependOutside,
      appendOutside,
      onClick,
      onFocus,
      onBlur,
      disabled,
      loading,
      pressed,
      className,
      href,
      target,
      variant,
      size = "md",
    },
    ref
  ) => {
    const isLink = !!href
    const isLinkStyled = variant === "link" || variant === "mention"
    const defaultVariant = isLink ? variant || "link" : variant || "default"
    const variantClasses = actionVariants({
      variant: defaultVariant,
      pressed,
    })
    const sizeClasses = isLinkStyled
      ? linkSizeVariants({ size })
      : buttonSizeVariants({ size })

    const innerContent = (
      <>
        <div
          className={cn(
            "main flex items-center justify-center gap-1",
            loading && "opacity-0",
            iconVariants({ variant: defaultVariant })
          )}
        >
          {prepend && !prependOutside && prepend}
          <span>{children}</span>
          {append && !appendOutside && append}
        </div>
        <AnimatePresence>
          {loading && !isLinkStyled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                iconVariants({ variant: defaultVariant, mode: "only" })
              )}
            >
              <Icon icon={Spinner} className="animate-spin" />
            </motion.div>
          )}
          {loading && isLinkStyled && (
            <Skeleton className="absolute inset-0 my-auto h-full w-full" />
          )}
        </AnimatePresence>
      </>
    )

    const mainElement = isLink ? (
      disabled ? (
        <span
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-disabled={true}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          className={cn(variantClasses, sizeClasses, className)}
        >
          {innerContent}
        </span>
      ) : (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(variantClasses, sizeClasses, focusRing(), className)}
          aria-busy={loading}
        >
          {innerContent}
        </a>
      )
    ) : (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        data-pressed={pressed}
        className={cn(variantClasses, sizeClasses, focusRing(), className)}
        aria-busy={loading}
      >
        {innerContent}
      </button>
    )

    if (prependOutside || appendOutside) {
      return (
        <div className="flex items-center">
          {prependOutside && prepend}
          {mainElement}
          {appendOutside && append}
        </div>
      )
    }

    return mainElement
  }
)

Action.displayName = "Action"
