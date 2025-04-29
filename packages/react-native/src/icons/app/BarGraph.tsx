import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBarGraph = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Rect
      width={16}
      height={12}
      x={4}
      y={6}
      stroke="currentColor"
      strokeWidth={1.3}
      rx={3}
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.3}
      d="M8 13v2M12 9v6M16 11v4"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgBarGraph);
export default ForwardRef;
