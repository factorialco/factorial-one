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
  Component: React.FC<P>
) => {
  const Forwarded = forwardRef<R, P>(
    (props: PropsWithoutRef<P>, forwardedRef) => {
      const { ref } = useComponentXRay(meta, forwardedRef)

      return <Component ref={ref} {...(props as P)} />
    }
  )
  Forwarded.displayName = `${meta.name}`
  return Forwarded
}
