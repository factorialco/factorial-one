import { useLinkContext } from "@/lib/linkHandler"
import { AnchorHTMLAttributes, forwardRef } from "react"

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { component } = useLinkContext()

  if (!component) return <a ref={ref} {...props} />
  const Component = forwardRef(component)

  return <Component ref={ref} {...props} />
})
