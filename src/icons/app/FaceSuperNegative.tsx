import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgFaceSuperNegative = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-2 5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m-5 6.328C9 14.042 10.343 13 12 13s3 1.042 3 2.328c0 .94-.718.864-1.752.756-.38-.04-.803-.084-1.248-.084s-.868.044-1.248.084C9.718 16.192 9 16.268 9 15.328"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgFaceSuperNegative);
export default ForwardRef;
