import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPrinter = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M4 13v-1.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 7 7.12 7 8.8 7h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 9.28 20 10.12 20 11.8V13c0 .93 0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C17.396 17 16.93 17 16 17v-1.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 14 14.96 14 14.4 14H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 14.76 8 15.04 8 15.6V17c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C4 14.395 4 13.93 4 13ZM17 7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3"
    />
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M16 16.8v-1.2c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 14 14.96 14 14.4 14H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 14.76 8 15.04 8 15.6v1.2c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C9.52 20 10.08 20 11.2 20h1.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C16 18.48 16 17.92 16 16.8Z"
    />
    <Circle cx={17} cy={11} r={1} fill="currentColor" />
  </Svg>
);
const ForwardRef = forwardRef(SvgPrinter);
export default ForwardRef;
