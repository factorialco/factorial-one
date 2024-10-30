import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEnvelope = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 5a4 4 0 0 0-4 3.998V15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.965A4 4 0 0 0 17 5zm11.916 3.424-6.86 3.43a.13.13 0 0 1-.112 0l-6.86-3.43A2 2 0 0 1 7 7h10a2 2 0 0 1 1.916 1.424M5 10.618l6.05 3.025c.598.299 1.302.299 1.9 0L19 10.618V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" /></svg>;
const ForwardRef = forwardRef(SvgEnvelope);
export default ForwardRef;