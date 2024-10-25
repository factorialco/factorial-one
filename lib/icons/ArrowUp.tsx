import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M3.54039 6.87372C3.28655 7.12756 3.28655 7.53912 3.54039 7.79296C3.79423 8.0468 4.20578 8.0468 4.45963 7.79296L7.35002 4.90256L7.35002 12.6667C7.35002 13.0257 7.64104 13.3167 8.00002 13.3167C8.35901 13.3167 8.65002 13.0257 8.65002 12.6667L8.65002 4.90259L11.5404 7.79296C11.7942 8.0468 12.2058 8.0468 12.4596 7.79296C12.7135 7.53912 12.7135 7.12756 12.4596 6.87372L8.45963 2.87372C8.20578 2.61988 7.79423 2.61988 7.54039 2.87372L3.54039 6.87372Z" fill="currentColor"/>
</svg>
;
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;