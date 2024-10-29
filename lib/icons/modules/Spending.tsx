import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSpending = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g fill="#fff" fillRule="evenodd" clipRule="evenodd" filter="url(#Spending_svg__a)"><path d="M4 7.556a2.667 2.667 0 0 1 2.667-2.667h8a2.667 2.667 0 0 1 2.666 2.667v1.777c0 .491-.398.89-.889.89H6.667A2.667 2.667 0 0 1 4 7.555m2.667-.89a.889.889 0 1 0 0 1.779h8.888v-.89a.89.89 0 0 0-.889-.888z" /><path d="M5.778 7.556H4v8a3.556 3.556 0 0 0 3.556 3.555h8.889A3.555 3.555 0 0 0 20 15.555V12a3.556 3.556 0 0 0-3.556-3.555H5.778zM16 15.11a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667" /></g><defs><filter id="Spending_svg__a" width={20.508} height={18.73} x={1.746} y={3.762} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy={1.127} /><feGaussianBlur stdDeviation={1.127} /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix values="0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_114" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_6_114" result="shape" /></filter></defs></svg>;
const ForwardRef = forwardRef(SvgSpending);
export default ForwardRef;