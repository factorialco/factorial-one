import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgSolidStop = (
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
    <path
      fill="currentColor"
      d="M8 5H16C17.6569 5 19 6.34315 19 8V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8C5 6.34315 6.34315 5 8 5Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSolidStop)
export default ForwardRef
