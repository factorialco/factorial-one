import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPhone = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="m10.728 5.684.974 2.921a1 1 0 0 1-.577 1.245L9.5 10.5c1 2 2 3 4 4l.65-1.624a1 1 0 0 1 1.245-.578l2.921.974a1 1 0 0 1 .684.949v2.28c0 1.656-1.35 2.977-2.978 2.663-2.54-.49-6.148-1.696-8.522-4.664-2.189-2.736-2.88-5.322-3.058-7.104C4.302 5.997 5.501 5 6.907 5H9.78a1 1 0 0 1 .948.684Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPhone);
export default ForwardRef;
