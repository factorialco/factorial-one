import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgEllipsis = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><path d="M12 6V6.1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 12V12.1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 18V18.1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>;
const ForwardRef = forwardRef(SvgEllipsis);
export default withVectorEffect(ForwardRef);