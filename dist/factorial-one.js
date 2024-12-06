import { u as w, L as B, c as f, I, F as R, a as M, C as l, b as E, P as x, f as V, d as A, A as _, B as F, e as S, g as j, h as D, V as X, i as O, X as T, j as G, k as q, l as z, M as U } from "./imageHandler-DoCpUY5P.js";
import { m as Le, E as we, n as Be, r as Ie, o as Re, q as Me, p as Ee } from "./imageHandler-DoCpUY5P.js";
import { jsxs as P, jsx as t } from "react/jsx-runtime";
import * as v from "react";
import { forwardRef as H, createContext as J, useRef as K, useState as Q } from "react";
const W = M("inline-flex flex-row items-center gap-1 text-base", {
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
}), Y = H(function({ className: r, children: o, variant: n, ...a }, u) {
  const { target: c } = a, s = c === "_blank", { isActive: i } = w();
  return /* @__PURE__ */ P(
    B,
    {
      ref: u,
      ...a,
      className: f(
        W({ variant: n, active: i(a.href) }),
        r
      ),
      children: [
        /* @__PURE__ */ t("span", { children: o }),
        s && /* @__PURE__ */ t(I, { icon: R, size: "sm" })
      ]
    }
  );
}), me = l(
  {
    name: "Link",
    type: "info"
  },
  Y
);
var m = "Progress", h = 100, [Z, he] = E(m), [ee, re] = Z(m), C = v.forwardRef(
  (e, r) => {
    const {
      __scopeProgress: o,
      value: n = null,
      max: a,
      getValueLabel: u = ae,
      ...c
    } = e;
    (a || a === 0) && !p(a) && console.error(te(`${a}`, "Progress"));
    const s = p(a) ? a : h;
    n !== null && !g(n, s) && console.error(oe(`${n}`, "Progress"));
    const i = g(n, s) ? n : null, L = d(i) ? u(i, s) : void 0;
    return /* @__PURE__ */ t(ee, { scope: o, value: i, max: s, children: /* @__PURE__ */ t(
      x.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": d(i) ? i : void 0,
        "aria-valuetext": L,
        role: "progressbar",
        "data-state": b(i, s),
        "data-value": i ?? void 0,
        "data-max": s,
        ...c,
        ref: r
      }
    ) });
  }
);
C.displayName = m;
var y = "ProgressIndicator", N = v.forwardRef(
  (e, r) => {
    const { __scopeProgress: o, ...n } = e, a = re(y, o);
    return /* @__PURE__ */ t(
      x.div,
      {
        "data-state": b(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...n,
        ref: r
      }
    );
  }
);
N.displayName = y;
function ae(e, r) {
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
function g(e, r) {
  return d(e) && !isNaN(e) && e <= r && e >= 0;
}
function te(e, r) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${h}\`.`;
}
function oe(e, r) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${h} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var $ = C, ne = N;
const k = v.forwardRef(({ className: e, value: r, ...o }, n) => /* @__PURE__ */ t(
  $,
  {
    ref: n,
    className: f(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...o,
    children: /* @__PURE__ */ t(
      ne,
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
k.displayName = $.displayName;
const se = ({ value: e, max: r = 100, label: o, color: n }, a) => {
  const u = n || A(0), c = e / r * 100;
  return /* @__PURE__ */ P("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ t("div", { className: "flex-grow", children: /* @__PURE__ */ t(
      k,
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
    o && /* @__PURE__ */ t("div", { className: "flex-shrink-0 text-sm font-medium", children: o })
  ] });
}, ie = V(se), pe = l(
  {
    name: "AreaChart",
    type: "info"
  },
  _
), ge = l(
  {
    name: "BarChart",
    type: "info"
  },
  F
), xe = l(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  S
), Pe = l(
  {
    name: "LineChart",
    type: "info"
  },
  j
), Ce = l(
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
), Ne = l(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ie
), le = J(
  null
), ce = ({ children: e, fullScreen: r = !0 }) => {
  const o = K(null), [n, a] = Q(o.current);
  return z(() => {
    a(o.current);
  }, []), /* @__PURE__ */ t(le.Provider, { value: { element: n }, children: /* @__PURE__ */ t(
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
}, ue = ({
  children: e
}) => /* @__PURE__ */ t(U, { reducedMotion: "user", children: e }), be = ({ children: e, layout: r, link: o, privacyModeInitiallyEnabled: n, image: a }) => /* @__PURE__ */ t(ue, { children: /* @__PURE__ */ t(O, { ...o, children: /* @__PURE__ */ t(ce, { ...r, children: /* @__PURE__ */ t(T, { children: /* @__PURE__ */ t(G, { initiallyEnabled: n, children: /* @__PURE__ */ t(q, { ...a, children: e }) }) }) }) }) });
export {
  pe as AreaChart,
  ge as BarChart,
  Le as Button,
  xe as CategoryBarChart,
  we as EmojiImage,
  be as FactorialOneProvider,
  Be as Icon,
  Pe as LineChart,
  me as Link,
  Ce as PieChart,
  G as PrivacyModeProvider,
  Ne as ProgressBarChart,
  ye as VerticalBarChart,
  Ie as getEmojiLabel,
  Re as usePrivacyMode,
  Me as useReducedMotion,
  Ee as useXRay
};
