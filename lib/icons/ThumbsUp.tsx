import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgThumbsUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10.288 5.988A2.315 2.315 0 0 1 14.5 7.315V9h3.438a3 3 0 0 1 2.91 3.728l-.81 3.242a4 4 0 0 1-3.88 3.03H6a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1.48zM7 12H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1zm2 5h7.158a2 2 0 0 0 1.94-1.515l.81-3.242a1 1 0 0 0-.97-1.243H13.5a1 1 0 0 1-1-1V7.315a.315.315 0 0 0-.573-.18L9 11.314z" /></svg>;
const ForwardRef = forwardRef(SvgThumbsUp);
export default ForwardRef;