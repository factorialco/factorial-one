import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgHeart = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><path d="M15.0625 6C12.875 6 12 7.5 12 7.5C12 7.5 11.125 6 8.9375 6C7.1875 6 5 7.71429 5 10.2857C5 14.5714 12 19 12 19C12 19 19 14.5714 19 10.2857C19 8.14286 17.25 6 15.0625 6Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(SvgHeart);
export default withVectorEffect(ForwardRef);