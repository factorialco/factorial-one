import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgPencil = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 13L5.5 18.5L11 17M7 13L14.5 5.5C15.6046 4.39543 17.3954 4.39543 18.5 5.5V5.5C19.6046 6.60457 19.6046 8.39543 18.5 9.5L11 17M7 13L11 17"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPencil)
export default ForwardRef
