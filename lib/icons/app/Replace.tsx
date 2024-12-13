import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

const SvgReplace = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M4.6666 2.01666C3.20305 2.01666 2.0166 3.20311 2.0166 4.66666C2.0166 6.13022 3.20305 7.31666 4.6666 7.31666C6.13016 7.31666 7.3166 6.13022 7.3166 4.66666C7.3166 3.20311 6.13016 2.01666 4.6666 2.01666ZM3.3166 4.66666C3.3166 3.92108 3.92102 3.31666 4.6666 3.31666C5.41219 3.31666 6.0166 3.92108 6.0166 4.66666C6.0166 5.41225 5.41219 6.01666 4.6666 6.01666C3.92102 6.01666 3.3166 5.41225 3.3166 4.66666ZM11.1262 3.12628C11.3801 2.87244 11.3801 2.46088 11.1262 2.20704C10.8724 1.9532 10.4608 1.9532 10.207 2.20704L8.87365 3.54038C8.75175 3.66228 8.68327 3.82761 8.68327 4C8.68327 4.17239 8.75175 4.33772 8.87365 4.45962L10.207 5.79295C10.4608 6.04679 10.8724 6.04679 11.1262 5.79295C11.3801 5.53911 11.3801 5.12755 11.1262 4.87371L10.918 4.66552C11.9131 4.78927 12.6833 5.63803 12.6833 6.66666C12.6833 7.02565 12.9743 7.31666 13.3333 7.31666C13.6923 7.31666 13.9833 7.02565 13.9833 6.66666C13.9833 4.91161 12.6201 3.47495 10.8948 3.35772L11.1262 3.12628ZM4.87365 12.8737C4.61981 13.1276 4.61981 13.5391 4.87365 13.7929C5.12749 14.0468 5.53905 14.0468 5.79289 13.7929L7.12622 12.4596C7.38006 12.2058 7.38006 11.7942 7.12622 11.5404L5.79289 10.207C5.53905 9.9532 5.12749 9.9532 4.87365 10.207C4.61981 10.4609 4.61981 10.8724 4.87365 11.1263L5.08184 11.3345C4.08672 11.2107 3.3166 10.362 3.3166 9.33333C3.3166 8.97434 3.02559 8.68333 2.6666 8.68333C2.30762 8.68333 2.0166 8.97434 2.0166 9.33333C2.0166 11.0884 3.37978 12.525 5.10509 12.6423L4.87365 12.8737ZM8.68327 11.3333C8.68327 9.86977 9.86971 8.68333 11.3333 8.68333C12.7968 8.68333 13.9833 9.86977 13.9833 11.3333C13.9833 12.7969 12.7968 13.9833 11.3333 13.9833C9.86971 13.9833 8.68327 12.7969 8.68327 11.3333ZM11.3333 9.98333C10.5877 9.98333 9.98327 10.5877 9.98327 11.3333C9.98327 12.0789 10.5877 12.6833 11.3333 12.6833C12.0789 12.6833 12.6833 12.0789 12.6833 11.3333C12.6833 10.5877 12.0789 9.98333 11.3333 9.98333Z" fill="currentColor" />
</svg>;

const ForwardRef = forwardRef(SvgReplace);
export default ForwardRef;