import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 10.5a3 3 0 0 1 6 0v5a1 1 0 1 1-2 0v-2H6v2a1 1 0 1 1-2 0zm2 1h2v-1a1 1 0 0 0-2 0zM14 8.5a1 1 0 0 1 1-1h4a1 1 0 0 1 .868 1.496L16.723 14.5H19a1 1 0 1 1 0 2h-4a1 1 0 0 1-.868-1.496L17.277 9.5H15a1 1 0 0 1-1-1m-3 4a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgText);
export default ForwardRef;