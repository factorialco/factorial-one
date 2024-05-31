/* eslint-disable react-hooks/rules-of-hooks */
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"
import { XRayContext } from "./xray"

export const componentTypes = ["layout", "info"] as const
type ComponentTypes = (typeof componentTypes)[number]

interface ComponentMetadata {
  name: string
  type: ComponentTypes
  internal?: boolean
}

type TypeVariant = Record<ComponentTypes, string>

const variants = cva("outline-dashed outline-1 outline-red-500", {
  variants: {
    type: {
      layout: "outline-red-500",
      info: "outline-blue-500",
    } satisfies TypeVariant,
  },
})

const tagVariants = cva("px-2 py-1 text-xs uppercase", {
  variants: {
    type: {
      layout: "bg-red-500  text-white",
      info: "bg-blue-500  text-white",
    } satisfies TypeVariant,
  },
})

export const Component = <
  R extends HTMLElement,
  P extends { className?: string } & React.RefAttributes<R>,
>(
  meta: ComponentMetadata,
  Component: React.FC<P>
) => {
  return forwardRef<R, P>((props: P, forwardedRef) => {
    const { className } = props

    const { enabled } = useContext(XRayContext)

    const ref = useRef<R>(null)

    useImperativeHandle(forwardedRef, () => ref.current as R)

    const showXray = enabled && !meta.internal

    useEffect(() => {
      if (!showXray || !ref.current) return

      const element = ref.current
      element.dataset.componentName = meta.name

      const body = document.querySelector("body")

      let div: HTMLDivElement | null = null

      if (body) {
        const elementRect = element.getBoundingClientRect()
        const { top, left } = elementRect
        div = document.createElement("div")
        div.style.position = "absolute"
        div.style.top = `${top}px`
        div.style.left = `${left}px`
        div.className = tagVariants({ type: meta.type })
        div.innerText = meta.name
        body.appendChild(div)
      }

      return () => {
        if (element) element.dataset.componentName
        if (div) body?.removeChild(div)
      }
    }, [showXray])

    if (!showXray) return <Component {...props} ref={ref} />

    return (
      <>
        <Component
          ref={ref}
          className={cn(className, variants({ type: meta.type }))}
          {...props}
        />
      </>
    )
  })
}
