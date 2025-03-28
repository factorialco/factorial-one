import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgTrainings = (
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
      d="M12 6.82978C10.748 6.07603 9.5155 5.2994 8.27736 5.29999C6.86256 5.30066 5.56167 5.84732 4.3336 6.82978C4.12275 6.99846 4 7.25385 4 7.52388V15.8966C4 16.6616 4.46379 17.2253 4.99784 17.5121C5.52198 17.7935 6.19622 17.8619 6.8071 17.6056C8.16158 17.0374 9.62266 17.2264 11.5061 18.4851C11.805 18.6849 12.195 18.6849 12.4939 18.4851C14.3773 17.2264 15.8384 17.0374 17.1929 17.6056C17.8038 17.8619 18.478 17.7935 19.0022 17.5121C19.5362 17.2253 20 16.6616 20 15.8966V7.52388C20 7.25385 19.8773 6.99846 19.6664 6.82978C18.4383 5.84732 17.1374 5.30066 15.7226 5.29999C14.4845 5.2994 13.252 6.07603 12 6.82978Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTrainings)
export default ForwardRef
