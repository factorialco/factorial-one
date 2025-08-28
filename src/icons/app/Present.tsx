import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPresent = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
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
      d="M12 8v11M7 5.5A2.5 2.5 0 0 1 9.5 3v0A2.5 2.5 0 0 1 12 5.5V8H9.5A2.5 2.5 0 0 1 7 5.5M17 5.5A2.5 2.5 0 0 0 14.5 3v0A2.5 2.5 0 0 0 12 5.5V8h2.5A2.5 2.5 0 0 0 17 5.5"
    />
    <Path
      fill="currentColor"
      d="M5 12v-.65a.65.65 0 0 0-.65.65zm14 0h.65a.65.65 0 0 0-.65-.65zm-14 .65h14v-1.3H5zM18.35 12v4h1.3v-4zM16 18.35H8v1.3h8zM5.65 16v-4h-1.3v4zM8 18.35A2.35 2.35 0 0 1 5.65 16h-1.3A3.65 3.65 0 0 0 8 19.65zM18.35 16A2.35 2.35 0 0 1 16 18.35v1.3A3.65 3.65 0 0 0 19.65 16z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 10.667c0-.62 0-.93.068-1.185a2 2 0 0 1 1.414-1.414C5.737 8 6.047 8 6.667 8h10.666c.62 0 .93 0 1.185.068a2 2 0 0 1 1.414 1.414c.068.255.068.565.068 1.185v0c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H5.333c-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707C4 11.132 4 10.977 4 10.667"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPresent);
export default ForwardRef;
