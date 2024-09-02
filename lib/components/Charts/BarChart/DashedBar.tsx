export const DashedBar = ({
  fill,
  x,
  y,
  width,
  height,
}: {
  fill?: string
  x?: number
  y?: number
  width?: number
  height?: number
}) => {
  return (
    <>
      <defs>
        <pattern
          id={"line_dashed"}
          patternUnits="userSpaceOnUse"
          width="1"
          height="5"
        >
          <line x1="0" y1="2" x2="1" y2="2" stroke={fill} strokeWidth="4" />
        </pattern>
        <mask id="line_dashed_mask" x="0" y="0" width="1" height="1">
          <rect
            x="0"
            y="0"
            width="10000"
            height="10000"
            fill="url(#line_dashed)"
          />
        </mask>
      </defs>
      <rect
        rx="4"
        ry="4"
        radius="4"
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        mask="url(#line_dashed_mask)"
      />
    </>
  )
}
