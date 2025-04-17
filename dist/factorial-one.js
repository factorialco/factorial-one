import { C as s, L as I, c as E, P as g, a as P, f as M, b as R, A as w, B as V, d as k, e as A, g as _, V as F, U as j, I as S, h as D, X, i as O, j as T, M as U, u as G } from "./imageHandler-DcxyVPlx.js";
import { k as $e, E as Le, l as Be, n as Ie, q as Ee, r as Me, m as Re, p as we, o as Ve } from "./imageHandler-DcxyVPlx.js";
import { jsx as a, jsxs as q } from "react/jsx-runtime";
import * as f from "react";
import { createContext as C, useRef as z, useState as H } from "react";
const fe = s(
  {
    name: "Link",
    type: "info"
  },
  I
);
var m = "Progress", v = 100, [J, me] = E(m), [K, Q] = J(m), x = f.forwardRef(
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
    const l = h(n, i) ? n : null, B = d(l) ? u(l, i) : void 0;
    return /* @__PURE__ */ a(K, { scope: t, value: l, max: i, children: /* @__PURE__ */ a(
      g.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": d(l) ? l : void 0,
        "aria-valuetext": B,
        role: "progressbar",
        "data-state": N(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...c,
        ref: r
      }
    ) });
  }
);
x.displayName = m;
var y = "ProgressIndicator", b = f.forwardRef(
  (e, r) => {
    const { __scopeProgress: t, ...n } = e, o = Q(y, t);
    return /* @__PURE__ */ a(
      g.div,
      {
        "data-state": N(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...n,
        ref: r
      }
    );
  }
);
b.displayName = y;
function W(e, r) {
  return `${Math.round(e / r * 100)}%`;
}
function N(e, r) {
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
var $ = x, ee = b;
const L = f.forwardRef(({ className: e, value: r, ...t }, n) => /* @__PURE__ */ a(
  $,
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
L.displayName = $.displayName;
const re = ({ value: e, max: r = 100, label: t, color: n }, o) => {
  const u = n || R(0), c = e / r * 100;
  return /* @__PURE__ */ q("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ a("div", { className: "flex-grow", children: /* @__PURE__ */ a(
      L,
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
}, ae = M(re), ve = s(
  {
    name: "AreaChart",
    type: "info"
  },
  w
), pe = s(
  {
    name: "BarChart",
    type: "info"
  },
  V
), he = s(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  k
), ge = s(
  {
    name: "LineChart",
    type: "info"
  },
  A
), Pe = s(
  {
    name: "PieChart",
    type: "info"
  },
  _
), Ce = s(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  F
), xe = s(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ae
), oe = {
  locale: "en"
}, te = C(oe);
function ne({
  children: e,
  l10n: r
}) {
  return /* @__PURE__ */ a(te.Provider, { value: r, children: e });
}
const se = C(
  null
), ie = ({ children: e, fullScreen: r = !0 }) => {
  const t = z(null), [n, o] = H(t.current);
  return G(() => {
    o(t.current);
  }, []), /* @__PURE__ */ a(se.Provider, { value: { element: n }, children: /* @__PURE__ */ a(
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
}, le = ({
  children: e
}) => /* @__PURE__ */ a(U, { reducedMotion: "user", children: e }), ye = ({
  children: e,
  layout: r,
  link: t,
  privacyModeInitiallyEnabled: n,
  image: o,
  i18n: u,
  l10n: c
}) => /* @__PURE__ */ a(le, { children: /* @__PURE__ */ a(j, { children: /* @__PURE__ */ a(ne, { ...c, children: /* @__PURE__ */ a(S, { ...u, children: /* @__PURE__ */ a(D, { ...t, children: /* @__PURE__ */ a(ie, { ...r, children: /* @__PURE__ */ a(X, { children: /* @__PURE__ */ a(
  O,
  {
    initiallyEnabled: n,
    children: /* @__PURE__ */ a(T, { ...o, children: e })
  }
) }) }) }) }) }) }) });
export {
  ve as AreaChart,
  pe as BarChart,
  $e as Button,
  he as CategoryBarChart,
  Le as EmojiImage,
  ye as FactorialOneProvider,
  Be as Icon,
  ge as LineChart,
  fe as Link,
  Pe as PieChart,
  O as PrivacyModeProvider,
  xe as ProgressBarChart,
  Ce as VerticalBarChart,
  Ie as buildTranslations,
  Ee as getEmojiLabel,
  Me as useEmojiConfetti,
  Re as usePrivacyMode,
  we as useReducedMotion,
  Ve as useXRay
};
