import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSocial = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 4.35A7.65 7.65 0 1 1 12 19.65 7.65 7.65 0 0 1 12 4.35m3.184 9.104a.876.876 0 0 0-1.23-.137 3.13 3.13 0 0 1-3.907 0 .876.876 0 0 0-1.094 1.366 4.88 4.88 0 0 0 6.094 0 .876.876 0 0 0 .137-1.23M10 9.125a.875.875 0 0 0-.875.875v1a.875.875 0 0 0 1.75 0v-1A.875.875 0 0 0 10 9.125m4 0a.875.875 0 0 0-.875.875v1a.875.875 0 0 0 1.75 0v-1A.875.875 0 0 0 14 9.125"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSocial);
export default ForwardRef;
