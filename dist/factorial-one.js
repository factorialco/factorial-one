import { u as h, L as C, c as s, I as c, F as m, a as v, C as t, A as y, B as x, b as k, d as P, P as p, V as L, e as g, X as B, f as $, g as M, h as b, M as I } from "./privacyMode-DrXyCJTX.js";
import { j as Z, i as ee, k as te, m as ae, l as re } from "./privacyMode-DrXyCJTX.js";
import { jsxs as R, jsx as e } from "react/jsx-runtime";
import { forwardRef as V, createContext as A, useRef as w, useState as j } from "react";
const E = v("inline-flex flex-row items-center gap-1 text-base", {
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
}), F = V(function({ className: i, children: a, variant: o, ...r }, l) {
  const { target: f } = r, d = f === "_blank", { isActive: u } = h();
  return /* @__PURE__ */ R(
    C,
    {
      ref: l,
      ...r,
      className: s(
        E({ variant: o, active: u(r.href) }),
        i
      ),
      children: [
        /* @__PURE__ */ e("span", { children: a }),
        d && /* @__PURE__ */ e(c, { icon: m, size: "sm" })
      ]
    }
  );
}), q = t(
  {
    name: "Link",
    type: "info"
  },
  F
), D = t(
  {
    name: "AreaChart",
    type: "info"
  },
  y
), G = t(
  {
    name: "BarChart",
    type: "info"
  },
  x
), H = t(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  k
), J = t(
  {
    name: "LineChart",
    type: "info"
  },
  P
), K = t(
  {
    name: "PieChart",
    type: "info"
  },
  p
), Q = t(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  L
), T = t(
  {
    name: "Icon",
    type: "info"
  },
  c
), N = A(
  null
), X = ({ children: n, fullScreen: i = !0 }) => {
  const a = w(null), [o, r] = j(a.current);
  return b(() => {
    r(a.current);
  }, []), /* @__PURE__ */ e(N.Provider, { value: { element: o }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      id: "factorial-one-layout",
      className: s({
        "flex h-screen w-screen flex-col bg-f1-background-tertiary": i
      }),
      children: n
    }
  ) });
}, z = ({
  children: n
}) => /* @__PURE__ */ e(I, { reducedMotion: "user", children: n }), U = ({ children: n, layout: i, link: a, privacyModeInitiallyEnabled: o, image: r }) => /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(g, { ...a, children: /* @__PURE__ */ e(X, { ...i, children: /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e($, { initiallyEnabled: o, children: /* @__PURE__ */ e(M, { ...r, children: n }) }) }) }) }) });
export {
  D as AreaChart,
  Z as Badge,
  G as BarChart,
  ee as Button,
  H as CategoryBarChart,
  U as FactorialOneProvider,
  T as Icon,
  J as LineChart,
  q as Link,
  K as PieChart,
  $ as PrivacyModeProvider,
  Q as VerticalBarChart,
  te as usePrivacyMode,
  ae as useReducedMotion,
  re as useXRay
};
