import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgVideo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      d="M8.8 6H15.2C16.8802 6 17.7202 6 18.362 6.32698C18.9265 6.6146 19.3854 7.07354 19.673 7.63803C20 8.27976 20 9.11984 20 10.8V13.2C20 14.8802 20 15.7202 19.673 16.362C19.3854 16.9265 18.9265 17.3854 18.362 17.673C17.7202 18 16.8802 18 15.2 18H8.8C7.11984 18 6.27976 18 5.63803 17.673C5.07354 17.3854 4.6146 16.9265 4.32698 16.362C4 15.7202 4 14.8802 4 13.2V10.8C4 9.11984 4 8.27976 4.32698 7.63803C4.6146 7.07354 5.07354 6.6146 5.63803 6.32698C6.27976 6 7.11984 6 8.8 6Z"
      vectorEffect="non-scaling-stroke"
    />
    <path
      stroke="currentColor"
      d="M10 14.1169V9.8831C10 9.49445 10.424 9.25439 10.7572 9.45435L14.2854 11.5713C14.6091 11.7655 14.6091 12.2345 14.2854 12.4287L10.7572 14.5457C10.424 14.7456 10 14.5056 10 14.1169Z"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVideo)
export default ForwardRef
