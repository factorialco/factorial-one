import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgFaceNeutral = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16M9 14.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM10 9a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgFaceNeutral);
export default ForwardRef;
