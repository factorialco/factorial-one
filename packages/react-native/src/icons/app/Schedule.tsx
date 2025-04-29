import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSchedule = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.3}
      d="M10.5 18H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v0"
    />
    <Circle
      cx={17.5}
      cy={15.5}
      r={4.5}
      stroke="currentColor"
      strokeWidth={1.3}
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.3}
      d="M17.5 14v1.054c0 .279.14.539.371.693L19 16.5"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M7 10h4M7 14h2"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSchedule);
export default ForwardRef;
