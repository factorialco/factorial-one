import Svg, { Mask, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgAppearance = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Mask id="appearance_svg__a" fill="currentColor">
      <Path
        fillRule="evenodd"
        d="M12 18.7V5.3a6.7 6.7 0 1 0 0 13.4m1.612-14.537a8 8 0 0 0-.614-.101h-.001a8 8 0 1 0 .615.101"
        clipRule="evenodd"
      />
    </Mask>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 18.7V5.3a6.7 6.7 0 1 0 0 13.4m1.612-14.537a8 8 0 0 0-.614-.101h-.001a8 8 0 1 0 .615.101"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M12 5.3h1.3V4H12zm0 13.4V20h1.3v-1.3zm1.612-14.537-.26 1.273zm-.614-.101-.16 1.29zm-.001 0-.16 1.29zm.001 15.876-.16-1.29zM10.7 5.3v13.4h2.6V5.3zM12 4a8 8 0 0 0-8 8h2.6A5.4 5.4 0 0 1 12 6.6zm-8 8a8 8 0 0 0 8 8v-2.6A5.4 5.4 0 0 1 6.6 12zm9.873-9.111a9 9 0 0 0-.714-.117l-.322 2.58q.261.032.515.084zm-.714-.117h-.003l-.318 2.58zm-.002 0A9 9 0 0 0 12 2.7v2.6q.426 0 .837.052zM12 2.7A9.3 9.3 0 0 0 2.7 12h2.6c0-3.7 3-6.7 6.7-6.7zM2.7 12a9.3 9.3 0 0 0 9.3 9.3v-2.6c-3.7 0-6.7-3-6.7-6.7zm9.3 9.3a9 9 0 0 0 1.159-.072l-.322-2.58A7 7 0 0 1 12 18.7zm1.159-.072c4.59-.57 8.141-4.484 8.141-9.228h-2.6a6.7 6.7 0 0 1-5.862 6.648zM21.3 12c0-4.496-3.189-8.244-7.427-9.111l-.521 2.547A6.7 6.7 0 0 1 18.7 12z"
      mask="url(#appearance_svg__a)"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgAppearance);
export default ForwardRef;
