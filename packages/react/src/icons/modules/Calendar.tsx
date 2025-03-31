import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgCalendar = (
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
      d="M10 4.00002C10 3.44773 9.55228 3.00002 9 3.00002C8.44772 3.00002 8 3.44773 8 4.00002V5.00002H7.5C5.567 5.00002 4 6.56702 4 8.50002V11V17.5C4 19.433 5.567 21 7.5 21H16.5C18.433 21 20 19.433 20 17.5V11V8.50002C20 6.56702 18.433 5.00002 16.5 5.00002H16V4.00002C16 3.44773 15.5523 3.00002 15 3.00002C14.4477 3.00002 14 3.44773 14 4.00002V5.00002H10V4.00002ZM7.6 10H16.4C16.9601 10 17.2401 10 17.454 10.109C17.6422 10.2049 17.7951 10.3579 17.891 10.546C18 10.7599 18 11.04 18 11.6V15.8C18 16.9201 18 17.4802 17.782 17.908C17.5903 18.2843 17.2843 18.5903 16.908 18.782C16.4802 19 15.9201 19 14.8 19H9.2C8.0799 19 7.51984 19 7.09202 18.782C6.71569 18.5903 6.40973 18.2843 6.21799 17.908C6 17.4802 6 16.9201 6 15.8V11.6C6 11.04 6 10.7599 6.10899 10.546C6.20487 10.3579 6.35785 10.2049 6.54601 10.109C6.75992 10 7.03995 10 7.6 10Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCalendar)
export default ForwardRef
