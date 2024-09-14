import ExternalLink from "@/icons/ExternalLink"
import { Link as BaseLink, LinkProps as BaseLinkProps } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
import { Icon } from "../Icon"

const linkVariants = cva("inline-flex items-baseline text-base", {
  variants: {
    variant: {
      text: "text-inherit no-underline",
      link: "text-f1-link hover:text-f1-link active:text-f1-link visited:text-f1-link underline",
    },
  },
  defaultVariants: {
    variant: "link",
  },
})

export interface LinkProps
  extends BaseLinkProps,
    VariantProps<typeof linkVariants> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, variant, ...props }, ref) => {
    const { target } = props
    const external = target === "_blank"

    return (
      <BaseLink
        ref={ref}
        {...props}
        className={cn(linkVariants({ variant }), className)}
      >
        {children}
        {external && <Icon className="ml-1" icon={ExternalLink} size="sm" />}
      </BaseLink>
    )
  }
)
