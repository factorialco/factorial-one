import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.163 5.56a2 2 0 0 0-2.325 0l-4 2.856A2 2 0 0 0 6 10.044V16a2 2 0 0 0 2 2h1v-2.5a3 3 0 1 1 6 0V18h1a2 2 0 0 0 2-2v-5.956a2 2 0 0 0-.837-1.628zM9.675 3.931a4 4 0 0 1 4.65 0l4 2.857A4 4 0 0 1 20 10.044V16a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-2.5a1 1 0 1 0-2 0V18a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4v-5.956a4 4 0 0 1 1.675-3.255z" /></svg>;
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;