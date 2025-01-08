import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"

const SvgSolidStop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <rect
      x={5}
      y={5}
      width={14}
      height={14}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.3}
      rx={3}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)

const ForwardRef = forwardRef(SvgSolidStop)
export default ForwardRef 