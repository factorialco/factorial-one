import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAlertCircleLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.033 8.06a.97.97 0 1 1 1.935 0l-.303 3.9a.667.667 0 0 1-1.33 0zM13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0" /><path fill="currentColor" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" /></svg>;
const ForwardRef = forwardRef(SvgAlertCircleLine);
export default ForwardRef;