import { C as s, L as B, c as I, P as g, a as P, f as E, b as M, A as R, B as w, d as V, e as k, g as A, V as _, U as F, h as j, I as S, i as D, X, j as O, k as T, M as U, u as G } from "./imageHandler-BRBJrF8X.js";
import { l as be, E as Ne, m as $e, o as Le, r as Be, s as Ie, n as Ee, q as Me, p as Re } from "./imageHandler-BRBJrF8X.js";
import { jsx as a, jsxs as q } from "react/jsx-runtime";
import * as m from "react";
import { useRef as z, useState as H, createContext as J } from "react";
const ue = s(
  {
    name: "Link",
    type: "info"
  },
  B
);
var f = "Progress", v = 100, [K, de] = I(f), [Q, W] = K(f), C = m.forwardRef(
  (e, r) => {
    const {
      __scopeProgress: t,
      value: n = null,
      max: o,
      getValueLabel: u = Y,
      ...c
    } = e;
    (o || o === 0) && !p(o) && console.error(Z(`${o}`, "Progress"));
    const i = p(o) ? o : v;
    n !== null && !h(n, i) && console.error(ee(`${n}`, "Progress"));
    const l = h(n, i) ? n : null, L = d(l) ? u(l, i) : void 0;
    return /* @__PURE__ */ a(Q, { scope: t, value: l, max: i, children: /* @__PURE__ */ a(
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
C.displayName = f;
var x = "ProgressIndicator", y = m.forwardRef(
  (e, r) => {
    const { __scopeProgress: t, ...n } = e, o = W(x, t);
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
function Y(e, r) {
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
function Z(e, r) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v}\`.`;
}
function ee(e, r) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var N = C, re = y;
const $ = m.forwardRef(({ className: e, value: r, ...t }, n) => /* @__PURE__ */ a(
  N,
  {
    ref: n,
    className: P(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(
      re,
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
const ae = ({ value: e, max: r = 100, label: t, color: n }, o) => {
  const u = n || M(0), c = e / r * 100;
  return /* @__PURE__ */ q("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
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
}, oe = E(ae), me = s(
  {
    name: "AreaChart",
    type: "info"
  },
  R
), fe = s(
  {
    name: "BarChart",
    type: "info"
  },
  w
), ve = s(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  V
), pe = s(
  {
    name: "LineChart",
    type: "info"
  },
  k
), he = s(
  {
    name: "PieChart",
    type: "info"
  },
  A
), ge = s(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  _
), Pe = s(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  oe
), te = J(
  null
), ne = ({ children: e, fullScreen: r = !0 }) => {
  const t = z(null), [n, o] = H(t.current);
  return G(() => {
    o(t.current);
  }, []), /* @__PURE__ */ a(te.Provider, { value: { element: n }, children: /* @__PURE__ */ a(
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
}, se = ({
  children: e
}) => /* @__PURE__ */ a(U, { reducedMotion: "user", children: e }), Ce = ({
  children: e,
  layout: r,
  link: t,
  privacyModeInitiallyEnabled: n,
  image: o,
  i18n: u,
  l10n: c
}) => /* @__PURE__ */ a(se, { children: /* @__PURE__ */ a(F, { children: /* @__PURE__ */ a(j, { ...c, children: /* @__PURE__ */ a(S, { ...u, children: /* @__PURE__ */ a(D, { ...t, children: /* @__PURE__ */ a(ne, { ...r, children: /* @__PURE__ */ a(X, { children: /* @__PURE__ */ a(
  O,
  {
    initiallyEnabled: n,
    children: /* @__PURE__ */ a(T, { ...o, children: e })
  }
) }) }) }) }) }) }) });
export {
  me as AreaChart,
  fe as BarChart,
  be as Button,
  ve as CategoryBarChart,
  Ne as EmojiImage,
  Ce as FactorialOneProvider,
  $e as Icon,
  pe as LineChart,
  ue as Link,
  he as PieChart,
  O as PrivacyModeProvider,
  Pe as ProgressBarChart,
  ge as VerticalBarChart,
  Le as buildTranslations,
  Be as getEmojiLabel,
  Ie as useEmojiConfetti,
  Ee as usePrivacyMode,
  Me as useReducedMotion,
  Re as useXRay
};
