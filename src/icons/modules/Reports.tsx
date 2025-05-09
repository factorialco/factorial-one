import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgReports = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0zM4 15a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zM18 9a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0v-8a2 2 0 0 0-2-2"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgReports);
export default ForwardRef;
