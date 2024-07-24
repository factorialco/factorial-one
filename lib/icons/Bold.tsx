import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9 4a3.5 3.5 0 0 0-3.5 3.5v9A3.5 3.5 0 0 0 9 20h6v-.003c2.715-.084 5-2.227 5-4.997 0-2.194-1.434-3.994-3.379-4.69A4.5 4.5 0 0 0 12.5 4zm3.5 6a1.5 1.5 0 0 0 0-3H9a.5.5 0 0 0-.5.5V10zm-4 3h6.333c1.263 0 2.167.96 2.167 2s-.904 2-2.167 2H9a.5.5 0 0 1-.5-.5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgBold);
export default ForwardRef;