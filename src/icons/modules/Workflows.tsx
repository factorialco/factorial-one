import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgWorkflows = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M17.42 4.455a1.125 1.125 0 0 0-1.59 1.59l.329.33h-3.85A4.5 4.5 0 0 0 8.491 8.49l-.83 1.328a2.25 2.25 0 0 1-1.908 1.057H3.125a1.125 1.125 0 0 0 0 2.25h2.63c.775 0 1.496.4 1.907 1.057l.83 1.328a4.5 4.5 0 0 0 3.816 2.115h3.851l-.33.33a1.125 1.125 0 0 0 1.592 1.59l2.25-2.25c.439-.439.439-1.151 0-1.59l-2.25-2.25a1.125 1.125 0 0 0-1.591 1.59l.329.33h-3.85a2.25 2.25 0 0 1-1.909-1.057l-.83-1.328a4.5 4.5 0 0 0-.839-.99c.322-.284.606-.616.84-.99l.83-1.328a2.25 2.25 0 0 1 1.907-1.057h3.851l-.33.33a1.125 1.125 0 0 0 1.592 1.59l2.25-2.25c.439-.439.439-1.151 0-1.59z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgWorkflows);
export default ForwardRef;
