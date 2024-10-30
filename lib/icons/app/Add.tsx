import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillOpacity={0.95} fillRule="evenodd" d="M12.65 5a.65.65 0 1 0-1.3 0v6.35H5a.65.65 0 1 0 0 1.3h6.35V19a.65.65 0 1 0 1.3 0v-6.35H19a.65.65 0 1 0 0-1.3h-6.35z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgAdd);
export default ForwardRef;