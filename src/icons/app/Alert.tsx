import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgAlert = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path stroke="currentColor" strokeLinecap="round" d="M12 14V7M12 17.1V17" />
  </Svg>
);
const ForwardRef = forwardRef(SvgAlert);
export default ForwardRef;
