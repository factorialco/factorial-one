import Svg, { Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgDottedCircle = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={8}
      stroke="currentColor"
      strokeDasharray="2 2"
      strokeWidth={1.3}
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgDottedCircle);
export default ForwardRef;
