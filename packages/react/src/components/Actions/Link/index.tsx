import { cva, type VariantProps } from "cva"
import { forwardRef } from "react"
import ExternalLink from "../../../icons/app/ExternalLink"
import {
  Link as BaseLink,
  LinkProps as BaseLinkProps,
  useNavigation,
} from "../../../lib/linkHandler"
import { cn } from "../../../lib/utils"
import { Icon } from "../../Utilities/Icon"

const linkVariants = cva({
  base: "inline-flex flex-row items-center gap-1 text-base",
  variants: {
    variant: {
      text: "text-inherit no-underline",
      link: "text-f1-link underline visited:text-f1-link hover:text-f1-link active:text-f1-link",
    },
    active: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    variant: "link",
  },
})

export interface LinkProps
  extends BaseLinkProps,
    VariantProps<typeof linkVariants> {
  stopPropagation?: boolean
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { className, children, variant, stopPropagation = false, ...props },
  ref
) {
  const { target } = props
  const external = target === "_blank"
  const { isActive } = useNavigation()

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (stopPropagation) {
      event.stopPropagation()
    }
    props.onClick?.(event)
  }

  return (
    <BaseLink
      ref={ref}
      {...props}
      onClick={handleClick}
      className={cn(
        linkVariants({ variant, active: isActive(props.href) }),
        className
      )}
    >
      <span>{children}</span>
      {external && <Icon icon={ExternalLink} size="sm" />}
    </BaseLink>
  )
})
