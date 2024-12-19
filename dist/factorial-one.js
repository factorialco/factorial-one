import { u as M, L as B, c as f, I as E, a as I, C as l, b as R, P as C, f as V, d as A, A as _, B as F, e as j, g as S, h as D, V as X, i as O, X as H, j as T, k as G, l as q, M as z } from "./imageHandler-FYVnLwtL.js";
import { m as $e, E as Me, n as Be, r as Ee, o as Ie, q as Re, p as Ve } from "./imageHandler-FYVnLwtL.js";
import { jsxs as v, jsx as a } from "react/jsx-runtime";
import * as m from "react";
import { forwardRef as P, createContext as U, useRef as J, useState as K } from "react";
const Q = (e, r) => /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: r, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12.5 11.5L20 4M20 4H15.5M20 4V8.5", vectorEffect: "non-scaling-stroke" })
] }), W = P(Q), Y = I("inline-flex flex-row items-center gap-1 text-base", {
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
}), Z = P(function({ className: r, children: o, variant: n, ...t }, u) {
  const { target: c } = t, s = c === "_blank", { isActive: i } = M();
  return /* @__PURE__ */ v(
    B,
    {
      ref: u,
      ...t,
      className: f(
        Y({ variant: n, active: i(t.href) }),
        r
      ),
      children: [
        /* @__PURE__ */ a("span", { children: o }),
        s && /* @__PURE__ */ a(E, { icon: W, size: "sm" })
      ]
    }
  );
}), ge = l(
  {
    name: "Link",
    type: "info"
  },
  Z
);
var g = "Progress", p = 100, [ee, pe] = R(g), [re, ae] = ee(g), k = m.forwardRef(
  (e, r) => {
    const {
      __scopeProgress: o,
      value: n = null,
      max: t,
      getValueLabel: u = te,
      ...c
    } = e;
    (t || t === 0) && !h(t) && console.error(oe(`${t}`, "Progress"));
    const s = h(t) ? t : p;
    n !== null && !x(n, s) && console.error(ne(`${n}`, "Progress"));
    const i = x(n, s) ? n : null, $ = d(i) ? u(i, s) : void 0;
    return /* @__PURE__ */ a(re, { scope: o, value: i, max: s, children: /* @__PURE__ */ a(
      C.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": d(i) ? i : void 0,
        "aria-valuetext": $,
        role: "progressbar",
        "data-state": N(i, s),
        "data-value": i ?? void 0,
        "data-max": s,
        ...c,
        ref: r
      }
    ) });
  }
);
k.displayName = g;
var y = "ProgressIndicator", L = m.forwardRef(
  (e, r) => {
    const { __scopeProgress: o, ...n } = e, t = ae(y, o);
    return /* @__PURE__ */ a(
      C.div,
      {
        "data-state": N(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...n,
        ref: r
      }
    );
  }
);
L.displayName = y;
function te(e, r) {
  return `${Math.round(e / r * 100)}%`;
}
function N(e, r) {
  return e == null ? "indeterminate" : e === r ? "complete" : "loading";
}
function d(e) {
  return typeof e == "number";
}
function h(e) {
  return d(e) && !isNaN(e) && e > 0;
}
function x(e, r) {
  return d(e) && !isNaN(e) && e <= r && e >= 0;
}
function oe(e, r) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${p}\`.`;
}
function ne(e, r) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${p} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var b = k, se = L;
const w = m.forwardRef(({ className: e, value: r, ...o }, n) => /* @__PURE__ */ a(
  b,
  {
    ref: n,
    className: f(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...o,
    children: /* @__PURE__ */ a(
      se,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: o.color,
          transform: `translateX(-${100 - (r || 0)}%)`
        }
      }
    )
  }
));
w.displayName = b.displayName;
const ie = ({ value: e, max: r = 100, label: o, color: n }, t) => {
  const u = n || A(0), c = e / r * 100;
  return /* @__PURE__ */ v("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ a("div", { className: "flex-grow", children: /* @__PURE__ */ a(
      w,
      {
        color: u,
        value: c,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": e,
        "aria-label": `${c.toFixed(1)}%`
      }
    ) }),
    o && /* @__PURE__ */ a("div", { className: "flex-shrink-0 text-sm font-medium", children: o })
  ] });
}, le = V(ie), he = l(
  {
    name: "AreaChart",
    type: "info"
  },
  _
), xe = l(
  {
    name: "BarChart",
    type: "info"
  },
  F
), Ce = l(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  j
), Pe = l(
  {
    name: "LineChart",
    type: "info"
  },
  S
), ke = l(
  {
    name: "PieChart",
    type: "info"
  },
  D
), ye = l(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  X
), Le = l(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  le
), ce = U(
  null
), ue = ({ children: e, fullScreen: r = !0 }) => {
  const o = J(null), [n, t] = K(o.current);
  return q(() => {
    t(o.current);
  }, []), /* @__PURE__ */ a(ce.Provider, { value: { element: n }, children: /* @__PURE__ */ a(
    "div",
    {
      ref: o,
      id: "factorial-one-layout",
      className: f({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: e
    }
  ) });
}, de = ({
  children: e
}) => /* @__PURE__ */ a(z, { reducedMotion: "user", children: e }), Ne = ({ children: e, layout: r, link: o, privacyModeInitiallyEnabled: n, image: t }) => /* @__PURE__ */ a(de, { children: /* @__PURE__ */ a(O, { ...o, children: /* @__PURE__ */ a(ue, { ...r, children: /* @__PURE__ */ a(H, { children: /* @__PURE__ */ a(T, { initiallyEnabled: n, children: /* @__PURE__ */ a(G, { ...t, children: e }) }) }) }) }) });
export {
  he as AreaChart,
  xe as BarChart,
  $e as Button,
  Ce as CategoryBarChart,
  Me as EmojiImage,
  Ne as FactorialOneProvider,
  Be as Icon,
  Pe as LineChart,
  ge as Link,
  ke as PieChart,
  T as PrivacyModeProvider,
  Le as ProgressBarChart,
  ye as VerticalBarChart,
  Ee as getEmojiLabel,
  Ie as usePrivacyMode,
  Re as useReducedMotion,
  Ve as useXRay
};
