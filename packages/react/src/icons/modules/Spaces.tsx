import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SvgSpaces = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.4459 3.94817C11.4124 3.41124 12.5876 3.41124 13.5541 3.94817L18.3541 6.61483C19.3699 7.17922 20 8.25 20 9.41214V14.5878C20 15.7499 19.3699 16.8207 18.3541 17.3851L13.5541 20.0518C12.5876 20.5887 11.4124 20.5887 10.4459 20.0518L5.64594 17.3851C4.63005 16.8207 4 15.7499 4 14.5878V9.41214C4 8.25 4.63005 7.17922 5.64594 6.61483L10.4459 3.94817ZM12.777 5.34682C12.2938 5.07835 11.7062 5.07836 11.223 5.34682L6.4473 7.99997L12 11.0848L17.5527 7.99997L12.777 5.34682ZM18.3992 9.36005L12.8 12.4707V18.6404L14.4 17.7515V14.5151C14.4 13.9341 14.715 13.3987 15.223 13.1165L15.6115 12.9006C15.8593 12.763 16.1614 12.7667 16.4057 12.9105C16.65 13.0542 16.8 13.3165 16.8 13.6V16.4181L17.577 15.9865C18.085 15.7043 18.4 15.1689 18.4 14.5878V9.41214C18.4 9.39473 18.3997 9.37737 18.3992 9.36005Z"
      clipRule="evenodd"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSpaces)
export default ForwardRef
