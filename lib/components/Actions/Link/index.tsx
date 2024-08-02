import { useLinkContext } from "@/lib/linkHandler"
import { AnchorHTMLAttributes, forwardRef } from "react"

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { controller } = useLinkContext()

  return <a ref={ref} {...props} {...(controller?.(props) || {})} />
})
