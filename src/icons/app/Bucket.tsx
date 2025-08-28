import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBucket = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="m9.002 4.538-4.149 5.659a3.5 3.5 0 0 0 .348 4.544l.152.153a3.5 3.5 0 0 0 4.575.325l5.574-4.18"
    />
    <Path
      stroke="currentColor"
      d="M15.502 11.038c-.85.85-3 .077-4.792-1.715C8.917 7.53 8.152 5.388 9.002 4.538s2.991-.085 4.784 1.708 2.566 3.943 1.716 4.792ZM19.5 17.5a2 2 0 1 1-4 0c0-1.641 1.347-3.282 1.83-3.818a.227.227 0 0 1 .34 0c.483.536 1.83 2.177 1.83 3.818Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgBucket);
export default ForwardRef;
