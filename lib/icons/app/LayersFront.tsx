import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLayersFront = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.3} d="M9 20h1.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C20 15.44 20 13.76 20 10.4V9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M8 5h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3" /></svg>;
const ForwardRef = forwardRef(SvgLayersFront);
export default ForwardRef;