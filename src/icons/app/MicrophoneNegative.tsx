import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMicrophoneNegative = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11V7a3 3 0 0 0-5.784-1.119M10.34 13.5a3 3 0 0 1-.886-.91"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M6 11a6 6 0 0 0 7.114 5.897M18 11c0 .923-.209 1.798-.581 2.58M12 17v3m0 0h-2m2 0h2M5 5l13 13"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMicrophoneNegative);
export default ForwardRef;
