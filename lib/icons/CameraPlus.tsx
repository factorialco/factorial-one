import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCameraPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7.368 5.735A4 4 0 0 1 11.162 3H14a1 1 0 1 1 0 2h-2.838a2 2 0 0 0-1.897 1.368l-.088.264A2 2 0 0 1 7.279 8H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a1 1 0 1 1 2 0v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h.28z" /><path fill="currentColor" d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0M17.5 4a1 1 0 0 1 1 1v.5h.5a1 1 0 1 1 0 2h-.5V8a1 1 0 1 1-2 0v-.5H16a1 1 0 1 1 0-2h.5V5a1 1 0 0 1 1-1" /></svg>;
const ForwardRef = forwardRef(SvgCameraPlus);
export default ForwardRef;