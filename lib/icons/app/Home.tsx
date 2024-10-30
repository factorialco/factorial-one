import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.366 5.274a2.35 2.35 0 0 0-2.732 0l-4 2.858a2.35 2.35 0 0 0-.984 1.912V16A2.35 2.35 0 0 0 8 18.35h1a.35.35 0 0 0 .35-.35v-2.5a2.65 2.65 0 1 1 5.3 0V18c0 .193.157.35.35.35h1A2.35 2.35 0 0 0 18.35 16v-5.956a2.35 2.35 0 0 0-.984-1.912zM9.878 4.217a3.65 3.65 0 0 1 4.243 0l4 2.857a3.65 3.65 0 0 1 1.529 2.97V16A3.65 3.65 0 0 1 16 19.65h-1A1.65 1.65 0 0 1 13.35 18v-2.5a1.35 1.35 0 1 0-2.7 0V18A1.65 1.65 0 0 1 9 19.65H8A3.65 3.65 0 0 1 4.35 16v-5.956a3.65 3.65 0 0 1 1.528-2.97z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;