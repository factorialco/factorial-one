import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgH1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 6a1 1 0 0 1 1 1v4h5V7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-4H5v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M20 7a1 1 0 1 0-2 0c0 .175-.098.433-.332.668S17.175 8 17 8a1 1 0 1 0 0 2c.352 0 .69-.073 1-.198V17a1 1 0 1 0 2 0z" /></svg>;
const ForwardRef = forwardRef(SvgH1);
export default ForwardRef;