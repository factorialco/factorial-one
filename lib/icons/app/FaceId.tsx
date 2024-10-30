import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFaceId = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M8.72 13.375a1 1 0 0 1 1.405-.156 3 3 0 0 0 3.75 0 1 1 0 1 1 1.25 1.562 5 5 0 0 1-6.25 0 1 1 0 0 1-.156-1.406M4 8a4 4 0 0 1 4-4 1 1 0 0 1 0 2 2 2 0 0 0-2 2 1 1 0 0 1-2 0m11-3a1 1 0 0 1 1-1 4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1-1-1M5 15a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 4 4 0 0 1-4-4 1 1 0 0 1 1-1m14 0a1 1 0 0 1 1 1 4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgFaceId);
export default ForwardRef;