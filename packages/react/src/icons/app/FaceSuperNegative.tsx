import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgFaceSuperNegative = (
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
      d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM9.99982 9C10.5521 9 10.9998 9.44772 10.9998 10V11C10.9998 11.5523 10.5521 12 9.99982 12C9.44753 12 8.99982 11.5523 8.99982 11V10C8.99982 9.44772 9.44753 9 9.99982 9ZM13.9998 9C14.5521 9 14.9998 9.44772 14.9998 10V11C14.9998 11.5523 14.5521 12 13.9998 12C13.4475 12 12.9998 11.5523 12.9998 11V10C12.9998 9.44772 13.4475 9 13.9998 9ZM9 15.3276C9 14.0421 10.3431 13 12 13C13.6569 13 15 14.0421 15 15.3276C15 16.2677 14.2817 16.1925 13.2476 16.0842C12.8677 16.0444 12.4452 16.0001 12 16.0001C11.5548 16.0001 11.1323 16.0444 10.7524 16.0842C9.71834 16.1925 9 16.2677 9 15.3276Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFaceSuperNegative)
export default ForwardRef
