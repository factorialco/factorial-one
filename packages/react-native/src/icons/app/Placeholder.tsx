import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPlaceholder = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.3} />
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m17.5 6.5-11 11M17.5 17.5l-11-11"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPlaceholder);
export default ForwardRef;
