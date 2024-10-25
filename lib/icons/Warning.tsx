import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgWarning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M10 15.8333H4.4992C3.2284 15.8333 2.42512 14.4681 3.04227 13.3573L8.54308 3.45581C9.17809 2.31279 10.8219 2.31279 11.4569 3.45581L16.9578 13.3573C17.5749 14.4681 16.7716 15.8333 15.5008 15.8333H10ZM10 6.25C9.52874 6.25 9.15732 6.65138 9.19379 7.12124L9.44612 10.3713C9.46858 10.6606 9.70987 10.8839 10 10.8839C10.2902 10.8839 10.5314 10.6606 10.5539 10.3713L10.8062 7.12124C10.8427 6.65138 10.4713 6.25 10 6.25ZM10 13.739C10.4603 13.739 10.8333 13.366 10.8333 12.9057C10.8333 12.4455 10.4603 12.0724 10 12.0724C9.53978 12.0724 9.16668 12.4455 9.16668 12.9057C9.16668 13.366 9.53978 13.739 10 13.739Z" fill="currentColor"/>
</svg>;
const ForwardRef = forwardRef(SvgWarning);
export default ForwardRef;