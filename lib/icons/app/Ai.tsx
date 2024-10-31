import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10 5a1 1 0 0 1 1 1c0 3.464 2.378 6 5 6a1 1 0 1 1 0 2c-2.622 0-5 2.536-5 6a1 1 0 1 1-2 0c0-3.464-2.378-6-5-6a1 1 0 1 1 0-2c2.622 0 5-2.536 5-6a1 1 0 0 1 1-1m0 5.118C9.375 11.31 8.484 12.313 7.405 13c1.079.687 1.97 1.69 2.595 2.882.625-1.192 1.516-2.195 2.595-2.882-1.079-.687-1.97-1.69-2.595-2.882M17.5 3a1 1 0 0 1 1 1A1.5 1.5 0 0 0 20 5.5a1 1 0 1 1 0 2A1.5 1.5 0 0 0 18.5 9a1 1 0 1 1-2 0A1.5 1.5 0 0 0 15 7.5a1 1 0 1 1 0-2A1.5 1.5 0 0 0 16.5 4a1 1 0 0 1 1-1" /></svg>;
const ForwardRef = forwardRef(SvgAi);
export default ForwardRef;