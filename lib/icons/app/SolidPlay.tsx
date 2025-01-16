import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSolidPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="#0D1625" d="M5.99988 16.5537V7.44638C5.99988 5.91073 7.65884 4.948 8.99216 5.70989L16.961 10.2635C18.3047 11.0313 18.3047 12.9687 16.961 13.7365L8.99216 18.2901C7.65884 19.052 5.99988 18.0893 5.99988 16.5537Z" vectorEffect="non-scaling-stroke" /></svg>;
const ForwardRef = forwardRef(SvgSolidPlay);
export default ForwardRef;