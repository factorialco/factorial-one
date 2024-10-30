import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zM5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3.586l-.172-.172a4 4 0 0 0-5.656 0L8.586 17H7a2 2 0 0 1-2-2zm6.414 8 3.172-3.171a2 2 0 0 1 2.828 0l1.55 1.55A2 2 0 0 1 17 17z" /><path fill="currentColor" d="M9 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>;
const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;