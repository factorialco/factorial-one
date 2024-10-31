import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAcademicCap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.612 4.078a1 1 0 0 1 .776 0l9.5 4a1 1 0 0 1 0 1.844L20 10.717V16a1 1 0 0 1-.606.92l-7 3a1 1 0 0 1-.788 0l-7-3A1 1 0 0 1 4 16v-5.283l-1.888-.795a1 1 0 0 1 0-1.844zM17 11.98v1.52a1 1 0 1 1-2 0v-.678l-2.612 1.1a1 1 0 0 1-.776 0L6 11.559v3.782l6 2.571 6-2.571v-3.782zm-.621-1.909L18.923 9 12 6.085 5.077 9 12 11.915l1.951-.821-2.398-1.2a1 1 0 1 1 .894-1.788z" /></svg>;
const ForwardRef = forwardRef(SvgAcademicCap);
export default ForwardRef;