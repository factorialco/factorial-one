import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgFaceSuperPositive = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 16 16"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M6 5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m1 4.819c0 1.285-1.343 2.327-3 2.327S5 11.104 5 9.82c0-.94.718-.865 1.752-.757.38.04.803.084 1.248.084s.868-.044 1.248-.084C10.282 8.954 11 8.878 11 9.819"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgFaceSuperPositive);
export default ForwardRef;
