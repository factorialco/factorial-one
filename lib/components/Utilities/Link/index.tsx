import ExternalLink from "@/icons/ExternalLink"
import { Link as BaseLink, LinkProps as BaseLinkProps } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
import { Icon } from "../Icon"

const linkVariants = cva(
  "inline-flex items-baseline text-base text-link underline",
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface LinkProps
  extends BaseLinkProps,
    VariantProps<typeof linkVariants> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => {
    const { target } = props
    const external = target === "_blank"

    return (
      <BaseLink
        ref={ref}
        {...props}
        className={cn(linkVariants({}), className)}
      >
        {children}
        {external && <Icon className="ml-1" icon={ExternalLink} size="sm" />}
      </BaseLink>
    )
  }
)
