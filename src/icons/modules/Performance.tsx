import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPerformance = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15.333 8.667a1.333 1.333 0 0 1 0-2.667h5.334C21.403 6 22 6.597 22 7.333v5.334a1.333 1.333 0 0 1-2.667 0v-2.115l-4.991 4.992a7 7 0 0 1-.374.355 2 2 0 0 1-.683.394 2 2 0 0 1-1.236 0c-.31-.101-.535-.268-.683-.394-.128-.109-.262-.243-.375-.355l-2.324-2.325-4.39 4.39a1.333 1.333 0 0 1-1.886-1.885l4.6-4.601c.113-.112.247-.246.375-.355.148-.126.372-.293.683-.394.401-.13.834-.13 1.236 0 .31.1.535.268.683.394.128.108.262.243.374.355l2.325 2.325 4.78-4.781z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPerformance);
export default ForwardRef;
