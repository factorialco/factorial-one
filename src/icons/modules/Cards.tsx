import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCards = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M3.022 8.125h17.956c-.032-.655-.11-1.106-.305-1.487a3 3 0 0 0-1.311-1.311C18.72 5 17.88 5 16.2 5H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311c-.194.381-.273.832-.305 1.487"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 9.875H3V14.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 19 6.12 19 7.8 19h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 16.72 21 15.88 21 14.2zM13.125 15c0-.483.392-.875.875-.875h3a.875.875 0 0 1 0 1.75h-3a.875.875 0 0 1-.875-.875"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCards);
export default ForwardRef;
