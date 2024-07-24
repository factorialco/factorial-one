import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 5c-2.702 0-5 2.356-5 5.4 0 1.47.62 2.864 1.686 4.34.902 1.25 2.057 2.472 3.31 3.797l.004.005.005-.005c1.252-1.325 2.407-2.547 3.31-3.797C16.38 13.264 17 11.87 17 10.4 17 7.356 14.702 5 12 5m-7 5.4C5 6.375 8.074 3 12 3s7 3.375 7 7.4c0 2.065-.88 3.87-2.064 5.51-.987 1.368-2.251 2.704-3.502 4.027q-.354.374-.704.747a1 1 0 0 1-1.46 0q-.35-.373-.704-.747c-1.25-1.323-2.515-2.659-3.502-4.026C5.88 14.27 5 12.465 5 10.4" /><path fill="currentColor" d="M9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></svg>;
const ForwardRef = forwardRef(SvgPin);
export default ForwardRef;