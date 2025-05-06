import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgFacePositive = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16m2.608 9.344-.08.023-.843.28a5.33 5.33 0 0 1-3.165.065l-.205-.064-.843-.28-.08-.024c-.821-.193-1.338.927-.602 1.418l.184.117a5.79 5.79 0 0 0 6.236-.117l.067-.05c.636-.512.126-1.555-.669-1.368M10 9a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgFacePositive);
export default ForwardRef;
