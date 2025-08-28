import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBenefits = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M6.25 6.5A3.25 3.25 0 0 1 12 4.423 3.25 3.25 0 1 1 16.577 9h.756c.62 0 .93 0 1.185.068a2 2 0 0 1 1.414 1.414c.068.255.068.565.068 1.185 0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H5.333c-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707C4 12.132 4 11.977 4 11.667c0-.62 0-.93.068-1.185a2 2 0 0 1 1.414-1.414C5.737 9 6.047 9 6.667 9h.756A3.24 3.24 0 0 1 6.25 6.5M9.5 4.75c.966 0 1.75.784 1.75 1.75v1.75H9.5a1.75 1.75 0 1 1 0-3.5m5 3.5h-1.75V6.5a1.75 1.75 0 1 1 1.75 1.75"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M5 14.5a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H8a3 3 0 0 1-3-3zM12.5 14.5a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .5.5V17a3 3 0 0 1-3 3h-3a.5.5 0 0 1-.5-.5z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgBenefits);
export default ForwardRef;
