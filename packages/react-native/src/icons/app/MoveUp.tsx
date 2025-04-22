import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMoveUp = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
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
      d="M12.5 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m8 5 2 2-2 2"
    />
    <Rect
      width={6.7}
      height={6.7}
      x={12.65}
      y={3.65}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.3}
      rx={1.35}
    />
    <Rect
      width={6.7}
      height={6.7}
      x={12.65}
      y={13.65}
      stroke="currentColor"
      strokeWidth={1.3}
      rx={1.35}
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMoveUp);
export default ForwardRef;
