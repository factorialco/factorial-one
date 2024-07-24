import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgQuestionCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-9-2a1 1 0 1 1 1 1 1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-.17A3.001 3.001 0 1 0 9 10a1 1 0 1 0 2 0m1 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></svg>;
const ForwardRef = forwardRef(SvgQuestionCircle);
export default ForwardRef;