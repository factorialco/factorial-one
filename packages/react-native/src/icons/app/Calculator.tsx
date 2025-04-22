import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCalculator = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect
      width={12}
      height={16}
      x={6}
      y={4}
      stroke="currentColor"
      strokeWidth={1.3}
      rx={3}
    />
    <Path
      stroke="currentColor"
      strokeWidth={1.3}
      d="M18 8H6M14 8v12M10 8v12M18 12H6M14 16H6"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCalculator);
export default ForwardRef;
