import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInfoCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
  <path fillRule="evenodd" clipRule="evenodd" d="M16.6666 10C16.6666 13.6819 13.6819 16.6667 9.99998 16.6667C6.31808 16.6667 3.33331 13.6819 3.33331 10C3.33331 6.3181 6.31808 3.33333 9.99998 3.33333C13.6819 3.33333 16.6666 6.3181 16.6666 10ZM9.29169 7.375C9.29169 6.9838 9.60882 6.66667 10 6.66667C10.3912 6.66667 10.7084 6.9838 10.7084 7.375C10.7084 7.7662 10.3912 8.08333 10 8.08333C9.60882 8.08333 9.29169 7.7662 9.29169 7.375ZM10 8.93333C10.359 8.93333 10.65 9.22435 10.65 9.58333L10.65 12.5C10.65 12.859 10.359 13.15 10 13.15C9.64101 13.15 9.35 12.859 9.35 12.5V9.58333C9.35 9.22435 9.64101 8.93333 10 8.93333Z" fill="currentColor" />
</svg>;

const ForwardRef = forwardRef(SvgInfoCircle);
export default ForwardRef;