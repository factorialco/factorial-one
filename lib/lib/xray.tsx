import { cva } from "class-variance-authority"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import type { ComponentMetadata, ComponentTypes } from "./component"

declare global {
  interface Window {
    XRay: {
      toggle: () => void
    }
  }
}

export const XRayContext = createContext<{
  enabled: boolean
  setEnabled: (enabled: boolean) => void
}>({ enabled: false, setEnabled: () => null })

export const XRayProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    window.XRay = {
      toggle: () => setEnabled((enabled) => !enabled),
    }
  }, [setEnabled])

  return (
    <XRayContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </XRayContext.Provider>
  )
}

type TypeVariant = Record<ComponentTypes, string>

const variants = cva("outline-dashed outline-1 outline-red-500", {
  variants: {
    type: {
      layout: "outline-red-500",
      info: "outline-blue-500",
      action: "outline-green-600",
    } satisfies TypeVariant,
  },
})

const tagVariants = cva("px-2 py-1 text-xs uppercase", {
  variants: {
    type: {
      layout: "bg-red-500  text-white",
      info: "bg-blue-500  text-white",
      action: "bg-green-600  text-white",
    } satisfies TypeVariant,
  },
})

export const useComponentXRay = <R extends HTMLElement>(
  meta: ComponentMetadata,
  forwardedRef: React.ForwardedRef<R>
) => {
  const { enabled } = useContext(XRayContext)

  const ref = useRef<R | null>(null)

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
      div.style.zIndex = "9999"
      div.className = tagVariants({ type: meta.type })
      div.innerText = meta.name
      body.appendChild(div)
    }

    return () => {
      if (element) element.dataset.componentName
      if (div) body?.removeChild(div)
    }
  }, [showXray, meta.name, meta.type])

  const className = showXray ? variants({ type: meta.type }) : ""

  return {
    ref,
    enabled,
    className,
  }
}

export const useXRay = () => {
  return useContext(XRayContext)
}
