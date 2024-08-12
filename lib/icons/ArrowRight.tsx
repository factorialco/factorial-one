import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(SvgArrowRight);
export default withVectorEffect(ForwardRef);