import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFeed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.5 5.5a1 1 0 0 1 .91.586l4.09 8.997 1.59-3.497A1 1 0 0 1 17 11h3a1 1 0 1 1 0 2h-2.356l-2.234 4.914a1 1 0 0 1-1.82 0L9.5 8.917l-1.59 3.497A1 1 0 0 1 7 13H4a1 1 0 1 1 0-2h2.356L8.59 6.086A1 1 0 0 1 9.5 5.5" /></svg>;
const ForwardRef = forwardRef(SvgFeed);
export default ForwardRef;