import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAlert = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 5c.848 0 1.52.715 1.467 1.561l-.469 7.501a1 1 0 0 1-1.996 0l-.469-7.5A1.47 1.47 0 0 1 12 5M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" /></svg>;
const ForwardRef = forwardRef(SvgAlert);
export default ForwardRef;