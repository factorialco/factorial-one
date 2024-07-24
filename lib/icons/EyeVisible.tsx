import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEyeVisible = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5.147 12c.993 2.543 3.568 4.922 6.853 4.922 3.286 0 5.86-2.38 6.854-4.922C17.86 9.457 15.286 7.078 12 7.078S6.14 9.458 5.147 12m-2.17-.341C4.088 8.326 7.432 4.922 12 4.922s7.912 3.404 9.023 6.737c.074.221.074.46 0 .682-1.111 3.333-4.455 6.737-9.023 6.737s-7.912-3.404-9.023-6.737a1.08 1.08 0 0 1 0-.682" /><path fill="currentColor" d="M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>;
const ForwardRef = forwardRef(SvgEyeVisible);
export default ForwardRef;