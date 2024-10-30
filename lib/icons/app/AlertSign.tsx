import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAlertSign = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0M12 9a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1" /><path fill="currentColor" fillRule="evenodd" d="M9.385 5.609c1.147-2.04 4.083-2.04 5.23 0l5.58 9.92c1.125 2-.32 4.471-2.615 4.471H6.42c-2.295 0-3.74-2.471-2.615-4.47zm3.486.98a1 1 0 0 0-1.743 0l-5.58 9.92A1 1 0 0 0 6.42 18h11.16a1 1 0 0 0 .872-1.49z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgAlertSign);
export default ForwardRef;