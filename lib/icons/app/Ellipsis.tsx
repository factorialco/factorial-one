import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEllipsis = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4" /></svg>;
const ForwardRef = forwardRef(SvgEllipsis);
export default ForwardRef;