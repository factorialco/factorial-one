import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArchiveOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.616 5.868a2 2 0 0 0-2.232-1.736L4.368 5.884a2 2 0 0 0-1.736 2.232l.252 2.016c.09.716.547 1.296 1.16 1.574A1 1 0 0 0 4 12v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3q0-.123-.029-.239l13.16-1.645a2 2 0 0 0 1.737-2.232zm-16 2 14.016-1.752.252 2.016L4.868 9.884z" /><path fill="currentColor" d="M9 14a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgArchiveOpen);
export default ForwardRef;