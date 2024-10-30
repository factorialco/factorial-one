import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDragAndDrop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M9 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M9 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4" /></svg>;
const ForwardRef = forwardRef(SvgDragAndDrop);
export default ForwardRef;