import { forwardRef } from "react"
import ExternalLink from "../../../icons/app/ExternalLink"
import { Action, type ActionProps } from "../../../ui/Action/Action"
import { Icon } from "../../Utilities/Icon"

const privateProps = [
  "className",
  "append",
  "prepend",
  "appendOutside",
  "prependOutside",
  "pressed",
] as const

export type LinkProps = Omit<ActionProps, (typeof privateProps)[number]> & {
  stopPropagation?: boolean
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, stopPropagation = false, onClick, ...props },
  ref
) {
  const { target } = props
  const external = target === "_blank"

  const handleClick = (event?: React.MouseEvent<HTMLElement>) => {
    if (stopPropagation && event) {
      event.stopPropagation()
    }
    if (onClick) {
      onClick(event)
    }
  }

  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as ActionProps)

  return (
    <Action
      ref={ref}
      {...publicProps}
      variant={publicProps.variant}
      onClick={handleClick}
      append={external ? <Icon icon={ExternalLink} size="sm" /> : undefined}
    >
      {children}
    </Action>
  )
})
