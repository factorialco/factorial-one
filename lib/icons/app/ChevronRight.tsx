import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChevronRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
<path d="M4.85355 2.64645C4.65829 2.45118 4.34171 2.45118 4.14645 2.64645C3.95118 2.84171 3.95118 3.15829 4.14645 3.35355L6.79289 6L4.14645 8.64645C3.95118 8.84171 3.95118 9.15829 4.14645 9.35355C4.34171 9.54882 4.65829 9.54882 4.85355 9.35355L7.85355 6.35355C8.04882 6.15829 8.04882 5.84171 7.85355 5.64645L4.85355 2.64645Z" fill="currentColor" />
</svg>;

const ForwardRef = forwardRef(SvgChevronRight);
export default ForwardRef;