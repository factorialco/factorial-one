import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgFaceSuperPositive = (
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
      fillRule="evenodd"
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-2 5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm1 4.819c0 1.285-1.343 2.327-3 2.327s-3-1.042-3-2.328c0-.94.718-.864 1.752-.756.38.04.803.084 1.248.084.445 0 .868-.044 1.248-.084 1.034-.108 1.752-.184 1.752.757Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFaceSuperPositive)
export default ForwardRef
