import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-3.2-2.4a1 1 0 1 0-1.6-1.2l-3.808 5.078-2.185-2.185a1 1 0 1 0-1.414 1.414l3 3A1 1 0 0 0 12.3 15.6z" /></svg>;
const ForwardRef = forwardRef(SvgCheckCircle);
export default ForwardRef;