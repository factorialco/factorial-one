import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgProjects = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h1a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4zm-3 7v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-5v.75c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25V13zm5-7h4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m2 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgProjects);
export default ForwardRef;
