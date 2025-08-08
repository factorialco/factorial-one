import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"

const OneIcon = (
  {
    onDarkBackground = false,
    ...svgProps
  }: { onDarkBackground?: boolean } & SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const baseColor = onDarkBackground ? "#FFF" : "#25253D"
  const [gradientOne, gradientTwo] = ["1", "2"].map((id) => baseColor + id)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="26"
      fill="none"
      viewBox="0 0 27 26"
      ref={ref}
      {...svgProps}
    >
      <path
        fill={baseColor}
        d="m20.44 15.64-2.67-.53.16-.86c.4-2.5.32-4.4-.23-6a7.4 7.4 0 0 0-6.86-4.8 5.13 5.13 0 0 0-3.62 1.6L5.15 3.29A7.78 7.78 0 0 1 10.98.73c4.04 0 7.92 2.76 9.28 6.63.71 2.03.82 4.36.35 7.32l-.17.96Z"
      />
      <path
        fill={baseColor}
        d="M10.3 25.27a9.84 9.84 0 0 1-7.59-3.62C.51 18.93-.33 14.9.3 10.02l2.69.35c-.37 2.88-.35 6.88 1.83 9.57a7.2 7.2 0 0 0 5.59 2.62 7.21 7.21 0 0 0 5.5-2.82c.83-1.1 1.42-2.54 1.82-4.4l2.65.56a13.52 13.52 0 0 1-2.3 5.48 9.85 9.85 0 0 1-7.62 3.89h-.17Z"
      />
      <path
        fill={`url(#${gradientOne})`}
        d="M.3 10.02c-.63 4.89.2 8.9 2.41 11.63l2.11-1.71c-2.18-2.7-2.2-6.7-1.83-9.57l-2.7-.35Z"
      />
      <path
        fill={`url(#${gradientTwo})`}
        d="M17.7 16.9c-1 0-2-.05-3.05-.18-2.45-.3-4.35-.85-5.99-1.74a9.47 9.47 0 0 1-4.44-4.93 7.06 7.06 0 0 1 1-6.86l2.1 1.74a4.37 4.37 0 0 0-.56 4.19 6.77 6.77 0 0 0 3.2 3.48c1.33.72 2.92 1.18 5 1.43 2.77.33 5.3.17 7.5-.47 1.02-.3 1.99-.7 2.88-1.2l1.33 2.36c-1.07.6-2.23 1.1-3.45 1.45-1.7.49-3.56.74-5.53.74Z"
      />
      <defs>
        <linearGradient
          id={gradientOne}
          x1="1.5"
          x2="4"
          y1="10.5"
          y2="20.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#323E56" />
          <stop offset="1" stopColor={baseColor} />
        </linearGradient>
        <linearGradient
          id={gradientTwo}
          x1=".52"
          x2="24.02"
          y1="2.17"
          y2="18.63"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".27" stopColor={baseColor} />
          <stop offset=".54" stopColor="#FF355E" />
          <stop offset=".62" stopColor="#FB345D" />
          <stop offset=".69" stopColor="#F1345C" />
        </linearGradient>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(OneIcon)
export default ForwardRef
