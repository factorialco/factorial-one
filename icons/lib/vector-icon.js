import { createElement, forwardRef, useEffect, useImperativeHandle, useRef, } from "react";
export const withVectorEffect = (WrappedComponent) => {
    return forwardRef((props, ref) => {
        const innerRef = useRef(null);
        useImperativeHandle(ref, () => innerRef.current);
        useEffect(() => {
            const svg = innerRef.current;
            if (svg) {
                const elements = svg.querySelectorAll("path, line, rect, circle, ellipse");
                elements.forEach((el) => {
                    el.setAttribute("vector-effect", "non-scaling-stroke");
                });
            }
        }, []);
        return createElement(WrappedComponent, { ...props, ref: innerRef });
    });
};
