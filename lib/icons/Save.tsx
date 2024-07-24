import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16 20H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h5.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 20 10.243V16a4 4 0 0 1-4 4M6 8v8a2 2 0 0 0 1 1.732V16a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1.732A2 2 0 0 0 18 16v-5.757a2 2 0 0 0-.586-1.415L16 7.414V10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a2 2 0 0 0-2 2m8-1.985A2 2 0 0 0 13.757 6H10v3h4zM15 16a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2h6z" /></svg>;
const ForwardRef = forwardRef(SvgSave);
export default ForwardRef;