import { Icon } from "@/components/Utilities/Icon"
import ExternalLink from "@/icons/ExternalLink"
import { Link as BaseLink, LinkProps as BaseLinkProps } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { forwardRef } from "react"

const linkVariants = cva("inline-flex flex-row items-center gap-1 text-base", {
  variants: {
    variant: {
      text: "text-inherit no-underline",
      link: "text-f1-link underline visited:text-f1-link hover:text-f1-link active:text-f1-link",
    },
  },
  defaultVariants: {
    variant: "link",
  },
})

export interface LinkProps
  extends BaseLinkProps,
    VariantProps<typeof linkVariants> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { className, children, variant, ...props },
  ref
) {
  const { target } = props
  const external = target === "_blank"

  return (
    <BaseLink
      ref={ref}
      {...props}
      className={cn(linkVariants({ variant }), className)}
    >
      <span>{children}</span>
      {external && <Icon icon={ExternalLink} size="sm" />}
    </BaseLink>
  )
})
