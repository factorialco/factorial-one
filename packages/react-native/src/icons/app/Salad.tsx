import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSalad = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 20 20"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.14 2.46a.65.65 0 0 1 .556-.08c.583.184 1.343.513 2.042.912.494.282 1.004.626 1.4 1.01 1.055-.56 2.11-.848 2.768-.945a.65.65 0 0 1 .688.379c.346.777.811 2.018 1.09 3.231.139.606.236 1.229.241 1.795a4 4 0 0 1-.033.588H17a.65.65 0 0 1 .65.65 7.64 7.64 0 0 1-3.392 6.357V18a.65.65 0 0 1-.65.65H6.393a.65.65 0 0 1-.65-.65v-1.643A7.64 7.64 0 0 1 2.35 10 .65.65 0 0 1 3 9.35h.124a7 7 0 0 1-.086-.957c-.022-.801.065-1.757.345-2.599A.65.65 0 0 1 4 5.35c.402 0 .97.04 1.594.149.147-.32.355-.697.618-1.085.45-.661 1.089-1.396 1.928-1.955M6.886 5.815c.605.197 1.22.478 1.734.877a3.1 3.1 0 0 1 1.068-.322A6.3 6.3 0 0 1 11 5.029a7 7 0 0 0-.907-.608 10.4 10.4 0 0 0-1.488-.698c-.543.416-.984.93-1.317 1.421a7 7 0 0 0-.402.672m4.326.755q.395.158.729.41c.726.545 1.21 1.4 1.256 2.369h2.376c.033-.146.054-.337.052-.577-.004-.437-.08-.959-.208-1.515a17.4 17.4 0 0 0-.81-2.518 8.2 8.2 0 0 0-2.266.943c-.407.25-.793.545-1.13.888m5.105 4.079H3.683a6.35 6.35 0 0 0 3.045 4.793.65.65 0 0 1 .315.557v1.35h5.915V16c0-.228.119-.44.314-.557a6.35 6.35 0 0 0 3.045-4.793M4.448 9.35h2.456c.031-.679.279-1.302.673-1.802-.478-.302-1.087-.523-1.724-.67A9 9 0 0 0 4.49 6.67a7 7 0 0 0-.152 1.687 5.6 5.6 0 0 0 .111.993m3.758 0h3.688a1.847 1.847 0 0 0-1.844-1.7 1.847 1.847 0 0 0-1.844 1.7"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSalad);
export default ForwardRef;
