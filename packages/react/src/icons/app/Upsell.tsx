import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"

const SvgUpsell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    ref={ref}
    {...props}
  >
    <path
      fill="#F5A51C"
      d="M13.9999 5.50006C13.9999 5.06432 13.7178 4.67875 13.3025 4.54693C12.8871 4.41511 12.4343 4.5674 12.183 4.92339L6.18303 13.4233C5.9676 13.7285 5.94025 14.1284 6.11212 14.4601C6.28399 14.7918 6.62642 15 7 15H9.99997V19.5C9.99997 19.9246 10.2682 20.303 10.669 20.4436C11.0697 20.5841 11.5155 20.4563 11.7808 20.1246L17.7808 12.6247C18.0209 12.3245 18.0677 11.9133 17.9012 11.5668C17.7347 11.2204 17.3843 11 16.9999 11H13.9999V5.50006Z"
    />
  </svg>
)

const ForwardRef = forwardRef(SvgUpsell)
export default ForwardRef
