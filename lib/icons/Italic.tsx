import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgItalic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-3.153l-1.666 10H15a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h3.153l1.666-10H9a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgItalic);
export default ForwardRef;