/* eslint-disable react-hooks/rules-of-hooks */
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { useComponentXRay } from "./xray"

export const componentTypes = ["layout", "info", "action"] as const
export type ComponentTypes = (typeof componentTypes)[number]

export interface ComponentMetadata {
  name: string
  type: ComponentTypes
  internal?: boolean
}

export const Component = <
  R extends HTMLElement,
  P extends { className?: string } & React.RefAttributes<R>,
>(
  meta: ComponentMetadata,
  Component: React.FC<P>
) => {
  const Forwarded = forwardRef<R, P>((props: P, forwardedRef) => {
    const { enabled, className, ref } = useComponentXRay(meta, forwardedRef)

    return (
      <Component
        ref={ref}
        className={cn(props.className, enabled ? className : null)}
        {...props}
      />
    )
  })
  Forwarded.displayName = `${meta.name}`
  return Forwarded
}
