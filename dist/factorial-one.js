import { jsxs as u, jsx as e } from "react/jsx-runtime";
import { forwardRef as C, createContext as d, useRef as v, useState as x } from "react";
import { useIsomorphicLayoutEffect as y } from "usehooks-ts";
import { u as k, L as p, c as s, I as c, F as L, C as t, A as B, B as g, a as P, b as $, P as I, V, X as b, d as A, e as R } from "./index-BANSVCoN.js";
import { h as Y, g as Z, f as ee } from "./index-BANSVCoN.js";
import { cva as w } from "class-variance-authority";
const F = w("inline-flex flex-row items-center gap-1 text-base", {
  variants: {
    variant: {
      text: "text-inherit no-underline",
      link: "text-f1-link underline visited:text-f1-link hover:text-f1-link active:text-f1-link"
    },
    active: {
      true: "",
      false: ""
    }
  },
  defaultVariants: {
    variant: "link"
  }
}), N = C(function({ className: r, children: a, variant: n, ...i }, l) {
  const { target: f } = i, h = f === "_blank", { isActive: m } = k();
  return /* @__PURE__ */ u(
    p,
    {
      ref: l,
      ...i,
      className: s(
        F({ variant: n, active: m(i.href) }),
        r
      ),
      children: [
        /* @__PURE__ */ e("span", { children: a }),
        h && /* @__PURE__ */ e(c, { icon: L, size: "sm" })
      ]
    }
  );
}), q = t(
  {
    name: "Link",
    type: "info"
  },
  N
), D = t(
  {
    name: "AreaChart",
    type: "info"
  },
  B
), G = t(
  {
    name: "BarChart",
    type: "info"
  },
  g
), H = t(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  P
), J = t(
  {
    name: "LineChart",
    type: "info"
  },
  $
), K = t(
  {
    name: "PieChart",
    type: "info"
  },
  I
), M = t(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  V
), Q = t(
  {
    name: "Icon",
    type: "info"
  },
  c
), X = d(
  null
), j = ({ children: o, fullScreen: r = !0 }) => {
  const a = v(null), [n, i] = x(a.current);
  return y(() => {
    i(a.current);
  }, []), /* @__PURE__ */ e(X.Provider, { value: { element: n }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      id: "factorial-one-layout",
      className: s({
        "flex h-screen w-screen flex-col bg-f1-background-tertiary": r
      }),
      children: o
    }
  ) });
}, T = ({ children: o, layout: r, link: a, image: n }) => /* @__PURE__ */ e(j, { ...r, children: /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(A, { ...a, children: /* @__PURE__ */ e(R, { ...n, children: o }) }) }) });
export {
  D as AreaChart,
  Y as Badge,
  G as BarChart,
  Z as Button,
  H as CategoryBarChart,
  T as FactorialOneProvider,
  Q as Icon,
  J as LineChart,
  q as Link,
  K as PieChart,
  M as VerticalBarChart,
  ee as useXRay
};
