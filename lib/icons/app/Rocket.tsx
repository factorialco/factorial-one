import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgRocket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="m11 15-2-2m2 2c1.075-.409 2.413-.924 3.385-1.539M11 15v4s3.254-.885 4-2c.83-1.246-.615-3.539-.615-3.539M9 13c.41-1.062.925-2.388 1.539-3.346M9 13H5s.885-3.254 2-4c1.246-.83 3.539.654 3.539.654m0 0C12.5 6.5 14.5 5 19 5c0 3.5-1 6.5-4.615 8.461" /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={1.3} d="M4.67 17.526a1.668 1.668 0 0 1 3.33.142c0 .867-.663 1.589-1.526 1.663L4.5 19.5z" /></svg>;
const ForwardRef = forwardRef(SvgRocket);
export default ForwardRef;