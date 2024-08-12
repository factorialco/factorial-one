import {
  ComponentType,
  createElement,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"

export const withVectorEffect = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  return forwardRef<SVGSVGElement, P>((props, ref) => {
    const innerRef = useRef<SVGSVGElement>(null)

    useImperativeHandle(ref, () => innerRef.current as SVGSVGElement)

    useEffect(() => {
      const svg = innerRef.current
      if (svg) {
        const elements = svg.querySelectorAll(
          "path, line, rect, circle, ellipse"
        )
        elements.forEach((el) => {
          el.setAttribute("vector-effect", "non-scaling-stroke")
        })
      }
    }, [])

    return createElement(WrappedComponent, { ...props, ref: innerRef })
  })
}
