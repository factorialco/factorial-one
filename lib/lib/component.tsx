import { forwardRef, PropsWithoutRef } from "react"
import { useComponentXRay } from "./xray"

export const componentTypes = ["layout", "info", "action", "form"] as const
export type ComponentTypes = (typeof componentTypes)[number]

export interface ComponentMetadata {
  name: string
  type: ComponentTypes
  internal?: boolean
}

export const Component = <
  R extends HTMLElement | SVGElement,
  P extends React.RefAttributes<R>,
>(
  meta: ComponentMetadata,
  Component: React.FC<PropsWithoutRef<P>>
) => {
  const Forwarded = forwardRef<R, P>((props, forwardedRef) => {
    const { ref } = useComponentXRay(meta, forwardedRef)

    return <Component ref={ref} {...props} />
  })
  Forwarded.displayName = `${meta.name}`
  return Forwarded
}
