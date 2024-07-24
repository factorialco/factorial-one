import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgProjects = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 3a3 3 0 0 0-3 3H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-1a3 3 0 0 0-3-3zM5 16v-3h5v.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V13h5v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2m0-5v-1a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1zm9-5h-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1" /></svg>;
const ForwardRef = forwardRef(SvgProjects);
export default ForwardRef;