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
  return forwardRef<R, P>((props: P, forwardedRef) => {
    const { enabled, className, ref } = useComponentXRay(meta, forwardedRef)

    if (!enabled) return <Component {...props} ref={ref} />

    return (
      <>
        <Component
          ref={ref}
          className={cn(props.className, className)}
          {...props}
        />
      </>
    )
  })
}
