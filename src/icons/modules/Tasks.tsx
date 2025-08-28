import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgTasks = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m11.338-2.592a.8.8 0 0 1 .054 1.13l-4 4.4a.8.8 0 0 1-1.158.028l-1.6-1.6a.8.8 0 0 1 1.132-1.132l1.006 1.007 3.436-3.78a.8.8 0 0 1 1.13-.053"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgTasks);
export default ForwardRef;
