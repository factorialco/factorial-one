import { C as s, L as B, c as I, P as h, a as P, f as M, b as R, A as w, B as E, d as V, e as k, g as A, V as _, h as F, X as S, i as j, I as D, u as X, M as O } from "./imageHandler-Bw41VGPW.js";
import { j as Ce, E as xe, k as ye, o as Ne, l as be, n as $e, m as Le } from "./imageHandler-Bw41VGPW.js";
import { jsx as a, jsxs as T } from "react/jsx-runtime";
import * as m from "react";
import { createContext as G, useRef as U, useState as q } from "react";
const ie = s(
  {
    name: "Link",
    type: "info"
  },
  B
);
var f = "Progress", v = 100, [z, le] = I(f), [H, J] = z(f), C = m.forwardRef(
  (e, r) => {
    const {
      __scopeProgress: t,
      value: n = null,
      max: o,
      getValueLabel: d = K,
      ...c
    } = e;
    (o || o === 0) && !p(o) && console.error(Q(`${o}`, "Progress"));
    const i = p(o) ? o : v;
    n !== null && !g(n, i) && console.error(W(`${n}`, "Progress"));
    const l = g(n, i) ? n : null, L = u(l) ? d(l, i) : void 0;
    return /* @__PURE__ */ a(H, { scope: t, value: l, max: i, children: /* @__PURE__ */ a(
      h.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": u(l) ? l : void 0,
        "aria-valuetext": L,
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
C.displayName = f;
var x = "ProgressIndicator", y = m.forwardRef(
  (e, r) => {
    const { __scopeProgress: t, ...n } = e, o = J(x, t);
    return /* @__PURE__ */ a(
      h.div,
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
y.displayName = x;
function K(e, r) {
  return `${Math.round(e / r * 100)}%`;
}
function N(e, r) {
  return e == null ? "indeterminate" : e === r ? "complete" : "loading";
}
function u(e) {
  return typeof e == "number";
}
function p(e) {
  return u(e) && !isNaN(e) && e > 0;
}
function g(e, r) {
  return u(e) && !isNaN(e) && e <= r && e >= 0;
}
function Q(e, r) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v}\`.`;
}
function W(e, r) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var b = C, Y = y;
const $ = m.forwardRef(({ className: e, value: r, ...t }, n) => /* @__PURE__ */ a(
  b,
  {
    ref: n,
    className: P(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(
      Y,
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
$.displayName = b.displayName;
const Z = ({ value: e, max: r = 100, label: t, color: n }, o) => {
  const d = n || R(0), c = e / r * 100;
  return /* @__PURE__ */ T("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ a("div", { className: "flex-grow", children: /* @__PURE__ */ a(
      $,
      {
        color: d,
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
}, ee = M(Z), ce = s(
  {
    name: "AreaChart",
    type: "info"
  },
  w
), ue = s(
  {
    name: "BarChart",
    type: "info"
  },
  E
), de = s(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  V
), me = s(
  {
    name: "LineChart",
    type: "info"
  },
  k
), fe = s(
  {
    name: "PieChart",
    type: "info"
  },
  A
), ve = s(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  _
), pe = s(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ee
), re = G(
  null
), ae = ({ children: e, fullScreen: r = !0 }) => {
  const t = U(null), [n, o] = q(t.current);
  return X(() => {
    o(t.current);
  }, []), /* @__PURE__ */ a(re.Provider, { value: { element: n }, children: /* @__PURE__ */ a(
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
}, oe = ({
  children: e
}) => /* @__PURE__ */ a(O, { reducedMotion: "user", children: e }), ge = ({ children: e, layout: r, link: t, privacyModeInitiallyEnabled: n, image: o }) => /* @__PURE__ */ a(oe, { children: /* @__PURE__ */ a(F, { ...t, children: /* @__PURE__ */ a(ae, { ...r, children: /* @__PURE__ */ a(S, { children: /* @__PURE__ */ a(j, { initiallyEnabled: n, children: /* @__PURE__ */ a(D, { ...o, children: e }) }) }) }) }) });
export {
  ce as AreaChart,
  ue as BarChart,
  Ce as Button,
  de as CategoryBarChart,
  xe as EmojiImage,
  ge as FactorialOneProvider,
  ye as Icon,
  me as LineChart,
  ie as Link,
  fe as PieChart,
  j as PrivacyModeProvider,
  pe as ProgressBarChart,
  ve as VerticalBarChart,
  Ne as getEmojiLabel,
  be as usePrivacyMode,
  $e as useReducedMotion,
  Le as useXRay
};
