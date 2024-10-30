import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.35 7A.65.65 0 0 1 5 6.35h14a.65.65 0 1 1 0 1.3H5A.65.65 0 0 1 4.35 7m0 5a.65.65 0 0 1 .65-.65h14a.65.65 0 1 1 0 1.3H5a.65.65 0 0 1-.65-.65M5 16.35a.65.65 0 1 0 0 1.3h14a.65.65 0 1 0 0-1.3z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMenu);
export default ForwardRef;