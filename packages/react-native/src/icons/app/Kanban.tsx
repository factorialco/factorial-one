import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgKanban = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
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
      d="M5 6.5A1.5 1.5 0 0 1 6.5 5H9a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 9 19H6.5A1.5 1.5 0 0 1 5 17.5zM13.5 6.5A1.5 1.5 0 0 1 15 5h2.5A1.5 1.5 0 0 1 19 6.5v7a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgKanban);
export default ForwardRef;
