import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTarget = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18.16 2.013a1 1 0 0 1 .734.54l.851 1.702 1.702.85a1 1 0 0 1 .26 1.602l-3 3A1 1 0 0 1 18 10h-2.586l-2.707 2.707a1 1 0 0 1-1.414-1.414L14 8.586V6a1 1 0 0 1 .293-.707l3-3a1 1 0 0 1 .867-.28M16 8h1.586l1.726-1.726-.76-.38a1 1 0 0 1-.446-.447l-.38-.759L16 6.414z" /><path fill="currentColor" d="M12 6a6 6 0 1 0 6 6 1 1 0 1 1 2 0 8 8 0 1 1-8-8 1 1 0 1 1 0 2" /><path fill="currentColor" d="M12 9.5a2.5 2.5 0 1 0 2.5 2.5 1 1 0 1 1 2 0A4.5 4.5 0 1 1 12 7.5a1 1 0 1 1 0 2" /></svg>;
const ForwardRef = forwardRef(SvgTarget);
export default ForwardRef;