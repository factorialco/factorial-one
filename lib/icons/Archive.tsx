import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgArchive = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><path d="M4 9V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V9C20 9.55228 19.5523 10 19 10H5C4.44772 10 4 9.55228 4 9Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M5 15V10H19V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M14 14H10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(SvgArchive);
export default withVectorEffect(ForwardRef);