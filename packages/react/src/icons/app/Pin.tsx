import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 20C15 16.8 18 13.9346 18 10.4C18 6.86538 15.3137 4 12 4C8.68629 4 6 6.86538 6 10.4C6 13.9346 9 16.8 12 20Z"
      vectorEffect="non-scaling-stroke"
    />
    <rect
      width={4}
      height={4}
      x={10}
      y={8}
      stroke="currentColor"
      rx={2}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPin)
export default ForwardRef
