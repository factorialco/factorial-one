import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"

const SvgSolidPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <rect
      x={6}
      y={5}
      width={4}
      height={14}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.3}
      rx={3}
      vectorEffect="non-scaling-stroke"
    />
    <rect
      x={14}
      y={5}
      width={4}
      height={14}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.3}
      rx={3}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)

const ForwardRef = forwardRef(SvgSolidPause)
export default ForwardRef 