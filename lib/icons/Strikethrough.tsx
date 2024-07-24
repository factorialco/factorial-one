import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgStrikethrough = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.606 5a4 4 0 0 0-3.465 6H5a1 1 0 1 0 0 2h7.394a2 2 0 0 1 0 4h-1.313c-.514 0-.97-.329-1.132-.816a1 1 0 0 0-1.898.632A3.19 3.19 0 0 0 11.081 19h1.313a4 4 0 0 0 3.464-6H19a1 1 0 1 0 0-2h-7.395a2 2 0 1 1 0-4h1.314c.514 0 .97.329 1.132.816a1 1 0 0 0 1.898-.632A3.19 3.19 0 0 0 12.919 5z" /></svg>;
const ForwardRef = forwardRef(SvgStrikethrough);
export default ForwardRef;