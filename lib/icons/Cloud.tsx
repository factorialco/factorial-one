import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7.084 9.084a5.002 5.002 0 0 1 9.832 0A5.002 5.002 0 0 1 16 19H8a5 5 0 0 1-.916-9.916M12 7a3 3 0 0 0-3 3 1 1 0 0 1-1 1 3 3 0 1 0 0 6h8a3 3 0 1 0 0-6 1 1 0 0 1-1-1 3 3 0 0 0-3-3" /></svg>;
const ForwardRef = forwardRef(SvgCloud);
export default ForwardRef;