import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgProyector = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
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
      strokeWidth={1.3}
      d="M5 5h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M12 15v5M12 15l-5 5M12 15l5 5M4 5h16M9 11.5l2-2 2 2L15.5 9M12 5V3.5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgProyector);
export default ForwardRef;
