import { C as l, L as A, c as S, P as C, a as u, f as _, b as V, A as k, B as T, d as F, e as j, g as O, V as D, h as P, i as H, j as U, U as X, k as G, I as q, l as W, X as z, m as J, n as K, M as Q, u as Y } from "./imageHandler-Dvx9jI9c.js";
import { o as Fe, p as je, E as Oe, q as De, s as He, w as Ue, x as Xe, r as Ge, v as qe, t as We } from "./imageHandler-Dvx9jI9c.js";
import { jsx as r, jsxs as f } from "react/jsx-runtime";
import * as v from "react";
import Z, { forwardRef as N, useRef as b, useImperativeHandle as ee, Children as re, useState as ae, createContext as oe } from "react";
const be = l(
  {
    name: "Link",
    type: "info"
  },
  A
);
var p = "Progress", h = 100, [te, Le] = S(p), [se, le] = te(p), L = v.forwardRef(
  (e, a) => {
    const {
      __scopeProgress: t,
      value: o = null,
      max: s,
      getValueLabel: i = ne,
      ...n
    } = e;
    (s || s === 0) && !y(s) && console.error(ie(`${s}`, "Progress"));
    const c = y(s) ? s : h;
    o !== null && !x(o, c) && console.error(ce(`${o}`, "Progress"));
    const d = x(o, c) ? o : null, M = m(d) ? i(d, c) : void 0;
    return /* @__PURE__ */ r(se, { scope: t, value: d, max: c, children: /* @__PURE__ */ r(
      C.div,
      {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": m(d) ? d : void 0,
        "aria-valuetext": M,
        role: "progressbar",
        "data-state": R(d, c),
        "data-value": d ?? void 0,
        "data-max": c,
        ...n,
        ref: a
      }
    ) });
  }
);
L.displayName = p;
var w = "ProgressIndicator", $ = v.forwardRef(
  (e, a) => {
    const { __scopeProgress: t, ...o } = e, s = le(w, t);
    return /* @__PURE__ */ r(
      C.div,
      {
        "data-state": R(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: a
      }
    );
  }
);
$.displayName = w;
function ne(e, a) {
  return `${Math.round(e / a * 100)}%`;
}
function R(e, a) {
  return e == null ? "indeterminate" : e === a ? "complete" : "loading";
}
function m(e) {
  return typeof e == "number";
}
function y(e) {
  return m(e) && !isNaN(e) && e > 0;
}
function x(e, a) {
  return m(e) && !isNaN(e) && e <= a && e >= 0;
}
function ie(e, a) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${h}\`.`;
}
function ce(e, a) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${h} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var B = L, de = $;
const I = v.forwardRef(({ className: e, value: a, ...t }, o) => /* @__PURE__ */ r(
  B,
  {
    ref: o,
    className: u(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(
      de,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: t.color,
          transform: `translateX(-${100 - (a || 0)}%)`
        }
      }
    )
  }
));
I.displayName = B.displayName;
const ue = ({ value: e, max: a = 100, label: t, color: o }, s) => {
  const i = o || V(0), n = e / a * 100;
  return /* @__PURE__ */ f("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ r("div", { className: "flex-grow", children: /* @__PURE__ */ r(
      I,
      {
        color: i,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": a,
        "aria-valuenow": e,
        "aria-label": `${n.toFixed(1)}%`
      }
    ) }),
    t && /* @__PURE__ */ r("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, fe = _(ue), we = l(
  {
    name: "AreaChart",
    type: "info"
  },
  k
), $e = l(
  {
    name: "BarChart",
    type: "info"
  },
  T
), Re = l(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  F
), Be = l(
  {
    name: "LineChart",
    type: "info"
  },
  j
), Ie = l(
  {
    name: "PieChart",
    type: "info"
  },
  O
), Ee = l(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  D
), Me = l(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  fe
), me = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ve = N(function({ widgets: a, children: t }, o) {
  const s = b(null);
  ee(o, () => s.current);
  const i = re.toArray(a).filter((n) => !!n).map((n, c) => /* @__PURE__ */ r("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, c));
  return /* @__PURE__ */ r(P, { layout: "home", children: /* @__PURE__ */ f("div", { ref: s, className: "@container", children: [
    /* @__PURE__ */ f("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ r(H, { columns: me, showArrows: !1, children: i }),
      /* @__PURE__ */ r("main", { children: t })
    ] }),
    /* @__PURE__ */ f("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ r("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: i.slice(0, 3) }),
      /* @__PURE__ */ r("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ r("div", { className: "flex flex-1 flex-col gap-5", children: i.slice(3) })
    ] })
  ] }) });
}), pe = N(
  function({ children: a, sideContent: t, mainColumnPosition: o = "left" }, s) {
    return /* @__PURE__ */ r("div", { ref: s, className: "h-full overflow-auto", children: /* @__PURE__ */ f(
      "div",
      {
        className: u(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          o === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          o === "right" && /* @__PURE__ */ r(g, { children: t }),
          /* @__PURE__ */ r(
            "main",
            {
              className: u(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                o === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: a
            }
          ),
          o === "left" && /* @__PURE__ */ r(g, { children: t })
        ]
      }
    ) });
  }
), g = ({ children: e }) => /* @__PURE__ */ r("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: e }), he = U({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), E = Z.forwardRef(({ children: e, variant: a, className: t, ...o }, s) => /* @__PURE__ */ r(P, { layout: "standard", children: /* @__PURE__ */ r(
  "section",
  {
    ref: s,
    className: u("relative flex-1 overflow-auto", t),
    ...o,
    children: /* @__PURE__ */ r("div", { className: u(he({ variant: a })), children: e })
  }
) }));
E.displayName = "StandardLayout";
const Ae = l(
  {
    name: "StandardLayout",
    type: "layout"
  },
  E
), Se = l(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  pe
), _e = l(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ve
), ye = oe(
  null
), xe = ({ children: e, fullScreen: a = !0 }) => {
  const t = b(null), [o, s] = ae(t.current);
  return Y(() => {
    s(t.current);
  }, []), /* @__PURE__ */ r(ye.Provider, { value: { element: o }, children: /* @__PURE__ */ r(
    "div",
    {
      ref: t,
      id: "factorial-one-layout",
      className: u({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": a
      }),
      children: e
    }
  ) });
}, ge = ({
  children: e
}) => /* @__PURE__ */ r(Q, { reducedMotion: "user", children: e }), Ve = ({
  children: e,
  layout: a,
  link: t,
  privacyModeInitiallyEnabled: o,
  image: s,
  i18n: i,
  l10n: n
}) => /* @__PURE__ */ r(ge, { children: /* @__PURE__ */ r(X, { children: /* @__PURE__ */ r(G, { ...n, children: /* @__PURE__ */ r(q, { ...i, children: /* @__PURE__ */ r(W, { ...t, children: /* @__PURE__ */ r(xe, { ...a, children: /* @__PURE__ */ r(z, { children: /* @__PURE__ */ r(
  J,
  {
    initiallyEnabled: o,
    children: /* @__PURE__ */ r(K, { ...s, children: e })
  }
) }) }) }) }) }) }) });
export {
  we as AreaChart,
  $e as BarChart,
  Fe as Button,
  Re as CategoryBarChart,
  je as CopyButton,
  Oe as EmojiImage,
  Ve as FactorialOneProvider,
  _e as HomeLayout,
  De as Icon,
  Be as LineChart,
  be as Link,
  Ie as PieChart,
  J as PrivacyModeProvider,
  Me as ProgressBarChart,
  Ae as StandardLayout,
  Se as TwoColumnLayout,
  Ee as VerticalBarChart,
  He as buildTranslations,
  Ue as getEmojiLabel,
  Xe as useEmojiConfetti,
  Ge as usePrivacyMode,
  qe as useReducedMotion,
  We as useXRay
};
