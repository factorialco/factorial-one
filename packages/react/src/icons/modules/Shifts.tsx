import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgShifts = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.65 4.99998C3.63416 4.99998 2 6.63415 2 8.64998V15C2 17.0158 3.63416 18.65 5.65 18.65H12.6291C12.0413 17.7429 11.7 16.6613 11.7 15.5C11.7 12.2967 14.2968 9.7 17.5 9.7C18.2596 9.7 18.9851 9.84602 19.65 10.1115V8.64998C19.65 6.63415 18.0158 4.99998 16 4.99998H5.65ZM5 9.64998C5 9.291 5.29101 8.99998 5.65 8.99998H9.65C10.009 8.99998 10.3 9.291 10.3 9.64998C10.3 10.009 10.009 10.3 9.65 10.3H5.65C5.29101 10.3 5 10.009 5 9.64998ZM5 14C5 13.641 5.29101 13.35 5.65 13.35H7.65C8.00899 13.35 8.3 13.641 8.3 14C8.3 14.359 8.00899 14.65 7.65 14.65H5.65C5.29101 14.65 5 14.359 5 14Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.5 11C15.0147 11 13 13.0147 13 15.5C13 17.9853 15.0147 20 17.5 20C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11ZM17.5 13.35C17.859 13.35 18.15 13.641 18.15 14V15.054C18.15 15.1153 18.1806 15.1725 18.2316 15.2065L19.3605 15.9591C19.6592 16.1583 19.7399 16.5618 19.5408 16.8605C19.3417 17.1592 18.9381 17.2399 18.6394 17.0408L17.5105 16.2882C17.0978 16.0131 16.85 15.5499 16.85 15.054V14C16.85 13.641 17.141 13.35 17.5 13.35Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgShifts)
export default ForwardRef
