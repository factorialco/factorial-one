import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgRefresh = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.038 5.003a1 1 0 0 1-1.005.995 6.002 6.002 0 0 0-4.957 9.433l.892-.584a1 1 0 0 1 1.526 1.042l-.579 2.768a1 1 0 0 1-1.183.775l-2.769-.58a1 1 0 0 1-.342-1.815l.781-.511a8 8 0 0 1-.994-2.003 8.002 8.002 0 0 1 7.635-10.525 1 1 0 0 1 .995 1.005M19.17 8.45l.866-.567a1 1 0 0 0-.343-1.816l-2.769-.579a1 1 0 0 0-1.183.774l-.58 2.769a1 1 0 0 0 1.527 1.041l.791-.517a6.002 6.002 0 0 1-5.512 8.447 1 1 0 1 0-.01 2A8.002 8.002 0 0 0 19.17 8.45" /></svg>;
const ForwardRef = forwardRef(SvgRefresh);
export default ForwardRef;