import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"

const SvgDiscover = (
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
    <g filter="url(#filter0_d_230_32)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.65 5.99998C17.65 5.78429 17.543 5.58265 17.3644 5.46173C17.1858 5.34082 16.9588 5.31637 16.7586 5.39647L13.7255 6.60971C12.5029 7.09873 11.1983 7.34998 9.88157 7.34998H5.99998C4.53642 7.34998 3.34998 8.53642 3.34998 9.99998V13C3.34998 14.4635 4.53642 15.65 5.99998 15.65H6.34998V17.6035C6.34998 18.929 7.42449 20.0035 8.74998 20.0035C10.0755 20.0035 11.15 18.929 11.15 17.6035V15.6587C11.7263 15.6917 12.2942 15.8177 12.8314 16.0326L16.7586 17.6035C16.9588 17.6836 17.1858 17.6591 17.3644 17.5382C17.543 17.4173 17.65 17.2157 17.65 17V5.99998Z"
      />
      <path
        fill="currentColor"
        d="M20.65 9.99998C20.65 9.64099 20.359 9.34998 20 9.34998C19.641 9.34998 19.35 9.64099 19.35 9.99998V14C19.35 14.359 19.641 14.65 20 14.65C20.359 14.65 20.65 14.359 20.65 14V9.99998Z"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_230_32"
        x="0.858146"
        y="4.10406"
        width="22.2837"
        height="19.6372"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.24591" />
        <feGaussianBlur stdDeviation="1.24591" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_230_32"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_230_32"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(SvgDiscover)
export default ForwardRef
