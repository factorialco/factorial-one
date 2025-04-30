import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgGlobe = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.3} />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M19 12H5"
    />
    <Path
      stroke="currentColor"
      strokeWidth={1.3}
      d="M12 20c-1.767-1.804-3-5.275-3-8s1.233-6.196 3-8M12 20c1.767-1.804 3-5.275 3-8s-1.233-6.196-3-8"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgGlobe);
export default ForwardRef;
