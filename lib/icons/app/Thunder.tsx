import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgThunder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g clipPath="url(#thunder_svg__a)"><path fill="currentColor" d="M14 5a1 1 0 0 0-1.817-.577l-6 8.5A1 1 0 0 0 7 14.5h3V19a1 1 0 0 0 1.78.625l6-7.5A1 1 0 0 0 17 10.5h-3zm-3 7.5H8.93L12 8.15v3.35a1 1 0 0 0 1 1h1.92L12 16.15V13.5a1 1 0 0 0-1-1" /></g><defs><clipPath id="thunder_svg__a"><path fill="currentColor" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgThunder);
export default ForwardRef;