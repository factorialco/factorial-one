import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGroup = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2zm12 4h-2V6h2zm-2 2v4a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2m0 6h2v2h-2zM8 8H6V6h2zm-2 8h2v2H6z" /></svg>;
const ForwardRef = forwardRef(SvgGroup);
export default ForwardRef;