import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 7a4 4 0 0 1 4-4h3.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 19 9.243V17a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 12.757 5z" /></svg>;
const ForwardRef = forwardRef(SvgFile);
export default ForwardRef;