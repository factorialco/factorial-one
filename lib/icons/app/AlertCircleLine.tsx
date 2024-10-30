import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAlertCircleLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillOpacity={0.95} fillRule="evenodd" d="M12 4.65a7.35 7.35 0 1 0 0 14.7 7.35 7.35 0 0 0 0-14.7M3.35 12a8.65 8.65 0 1 1 17.3 0 8.65 8.65 0 0 1-17.3 0M12 8.35a.65.65 0 0 1 .65.65v3a.65.65 0 1 1-1.3 0V9a.65.65 0 0 1 .65-.65m.65 6.65a.65.65 0 1 0-1.3 0v.1a.65.65 0 1 0 1.3 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgAlertCircleLine);
export default ForwardRef;