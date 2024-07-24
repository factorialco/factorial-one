import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArchive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 5a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.732V15a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4.268A2 2 0 0 0 21 9V7a2 2 0 0 0-2-2zm13 6v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4zM5 9V7h14v2z" /><path fill="currentColor" d="M9 14a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgArchive);
export default ForwardRef;