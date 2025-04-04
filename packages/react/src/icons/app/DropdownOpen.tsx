import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgDropdownOpen = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <rect
      width={16}
      height={16}
      x={4}
      y={4}
      fill="#052657"
      fillOpacity={0.06}
      rx={4}
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="#0D1625"
      d="M15.5 13.75L12 10.25L8.5 13.75"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDropdownOpen)
export default ForwardRef
