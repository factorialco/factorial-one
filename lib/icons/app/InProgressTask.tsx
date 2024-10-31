import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInProgressTask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.3} /><path fill="currentColor" d="M12 18a6 6 0 0 0 0-12z" /></svg>;
const ForwardRef = forwardRef(SvgInProgressTask);
export default ForwardRef;