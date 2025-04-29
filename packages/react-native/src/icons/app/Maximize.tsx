import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMaximize = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M13.5 10.5 19 5m0 0h-4m4 0v4M10.5 13.5 5 19m0 0h4m-4 0v-4"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMaximize);
export default ForwardRef;
