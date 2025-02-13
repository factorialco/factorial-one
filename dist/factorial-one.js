import { C as s, L as B, c as I, P as g, a as P, f as M, b as R, A as w, B as E, d as V, e as k, g as A, V as _, U as F, I as S, h as j, X as D, i as X, j as O, u as T, M as U } from "./imageHandler-zqs3QfYW.js";
import { k as ye, E as be, l as Ne, m as $e, q as Le, n as Be, p as Ie, o as Me } from "./imageHandler-zqs3QfYW.js";
import { jsx as a, jsxs as G } from "react/jsx-runtime";
import * as f from "react";
import { createContext as q, useRef as z, useState as H } from "react";
const ue = s(
  {
    name: "Link",
    type: "info"
  },
  B
);
var m = "Progress", v = 100, [J, ce] = I(m), [K, Q] = J(m), C = f.forwardRef(
  (e, r) => {
    const {
      __scopeProgress: t,
      value: n = null,
      max: o,
      getValueLabel: u = W,
      ...c
    } = e;
    (o || o === 0) && !p(o) && console.error(Y(`${o}`, "Progress"));
    const i = p(o) ? o : v;
    n !== null && !h(n, i) && console.error(Z(`${n}`, "Progress"));
    const l = h(n, i) ? n : null, L = d(l) ? u(l, i) : void 0;
    return /* @__PURE__ */ a(K, { scope: t, value: l, max: i, children: /* @__PURE__ */ a(
      g.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": d(l) ? l : void 0,
        "aria-valuetext": L,
        role: "progressbar",
        "data-state": b(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...c,
        ref: r
      }
    ) });
  }
);
C.displayName = m;
var x = "ProgressIndicator", y = f.forwardRef(
  (e, r) => {
    const { __scopeProgress: t, ...n } = e, o = Q(x, t);
    return /* @__PURE__ */ a(
      g.div,
      {
        "data-state": b(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...n,
        ref: r
      }
    );
  }
);
y.displayName = x;
function W(e, r) {
  return `${Math.round(e / r * 100)}%`;
}
function b(e, r) {
  return e == null ? "indeterminate" : e === r ? "complete" : "loading";
}
function d(e) {
  return typeof e == "number";
}
function p(e) {
  return d(e) && !isNaN(e) && e > 0;
}
function h(e, r) {
  return d(e) && !isNaN(e) && e <= r && e >= 0;
}
function Y(e, r) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v}\`.`;
}
function Z(e, r) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var N = C, ee = y;
const $ = f.forwardRef(({ className: e, value: r, ...t }, n) => /* @__PURE__ */ a(
  N,
  {
    ref: n,
    className: P(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(
      ee,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: t.color,
          transform: `translateX(-${100 - (r || 0)}%)`
        }
      }
    )
  }
));
$.displayName = N.displayName;
const re = ({ value: e, max: r = 100, label: t, color: n }, o) => {
  const u = n || R(0), c = e / r * 100;
  return /* @__PURE__ */ G("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ a("div", { className: "flex-grow", children: /* @__PURE__ */ a(
      $,
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
    t && /* @__PURE__ */ a("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, ae = M(re), de = s(
  {
    name: "AreaChart",
    type: "info"
  },
  w
), fe = s(
  {
    name: "BarChart",
    type: "info"
  },
  E
), me = s(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  V
), ve = s(
  {
    name: "LineChart",
    type: "info"
  },
  k
), pe = s(
  {
    name: "PieChart",
    type: "info"
  },
  A
), he = s(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  _
), ge = s(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ae
), oe = q(
  null
), te = ({ children: e, fullScreen: r = !0 }) => {
  const t = z(null), [n, o] = H(t.current);
  return T(() => {
    o(t.current);
  }, []), /* @__PURE__ */ a(oe.Provider, { value: { element: n }, children: /* @__PURE__ */ a(
    "div",
    {
      ref: t,
      id: "factorial-one-layout",
      className: P({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: e
    }
  ) });
}, ne = ({
  children: e
}) => /* @__PURE__ */ a(U, { reducedMotion: "user", children: e }), Pe = ({ children: e, layout: r, link: t, privacyModeInitiallyEnabled: n, image: o, i18n: u }) => /* @__PURE__ */ a(ne, { children: /* @__PURE__ */ a(F, { children: /* @__PURE__ */ a(S, { ...u, children: /* @__PURE__ */ a(j, { ...t, children: /* @__PURE__ */ a(te, { ...r, children: /* @__PURE__ */ a(D, { children: /* @__PURE__ */ a(
  X,
  {
    initiallyEnabled: n,
    children: /* @__PURE__ */ a(O, { ...o, children: e })
  }
) }) }) }) }) }) });
export {
  de as AreaChart,
  fe as BarChart,
  ye as Button,
  me as CategoryBarChart,
  be as EmojiImage,
  Pe as FactorialOneProvider,
  Ne as Icon,
  ve as LineChart,
  ue as Link,
  pe as PieChart,
  X as PrivacyModeProvider,
  ge as ProgressBarChart,
  he as VerticalBarChart,
  $e as buildTranslations,
  Le as getEmojiLabel,
  Be as usePrivacyMode,
  Ie as useReducedMotion,
  Me as useXRay
};
