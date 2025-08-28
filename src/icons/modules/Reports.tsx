import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgReports = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12 2.85c.36 0 .65.292.65.65v.85H20a.65.65 0 0 1 0 1.3h-.35V12A3.65 3.65 0 0 1 16 15.65h-2.43l3.89 3.89a.651.651 0 0 1-.92.92l-3.89-3.89V20a.651.651 0 0 1-1.3 0v-3.43l-3.89 3.89a.651.651 0 0 1-.92-.92l3.891-3.89h-2.43A3.65 3.65 0 0 1 4.35 12V5.65H4a.65.65 0 1 1 0-1.3h7.35V3.5a.65.65 0 0 1 .65-.65m3.96 5.69a.65.65 0 0 0-.817-.083l-.103.083L13 10.58l-1.54-1.54a.65.65 0 0 0-.817-.083l-.103.083-2 2a.65.65 0 0 0 .92.92L11 10.42l1.54 1.54a.65.65 0 0 0 .92 0l2.5-2.5.083-.102a.65.65 0 0 0-.083-.818"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgReports);
export default ForwardRef;
